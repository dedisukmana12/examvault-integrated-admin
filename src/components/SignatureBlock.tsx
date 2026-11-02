// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import React from "react";
import { TeacherInput } from "../types";

interface SignatureBlockProps {
  input: TeacherInput;
  tanggalPelaksanaan?: string;
  kota?: string;
}

export const SignatureBlock: React.FC<SignatureBlockProps> = ({
  input,
  tanggalPelaksanaan = "15 Juli 2025",
  kota = "Jakarta",
}) => {
  const isKemenag = input.jalur === "Kemenag";
  const city = input.kotaSatuan || kota;
  const dateStr = input.tanggalPengesahan || tanggalPelaksanaan;
  const wakaTitle = isKemenag ? "Wakil Kepala Madrasah" : "Wakil Kepala Sekolah";
  const kepalaTitle = isKemenag ? "Kepala Madrasah" : "Kepala Sekolah";
  const namaWakil = input.namaWakil?.trim() || "Edi Wahyu, S. Pd.";
  const nipWakil = input.nipWakil?.trim() || "-";

  return (
    <div
      className="mt-6 pt-3 print:mt-2.5 print:pt-1.5 border-t border-slate-200 print:border-slate-700 ttd-block"
      style={{
        breakInside: "avoid",
        pageBreakInside: "avoid",
        WebkitColumnBreakInside: "avoid",
      }}
    >
      <table
        className="ttd-table w-full border-none border-collapse text-xs sm:text-sm print:text-[8pt] text-slate-800 print:text-black"
        style={{
          border: "none",
          borderCollapse: "collapse",
          width: "100%",
          breakInside: "avoid",
          pageBreakInside: "avoid",
        }}
      >
        <tbody>
          {/* BARIS 1: Jabatan & Tanggal Pengesahan */}
          <tr
            style={{
              border: "none",
              breakInside: "avoid",
              pageBreakInside: "avoid",
            }}
          >
            {/* Kolom Kiri: Mengesahkan Wakil Kepala Madrasah/Sekolah Bidang Kurikulum */}
            <td
              style={{
                width: "45%",
                textAlign: "center",
                verticalAlign: "top",
                border: "none",
                padding: 0,
              }}
            >
              <p className="font-medium leading-normal">Mengesahkan,</p>
              <p className="font-semibold leading-normal">{wakaTitle}</p>
              <p className="font-semibold leading-normal">Bidang Kurikulum</p>
            </td>

            {/* Spacer tengah */}
            <td style={{ width: "10%", border: "none", padding: 0 }}></td>

            {/* Kolom Kanan: Guru Mata Pelajaran */}
            <td
              style={{
                width: "45%",
                textAlign: "center",
                verticalAlign: "top",
                border: "none",
                padding: 0,
              }}
            >
              <p className="font-medium leading-normal">
                {city}, {dateStr}
              </p>
              <p className="font-semibold leading-normal">Guru Mata Pelajaran</p>
            </td>
          </tr>

          {/* BARIS 2: Ruang Tanda Tangan (Tinggi Terkunci Presisi) */}
          <tr
            style={{
              border: "none",
              breakInside: "avoid",
              pageBreakInside: "avoid",
            }}
          >
            <td style={{ border: "none", padding: 0 }}>
              <div className="h-16 sm:h-20 print:h-[50px]" />
            </td>
            <td style={{ border: "none", padding: 0 }}></td>
            <td style={{ border: "none", padding: 0 }}>
              <div className="h-16 sm:h-20 print:h-[50px]" />
            </td>
          </tr>

          {/* BARIS 3: Nama Lengkap & NIP (Terkunci 100% Sejajar Satu Garis Horizontal) */}
          <tr
            style={{
              border: "none",
              breakInside: "avoid",
              pageBreakInside: "avoid",
              verticalAlign: "top",
            }}
          >
            {/* Nama Waka Kurikulum */}
            <td
              style={{
                width: "45%",
                textAlign: "center",
                verticalAlign: "top",
                border: "none",
                padding: 0,
              }}
            >
              <p className="font-bold underline text-slate-900 print:text-black leading-tight">
                {namaWakil}
              </p>
              <p className="text-xs print:text-[7pt] font-mono text-slate-700 print:text-black mt-0.5 leading-tight">
                NIP. {nipWakil}
              </p>
            </td>

            {/* Spacer */}
            <td style={{ width: "10%", border: "none", padding: 0 }}></td>

            {/* Nama Guru Mata Pelajaran */}
            <td
              style={{
                width: "45%",
                textAlign: "center",
                verticalAlign: "top",
                border: "none",
                padding: 0,
              }}
            >
              <p className="font-bold underline text-slate-900 print:text-black leading-tight">
                {input.namaGuru || "Nama Guru Mata Pelajaran"}
              </p>
              <p className="text-xs print:text-[7pt] font-mono text-slate-700 print:text-black mt-0.5 leading-tight">
                NIP. {input.nipGuru || "-"}
              </p>
            </td>
          </tr>

          {/* Spacer Vertikal Antar Tingkat */}
          <tr style={{ border: "none" }}>
            <td colSpan={3} style={{ border: "none", padding: 0, height: "14px" }}>
              <div className="h-3 print:h-2" />
            </td>
          </tr>

          {/* BARIS 4: Jabatan Mengetahui Kepala Madrasah / Sekolah (Tepat di Tengah) */}
          <tr
            style={{
              border: "none",
              breakInside: "avoid",
              pageBreakInside: "avoid",
            }}
          >
            <td
              colSpan={3}
              style={{
                textAlign: "center",
                verticalAlign: "top",
                border: "none",
                padding: 0,
              }}
            >
              <p className="font-medium leading-normal">Mengetahui,</p>
              <p className="font-semibold leading-normal">{kepalaTitle}</p>
            </td>
          </tr>

          {/* BARIS 5: Ruang Tanda Tangan & Stempel Dinas Kepala */}
          <tr
            style={{
              border: "none",
              breakInside: "avoid",
              pageBreakInside: "avoid",
            }}
          >
            <td colSpan={3} style={{ border: "none", padding: 0 }}>
              <div className="h-16 sm:h-20 print:h-[50px]" />
            </td>
          </tr>

          {/* BARIS 6: Nama & NIP Kepala Madrasah / Sekolah */}
          <tr
            style={{
              border: "none",
              breakInside: "avoid",
              pageBreakInside: "avoid",
            }}
          >
            <td
              colSpan={3}
              style={{
                textAlign: "center",
                verticalAlign: "top",
                border: "none",
                padding: 0,
              }}
            >
              <p className="font-bold underline text-slate-900 print:text-black leading-tight">
                {input.namaKepala || "Nama Kepala Sekolah/Madrasah"}
              </p>
              <p className="text-xs print:text-[7pt] font-mono text-slate-700 print:text-black mt-0.5 leading-tight">
                NIP. {input.nipKepala || "-"}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
