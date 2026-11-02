// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import React from "react";
import { Doc6LKPD as LKPDType, TeacherInput } from "../../types";
import { KopSurat } from "../KopSurat";
import { formatFaseKelasClean } from "../../utils/formatters";

interface Props {
  lkpd: LKPDType;
  input: TeacherInput;
}

export const Doc6LKPD: React.FC<Props> = ({ lkpd, input }) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xs border border-slate-200 print:border-none print:shadow-none print:p-0 print-page-document">
      {/* Kop Surat Resmi & Judul Dokumen */}
      <KopSurat
        input={input}
        documentTitle="LEMBAR KERJA PESERTA DIDIK (LKPD)"
        documentSubtitle="Penyelidikan Kontekstual & Penalaran Kritis Berbasis Masalah Nyata"
      />

      {/* Identitas Murid */}
      <div className="mb-6 print:mb-3 border border-slate-300 p-4 print:p-2 rounded-lg bg-slate-50/50 print:bg-transparent text-xs sm:text-sm print:text-[8pt]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 print:gap-1.5">
          <div>
            <span className="font-semibold text-slate-600 print:text-black block text-xs print:text-[7pt]">Mata Pelajaran:</span>
            <span className="font-bold text-slate-900 print:text-black">{lkpd.mataPelajaran}</span>
          </div>
          <div>
            <span className="font-semibold text-slate-600 print:text-black block text-xs print:text-[7pt]">Fase / Kelas:</span>
            <span className="font-bold text-slate-900 print:text-black">{formatFaseKelasClean(input.fase, lkpd.kelas)}</span>
          </div>
          <div>
            <span className="font-semibold text-slate-600 print:text-black block text-xs print:text-[7pt]">Nama Anggota Kelompok:</span>
            <div className="mt-1 space-y-1 print:space-y-0.5 text-slate-500 italic print:text-black">
              <p>1. ..............................................................</p>
              <p>2. ..............................................................</p>
              <p>3. ..............................................................</p>
              <p>4. ..............................................................</p>
            </div>
          </div>
          <div>
            <span className="font-semibold text-slate-600 print:text-black block text-xs print:text-[7pt]">Tujuan Pembelajaran ({lkpd.kodeTP}):</span>
            <p className="font-medium text-slate-900 print:text-black mt-1 leading-relaxed print:leading-snug">{lkpd.tujuanPembelajaran}</p>
          </div>
        </div>
      </div>

      {/* A. Stimulus Kontekstual */}
      <div className="mb-6 print:mb-3">
        <h3 className="text-sm print:text-[8.5pt] font-bold uppercase tracking-wider text-slate-900 print:text-black bg-slate-100 print:bg-slate-200 px-3 py-1.5 print:py-1 print:px-2 rounded-md mb-2 print:mb-1">
          A. STIMULUS KONTEKSTUAL &amp; FENOMENA NYATA
        </h3>
        <div className="p-4 print:p-2 border-l-4 border-indigo-600 bg-indigo-50/40 print:bg-transparent print:border-slate-800 rounded-r-lg text-xs sm:text-sm print:text-[8pt] text-slate-800 print:text-black leading-relaxed print:leading-snug font-serif">
          "{lkpd.stimulusKontekstual}"
        </div>
      </div>

      {/* B. Tabel Pengamatan Eksplorasi */}
      <div className="mb-6 print:mb-3">
        <h3 className="text-sm print:text-[8.5pt] font-bold uppercase tracking-wider text-slate-900 print:text-black bg-slate-100 print:bg-slate-200 px-3 py-1.5 print:py-1 print:px-2 rounded-md mb-2 print:mb-1">
          B. TABEL PENGAMATAN &amp; PENGUMPULAN DATA EKSPLORASI
        </h3>
        <div className="overflow-x-auto print:overflow-visible">
          <table className="tabel-dokumen w-full text-left text-xs sm:text-sm print:text-[8pt] border-collapse border border-slate-300 print:border-slate-800">
            <thead>
              <tr className="bg-slate-100 print:bg-slate-200 text-slate-800 print:text-black font-bold uppercase text-xs print:text-[7.5pt]">
                <th className="border border-slate-300 print:border-slate-800 p-2 print:p-1 text-center w-10 min-w-[36px] max-w-[44px]">No.</th>
                <th className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 w-5/12">
                  Variabel / Aspek yang Diamati
                </th>
                <th className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 w-4/12">
                  Hasil Pengamatan / Bukti Fisik
                </th>
                <th className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 w-3/12">
                  Catatan Analisis Mandiri Siswa
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 print:divide-slate-800">
              {lkpd.tabelPengamatan.map((tp, idx) => (
                <tr key={idx} className="h-16 print:h-10">
                  <td className="border border-slate-300 print:border-slate-800 p-2 print:p-1 text-center font-bold text-slate-700 print:text-black align-top w-10 min-w-[36px] max-w-[44px]">
                    {tp.no}
                  </td>
                  <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 font-medium text-slate-900 print:text-black align-top">
                    {tp.variabel}
                  </td>
                  <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-slate-400 print:text-black text-xs print:text-[7.5pt] align-top italic">
                    (Tuliskan bukti fisik/data angka)
                  </td>
                  <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-slate-400 print:text-black text-xs print:text-[7.5pt] align-top italic">
                    (Tuliskan kesimpulan sementara)
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* C. Pertanyaan Reflektif HOTS */}
      <div className="mb-6 print:mb-3">
        <h3 className="text-sm print:text-[8.5pt] font-bold uppercase tracking-wider text-slate-900 print:text-black bg-slate-100 print:bg-slate-200 px-3 py-1.5 print:py-1 print:px-2 rounded-md mb-2 print:mb-1">
          C. PERTANYAAN ANALITIS TINGKAT TINGGI (HOTS - C4-C6)
        </h3>
        <div className="space-y-4 print:space-y-2 text-xs sm:text-sm print:text-[8pt]">
          {lkpd.pertanyaanHOTS.map((q) => (
            <div key={q.no} className="border border-slate-200 print:border-slate-300 p-3 print:p-1.5 rounded-lg bg-slate-50/40 print:bg-transparent avoid-break print:break-inside-avoid">
              <div className="flex items-center gap-2 mb-1.5 print:mb-0.5">
                <span className="font-bold text-slate-900 print:text-black">No. {q.no}</span>
                <span className="text-[11px] print:text-[7pt] font-semibold bg-indigo-100 print:bg-transparent text-indigo-800 print:text-black px-2 py-0.5 rounded print:border print:border-slate-300">
                  Level {q.level}
                </span>
              </div>
              <p className="text-slate-800 print:text-black font-medium leading-relaxed print:leading-snug mb-3 print:mb-1">{q.pertanyaan}</p>
              <div className="h-20 print:h-12 border border-dashed border-slate-300 rounded p-2 print:p-1 text-slate-400 print:text-slate-500 text-xs print:text-[7.5pt] italic">
                Jawaban dan Argumentasi Ilmiah Kelompok:
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Paraf Guru */}
      <div className="mt-8 print:mt-3 pt-4 print:pt-2 border-t border-slate-200 print:border-slate-700 flex justify-between items-center text-xs print:text-[8pt] text-slate-700 print:text-black avoid-break print:break-inside-avoid print:break-before-avoid ttd-block">
        <div>
          <span className="font-bold">Catatan &amp; Umpan Balik Guru:</span>
          <div className="h-12 print:h-8 w-64 border-b border-slate-300 print:border-slate-600"></div>
        </div>
        <div className="text-right">
          <p className="font-medium">Nilai / Paraf Guru</p>
          <div className="h-12 print:h-8 w-28 border border-slate-300 print:border-slate-600 rounded mt-1 flex items-center justify-center font-bold text-slate-400 print:text-black">
            Skor
          </div>
        </div>
      </div>
    </div>
  );
};
