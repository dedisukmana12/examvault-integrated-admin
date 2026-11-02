// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import React, { useMemo } from "react";
import { TeacherInput, FaseType } from "../types";
import { LogoUploader } from "./LogoUploader";
import { getSubjectsByFase, PRESETS } from "../data/curriculumDatabase";
import { Sparkles, FileText, Settings, RefreshCw, Send, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

interface Props {
  input: TeacherInput;
  onChange: (updated: TeacherInput) => void;
  onGenerate: () => void;
  onReset: () => void;
  isGenerating?: boolean;
}

export const InputForm: React.FC<Props> = ({
  input,
  onChange,
  onGenerate,
  onReset,
  isGenerating = false,
}) => {
  // Mapping pilihan kelas berdasarkan fase
    const isKemenag = input.jalur === "Kemenag";
  const defaultInstansiInduk = isKemenag
    ? "KEMENTERIAN AGAMA REPUBLIK INDONESIA"
    : "PEMERINTAH DAERAH PROVINSI / KABUPATEN / KOTA";
  const defaultKantorWilayah = isKemenag
    ? `KANTOR KEMENTERIAN AGAMA ${input.kotaSatuan ? input.kotaSatuan.toUpperCase() : "KABUPATEN / KOTA"}`
    : "DINAS PENDIDIKAN DAN KEBUDAYAAN";
  const defaultAlamatSatuan = `Jl. Pendidikan No. 01, ${input.kotaSatuan || "Kabupaten/Kota"}`;
  const defaultKontakSatuan = `Telp. (021) 87654321 | Email: info@${input.namaSatuan.toLowerCase().replace(/[^a-z0-9]/g, "") || "sekolah"}.sch.id`;

  const FASE_KELAS_OPTIONS: Record<string, { value: string; label: string }[]> = {
    "Fase A": [
      { value: "Kelas I", label: "Kelas 1 (I)" },
      { value: "Kelas II", label: "Kelas 2 (II)" },
    ],
    "Fase B": [
      { value: "Kelas III", label: "Kelas 3 (III)" },
      { value: "Kelas IV", label: "Kelas 4 (IV)" },
    ],
    "Fase C": [
      { value: "Kelas V", label: "Kelas 5 (V)" },
      { value: "Kelas VI", label: "Kelas 6 (VI)" },
    ],
    "Fase D": [
      { value: "Kelas VII", label: "Kelas VII (7)" },
      { value: "Kelas VIII", label: "Kelas VIII (8)" },
      { value: "Kelas IX", label: "Kelas IX (9)" },
    ],
    "Fase E": [
      { value: "Kelas X", label: "Kelas X (10)" },
    ],
    "Fase F": [
      { value: "Kelas XI", label: "Kelas XI (11)" },
      { value: "Kelas XII", label: "Kelas XII (12)" },
    ],
  };

  // Daftar Mata Pelajaran dinamis khusus sesuai Fase dan Regulasi CP
  const availableMapelList = useMemo(() => {
    const list = getSubjectsByFase(input.fase, input.jalur);
    if (list.length > 0) return list;
    // Fallback bila jalur belum spesifik
    return getSubjectsByFase(input.fase);
  }, [input.fase, input.jalur]);

  const handleFaseChange = (faseValue: string) => {
    const availableKelas = FASE_KELAS_OPTIONS[faseValue] || [];
    const defaultKelas = availableKelas[0]?.value || "";
    const newMapelList = getSubjectsByFase(faseValue as FaseType, input.jalur);
    const validMapelList = newMapelList.length > 0 ? newMapelList : getSubjectsByFase(faseValue as FaseType);
    const newMapel = validMapelList.includes(input.mataPelajaran)
      ? input.mataPelajaran
      : validMapelList[0] || input.mataPelajaran;

    onChange({
      ...input,
      fase: faseValue as any,
      kelas: defaultKelas,
      mataPelajaran: newMapel,
    });
  };

  const handleJalurChange = (jalurValue: "Dinas" | "Kemenag") => {
    const newMapelList = getSubjectsByFase(input.fase, jalurValue);
    const validMapelList = newMapelList.length > 0 ? newMapelList : getSubjectsByFase(input.fase);
    const newMapel = validMapelList.includes(input.mataPelajaran)
      ? input.mataPelajaran
      : validMapelList[0] || input.mataPelajaran;

    onChange({
      ...input,
      jalur: jalurValue,
      mataPelajaran: newMapel,
    });
  };

  const handleInputChange = (field: keyof TeacherInput, value: string | number) => {
    onChange({
      ...input,
      [field]: value,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-5 sm:p-7 mb-6">
      {/* Header Form */}
      <div className="pb-5 border-b border-slate-200 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#3B82F6] rounded-sm"></span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
            Inisialisasi Parameter Guru (Standar 7 Baris Input)
          </h3>
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Engine otomatis menyintesis materi dari Capaian Pembelajaran (BSKAP 046/2025 & KMA 1503/2025) tanpa placeholder [...].
        </p>
      </div>

      {/* Preset Cepat Kurikulum */}
      <div className="mb-6 p-4 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border border-blue-200/90 rounded-xl shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              Preset Cepat Kurikulum (29 Pilihan Contoh Resmi)
            </span>
          </div>
          <span className="text-[10px] text-blue-700 bg-white/90 border border-blue-200 font-semibold px-2 py-0.5 rounded-full shadow-2xs">
            SD/MI • SMP/MTs • SMA/MA (Fase A s.d. F)
          </span>
        </div>
        <p className="text-[11px] text-slate-600 mb-2.5">
          Pilih salah satu preset di bawah untuk memuat parameter resmi secara instan:
        </p>
        <select
          defaultValue=""
          onChange={(e) => {
            const selected = PRESETS.find((p) => p.id === e.target.value);
            if (selected) {
              onChange({ ...input, ...selected.data });
            }
          }}
          className="w-full bg-white border border-blue-300 rounded-lg px-3.5 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-2xs transition-all"
        >
          <option value="" disabled>-- Pilih Preset Kurikulum Terverifikasi --</option>
          <optgroup label="🌟 Fase F (SMA/MA Kelas XI & XII)">
            {PRESETS.filter((p) => p.data.fase === "Fase F").map((p) => (
              <option key={p.id} value={p.id}>{p.title}</option>
            ))}
          </optgroup>
          <optgroup label="🏫 Fase E (SMA/MA Kelas X)">
            {PRESETS.filter((p) => p.data.fase === "Fase E").map((p) => (
              <option key={p.id} value={p.id}>{p.title}</option>
            ))}
          </optgroup>
          <optgroup label="📚 Fase D (SMP/MTs Kelas VII)">
            {PRESETS.filter((p) => p.data.fase === "Fase D").map((p) => (
              <option key={p.id} value={p.id}>{p.title}</option>
            ))}
          </optgroup>
          <optgroup label="🎒 Fase C (SD/MI Kelas V & VI)">
            {PRESETS.filter((p) => p.data.fase === "Fase C").map((p) => (
              <option key={p.id} value={p.id}>{p.title}</option>
            ))}
          </optgroup>
          <optgroup label="🌱 Fase B (SD/MI Kelas IV)">
            {PRESETS.filter((p) => p.data.fase === "Fase B").map((p) => (
              <option key={p.id} value={p.id}>{p.title}</option>
            ))}
          </optgroup>
          <optgroup label="🐣 Fase A (SD/MI Kelas I)">
            {PRESETS.filter((p) => p.data.fase === "Fase A").map((p) => (
              <option key={p.id} value={p.id}>{p.title}</option>
            ))}
          </optgroup>
        </select>
      </div>

      {/* Input Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xs">
        {/* 1. Jalur */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
            1. Jalur Regulasi <span className="text-rose-500">*</span>
          </label>
          <select
            value={input.jalur}
            onChange={(e) => handleJalurChange(e.target.value as "Dinas" | "Kemenag")}
            className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 font-semibold focus:bg-white focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] outline-hidden transition-all"
          >
            <option value="Dinas">Jalur Dinas (Kemendikdasmen - Murni Standar Nasional)</option>
            <option value="Kemenag">Jalur Kemenag (Madrasah - Nasional + KBC & PPRA)</option>
          </select>
        </div>

        {/* 2. Nama Satuan Pendidikan */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
            2. Nama Satuan Pendidikan <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            value={input.namaSatuan}
            onChange={(e) => handleInputChange("namaSatuan", e.target.value)}
            className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 font-medium focus:bg-white focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] outline-hidden transition-all"
          />
        </div>

        {/* 3. Mata Pelajaran (Dropdown Sesuai Fase CP) */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider flex items-center justify-between">
            <span>3. Mata Pelajaran ({input.fase}) <span className="text-rose-500">*</span></span>
            <span className="text-[10px] text-blue-600 font-semibold">BSKAP No. 046/2025</span>
          </label>
          <select
            value={input.mataPelajaran}
            onChange={(e) => handleInputChange("mataPelajaran", e.target.value)}
            className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 font-semibold focus:bg-white focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] outline-hidden transition-all cursor-pointer"
          >
            {input.fase === "Fase A" ? (
              <>
                <optgroup label="📚 Mata Pelajaran Wajib (Fase A)">
                  {availableMapelList
                    .filter((m) =>
                      [
                        "Pendidikan Pancasila",
                        "Bahasa Indonesia",
                        "Matematika",
                        "Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)",
                      ].includes(m)
                    )
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="🕌 / ⛪ Pendidikan Agama & Budi Pekerti">
                  {availableMapelList
                    .filter((m) =>
                      m.startsWith("Pendidikan Agama") ||
                      ["Al-Qur'an Hadis", "Akidah Akhlak", "Fikih", "Bahasa Arab"].includes(m)
                    )
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="🎨 Seni (Pilihan Cabang Seni)">
                  {availableMapelList
                    .filter((m) => m.startsWith("Seni"))
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="🏡 Muatan Lokal">
                  {availableMapelList
                    .filter((m) => m.includes("Muatan Lokal"))
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>
              </>
            ) : input.fase === "Fase B" ? (
              <>
                <optgroup label="📚 Mata Pelajaran Wajib (Fase B)">
                  {availableMapelList
                    .filter((m) =>
                      [
                        "Pendidikan Pancasila",
                        "Bahasa Indonesia",
                        "Matematika",
                        "Ilmu Pengetahuan Alam dan Sosial (IPAS)",
                        "IPAS",
                        "Bahasa Inggris",
                        "Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)",
                      ].includes(m)
                    )
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="🕌 / ⛪ Pendidikan Agama & Budi Pekerti">
                  {availableMapelList
                    .filter((m) =>
                      m.startsWith("Pendidikan Agama") ||
                      [
                        "Al-Qur'an Hadis",
                        "Akidah Akhlak",
                        "Fikih",
                        "Sejarah Kebudayaan Islam (SKI)",
                        "Bahasa Arab",
                      ].includes(m)
                    )
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="🎨 Seni (Pilihan Cabang Seni)">
                  {availableMapelList
                    .filter((m) => m.startsWith("Seni"))
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="🏡 Muatan Lokal">
                  {availableMapelList
                    .filter((m) => m.includes("Muatan Lokal"))
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>
              </>
            ) : input.fase === "Fase C" ? (
              <>
                <optgroup label="📚 Mata Pelajaran Wajib (Fase C)">
                  {availableMapelList
                    .filter((m) =>
                      [
                        "Pendidikan Pancasila",
                        "Bahasa Indonesia",
                        "Matematika",
                        "Ilmu Pengetahuan Alam dan Sosial (IPAS)",
                        "IPAS",
                        "Bahasa Inggris",
                        "Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)",
                      ].includes(m)
                    )
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="💻 Mata Pelajaran Pilihan (BSKAP 046/2025)">
                  {availableMapelList
                    .filter((m) =>
                      m.includes("Koding") || m.includes("Kecerdasan Artifisial") || m.includes("Informatika")
                    )
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="🕌 / ⛪ Pendidikan Agama & Budi Pekerti">
                  {availableMapelList
                    .filter((m) =>
                      m.startsWith("Pendidikan Agama") ||
                      [
                        "Al-Qur'an Hadis",
                        "Akidah Akhlak",
                        "Fikih",
                        "Sejarah Kebudayaan Islam (SKI)",
                        "Bahasa Arab",
                      ].includes(m)
                    )
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="🎨 Seni (Pilihan Cabang Seni)">
                  {availableMapelList
                    .filter((m) => m.startsWith("Seni"))
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="🏡 Muatan Lokal">
                  {availableMapelList
                    .filter((m) => m.includes("Muatan Lokal"))
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>
              </>
            ) : input.fase === "Fase D" ? (
              <>
                <optgroup label="📚 Mata Pelajaran Wajib (Fase D SMP/MTs)">
                  {availableMapelList
                    .filter((m) =>
                      [
                        "Pendidikan Pancasila",
                        "Bahasa Indonesia",
                        "Matematika",
                        "Ilmu Pengetahuan Alam (IPA)",
                        "IPA",
                        "Ilmu Pengetahuan Sosial (IPS)",
                        "IPS",
                        "Bahasa Inggris",
                        "Informatika",
                        "Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)",
                      ].includes(m)
                    )
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="💻 Mata Pelajaran Pilihan (BSKAP 046/2025)">
                  {availableMapelList
                    .filter((m) =>
                      m.includes("Koding") || m.includes("Kecerdasan Artifisial")
                    )
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="🕌 / ⛪ Pendidikan Agama & Budi Pekerti">
                  {availableMapelList
                    .filter((m) =>
                      m.startsWith("Pendidikan Agama") ||
                      [
                        "Al-Qur'an Hadis",
                        "Akidah Akhlak",
                        "Fikih",
                        "Sejarah Kebudayaan Islam (SKI)",
                        "Bahasa Arab",
                      ].includes(m)
                    )
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="🎨 Seni (Pilihan Cabang Seni)">
                  {availableMapelList
                    .filter((m) => m.startsWith("Seni"))
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="🛠️ Prakarya (Pilihan Aspek Prakarya)">
                  {availableMapelList
                    .filter((m) => m.startsWith("Prakarya"))
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="🏡 Muatan Lokal">
                  {availableMapelList
                    .filter((m) => m.includes("Muatan Lokal"))
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>
              </>
            ) : input.fase === "Fase E" ? (
              <>
                <optgroup label="📚 Mata Pelajaran Umum (Fase E Kelas X SMA/MA/SMK)">
                  {availableMapelList
                    .filter((m) =>
                      [
                        "Pendidikan Pancasila",
                        "Bahasa Indonesia",
                        "Matematika",
                        "Ilmu Pengetahuan Alam (IPA)",
                        "IPA",
                        "Fisika",
                        "Kimia",
                        "Biologi",
                        "Ilmu Pengetahuan Sosial (IPS)",
                        "IPS",
                        "Sejarah",
                        "Geografi",
                        "Sosiologi",
                        "Ekonomi",
                        "Bahasa Inggris",
                        "Informatika",
                        "Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)",
                      ].includes(m)
                    )
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="🛠️ Dasar-Dasar Program Keahlian (SMK/MAK Kelas X)">
                  {availableMapelList
                    .filter((m) => m.startsWith("Dasar-Dasar"))
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="💻 Mata Pelajaran Pilihan (BSKAP 046/2025)">
                  {availableMapelList
                    .filter((m) =>
                      m.includes("Koding") || m.includes("Kecerdasan Artifisial")
                    )
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="🕌 / ⛪ Pendidikan Agama & Budi Pekerti">
                  {availableMapelList
                    .filter((m) =>
                      m.startsWith("Pendidikan Agama") ||
                      [
                        "Al-Qur'an Hadis",
                        "Akidah Akhlak",
                        "Fikih",
                        "Sejarah Kebudayaan Islam (SKI)",
                        "Bahasa Arab",
                      ].includes(m)
                    )
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="🎨 Seni (Pilihan Cabang Seni)">
                  {availableMapelList
                    .filter((m) => m.startsWith("Seni"))
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="🛠️ Prakarya (Pilihan Aspek Prakarya)">
                  {availableMapelList
                    .filter((m) => m.startsWith("Prakarya"))
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="🏡 Muatan Lokal">
                  {availableMapelList
                    .filter((m) => m.includes("Muatan Lokal"))
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>
              </>
            ) : input.fase === "Fase F" ? (
              <>
                <optgroup label="📚 Mata Pelajaran Umum (Fase F Kelas XI/XII SMA/MA/SMK)">
                  {availableMapelList
                    .filter((m) =>
                      [
                        "Pendidikan Pancasila",
                        "Bahasa Indonesia",
                        "Matematika",
                        "Bahasa Inggris",
                        "Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)",
                      ].includes(m)
                    )
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="🔬 Mata Pelajaran Pilihan / Peminatan">
                  {availableMapelList
                    .filter((m) =>
                      [
                        "Bahasa Indonesia Tingkat Lanjut",
                        "Matematika Tingkat Lanjut",
                        "Bahasa Inggris Tingkat Lanjut",
                        "Fisika",
                        "Kimia",
                        "Biologi",
                        "Informatika",
                        "Sejarah",
                        "Sejarah Tingkat Lanjut",
                        "Geografi",
                        "Sosiologi",
                        "Antropologi",
                        "Ekonomi",
                      ].includes(m)
                    )
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="💼 Konsentrasi Keahlian (SMK/MAK Kelas XI/XII/XIII)">
                  {availableMapelList
                    .filter((m) =>
                      !m.startsWith("Dasar-Dasar") &&
                      [
                        "Teknik Perawatan Gedung",
                        "Konstruksi Jalan, Irigasi, dan Jembatan",
                        "Teknik Konstruksi Jalan dan Jembatan",
                        "Konstruksi Gedung dan Sanitasi",
                        "Desain Pemodelan dan Informasi Bangunan",
                        "Desain Interior dan Teknik Furnitur",
                        "Desain dan Teknik Furnitur",
                        "Teknik Pemesinan",
                        "Teknik Mekanik Industri",
                        "Teknik Pengecoran Logam",
                        "Teknik Pemesinan Pesawat Udara (Aircraft Machining)",
                        "Teknik Konstruksi Rangka Pesawat Udara (Airframe Mechanic)",
                        "Teknik Pemesinan Kapal",
                        "Teknik Kendaraan Ringan",
                        "Teknik Sepeda Motor",
                        "Teknik Alat Berat",
                        "Teknik Ototronik",
                        "Teknik Bodi Kendaraan Ringan",
                        "Teknik Pengelasan",
                        "Teknik Pengelasan Kapal",
                        "Teknik Konstruksi Badan Pesawat Udara (Aircraft Sheet Metal Forming)",
                        "Teknik Fabrikasi Logam dan Manufaktur",
                        "Teknik Pengendalian Produksi",
                        "Teknik Logistik",
                        "Teknik Audio Video",
                        "Teknik Mekatronika",
                        "Teknik Elektronika Industri",
                        "Teknik Otomasi Industri",
                        "Teknik Elektronika Komunikasi",
                        "Teknik Instrumentasi Medik",
                        "Teknik Elektronika Pesawat Udara",
                        "Instrumentasi dan Otomatisasi Proses",
                        "Airframe Powerplant",
                        "Electrical Avionic",
                        "Desain Rancang Bangun Kapal",
                        "Konstruksi Kapal Baja",
                        "Konstruksi Kapal Non Baja",
                        "Interior Kapal",
                        "Kimia Analisis",
                        "Analisis Pengujian Laboratorium",
                        "Teknik Kimia Industri",
                        "Kimia Tekstil",
                        "Teknik Pembuatan Serat Filamen",
                        "Teknik Pembuatan Benang Stapel",
                        "Teknik Pembuatan Kain",
                        "Teknik Penyempurnaan Tekstil",
                        "Teknik Instalasi Tenaga Listrik",
                        "Teknik Pembangkit Tenaga Listrik",
                        "Teknik Jaringan Tenaga Listrik",
                        "Teknik Pemanasan, Tata Udara, dan Pendinginan (HVACR)",
                        "Teknik Kelistrikan Pesawat Udara (Aircraft Electricity)",
                        "Teknik Kelistrikan Kapal",
                        "Teknik Energi Surya, Hidro, dan Angin",
                        "Teknik Energi Biomassa",
                        "Teknik Geomatika",
                        "Informasi Geospasial",
                        "Geologi Pertambangan",
                        "Teknik Produksi Minyak dan Gas",
                        "Teknik Pemboran Minyak dan Gas",
                        "Teknik Pengolahan Minyak, Gas, dan Petrokimia",
                        "Rekayasa Perangkat Lunak",
                        "Pengembangan Gim",
                        "Sistem Informasi, Jaringan, dan Aplikasi (SIJA)",
                        "Teknik Komputer dan Jaringan",
                        "Teknik Jaringan Akses Telekomunikasi",
                        "Teknik Transmisi Telekomunikasi",
                        "Layanan Penunjang Keperawatan dan Caregiving",
                        "Layanan Penunjang Dental Care",
                        "Layanan Penunjang Laboratorium Medik",
                        "Layanan Penunjang Kefarmasian Klinis dan Komunitas",
                        "Farmasi Industri",
                        "Pekerjaan Sosial",
                        "Agribisnis Tanaman Perkebunan",
                        "Agribisnis Tanaman Pangan dan Hortikultura",
                        "Agribisnis Perbenihan Tanaman",
                        "Agribisnis Lanskap dan Pertamanan",
                        "Agribisnis Ternak Ruminansia",
                        "Agribisnis Ternak Unggas",
                        "Kesehatan Hewan",
                        "Agribisnis Ikan Hias",
                        "Agribisnis Perikanan Payau dan Laut",
                        "Agribisnis Perikanan Air Tawar",
                        "Agribisnis Rumput Laut",
                        "Usaha Pertanian Terpadu",
                        "Mekanisasi Pertanian",
                        "Agribisnis Pengolahan Hasil Pertanian",
                        "Agribisnis Pengolahan Hasil Perikanan",
                        "Pengawasan Mutu Hasil Pertanian",
                        "Kehutanan",
                        "Teknika Kapal Penangkap Ikan"
                      ].includes(m)
                    )
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="💻 Mata Pelajaran Pilihan (BSKAP 046/2025)">
                  {availableMapelList
                    .filter((m) =>
                      m.includes("Koding") || m.includes("Kecerdasan Artifisial")
                    )
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>
                
                <optgroup label="🗣️ Pilihan Bahasa Asing">
                  {availableMapelList
                    .filter((m) =>
                      m.startsWith("Bahasa Arab") ||
                      m.startsWith("Bahasa Jepang") ||
                      m.startsWith("Bahasa Jerman") ||
                      m.startsWith("Bahasa Korea") ||
                      m.startsWith("Bahasa Mandarin") ||
                      m.startsWith("Bahasa Prancis")
                    )
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="🕌 / ⛪ Pendidikan Agama & Budi Pekerti">
                  {availableMapelList
                    .filter((m) =>
                      m.startsWith("Pendidikan Agama") ||
                      [
                        "Al-Qur'an Hadis",
                        "Akidah Akhlak",
                        "Fikih",
                        "Sejarah Kebudayaan Islam (SKI)",
                        "Bahasa Arab",
                      ].includes(m)
                    )
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="🎨 Seni (Pilihan Cabang Seni)">
                  {availableMapelList
                    .filter((m) => m.startsWith("Seni") && m !== "Seni" && !m.startsWith("Seni Budaya"))
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="🛠️ Prakarya dan Kewirausahaan (Pilihan Aspek)">
                  {availableMapelList
                    .filter((m) => m.startsWith("Prakarya") || m.startsWith("Kewirausahaan"))
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>

                <optgroup label="🏡 Muatan Lokal">
                  {availableMapelList
                    .filter((m) => m.includes("Muatan Lokal"))
                    .map((mapelName) => (
                      <option key={mapelName} value={mapelName}>
                        {mapelName}
                      </option>
                    ))}
                </optgroup>
              </>
            ) : (
              availableMapelList.map((mapelName) => (
                <option key={mapelName} value={mapelName}>
                  {mapelName}
                </option>
              ))
            )}
          </select>
          {input.fase === "Fase A" && (
            <p className="text-[10px] text-slate-500 leading-tight">
              <span className="font-semibold text-emerald-700">✓ Regulasi Fase A Resmi:</span> IPAS, B. Inggris, Informatika & Prakarya ditiadakan di Fase A agar fokus pada fondasi literasi, numerasi, dan karakter.
            </p>
          )}
          {input.fase === "Fase B" && (
            <p className="text-[10px] text-slate-500 leading-tight">
              <span className="font-semibold text-emerald-700">✓ Regulasi Fase B Resmi (BSKAP 046/2025):</span> IPAS dan Bahasa Inggris menjadi mapel wajib mandiri. Informatika diintegrasikan ke mapel lain dan Prakarya ditiadakan di jenjang SD.
            </p>
          )}
          {input.fase === "Fase C" && (
            <p className="text-[10px] text-slate-500 leading-tight">
              <span className="font-semibold text-emerald-700">✓ Regulasi Fase C Resmi (BSKAP 046/2025 & KMA 1503/2025):</span> IPAS dan Bahasa Inggris (CEFR A1) wajib mandiri. Mata Pelajaran Pilihan Baru: Koding & Kecerdasan Artifisial (KA). Informatika murni dan Prakarya baru dimulai di Fase D (SMP/MTs).
            </p>
          )}
          {input.fase === "Fase D" && (
            <p className="text-[10px] text-slate-500 leading-tight">
              <span className="font-semibold text-emerald-700">✓ Regulasi Fase D Resmi (BSKAP 046/2025 & KMA 1503/2025):</span> IPAS resmi dipecah menjadi IPA & IPS mandiri. Informatika wajib mandiri. Bahasa Inggris mencapai CEFR A2 (2000 kata). Tersedia pilihan cabang Seni (Rupa/Musik/Tari/Teater) & Prakarya (Budi Daya/Kerajinan/Pengolahan/Rekayasa), serta mapel pilihan Koding & KA.
            </p>
          )}
          {input.fase === "Fase E" && (
            <p className="text-[10px] text-slate-500 leading-tight">
              <span className="font-semibold text-emerald-700">✓ Regulasi Fase E Resmi (BSKAP 046/2025 & KMA 1503/2025):</span> Fase pondasi umum kelas X SMA/MA/SMK sebelum peminatan spesifik di Fase F. Bahasa Inggris setara CEFR B1 (~3000 kata). Untuk SMK/MAK diselenggarakan kelompok Dasar-Dasar Program Keahlian (PPLG, Elektronika, Mesin, Otomotif, DKV, Kuliner, Busana, Farmasi, dll).
            </p>
          )}
          {input.fase === "Fase F" && (
            <p className="text-[10px] text-slate-500 leading-tight">
              <span className="font-semibold text-emerald-700">✓ Regulasi Fase F Resmi (BSKAP 046/2025 & KMA 1503/2025):</span> Fase peminatan dan keahlian spesifik (Kelas XI-XII SMA/MA & XI-XIII SMK/MAK). Tersedia 60+ Konsentrasi Keahlian Vokasional SMK, Mata Pelajaran Pilihan Lanjutan (MIPA/IPS/Bahasa Asing), serta Koding & Kecerdasan Artifisial.
            </p>
          )}
        </div>

        {/* 4. Fase & Kelas */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
            4. Fase & Kelas <span className="text-rose-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            <select
              value={input.fase}
              onChange={(e) => handleFaseChange(e.target.value)}
              className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 font-medium focus:bg-white focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] outline-hidden transition-all text-sm cursor-pointer"
            >
              <option value="Fase A">Fase A (Kelas 1-2)</option>
              <option value="Fase B">Fase B (Kelas 3-4)</option>
              <option value="Fase C">Fase C (Kelas 5-6)</option>
              <option value="Fase D">Fase D (Kelas 7-9)</option>
              <option value="Fase E">Fase E (Kelas 10)</option>
              <option value="Fase F">Fase F (Kelas 11-12)</option>
            </select>
            <select
              value={input.kelas}
              onChange={(e) => handleInputChange("kelas", e.target.value)}
              className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 font-medium focus:bg-white focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] outline-hidden transition-all text-sm cursor-pointer"
            >
              {(FASE_KELAS_OPTIONS[input.fase] || []).map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 5. Nama Guru & NIP */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
            5. Nama Guru & NIP <span className="text-rose-500">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <input
              type="text"
              value={input.namaGuru}
              onChange={(e) => handleInputChange("namaGuru", e.target.value)}
              className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 font-medium focus:bg-white focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] outline-hidden transition-all"
            />
            <input
              type="text"
              value={input.nipGuru}
              onChange={(e) => handleInputChange("nipGuru", e.target.value)}
              className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 font-mono text-xs focus:bg-white focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] outline-hidden transition-all"
            />
          </div>
        </div>

        {/* 6. Nama Kepala & NIP */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
            6. Nama Kepala & NIP <span className="text-rose-500">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <input
              type="text"
              value={input.namaKepala}
              onChange={(e) => handleInputChange("namaKepala", e.target.value)}
              className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 font-medium focus:bg-white focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] outline-hidden transition-all"
            />
            <input
              type="text"
              value={input.nipKepala}
              onChange={(e) => handleInputChange("nipKepala", e.target.value)}
              className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 font-mono text-xs focus:bg-white focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] outline-hidden transition-all"
            />
          </div>
        </div>

        {/* 7. Waka Kurikulum & NIP */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
            7. Waka Kurikulum & NIP (Pengesahan)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Edi Wahyu, S. Pd."
              value={input.namaWakil ?? "Edi Wahyu, S. Pd."}
              onChange={(e) => handleInputChange("namaWakil", e.target.value)}
              className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 font-medium focus:bg-white focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] outline-hidden transition-all"
            />
            <input
              type="text"
              placeholder="NIP. Wakil Kepala"
              value={input.nipWakil ?? "-"}
              onChange={(e) => handleInputChange("nipWakil", e.target.value)}
              className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 font-mono text-xs focus:bg-white focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] outline-hidden transition-all"
            />
          </div>
        </div>

        {/* 8. Tahun Ajaran, Kota, Tanggal */}
        <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-slate-100">
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
              8. Tahun Ajaran <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              value={input.tahunAjaran}
              onChange={(e) => handleInputChange("tahunAjaran", e.target.value)}
              className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 font-semibold focus:bg-white focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] outline-hidden transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
              Kota / Kabupaten Pengesahan
            </label>
            <input
              type="text"
              value={input.kotaSatuan || ""}
              onChange={(e) => handleInputChange("kotaSatuan", e.target.value)}
              className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 font-medium focus:bg-white focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] outline-hidden transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
              Tanggal Pengesahan
            </label>
            <input
              type="text"
              value={input.tanggalPengesahan || ""}
              onChange={(e) => handleInputChange("tanggalPengesahan", e.target.value)}
              className="w-full bg-[#F8FAFC] border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 font-medium focus:bg-white focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] outline-hidden transition-all"
            />
          </div>
        </div>

        {/* Pengaturan Kop Surat Resmi & Identitas Sekolah */}
        <div className="md:col-span-2 lg:col-span-3 pt-3 border-t border-slate-200 space-y-4">
          {/* Logo Uploader Component */}
          <LogoUploader input={input} onChange={onChange} />

          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Identitas Lengkap Naskah Dinas (Kop Surat & Cover)
            </span>
            <span className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded font-mono">
              Otomatis Terintegrasi ke 9 Dokumen, Cover & DOCX
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-slate-50/70 p-3.5 rounded-lg border border-slate-200 text-xs">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-slate-600 uppercase">
                Instansi Induk (Baris 1 Kop)
              </label>
              <input
                type="text"
                value={input.instansiInduk ?? defaultInstansiInduk}
                onChange={(e) => handleInputChange("instansiInduk", e.target.value)}
                className="w-full bg-white border border-slate-300 rounded px-2.5 py-1.5 text-slate-900 font-medium text-xs focus:border-[#3B82F6] outline-hidden"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-slate-600 uppercase">
                Kantor Wilayah / Dinas (Baris 2 Kop)
              </label>
              <input
                type="text"
                value={input.kantorWilayah ?? defaultKantorWilayah}
                onChange={(e) => handleInputChange("kantorWilayah", e.target.value)}
                className="w-full bg-white border border-slate-300 rounded px-2.5 py-1.5 text-slate-900 font-medium text-xs focus:border-[#3B82F6] outline-hidden"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-slate-600 uppercase">
                Alamat Lengkap Satuan Pendidikan (Baris 4 Kop)
              </label>
              <input
                type="text"
                value={input.alamatSatuan ?? defaultAlamatSatuan}
                onChange={(e) => handleInputChange("alamatSatuan", e.target.value)}
                className="w-full bg-white border border-slate-300 rounded px-2.5 py-1.5 text-slate-900 font-medium text-xs focus:border-[#3B82F6] outline-hidden"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-slate-600 uppercase">
                Telepon, Pos, Email & Website (Baris 5 Kop)
              </label>
              <input
                type="text"
                value={input.kontakSatuan ?? defaultKontakSatuan}
                onChange={(e) => handleInputChange("kontakSatuan", e.target.value)}
                className="w-full bg-white border border-slate-300 rounded px-2.5 py-1.5 text-slate-900 font-medium text-xs focus:border-[#3B82F6] outline-hidden"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Professional Polish Dark Synthesis Action Box */}
      <div className="mt-8 p-5 sm:p-6 bg-[#0F172A] rounded-xl text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg border border-slate-800">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></span>
            <span className="text-xs font-mono text-[#3B82F6] font-bold uppercase tracking-wider">
              SYNTHESIS READY
            </span>
          </div>
          <div className="text-sm text-slate-300">
            Engine akan menyusun paket 9 dokumen resmi secara lengkap, deterministik, dan tanpa placeholder [...].
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 shrink-0">
          <button
            onClick={onReset}
            disabled={isGenerating}
            className="w-full sm:w-auto bg-slate-700 hover:bg-slate-600 active:scale-98 text-slate-200 px-6 py-3 rounded-lg font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed border border-slate-600"
          >
            <RefreshCw className="w-4 h-4 text-slate-400" />
            <span>RESET</span>
          </button>
          <button
            onClick={onGenerate}
            disabled={isGenerating}
            className="w-full sm:w-auto bg-[#3B82F6] hover:bg-blue-600 active:scale-98 text-white px-8 py-3 rounded-lg font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>MENYINTESIS DOKUMEN...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-blue-200" />
                <span>GENERATE PAKET DOKUMEN</span>
              </>
            )}
          </button>
        </div>
      </div>

    </div>
  );
};
