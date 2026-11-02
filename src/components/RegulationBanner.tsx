// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import React from "react";
import { REGULASI_CONSTANTS } from "../data/curriculumDatabase";
import { ShieldCheck, BookOpen, Sparkles } from "lucide-react";

interface Props {
  jalur: "Dinas" | "Kemenag";
  onSelectJalur: (jalur: "Dinas" | "Kemenag") => void;
}

export const RegulationBanner: React.FC<Props> = ({ jalur, onSelectJalur }) => {
  const isKemenag = jalur === "Kemenag";
  const regulasi = isKemenag ? REGULASI_CONSTANTS.KEMENAG : REGULASI_CONSTANTS.DINAS;

  return (
    <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden mb-6">
      {/* Header Selector Bar */}
      <div className="bg-[#0F172A] text-white p-4 sm:p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#3B82F6]">
                Hierarki Regulasi Terintegrasi 2025/2026
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold tracking-tight text-white mt-0.5">
              {isKemenag
                ? "Jalur Kementerian Agama (Kemenag / Madrasah) — Integrasi KBC & PPRA"
                : "Jalur Dinas Pendidikan (Kemendikdasmen) — Murni Standar Nasional"}
            </h2>
          </div>
        </div>

        {/* Pathway Toggle */}
        <div className="flex items-center bg-[#1E293B] p-1 rounded-lg border border-slate-700 w-full md:w-auto">
          <button
            onClick={() => onSelectJalur("Dinas")}
            className={`flex-1 md:flex-initial px-4 py-1.5 text-xs font-bold rounded-md transition-all ${
              !isKemenag
                ? "bg-[#3B82F6] text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Jalur Dinas
          </button>
          <button
            onClick={() => onSelectJalur("Kemenag")}
            className={`flex-1 md:flex-initial px-4 py-1.5 text-xs font-bold rounded-md transition-all ${
              isKemenag
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Jalur Kemenag
          </button>
        </div>
      </div>

      {/* Detail Dasar Hukum & Karakter Grid */}
      <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#F8FAFC] text-xs">
        {/* Kolom 1: Dasar Hukum */}
        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs">
          <div className="flex items-center gap-2 text-slate-900 font-bold uppercase tracking-wider text-[11px] mb-2 pb-2 border-b border-slate-100">
            <ShieldCheck className="w-4 h-4 text-[#3B82F6]" />
            Dasar Hukum Resmi 2025
          </div>
          <ul className="space-y-1.5 text-slate-700">
            {regulasi.hukum.map((dh, i) => (
              <li key={i} className="flex items-start gap-1.5 leading-relaxed">
                <span className="text-[#3B82F6] font-bold">•</span>
                <span className="text-[11px]">{dh}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom 2: Target Karakter */}
        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs">
          <div className="flex items-center gap-2 text-slate-900 font-bold uppercase tracking-wider text-[11px] mb-2 pb-2 border-b border-slate-100">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Target Profil & Karakter
          </div>
          <p className="font-semibold text-slate-900 mb-1.5 text-[11px]">
            {isKemenag
              ? "8 Dimensi SKL + Panca Cinta KBC & PPRA:"
              : "8 Dimensi Profil Lulusan SKL 058/2025:"}
          </p>
          <div className="flex flex-wrap gap-1">
            {regulasi.karakterItems.map((k, i) => (
              <span
                key={i}
                className="bg-slate-50 text-slate-800 text-[10px] font-medium px-2 py-0.5 rounded border border-slate-200"
              >
                {k}
              </span>
            ))}
          </div>
        </div>

        {/* Kolom 3: Pendekatan Ajar */}
        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs">
          <div className="flex items-center gap-2 text-slate-900 font-bold uppercase tracking-wider text-[11px] mb-2 pb-2 border-b border-slate-100">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            Pendekatan & Sintaks Ajar
          </div>
          <p className="font-semibold text-slate-900 mb-1 text-[11px]">{regulasi.pedagogis}</p>
          <div className="space-y-1 text-slate-600 text-[11px]">
            <p className="leading-snug">
              <strong className="text-slate-800">Prinsip:</strong> {regulasi.prinsip}
            </p>
            <p className="leading-snug">
              <strong className="text-slate-800">Alur:</strong> {regulasi.siklus}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
