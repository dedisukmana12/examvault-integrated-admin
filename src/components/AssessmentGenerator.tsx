// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import React, { useState, useMemo } from "react";
import {
  CompleteDocumentPackage,
  UnitPackage,
  Doc8KisiKisiItem,
  AssessmentConfig,
  AssessmentQuestionItem,
  GeneratedAssessmentPaper,
  DifficultyLevel,
  QuestionTypeFilter,
} from "../types";
import { KopSurat } from "./KopSurat";
import { SignatureBlock } from "./SignatureBlock";
import {
  FileCheck2,
  Sliders,
  CheckCircle2,
  Printer,
  Copy,
  RotateCcw,
  Sparkles,
  BookOpen,
  Filter,
  Layers,
  GraduationCap,
  Eye,
  EyeOff,
  Clock,
  HelpCircle,
  FileSpreadsheet,
  Check,
} from "lucide-react";

interface AssessmentGeneratorProps {
  pkg: CompleteDocumentPackage;
}

export const AssessmentGenerator: React.FC<AssessmentGeneratorProps> = ({ pkg }) => {
  // Extract all available TPs & Elements from pkg.units
  const allUnits = pkg.units || [];
  const uniqueElements = useMemo(() => {
    return Array.from(new Set(allUnits.map((u) => u.elemenCP)));
  }, [allUnits]);

  // Initial Config State
  const [config, setConfig] = useState<AssessmentConfig>({
    judulAsesmen: "Asesmen Sumatif Lingkup Materi (Harian / Modul Terpadu)",
    selectedTPs: allUnits.map((u) => u.kodeTP),
    selectedElements: uniqueElements,
    jumlahSoal: 10,
    tingkatKesulitan: "SEMUA",
    bentukSoal: "CAMPURAN",
    alokasiWaktuMenit: 60,
    petunjukUmum: [
      "Berdoalah sebelum mengerjakan soal sesuai keyakinan masing-masing.",
      "Tuliskan identitas nama, kelas, dan nomor absen pada lembar jawaban yang tersedia.",
      "Untuk soal Pilihan Ganda Kompleks (PGK), berilah tanda centang (✓) pada SEMUA pernyataan yang bernilai BENAR (jawaban benar lebih dari satu).",
      "Untuk soal Uraian Kasus HOTS, jawablah dengan uraian analisis mendalam, logis, dan argumentatif.",
      "Periksa kembali seluruh jawaban Anda secara teliti sebelum diserahkan kepada guru pengampu.",
    ],
    sertakanKisiKisi: true,
    sertakanKunciGuru: true,
  });

  // Active View Tab: 'siswa' | 'kisi' | 'kunci'
  const [activeTab, setActiveTab] = useState<"siswa" | "kisi" | "kunci">("siswa");
  const [showKunciInSiswa, setShowKunciInSiswa] = useState<boolean>(false);
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  // Helper toggle TP
  const toggleTP = (kodeTP: string) => {
    setConfig((prev) => {
      const exists = prev.selectedTPs.includes(kodeTP);
      const nextTPs = exists
        ? prev.selectedTPs.filter((k) => k !== kodeTP)
        : [...prev.selectedTPs, kodeTP];
      return { ...prev, selectedTPs: nextTPs };
    });
  };

  // Helper toggle Element
  const toggleElement = (elem: string) => {
    setConfig((prev) => {
      const elemTPs = allUnits.filter((u) => u.elemenCP === elem).map((u) => u.kodeTP);
      const allSelected = elemTPs.every((k) => prev.selectedTPs.includes(k));
      let nextTPs: string[];
      if (allSelected) {
        nextTPs = prev.selectedTPs.filter((k) => !elemTPs.includes(k));
      } else {
        nextTPs = Array.from(new Set([...prev.selectedTPs, ...elemTPs]));
      }

      const nextElems = prev.selectedElements.includes(elem)
        ? prev.selectedElements.filter((e) => e !== elem)
        : [...prev.selectedElements, elem];

      return {
        ...prev,
        selectedTPs: nextTPs,
        selectedElements: nextElems,
      };
    });
  };

  const handleSelectAllTPs = () => {
    setConfig((prev) => ({
      ...prev,
      selectedTPs: allUnits.map((u) => u.kodeTP),
      selectedElements: uniqueElements,
    }));
  };

  const handleSelectSemester = (sem: "GANJIL" | "GENAP") => {
    const semTPs = allUnits.filter((u) => u.semester === sem).map((u) => u.kodeTP);
    setConfig((prev) => ({
      ...prev,
      selectedTPs: semTPs,
      selectedElements: Array.from(
        new Set(allUnits.filter((u) => u.semester === sem).map((u) => u.elemenCP))
      ),
    }));
  };

  const handleClearSelection = () => {
    setConfig((prev) => ({
      ...prev,
      selectedTPs: [],
      selectedElements: [],
    }));
  };

  // Generate Questions and Kisi-kisi based on current selection & options
  const generatedAssessment: GeneratedAssessmentPaper = useMemo(() => {
    // 1. Filter units by selected TPs
    const filteredUnits = allUnits.filter((u) => config.selectedTPs.includes(u.kodeTP));

    // 2. Gather candidate question items from Bank Soal (Doc 9) and Kisi-Kisi (Doc 8)
    const rawQuestions: AssessmentQuestionItem[] = [];
    const matchedKisiKisi: Doc8KisiKisiItem[] = [];

    filteredUnits.forEach((u) => {
      const bs = u.doc9BankSoal;
      const kisi = u.doc8KisiKisi;

      // PGK Questions
      if (bs.soalPGK && bs.soalPGK.length > 0) {
        bs.soalPGK.forEach((pgkItem, pIdx) => {
          const matchingKisi = kisi.find(
            (k) => k.bentukSoal.includes("Kompleks") || k.bentukSoal.includes("PG")
          ) || kisi[0];

          rawQuestions.push({
            no: 0,
            bentuk: "Pilihan Ganda Kompleks",
            levelKognitif: matchingKisi?.levelKognitif || "L3 (C4 Analisis)",
            stimulus: bs.stimulusUtama,
            pertanyaan: pgkItem.pertanyaan,
            pilihan: pgkItem.pilihan,
            kunciJawaban: pgkItem.kunciJawaban,
            pembahasan: pgkItem.pembahasan,
            pedomanPenskoran: {
              kriteriaMaksimal: pgkItem.pedomanPenskoran?.kriteriaMaksimal || "Memilih seluruh opsi benar dengan tepat",
              skorMaksimal: pgkItem.pedomanPenskoran?.skorMaksimal || 20,
              kriteriaParsial: pgkItem.pedomanPenskoran?.kriteriaParsial || "Menjawab sebagian benar",
              skorParsial: pgkItem.pedomanPenskoran?.skorParsial || 10,
            },
            kodeTP: u.kodeTP,
            tujuanPembelajaran: u.tujuanPembelajaran,
            elemenCP: u.elemenCP,
          });
        });
      }

      // Uraian HOTS Questions
      if (bs.soalUraian && bs.soalUraian.length > 0) {
        bs.soalUraian.forEach((uItem) => {
          const matchingKisi = kisi.find((k) => k.bentukSoal.includes("Uraian")) || kisi[kisi.length - 1];

          rawQuestions.push({
            no: 0,
            bentuk: "Uraian Kasus HOTS",
            levelKognitif: uItem.level || matchingKisi?.levelKognitif || "L3 (C5 Evaluasi)",
            stimulus: bs.stimulusUtama,
            pertanyaan: uItem.pertanyaan,
            kunciJawaban: uItem.kunciJawaban,
            pembahasan: uItem.pembahasan,
            pedomanPenskoran: {
              rubrik: uItem.rubrikPenskoran,
              skorMaksimal: 40,
            },
            kodeTP: u.kodeTP,
            tujuanPembelajaran: u.tujuanPembelajaran,
            elemenCP: u.elemenCP,
          });
        });
      }
    });

    // 3. Filter by Bentuk Soal
    let filteredByType = rawQuestions;
    if (config.bentukSoal === "PGK") {
      filteredByType = rawQuestions.filter((q) => q.bentuk === "Pilihan Ganda Kompleks");
    } else if (config.bentukSoal === "URAIAN") {
      filteredByType = rawQuestions.filter((q) => q.bentuk === "Uraian Kasus HOTS");
    }

    // 4. Filter / Sort by Difficulty Level
    let filteredByDifficulty = filteredByType;
    if (config.tingkatKesulitan === "MUDAH") {
      filteredByDifficulty = filteredByType.filter(
        (q) => q.levelKognitif.includes("C1") || q.levelKognitif.includes("C2") || q.levelKognitif.includes("L1")
      );
      if (filteredByDifficulty.length === 0) filteredByDifficulty = filteredByType;
    } else if (config.tingkatKesulitan === "SEDANG") {
      filteredByDifficulty = filteredByType.filter(
        (q) => q.levelKognitif.includes("C3") || q.levelKognitif.includes("C4") || q.levelKognitif.includes("L2")
      );
      if (filteredByDifficulty.length === 0) filteredByDifficulty = filteredByType;
    } else if (config.tingkatKesulitan === "HOTS") {
      filteredByDifficulty = filteredByType.filter(
        (q) => q.levelKognitif.includes("C4") || q.levelKognitif.includes("C5") || q.levelKognitif.includes("C6") || q.levelKognitif.includes("L3")
      );
      if (filteredByDifficulty.length === 0) filteredByDifficulty = filteredByType;
    }

    // 5. Select target question count (up to config.jumlahSoal)
    const selectedQuestions = filteredByDifficulty.slice(0, Math.max(1, config.jumlahSoal));

    // Number questions & calculate total score
    let totalScore = 0;
    const finalQuestions: AssessmentQuestionItem[] = selectedQuestions.map((q, idx) => {
      const qNum = idx + 1;
      const score = q.bentuk === "Pilihan Ganda Kompleks" ? 20 : 40;
      totalScore += score;
      return {
        ...q,
        no: qNum,
      };
    });

    // Build synchronized Kisi-Kisi (Doc 8)
    finalQuestions.forEach((q, idx) => {
      matchedKisiKisi.push({
        no: idx + 1,
        elemenCP: q.elemenCP,
        tujuanPembelajaran: q.tujuanPembelajaran,
        kodeTP: q.kodeTP,
        materiPokok: q.stimulus?.slice(0, 50) || q.pertanyaan.slice(0, 50),
        indikatorSoal: `Disajikan stimulus kontekstual, peserta didik mampu ${
          q.bentuk === "Pilihan Ganda Kompleks"
            ? "mengidentifikasi dan memilih semua pernyataan analisis yang tepat"
            : "menganalisis masalah dan mengemukakan argumentasi pemecahan masalah secara komprehensif"
        }.`,
        levelKognitif: q.levelKognitif,
        bentukSoal: q.bentuk,
        noSoal: q.no,
        bobotSkor: q.bentuk === "Pilihan Ganda Kompleks" ? 20 : 40,
      });
    });

    return {
      id: `assessment-${Date.now()}`,
      judulAsesmen: config.judulAsesmen,
      tanggalDibuat: new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      waktuPengerjaan: `${config.alokasiWaktuMenit} Menit`,
      header: {
        namaSatuan: pkg.input.namaSatuan,
        mataPelajaran: pkg.input.mataPelajaran,
        kelas: pkg.input.kelas,
        semester: filteredUnits[0]?.semester || "GANJIL",
        tahunAjaran: pkg.input.tahunAjaran,
        alokasiWaktu: `${config.alokasiWaktuMenit} Menit`,
      },
      petunjukUmum: config.petunjukUmum,
      kisiKisi: matchedKisiKisi,
      soalList: finalQuestions,
      totalSkorMaksimal: totalScore,
    };
  }, [allUnits, config, pkg.input]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textLines = [
      `======================================================`,
      `${pkg.input.namaSatuan.toUpperCase()}`,
      `${config.judulAsesmen.toUpperCase()}`,
      `Mata Pelajaran : ${pkg.input.mataPelajaran}`,
      `Kelas / Fase   : ${pkg.input.kelas} (${pkg.input.fase})`,
      `Alokasi Waktu  : ${config.alokasiWaktuMenit} Menit`,
      `======================================================\n`,
      `PETUNJUK UMUM:`,
      ...config.petunjukUmum.map((p, i) => `${i + 1}. ${p}`),
      `\n------------------------------------------------------\n`,
      ...generatedAssessment.soalList.map((q) => {
        let block = `SOAL NO. ${q.no} [${q.bentuk}] (${q.levelKognitif})\n`;
        block += `Target TP : ${q.kodeTP} - ${q.tujuanPembelajaran}\n`;
        if (q.stimulus) block += `Stimulus  : ${q.stimulus}\n`;
        block += `Soal      : ${q.pertanyaan}\n`;
        if (q.pilihan) {
          block += q.pilihan.map((p) => `  [ ] ${p.kode}. ${p.teks}`).join("\n") + "\n";
        }
        if (showKunciInSiswa) {
          block += `\n>> KUNCI JAWABAN: ${q.kunciJawaban}\n`;
          if (q.pembahasan) block += `>> PEMBAHASAN: ${q.pembahasan}\n`;
        }
        return block;
      }),
    ];

    navigator.clipboard.writeText(textLines.join("\n"));
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Configuration & Filter Panel */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm print:hidden space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl border border-blue-100">
              <Sliders className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span>Generator Pembuat Asesmen Terpadu</span>
                <span className="text-[11px] font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                  Dokumen 8 & 9 Integrasi
                </span>
              </h3>
              <p className="text-xs text-slate-500">
                Pilih elemen CP, Tujuan Pembelajaran (TP), dan tentukan format soal untuk merakit instrumen asesmen siap pakai.
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-[#0F172A] hover:bg-slate-800 text-white rounded-lg text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-xs"
            >
              <Printer className="w-4 h-4 text-blue-400" />
              <span>Cetak Asesmen (A4)</span>
            </button>
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer border border-slate-300"
            >
              {copySuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>Salin Naskah</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Form Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 text-xs">
          {/* Judul Asesmen */}
          <div className="space-y-1.5 md:col-span-2">
            <label className="font-bold text-slate-700 flex items-center gap-1.5">
              <FileCheck2 className="w-3.5 h-3.5 text-blue-600" />
              <span>Jenis / Judul Asesmen:</span>
            </label>
            <select
              value={config.judulAsesmen}
              onChange={(e) => setConfig({ ...config, judulAsesmen: e.target.value })}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="Asesmen Sumatif Lingkup Materi (Harian / Modul Terpadu)">
                Asesmen Sumatif Lingkup Materi (Harian / Per Unit)
              </option>
              <option value="Penilaian Tengah Semester (PTS / Sumatif Tengah Semester)">
                Penilaian Tengah Semester (PTS / STS)
              </option>
              <option value="Penilaian Akhir Semester (PAS / Sumatif Akhir Semester)">
                Penilaian Akhir Semester (PAS / SAS)
              </option>
              <option value="Asesmen Formatif & Uji Pemahaman Mandiri">
                Asesmen Formatif & Uji Pemahaman Mandiri
              </option>
              <option value="Instrumen Uji Diagnostik Kesiapan Belajar">
                Instrumen Uji Diagnostik Kesiapan Belajar
              </option>
            </select>
          </div>

          {/* Jumlah Soal */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-700 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
              <span>Jumlah Butir Soal:</span>
            </label>
            <div className="flex items-center gap-1">
              {[5, 10, 15, 20].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setConfig({ ...config, jumlahSoal: num })}
                  className={`flex-1 py-1.5 rounded-md font-bold transition-all text-xs cursor-pointer border ${
                    config.jumlahSoal === num
                      ? "bg-blue-600 text-white border-blue-600 shadow-2xs"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Alokasi Waktu */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-700 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              <span>Alokasi Waktu:</span>
            </label>
            <select
              value={config.alokasiWaktuMenit}
              onChange={(e) => setConfig({ ...config, alokasiWaktuMenit: Number(e.target.value) })}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value={45}>45 Menit (1 JP)</option>
              <option value={60}>60 Menit</option>
              <option value={80}>80 Menit</option>
              <option value={90}>90 Menit (2 JP)</option>
              <option value={120}>120 Menit</option>
            </select>
          </div>

          {/* Tingkat Kesulitan */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-700 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-blue-600" />
              <span>Tingkat Kesulitan:</span>
            </label>
            <select
              value={config.tingkatKesulitan}
              onChange={(e) => setConfig({ ...config, tingkatKesulitan: e.target.value as DifficultyLevel })}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="SEMUA">Proporsional (Bloom C1 - C6 Seimbang)</option>
              <option value="MUDAH">Fokus Mudah (C1 - C2 Pemahaman)</option>
              <option value="SEDANG">Fokus Sedang (C3 - C4 Aplikasi)</option>
              <option value="HOTS">Fokus HOTS (C4 - C6 Evaluasi & Kreasi)</option>
            </select>
          </div>

          {/* Bentuk Soal */}
          <div className="space-y-1.5">
            <label className="font-bold text-slate-700 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>Bentuk Soal:</span>
            </label>
            <select
              value={config.bentukSoal}
              onChange={(e) => setConfig({ ...config, bentukSoal: e.target.value as QuestionTypeFilter })}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="CAMPURAN">Kombinasi Terpadu (PGK + Uraian HOTS)</option>
              <option value="PGK">Pilihan Ganda Kompleks Saja (PGK)</option>
              <option value="URAIAN">Uraian Kasus HOTS Saja</option>
            </select>
          </div>

          {/* Kunci Jawaban Toggle */}
          <div className="space-y-1.5 md:col-span-2 flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-200 mt-auto">
            <div>
              <p className="font-bold text-slate-800">Tampilkan Kunci & Pembahasan di Lembar Siswa</p>
              <p className="text-[11px] text-slate-500">
                Nyalakan jika ingin mencetak paket review/pembahasan kelas.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowKunciInSiswa(!showKunciInSiswa)}
              className={`p-2 rounded-lg cursor-pointer transition-all ${
                showKunciInSiswa
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-slate-200 text-slate-600 hover:bg-slate-300"
              }`}
            >
              {showKunciInSiswa ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Filter Selection for TP and Elemen */}
        <div className="pt-3 border-t border-slate-100 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-bold text-slate-700 text-xs flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              <span>Pilih Capaian / Tujuan Pembelajaran (TP) yang Diujikan:</span>
              <span className="bg-blue-100 text-blue-900 px-2 py-0.5 rounded-full text-[10px] font-mono">
                {config.selectedTPs.length} dari {allUnits.length} TP Terpilih
              </span>
            </span>

            {/* Quick buttons */}
            <div className="flex items-center gap-1.5 text-[11px]">
              <button
                type="button"
                onClick={handleSelectAllTPs}
                className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded cursor-pointer"
              >
                Pilih Semua
              </button>
              <button
                type="button"
                onClick={() => handleSelectSemester("GANJIL")}
                className="px-2 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold rounded cursor-pointer border border-blue-200"
              >
                Semester Ganjil
              </button>
              <button
                type="button"
                onClick={() => handleSelectSemester("GENAP")}
                className="px-2 py-1 bg-purple-50 hover:bg-purple-100 text-purple-700 font-semibold rounded cursor-pointer border border-purple-200"
              >
                Semester Genap
              </button>
              <button
                type="button"
                onClick={handleClearSelection}
                className="px-2 py-1 bg-red-50 hover:bg-red-100 text-red-700 font-semibold rounded cursor-pointer"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Element & TP Checkbox Chips */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-56 overflow-y-auto p-1 bg-slate-50/70 rounded-lg border border-slate-200">
            {allUnits.map((u) => {
              const isChecked = config.selectedTPs.includes(u.kodeTP);
              return (
                <label
                  key={u.kodeTP}
                  className={`flex items-start gap-2.5 p-2 rounded-md border cursor-pointer transition-all text-xs ${
                    isChecked
                      ? "bg-white border-blue-500 shadow-2xs ring-1 ring-blue-500"
                      : "bg-white/60 border-slate-200 hover:bg-white text-slate-600"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleTP(u.kodeTP)}
                    className="mt-0.5 rounded text-blue-600 focus:ring-blue-500 w-3.5 h-3.5 cursor-pointer"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-slate-900 font-mono text-[11px]">
                        {u.kodeTP}
                      </span>
                      <span
                        className={`text-[9px] px-1 py-0.2 rounded font-semibold ${
                          u.semester === "GENAP"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {u.semester}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-700 font-medium line-clamp-1 mt-0.5">
                      {u.unitTitle}
                    </p>
                    <p className="text-[10px] text-slate-500 line-clamp-1">
                      {u.elemenCP}
                    </p>
                  </div>
                </label>
              );
            })}
          </div>
        </div>
      </div>

      {/* Output Document Mode Tabs */}
      <div className="bg-white rounded-xl p-2.5 border border-slate-200 shadow-2xs print:hidden flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab("siswa")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === "siswa"
                ? "bg-[#0F172A] text-white shadow-xs"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span>Naskah Soal Siswa ({generatedAssessment.soalList.length} Soal)</span>
          </button>

          <button
            onClick={() => setActiveTab("kisi")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === "kisi"
                ? "bg-[#0F172A] text-white shadow-xs"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
            <span>Matriks Kisi-Kisi (Dokumen 8)</span>
          </button>

          <button
            onClick={() => setActiveTab("kunci")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === "kunci"
                ? "bg-[#0F172A] text-white shadow-xs"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <FileCheck2 className="w-4 h-4 text-indigo-400" />
            <span>Kunci Jawaban & Rubrik Penskoran Guru</span>
          </button>
        </div>

        <div className="text-[11px] font-semibold text-slate-500 hidden sm:block">
          Total Skor Maksimal: <span className="font-bold text-slate-900">{generatedAssessment.totalSkorMaksimal} Poin</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: LEMBAR NASKAH SOAL SISWA */}
      {/* ========================================================================= */}
      {activeTab === "siswa" && (
        <div
          id="assessment-siswa-container"
          className="bg-white p-6 sm:p-8 rounded-xl border border-slate-300 shadow-sm font-serif text-slate-900 space-y-6 print:border-none print:shadow-none print:p-0"
        >
          {/* Header Kop Surat Resmi */}
          <KopSurat input={pkg.input} />

          {/* Assessment Title */}
          <div className="text-center py-2 border-b-2 border-slate-900 space-y-1">
            <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider text-slate-900">
              {generatedAssessment.judulAsesmen}
            </h2>
            <p className="text-xs font-sans font-medium text-slate-700">
              Tahun Ajaran {pkg.input.tahunAjaran} &bull; Standar Kurikulum Nasional Resmi BSKAP No. 046 & 058/2025
            </p>
          </div>

          {/* Student Identity Box (Print Table) */}
          <div className="font-sans grid grid-cols-2 gap-4 text-xs p-3 bg-slate-50 rounded-lg border border-slate-300 print:bg-transparent">
            <div className="space-y-1.5">
              <div className="flex">
                <span className="w-28 font-bold text-slate-700">Mata Pelajaran</span>
                <span className="w-4">:</span>
                <span className="font-semibold">{pkg.input.mataPelajaran}</span>
              </div>
              <div className="flex">
                <span className="w-28 font-bold text-slate-700">Kelas / Fase</span>
                <span className="w-4">:</span>
                <span className="font-semibold">
                  {pkg.input.kelas} ({pkg.input.fase})
                </span>
              </div>
              <div className="flex">
                <span className="w-28 font-bold text-slate-700">Alokasi Waktu</span>
                <span className="w-4">:</span>
                <span className="font-semibold">{generatedAssessment.waktuPengerjaan}</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex">
                <span className="w-28 font-bold text-slate-700">Nama Siswa</span>
                <span className="w-4">:</span>
                <span className="border-b border-dotted border-slate-600 flex-1 min-h-[16px]"></span>
              </div>
              <div className="flex">
                <span className="w-28 font-bold text-slate-700">Nomor Absen</span>
                <span className="w-4">:</span>
                <span className="border-b border-dotted border-slate-600 w-20"></span>
              </div>
              <div className="flex">
                <span className="w-28 font-bold text-slate-700">Hari / Tanggal</span>
                <span className="w-4">:</span>
                <span className="border-b border-dotted border-slate-600 flex-1 min-h-[16px]"></span>
              </div>
            </div>
          </div>

          {/* Petunjuk Umum */}
          <div className="font-sans text-xs bg-blue-50/60 p-3.5 rounded-lg border border-blue-200 space-y-1.5 print:bg-transparent print:border-slate-300">
            <h4 className="font-bold text-blue-900 uppercase text-[11px] tracking-wide">
              PETUNJUK UMUM PENGERJAAN:
            </h4>
            <ol className="list-decimal list-inside space-y-0.5 text-slate-700">
              {generatedAssessment.petunjukUmum.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ol>
          </div>

          {/* Soal - Soal Asesmen */}
          <div className="space-y-6 pt-2">
            {generatedAssessment.soalList.map((q) => (
              <div
                key={q.no}
                className="space-y-3 pb-5 border-b border-slate-200 print:break-inside-avoid last:border-b-0"
              >
                {/* Soal Header */}
                <div className="flex items-start justify-between gap-3 font-sans">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0">
                      {q.no}
                    </span>
                    <span className="font-bold text-xs text-slate-800">
                      [{q.bentuk}]
                    </span>
                    <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono border border-slate-200">
                      {q.kodeTP} &bull; {q.levelKognitif}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500">
                    Bobot: {q.bentuk === "Pilihan Ganda Kompleks" ? "20 Poin" : "40 Poin"}
                  </span>
                </div>

                {/* Stimulus Kasus Nyata jika ada */}
                {q.stimulus && (
                  <div className="bg-slate-50 p-3 rounded-lg border-l-4 border-blue-600 text-xs italic text-slate-700 font-sans print:bg-transparent">
                    <span className="font-bold not-italic text-slate-900 block mb-0.5">
                      Wacana Stimulus Kontekstual:
                    </span>
                    {q.stimulus}
                  </div>
                )}

                {/* Teks Pertanyaan */}
                <p className="text-sm leading-relaxed text-slate-900 font-medium">
                  {q.pertanyaan}
                </p>

                {/* Opsi Pilihan Ganda Kompleks (PGK) */}
                {q.pilihan && (
                  <div className="space-y-2 font-sans text-xs pl-2">
                    {q.pilihan.map((p) => (
                      <div
                        key={p.kode}
                        className="flex items-start gap-2.5 p-2 rounded border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
                      >
                        <div className="w-4 h-4 rounded border-2 border-slate-400 mt-0.5 shrink-0 flex items-center justify-center font-bold text-[10px]">
                          {/* Student check area */}
                        </div>
                        <span className="font-bold text-slate-800 w-4">{p.kode}.</span>
                        <span className="text-slate-800 leading-snug flex-1">{p.teks}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Lembar Uraian Bergaris untuk Soal Uraian */}
                {q.bentuk === "Uraian Kasus HOTS" && (
                  <div className="font-sans pt-2 space-y-2">
                    <p className="text-[11px] text-slate-500 font-semibold italic">
                      Ruang Jawaban Analisis & Argumentasi Siswa:
                    </p>
                    <div className="space-y-3.5 pt-1">
                      <div className="border-b border-slate-300 w-full min-h-[14px]"></div>
                      <div className="border-b border-slate-300 w-full min-h-[14px]"></div>
                      <div className="border-b border-slate-300 w-full min-h-[14px]"></div>
                      <div className="border-b border-slate-300 w-full min-h-[14px]"></div>
                    </div>
                  </div>
                )}

                {/* Optional: Show Answer Key right below for review mode */}
                {showKunciInSiswa && (
                  <div className="font-sans text-xs bg-emerald-50 border border-emerald-300 p-3 rounded-lg mt-3 text-emerald-950 space-y-1">
                    <p className="font-bold flex items-center gap-1.5 text-emerald-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Kunci Jawaban: {q.kunciJawaban}</span>
                    </p>
                    {q.pembahasan && (
                      <p className="text-[11px] text-emerald-900 leading-relaxed">
                        <span className="font-semibold">Pembahasan: </span>
                        {q.pembahasan}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Lembar Pengesahan Guru & Kepala Sekolah */}
          <div className="pt-8">
            <SignatureBlock input={pkg.input} />
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: MATRIKS KISI-KISI ASESMEN (Dokumen 8 Terintegrasi) */}
      {/* ========================================================================= */}
      {activeTab === "kisi" && (
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-300 shadow-sm space-y-5">
          <KopSurat input={pkg.input} />

          <div className="text-center py-2 border-b-2 border-slate-900 space-y-1">
            <h2 className="text-base font-bold uppercase tracking-wider text-slate-900">
              MATRIKS KISI-KISI PENULISAN SOAL ASESMEN TERPADU
            </h2>
            <p className="text-xs font-sans font-medium text-slate-700">
              Mata Pelajaran: {pkg.input.mataPelajaran} &bull; Kelas: {pkg.input.kelas} ({pkg.input.fase}) &bull; Regulasi Resmi 2025/2026
            </p>
          </div>

          <div className="overflow-x-auto text-xs">
            <table className="w-full border-collapse border border-slate-300 text-left">
              <thead>
                <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-300 text-[11px]">
                  <th className="border border-slate-300 p-2 text-center w-10">No</th>
                  <th className="border border-slate-300 p-2 w-32">Elemen CP</th>
                  <th className="border border-slate-300 p-2 w-48">Tujuan Pembelajaran (TP)</th>
                  <th className="border border-slate-300 p-2 w-48">Indikator Soal</th>
                  <th className="border border-slate-300 p-2 text-center w-20">Level Kognitif</th>
                  <th className="border border-slate-300 p-2 w-32">Bentuk Soal</th>
                  <th className="border border-slate-300 p-2 text-center w-14">No. Soal</th>
                  <th className="border border-slate-300 p-2 text-center w-14">Bobot</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                {generatedAssessment.kisiKisi.map((k) => (
                  <tr key={k.no} className="hover:bg-slate-50 transition-colors">
                    <td className="border border-slate-300 p-2 text-center font-bold">{k.no}</td>
                    <td className="border border-slate-300 p-2 font-medium">{k.elemenCP}</td>
                    <td className="border border-slate-300 p-2">
                      <span className="font-bold font-mono text-[11px] block">{k.kodeTP}</span>
                      <span className="text-slate-600 text-[11px]">{k.tujuanPembelajaran}</span>
                    </td>
                    <td className="border border-slate-300 p-2 text-slate-700">{k.indikatorSoal}</td>
                    <td className="border border-slate-300 p-2 text-center">
                      <span className="bg-slate-100 px-1.5 py-0.5 rounded font-mono font-bold text-[10px] border border-slate-200">
                        {k.levelKognitif}
                      </span>
                    </td>
                    <td className="border border-slate-300 p-2 font-medium">{k.bentukSoal}</td>
                    <td className="border border-slate-300 p-2 text-center font-bold text-blue-700">
                      {k.noSoal}
                    </td>
                    <td className="border border-slate-300 p-2 text-center font-bold">
                      {k.bobotSkor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pt-6">
            <SignatureBlock input={pkg.input} />
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: KUNCI JAWABAN & PEDOMAN PENSKORAN GURU */}
      {/* ========================================================================= */}
      {activeTab === "kunci" && (
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-300 shadow-sm space-y-6">
          <KopSurat input={pkg.input} />

          <div className="text-center py-2 border-b-2 border-slate-900 space-y-1">
            <h2 className="text-base font-bold uppercase tracking-wider text-slate-900">
              KUNCI JAWABAN & PEDOMAN PENSKORAN RESMI (PEGANGAN GURU)
            </h2>
            <p className="text-xs font-sans font-medium text-slate-700">
              {generatedAssessment.judulAsesmen} &bull; {pkg.input.mataPelajaran} &bull; Total Skor: {generatedAssessment.totalSkorMaksimal}
            </p>
          </div>

          {/* Formula Nilai Akhir */}
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-center justify-between text-xs font-sans">
            <div>
              <span className="font-bold text-slate-800">Rumus Penentuan Nilai Asesmen: </span>
              <span className="font-mono bg-white px-2 py-1 rounded border border-slate-300 text-blue-700 font-bold ml-2">
                Nilai Akhir = (Skor Perolehan / {generatedAssessment.totalSkorMaksimal}) × 100
              </span>
            </div>
            <span className="text-[11px] text-slate-500 font-medium">
              Standar PPA 2025: Format Interval Kualitatif
            </span>
          </div>

          <div className="space-y-5">
            {generatedAssessment.soalList.map((q) => (
              <div
                key={`kunci-${q.no}`}
                className="p-4 rounded-lg border border-slate-200 bg-white space-y-2.5 text-xs font-sans shadow-2xs"
              >
                <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2">
                  <span className="font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-[11px]">
                      {q.no}
                    </span>
                    <span>Butir Soal No. {q.no} ({q.bentuk})</span>
                    <span className="font-mono text-[10px] text-slate-500">[{q.kodeTP}]</span>
                  </span>
                  <span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded text-[11px]">
                    Kunci: {q.kunciJawaban}
                  </span>
                </div>

                <div className="text-slate-800 space-y-1">
                  <p className="font-semibold text-slate-700">Pertanyaan Asli:</p>
                  <p className="italic text-slate-600 bg-slate-50 p-2 rounded border border-slate-100">
                    "{q.pertanyaan}"
                  </p>
                </div>

                {q.pembahasan && (
                  <div className="bg-blue-50/50 p-2.5 rounded border border-blue-100 text-blue-950 space-y-0.5">
                    <span className="font-bold text-blue-900 block text-[11px]">
                      Rasional Pedagogis & Pembahasan:
                    </span>
                    <p className="leading-relaxed">{q.pembahasan}</p>
                  </div>
                )}

                {/* Rubrik Penskoran Detail */}
                <div className="pt-1">
                  <span className="font-bold text-slate-700 block mb-1">Pedoman Penskoran:</span>
                  {q.pedomanPenskoran?.rubrik ? (
                    <div className="border border-slate-200 rounded overflow-hidden">
                      <table className="w-full text-left text-[11px]">
                        <thead className="bg-slate-100 text-slate-700">
                          <tr>
                            <th className="p-1.5 border-r border-slate-200 w-20 text-center">Skor</th>
                            <th className="p-1.5">Deskriptor Capaian Murid</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {q.pedomanPenskoran.rubrik.map((r, i) => (
                            <tr key={i} className="hover:bg-slate-50">
                              <td className="p-1.5 font-bold text-center border-r border-slate-200 text-blue-600">
                                {r.skor} Poin
                              </td>
                              <td className="p-1.5 text-slate-700">{r.kriteria}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2 bg-emerald-50 rounded border border-emerald-200">
                        <span className="font-bold text-emerald-800">Skor Penuh (20 Poin):</span>
                        <p className="text-emerald-900">{q.pedomanPenskoran?.kriteriaMaksimal}</p>
                      </div>
                      <div className="p-2 bg-amber-50 rounded border border-amber-200">
                        <span className="font-bold text-amber-800">Skor Parsial (10 Poin):</span>
                        <p className="text-amber-900">{q.pedomanPenskoran?.kriteriaParsial}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <SignatureBlock input={pkg.input} />
          </div>
        </div>
      )}
    </div>
  );
};
