// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import React, { useRef, useState } from "react";
import { TeacherInput } from "../types";
import { fileToDataUrl } from "../utils/imageHelpers";
import { LogoEmblem, SchoolSealBadgeSvg } from "./LogoEmblem";
import {
  Upload,
  Image as ImageIcon,
  Trash2,
  CheckCircle2,
  Sparkles,
  FileImage,
  RefreshCw,
  Layers,
  BookMarked,
  ArrowRightLeft,
} from "lucide-react";

interface Props {
  input: TeacherInput;
  onChange: (updated: TeacherInput) => void;
}

export const LogoUploader: React.FC<Props> = ({ input, onChange }) => {
  const leftInputRef = useRef<HTMLInputElement>(null);
  const rightInputRef = useRef<HTMLInputElement>(null);

  const [isProcessingLeft, setIsProcessingLeft] = useState(false);
  const [isProcessingRight, setIsProcessingRight] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFileUpload = async (file: File, side: "left" | "right") => {
    if (!file.type.startsWith("image/")) {
      setErrorMessage("Silakan pilih berkas gambar yang valid (PNG, JPG, JPEG, SVG, WebP).");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setErrorMessage("Ukuran berkas gambar maksimal 10MB.");
      return;
    }

    setErrorMessage(null);
    if (side === "left") setIsProcessingLeft(true);
    else setIsProcessingRight(true);

    try {
      const dataUrl = await fileToDataUrl(file);
      if (side === "left") {
        onChange({
          ...input,
          logoUrl: dataUrl,
          logoOption: "custom",
        });
      } else {
        onChange({
          ...input,
          logoKananUrl: dataUrl,
          logoKananOption: "custom",
        });
      }
    } catch (err) {
      console.error("Gagal memproses gambar:", err);
      setErrorMessage("Gagal memproses gambar. Coba format file lain.");
    } finally {
      if (side === "left") setIsProcessingLeft(false);
      else setIsProcessingRight(false);
    }
  };

  const handleSwapLogos = () => {
    onChange({
      ...input,
      logoUrl: input.logoKananUrl,
      logoOption: input.logoKananOption || "custom",
      logoKananUrl: input.logoUrl,
      logoKananOption: input.logoOption || "custom",
    });
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 space-y-5">
      {/* Header Pengaturan Logo Kop & Cover */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-3 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-blue-50 text-[#3B82F6] rounded-md border border-blue-200">
              <ImageIcon className="w-4 h-4" />
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight uppercase">
              Pengaturan Dua Logo Kop Surat &amp; Cover Bab Resmi
            </h4>
          </div>
          <p className="text-[11px] text-slate-500 mt-0.5">
            Sistem mendukung <strong>Dua Logo Resmi (Kiri &amp; Kanan)</strong> pada Kop Surat, Sampul Utama, dan Cover Depan Pembatas Setiap Bab.
          </p>
        </div>

        {/* Swap Button */}
        {(input.logoUrl || input.logoKananUrl) && (
          <button
            type="button"
            onClick={handleSwapLogos}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-md text-xs font-semibold cursor-pointer transition-all"
            title="Tukar posisi Logo Kiri & Logo Kanan"
          >
            <ArrowRightLeft className="w-3.5 h-3.5" />
            <span>Tukar Posisi Kiri ⇄ Kanan</span>
          </button>
        )}
      </div>

      {/* Grid Dua Logo: Kiri (Kementerian / Pemda / Yayasan) & Kanan (Sekolah / Madrasah) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* ===================== KARTU LOGO KIRI ===================== */}
        <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-200">
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-[#0F172A] text-white text-[10px] font-bold flex items-center justify-center">
                  1
                </span>
                <span className="text-xs font-bold text-slate-900 uppercase">
                  Logo Kiri (Instansi / Kementerian / Pemda)
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-medium">Sisi Kiri Kop</span>
            </div>

            {/* Opsi Preset Cepat Logo Kiri */}
            <div className="flex items-center gap-1.5 flex-wrap mt-2.5">
              <button
                type="button"
                onClick={() =>
                  onChange({
                    ...input,
                    logoUrl: undefined,
                    logoOption: "kemenag",
                  })
                }
                className={`px-2 py-1 rounded text-[11px] font-bold cursor-pointer border transition-all ${
                  !input.logoUrl && input.logoOption === "kemenag"
                    ? "bg-emerald-50 text-emerald-800 border-emerald-300 shadow-2xs"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                Kemenag RI
              </button>
              <button
                type="button"
                onClick={() =>
                  onChange({
                    ...input,
                    logoUrl: undefined,
                    logoOption: "kemdikbud",
                  })
                }
                className={`px-2 py-1 rounded text-[11px] font-bold cursor-pointer border transition-all ${
                  !input.logoUrl && input.logoOption === "kemdikbud"
                    ? "bg-blue-50 text-blue-800 border-blue-300 shadow-2xs"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                Tut Wuri
              </button>
              <button
                type="button"
                onClick={() => leftInputRef.current?.click()}
                className={`px-2 py-1 rounded text-[11px] font-bold cursor-pointer border transition-all ${
                  input.logoUrl
                    ? "bg-amber-50 text-amber-800 border-amber-300 shadow-2xs"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                Upload File...
              </button>
            </div>

            {/* Preview Box & Upload Trigger */}
            <div className="mt-3 flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200">
              <div className="w-16 h-16 bg-slate-50 rounded border border-slate-200 flex items-center justify-center p-1 overflow-hidden shrink-0">
                <LogoEmblem
                  logoUrl={input.logoUrl}
                  presetOption={input.logoOption}
                  jalur={input.jalur}
                  className="w-14 h-14"
                  alt="Preview Logo Kiri"
                />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-800 truncate">
                  {input.logoUrl
                    ? "Logo Kustom Terunggah"
                    : input.logoOption === "kemdikbud"
                    ? "Logo Tut Wuri Handayani"
                    : input.logoOption === "kemenag"
                    ? "Logo Ikhlas Beramal Kemenag"
                    : input.jalur === "Kemenag"
                    ? "Logo Default Kemenag"
                    : "Logo Default Kemdikbud"}
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  Posisi: Kiri atas lembar Kop &amp; Cover
                </p>
                
                <div className="flex items-center gap-2 mt-1.5">
                  <button
                    type="button"
                    onClick={() => leftInputRef.current?.click()}
                    className="text-[11px] font-semibold text-[#3B82F6] hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <Upload className="w-3 h-3" />
                    {isProcessingLeft ? "Memproses..." : "Ganti Logo Kiri"}
                  </button>
                  {input.logoUrl && (
                    <button
                      type="button"
                      onClick={() =>
                        onChange({
                          ...input,
                          logoUrl: undefined,
                          logoOption: input.jalur === "Kemenag" ? "kemenag" : "kemdikbud",
                        })
                      }
                      className="text-[11px] font-semibold text-rose-600 hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" />
                      Reset
                    </button>
                  )}
                </div>
              </div>
            </div>

            <input
              ref={leftInputRef}
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/svg+xml, image/webp"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  handleFileUpload(e.target.files[0], "left");
                }
              }}
            />
          </div>
        </div>

        {/* ===================== KARTU LOGO KANAN ===================== */}
        <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-200">
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-[#3B82F6] text-white text-[10px] font-bold flex items-center justify-center">
                  2
                </span>
                <span className="text-xs font-bold text-slate-900 uppercase">
                  Logo Kanan (Sekolah / Madrasah / Satuan)
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-medium">Sisi Kanan Kop</span>
            </div>

            {/* Opsi Preset Cepat Logo Kanan */}
            <div className="flex items-center gap-1.5 flex-wrap mt-2.5">
              <button
                type="button"
                onClick={() => rightInputRef.current?.click()}
                className={`px-2 py-1 rounded text-[11px] font-bold cursor-pointer border transition-all ${
                  input.logoKananUrl
                    ? "bg-amber-50 text-amber-800 border-amber-300 shadow-2xs"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                Upload Logo Sekolah...
              </button>
              <button
                type="button"
                onClick={() =>
                  onChange({
                    ...input,
                    logoKananUrl: undefined,
                    logoKananOption: "kemdikbud",
                  })
                }
                className={`px-2 py-1 rounded text-[11px] font-bold cursor-pointer border transition-all ${
                  !input.logoKananUrl && input.logoKananOption === "kemdikbud"
                    ? "bg-blue-50 text-blue-800 border-blue-300 shadow-2xs"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                Tut Wuri
              </button>
              <button
                type="button"
                onClick={() =>
                  onChange({
                    ...input,
                    logoKananUrl: undefined,
                    logoKananOption: "kemenag",
                  })
                }
                className={`px-2 py-1 rounded text-[11px] font-bold cursor-pointer border transition-all ${
                  !input.logoKananUrl && input.logoKananOption === "kemenag"
                    ? "bg-emerald-50 text-emerald-800 border-emerald-300 shadow-2xs"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                Kemenag
              </button>
              <button
                type="button"
                onClick={() =>
                  onChange({
                    ...input,
                    logoKananUrl: undefined,
                    logoKananOption: "none",
                  })
                }
                className={`px-2 py-1 rounded text-[11px] font-bold cursor-pointer border transition-all ${
                  !input.logoKananUrl && input.logoKananOption === "none"
                    ? "bg-rose-50 text-rose-800 border-rose-300 shadow-2xs"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                Tanpa Logo Kanan
              </button>
            </div>

            {/* Preview Box & Upload Trigger */}
            <div className="mt-3 flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200">
              <div className="w-16 h-16 bg-slate-50 rounded border border-slate-200 flex items-center justify-center p-1 overflow-hidden shrink-0">
                {input.logoKananUrl ? (
                  <img
                    src={input.logoKananUrl}
                    alt="Preview Logo Kanan"
                    className="max-h-full max-w-full object-contain"
                  />
                ) : input.logoKananOption === "kemdikbud" ? (
                  <LogoEmblem presetOption="kemdikbud" className="w-14 h-14" />
                ) : input.logoKananOption === "kemenag" ? (
                  <LogoEmblem presetOption="kemenag" className="w-14 h-14" />
                ) : input.logoKananOption === "none" ? (
                  <span className="text-[10px] text-slate-400 italic">Kosong</span>
                ) : (
                  <SchoolSealBadgeSvg
                    className="w-14 h-14"
                    isKemenag={input.jalur === "Kemenag"}
                  />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-800 truncate">
                  {input.logoKananUrl
                    ? "Logo Sekolah Terunggah"
                    : input.logoKananOption === "kemdikbud"
                    ? "Logo Tut Wuri Handayani"
                    : input.logoKananOption === "kemenag"
                    ? "Logo Kemenag RI"
                    : input.logoKananOption === "none"
                    ? "Tanpa Logo Kanan"
                    : "Emblem Standar Kurikulum 2025/2026"}
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  Posisi: Kanan atas lembar Kop &amp; Cover
                </p>

                <div className="flex items-center gap-2 mt-1.5">
                  <button
                    type="button"
                    onClick={() => rightInputRef.current?.click()}
                    className="text-[11px] font-semibold text-[#3B82F6] hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <Upload className="w-3 h-3" />
                    {isProcessingRight ? "Memproses..." : "Upload Logo Sekolah"}
                  </button>
                  {input.logoKananUrl && (
                    <button
                      type="button"
                      onClick={() =>
                        onChange({
                          ...input,
                          logoKananUrl: undefined,
                          logoKananOption: undefined,
                        })
                      }
                      className="text-[11px] font-semibold text-rose-600 hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" />
                      Reset
                    </button>
                  )}
                </div>
              </div>
            </div>

            <input
              ref={rightInputRef}
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/svg+xml, image/webp"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  handleFileUpload(e.target.files[0], "right");
                }
              }}
            />
          </div>
        </div>

      </div>

      {/* ===================== PENGATURAN COVER DEPAN SETIAP BAB ===================== */}
      <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="p-2 bg-blue-100 text-[#3B82F6] rounded-lg">
            <BookMarked className="w-4 h-4" />
          </span>
          <div>
            <h5 className="text-xs sm:text-sm font-bold text-slate-900">
              Sertakan Cover Depan Pembatas Setiap Bab (Bab I s.d. Bab IX)
            </h5>
            <p className="text-[11px] text-slate-600">
              Menyisipkan lembar cover depan resmi berbingkai ganda dengan logo, judul bab &amp; identitas tanpa tabel/isi materi sebelum tiap dokumen.
            </p>
          </div>
        </div>

        <label className="inline-flex items-center gap-2 cursor-pointer shrink-0">
          <input
            type="checkbox"
            checked={input.showBabCover !== false}
            onChange={(e) =>
              onChange({
                ...input,
                showBabCover: e.target.checked,
              })
            }
            className="w-4 h-4 text-[#3B82F6] rounded border-slate-300 focus:ring-[#3B82F6] cursor-pointer"
          />
          <span className="text-xs font-bold text-slate-800">
            {input.showBabCover !== false ? "Cover Bab Aktif" : "Cover Bab Nonaktif"}
          </span>
        </label>
      </div>

      {errorMessage && (
        <div className="p-2.5 bg-rose-50 border border-rose-200 text-rose-700 rounded-lg text-xs font-semibold">
          {errorMessage}
        </div>
      )}
    </div>
  );
};
