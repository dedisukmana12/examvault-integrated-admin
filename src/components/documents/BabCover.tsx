// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import React from "react";
import { TeacherInput } from "../../types";
import { LogoEmblem } from "../LogoEmblem";
import { formatFaseKelasClean } from "../../utils/formatters";

interface Props {
  babNumber: string; // e.g. "BAB I", "BAB II", etc.
  docTitle: string; // e.g. "ANALISIS CAPAIAN PEMBELAJARAN (CP) DAN PERUMUSAN TUJUAN PEMBELAJARAN (TP)"
  docSubtitle?: string; // e.g. "Dekonstruksi KKO Bloom C1-C6 & Konten Esensial BSKAP 046/2025"
  input: TeacherInput;
}

export const BabCover: React.FC<Props> = ({
  babNumber,
  docTitle,
  docSubtitle,
  input,
}) => {
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
    `Jl. Raya Pendidikan No. 01, ${input.kotaSatuan || "Kabupaten/Kota"}`;

  const kontak =
    input.kontakSatuan ??
    `Telp. (021) 87654321 | Email: info@${input.namaSatuan.toLowerCase().replace(/[^a-z0-9]/g, "") || "sekolah"}.sch.id`;

  return (
    <div className="bg-white p-6 sm:p-10 rounded-xl shadow-xs border border-slate-200 print:border-none print:shadow-none print:p-0 print-page-document print:h-[235mm] print:max-h-[235mm] print:box-border print:break-inside-avoid print:break-after-page my-6 first:mt-0 print:my-0">
      {/* Bingkai Ganda Luar Standar Naskah Dinas Cover Bab */}
      <div className="border-[3px] border-slate-900 print:border-black p-2 print:p-1 rounded-lg print:rounded-none print:h-full print:box-border">
        <div className="border border-slate-700 print:border-black p-6 sm:p-8 print:p-3 flex flex-col items-center justify-between min-h-[800px] print:min-h-0 print:h-full text-center print:box-border">
          
          {/* Bagian Atas: Header Instansi */}
          <div className="w-full space-y-3 print:space-y-1">
            {(instansiInduk || kantorWilayah) && (
            <div className="space-y-1 print:space-y-0.5 border-b border-slate-300 print:border-slate-800 pb-3 print:pb-1">
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

            {/* Nama Satuan Pendidikan Atas */}
            <h3 className="text-base sm:text-lg print:text-[10pt] font-black uppercase tracking-tight text-slate-950 print:text-black">
              {input.namaSatuan}
            </h3>
          </div>

          {/* Bagian Tengah: LOGO & JUDUL BAB (Tanpa Isi & Tanpa Tabel) */}
          <div className="my-6 print:my-1.5 flex flex-col items-center justify-center space-y-6 print:space-y-2 w-full max-w-xl">
            
            {/* Display Dua Logo / Logo Tunggal */}
            <div className="flex items-center justify-center gap-6 sm:gap-10 print:gap-4 my-2 print:my-1">
              {/* Logo Kiri */}
              <div className="w-32 h-32 sm:w-36 sm:h-36 print:w-28 print:h-28 flex items-center justify-center">
                <LogoEmblem
                  logoUrl={input.logoUrl}
                  presetOption={input.logoOption}
                  jalur={input.jalur}
                  className="w-32 h-32 sm:w-36 sm:h-36 print:w-28 print:h-28"
                  alt={`Logo Kiri ${input.namaSatuan}`}
                />
              </div>

              {/* Logo Kanan (Jika diatur/ada) */}
              {(input.logoKananUrl || input.logoKananOption) && input.logoKananOption !== "none" && (
                <div className="w-32 h-32 sm:w-36 sm:h-36 print:w-28 print:h-28 flex items-center justify-center">
                  <LogoEmblem
                    logoUrl={input.logoKananUrl}
                    presetOption={input.logoKananOption}
                    jalur={input.jalur === "Kemenag" ? "Dinas" : "Kemenag"}
                    className="w-32 h-32 sm:w-36 sm:h-36 print:w-28 print:h-28"
                    alt={`Logo Kanan ${input.namaSatuan}`}
                  />
                </div>
              )}
            </div>

            {/* Nomor Bab & Judul Bab */}
            <div className="space-y-2.5 print:space-y-1 pt-2 print:pt-0">
              <div className="inline-block bg-[#0F172A] text-white print:bg-black px-6 py-2 print:px-3 print:py-0.5 rounded-md text-sm sm:text-base print:text-[8.5pt] font-black tracking-widest uppercase shadow-xs">
                {babNumber}
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl print:text-[13pt] font-black uppercase tracking-tight text-slate-950 print:text-black leading-tight print:leading-snug">
                {docTitle}
              </h1>
              {docSubtitle && (
                <p className="text-xs sm:text-sm print:text-[8pt] text-slate-600 print:text-black font-medium leading-relaxed max-w-md mx-auto">
                  {docSubtitle}
                </p>
              )}
            </div>

            {/* Spesifikasi Identitas Singkat (Tanpa Tabel Data) */}
            <div className="border-t border-b border-slate-300 print:border-slate-800 py-2.5 print:py-1 w-full space-y-1 print:space-y-0.5 text-xs sm:text-sm print:text-[8pt]">
              <div className="flex justify-between px-4 print:px-2">
                <span className="text-slate-600 print:text-black font-semibold">Mata Pelajaran:</span>
                <span className="font-extrabold text-slate-950 print:text-black">{input.mataPelajaran}</span>
              </div>
              <div className="flex justify-between px-4 print:px-2">
                <span className="text-slate-600 print:text-black font-semibold">Fase / Kelas:</span>
                <span className="font-extrabold text-slate-950 print:text-black">{formatFaseKelasClean(input.fase, input.kelas)}</span>
              </div>
              <div className="flex justify-between px-4 print:px-2">
                <span className="text-slate-600 print:text-black font-semibold">Tahun Ajaran:</span>
                <span className="font-extrabold text-slate-950 print:text-black">{input.tahunAjaran}</span>
              </div>
            </div>

          </div>

          {/* Bagian Bawah: Penyusun, Kepala & Tahun */}
          <div className="w-full space-y-4 print:space-y-1 pt-3 print:pt-1 border-t border-slate-300 print:border-slate-800">
            {/* 2 Kolom Guru & Kepala */}
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

            {/* Kota & Tahun */}
            <div className="text-[11px] sm:text-xs print:text-[7.5pt] text-slate-600 print:text-black space-y-0.5">
              {alamat && <p>{alamat}</p>}
              <p className="font-bold text-slate-900 print:text-black">
                {input.kotaSatuan || "Jakarta"}, {input.tahunAjaran.split("/")[0] || "2025"}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
