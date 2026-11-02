// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import React from "react";
import { Doc8KisiKisiItem, TeacherInput } from "../../types";
import { KopSurat } from "../KopSurat";
import { SignatureBlock } from "../SignatureBlock";

interface Props {
  kisiKisi: Doc8KisiKisiItem[];
  input: TeacherInput;
}

export const Doc8KisiKisi: React.FC<Props> = ({ kisiKisi, input }) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xs border border-slate-200 print:border-none print:shadow-none print:p-0 print-page-document">
      {/* Kop Surat Resmi & Judul Dokumen */}
      <KopSurat
        input={input}
        documentTitle="KISI-KISI PENULISAN SOAL ASESMEN (TEST BLUEPRINT MATRIX)"
        documentSubtitle="Matriks Penjamin Mutu Soal Asesmen (Distribusi Level Kognitif Bloom & Indikator IKTP)"
      />

      {/* Tabel Baku Kisi-Kisi */}
      <div className="overflow-x-auto print:overflow-visible">
        <table className="tabel-dokumen w-full text-left text-xs sm:text-sm print:text-[7.5pt] border-collapse border border-slate-300 print:border-slate-800">
          <thead>
            <tr className="bg-slate-100 print:bg-slate-200 text-slate-800 print:text-black font-bold uppercase text-xs print:text-[7pt]">
              <th className="border border-slate-300 print:border-slate-800 p-2 print:p-1 text-center w-10 min-w-[36px] max-w-[44px]">No.</th>
              <th className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 w-3/12">
                Elemen &amp; Tujuan Pembelajaran (TP)
              </th>
              <th className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 w-2/12">Materi Pokok</th>
              <th className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 w-4/12">
                Indikator Ketercapaian Tujuan Pembelajaran (IKTP / Soal)
              </th>
              <th className="border border-slate-300 print:border-slate-800 p-2 print:p-1 text-center w-20 print:w-14">
                Level
              </th>
              <th className="border border-slate-300 print:border-slate-800 p-2 print:p-1 text-center w-24 print:w-16">
                Bentuk
              </th>
              <th className="border border-slate-300 print:border-slate-800 p-2 print:p-1 text-center w-14 print:w-10">
                No.
              </th>
              <th className="border border-slate-300 print:border-slate-800 p-2 print:p-1 text-center w-14 print:w-10">
                Skor
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 print:divide-slate-800">
            {kisiKisi.map((item) => (
              <tr key={item.no} className="hover:bg-slate-50/50 print:hover:bg-transparent">
                <td className="border border-slate-300 print:border-slate-800 p-2 print:p-1 text-center font-bold text-slate-700 print:text-black align-top w-10 min-w-[36px] max-w-[44px]">
                  {item.no}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 font-medium text-slate-900 print:text-black align-top leading-relaxed print:leading-snug text-xs print:text-[7.5pt]">
                  <span className="font-bold block text-slate-700 print:text-black">{item.elemenCP}</span>
                  <span className="font-mono text-indigo-700 print:text-black font-bold mr-1">[{item.kodeTP}]</span>
                  {item.tujuanPembelajaran}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-slate-800 print:text-black align-top font-medium">
                  {item.materiPokok}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-slate-800 print:text-black align-top leading-relaxed print:leading-snug text-xs print:text-[7.5pt]">
                  {item.indikatorSoal}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-center align-top">
                  <span className="inline-block bg-indigo-50 print:bg-transparent text-indigo-800 print:text-black font-semibold px-2 py-0.5 rounded text-xs print:text-[7pt] print:border print:border-slate-300">
                    {item.levelKognitif}
                  </span>
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-center font-semibold text-slate-800 print:text-black align-top text-xs print:text-[7.5pt]">
                  {item.bentukSoal}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-center font-bold text-slate-900 print:text-black align-top">
                  {item.noSoal}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-center font-bold text-emerald-700 print:text-black align-top">
                  {item.bobotSkor}
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
