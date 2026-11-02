// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import React from "react";
import { PathwayType } from "../types";

interface Props {
  logoUrl?: string;
  presetOption?: "kemenag" | "kemdikbud" | "custom" | "none";
  jalur?: PathwayType;
  className?: string;
  alt?: string;
}

export const KemenagEmblemSvg: React.FC<{ className?: string }> = ({
  className = "w-16 h-16 sm:w-20 sm:h-20",
}) => (
  <svg
    className={className}
    viewBox="0 0 1000 1050"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* 1. Perisai Segi Lima Luar (Emas & Hitam) */}
    <polygon
      points="500,18 985,368 798,986 202,986 15,368"
      fill="#FCC300"
      stroke="#1E1E1E"
      strokeWidth="12"
      strokeLinejoin="round"
    />

    {/* 2. Perisai Segi Lima Dalam (Hijau Resmi Kemenag) */}
    <polygon
      points="500,72 935,385 768,938 232,938 65,385"
      fill="#007336"
      stroke="#1E1E1E"
      strokeWidth="8"
      strokeLinejoin="round"
    />

    {/* 3. Bintang Emas Bersegi Lima (Puncak Keimanan & Ketakwaan) */}
    <polygon
      points="500,175 522,242 593,242 535,284 557,351 500,309 443,351 465,284 407,242 478,242"
      fill="#FFC700"
      stroke="#1E1E1E"
      strokeWidth="5"
      strokeLinejoin="round"
    />

    {/* 4. Tangkai dan Bunga Kapas (Sisi Kiri - 17 Kuntum Bunga Kapas) */}
    <g id="kapas-group">
      {/* Batang Utama Kapas */}
      <path
        d="M260,780 Q210,560 380,310"
        stroke="#598C35"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />
      {/* Cabang-cabang & Kuntum Kapas */}
      {[
        { cx: 375, cy: 300, r: 16 },
        { cx: 350, cy: 330, r: 18 },
        { cx: 395, cy: 350, r: 16 },
        { cx: 320, cy: 375, r: 20 },
        { cx: 365, cy: 400, r: 18 },
        { cx: 285, cy: 425, r: 22 },
        { cx: 330, cy: 450, r: 20 },
        { cx: 260, cy: 485, r: 24 },
        { cx: 305, cy: 510, r: 22 },
        { cx: 240, cy: 550, r: 25 },
        { cx: 285, cy: 575, r: 23 },
        { cx: 225, cy: 620, r: 26 },
        { cx: 268, cy: 645, r: 24 },
        { cx: 215, cy: 690, r: 26 },
        { cx: 255, cy: 715, r: 24 },
        { cx: 220, cy: 755, r: 25 },
        { cx: 255, cy: 775, r: 23 },
      ].map((k, idx) => (
        <g key={`kapas-${idx}`}>
          {/* Kelopak Hijau */}
          <circle
            cx={k.cx}
            cy={k.cy}
            r={k.r + 4}
            fill="#598C35"
            stroke="#1E1E1E"
            strokeWidth="3"
          />
          {/* Bunga Putih Berlekuk (Kapas Murni) */}
          <circle
            cx={k.cx - 3}
            cy={k.cy - 3}
            r={k.r - 2}
            fill="#FFFFFF"
            stroke="#1E1E1E"
            strokeWidth="2"
          />
          <circle
            cx={k.cx + 4}
            cy={k.cy - 1}
            r={k.r - 3}
            fill="#FFFFFF"
          />
          <circle
            cx={k.cx}
            cy={k.cy + 3}
            r={k.r - 3}
            fill="#FFFFFF"
          />
        </g>
      ))}
    </g>

    {/* 5. Tangkai dan Butir Padi (Sisi Kanan - 45 Butir Padi Emas) */}
    <g id="padi-group">
      {/* Batang Utama Padi */}
      <path
        d="M740,780 Q790,560 620,310"
        stroke="#E69500"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />
      {/* Butir-butir Padi Kuning Emas */}
      {[
        { cx: 620, cy: 300, rx: 22, ry: 10, rot: -35 },
        { cx: 650, cy: 325, rx: 24, ry: 11, rot: -25 },
        { cx: 610, cy: 345, rx: 24, ry: 11, rot: -40 },
        { cx: 680, cy: 360, rx: 26, ry: 12, rot: -15 },
        { cx: 635, cy: 385, rx: 26, ry: 12, rot: -30 },
        { cx: 710, cy: 405, rx: 28, ry: 13, rot: -5 },
        { cx: 665, cy: 430, rx: 28, ry: 13, rot: -20 },
        { cx: 735, cy: 455, rx: 30, ry: 14, rot: 5 },
        { cx: 690, cy: 480, rx: 30, ry: 14, rot: -10 },
        { cx: 755, cy: 510, rx: 32, ry: 15, rot: 15 },
        { cx: 710, cy: 535, rx: 32, ry: 15, rot: 0 },
        { cx: 770, cy: 570, rx: 34, ry: 16, rot: 25 },
        { cx: 725, cy: 595, rx: 34, ry: 16, rot: 10 },
        { cx: 780, cy: 635, rx: 34, ry: 16, rot: 35 },
        { cx: 735, cy: 660, rx: 34, ry: 16, rot: 20 },
        { cx: 780, cy: 700, rx: 34, ry: 16, rot: 45 },
        { cx: 740, cy: 725, rx: 34, ry: 16, rot: 30 },
        { cx: 770, cy: 760, rx: 32, ry: 15, rot: 50 },
        { cx: 730, cy: 780, rx: 30, ry: 14, rot: 35 },
      ].map((p, idx) => (
        <g
          key={`padi-${idx}`}
          transform={`translate(${p.cx}, ${p.cy}) rotate(${p.rot})`}
        >
          <ellipse
            cx="0"
            cy="0"
            rx={p.rx}
            ry={p.ry}
            fill="#FFC700"
            stroke="#1E1E1E"
            strokeWidth="4"
          />
          <path
            d={`M${-p.rx + 3},0 L${p.rx - 3},0`}
            stroke="#D68000"
            strokeWidth="2.5"
          />
        </g>
      ))}
    </g>

    {/* 6. Rehal (Tatakan Al-Qur'an Berbentuk Silang) */}
    <g id="rehal-group">
      {/* Kaki Rehal Kiri-Bawah ke Kanan-Atas */}
      <polygon
        points="370,600 630,735 600,775 340,640"
        fill="#111827"
        stroke="#1E1E1E"
        strokeWidth="6"
      />
      <polygon
        points="370,600 630,735 620,745 360,610"
        fill="#FFFFFF"
        stroke="#1E1E1E"
        strokeWidth="3"
      />

      {/* Kaki Rehal Kanan-Bawah ke Kiri-Atas */}
      <polygon
        points="630,600 370,735 400,775 660,640"
        fill="#111827"
        stroke="#1E1E1E"
        strokeWidth="6"
      />
      <polygon
        points="630,600 370,735 380,745 640,610"
        fill="#FFFFFF"
        stroke="#1E1E1E"
        strokeWidth="3"
      />
    </g>

    {/* 7. Kitab Suci Al-Qur'an (Terbuka di Tengah) */}
    <g id="kitab-group">
      {/* Tebal Buku / Cover Bawah */}
      <path
        d="M370,570 L370,615 Q500,660 630,615 L630,570 Q500,615 370,570 Z"
        fill="#B87B00"
        stroke="#1E1E1E"
        strokeWidth="5"
      />

      {/* Lembar Halaman Kiri */}
      <path
        d="M500,465 Q430,445 375,465 L370,575 Q430,555 500,580 Z"
        fill="#FFC700"
        stroke="#1E1E1E"
        strokeWidth="6"
      />
      {/* Garis-garis Tulisan Lembar Kiri */}
      <path
        d="M400,490 Q445,475 480,490 M400,510 Q445,495 480,510 M400,530 Q445,515 480,530 M400,550 Q445,535 480,550"
        stroke="#7A4E00"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Lembar Halaman Kanan */}
      <path
        d="M500,465 Q570,445 625,465 L630,575 Q570,555 500,580 Z"
        fill="#FFC700"
        stroke="#1E1E1E"
        strokeWidth="6"
      />
      {/* Garis-garis Tulisan Lembar Kanan */}
      <path
        d="M520,490 Q555,475 600,490 M520,510 Q555,495 600,510 M520,530 Q555,515 600,530 M520,550 Q555,535 600,550"
        stroke="#7A4E00"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Garis Tengah Lipatan Buku */}
      <line
        x1="500"
        y1="465"
        x2="500"
        y2="580"
        stroke="#1E1E1E"
        strokeWidth="6"
      />
    </g>

    {/* 8. Pita Putih Melengkung Bertuliskan "IKHLAS BERAMAL" */}
    <g id="pita-group">
      {/* Lipatan Ujung Pita Kiri */}
      <polygon
        points="170,760 250,735 240,780 160,805"
        fill="#E5E7EB"
        stroke="#1E1E1E"
        strokeWidth="5"
      />
      <polygon
        points="160,805 240,780 230,830 170,820"
        fill="#111827"
      />
      <polygon
        points="170,820 230,830 200,865 245,860 270,785 240,780"
        fill="#FFFFFF"
        stroke="#1E1E1E"
        strokeWidth="5"
      />

      {/* Lipatan Ujung Pita Kanan */}
      <polygon
        points="830,760 750,735 760,780 840,805"
        fill="#E5E7EB"
        stroke="#1E1E1E"
        strokeWidth="5"
      />
      <polygon
        points="840,805 760,780 770,830 830,820"
        fill="#111827"
      />
      <polygon
        points="830,820 770,830 800,865 755,860 730,785 760,780"
        fill="#FFFFFF"
        stroke="#1E1E1E"
        strokeWidth="5"
      />

      {/* Badan Utama Pita Lengkung */}
      <path
        d="M235,770 Q500,850 765,770 L795,835 Q500,920 205,835 Z"
        fill="#FFFFFF"
        stroke="#1E1E1E"
        strokeWidth="8"
        strokeLinejoin="round"
      />

      {/* Bayangan Bawah Pita */}
      <path
        d="M245,830 Q500,915 755,830 L785,845 Q500,935 215,845 Z"
        fill="#111827"
      />

      {/* Teks Semboyan "IKHLAS BERAMAL" */}
      <path
        id="text-path-pita"
        d="M 230,845 Q 500,925 770,845"
        fill="none"
        stroke="none"
      />
      <text
        fill="#111827"
        fontFamily="'Arial Black', 'Montserrat', Impact, sans-serif"
        fontSize="54"
        fontWeight="900"
        letterSpacing="6"
      >
        <textPath
          href="#text-path-pita"
          startOffset="50%"
          textAnchor="middle"
        >
          IKHLAS BERAMAL
        </textPath>
      </text>
    </g>
  </svg>
);

