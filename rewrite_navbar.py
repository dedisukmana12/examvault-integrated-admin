import sys

new_content = """import React from "react";

export const Navbar: React.FC = () => {
  return (
    <header className="bg-[#0F172A] text-white px-4 sm:px-8 py-3.5 sm:py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b-4 border-[#3B82F6] sticky top-0 z-50 shadow-md print:hidden">
      {/* Title & Subtitle */}
      <div className="flex items-center gap-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h1 className="text-base sm:text-lg font-bold tracking-tight text-white uppercase">
              Engine Administrasi Guru & Bank Soal Terpadu
            </h1>
          </div>
          <p className="text-[10px] sm:text-[11px] text-slate-300 font-medium tracking-wide">
            Regulasi Resmi 2025/2026 | Berdasarkan Permendikdasmen No. 10 & 13 &bull; KMA No. 1503 & Kepdirjen Pendis No. 6077
          </p>
        </div>
      </div>
    </header>
  );
};
"""

with open('src/components/Navbar.tsx', 'w') as f:
    f.write(new_content)

