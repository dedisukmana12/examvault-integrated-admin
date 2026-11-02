// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import React, { useState, useEffect } from "react";
import { TeacherInput, CompleteDocumentPackage } from "./types";
import { CURRICULUM_DATABASE, PRESETS } from "./data/curriculumDatabase";
import { generateCompleteDocuments } from "./utils/engineGenerator";
import { Navbar, AppNavMode } from "./components/Navbar";
import { RegulationBanner } from "./components/RegulationBanner";
import { InputForm } from "./components/InputForm";
import { DocumentViewer } from "./components/DocumentViewer";
import { AssessmentGenerator } from "./components/AssessmentGenerator";
import { CollaborationHub } from "./components/CollaborationHub";
import confetti from "canvas-confetti";
import { CheckCircle, FileText, FileCheck2, Users, Sparkles, BookOpen, Layers } from "lucide-react";

const INITIAL_BLANK_INPUT: TeacherInput = {
  jalur: "Kemenag",
  namaSatuan: "MA Bojongjati",
  namaGuru: "Dewi Anggraini, S.Pd., M.Ed.",
  nipGuru: "198807152014022004",
  namaKepala: "Drs. H. Miftahudin, M.Pd.I.",
  nipKepala: "196805121994031004",
  namaWakil: "Edi Wahyu, S.Pd.",
  nipWakil: "198503122010011015",
  fase: "Fase F",
  kelas: "Kelas XII",
  mataPelajaran: "Bahasa Inggris",
  tahunAjaran: "2025/2026",
  kotaSatuan: "Cilacap",
  tanggalPengesahan: "14 Juli 2025",
  durasiMenitJP: 45,
  instansiInduk: "KEMENTERIAN AGAMA REPUBLIK INDONESIA",
  kantorWilayah: "KANTOR KEMENTERIAN AGAMA KABUPATEN CILACAP",
  alamatSatuan: "Jl. Raya Bojongjati No. 12, Bojongjati",
  kontakSatuan: "Email: kurikulum.ma.bojongjati@gmail.com",
};

const LOCAL_STORAGE_KEY = "kurikulum_app_input_v1";

