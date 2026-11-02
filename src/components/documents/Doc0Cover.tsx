// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import React from "react";
import { TeacherInput } from "../../types";
import { BookOpen, Award, CheckCircle2, ShieldCheck } from "lucide-react";
import { LogoEmblem } from "../LogoEmblem";
import { formatFaseKelasClean } from "../../utils/formatters";

interface Props {
  input: TeacherInput;
}

export const Doc0Cover: React.FC<Props> = ({ input }) => {
  const isKemenag = input.jalur === "Kemenag";

  const instansiInduk =
    input.instansiInduk ??
    (isKemenag
      ? "KEMENTERIAN AGAMA REPUBLIK INDONESIA"
      : "PEMERINTAH DAERAH PROVINSI / KABUPATEN / KOTA");

  const kantorWilayah =
    input.kantorWilayah ??
    (isKemenag
      ? `KANTOR KEMENTERIAN AGAMA ${input.kotaSatuan ? input.kotaSatuan.toUpperCase() : "KABUPATEN / KOTA"}`
      : "DINAS PENDIDIKAN DAN KEBUDAYAAN");

  const alamat =
    input.alamatSatuan ??
    `Jl. Pendidikan No. 01, ${input.kotaSatuan || "Kabupaten/Kota"}`;

  const kontak =
    input.kontakSatuan ??
    `Telp. (021) 87654321 | Email: info@${input.namaSatuan.toLowerCase().replace(/[^a-z0-9]/g, "") || "sekolah"}.sch.id`;

  return (
    <div className="bg-white p-6 sm:p-10 rounded-xl shadow-xs border border-slate-200 print:border-none print:shadow-none print:p-0 print-page-document print:h-[235mm] print:max-h-[235mm] print:box-border print:break-inside-avoid print:break-after-page">
      {/* Bingkai Ganda Luar Standar Naskah Dinas Cover */}
      <div className="border-[3px] border-slate-900 print:border-black p-2 print:p-1 rounded-lg print:rounded-none print:h-full print:box-border">
        <div className="border border-slate-700 print:border-black p-6 sm:p-8 print:p-3 flex flex-col items-center justify-between min-h-[820px] print:min-h-0 print:h-full text-center print:box-border">
          
          {/* Bagian Atas: Header Instansi & Judul */}
          <div className="w-full space-y-4 print:space-y-1.5">
            {/* Header Instansi Kecil */}
            {(instansiInduk || kantorWilayah) && (
            <div className="space-y-1.5 print:space-y-0.5 border-b border-slate-300 print:border-slate-800 pb-3 print:pb-1">
              {instansiInduk && (
                <h4 className="text-xs sm:text-sm print:text-[8.5pt] font-bold tracking-wider uppercase text-slate-800 print:text-black">
                  {instansiInduk}
                </h4>
              )}
              {kantorWilayah && (
                <h5 className="text-[11px] sm:text-xs print:text-[8pt] font-semibold tracking-wide uppercase text-slate-700 print:text-black">
                  {kantorWilayah}
                </h5>
              )}
            </div>
            )}

            {/* Judul Utama Portofolio */}
            <div className="pt-2 print:pt-0.5 space-y-2 print:space-y-1">
              <h1 className="text-xl sm:text-2xl lg:text-3xl print:text-[13pt] font-black uppercase tracking-tight text-slate-950 print:text-black leading-tight print:leading-snug">
                PERANGKAT ADMINISTRASI GURU &amp; PERENCANAAN PEMBELAJARAN
              </h1>
              <div className="inline-block bg-[#0F172A] text-white print:bg-black px-5 py-2 print:px-3 print:py-0.5 rounded-md text-xs sm:text-sm print:text-[8pt] font-bold tracking-wider uppercase shadow-2xs">
                {isKemenag
                  ? "KURIKULUM MADRASAH BERBASIS CINTA (KBC) & DEEP LEARNING"
                  : "KURIKULUM NASIONAL 2025 • PENDEKATAN DEEP LEARNING"}
              </div>
            </div>
          </div>

          {/* Bagian Tengah: LOGO BESAR KOP / COVER (Dua Logo / Single Logo) */}
          <div className="my-6 sm:my-8 print:my-2 flex flex-col items-center justify-center w-full">
            <div className="flex items-center justify-center gap-6 sm:gap-10 print:gap-4 my-2 print:my-1">
              {/* Logo Kiri / Logo Utama */}
              <div className="w-36 h-36 sm:w-40 sm:h-40 print:w-32 print:h-32 flex items-center justify-center">
                <LogoEmblem
                  logoUrl={input.logoUrl}
                  presetOption={input.logoOption}
                  jalur={input.jalur}
                  className="w-36 h-36 sm:w-40 sm:h-40 print:w-32 print:h-32"
                  alt={`Logo Kiri ${input.namaSatuan}`}
                />
              </div>

              {/* Logo Kanan (Jika ada diinput) */}
              {(input.logoKananUrl || input.logoKananOption) && input.logoKananOption !== "none" && (
                <div className="w-36 h-36 sm:w-40 sm:h-40 print:w-32 print:h-32 flex items-center justify-center">
                  <LogoEmblem
                    logoUrl={input.logoKananUrl}
                    presetOption={input.logoKananOption}
                    jalur={input.jalur === "Kemenag" ? "Dinas" : "Kemenag"}
                    className="w-36 h-36 sm:w-40 sm:h-40 print:w-32 print:h-32"
                    alt={`Logo Kanan ${input.namaSatuan}`}
                  />
                </div>
              )}
            </div>
            
            {/* Box Spesifikasi Mata Pelajaran & Kelas */}
            <div className="mt-6 sm:mt-8 print:mt-1.5 bg-slate-50 print:bg-transparent border border-slate-300 print:border-slate-800 rounded-xl print:rounded-none p-4 sm:p-5 print:p-2 max-w-lg w-full text-left space-y-2 sm:space-y-2.5 print:space-y-0.5 text-xs sm:text-sm print:text-[8pt] shadow-2xs">
              <div className="flex justify-between items-center border-b border-slate-200 print:border-slate-400 pb-2 sm:pb-2.5 print:pb-0.5">
                <span className="font-semibold text-slate-600 print:text-black">Mata Pelajaran</span>
                <span className="font-bold text-slate-950 print:text-black text-right">{input.mataPelajaran}</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-200 print:border-slate-400 pb-2 sm:pb-2.5 print:pb-0.5">
                <span className="font-semibold text-slate-600 print:text-black">Fase &amp; Kelas</span>
                <span className="font-bold text-slate-950 print:text-black text-right">{formatFaseKelasClean(input.fase, input.kelas)}</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-200 print:border-slate-400 pb-2 sm:pb-2.5 print:pb-0.5">
                <span className="font-semibold text-slate-600 print:text-black">Semester</span>
                <span className="font-bold text-slate-950 print:text-black text-right">Ganjil &amp; Genap</span>
              </div>
              <div className="flex justify-between items-center pt-0.5 print:pt-0">
                <span className="font-semibold text-slate-600 print:text-black">Tahun Ajaran</span>
                <span className="font-bold text-slate-950 print:text-black text-right">{input.tahunAjaran}</span>
              </div>
            </div>
          </div>

          {/* Bagian Bawah: Data Guru, Kepala Sekolah & Satuan Pendidikan */}
          <div className="w-full space-y-4 print:space-y-1 pt-4 sm:pt-5 print:pt-1 border-t border-slate-300 print:border-slate-800">
            {/* Grid Penyusun & Pengesahan */}
            <div className="grid grid-cols-2 gap-4 print:gap-3 text-xs sm:text-sm print:text-[8pt] text-center">
              <div className="bg-slate-50 print:bg-transparent p-3 print:p-1 rounded-lg border border-slate-200 print:border-none flex flex-col justify-between">
                <div className="text-[11px] print:text-[7.5pt] text-slate-500 print:text-black font-bold uppercase tracking-wider leading-relaxed">
                  <p>Disusun Oleh</p>
                  <p>Guru Mata Pelajaran</p>
                </div>
                <div className="pt-14 sm:pt-16 print:pt-12">
                  <p className="font-extrabold text-slate-900 print:text-black text-sm sm:text-base print:text-[8.5pt] underline decoration-1 underline-offset-4">{input.namaGuru}</p>
                  <p className="text-slate-700 print:text-black font-mono text-xs print:text-[7.5pt] mt-1">NIP. {input.nipGuru || "-"}</p>
                </div>
              </div>
              <div className="bg-slate-50 print:bg-transparent p-3 print:p-1 rounded-lg border border-slate-200 print:border-none flex flex-col justify-between">
                <div className="text-[11px] print:text-[7.5pt] text-slate-500 print:text-black font-bold uppercase tracking-wider leading-relaxed">
                  <p>Mengetahui</p>
                  <p>Kepala {input.jalur === "Kemenag" ? "Madrasah" : "Sekolah"}</p>
                </div>
                <div className="pt-14 sm:pt-16 print:pt-12">
                  <p className="font-extrabold text-slate-900 print:text-black text-sm sm:text-base print:text-[8.5pt] underline decoration-1 underline-offset-4">{input.namaKepala}</p>
                  <p className="text-slate-700 print:text-black font-mono text-xs print:text-[7.5pt] mt-1">NIP. {input.nipKepala || "-"}</p>
                </div>
              </div>
            </div>

            {/* Nama Satuan Pendidikan */}
            <div className="space-y-1 print:space-y-0.5 pt-1 print:pt-0">
              <h2 className="text-base sm:text-lg print:text-[10pt] font-black uppercase tracking-tight text-slate-950 print:text-black">
                {input.namaSatuan}
              </h2>
              {alamat && (
              <p className="text-xs print:text-[7.5pt] text-slate-600 print:text-black">
                {alamat}
              </p>
              )}
              {kontak && (
              <p className="text-[11px] print:text-[7pt] text-slate-500 print:text-black italic">
                {kontak}
              </p>
              )}
              <p className="text-xs print:text-[7.5pt] font-bold text-slate-800 print:text-black pt-0.5 print:pt-0">
                {input.kotaSatuan || "Jakarta"}, {input.tahunAjaran.split("/")[0] || "2025"}
              </p>
            </div>

            {/* Footer Daftar 9 Dokumen Terpadu */}
            <div className="text-[10px] print:text-[7pt] text-slate-500 print:text-black border-t border-slate-200 print:border-slate-800 pt-2 print:pt-0.5 space-y-0.5">
              <p className="font-bold text-slate-700 print:text-black">
                PAKET LENGKAP 9 DOKUMEN ADMINISTRASI PEMBELAJARAN RESMI 2025/2026:
              </p>
              <p className="leading-relaxed">
                1. Analisis CP &amp; TP • 2. Alur Tujuan (ATP) • 3. Program Tahunan (PROTA) • 4. Program Semester (PROSEM) • 5. Modul Ajar (MA) • 6. LKPD • 7. Rubrik KKTP • 8. Kisi-Kisi Soal • 9. Bank Soal &amp; Penskoran
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