export const KemdikbudEmblemSvg: React.FC<{ className?: string }> = ({
  className = "w-16 h-16 sm:w-20 sm:h-20",
}) => (
  <svg
    className={className}
    viewBox="0 0 1000 1050"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* 1. Perisai Segi Lima Biru Cyan Resmi (Kemendikdasmen / Tut Wuri Handayani) */}
    {/* Bentuk segi lima khas Kemendikbud: puncak atas, dua sudut samping atas, dan dua sudut bawah dengan garis bawah melengkung */}
    <polygon
      points="500,24 945,348 775,980 225,980 55,348"
      fill="#0099DD"
      stroke="#1E1E1E"
      strokeWidth="10"
      strokeLinejoin="round"
    />

    {/* 2. Teks Melengkung "TUT WURI HANDAYANI" di Bagian Atas Mengikuti Lengkungan Perisai */}
    <path
      id="text-path-tutwuri"
      d="M 140,360 Q 500,-10 860,360"
      fill="none"
      stroke="none"
    />
    <text
      fill="#111827"
      fontFamily="'Arial Black', 'Montserrat', 'Helvetica Black', sans-serif"
      fontSize="68"
      fontWeight="900"
      letterSpacing="6"
    >
      <textPath
        href="#text-path-tutwuri"
        startOffset="50%"
        textAnchor="middle"
      >
        TUT WURI HANDAYANI
      </textPath>
    </text>

    {/* 3. Lima Bulu Ekor/Jambul Menghadap ke Atas (Bulu Belakang) */}
    <g id="ekor-bulu">
      {/* Bulu Paling Luar Kiri */}
      <path
        d="M325,255 C355,230 405,215 440,260 L445,475 C410,450 360,400 325,255 Z"
        fill="#FFFFFF"
        stroke="#1E1E1E"
        strokeWidth="12"
        strokeLinejoin="round"
      />
      {/* Bulu Paling Luar Kanan */}
      <path
        d="M675,255 C645,230 595,215 560,260 L555,475 C590,450 640,400 675,255 Z"
        fill="#FFFFFF"
        stroke="#1E1E1E"
        strokeWidth="12"
        strokeLinejoin="round"
      />
      {/* Bulu Tengah Kiri */}
      <path
        d="M390,205 C420,185 460,180 475,230 L470,480 C440,460 410,400 390,205 Z"
        fill="#FFFFFF"
        stroke="#1E1E1E"
        strokeWidth="12"
        strokeLinejoin="round"
      />
      {/* Bulu Tengah Kanan */}
      <path
        d="M610,205 C580,185 540,180 525,230 L530,480 C560,460 590,400 610,205 Z"
        fill="#FFFFFF"
        stroke="#1E1E1E"
        strokeWidth="12"
        strokeLinejoin="round"
      />
      {/* Bulu Utama Puncak Tengah */}
      <path
        d="M500,165 C480,195 465,225 465,265 L475,485 L525,485 L535,265 C535,225 520,195 500,165 Z"
        fill="#FFFFFF"
        stroke="#1E1E1E"
        strokeWidth="12"
        strokeLinejoin="round"
      />
      {/* Garis-garis Tulang Bulu */}
      <line x1="500" y1="180" x2="500" y2="470" stroke="#1E1E1E" strokeWidth="7" />
      <line x1="440" y1="220" x2="455" y2="465" stroke="#1E1E1E" strokeWidth="7" />
      <line x1="560" y1="220" x2="545" y2="465" stroke="#1E1E1E" strokeWidth="7" />
    </g>

    {/* 4. Sayap Garuda Melebar Kiri dan Kanan */}
    <g id="sayap-garuda">
      {/* Sayap Kiri */}
      <path
        d="M500,725 C450,735 340,735 240,685 C190,660 160,610 155,540 C150,470 185,410 200,365 C202,360 205,375 200,420 C195,465 170,515 195,555 C220,595 270,615 365,585 C420,565 470,520 500,440"
        fill="#FFFFFF"
        stroke="#1E1E1E"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Lekukan Bulu Sayap Kiri Bawah */}
      <path
        d="M175,540 C210,545 260,515 285,465"
        stroke="#1E1E1E"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M190,610 C235,615 295,580 340,520"
        stroke="#1E1E1E"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M230,670 C280,675 355,635 410,560"
        stroke="#1E1E1E"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />

      {/* Sayap Kanan */}
      <path
        d="M500,725 C550,735 660,735 760,685 C810,660 840,610 845,540 C850,470 815,410 800,365 C798,360 795,375 800,420 C805,465 830,515 805,555 C780,595 730,615 635,585 C580,565 530,520 500,440"
        fill="#FFFFFF"
        stroke="#1E1E1E"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Lekukan Bulu Sayap Kanan Bawah */}
      <path
        d="M825,540 C790,545 740,515 715,465"
        stroke="#1E1E1E"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M810,610 C765,615 705,580 660,520"
        stroke="#1E1E1E"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M770,670 C720,675 645,635 590,560"
        stroke="#1E1E1E"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
    </g>

    {/* 5. Kepala/Paruh Burung Menghadap ke Depan */}
    <g id="kepala-burung">
      <path
        d="M500,335 C480,365 470,395 470,435 C470,475 485,505 500,525 C515,505 530,475 530,435 C530,395 520,365 500,335 Z"
        fill="#FFFFFF"
        stroke="#1E1E1E"
        strokeWidth="10"
        strokeLinejoin="round"
      />
    </g>

    {/* 6. Badan Tengah dan Belilong (Nyala Api Berwarna Kuning Emas) */}
    <g id="badan-nyala-api">
      {/* Bingkai Badan Putih */}
      <path
        d="M500,445 C440,490 405,550 405,620 C405,690 445,745 500,755 C555,745 595,690 595,620 C595,550 560,490 500,445 Z"
        fill="#FFFFFF"
        stroke="#1E1E1E"
        strokeWidth="12"
        strokeLinejoin="round"
      />

      {/* Nyala Api Emas (Belilong) */}
      <path
        d="M500,465 C480,500 445,540 445,600 C445,640 470,660 500,660 C530,660 555,640 555,600 C555,540 520,500 500,465 Z"
        fill="#FFC700"
        stroke="#1E1E1E"
        strokeWidth="8"
        strokeLinejoin="round"
      />
      {/* Lidah Api Dalam */}
      <path
        d="M500,490 C490,520 475,550 475,590 C475,615 485,630 500,630 C515,630 525,615 525,590 C525,550 510,520 500,490 Z"
        fill="#FFD833"
        stroke="#1E1E1E"
        strokeWidth="5"
      />

      {/* Lubang Kunci/Bilah Belilong Bawah */}
      <path
        d="M500,665 C490,665 480,675 480,690 C480,700 488,710 493,715 L490,735 L510,735 L507,715 C512,710 520,700 520,690 C520,675 510,665 500,665 Z"
        fill="#FFFFFF"
        stroke="#1E1E1E"
        strokeWidth="7"
      />
    </g>

    {/* 7. Buku Terbuka di Bagian Bawah */}
    <g id="buku-terbuka">
      {/* Lembar Buku Luar */}
      <path
        d="M500,765 L310,775 C305,815 300,845 290,845 L500,805 L710,845 C700,845 695,815 690,775 Z"
        fill="#FFFFFF"
        stroke="#1E1E1E"
        strokeWidth="12"
        strokeLinejoin="round"
      />
      {/* Halaman Buku Atas */}
      <path
        d="M500,745 C430,735 370,755 310,775 C380,795 440,785 500,765 C560,785 620,795 690,775 C630,755 570,735 500,745 Z"
        fill="#FFFFFF"
        stroke="#1E1E1E"
        strokeWidth="10"
        strokeLinejoin="round"
      />
      {/* Garis Lengkung Lipatan Buku */}
      <path
        d="M500,765 L500,805"
        stroke="#1E1E1E"
        strokeWidth="10"
      />
      <path
        d="M310,815 C380,830 440,820 500,800 C560,820 620,830 690,815"
        stroke="#1E1E1E"
        strokeWidth="7"
        fill="none"
      />
    </g>
  </svg>
);

