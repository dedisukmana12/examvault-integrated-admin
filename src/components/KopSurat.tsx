// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import React from "react";
import { TeacherInput } from "../types";
import { LogoEmblem, SchoolSealBadgeSvg } from "./LogoEmblem";
import { formatFaseKelasClean } from "../utils/formatters";

interface Props {
  input: TeacherInput;
  documentTitle: string;
  documentSubtitle?: string;
}

export const KopSurat: React.FC<Props> = ({
  input,
  documentTitle,
  documentSubtitle,
}) => {
  const isKemenag = input.jalur === "Kemenag";

  // Default ministry/institution hierarchy
  const defaultInstansiInduk = isKemenag
    ? "KEMENTERIAN AGAMA REPUBLIK INDONESIA"
    : "PEMERINTAH DAERAH PROVINSI / KABUPATEN / KOTA";

  const defaultKantorWilayah = isKemenag
    ? `KANTOR KEMENTERIAN AGAMA ${input.kotaSatuan ? input.kotaSatuan.toUpperCase() : "KABUPATEN / KOTA"}`
    : "DINAS PENDIDIKAN DAN KEBUDAYAAN";

  const defaultAlamat =
    input.alamatSatuan ??
    `Jl. Pendidikan No. 01, ${input.kotaSatuan || "Kabupaten/Kota"}, Provinsi Jawa Barat`;

  const defaultKontak =
    input.kontakSatuan ??
    `Telp. (021) 87654321 | Pos: 42274 | Email: info@${input.namaSatuan.toLowerCase().replace(/[^a-z0-9]/g, "") || "sekolah"}.sch.id`;

  const instansiInduk = input.instansiInduk ?? defaultInstansiInduk;
  const kantorWilayah = input.kantorWilayah ?? defaultKantorWilayah;

  return (
    <div className="mb-6 print:mb-2.5 w-full text-slate-900 print:text-black">
      {/* Kop Surat Header Table/Grid (Dua Logo: Kiri & Kanan) */}
      <div className="flex items-center justify-between gap-3 sm:gap-4 print:gap-2 pb-3 print:pb-1">
        {/* 1. Logo Kiri (Logo Kementerian / Lembaga Pembina / Yayasan) */}
        <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 print:w-20 print:h-20 flex items-center justify-center">
          <LogoEmblem
            logoUrl={input.logoUrl}
            presetOption={input.logoOption}
            jalur={input.jalur}
            className="w-20 h-20 sm:w-24 sm:h-24 print:w-20 print:h-20"
            alt="Logo Kiri Kop"
          />
        </div>

        {/* 2. Kop Surat Teks Tengah */}
        <div className="flex-1 text-center space-y-0.5 print:space-y-0 px-2 print:px-1">
          <h4 className="text-xs sm:text-sm print:text-[8pt] font-bold tracking-wider uppercase text-slate-800 print:text-black">
            {instansiInduk}
          </h4>
          <h4 className="text-xs sm:text-sm print:text-[8pt] font-bold tracking-wider uppercase text-slate-800 print:text-black">
            {kantorWilayah}
          </h4>
          <h2 className="text-base sm:text-xl print:text-[11pt] font-extrabold tracking-tight uppercase text-slate-950 print:text-black mt-0.5 print:mt-0">
            {input.namaSatuan}
          </h2>
          <p className="text-[11px] sm:text-xs print:text-[7.5pt] text-slate-600 print:text-black font-normal leading-tight">
            {defaultAlamat}
          </p>
          <p className="text-[10px] sm:text-[11px] print:text-[7pt] text-slate-500 print:text-black font-normal italic leading-tight">
            {defaultKontak}
          </p>
        </div>

        {/* 3. Logo Kanan (Logo Sekolah/Madrasah atau Logo Kurikulum 2025/2026) */}
        <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 print:w-20 print:h-20 flex items-center justify-center">
          {input.logoKananUrl ? (
            <LogoEmblem
              logoUrl={input.logoKananUrl}
              presetOption="custom"
              className="w-20 h-20 sm:w-24 sm:h-24 print:w-20 print:h-20"
              alt="Logo Kanan Kop"
            />
          ) : input.logoKananOption === "kemdikbud" ? (
            <LogoEmblem
              presetOption="kemdikbud"
              className="w-20 h-20 sm:w-24 sm:h-24 print:w-20 print:h-20"
              alt="Logo Kanan Kemdikbud"
            />
          ) : input.logoKananOption === "kemenag" ? (
            <LogoEmblem
              presetOption="kemenag"
              className="w-20 h-20 sm:w-24 sm:h-24 print:w-20 print:h-20"
              alt="Logo Kanan Kemenag"
            />
          ) : input.logoKananOption === "none" ? (
            <div className="w-20 h-20 sm:w-24 sm:h-24 print:w-20 print:h-20 opacity-0 pointer-events-none" />
          ) : (
            // Default: Lambang Penjamin Mutu Kurikulum / School Seal
            <SchoolSealBadgeSvg isKemenag={isKemenag} />
          )}
        </div>
      </div>

      {/* Garis Ganda Pembatas Kop Surat Resmi (Thick-Thin Standard) */}
      <div className="w-full mb-5 print:mb-2">
        <div className="border-t-[3px] border-black"></div>
        <div className="border-t-[1px] border-black mt-[1.5px]"></div>
      </div>

      {/* Judul Dokumen Resmi (Tanpa awalan nomor dokumen "DOKUMEN 1, 2, 3") */}
      <div className="text-center mb-4 print:mb-2">
        <h2 className="text-base sm:text-lg print:text-[11pt] font-extrabold uppercase tracking-tight text-slate-950 print:text-black leading-snug">
          {documentTitle}
        </h2>
        {documentSubtitle && (
          <p className="text-xs sm:text-sm print:text-[8pt] text-slate-600 print:text-black font-medium mt-1 print:mt-0 leading-relaxed">
            {documentSubtitle}
          </p>
        )}

        {/* Strip Identitas Cepat */}
        <div className="mt-2.5 print:mt-1 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs print:text-[8pt] font-semibold text-slate-800 bg-[#F8FAFC] print:bg-transparent border border-slate-200 print:border-none px-3.5 py-1.5 print:p-0 rounded-md">
          <span>
            <strong className="text-slate-500 print:text-black">Mata Pelajaran:</strong> {input.mataPelajaran}
          </span>
          <span className="text-slate-400 print:text-black">•</span>
          <span>
            <strong className="text-slate-500 print:text-black">Fase / Kelas:</strong> {formatFaseKelasClean(input.fase, input.kelas)}
          </span>
          <span className="text-slate-400 print:text-black">•</span>
          <span>
            <strong className="text-slate-500 print:text-black">Tahun Ajaran:</strong> {input.tahunAjaran}
          </span>
        </div>
      </div>
    </div>
  );
};
