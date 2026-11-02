// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import React from "react";
import { Doc5ModulAjar as ModulAjarType, TeacherInput } from "../../types";
import { KopSurat } from "../KopSurat";
import { SignatureBlock } from "../SignatureBlock";

interface Props {
  modul: ModulAjarType;
  input: TeacherInput;
  semester?: "GANJIL" | "GENAP";
  unitNumber?: number;
}

export const Doc5ModulAjar: React.FC<Props> = ({ modul, input, semester, unitNumber }) => {
  const isKemenag = input.jalur === "Kemenag";
  const modulSemester = semester || modul.identitas.semester || "GANJIL";

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xs border border-slate-200 print:border-none print:shadow-none print:p-0 print-page-document">
      {/* Kop Surat Resmi & Judul Dokumen */}
      <KopSurat
        input={input}
        documentTitle="MODUL AJAR / RENCANA PELAKSANAAN PEMBELAJARAN (DEEP LEARNING)"
        documentSubtitle={
          isKemenag
            ? "Pendekatan Pembelajaran Mendalam (Deep Learning) Terintegrasi Kurikulum Berbasis Cinta (KBC) Sintaks FIDS"
            : "Pendekatan Pembelajaran Mendalam (Deep Learning) Berbasis 3 Prinsip (Mindful, Meaningful, Joyful) & 4 Olah"
        }
      />

      {/* I. INFORMASI IDENTITAS UMUM */}
      <div className="mb-6 print:mb-3">
        <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-100 print:bg-slate-200 px-3 py-1.5 print:py-1 print:px-2 rounded-md mb-3 print:mb-1.5">
          <h3 className="text-sm print:text-[8.5pt] font-bold uppercase tracking-wider text-slate-900 print:text-black">
            I. INFORMASI IDENTITAS UMUM {unitNumber ? `(UNIT ${unitNumber})` : ""}
          </h3>
          <span className={`text-[11px] print:text-[7.5pt] font-bold px-2 py-0.5 rounded border print:border-none ${
            modulSemester === "GENAP"
              ? "bg-purple-100 text-purple-800 border-purple-300 print:bg-transparent print:text-black"
              : "bg-blue-100 text-blue-800 border-blue-300 print:bg-transparent print:text-black"
          }`}>
            SEMESTER {modulSemester === "GENAP" ? "GENAP (JAN - JUN)" : "GANJIL (JUL - DES)"}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 print:gap-1.5 text-xs sm:text-sm print:text-[8pt] text-slate-800">
          <div className="bg-slate-50 print:bg-transparent p-3 print:p-1.5 rounded border border-slate-200 print:border-none">
            <span className="font-semibold text-slate-600 print:text-black block text-xs print:text-[7pt]">Nama Penyusun:</span>
            <span className="font-bold text-slate-900 print:text-black">{modul.identitas.namaPenyusun}</span>
          </div>
          <div className="bg-slate-50 print:bg-transparent p-3 print:p-1.5 rounded border border-slate-200 print:border-none">
            <span className="font-semibold text-slate-600 print:text-black block text-xs print:text-[7pt]">Satuan Pendidikan:</span>
            <span className="font-bold text-slate-900 print:text-black">{modul.identitas.satuanPendidikan}</span>
          </div>
          <div className="bg-slate-50 print:bg-transparent p-3 print:p-1.5 rounded border border-slate-200 print:border-none">
            <span className="font-semibold text-slate-600 print:text-black block text-xs print:text-[7pt]">Fase / Kelas / Semester:</span>
            <span className="font-bold text-slate-900 print:text-black">
              {modul.identitas.faseKelas} / Semester {modulSemester === "GENAP" ? "Genap" : "Ganjil"}
            </span>
          </div>
          <div className="bg-slate-50 print:bg-transparent p-3 print:p-1.5 rounded border border-slate-200 print:border-none">
            <span className="font-semibold text-slate-600 print:text-black block text-xs print:text-[7pt]">Mata Pelajaran:</span>
            <span className="font-bold text-slate-900 print:text-black">{modul.identitas.mataPelajaran}</span>
          </div>
          <div className="bg-slate-50 print:bg-transparent p-3 print:p-1.5 rounded border border-slate-200 print:border-none">
            <span className="font-semibold text-slate-600 print:text-black block text-xs print:text-[7pt]">Alokasi Waktu Resmi:</span>
            <span className="font-bold text-slate-900 print:text-black">{modul.identitas.alokasiWaktu}</span>
          </div>
          <div className="bg-slate-50 print:bg-transparent p-3 print:p-1.5 rounded border border-slate-200 print:border-none">
            <span className="font-semibold text-slate-600 print:text-black block text-xs print:text-[7pt]">Tahun Ajaran:</span>
            <span className="font-bold text-slate-900 print:text-black">{modul.identitas.tahunAjaran}</span>
          </div>
        </div>
      </div>

      {/* II. RUANG LINGKUP */}
      <div className="mb-6 print:mb-3">
        <h3 className="text-sm print:text-[8.5pt] font-bold uppercase tracking-wider text-slate-900 print:text-black bg-slate-100 print:bg-slate-200 px-3 py-1.5 print:py-1 print:px-2 rounded-md mb-3 print:mb-1.5">
          II. RUANG LINGKUP & TARGET PEMBELAJARAN
        </h3>
        <div className="space-y-3 print:space-y-1.5 text-xs sm:text-sm print:text-[8pt]">
          <div className="border border-slate-200 print:border-slate-300 p-3 print:p-1.5 rounded-lg">
            <span className="font-bold text-slate-700 print:text-black block text-xs print:text-[7pt] uppercase mb-0.5">Elemen Capaian Pembelajaran:</span>
            <p className="font-medium text-slate-900 print:text-black">{modul.ruangLingkup.elemenCP}</p>
          </div>
          <div className="border border-slate-200 print:border-slate-300 p-3 print:p-1.5 rounded-lg bg-indigo-50/40 print:bg-transparent">
            <span className="font-bold text-indigo-900 print:text-black block text-xs print:text-[7pt] uppercase mb-0.5">
              Tujuan Pembelajaran Terpilih ({modul.ruangLingkup.kodeTP}):
            </span>
            <p className="font-semibold text-slate-900 print:text-black">{modul.ruangLingkup.tpTerpilih}</p>
          </div>
          <div className="border border-slate-200 print:border-slate-300 p-3 print:p-1.5 rounded-lg">
            <span className="font-bold text-slate-700 print:text-black block text-xs print:text-[7pt] uppercase mb-0.5">
              Target Dimensi Karakter ({isKemenag ? "8 Dimensi SKL + Panca Cinta KBC" : "8 Dimensi Profil Lulusan SKL 2025"}):
            </span>
            <p className="text-slate-800 print:text-black leading-relaxed print:leading-snug">{modul.ruangLingkup.targetKarakter}</p>
          </div>
        </div>
      </div>

      {/* III. TABEL DESAIN PENGALAMAN & DIGITAL */}
      <div className="mb-6 print:mb-3">
        <h3 className="text-sm print:text-[8.5pt] font-bold uppercase tracking-wider text-slate-900 print:text-black bg-slate-100 print:bg-slate-200 px-3 py-1.5 print:py-1 print:px-2 rounded-md mb-3 print:mb-1.5">
          III. TABEL DESAIN PENGALAMAN BELAJAR & LINGKUNGAN DIGITAL
        </h3>
        <div className="overflow-x-auto print:overflow-visible">
          <table className="w-full text-left text-xs sm:text-sm print:text-[8pt] border-collapse border border-slate-300 print:border-slate-800">
            <thead>
              <tr className="bg-slate-100 print:bg-slate-200 text-slate-800 print:text-black font-bold uppercase text-xs print:text-[7.5pt]">
                <th className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 w-1/4">Komponen Desain</th>
                <th className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 w-1/2">Keterangan Operasional</th>
                <th className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 w-1/4">Sumber / Alat yang Digunakan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 print:divide-slate-800">
              <tr>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 font-semibold text-slate-900 print:text-black">
                  1. Praktik Pedagogis
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-slate-800 print:text-black leading-relaxed print:leading-snug">
                  {modul.desainPengalaman.praktikPedagogis.keterangan}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-slate-700 print:text-black text-xs print:text-[7.5pt]">
                  {modul.desainPengalaman.praktikPedagogis.sumberAlat}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 font-semibold text-slate-900 print:text-black">
                  2. Kemitraan Pembelajaran
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-slate-800 print:text-black leading-relaxed print:leading-snug">
                  {modul.desainPengalaman.kemitraan.keterangan}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-slate-700 print:text-black text-xs print:text-[7.5pt]">
                  {modul.desainPengalaman.kemitraan.sumberAlat}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 font-semibold text-slate-900 print:text-black">
                  3. Lingkungan Pembelajaran
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-slate-800 print:text-black leading-relaxed print:leading-snug">
                  {modul.desainPengalaman.lingkungan.keterangan}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-slate-700 print:text-black text-xs print:text-[7.5pt]">
                  {modul.desainPengalaman.lingkungan.sumberAlat}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 font-semibold text-slate-900 print:text-black">
                  4. Pemanfaatan Digital
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-slate-800 print:text-black leading-relaxed print:leading-snug">
                  {modul.desainPengalaman.digital.keterangan}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-slate-700 print:text-black text-xs print:text-[7.5pt]">
                  {modul.desainPengalaman.digital.sumberAlat}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* IV. SIKLUS LANGKAH PEMBELAJARAN */}
      <div className="mb-6 print:mb-3">
        <h3 className="text-sm print:text-[8.5pt] font-bold uppercase tracking-wider text-slate-900 print:text-black bg-slate-100 print:bg-slate-200 px-3 py-1.5 print:py-1 print:px-2 rounded-md mb-3 print:mb-1.5">
          IV. SIKLUS LANGKAH OPERASIONAL PEMBELAJARAN
        </h3>

        <div className="overflow-x-auto print:overflow-visible">
          <table className="w-full text-xs sm:text-sm print:text-[8pt] border border-slate-300 print:border-slate-800">
            <thead>
              <tr className="bg-slate-100 print:bg-slate-200 text-slate-900 print:text-black font-bold text-xs print:text-[7.5pt]">
                <th className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-left w-1/4">
                  Tahapan &amp; Sintaks
                </th>
                <th className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-center w-28 print:w-20">
                  Alokasi Waktu
                </th>
                <th className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-left">
                  Deskripsi Aktivitas Pembelajaran &amp; Diferensiasi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 print:divide-slate-800">
              {/* Tahap 1 */}
              <tr>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 font-semibold text-slate-900 print:text-black align-top">
                  {modul.siklusLangkah.tahap1.nama}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-center align-top font-medium text-slate-800 print:text-black">
                  <span className="inline-block px-2 py-0.5 rounded bg-slate-100 print:bg-transparent text-xs print:text-[7.5pt] font-semibold">
                    {modul.siklusLangkah.tahap1.durasi || "15 Menit"}
                  </span>
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-slate-800 print:text-black leading-relaxed print:leading-snug align-top">
                  <ul className="list-disc list-inside space-y-1 print:space-y-0.5 text-xs sm:text-sm print:text-[8pt] text-slate-800 print:text-black">
                    {modul.siklusLangkah.tahap1.kegiatan.map((k, i) => (
                      <li key={i} className="leading-relaxed print:leading-snug">
                        {k}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>

              {/* Tahap 2 */}
              <tr>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 font-semibold text-slate-900 print:text-black align-top">
                  {modul.siklusLangkah.tahap2.nama}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-center align-top font-medium text-slate-800 print:text-black">
                  <span className="inline-block px-2 py-0.5 rounded bg-indigo-50 print:bg-transparent text-indigo-900 print:text-black text-xs print:text-[7.5pt] font-semibold">
                    {modul.siklusLangkah.tahap2.durasi || "50 Menit"}
                  </span>
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-slate-800 print:text-black leading-relaxed print:leading-snug align-top">
                  <div className="mb-2.5 print:mb-1.5 p-2.5 print:p-1.5 bg-indigo-50/40 print:bg-slate-50 border border-indigo-200 print:border-slate-400 rounded-md text-xs print:text-[7.5pt] space-y-1 print:space-y-0.5">
                    <p className="font-bold text-indigo-950 print:text-black uppercase tracking-wide text-[11px] print:text-[7.5pt] mb-1 print:mb-0.5">
                      Implementasi 3 Aspek Pembelajaran Berdiferensiasi:
                    </p>
                    <p>
                      <span className="font-semibold text-slate-900 print:text-black">• Diferensiasi Konten:</span>{" "}
                      {modul.siklusLangkah.tahap2.diferensiasiKonten}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-900 print:text-black">• Diferensiasi Proses:</span>{" "}
                      {modul.siklusLangkah.tahap2.diferensiasiProses}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-900 print:text-black">• Diferensiasi Produk:</span>{" "}
                      {modul.siklusLangkah.tahap2.diferensiasiProduk}
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-slate-900 print:text-black text-xs print:text-[7.5pt] uppercase tracking-wide mb-1 print:mb-0.5">
                      Aktivitas Inti Pembelajaran:
                    </p>
                    <ul className="list-disc list-inside space-y-1 print:space-y-0.5 text-xs sm:text-sm print:text-[8pt] text-slate-800 print:text-black">
                      {modul.siklusLangkah.tahap2.kegiatan.map((k, i) => (
                        <li key={i} className="leading-relaxed print:leading-snug">
                          {k}
                        </li>
                      ))}
                    </ul>
                  </div>
                </td>
              </tr>

              {/* Tahap 3 */}
              <tr>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 font-semibold text-slate-900 print:text-black align-top">
                  {modul.siklusLangkah.tahap3.nama}
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-center align-top font-medium text-slate-800 print:text-black">
                  <span className="inline-block px-2 py-0.5 rounded bg-slate-100 print:bg-transparent text-xs print:text-[7.5pt] font-semibold">
                    {modul.siklusLangkah.tahap3.durasi || "15 Menit"}
                  </span>
                </td>
                <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-slate-800 print:text-black leading-relaxed print:leading-snug align-top">
                  <ul className="list-disc list-inside space-y-1 print:space-y-0.5 text-xs sm:text-sm print:text-[8pt] text-slate-800 print:text-black">
                    {modul.siklusLangkah.tahap3.kegiatan.map((k, i) => (
                      <li key={i} className="leading-relaxed print:leading-snug">
                        {k}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>

              {/* Tahap 4 (Kemenag Share) */}
              {modul.siklusLangkah.tahap4 && (
                <tr>
                  <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 font-semibold text-slate-900 print:text-black align-top">
                    {modul.siklusLangkah.tahap4.nama}
                  </td>
                  <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-center align-top font-medium text-slate-800 print:text-black">
                    <span className="inline-block px-2 py-0.5 rounded bg-emerald-50 print:bg-transparent text-emerald-900 print:text-black text-xs print:text-[7.5pt] font-semibold">
                      {modul.siklusLangkah.tahap4.durasi || "15 Menit"}
                    </span>
                  </td>
                  <td className="border border-slate-300 print:border-slate-800 p-2.5 print:p-1 text-slate-800 print:text-black leading-relaxed print:leading-snug align-top">
                    <ul className="list-disc list-inside space-y-1 print:space-y-0.5 text-xs sm:text-sm print:text-[8pt] text-slate-800 print:text-black">
                      {modul.siklusLangkah.tahap4.kegiatan.map((k, i) => (
                        <li key={i} className="leading-relaxed print:leading-snug">
                          {k}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* V. KOLOM PENGESAHAN RESMI */}
      <SignatureBlock input={input} />
    </div>
  );
};