export const SchoolSealBadgeSvg: React.FC<{
  className?: string;
  isKemenag?: boolean;
}> = ({ className = "w-16 h-16 sm:w-20 sm:h-20", isKemenag = false }) => (
  <div
    className={`rounded-full border border-slate-300 print:border-slate-800 flex flex-col items-center justify-center p-1 bg-slate-50 print:bg-transparent text-center ${className}`}
  >
    <span className="text-[9px] font-bold text-slate-700 print:text-black leading-tight">
      KURIKULUM
    </span>
    <span className="text-[10px] font-extrabold text-[#3B82F6] print:text-black">
      2025/2026
    </span>
    <span className="text-[8px] text-slate-500 print:text-black uppercase">
      {isKemenag ? "KBC & DL" : "DEEP LEARNING"}
    </span>
  </div>
);

export const LogoEmblem: React.FC<Props> = ({
  logoUrl,
  presetOption,
  jalur = "Kemenag",
  className = "w-20 h-20 sm:w-24 sm:h-24",
  alt = "Logo",
}) => {
  if (presetOption === "none") {
    return null;
  }

  if (logoUrl) {
    return (
      <div className={`shrink-0 flex items-center justify-center p-1 ${className}`}>
        <img
          src={logoUrl}
          alt={alt}
          className="max-h-full max-w-full object-contain drop-shadow-xs"
        />
      </div>
    );
  }

  if (presetOption === "kemdikbud") {
    return (
      <div className={`shrink-0 flex items-center justify-center ${className}`}>
        <KemdikbudEmblemSvg className="w-full h-full object-contain" />
      </div>
    );
  }

  if (presetOption === "kemenag") {
    return (
      <div className={`shrink-0 flex items-center justify-center ${className}`}>
        <KemenagEmblemSvg className="w-full h-full object-contain" />
      </div>
    );
  }

  // Default fallback based on jalur
  return (
    <div className={`shrink-0 flex items-center justify-center ${className}`}>
      {jalur === "Kemenag" ? (
        <KemenagEmblemSvg className="w-full h-full object-contain" />
      ) : (
        <KemdikbudEmblemSvg className="w-full h-full object-contain" />
      )}
    </div>
  );
};
