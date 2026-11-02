// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import React from "react";
import { Doc9BankSoal as BankSoalType, TeacherInput } from "../../types";
import { KopSurat } from "../KopSurat";
import { SignatureBlock } from "../SignatureBlock";

interface Props {
  bankSoal: BankSoalType;
  input: TeacherInput;
}

export const Doc9BankSoal: React.FC<Props> = ({ bankSoal, input }) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xs border border-slate-200 print:border-none print:shadow-none print:p-0 print-page-document">
      {/* Kop Surat Resmi & Judul Dokumen */}
      <KopSurat
        input={input}
        documentTitle="NASKAH BANK SOAL DAN PEDOMAN PENSKORAN"
        documentSubtitle="Instrumen Evaluasi Hasil Belajar Model Asesmen Nasional (PGK & Studi Kasus HOTS)"
      />

      {/* STIMULUS UTAMA */}
      <div className="mb-6 print:mb-3">
        <h3 className="text-sm print:text-[8.5pt] font-bold uppercase tracking-wider text-slate-900 print:text-black bg-slate-100 print:bg-slate-200 px-3 py-1.5 print:py-1 print:px-2 rounded-md mb-2 print:mb-1">
          STIMULUS BACAAN / KASUS KONTEKSTUAL
        </h3>
        <div className="p-4 print:p-2 border-l-4 border-indigo-600 bg-indigo-50/40 print:bg-transparent print:border-slate-800 rounded-r-lg text-xs sm:text-sm print:text-[8pt] text-slate-800 print:text-black leading-relaxed print:leading-snug font-serif">
          "{bankSoal.stimulusUtama}"
        </div>
      </div>

      {/* 1. BUTIR SOAL PILIHAN GANDA KOMPLEKS (PGK) */}
      <div className="mb-6 print:mb-3">
        <h3 className="text-sm print:text-[8.5pt] font-bold uppercase tracking-wider text-slate-900 print:text-black bg-slate-100 print:bg-slate-200 px-3 py-1.5 print:py-1 print:px-2 rounded-md mb-3 print:mb-1.5">
          BAGIAN I: SOAL PILIHAN GANDA KOMPLEKS (PGK)
        </h3>
        {bankSoal.soalPGK.map((soal) => (
          <div
            key={soal.noSoal}
            className="border border-slate-300 p-4 print:p-2 rounded-lg bg-slate-50/50 print:bg-transparent mb-4 print:mb-2 text-xs sm:text-sm print:text-[8pt] avoid-break print:break-inside-avoid"
          >
            <div className="flex items-center gap-2 mb-2 print:mb-1">
              <span className="font-bold text-slate-900 print:text-black text-sm print:text-[8.5pt]">Soal No. {soal.noSoal}</span>
              <span className="text-[11px] print:text-[7pt] font-semibold bg-indigo-100 print:bg-transparent text-indigo-800 print:text-black px-2 py-0.5 rounded print:border print:border-slate-300">
                Pilihan Ganda Kompleks (Multi-Jawaban Benar)
              </span>
            </div>
            <p className="font-medium text-slate-900 print:text-black mb-3 print:mb-1.5 leading-relaxed print:leading-snug">{soal.pertanyaan}</p>

            <div className="space-y-2 print:space-y-1 mb-4 print:mb-2 bg-white print:bg-transparent p-3 print:p-1.5 rounded border border-slate-200 print:border-slate-300">
              <p className="font-semibold text-xs print:text-[7pt] text-slate-600 print:text-black uppercase">Pernyataan Pilihan:</p>
              {soal.pilihan.map((p) => (
                <div key={p.kode} className="flex items-start gap-2.5 print:gap-1.5">
                  <span className="font-bold font-mono text-indigo-700 print:text-black bg-indigo-50 print:bg-transparent border border-indigo-200 print:border-slate-400 w-6 h-6 print:w-5 print:h-5 flex items-center justify-center rounded text-xs print:text-[7.5pt] shrink-0">
                    {p.kode}
                  </span>
                  <span className="text-slate-800 print:text-black leading-relaxed print:leading-snug pt-0.5">{p.teks}</span>
                </div>
              ))}
            </div>

            {/* Kunci Jawaban & Pembahasan */}
            <div className="p-3 print:p-1.5 bg-emerald-50/60 print:bg-transparent border border-emerald-300 print:border-slate-400 rounded-md text-xs print:text-[7.5pt] space-y-1.5 print:space-y-0.5 mb-3 print:mb-1.5">
              <div className="flex items-center gap-2">
                <span className="font-bold text-emerald-950 print:text-black uppercase">Kunci Jawaban:</span>
                <span className="font-bold font-mono text-emerald-800 print:text-black bg-emerald-100 print:bg-transparent px-2 py-0.5 rounded print:border print:border-slate-400">
                  {soal.kunciJawaban}
                </span>
              </div>
              <p className="text-slate-800 print:text-black">
                <span className="font-semibold text-slate-900 print:text-black">Pembahasan Ilmiah:</span> {soal.pembahasan}
              </p>
            </div>

            {/* Pedoman Penskoran PGK */}
            <div className="p-3 print:p-1.5 bg-slate-100/70 print:bg-transparent border border-slate-300 rounded-md text-xs print:text-[7.5pt]">
              <span className="font-bold text-slate-900 print:text-black block mb-1 print:mb-0.5">Pedoman Penskoran:</span>
              <ul className="list-disc list-inside space-y-1 print:space-y-0.5 text-slate-700 print:text-black">
                <li>
                  <span className="font-semibold text-emerald-800 print:text-black">Skor Penuh ({soal.pedomanPenskoran.skorMaksimal}):</span>{" "}
                  {soal.pedomanPenskoran.kriteriaMaksimal}
                </li>
                <li>
                  <span className="font-semibold text-amber-800 print:text-black">Skor Parsial ({soal.pedomanPenskoran.skorParsial}):</span>{" "}
                  {soal.pedomanPenskoran.kriteriaParsial}
                </li>
                <li>
                  <span className="font-semibold text-rose-800 print:text-black">Skor Nol ({soal.pedomanPenskoran.skorNol}):</span>{" "}
                  {soal.pedomanPenskoran.kriteriaNol}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* 2. BUTIR SOAL URAIAN KASUS HOTS */}
      <div className="mb-6 print:mb-3">
        <h3 className="text-sm print:text-[8.5pt] font-bold uppercase tracking-wider text-slate-900 print:text-black bg-slate-100 print:bg-slate-200 px-3 py-1.5 print:py-1 print:px-2 rounded-md mb-3 print:mb-1.5">
          BAGIAN II: SOAL URAIAN / STUDI KASUS PENALARAN TINGKAT TINGGI (HOTS)
        </h3>
        {bankSoal.soalUraian.map((soal) => (
          <div
            key={soal.noSoal}
            className="border border-slate-300 p-4 print:p-2 rounded-lg bg-slate-50/50 print:bg-transparent mb-4 print:mb-2 text-xs sm:text-sm print:text-[8pt] avoid-break print:break-inside-avoid"
          >
            <div className="flex items-center gap-2 mb-2 print:mb-1">
              <span className="font-bold text-slate-900 print:text-black text-sm print:text-[8.5pt]">Soal No. {soal.noSoal}</span>
              <span className="text-[11px] print:text-[7pt] font-semibold bg-purple-100 print:bg-transparent text-purple-800 print:text-black px-2 py-0.5 rounded print:border print:border-slate-300">
                Tingkat Kognitif: {soal.level}
              </span>
            </div>
            <p className="font-semibold text-slate-900 print:text-black mb-3 print:mb-1.5 leading-relaxed print:leading-snug">{soal.pertanyaan}</p>

            {/* Jawaban Contoh & Pembahasan */}
            <div className="p-3 print:p-1.5 bg-indigo-50/50 print:bg-transparent border border-indigo-200 print:border-slate-400 rounded-md text-xs print:text-[7.5pt] space-y-1.5 print:space-y-0.5 mb-3 print:mb-1.5">
              <p>
                <span className="font-bold text-indigo-950 print:text-black uppercase">Kunci Respon / Konsep Esensial:</span>{" "}
                <span className="text-slate-800 print:text-black">{soal.kunciJawaban}</span>
              </p>
              <p>
                <span className="font-bold text-indigo-950 print:text-black uppercase">Pembahasan &amp; Analisis:</span>{" "}
                <span className="text-slate-800 print:text-black">{soal.pembahasan}</span>
              </p>
            </div>

            {/* Rubrik Penskoran Uraian */}
            <div className="overflow-x-auto print:overflow-visible">
              <table className="w-full text-left text-xs print:text-[7.5pt] border-collapse border border-slate-300 print:border-slate-800">
                <thead>
                  <tr className="bg-slate-200/80 print:bg-slate-200 font-bold text-slate-900 print:text-black">
                    <th className="border border-slate-300 print:border-slate-800 p-2 print:p-1 text-center w-16 print:w-12">Skor</th>
                    <th className="border border-slate-300 print:border-slate-800 p-2 print:p-1">Kriteria Deskripsi Kualitas Respon Murid</th>
                  </tr>
                </thead>
                <tbody>
                  {soal.rubrikPenskoran.map((rb, rIdx) => (
                    <tr key={rIdx} className="hover:bg-white print:hover:bg-transparent">
                      <td className="border border-slate-300 print:border-slate-800 p-2 print:p-1 text-center font-bold text-indigo-700 print:text-black">
                        {rb.skor}
                      </td>
                      <td className="border border-slate-300 print:border-slate-800 p-2 print:p-1 text-slate-800 print:text-black">{rb.kriteria}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      {/* Lembar Pengesahan */}
      <SignatureBlock input={input} />
    </div>
  );
};
