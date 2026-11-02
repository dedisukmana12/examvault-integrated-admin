// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import React, { useState, useMemo } from "react";
import { CompleteDocumentPackage } from "../types";
import { Doc0Cover } from "./documents/Doc0Cover";
import { BabCover } from "./documents/BabCover";
import { Doc1AnalisisCP } from "./documents/Doc1AnalisisCP";
import { Doc2ATP } from "./documents/Doc2ATP";
import { Doc3Prota } from "./documents/Doc3Prota";
import { Doc4Prosem } from "./documents/Doc4Prosem";
import { Doc5ModulAjar } from "./documents/Doc5ModulAjar";
import { Doc6LKPD } from "./documents/Doc6LKPD";
import { Doc7KKTP } from "./documents/Doc7KKTP";
import { Doc8KisiKisi } from "./documents/Doc8KisiKisi";
import { Doc9BankSoal } from "./documents/Doc9BankSoal";
import { exportPackageToDocx } from "../utils/docxExporter";
import { exportElementToPdfDirect, printDocumentViaDedicatedWindow } from "../utils/pdfExporter";
import { executeDirectPrint } from "../utils/directPrinter";
import {
  Printer,
  Download,
  Copy,
  Check,
  Layers,
  BookMarked,
  Sparkles,
  FolderOpen,
  FileText,
  Loader2,
  Calendar,
  ExternalLink,
} from "lucide-react";

interface Props {
  pkg: CompleteDocumentPackage;
}

