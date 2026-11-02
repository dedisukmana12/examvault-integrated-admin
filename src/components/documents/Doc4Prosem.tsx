// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import React, { useState } from "react";
import { Doc4Item, TeacherInput } from "../../types";
import { KopSurat } from "../KopSurat";
import { SignatureBlock } from "../SignatureBlock";
import { Calendar, Layers } from "lucide-react";

interface Props {
  prosemGanjil: Doc4Item[];
  prosemGenap: Doc4Item[];
  input: TeacherInput;
}

export const Doc4Prosem: React.FC<Props> = ({
  prosemGanjil,
  prosemGenap,
  input,
}) => {
  const [activeSemester, setActiveSemester] = useState<"GANJIL" | "GENAP" | "ALL">("ALL");

  const renderSemesterSection = (
    semester: "GANJIL" | "GENAP",
    list: Doc4Item[],
    isSecondInPrint: boolean
  ) => {
    const bulanList =
      semester === "GANJIL"
        ? ["Juli", "Agustus", "September", "Oktober", "November", "Desember"]
        : ["Januari", "Februari", "Maret", "April", "Mei", "Juni"];
    const totalJP =
      list.reduce((acc, curr) => acc + (Number(curr.alokasiJP) || 0), 0) + 8;

    return (
      <div
        className={`bg-white p-6 sm:p-8 rounded-xl shadow-xs border border-slate-200 print:border-none print:shadow-none print:p-0 print-page-document print-landscape-page ${
          isSecondInPrint ? "print:break-before-page mt-8 print:mt-0" : "print:break-after-page"
        }`}
      >
        {/* Kop Surat Resmi & Judul Dokumen */}
        <KopSurat
          input={input}
          documentTitle={`PROGRAM SEMESTER (PROSEM) - SEMESTER ${semester}`}
          documentSubtitle={`Distribusi Matriks Jam Pelajaran Mingguan per Bulan (Semester ${
            semester === "GANJIL" ? "Ganjil: Juli - Desember" : "Genap: Januari - Juni"
          }) • Tahun Ajaran ${input.tahunAjaran}`}
        />

        {/* Petunjuk Orientasi Khusus Screen Preview */}
        <div className="no-print flex items-center justify-between gap-2 bg-indigo-50/80 border border-indigo-200 text-indigo-950 px-3.5 py-2 rounded-lg text-xs my-3">
          <div className="flex items-center gap-2">
            <span className="text-base">📐</span>
            <span>
              <strong>Standar Resmi Landscape (Mendatar):</strong> Format PROSEM dirancang melebar agar 30 minggu per semester tampil presisi dan tidak terpotong.
            </span>
          </div>
          <span className="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded text-[10px] whitespace-nowrap uppercase">
            A4 Landscape
          </span>
        </div>

        {/* Tabel Baku PROSEM */}
        <div className="overflow-x-auto print:overflow-visible my-3 print:my-1">
          <table className="tabel-prosem w-full text-left text-[11px] print:text-[6.5pt] border-collapse border border-slate-300 print:border-slate-800">
            <thead>
              <tr className="bg-slate-100 print:bg-slate-200 text-slate-800 print:text-black font-bold uppercase tracking-wider print:text-[6.5pt]">
                <th
                  rowSpan={2}
                  className="border border-slate-300 print:border-slate-800 p-1.5 print:p-0.5 text-center w-8 min-w-[28px] max-w-[34px] print:w-5 print:min-w-0 whitespace-nowrap font-bold"
                >
                  No.
                </th>
                <th
                  rowSpan={2}
                  className="border border-slate-300 print:border-slate-800 p-2 print:p-0.5 min-w-[220px] print:min-w-[160px] w-auto text-left font-bold"
                >
                  <span className="whitespace-nowrap">Tujuan Pembelajaran (TP) / Lingkup Materi</span>
                </th>
                <th
                  rowSpan={2}
                  className="border border-slate-300 print:border-slate-800 p-1.5 print:p-0.5 text-center w-10 min-w-[28px] print:w-6 whitespace-nowrap font-bold"
                >
                  JP
                </th>
                {bulanList.map((bln, idx) => (
                  <th
                    key={idx}
                    colSpan={5}
                    className="border border-slate-300 print:border-slate-800 p-1.5 print:p-0.5 text-center font-bold print:text-[6.5pt] whitespace-nowrap"
                  >
                    {bln}
                  </th>
                ))}
                <th
                  rowSpan={2}
                  className="border border-slate-300 print:border-slate-800 p-1.5 print:p-0.5 w-28 min-w-[80px] print:w-16 text-left whitespace-nowrap font-bold"
                >
                  Keterangan
                </th>
              </tr>
              <tr className="bg-slate-50 print:bg-slate-100 text-slate-700 print:text-black font-semibold text-[10px] print:text-[6pt] text-center">
                {bulanList.map((_, bIdx) => (
                  <React.Fragment key={bIdx}>
                    <th className="border border-slate-300 print:border-slate-800 p-1 print:p-0 w-5 min-w-[15px] max-w-[18px] print:w-3.5 print:min-w-[12px] text-center font-semibold">1</th>
                    <th className="border border-slate-300 print:border-slate-800 p-1 print:p-0 w-5 min-w-[15px] max-w-[18px] print:w-3.5 print:min-w-[12px] text-center font-semibold">2</th>
                    <th className="border border-slate-300 print:border-slate-800 p-1 print:p-0 w-5 min-w-[15px] max-w-[18px] print:w-3.5 print:min-w-[12px] text-center font-semibold">3</th>
                    <th className="border border-slate-300 print:border-slate-800 p-1 print:p-0 w-5 min-w-[15px] max-w-[18px] print:w-3.5 print:min-w-[12px] text-center font-semibold">4</th>
                    <th className="border border-slate-300 print:border-slate-800 p-1 print:p-0 w-5 min-w-[15px] max-w-[18px] print:w-3.5 print:min-w-[12px] text-center font-semibold">5</th>
                  </React.Fragment>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 print:divide-slate-800">
              {list.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 print:hover:bg-transparent">
                  <td className="border border-slate-300 print:border-slate-800 p-1.5 print:p-0.5 text-center font-semibold text-slate-700 print:text-black print:text-[6.5pt] whitespace-nowrap">
                    {item.no}
                  </td>
                  <td className="border border-slate-300 print:border-slate-800 p-1.5 print:p-0.5 font-medium text-slate-900 print:text-black leading-snug print:leading-tight print:text-[6.5pt]">
                    <span className="font-mono text-indigo-700 print:text-black font-bold mr-1">[{item.kodeTP}]</span>
                    {item.tujuanPembelajaran}
                  </td>
                  <td className="border border-slate-300 print:border-slate-800 p-1.5 print:p-0.5 text-center font-bold text-indigo-700 print:text-black print:text-[6.5pt] whitespace-nowrap">
                    {item.alokasiJP}
                  </td>
                  {item.distribusiBulan.map((dist, dIdx) => (
                    <React.Fragment key={dIdx}>
                      {dist.minggu.map((mVal, mIdx) => (
                        <td
                          key={mIdx}
                          className={`border border-slate-300 print:border-slate-800 p-0.5 print:p-0 text-center font-bold print:text-[6pt] ${
                            mVal !== ""
                              ? "bg-indigo-100 text-indigo-900 print:bg-slate-300 print:text-black"
                              : ""
                          }`}
                        >
                          {mVal}
                        </td>
                      ))}
                    </React.Fragment>
                  ))}
                  <td className="border border-slate-300 print:border-slate-800 p-1.5 print:p-0.5 text-[10px] print:text-[6pt] text-slate-600 print:text-black print:leading-tight">
                    {item.keterangan}
                  </td>
                </tr>
              ))}
              {/* Baris Asesmen Sumatif Tengah Semester */}
              <tr className="bg-slate-50 font-medium">
                <td className="border border-slate-300 print:border-slate-800 p-1.5 print:p-0.5 text-center print:text-[7pt]">
                  {list.length + 1}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-1.5 print:p-0.5 text-slate-800 print:text-black print:text-[7pt] print:leading-tight">
                  Asesmen Sumatif Lingkup Materi & Tengah Semester (STS)
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-1.5 print:p-0.5 text-center font-bold print:text-[7pt]">4</td>
                {Array.from({ length: 30 }).map((_, i) => (
                  <td
                    key={i}
                    className={`border border-slate-300 print:border-slate-800 p-1 print:p-0 text-center font-bold text-[10px] print:text-[6.5pt] ${
                      i === 11 || i === 12 ? "bg-amber-100 text-amber-900 print:bg-slate-300 print:text-black" : ""
                    }`}
                  >
                    {i === 11 || i === 12 ? "2" : ""}
                  </td>
                ))}
                <td className="border border-slate-300 print:border-slate-800 p-1.5 print:p-0.5 text-[10px] print:text-[6.5pt] text-slate-600 print:text-black print:leading-tight">
                  Evaluasi Berkala
                </td>
              </tr>
              {/* Baris Asesmen Akhir Semester / Akhir Tahun */}
              <tr className="bg-slate-50 font-medium">
                <td className="border border-slate-300 print:border-slate-800 p-1.5 print:p-0.5 text-center print:text-[7pt]">
                  {list.length + 2}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-1.5 print:p-0.5 text-slate-800 print:text-black print:text-[7pt] print:leading-tight">
                  {semester === "GANJIL"
                    ? "Asesmen Sumatif Akhir Semester (SAS)"
                    : "Asesmen Sumatif Akhir Tahun (SAT) / Akhir Jenjang"}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-1.5 print:p-0.5 text-center font-bold print:text-[7pt]">2</td>
                {Array.from({ length: 30 }).map((_, i) => (
                  <td
                    key={i}
                    className={`border border-slate-300 print:border-slate-800 p-1 print:p-0 text-center font-bold text-[10px] print:text-[6.5pt] ${
                      i === 28 ? "bg-amber-100 text-amber-900 print:bg-slate-300 print:text-black" : ""
                    }`}
                  >
                    {i === 28 ? "2" : ""}
                  </td>
                ))}
                <td className="border border-slate-300 print:border-slate-800 p-1.5 print:p-0.5 text-[10px] print:text-[6.5pt] text-slate-600 print:text-black print:leading-tight">
                  {semester === "GANJIL" ? "Penilaian Semester 1" : "Evaluasi Ketercapaian TP"}
                </td>
              </tr>
              {/* Baris Cadangan Jam Pelajaran */}
              <tr className="bg-slate-50 font-medium">
                <td className="border border-slate-300 print:border-slate-800 p-1.5 print:p-0.5 text-center print:text-[7pt]">
                  {list.length + 3}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-1.5 print:p-0.5 text-slate-800 print:text-black print:text-[7pt] print:leading-tight">
                  {semester === "GANJIL"
                    ? "Cadangan Jam Pelajaran & Pendampingan Remedial"
                    : "Cadangan Jam Pelajaran & Penguatan Karakter"}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-1.5 print:p-0.5 text-center font-bold print:text-[7pt]">2</td>
                {Array.from({ length: 30 }).map((_, i) => (
                  <td
                    key={i}
                    className={`border border-slate-300 print:border-slate-800 p-1 print:p-0 text-center font-bold text-[10px] print:text-[6.5pt] ${
                      i === 29 ? "bg-amber-100 text-amber-900 print:bg-slate-300 print:text-black" : ""
                    }`}
                  >
                    {i === 29 ? "2" : ""}
                  </td>
                ))}
                <td className="border border-slate-300 print:border-slate-800 p-1.5 print:p-0.5 text-[10px] print:text-[6.5pt] text-slate-600 print:text-black print:leading-tight">
                  {semester === "GANJIL" ? "Remedial & Pengayaan" : "Refleksi Akhir Tahun"}
                </td>
              </tr>
              {/* Baris Total Alokasi JP */}
              <tr className="bg-slate-100 print:bg-slate-200 font-bold">
                <td
                  colSpan={2}
                  className="border border-slate-300 print:border-slate-800 p-1.5 print:p-0.5 text-right uppercase tracking-wider text-slate-900 print:text-black print:text-[7pt]"
                >
                  Total JP Semester {semester}:
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-1.5 print:p-0.5 text-center text-indigo-800 print:text-black font-extrabold print:text-[7.5pt]">
                  {totalJP}
                </td>
                <td
                  colSpan={31}
                  className="border border-slate-300 print:border-slate-800 p-1.5 print:p-0.5 text-left text-slate-700 print:text-black print:text-[7pt]"
                >
                  18 Minggu Efektif (Termasuk Formatif, Sumatif & Cadangan)
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

  return (
    <div className="space-y-6">
      {/* Tab switch for screen only */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 print:hidden">
        <button
          onClick={() => setActiveSemester("GANJIL")}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
            activeSemester === "GANJIL"
              ? "bg-[#0F172A] text-white shadow-xs"
              : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-300 hover:border-slate-400"
          }`}
        >
          <Calendar className="w-3.5 h-3.5 text-indigo-400" />
          <span>Semester Ganjil (Juli - Des)</span>
          <span
            className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
              activeSemester === "GANJIL"
                ? "bg-slate-800 text-indigo-200"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            {prosemGanjil.length} TP
          </span>
        </button>
        <button
          onClick={() => setActiveSemester("GENAP")}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
            activeSemester === "GENAP"
              ? "bg-[#0F172A] text-white shadow-xs"
              : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-300 hover:border-slate-400"
          }`}
        >
          <Calendar className="w-3.5 h-3.5 text-emerald-400" />
          <span>Semester Genap (Jan - Jun)</span>
          <span
            className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
              activeSemester === "GENAP"
                ? "bg-slate-800 text-emerald-200"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            {prosemGenap.length} TP
          </span>
        </button>
        <button
          onClick={() => setActiveSemester("ALL")}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
            activeSemester === "ALL"
              ? "bg-[#0F172A] text-white shadow-xs"
              : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-300 hover:border-slate-400"
          }`}
        >
          <Layers className="w-3.5 h-3.5 text-sky-400" />
          <span>Semua (Ganjil & Genap)</span>
          <span
            className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
              activeSemester === "ALL"
                ? "bg-slate-800 text-sky-200"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            {prosemGanjil.length + prosemGenap.length} TP
          </span>
        </button>
      </div>

      {/* Render Semester Ganjil */}
      <div className={activeSemester === "GENAP" ? "hidden print:block" : "block"}>
        {renderSemesterSection("GANJIL", prosemGanjil, false)}
      </div>

      {/* Render Semester Genap */}
      <div className={activeSemester === "GANJIL" ? "hidden print:block" : "block"}>
        {renderSemesterSection("GENAP", prosemGenap, true)}
      </div>
    </div>
  );
};