export default function App() {
  const [input, setInput] = useState<TeacherInput>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...INITIAL_BLANK_INPUT,
          ...parsed,
          namaSatuan: parsed.namaSatuan || INITIAL_BLANK_INPUT.namaSatuan,
          namaGuru: parsed.namaGuru || INITIAL_BLANK_INPUT.namaGuru,
          namaKepala: parsed.namaKepala || INITIAL_BLANK_INPUT.namaKepala,
          namaWakil: parsed.namaWakil || INITIAL_BLANK_INPUT.namaWakil,
          nipWakil: parsed.nipWakil || INITIAL_BLANK_INPUT.nipWakil,
          mataPelajaran: parsed.mataPelajaran || "Bahasa Inggris",
          kelas: parsed.kelas || "Kelas XII",
          fase: parsed.fase || "Fase F",
        };
      }
    } catch (e) {
      console.error("Failed to parse saved input", e);
    }
    return INITIAL_BLANK_INPUT;
  });
  
  const [pkg, setPkg] = useState<CompleteDocumentPackage | null>(null);
  const [activeNavMode, setActiveNavMode] = useState<AppNavMode>("compiler");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSuccessBadge, setShowSuccessBadge] = useState(false);
  const [generationSource, setGenerationSource] = useState<"ai" | "local">("local");
  const [generationNote, setGenerationNote] = useState<string>("");
  const [isSynced, setIsSynced] = useState(true);

  useEffect(() => {
    try {
      setIsSynced(false);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(input));
      const timer = setTimeout(() => setIsSynced(true), 600);
      return () => clearTimeout(timer);
    } catch (e) {
      console.error("Failed to save input to local storage", e);
      setIsSynced(false);
    }
  }, [input]);

  // Generate initial package on mount
  useEffect(() => {
    const generated = generateCompleteDocuments(input);
    setPkg(generated);
  }, []);

  const handleReset = () => {
    setInput(INITIAL_BLANK_INPUT);
    const generated = generateCompleteDocuments(INITIAL_BLANK_INPUT);
    setPkg(generated);
    setShowSuccessBadge(false);
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setShowSuccessBadge(false);

    try {
      // 1. Ambil teks CP dari database lokal sebagai referensi AI
      const matchedDataset =
        CURRICULUM_DATABASE.find(
          (ds) =>
            ds.fase === input.fase &&
            (input.kelas ? ds.kelasDefault === input.kelas : true) &&
            (ds.mapel.toLowerCase().includes(input.mataPelajaran.toLowerCase().trim()) ||
              input.mataPelajaran.toLowerCase().includes(ds.mapel.toLowerCase().trim()))
        ) ||
        CURRICULUM_DATABASE.find(
          (ds) =>
            ds.fase === input.fase &&
            (ds.mapel.toLowerCase().includes(input.mataPelajaran.toLowerCase().trim()) ||
              input.mataPelajaran.toLowerCase().includes(ds.mapel.toLowerCase().trim()))
        ) ||
        CURRICULUM_DATABASE[0];

      // Format CP menjadi teks untuk dikirim ke AI
      const cpText = matchedDataset.elemenList
        .map((el) => `Elemen: ${el.namaElemen}\nCapaian: ${el.deskripsiCP}`)
        .join("\n\n");

      // 2. Buat prompt instruksi
      const prompt = `Bedah Capaian Pembelajaran (CP) berikut untuk Mata Pelajaran ${input.mataPelajaran}, ${input.fase}, Kelas ${input.kelas} menggunakan jalur regulasi ${input.jalur}.
      
Teks CP:
${cpText}

Buatlah 8 hingga 16 Tujuan Pembelajaran (TP) yang atomik, spesifik, dan terdistribusi untuk 1 tahun ajaran (Semester Ganjil dan Genap) sesuai Taksonomi Bloom (C1 - C6). Pastikan Anda memberikan "konteksPembelajaran" yang kaya (stimulus nyata, pertanyaan HOTS, dan langkah eksplorasi) untuk digunakan dalam modul ajar.`;

      // 3. Panggil API Gemini dengan penanganan aman
      let parsedTPs = undefined;

      try {
        const response = await fetch("/api/gemini/generate-curriculum", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt }),
        });

        if (response.ok) {
          const data = await response.json();
          if (data.success && data.text) {
            parsedTPs = JSON.parse(data.text);
            setGenerationSource("ai");
            setGenerationNote(
              `Disintesis cerdas via ${data.modelUsed || "Gemini Flash"} + Verifikasi Taksonomi Bloom (8-16 TP)`
            );
          } else {
            setGenerationSource("local");
            setGenerationNote(
              data.message || "Kompilasi Standar Nasional BSKAP No. 046/2025 & Permendikdasmen 13/2025"
            );
          }
        } else {
          setGenerationSource("local");
          setGenerationNote("Kompilasi Standar Nasional BSKAP No. 046/2025 & Permendikdasmen 13/2025");
        }
      } catch (fetchErr) {
        console.warn("Layanan AI dialihkan ke compiler lokal:", fetchErr);
        setGenerationSource("local");
        setGenerationNote("Kompilasi Standar Nasional BSKAP No. 046/2025 & Permendikdasmen 13/2025");
      }

      // 4. Bangun dokumen lengkap
      const generated = generateCompleteDocuments(input, parsedTPs);
      setPkg(generated);
      setShowSuccessBadge(true);

      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
      });

      setTimeout(() => setShowSuccessBadge(false), 5000);
    } catch (err: any) {
      console.error("Gagal menyintesis dokumen:", err);
      const generated = generateCompleteDocuments(input);
      setPkg(generated);
      setGenerationSource("local");
      setGenerationNote("Kompilasi Standar Nasional BSKAP No. 046/2025 Aktif");
      setShowSuccessBadge(true);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSelectJalur = (jalur: "Dinas" | "Kemenag") => {
    setInput((prev) => {
      const updated = {
        ...prev,
        jalur,
      };
      const generated = generateCompleteDocuments(updated);
      setPkg(generated);
      return updated;
    });
  };

  // Handler when teacher adapts a document from the Collaboration Hub
  const handleAdaptDocument = (adaptedInput: TeacherInput) => {
    setInput(adaptedInput);
    const generated = generateCompleteDocuments(adaptedInput);
    setPkg(generated);
    setActiveNavMode("compiler");
    setShowSuccessBadge(true);
    setGenerationSource("local");
    setGenerationNote(
      `Dokumen "${adaptedInput.mataPelajaran} (${adaptedInput.kelas})" dari Komunitas Berhasil Diadaptasi ke Lembar Kerja!`
    );
    confetti({
      particleCount: 45,
      spread: 70,
      origin: { y: 0.6 },
    });
    setTimeout(() => setShowSuccessBadge(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans text-[#1E293B]">
      {/* Navbar with Mode Switcher */}
      <Navbar
        isSynced={isSynced}
        activeMode={activeNavMode}
        onSelectMode={setActiveNavMode}
      />

      {/* Main Container */}
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex-1 space-y-6">
        {/* Banner Regulasi */}
        <div className="print:hidden">
          <RegulationBanner jalur={input.jalur} onSelectJalur={handleSelectJalur} />
        </div>

        {/* Success Toast */}
        {showSuccessBadge && (
          <div className="p-4 bg-emerald-600 text-white rounded-xl shadow-lg flex items-center justify-between gap-3 animate-in fade-in slide-in-from-top-4 print:hidden border border-emerald-500">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-sm">
                  {generationSource === "ai"
                    ? "Paket 9 Dokumen Berhasil Disintesis via AI Gemini!"
                    : "Paket 9 Dokumen Berhasil Disusun (Standar Resmi 2025/2026)!"}
                </p>
                <p className="text-xs text-emerald-100 font-medium">
                  {generationNote || "Konsistensi deterministik kode TP terkunci tanpa placeholder [...]."}
                </p>
              </div>
            </div>
            <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-md">
              Siap Cetak / Word
            </span>
          </div>
        )}

        {/* View Switcher Controls (Mobile & Quick Navigation) */}
        <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-2xs print:hidden flex items-center justify-between gap-2 overflow-x-auto">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveNavMode("compiler")}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeNavMode === "compiler"
                  ? "bg-[#0F172A] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>1. Administrasi 9 Dokumen</span>
            </button>

            <button
              onClick={() => setActiveNavMode("assessment")}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeNavMode === "assessment"
                  ? "bg-[#0F172A] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <FileCheck2 className="w-4 h-4 text-emerald-400" />
              <span>2. Pembuat Asesmen Terpadu (Bank Soal)</span>
            </button>

            <button
              onClick={() => setActiveNavMode("collaboration")}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeNavMode === "collaboration"
                  ? "bg-[#0F172A] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Users className="w-4 h-4 text-purple-400" />
              <span>3. Ruang Kolaborasi & Guru Berbagi</span>
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-[11px] text-slate-500 font-semibold px-2">
            <span>Mata Pelajaran Aktif:</span>
            <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-bold border border-blue-200">
              {input.mataPelajaran} ({input.kelas})
            </span>
          </div>
        </div>

        {/* =================================================================== */}
        {/* VIEW 1: COMPILER & DOCUMENT VIEWER (Default Pipeline) */}
        {/* =================================================================== */}
        {activeNavMode === "compiler" && (
          <div className="space-y-6">
            {/* Input Form Section */}
            <div className="print:hidden">
              <InputForm
                input={input}
                onChange={setInput}
                onGenerate={handleGenerate}
                onReset={handleReset}
                isGenerating={isGenerating}
              />
            </div>

            {/* Document Viewer Section */}
            {pkg && (
              <div className="mt-4">
                <DocumentViewer pkg={pkg} />
              </div>
            )}
          </div>
        )}

        {/* =================================================================== */}
        {/* VIEW 2: INTEGRATED ASSESSMENT GENERATOR (Dokumen 8 & 9) */}
        {/* =================================================================== */}
        {activeNavMode === "assessment" && (
          <div>
            {pkg ? (
              <AssessmentGenerator pkg={pkg} />
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-slate-200 p-8 space-y-3">
                <p className="text-sm font-bold text-slate-700">
                  Memuat data dokumen dan bank soal...
                </p>
              </div>
            )}
          </div>
        )}

        {/* =================================================================== */}
        {/* VIEW 3: COLLABORATION & TEACHER SHARING HUB */}
        {/* =================================================================== */}
        {activeNavMode === "collaboration" && (
          <div>
            <CollaborationHub
              currentInput={input}
              currentPkg={pkg}
              onAdaptDocument={handleAdaptDocument}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-12 print:hidden text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-1.5">
          <p className="font-bold text-slate-800 uppercase tracking-wide text-[11px]">
            Engine Otomatisasi Administrasi Guru & Bank Soal Terpadu (Regulasi Resmi 2025/2026)
          </p>
          <p className="text-slate-500 text-[11px]">
            Mematuhi Permendikdasmen No. 10 & 13 Tahun 2025, BSKAP No. 046 & 058/2025, KMA No. 1503 Tahun 2025, dan Kepdirjen Pendis No. 6077 Tahun 2025.
          </p>
        </div>
      </footer>
    </div>
  );
}
