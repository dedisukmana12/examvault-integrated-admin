// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import React from "react";
import { CompleteDocumentPackage, TeacherInput } from "../../types";
import { KopSurat } from "../KopSurat";
import { SignatureBlock } from "../SignatureBlock";

interface Props {
  prota: CompleteDocumentPackage["doc3Prota"];
  input: TeacherInput;
}

export const Doc3Prota: React.FC<Props> = ({ prota, input }) => {
  const ganjilItems = prota.items.filter((it) => it.semester === "GANJIL");
  const genapItems = prota.items.filter((it) => it.semester === "GENAP");

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xs border border-slate-200 print:border-none print:shadow-none print:p-0 print-page-document">
      {/* Kop Surat Resmi & Judul Dokumen */}
      <KopSurat
        input={input}
        documentTitle="PROGRAM TAHUNAN (PROTA)"
        documentSubtitle="Distribusi Alokasi Jam Pelajaran Resmi (36 Minggu Efektif Standar / Sesuai Struktur Permendikdasmen 13 / KMA 1503)"
      />

      {/* Tabel Baku PROTA */}
      <div className="overflow-x-auto print:overflow-visible">
        <table className="tabel-dokumen w-full text-left text-xs sm:text-sm print:text-[8pt] border-collapse border border-slate-300 print:border-slate-800">
          <thead>
            <tr className="bg-slate-100 print:bg-slate-200 text-slate-800 print:text-black font-bold uppercase tracking-wider text-xs print:text-[7.5pt]">
              <th className="border border-slate-300 print:border-slate-800 p-2 print:p-1 text-center w-20 print:w-16">Semester</th>
              <th className="border border-slate-300 print:border-slate-800 p-2 print:p-1 text-center w-10 min-w-[36px] max-w-[44px] print:w-7 print:min-w-0">No.</th>
              <th className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 w-auto min-w-[200px]">
                Tujuan Pembelajaran (TP) / Lingkup Materi
              </th>
              <th className="border border-slate-300 print:border-slate-800 p-2 print:p-1 text-center w-24 print:w-16 whitespace-nowrap">
                Alokasi Waktu (JP)
              </th>
              <th className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 w-44 print:w-32">
                Keterangan Tambahan
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 print:divide-slate-800">
            {/* HEADER PEMBAGI SEMESTER GANJIL */}
            <tr className="bg-indigo-50/70 print:bg-slate-200 text-indigo-950 print:text-black font-extrabold">
              <td colSpan={5} className="border border-slate-300 print:border-slate-800 p-2 print:py-0.5 print:px-1 text-left uppercase text-xs print:text-[7.5pt] tracking-wider">
                A. PROGRAM SEMESTER I (GANJIL) • ALOKASI: {prota.subtotalGanjil} JP
              </td>
            </tr>

            {/* DAFTAR TP SEMESTER GANJIL */}
            {ganjilItems.map((item, idx) => (
              <tr key={`ganjil-${idx}`} className="hover:bg-slate-50/50 print:hover:bg-transparent">
                <td className="border border-slate-300 print:border-slate-800 p-2 print:py-0.5 print:px-1 text-center font-semibold text-slate-700 print:text-black text-xs print:text-[7.5pt]">
                  GANJIL
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2 print:py-0.5 print:px-1 text-center font-semibold text-slate-700 print:text-black w-10 min-w-[36px] max-w-[44px] print:w-7 print:min-w-0">
                  {item.no}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:py-0.5 print:px-1 text-slate-900 print:text-black font-medium leading-relaxed print:leading-tight">
                  {item.tujuanPembelajaran}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:py-0.5 print:px-1 text-center font-bold text-indigo-700 print:text-black whitespace-nowrap">
                  {item.alokasiJP} JP
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:py-0.5 print:px-1 text-slate-600 print:text-black text-xs print:text-[7.5pt] print:leading-tight">
                  {item.keterangan}
                </td>
              </tr>
            ))}

            {/* SUBTOTAL GANJIL */}
            <tr className="bg-indigo-50/50 print:bg-slate-100 font-semibold text-slate-900 print:text-black">
              <td colSpan={3} className="border border-slate-300 print:border-slate-800 p-2.5 print:py-0.5 print:px-1 text-right uppercase text-xs print:text-[7.5pt] font-bold">
                Subtotal Alokasi Semester Ganjil
              </td>
              <td className="border border-slate-300 print:border-slate-800 p-2.5 print:py-0.5 print:px-1 text-center font-bold text-indigo-800 print:text-black whitespace-nowrap">
                {prota.subtotalGanjil} JP
              </td>
              <td className="border border-slate-300 print:border-slate-800 p-2.5 print:py-0.5 print:px-1 text-xs print:text-[7.5pt] text-slate-700 print:text-black">
                Sesuai Struktur Kurikulum Resmi 2025
              </td>
            </tr>

            {/* HEADER PEMBAGI SEMESTER GENAP */}
            <tr className="bg-purple-50/70 print:bg-slate-200 text-purple-950 print:text-black font-extrabold">
              <td colSpan={5} className="border border-slate-300 print:border-slate-800 p-2 print:py-0.5 print:px-1 text-left uppercase text-xs print:text-[7.5pt] tracking-wider">
                B. PROGRAM SEMESTER II (GENAP) • ALOKASI: {prota.subtotalGenap} JP
              </td>
            </tr>

            {/* DAFTAR TP SEMESTER GENAP */}
            {genapItems.map((item, idx) => (
              <tr key={`genap-${idx}`} className="hover:bg-slate-50/50 print:hover:bg-transparent">
                <td className="border border-slate-300 print:border-slate-800 p-2 print:py-0.5 print:px-1 text-center font-semibold text-slate-700 print:text-black text-xs print:text-[7.5pt]">
                  GENAP
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2 print:py-0.5 print:px-1 text-center font-semibold text-slate-700 print:text-black w-10 min-w-[36px] max-w-[44px] print:w-7 print:min-w-0">
                  {item.no}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:py-0.5 print:px-1 text-slate-900 print:text-black font-medium leading-relaxed print:leading-tight">
                  {item.tujuanPembelajaran}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:py-0.5 print:px-1 text-center font-bold text-indigo-700 print:text-black whitespace-nowrap">
                  {item.alokasiJP} JP
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:py-0.5 print:px-1 text-slate-600 print:text-black text-xs print:text-[7.5pt] print:leading-tight">
                  {item.keterangan}
                </td>
              </tr>
            ))}

            {/* SUBTOTAL GENAP */}
            <tr className="bg-purple-50/50 print:bg-slate-100 font-semibold text-slate-900 print:text-black">
              <td colSpan={3} className="border border-slate-300 print:border-slate-800 p-2.5 print:py-0.5 print:px-1 text-right uppercase text-xs print:text-[7.5pt] font-bold">
                Subtotal Alokasi Semester Genap
              </td>
              <td className="border border-slate-300 print:border-slate-800 p-2.5 print:py-0.5 print:px-1 text-center font-bold text-purple-800 print:text-black whitespace-nowrap">
                {prota.subtotalGenap} JP
              </td>
              <td className="border border-slate-300 print:border-slate-800 p-2.5 print:py-0.5 print:px-1 text-xs print:text-[7.5pt] text-slate-700 print:text-black">
                Sesuai Struktur Kurikulum Resmi 2025
              </td>
            </tr>

            {/* TOTAL 1 TAHUN */}
            <tr className="bg-emerald-100/70 print:bg-slate-200 font-bold text-slate-900 print:text-black">
              <td colSpan={3} className="border border-slate-300 print:border-slate-800 p-2.5 print:py-1 print:px-1 text-center uppercase tracking-wider text-sm print:text-[8pt] font-black">
                TOTAL JAM PELAJARAN 1 TAHUN AJARAN
              </td>
              <td className="border border-slate-300 print:border-slate-800 p-2.5 print:py-1 print:px-1 text-center text-emerald-900 print:text-black text-base print:text-[8.5pt] font-black whitespace-nowrap">
                {prota.totalTahun} JP
              </td>
              <td className="border border-slate-300 print:border-slate-800 p-2.5 print:py-1 print:px-1 text-xs print:text-[7.5pt] text-slate-800 print:text-black font-semibold">
                Terkunci Sesuai Regulasi Resmi (36 Minggu Efektif)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Lembar Pengesahan */}
      <SignatureBlock input={input} />
    </div>
  );
};
