// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import React from "react";
import {
  FileText,
  FileCheck2,
  Users,
  RefreshCw,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export type AppNavMode = "compiler" | "assessment" | "collaboration";

interface NavbarProps {
  isSynced?: boolean;
  activeMode?: AppNavMode;
  onSelectMode?: (mode: AppNavMode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isSynced = true,
  activeMode = "compiler",
  onSelectMode,
}) => {
  return (
    <header className="bg-[#0F172A] text-white px-4 sm:px-8 py-3 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 border-b-4 border-[#3B82F6] sticky top-0 z-50 shadow-md print:hidden">
      {/* Title & Subtitle */}
      <div className="flex items-center gap-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h1 className="text-base sm:text-lg font-bold tracking-tight text-white uppercase">
              Engine Administrasi Guru & Bank Soal Terpadu
            </h1>
            <span className="hidden lg:inline-flex items-center gap-1 text-[10px] bg-blue-600/30 text-blue-300 border border-blue-400/40 px-2 py-0.5 rounded-full font-semibold">
              <Sparkles className="w-2.5 h-2.5" />
              2025/2026
            </span>
          </div>
          <p className="text-[10px] sm:text-[11px] text-slate-300 font-medium tracking-wide">
            Regulasi Resmi 2025/2026 | Berdasarkan Permendikdasmen No. 10 & 13 &bull; KMA No. 1503 & Kepdirjen Pendis No. 6077
          </p>
        </div>
      </div>

      {/* Main Mode Navigation & Sync Indicator */}
      <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-between md:justify-end">
        {onSelectMode && (
          <div className="flex items-center bg-slate-800/90 p-1 rounded-xl border border-slate-700/70 text-xs">
            <button
              onClick={() => onSelectMode("compiler")}
              className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeMode === "compiler"
                  ? "bg-[#3B82F6] text-white shadow-xs"
                  : "text-slate-300 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>9 Dokumen</span>
            </button>

            <button
              onClick={() => onSelectMode("assessment")}
              className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeMode === "assessment"
                  ? "bg-[#3B82F6] text-white shadow-xs"
                  : "text-slate-300 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Pembuat Asesmen</span>
            </button>

            <button
              onClick={() => onSelectMode("collaboration")}
              className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeMode === "collaboration"
                  ? "bg-[#3B82F6] text-white shadow-xs"
                  : "text-slate-300 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Ruang Kolaborasi</span>
            </button>
          </div>
        )}

        {/* Sync Indicator */}
        <div className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/50 shrink-0">
          {isSynced ? (
            <>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400/90 hidden sm:inline-block">Tersinkronisasi</span>
            </>
          ) : (
            <>
              <RefreshCw className="w-3.5 h-3.5 text-blue-400 animate-spin" />
              <span className="text-blue-400/90 hidden sm:inline-block">Menyimpan...</span>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
