// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import React from "react";
import { Doc1Item, TeacherInput } from "../../types";
import { KopSurat } from "../KopSurat";
import { SignatureBlock } from "../SignatureBlock";

interface Props {
  data: Doc1Item[];
  input: TeacherInput;
  isEditable?: boolean;
  onUpdateItem?: (index: number, updated: Doc1Item) => void;
}

const getBloomBadgeColor = (kko: string) => {
  if (/\bC1\b/i.test(kko)) return "bg-sky-50 text-sky-800 border-sky-200";
  if (/\bC2\b/i.test(kko)) return "bg-blue-50 text-blue-800 border-blue-200";
  if (/\bC3\b/i.test(kko)) return "bg-emerald-50 text-emerald-800 border-emerald-200";
  if (/\bC4\b/i.test(kko)) return "bg-amber-50 text-amber-800 border-amber-200";
  if (/\bC5\b/i.test(kko)) return "bg-purple-50 text-purple-800 border-purple-200";
  if (/\bC6\b/i.test(kko)) return "bg-rose-50 text-rose-800 border-rose-200";
  return "bg-slate-100 text-slate-800 border-slate-200";
};

export const Doc1AnalisisCP: React.FC<Props> = ({
  data,
  input,
  isEditable = false,
  onUpdateItem,
}) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xs border border-slate-200 print:border-none print:shadow-none print:p-0 print-page-document">
      {/* Kop Surat Resmi & Judul Dokumen */}
      <KopSurat
        input={input}
        documentTitle="ANALISIS CAPAIAN PEMBELAJARAN (CP) DAN PERUMUSAN TUJUAN PEMBELAJARAN (TP)"
        documentSubtitle={`Berdasarkan ${input.jalur === "Kemenag" ? "Keputusan Kepala BSKAP No. 046/H/KR/2025 & KMA No. 1503 Tahun 2025" : "Keputusan Kepala BSKAP No. 046/H/KR/2025"} (Dekonstruksi KKO Bloom C1-C6 & Konten Esensial)`}
      />

      {/* Tabel Baku Analisis CP */}
      <div className="overflow-x-auto print:overflow-visible">
        <table className="tabel-dokumen w-full text-left text-xs sm:text-sm print:text-[8pt] border-collapse border border-slate-300 print:border-slate-800">
          <thead>
            <tr className="bg-slate-100 print:bg-slate-200 text-slate-800 print:text-black font-bold uppercase tracking-wider text-xs print:text-[7.5pt]">
              <th className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 w-1/6">Elemen</th>
              <th className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 w-1/4">Capaian Pembelajaran (CP)</th>
              <th className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 w-1/6">Kompetensi (Kata Kerja Operasional)</th>
              <th className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 w-1/6">Lingkup Materi (Konten Esensial)</th>
              <th className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 w-1/4">Rencana Rumusan Tujuan Pembelajaran (TP)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 print:divide-slate-800">
            {data.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 print:hover:bg-transparent">
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 font-semibold text-slate-900 print:text-black align-top print:leading-snug">
                  {item.elemen}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-slate-700 print:text-black align-top leading-relaxed print:leading-snug text-xs print:text-[7.5pt]">
                  {item.capaianPembelajaran}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-slate-800 print:text-black align-top print:leading-snug">
                  <span className={`inline-flex items-center font-medium px-2.5 py-1 rounded text-xs border print:border-none print:bg-transparent print:text-black print:p-0 ${getBloomBadgeColor(item.kompetensiKKO)}`}>
                    {item.kompetensiKKO}
                  </span>
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-slate-800 print:text-black align-top print:leading-snug">
                  <span className="font-medium text-slate-900 print:text-black">{item.lingkupMateri}</span>
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 font-medium text-slate-900 print:text-black align-top print:leading-snug">
                  {item.rencanaRumusanTP}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Lembar Pengesahan */}
      <SignatureBlock input={input} />
    </div>
  );
};