export const DocumentViewer: React.FC<Props> = ({ pkg }) => {
  const [activeTab, setActiveTab] = useState<number>(0); // 0 = All Documents
  const [selectedUnitIdx, setSelectedUnitIdx] = useState<number | "ALL">("ALL");
  const [selectedSemesterFilter, setSelectedSemesterFilter] = useState<"ALL" | "GANJIL" | "GENAP">("ALL");
  const [isExportingDocx, setIsExportingDocx] = useState(false);
  const [isExportingPdf, setIsExportingPdf] = useState(false);
  const [pdfProgress, setPdfProgress] = useState<{ percent: number; text: string }>({
    percent: 0,
    text: "",
  });
  const [copiedToast, setCopiedToast] = useState(false);
  const [showBabCoverState, setShowBabCoverState] = useState(
    pkg.input.showBabCover === true
  );

  const units = pkg.units && pkg.units.length > 0 ? pkg.units : [
    {
      unitNumber: 1,
      unitTitle: pkg.doc5ModulAjar.ruangLingkup.tpTerpilih,
      kodeTP: pkg.doc5ModulAjar.ruangLingkup.kodeTP,
      tujuanPembelajaran: pkg.doc5ModulAjar.ruangLingkup.tpTerpilih,
      elemenCP: pkg.doc5ModulAjar.ruangLingkup.elemenCP,
      alokasiJP: 6,
      semester: "GANJIL" as const,
      doc5ModulAjar: pkg.doc5ModulAjar,
      doc6LKPD: pkg.doc6LKPD,
      doc7KKTP: pkg.doc7KKTP,
      doc8KisiKisi: pkg.doc8KisiKisi,
      doc9BankSoal: pkg.doc9BankSoal,
    },
  ];

  const ganjilUnits = useMemo(() => units.filter((u) => u.semester === "GANJIL"), [units]);
  const genapUnits = useMemo(() => units.filter((u) => u.semester === "GENAP"), [units]);

  const displayedUnits = useMemo(() => {
    if (selectedUnitIdx !== "ALL") {
      return [units[selectedUnitIdx] || units[0]];
    }
    if (selectedSemesterFilter === "GANJIL") {
      return ganjilUnits;
    }
    if (selectedSemesterFilter === "GENAP") {
      return genapUnits;
    }
    return units;
  }, [units, selectedUnitIdx, selectedSemesterFilter, ganjilUnits, genapUnits]);

  const tabs = [
    { id: 0, num: "ALL", label: `Semua Dokumen (${units.length} Unit 1 Tahun)` },
    { id: 100, num: "CVR", label: "Cover Sampul Utama" },
    { id: 1, num: "01", label: "Bab I: Analisis CP & TP" },
    { id: 2, num: "02", label: "Bab II: ATP" },
    { id: 3, num: "03", label: "Bab III: PROTA" },
    { id: 4, num: "04", label: "Bab IV: PROSEM" },
    {
      id: 5,
      num: "05",
      label: `Bab V: Modul Ajar (${units.length} Unit: ${ganjilUnits.length} Ganjil + ${genapUnits.length} Genap)`,
    },
    { id: 6, num: "06", label: `Bab VI: LKPD (${units.length} Unit)` },
    { id: 7, num: "07", label: `Bab VII: KKTP (${units.length} Unit)` },
    { id: 8, num: "08", label: `Bab VIII: Kisi-Kisi (${units.length} Unit)` },
    { id: 9, num: "09", label: `Bab IX: Bank Soal (${units.length} Unit)` },
  ];

  const [isPreparingPrint, setIsPreparingPrint] = useState(false);
  const [printBlockedUrl, setPrintBlockedUrl] = useState<string | null>(null);

  const handlePrintAll = async () => {
    setIsPreparingPrint(true);

    const isInIframe = window.self !== window.top;
    let targetWin: Window | null = null;
    const needsTabSwitch = activeTab !== 0 || selectedUnitIdx !== "ALL" || selectedSemesterFilter !== "ALL";

    // Hanya buka popup window jika berada di dalam iframe (misal sandboxed AI Studio preview)
    if (isInIframe) {
      try {
        targetWin = window.open("", "_blank");
      } catch (e) {
        console.warn("Could not pre-open window:", e);
      }
    }

    if (needsTabSwitch) {
      setActiveTab(0);
      setSelectedUnitIdx("ALL");
      setSelectedSemesterFilter("ALL");
      await new Promise((resolve) => setTimeout(resolve, 300));
    }

    const cleanSubject = pkg.input.mataPelajaran || "Mata_Pelajaran";
    const cleanClass = pkg.input.kelas || "Kelas";
    const title = `Naskah Cetak Resmi A4 - ${cleanSubject} ${cleanClass} (${units.length} Unit)`;

    const result = executeDirectPrint({
      elementId: "document-print-container",
      title,
      targetWindow: targetWin,
      onStart: () => setIsPreparingPrint(true),
      onSuccess: () => {
        setIsPreparingPrint(false);
        setPrintBlockedUrl(null);
      },
      onError: (err) => {
        console.error("Direct print error:", err);
        setIsPreparingPrint(false);
      },
    });

    if (result.blocked && result.blobUrl) {
      setPrintBlockedUrl(result.blobUrl);
    }
    setIsPreparingPrint(false);
  };

  const handlePrintCurrentTab = async () => {
    setIsPreparingPrint(true);

    const isInIframe = window.self !== window.top;
    let targetWin: Window | null = null;
    if (isInIframe) {
      try {
        targetWin = window.open("", "_blank");
      } catch (e) {
        console.warn("Could not pre-open window:", e);
      }
    }

    const cleanSubject = pkg.input.mataPelajaran || "Mata_Pelajaran";
    const cleanClass = pkg.input.kelas || "Kelas";
    const tabName = tabs.find((t) => t.id === activeTab)?.label || "Bab";
    const title = `Naskah Cetak ${tabName} - ${cleanSubject} ${cleanClass}`;
    const isLandscape = activeTab === 4;

    const result = executeDirectPrint({
      elementId: "document-print-container",
      title,
      targetWindow: targetWin,
      orientation: isLandscape ? "landscape" : "portrait",
      onStart: () => setIsPreparingPrint(true),
      onSuccess: () => {
        setIsPreparingPrint(false);
        setPrintBlockedUrl(null);
      },
      onError: (err) => {
        console.error("Direct print current tab error:", err);
        setIsPreparingPrint(false);
      },
    });

    if (result.blocked && result.blobUrl) {
      setPrintBlockedUrl(result.blobUrl);
    }
    setIsPreparingPrint(false);
  };

  const handleDownloadPdf = async () => {
    try {
      setIsExportingPdf(true);
      setActiveTab(0);
      setSelectedUnitIdx("ALL");
      setSelectedSemesterFilter("ALL");

      await new Promise((r) => setTimeout(r, 250));

      const cleanSubject = pkg.input.mataPelajaran.replace(/\s+/g, "_");
      const cleanClass = pkg.input.kelas.replace(/\s+/g, "_");
      const fileName = `Paket_Lengkap_${units.length}_Unit_${cleanSubject}_${cleanClass}.pdf`;

      await exportElementToPdfDirect({
        elementId: "document-print-container",
        fileName,
        onProgress: (percent, text) => {
          setPdfProgress({ percent, text });
        },
      });
    } catch (err) {
      console.error("Gagal export PDF:", err);
      handlePrintAll();
    } finally {
      setTimeout(() => {
        setIsExportingPdf(false);
        setPdfProgress({ percent: 0, text: "" });
      }, 800);
    }
  };

  const handleExportWord = async () => {
    try {
      setIsExportingDocx(true);
      const blob = await exportPackageToDocx({
        ...pkg,
        units,
        input: {
          ...pkg.input,
          showBabCover: showBabCoverState,
        },
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Paket_Lengkap_${units.length}_Unit_${pkg.input.mataPelajaran.replace(/\s+/g, "_")}_${pkg.input.kelas.replace(/\s+/g, "_")}.docx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Gagal export docx:", err);
    } finally {
      setIsExportingDocx(false);
    }
  };

  const handleCopyText = () => {
    const el = document.getElementById("document-print-container");
    if (el) {
      navigator.clipboard.writeText(el.innerText);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2500);
    }
  };

  const isUnitDependentTab = activeTab === 0 || activeTab >= 5;

  return (
    <div className="space-y-6">
      {/* Control Bar */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-4 sm:p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 print:hidden">
        {/* Left info */}
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-[#0F172A] text-[#3B82F6] rounded-lg border border-slate-800 shadow-xs">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                Paket Lengkap Administrasi Guru ({pkg.input.mataPelajaran} - {pkg.input.kelas})
              </h4>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-200">
                <Sparkles className="w-3 h-3 text-emerald-600" />
                {units.length} UNIT TP TUNTAS 100%
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              {pkg.meta.generatorEngine} • Regulasi Resmi {pkg.meta.versiRegulasi}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
          <button
            onClick={handleCopyText}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-bold bg-[#F8FAFC] hover:bg-slate-100 text-slate-700 rounded-lg border border-slate-300 transition-all cursor-pointer shadow-2xs"
          >
            {copiedToast ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-500" />
                <span>Salin Teks</span>
              </>
            )}
          </button>

          <button
            onClick={handleExportWord}
            disabled={isExportingDocx}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-bold bg-white hover:bg-blue-50 text-[#3B82F6] border border-blue-200 rounded-lg transition-all shadow-2xs cursor-pointer disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            <span>{isExportingDocx ? "Memproses..." : `Download Word`}</span>
          </button>

          <button
            onClick={handleDownloadPdf}
            disabled={isExportingPdf}
            title="Download langsung file PDF berformat A4 siap cetak"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white rounded-lg transition-all shadow-xs cursor-pointer disabled:opacity-60"
          >
            {isExportingPdf ? (
              <Loader2 className="w-4 h-4 animate-spin text-white" />
            ) : (
              <FileText className="w-4 h-4 text-white" />
            )}
            <span>{isExportingPdf ? `Membuat PDF ${pdfProgress.percent}%` : "Download PDF (.pdf)"}</span>
          </button>

          <button
            onClick={handlePrintAll}
            disabled={isPreparingPrint}
            title="Langsung mencetak seluruh dokumen ke printer / dialog cetak tanpa download file"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-extrabold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all shadow-sm active:scale-95 cursor-pointer disabled:opacity-60 border border-emerald-500 ring-2 ring-emerald-500/20"
          >
            {isPreparingPrint ? (
              <Loader2 className="w-4 h-4 animate-spin text-white" />
            ) : (
              <Printer className="w-4 h-4 text-white" />
            )}
            <span>{isPreparingPrint ? "Membuka Dialog Cetak..." : "Cetak Langsung (Print)"}</span>
          </button>
        </div>
      </div>

      {/* Fallback Modal jika browser memblokir popup */}
      {printBlockedUrl && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-slate-200 space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-100">
                <Printer className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">Jendela Cetak Langsung Siap</h4>
                <p className="text-xs text-slate-500">Browser Anda memerlukan konfirmasi untuk membuka jendela cetak.</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200 leading-relaxed">
              Klik tombol di bawah ini untuk membuka dialog cetak resmi A4 ke printer secara langsung tanpa perlu mendownload berkas.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={printBlockedUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setPrintBlockedUrl(null)}
                className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl text-center shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Buka & Cetak Sekarang</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setPrintBlockedUrl(null)}
                className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Progress Toast / Overlay when generating PDF */}
      {isExportingPdf && (
        <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800 shadow-xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Loader2 className="w-5 h-5 animate-spin text-[#3B82F6]" />
            <div>
              <p className="text-xs font-bold text-slate-100">
                {pdfProgress.text || "Sedang merender dokumen PDF berstandar A4..."}
              </p>
              <p className="text-[11px] text-slate-400">
                Mohon tunggu sejenak, berkas PDF akan otomatis terunduh ke perangkat Anda.
              </p>
            </div>
          </div>
          <div className="text-right shrink-0">
            <span className="text-sm font-mono font-bold text-[#3B82F6]">
              {pdfProgress.percent}%
            </span>
          </div>
        </div>
      )}

      {/* Tabs Pipeline Navigation & Options */}
      <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-2xs print:hidden space-y-3">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3 py-2 font-bold rounded-lg shrink-0 transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#0F172A] text-white shadow-xs"
                  : "bg-transparent text-slate-600 hover:bg-[#F8FAFC] hover:text-slate-900"
              }`}
            >
              <span
                className={`w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-mono ${
                  activeTab === tab.id
                    ? "bg-[#3B82F6] text-white"
                    : "bg-slate-100 text-slate-600 border border-slate-300"
                }`}
              >
                {tab.num}
              </span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Unit Selector Toolbar for Operational Units (Bab V - IX) */}
        {isUnitDependentTab && units.length > 1 && (
          <div className="pt-2 border-t border-slate-100 space-y-2">
            {/* Semester Switcher Tabs */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-500 font-bold text-[11px] shrink-0 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#3B82F6]" />
                Filter Semester:
              </span>
              <button
                onClick={() => {
                  setSelectedSemesterFilter("ALL");
                  setSelectedUnitIdx("ALL");
                }}
                className={`px-3 py-1 rounded-md font-bold text-xs cursor-pointer transition-all flex items-center gap-1.5 ${
                  selectedSemesterFilter === "ALL" && selectedUnitIdx === "ALL"
                    ? "bg-[#3B82F6] text-white shadow-2xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <span>Semua (Ganjil & Genap)</span>
                <span className="bg-black/15 text-[10px] px-1.5 py-0.5 rounded-full font-semibold">
                  {units.length} Unit
                </span>
              </button>
              <button
                onClick={() => {
                  setSelectedSemesterFilter("GANJIL");
                  setSelectedUnitIdx("ALL");
                }}
                className={`px-3 py-1 rounded-md font-bold text-xs cursor-pointer transition-all flex items-center gap-1.5 ${
                  selectedSemesterFilter === "GANJIL" && selectedUnitIdx === "ALL"
                    ? "bg-blue-600 text-white shadow-2xs"
                    : "bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200"
                }`}
              >
                <span>Semester Ganjil Saja (Juli - Des)</span>
                <span className="bg-blue-200/60 text-blue-950 text-[10px] px-1.5 py-0.5 rounded-full font-semibold">
                  {ganjilUnits.length} Unit
                </span>
              </button>
              <button
                onClick={() => {
                  setSelectedSemesterFilter("GENAP");
                  setSelectedUnitIdx("ALL");
                }}
                className={`px-3 py-1 rounded-md font-bold text-xs cursor-pointer transition-all flex items-center gap-1.5 ${
                  selectedSemesterFilter === "GENAP" && selectedUnitIdx === "ALL"
                    ? "bg-purple-600 text-white shadow-2xs"
                    : "bg-purple-50 text-purple-800 hover:bg-purple-100 border border-purple-200"
                }`}
              >
                <span>Semester Genap Saja (Jan - Jun)</span>
                <span className="bg-purple-200/60 text-purple-950 text-[10px] px-1.5 py-0.5 rounded-full font-semibold">
                  {genapUnits.length} Unit
                </span>
              </button>
            </div>

            {/* Individual Unit TP Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto text-xs pb-1">
              <span className="text-slate-500 font-bold text-[11px] shrink-0 flex items-center gap-1">
                <FolderOpen className="w-3.5 h-3.5 text-[#3B82F6]" />
                Pilih Unit Spesifik:
              </span>
              <button
                onClick={() => setSelectedUnitIdx("ALL")}
                className={`px-2.5 py-1 rounded-md font-bold text-xs shrink-0 cursor-pointer transition-all ${
                  selectedUnitIdx === "ALL"
                    ? "bg-[#0F172A] text-white shadow-2xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Tampilkan Semua ({displayedUnits.length} Unit)
              </button>
              {units
                .filter((u) => {
                  if (selectedSemesterFilter === "GANJIL") return u.semester === "GANJIL";
                  if (selectedSemesterFilter === "GENAP") return u.semester === "GENAP";
                  return true;
                })
                .map((u) => {
                  const originalIdx = units.findIndex((x) => x.kodeTP === u.kodeTP);
                  const isSelected = selectedUnitIdx === originalIdx;
                  return (
                    <button
                      key={u.kodeTP}
                      onClick={() => setSelectedUnitIdx(originalIdx)}
                      className={`px-2.5 py-1 rounded-md font-medium text-xs shrink-0 cursor-pointer transition-all flex items-center gap-1 ${
                        isSelected
                          ? "bg-[#0F172A] text-white shadow-2xs font-bold ring-2 ring-blue-500"
                          : u.semester === "GENAP"
                          ? "bg-purple-50/80 text-purple-900 hover:bg-purple-100 border border-purple-200"
                          : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      <span>
                        {u.chapterTitle
                          ? `${u.chapterTitle} (${u.kodeTP})`
                          : u.unitTitle.toLowerCase().startsWith("unit ")
                          ? `${u.unitTitle.split(":")[0]} (${u.kodeTP})`
                          : `Unit ${u.unitNumber} (${u.kodeTP})`}
                      </span>
                      <span
                        className={`text-[9px] px-1 py-0.2 rounded font-semibold ${
                          u.semester === "GENAP"
                            ? "bg-purple-200/80 text-purple-950"
                            : "bg-blue-100 text-blue-900"
                        }`}
                      >
                        {u.semester === "GENAP" ? "Genap" : "Ganjil"}
                      </span>
                    </button>
                  );
                })}
            </div>
          </div>
        )}

        {/* Setting Toolbar: Cover Bab Switch & Print Info */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 px-1 text-xs">
          {/* Cover Bab Toggle */}
          <label className="inline-flex items-center gap-2 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 cursor-pointer transition-all">
            <BookMarked className="w-4 h-4 text-[#3B82F6]" />
            <input
              type="checkbox"
              checked={showBabCoverState}
              onChange={(e) => setShowBabCoverState(e.target.checked)}
              className="w-3.5 h-3.5 text-[#3B82F6] rounded border-slate-300 focus:ring-[#3B82F6] cursor-pointer"
            />
            <span className="font-bold text-slate-800">
              Sertakan Cover Depan Bab (Pembatas Berlogo Tanpa Isi/Tabel)
            </span>
          </label>

          {/* Right Toolbar: Quick Tab Print & Specs */}
          <div className="flex items-center gap-3">
            {activeTab !== 0 && (
              <button
                onClick={handlePrintCurrentTab}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md border border-slate-300 transition-all cursor-pointer shadow-2xs"
                title="Hanya mencetak bab / unit yang sedang aktif di layar saat ini"
              >
                <Printer className="w-3.5 h-3.5 text-slate-600" />
                <span>Cetak Tab Ini Saja {activeTab === 4 ? "(A4 Landscape)" : "(A4)"}</span>
              </button>
            )}
            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <span className="font-semibold text-slate-700">Margin Jilid: 3.0 cm</span>
              <span>•</span>
              <span>{activeTab === 4 ? "Format: A4 Landscape" : "Format: A4 Portrait"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Container Preview Dokumen */}
      <div id="document-print-container" className="space-y-8">
        
        {/* SECTION 0: COVER SAMPUL UTAMA */}
        {(activeTab === 0 || activeTab === 100) && (
          <section id="doc0-cover-section" className="print:break-after-page">
            <Doc0Cover input={pkg.input} />
          </section>
        )}

        {/* SECTION 1: BAB I - ANALISIS CP & TP */}
        {(activeTab === 0 || activeTab === 1) && (
          <section id="doc1-section" className="space-y-6">
            {showBabCoverState && (
              <BabCover
                babNumber="BAB I"
                docTitle="ANALISIS CAPAIAN PEMBELAJARAN (CP) DAN PERUMUSAN TUJUAN PEMBELAJARAN (TP)"
                docSubtitle="Dekonstruksi Kata Kerja Operasional (KKO Bloom C1-C6) & Konten Esensial BSKAP 046/2025"
                input={pkg.input}
              />
            )}
            <div className="print:break-after-page">
              <Doc1AnalisisCP data={pkg.doc1AnalisisCP} input={pkg.input} />
            </div>
          </section>
        )}

        {/* SECTION 2: BAB II - ALUR TUJUAN PEMBELAJARAN (ATP) */}
        {(activeTab === 0 || activeTab === 2) && (
          <section id="doc2-section" className="space-y-6">
            {showBabCoverState && (
              <BabCover
                babNumber="BAB II"
                docTitle="ALUR TUJUAN PEMBELAJARAN (ATP)"
                docSubtitle="Distribusi Sekuensial Berkelanjutan & Pemetaan Target Karakter Resmi 2025/2026"
                input={pkg.input}
              />
            )}
            <div className="print:break-after-page">
              <Doc2ATP data={pkg.doc2ATP} input={pkg.input} />
            </div>
          </section>
        )}

        {/* SECTION 3: BAB III - PROGRAM TAHUNAN (PROTA) */}
        {(activeTab === 0 || activeTab === 3) && (
          <section id="doc3-section" className="space-y-6">
            {showBabCoverState && (
              <BabCover
                babNumber="BAB III"
                docTitle="PROGRAM TAHUNAN (PROTA)"
                docSubtitle="Distribusi Alokasi Jam Pelajaran Resmi (36 Minggu Efektif Standar Sesuai Struktur Kurikulum)"
                input={pkg.input}
              />
            )}
            <div className="print:break-after-page">
              <Doc3Prota prota={pkg.doc3Prota} input={pkg.input} />
            </div>
          </section>
        )}

        {/* SECTION 4: BAB IV - PROGRAM SEMESTER (PROSEM) */}
        {(activeTab === 0 || activeTab === 4) && (
          <section id="doc4-section" className="space-y-6">
            {showBabCoverState && (
              <BabCover
                babNumber="BAB IV"
                docTitle="PROGRAM SEMESTER (PROSEM)"
                docSubtitle="Matriks Distribusi Jam Pelajaran Mingguan per Bulan (Semester Ganjil & Genap)"
                input={pkg.input}
              />
            )}
            <div className="print:break-after-page">
              <Doc4Prosem
                prosemGanjil={pkg.doc4ProsemGanjil}
                prosemGenap={pkg.doc4ProsemGenap}
                input={pkg.input}
              />
            </div>
          </section>
        )}

        {/* SECTION 5: BAB V - MODUL AJAR (DEEP LEARNING / KBC) - ALL UNITS */}
        {(activeTab === 0 || activeTab === 5) && (
          <section id="doc5-section" className="space-y-6">
            {showBabCoverState && (
              <BabCover
                babNumber="BAB V"
                docTitle="MODUL AJAR / RPP PEMBELAJARAN MENDALAM"
                docSubtitle={
                  pkg.input.jalur === "Kemenag"
                    ? "Pendekatan Deep Learning Terintegrasi Kurikulum Berbasis Cinta (KBC Sintaks FIDS)"
                    : "Pendekatan Pembelajaran Mendalam (Deep Learning: Mindful, Meaningful, Joyful & 4 Olah)"
                }
                input={pkg.input}
              />
            )}
            <div className="space-y-8">
              {displayedUnits.map((u, idx) => {
                const prevUnit = idx > 0 ? displayedUnits[idx - 1] : null;
                const isFirstGenap = u.semester === "GENAP" && (!prevUnit || prevUnit.semester === "GANJIL");
                const isFirstGanjil = u.semester === "GANJIL" && idx === 0;

                return (
                  <React.Fragment key={`modul-${u.kodeTP}`}>
                    {/* Header Semester Ganjil jika tampil banyak unit */}
                    {isFirstGanjil && displayedUnits.length > 1 && (
                      <div className="bg-linear-to-r from-blue-700 to-indigo-800 text-white p-4 rounded-xl shadow-xs print:break-before-page flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <div className="text-[11px] uppercase tracking-wider text-blue-200 font-bold">Paket Modul Ajar Tahunan</div>
                          <h4 className="text-base font-extrabold">SEMESTER GANJIL (JULI - DESEMBER)</h4>
                        </div>
                        <span className="bg-white/20 text-white px-2.5 py-1 rounded-md text-xs font-bold">
                          {ganjilUnits.length} Unit Pembelajaran
                        </span>
                      </div>
                    )}

                    {/* Header Semester Genap jika tampil banyak unit */}
                    {isFirstGenap && displayedUnits.length > 1 && (
                      <div className="bg-linear-to-r from-purple-700 to-indigo-900 text-white p-4 rounded-xl shadow-xs print:break-before-page flex flex-wrap items-center justify-between gap-2 mt-8">
                        <div>
                          <div className="text-[11px] uppercase tracking-wider text-purple-200 font-bold">Paket Modul Ajar Tahunan</div>
                          <h4 className="text-base font-extrabold">SEMESTER GENAP (JANUARI - JUNI)</h4>
                        </div>
                        <span className="bg-white/20 text-white px-2.5 py-1 rounded-md text-xs font-bold">
                          {genapUnits.length} Unit Pembelajaran
                        </span>
                      </div>
                    )}

                    <div className="print:break-after-page space-y-3">
                      <div className="bg-slate-900 text-white px-4 py-2.5 rounded-lg flex items-center justify-between text-xs font-bold print:hidden">
                        <span className="flex items-center gap-2">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] ${
                              u.semester === "GENAP" ? "bg-purple-600 text-white" : "bg-blue-600 text-white"
                            }`}
                          >
                            SEMESTER {u.semester === "GENAP" ? "GENAP" : "GANJIL"}
                          </span>
                          <span>{u.unitLabel || (u.unitTitle.toLowerCase().startsWith("unit ") ? u.unitTitle : `UNIT ${u.unitNumber}: ${u.unitTitle} (${u.kodeTP})`)}</span>
                        </span>
                        <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded text-[11px]">
                          {u.alokasiJP} JP • Semester {u.semester}
                        </span>
                      </div>
                      <Doc5ModulAjar
                        modul={u.doc5ModulAjar}
                        input={pkg.input}
                        semester={u.semester}
                        unitNumber={u.unitNumber}
                      />
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </section>
        )}

        {/* SECTION 6: BAB VI - LEMBAR KERJA PESERTA DIDIK (LKPD) - ALL UNITS */}
        {(activeTab === 0 || activeTab === 6) && (
          <section id="doc6-section" className="space-y-6">
            {showBabCoverState && (
              <BabCover
                babNumber="BAB VI"
                docTitle="LEMBAR KERJA PESERTA DIDIK (LKPD)"
                docSubtitle="Penyelidikan Kontekstual & Penalaran Kritis Berbasis Masalah Nyata"
                input={pkg.input}
              />
            )}
            <div className="space-y-8">
              {displayedUnits.map((u, idx) => {
                const prevUnit = idx > 0 ? displayedUnits[idx - 1] : null;
                const isFirstGenap = u.semester === "GENAP" && (!prevUnit || prevUnit.semester === "GANJIL");
                const isFirstGanjil = u.semester === "GANJIL" && idx === 0;

                return (
                  <React.Fragment key={`lkpd-${u.kodeTP}`}>
                    {isFirstGanjil && displayedUnits.length > 1 && (
                      <div className="bg-linear-to-r from-blue-700 to-indigo-800 text-white p-3 rounded-lg shadow-xs print:break-before-page flex items-center justify-between">
                        <span className="font-bold text-sm">LKPD SEMESTER GANJIL</span>
                        <span className="text-xs bg-white/20 px-2 py-0.5 rounded">{ganjilUnits.length} Unit</span>
                      </div>
                    )}
                    {isFirstGenap && displayedUnits.length > 1 && (
                      <div className="bg-linear-to-r from-purple-700 to-indigo-900 text-white p-3 rounded-lg shadow-xs print:break-before-page flex items-center justify-between mt-6">
                        <span className="font-bold text-sm">LKPD SEMESTER GENAP</span>
                        <span className="text-xs bg-white/20 px-2 py-0.5 rounded">{genapUnits.length} Unit</span>
                      </div>
                    )}
                    <div className="print:break-after-page space-y-3">
                      <div className="bg-slate-900 text-white px-4 py-2 rounded-lg flex items-center justify-between text-xs font-bold print:hidden">
                        <span className="flex items-center gap-2">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] ${
                              u.semester === "GENAP" ? "bg-purple-600 text-white" : "bg-blue-600 text-white"
                            }`}
                          >
                            SEMESTER {u.semester === "GENAP" ? "GENAP" : "GANJIL"}
                          </span>
                          <span>LKPD - {u.unitLabel || (u.unitTitle.toLowerCase().startsWith("unit ") ? u.unitTitle : `UNIT ${u.unitNumber}: ${u.unitTitle} (${u.kodeTP})`)}</span>
                        </span>
                        <span className="bg-[#3B82F6] px-2 py-0.5 rounded text-[11px]">Eksplorasi Kontekstual</span>
                      </div>
                      <Doc6LKPD lkpd={u.doc6LKPD} input={pkg.input} />
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </section>
        )}

        {/* SECTION 7: BAB VII - KRITERIA KETERCAPAIAN TUJUAN (KKTP) - ALL UNITS */}
        {(activeTab === 0 || activeTab === 7) && (
          <section id="doc7-section" className="space-y-6">
            {showBabCoverState && (
              <BabCover
                babNumber="BAB VII"
                docTitle="KRITERIA KETERCAPAIAN TUJUAN PEMBELAJARAN (KKTP)"
                docSubtitle="Standar Asesmen PPA Revisi 2025: Rubrik Interval Kualitatif (Tanpa KKM Angka Tunggal Mati)"
                input={pkg.input}
              />
            )}
            <div className="space-y-8">
              {displayedUnits.map((u, idx) => {
                const prevUnit = idx > 0 ? displayedUnits[idx - 1] : null;
                const isFirstGenap = u.semester === "GENAP" && (!prevUnit || prevUnit.semester === "GANJIL");
                const isFirstGanjil = u.semester === "GANJIL" && idx === 0;

                return (
                  <React.Fragment key={`kktp-${u.kodeTP}`}>
                    {isFirstGanjil && displayedUnits.length > 1 && (
                      <div className="bg-linear-to-r from-blue-700 to-indigo-800 text-white p-3 rounded-lg shadow-xs print:break-before-page flex items-center justify-between">
                        <span className="font-bold text-sm">KKTP SEMESTER GANJIL</span>
                        <span className="text-xs bg-white/20 px-2 py-0.5 rounded">{ganjilUnits.length} Unit</span>
                      </div>
                    )}
                    {isFirstGenap && displayedUnits.length > 1 && (
                      <div className="bg-linear-to-r from-purple-700 to-indigo-900 text-white p-3 rounded-lg shadow-xs print:break-before-page flex items-center justify-between mt-6">
                        <span className="font-bold text-sm">KKTP SEMESTER GENAP</span>
                        <span className="text-xs bg-white/20 px-2 py-0.5 rounded">{genapUnits.length} Unit</span>
                      </div>
                    )}
                    <div className="print:break-after-page space-y-3">
                      <div className="bg-slate-900 text-white px-4 py-2 rounded-lg flex items-center justify-between text-xs font-bold print:hidden">
                        <span className="flex items-center gap-2">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] ${
                              u.semester === "GENAP" ? "bg-purple-600 text-white" : "bg-blue-600 text-white"
                            }`}
                          >
                            SEMESTER {u.semester === "GENAP" ? "GENAP" : "GANJIL"}
                          </span>
                          <span>KKTP - {u.unitLabel || (u.unitTitle.toLowerCase().startsWith("unit ") ? u.unitTitle : `UNIT ${u.unitNumber}: ${u.unitTitle} (${u.kodeTP})`)}</span>
                        </span>
                        <span className="bg-emerald-600 px-2 py-0.5 rounded text-[11px]">Rubrik Interval 4 Kategori</span>
                      </div>
                      <Doc7KKTP kktp={u.doc7KKTP} input={pkg.input} />
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </section>
        )}

        {/* SECTION 8: BAB VIII - KISI-KISI PENULISAN SOAL ASESMEN - ALL UNITS */}
        {(activeTab === 0 || activeTab === 8) && (
          <section id="doc8-section" className="space-y-6">
            {showBabCoverState && (
              <BabCover
                babNumber="BAB VIII"
                docTitle="KISI-KISI PENULISAN SOAL ASESMEN"
                docSubtitle="Matriks Penjamin Mutu Soal Asesmen (Distribusi Level Kognitif Bloom & Indikator IKTP)"
                input={pkg.input}
              />
            )}
            <div className="print:break-after-page">
              {/* Combine kisi-kisi from all units */}
              <Doc8KisiKisi
                kisiKisi={
                  selectedUnitIdx === "ALL"
                    ? units.flatMap((u, uIdx) =>
                        u.doc8KisiKisi.map((k, kIdx) => ({
                          ...k,
                          no: uIdx * 2 + kIdx + 1,
                          noSoal: uIdx * 2 + kIdx + 1,
                        }))
                      )
                    : displayedUnits[0].doc8KisiKisi
                }
                input={pkg.input}
              />
            </div>
          </section>
        )}

        {/* SECTION 9: BAB IX - NASKAH BANK SOAL & PENSKORAN - ALL UNITS */}
        {(activeTab === 0 || activeTab === 9) && (
          <section id="doc9-section" className="space-y-6">
            {showBabCoverState && (
              <BabCover
                babNumber="BAB IX"
                docTitle="NASKAH BANK SOAL DAN PEDOMAN PENSKORAN"
                docSubtitle="Instrumen Evaluasi Hasil Belajar Model Asesmen Nasional (PGK & Kasus HOTS)"
                input={pkg.input}
              />
            )}
            <div className="space-y-8">
              {displayedUnits.map((u, idx) => {
                const prevUnit = idx > 0 ? displayedUnits[idx - 1] : null;
                const isFirstGenap = u.semester === "GENAP" && (!prevUnit || prevUnit.semester === "GANJIL");
                const isFirstGanjil = u.semester === "GANJIL" && idx === 0;

                return (
                  <React.Fragment key={`banksoal-${u.kodeTP}`}>
                    {isFirstGanjil && displayedUnits.length > 1 && (
                      <div className="bg-linear-to-r from-blue-700 to-indigo-800 text-white p-3 rounded-lg shadow-xs print:break-before-page flex items-center justify-between">
                        <span className="font-bold text-sm">BANK SOAL SEMESTER GANJIL</span>
                        <span className="text-xs bg-white/20 px-2 py-0.5 rounded">{ganjilUnits.length} Unit</span>
                      </div>
                    )}
                    {isFirstGenap && displayedUnits.length > 1 && (
                      <div className="bg-linear-to-r from-purple-700 to-indigo-900 text-white p-3 rounded-lg shadow-xs print:break-before-page flex items-center justify-between mt-6">
                        <span className="font-bold text-sm">BANK SOAL SEMESTER GENAP</span>
                        <span className="text-xs bg-white/20 px-2 py-0.5 rounded">{genapUnits.length} Unit</span>
                      </div>
                    )}
                    <div className="print:break-after-page space-y-3">
                      <div className="bg-slate-900 text-white px-4 py-2 rounded-lg flex items-center justify-between text-xs font-bold print:hidden">
                        <span className="flex items-center gap-2">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] ${
                              u.semester === "GENAP" ? "bg-purple-600 text-white" : "bg-blue-600 text-white"
                            }`}
                          >
                            SEMESTER {u.semester === "GENAP" ? "GENAP" : "GANJIL"}
                          </span>
                          <span>BANK SOAL - {u.unitLabel || (u.unitTitle.toLowerCase().startsWith("unit ") ? u.unitTitle : `UNIT ${u.unitNumber}: ${u.unitTitle} (${u.kodeTP})`)}</span>
                        </span>
                        <span className="bg-indigo-600 px-2 py-0.5 rounded text-[11px]">PGK & Uraian HOTS</span>
                      </div>
                      <Doc9BankSoal bankSoal={u.doc9BankSoal} input={pkg.input} />
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};

