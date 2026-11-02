// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import React from "react";
import { Doc2Item, TeacherInput } from "../../types";
import { KopSurat } from "../KopSurat";
import { SignatureBlock } from "../SignatureBlock";

interface Props {
  data: Doc2Item[];
  input: TeacherInput;
}

export const Doc2ATP: React.FC<Props> = ({ data, input }) => {
  const isKemenag = input.jalur === "Kemenag";

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xs border border-slate-200 print:border-none print:shadow-none print:p-0 print-page-document">
      {/* Kop Surat Resmi & Judul Dokumen */}
      <KopSurat
        input={input}
        documentTitle="ALUR TUJUAN PEMBELAJARAN (ATP)"
        documentSubtitle="Distribusi Sekuensial Berkelanjutan & Pemetaan Target Karakter Resmi 2025/2026"
      />

      {/* Tabel Baku ATP */}
      <div className="overflow-x-auto print:overflow-visible">
        <table className="tabel-dokumen w-full text-left text-xs sm:text-sm print:text-[8pt] border-collapse border border-slate-300 print:border-slate-800">
          <thead>
            <tr className="bg-slate-100 print:bg-slate-200 text-slate-800 print:text-black font-bold uppercase tracking-wider text-xs print:text-[7.5pt]">
              <th className="border border-slate-300 print:border-slate-800 p-2 print:p-1 text-center w-10 min-w-[36px] max-w-[44px] print:w-7 print:min-w-0">No.</th>
              <th className="border border-slate-300 print:border-slate-800 p-2 print:p-1 text-center w-18 print:w-14">Kode TP</th>
              <th className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 w-5/12">Tujuan Pembelajaran (TP)</th>
              <th className="border border-slate-300 print:border-slate-800 p-2 print:p-1 text-center w-14 print:w-10">JP</th>
              <th className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 w-3/12">Metode Pengurutan & Hubungan Prasyarat</th>
              <th className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 w-3/12">
                Target Perkembangan Karakter <br />
                <span className="font-normal normal-case text-[10px] print:text-[7pt] text-slate-600 print:text-black">
                  {isKemenag ? "(8 Dimensi SKL + Panca Cinta KBC & PPRA)" : "(8 Dimensi Profil Lulusan SKL 058/2025)"}
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 print:divide-slate-800">
            {data.map((item) => (
              <tr key={item.kodeTP} className="hover:bg-slate-50/50 print:hover:bg-transparent">
                <td className="border border-slate-300 print:border-slate-800 p-2 print:p-1 text-center font-bold text-slate-700 print:text-black align-top w-10 min-w-[36px] max-w-[44px] print:w-7 print:min-w-0">
                  {item.no}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-center font-mono font-bold text-indigo-700 print:text-black align-top bg-indigo-50/50 print:bg-transparent print:text-[7.5pt]">
                  {item.kodeTP}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 font-medium text-slate-900 print:text-black align-top leading-relaxed print:leading-snug">
                  {item.tujuanPembelajaran}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-center font-bold text-emerald-700 print:text-black align-top">
                  {item.alokasiJP} JP
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-slate-700 print:text-black text-xs print:text-[7.5pt] align-top print:leading-snug">
                  {item.metodePengurutan}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-slate-700 print:text-black text-xs print:text-[7.5pt] align-top print:leading-snug">
                  <div className="flex flex-wrap gap-1">
                    {item.targetKarakter.split(",").map((k, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-slate-100 print:bg-transparent print:border print:border-slate-400 px-1.5 py-0.5 rounded text-[11px] print:text-[7pt]"
                      >
                        {k.trim()}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-slate-100 print:bg-slate-200 font-bold">
              <td
                colSpan={3}
                className="border border-slate-300 print:border-slate-800 p-2 print:p-1 text-right uppercase tracking-wider text-slate-900 print:text-black print:text-[7.5pt]"
              >
                Total Alokasi Waktu Intrakurikuler ({data.length} TP):
              </td>
              <td className="border border-slate-300 print:border-slate-800 p-2 print:p-1 text-center text-emerald-800 print:text-black font-extrabold print:text-[8pt]">
                {data.reduce((acc, curr) => acc + (Number(curr.alokasiJP) || 0), 0)} JP
              </td>
              <td
                colSpan={2}
                className="border border-slate-300 print:border-slate-800 p-2 print:p-1 text-left text-slate-700 print:text-black text-xs print:text-[7.5pt] print:leading-snug"
              >
                + 16 JP Asesmen Sumatif & Cadangan = <strong>144 JP per Tahun</strong> (72 JP Ganjil & 72 JP Genap, 36 Minggu Efektif)
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Lembar Pengesahan */}
      <SignatureBlock input={input} />
    </div>
  );
};
