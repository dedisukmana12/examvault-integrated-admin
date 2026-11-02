// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import React from "react";
import { Doc7KKTP as KKTPType, TeacherInput } from "../../types";
import { KopSurat } from "../KopSurat";
import { SignatureBlock } from "../SignatureBlock";

interface Props {
  kktp: KKTPType;
  input: TeacherInput;
}

export const Doc7KKTP: React.FC<Props> = ({ kktp, input }) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xs border border-slate-200 print:border-none print:shadow-none print:p-0 print-page-document">
      {/* Kop Surat Resmi & Judul Dokumen */}
      <KopSurat
        input={input}
        documentTitle="KRITERIA KETERCAPAIAN TUJUAN PEMBELAJARAN (KKTP)"
        documentSubtitle="Standar Asesmen PPA Revisi 2025: Rubrik Interval Kualitatif (Tanpa KKM Angka Tunggal Mati)"
      />

      {/* Target TP */}
      <div className="mb-6 print:mb-3 p-3 print:p-1.5 bg-indigo-50/50 print:bg-transparent border border-indigo-200 print:border-slate-300 rounded-lg text-xs sm:text-sm print:text-[8pt]">
        <span className="font-bold text-indigo-950 print:text-black block text-xs print:text-[7pt] uppercase mb-0.5">
          Tujuan Pembelajaran yang Dinilai:
        </span>
        <p className="font-medium text-slate-900 print:text-black leading-relaxed print:leading-snug">{kktp.tujuanPembelajaran}</p>
      </div>

      {/* Tabel Rubrik Interval Kualitatif */}
      <div className="overflow-x-auto print:overflow-visible mb-6 print:mb-3">
        <table className="tabel-dokumen w-full text-left text-xs print:text-[7.5pt] border-collapse border border-slate-300 print:border-slate-800">
          <thead>
            <tr className="bg-slate-100 print:bg-slate-200 text-slate-800 print:text-black font-bold uppercase text-[11px] print:text-[7.5pt]">
              <th className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 w-1/5">
                Kriteria Ketercapaian Kompetensi
              </th>
              <th className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 w-1/5 bg-rose-50/70 print:bg-transparent text-rose-900 print:text-black">
                Baru Berkembang <br />
                <span className="font-normal lowercase text-[10px] print:text-[6.5pt]">(0% - 40%)</span>
              </th>
              <th className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 w-1/5 bg-amber-50/70 print:bg-transparent text-amber-900 print:text-black">
                Layak / Cukup <br />
                <span className="font-normal lowercase text-[10px] print:text-[6.5pt]">(41% - 65%)</span>
              </th>
              <th className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 w-1/5 bg-emerald-50/70 print:bg-transparent text-emerald-900 print:text-black">
                Cakap / Memenuhi <br />
                <span className="font-normal lowercase text-[10px] print:text-[6.5pt]">(66% - 85% - Standar SKL)</span>
              </th>
              <th className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 w-1/5 bg-indigo-50/70 print:bg-transparent text-indigo-900 print:text-black">
                Mahir <br />
                <span className="font-normal lowercase text-[10px] print:text-[6.5pt]">(86% - 100% - Melampaui)</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 print:divide-slate-800">
            {kktp.indikatorRubrik.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 print:hover:bg-transparent">
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 font-bold text-slate-900 print:text-black align-top">
                  {item.kriteria}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-slate-700 print:text-black align-top leading-relaxed print:leading-snug text-xs print:text-[7.5pt]">
                  {item.baruBerkembang}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-slate-700 print:text-black align-top leading-relaxed print:leading-snug text-xs print:text-[7.5pt]">
                  {item.layakCukup}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 font-medium text-slate-900 print:text-black align-top leading-relaxed print:leading-snug text-xs print:text-[7.5pt] bg-emerald-50/20 print:bg-transparent">
                  {item.cakapMemenuhi}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-slate-700 print:text-black align-top leading-relaxed print:leading-snug text-xs print:text-[7.5pt]">
                  {item.mahir}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Konsekuensi Tindak Lanjut Asesmen */}
      <div className="mb-6 print:mb-3">
        <h3 className="text-sm print:text-[8.5pt] font-bold uppercase tracking-wider text-slate-900 print:text-black bg-slate-100 print:bg-slate-200 px-3 py-1.5 print:py-1 print:px-2 rounded-md mb-3 print:mb-1.5">
          KONSEKUENSI &amp; SKENARIO TINDAK LANJUT ASESMEN RESMI
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 print:gap-1.5 text-xs sm:text-sm print:text-[7.5pt]">
          {kktp.tindakLanjut.map((tl, i) => (
            <div
              key={i}
              className="border border-slate-200 print:border-slate-300 p-3 print:p-1.5 rounded-lg bg-slate-50/50 print:bg-transparent avoid-break print:break-inside-avoid"
            >
              <div className="flex items-center gap-2 mb-1 print:mb-0.5">
                <span className="font-mono font-bold text-indigo-700 print:text-black bg-indigo-50 print:bg-transparent px-2 py-0.5 rounded text-xs print:text-[7pt] print:border print:border-slate-300">
                  {tl.range}
                </span>
                <span className="font-bold text-slate-900 print:text-black">{tl.predikat}</span>
              </div>
              <p className="text-slate-700 print:text-black leading-relaxed print:leading-snug text-xs print:text-[7.5pt]">{tl.tindakan}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lembar Pengesahan */}
      <SignatureBlock input={input} />
    </div>
  );
};
