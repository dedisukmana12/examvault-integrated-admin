// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import React, { useState, useEffect } from "react";
import {
  TeacherInput,
  CompleteDocumentPackage,
  SharedDocumentItem,
  SharedComment,
  PathwayType,
  FaseType,
} from "../types";
import {
  Share2,
  Copy,
  Star,
  MessageSquare,
  Search,
  Filter,
  CheckCircle,
  PlusCircle,
  Sparkles,
  BookOpen,
  Layers,
  Heart,
  Send,
  UserCheck,
  Building,
  Check,
  Calendar,
  Tag,
  ArrowRight,
  Download,
  Info,
} from "lucide-react";

interface CollaborationHubProps {
  currentInput: TeacherInput;
  currentPkg: CompleteDocumentPackage | null;
  onAdaptDocument: (adaptedInput: TeacherInput) => void;
}

const STORAGE_SHARED_DOCS_KEY = "kurikulum_shared_community_docs_v1";

// Rich Starter Community Shared Documents
const INITIAL_COMMUNITY_DOCS: SharedDocumentItem[] = [
  {
    id: "doc-comm-01",
    title: "English for Change: 5 Units Lengkap HOTS & GBA (SMA Kelas XI)",
    description:
      "Perangkat Modul Ajar dan Bank Soal 100% tuntas buku 'English for Change' (Unit 1 s.d. Unit 5). Mengintegrasikan Genre-Based Approach, teks multimodal media sosial, klausa ajektiva kelestarian alam, serta teks prosedur literasi finansial bijak.",
    authorName: "Dewi Anggraini, S.Pd., M.Ed.",
    authorSchool: "SMA Negeri 1 Surakarta",
    authorRole: "Guru Penggerak & Ketua MGMP Bahasa Inggris",
    authorNip: "198807152014022004",
    jalur: "Dinas",
    fase: "Fase F",
    kelas: "Kelas XI",
    mataPelajaran: "Bahasa Inggris",
    docType: "Paket Lengkap 9 Dokumen",
    tags: ["EnglishForChange", "FaseF", "KelasXI", "DeepLearning", "HOTS", "Multimodal"],
    ratings: [
      { id: "r1", userId: "u1", userName: "Ahmad Rizky, S.Pd.", rating: 5, createdAt: "12 Okt 2025" },
      { id: "r2", userId: "u2", userName: "Nurul Hidayati, M.Pd.", rating: 5, createdAt: "14 Okt 2025" },
      { id: "r3", userId: "u3", userName: "Hendro Wibowo, S.Pd.", rating: 4, createdAt: "18 Okt 2025" },
    ],
    avgRating: 4.8,
    totalRatings: 18,
    comments: [
      {
        id: "c1",
        authorName: "Ahmad Rizky, S.Pd.",
        authorSchool: "SMA N 3 Semarang",
        content:
          "Sangat terbantu! Pemetaan antara 12 TP atomik dengan 5 unit buku English for Change sangat sinkron. Siswa sangat antusias saat praktik analisis takarir media sosial pada Unit 1.",
        createdAt: "12 Okt 2025",
      },
      {
        id: "c2",
        authorName: "Nurul Hidayati, M.Pd.",
        authorSchool: "MAN 2 Yogyakarta",
        content:
          "Rubrik interval KKTP-nya sangat aplikatif, tanpa KKM tunggal mati sesuai pedoman PPA 2025.",
        createdAt: "15 Okt 2025",
      },
    ],
    copyCount: 42,
    createdAt: "10 Oktober 2025",
    payload: {
      input: {
        jalur: "Dinas",
        namaSatuan: "SMA Negeri 1 Surakarta",
        namaGuru: "Dewi Anggraini, S.Pd., M.Ed.",
        nipGuru: "198807152014022004",
        namaKepala: "Drs. H. Sri Wibowo, M.Pd.",
        nipKepala: "196602111991031005",
        namaWakil: "Edi Wahyu, S.Pd.",
        nipWakil: "198503122010011015",
        fase: "Fase F",
        kelas: "Kelas XI",
        mataPelajaran: "Bahasa Inggris",
        tahunAjaran: "2025/2026",
        kotaSatuan: "Surakarta",
        tanggalPengesahan: "14 Juli 2025",
        durasiMenitJP: 45,
      },
    },
  },
  {
    id: "doc-comm-02",
    title: "Life Today: 4 Units & Digital Currency Debate (SMA/MA Kelas XII)",
    description:
      "Perangkat lengkap Bahasa Inggris Fase F Kelas XII mencakup The Story of a Friendly Future, E-Money & Cashless Society, Netiquette, dan Carbon Footprints. Dilengkapi audio podcast scriptwriting dan academic symposium.",
    authorName: "Drs. Bambang Sudarsono, M.Hum.",
    authorSchool: "SMA Negeri 8 Jakarta",
    authorRole: "Fasilitator Nasional Kurikulum",
    jalur: "Dinas",
    fase: "Fase F",
    kelas: "Kelas XII",
    mataPelajaran: "Bahasa Inggris",
    docType: "Paket Lengkap 9 Dokumen",
    tags: ["LifeToday", "KelasXII", "CashlessSociety", "CarbonFootprints"],
    ratings: [
      { id: "r4", userId: "u4", userName: "Farida Utami, S.Pd.", rating: 5, createdAt: "8 Okt 2025" },
      { id: "r5", userId: "u5", userName: "Wahyu Pratama, M.Pd.", rating: 5, createdAt: "9 Okt 2025" },
    ],
    avgRating: 4.9,
    totalRatings: 24,
    comments: [
      {
        id: "c3",
        authorName: "Farida Utami, S.Pd.",
        authorSchool: "SMA N 1 Depok",
        content:
          "Soal PGK pada unit Carbon Footprint sangat menantang dan memicu nalar kritis siswa dalam simposium iklim.",
        createdAt: "9 Okt 2025",
      },
    ],
    copyCount: 56,
    createdAt: "5 Oktober 2025",
    payload: {
      input: {
        jalur: "Dinas",
        namaSatuan: "SMA Negeri 8 Jakarta",
        namaGuru: "Drs. Bambang Sudarsono, M.Hum.",
        nipGuru: "197203151998021003",
        namaKepala: "Dra. Hj. Ratna Juwita, M.Pd.",
        nipKepala: "196904121994032002",
        fase: "Fase F",
        kelas: "Kelas XII",
        mataPelajaran: "Bahasa Inggris",
        tahunAjaran: "2025/2026",
        kotaSatuan: "Jakarta Selatan",
        tanggalPengesahan: "14 Juli 2025",
        durasiMenitJP: 45,
      },
    },
  },
  {
    id: "doc-comm-03",
    title: "Kurikulum Berbasis Cinta (KBC) FIDS Fiqih Muamalah & Zakat Modern",
    description:
      "Modul Ajar dan LKPD Madrasah Aliyah berbasis KMA No. 1503/2025 & Panduan Pendis No. 6077/2025. Menggunakan sintaks FIDS (Feel, Imagine, Do, Share), Nilai Panca Cinta (Cinta Allah, Cinta Sesama, Cinta Lingkungan), dan 10 Nilai PPRA.",
    authorName: "H. Miftahudin, M.Pd.I.",
    authorSchool: "MA Bojongjati",
    authorRole: "Kepala Madrasah & Pengawas Kemenag",
    jalur: "Kemenag",
    fase: "Fase F",
    kelas: "Kelas XII",
    mataPelajaran: "Pendidikan Agama Islam",
    docType: "Modul Ajar",
    tags: ["KBC", "Kemenag", "FIDS", "PPRA", "PancaCinta", "MadrasahMaju"],
    ratings: [
      { id: "r6", userId: "u6", userName: "Zainal Abidin, S.Ag.", rating: 5, createdAt: "15 Okt 2025" },
    ],
    avgRating: 5.0,
    totalRatings: 12,
    comments: [
      {
        id: "c4",
        authorName: "Zainal Abidin, S.Ag.",
        authorSchool: "MAN 1 Cilacap",
        content:
          "Integrasi Teologi Cinta (Jamaliyah) terasa sangat sejuk dan relevan dengan karakter generasi Z madrasah.",
        createdAt: "16 Okt 2025",
      },
    ],
    copyCount: 29,
    createdAt: "12 Oktober 2025",
    payload: {
      input: {
        jalur: "Kemenag",
        namaSatuan: "MA Bojongjati",
        namaGuru: "H. Miftahudin, M.Pd.I.",
        nipGuru: "196805121994031004",
        namaKepala: "Drs. H. Miftahudin, M.Pd.I.",
        nipKepala: "196805121994031004",
        fase: "Fase F",
        kelas: "Kelas XII",
        mataPelajaran: "Pendidikan Agama Islam",
        tahunAjaran: "2025/2026",
        kotaSatuan: "Cilacap",
        tanggalPengesahan: "14 Juli 2025",
        durasiMenitJP: 45,
      },
    },
  },
];

export const CollaborationHub: React.FC<CollaborationHubProps> = ({
  currentInput,
  currentPkg,
  onAdaptDocument,
}) => {
  // Load community documents from localStorage or initialize with starters
  const [documents, setDocuments] = useState<SharedDocumentItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_SHARED_DOCS_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Error reading shared docs from local storage", e);
    }
    return INITIAL_COMMUNITY_DOCS;
  });

  // Save to localStorage on changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_SHARED_DOCS_KEY, JSON.stringify(documents));
    } catch (e) {
      console.error("Error saving shared docs to local storage", e);
    }
  }, [documents]);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [filterJalur, setFilterJalur] = useState<"SEMUA" | PathwayType>("SEMUA");
  const [filterFase, setFilterFase] = useState<"SEMUA" | FaseType>("SEMUA");
  const [filterDocType, setFilterDocType] = useState<string>("SEMUA");
  const [sortBy, setSortBy] = useState<"terbaru" | "rating" | "copy">("terbaru");

  // Share Modal State
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [shareTitle, setShareTitle] = useState(
    currentPkg
      ? `${currentInput.mataPelajaran} ${currentInput.kelas} (${currentInput.jalur}) - Standar 2025/2026`
      : ""
  );
  const [shareDescription, setShareDescription] = useState(
    `Perangkat pembelajaran ${currentInput.mataPelajaran} ${currentInput.kelas} (${currentInput.fase}) dengan pendekatan ${
      currentInput.jalur === "Kemenag" ? "Kurikulum Berbasis Cinta (KBC)" : "Deep Learning (Mindful, Meaningful, Joyful)"
    }. Lengkap dengan modul ajar, LKPD eksplorasi, KKTP interval kualitatif, dan bank soal HOTS.`
  );
  const [shareDocType, setShareDocType] = useState<
    "Paket Lengkap 9 Dokumen" | "Modul Ajar" | "LKPD" | "Bank Soal & Asesmen" | "ATP & Prota"
  >("Paket Lengkap 9 Dokumen");
  const [shareTags, setShareTags] = useState<string>(
    `${currentInput.mataPelajaran.replace(/\s+/g, "")}, ${currentInput.fase.replace(/\s+/g, "")}, ${currentInput.jalur}`
  );

  // Selected Detail Modal (View Comments & Add Rating)
  const [selectedDocForDetail, setSelectedDocForDetail] = useState<SharedDocumentItem | null>(null);
  const [newCommentText, setNewCommentText] = useState("");
  const [commenterName, setCommenterName] = useState(currentInput.namaGuru || "Guru Rekan");
  const [commenterSchool, setCommenterSchool] = useState(currentInput.namaSatuan || "Satuan Pendidikan");
  const [userRatingScore, setUserRatingScore] = useState<number>(5);

  // Toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Handle Publish new document
  const handlePublishDocument = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shareTitle.trim()) return;

    const tagsArray = shareTags
      .split(",")
      .map((t) => t.trim().replace(/^#/, ""))
      .filter(Boolean);

    const newDoc: SharedDocumentItem = {
      id: `doc-share-${Date.now()}`,
      title: shareTitle.trim(),
      description: shareDescription.trim(),
      authorName: currentInput.namaGuru || "Guru Pengampu",
      authorSchool: currentInput.namaSatuan || "Sekolah / Madrasah",
      authorNip: currentInput.nipGuru,
      authorRole: currentInput.jalur === "Kemenag" ? "Guru Madrasah Inovatif" : "Guru Penggerak Nasional",
      jalur: currentInput.jalur,
      fase: currentInput.fase,
      kelas: currentInput.kelas,
      mataPelajaran: currentInput.mataPelajaran,
      docType: shareDocType,
      tags: tagsArray.length > 0 ? tagsArray : [currentInput.mataPelajaran, currentInput.fase],
      ratings: [{ id: `r-${Date.now()}`, userId: "self", userName: currentInput.namaGuru, rating: 5, createdAt: "Baru saja" }],
      avgRating: 5.0,
      totalRatings: 1,
      comments: [
        {
          id: `c-${Date.now()}`,
          authorName: currentInput.namaGuru || "Pengunggah",
          authorSchool: currentInput.namaSatuan || "",
          content: "Silakan digunakan dan diadaptasi oleh rekan guru se-Indonesia! Semoga bermanfaat untuk kemajuan pendidikan anak bangsa.",
          createdAt: "Baru saja",
        },
      ],
      copyCount: 0,
      createdAt: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
      payload: {
        input: currentInput,
      },
    };

    setDocuments([newDoc, ...documents]);
    setIsShareModalOpen(false);
    showToast(`Dokumen "${shareTitle}" berhasil dibagikan ke Ruang Kolaborasi Guru!`);
  };

  // Handle Adapt / Copy Document to Workspace
  const handleAdapt = (doc: SharedDocumentItem) => {
    // Increment copy count in documents
    setDocuments((prev) =>
      prev.map((d) => (d.id === doc.id ? { ...d, copyCount: d.copyCount + 1 } : d))
    );

    // Call callback to copy payload to active workspace
    const adaptedInput: TeacherInput = {
      ...doc.payload.input,
      // Retain or ask teacher identity if desired, or clone full high quality data
      namaSatuan: currentInput.namaSatuan || doc.payload.input.namaSatuan,
      namaGuru: currentInput.namaGuru || doc.payload.input.namaGuru,
      nipGuru: currentInput.nipGuru || doc.payload.input.nipGuru,
      namaKepala: currentInput.namaKepala || doc.payload.input.namaKepala,
      nipKepala: currentInput.nipKepala || doc.payload.input.nipKepala,
      tahunAjaran: currentInput.tahunAjaran || doc.payload.input.tahunAjaran,
    };

    onAdaptDocument(adaptedInput);
    showToast(
      `Dokumen "${doc.title}" berhasil diadaptasi! Lembar kerja Anda telah terisi dengan konten ini.`
    );
  };

  // Handle Add Rating
  const handleAddRating = (docId: string, rating: number) => {
    setDocuments((prev) =>
      prev.map((doc) => {
        if (doc.id === docId) {
          const newRatingItem = {
            id: `r-${Date.now()}`,
            userId: `user-${Date.now()}`,
            userName: commenterName || "Guru Rekan",
            rating,
            createdAt: "Hari ini",
          };
          const allRatings = [...doc.ratings, newRatingItem];
          const sum = allRatings.reduce((acc, r) => acc + r.rating, 0);
          const avg = Number((sum / allRatings.length).toFixed(1));
          return {
            ...doc,
            ratings: allRatings,
            avgRating: avg,
            totalRatings: allRatings.length,
          };
        }
        return doc;
      })
    );

    if (selectedDocForDetail && selectedDocForDetail.id === docId) {
      setSelectedDocForDetail((prev) => {
        if (!prev) return null;
        const allRatings = [
          ...prev.ratings,
          {
            id: `r-${Date.now()}`,
            userId: `user-${Date.now()}`,
            userName: commenterName || "Guru Rekan",
            rating,
            createdAt: "Hari ini",
          },
        ];
        const sum = allRatings.reduce((acc, r) => acc + r.rating, 0);
        return {
          ...prev,
          ratings: allRatings,
          avgRating: Number((sum / allRatings.length).toFixed(1)),
          totalRatings: allRatings.length,
        };
      });
    }

    showToast(`Terima kasih! Anda memberikan rating ${rating} bintang.`);
  };

  // Handle Add Comment
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDocForDetail || !newCommentText.trim()) return;

    const newComment: SharedComment = {
      id: `comment-${Date.now()}`,
      authorName: commenterName.trim() || "Guru Rekan",
      authorSchool: commenterSchool.trim() || "Satuan Pendidikan",
      content: newCommentText.trim(),
      createdAt: "Baru saja",
    };

    const targetId = selectedDocForDetail.id;

    setDocuments((prev) =>
      prev.map((doc) => {
        if (doc.id === targetId) {
          return {
            ...doc,
            comments: [...doc.comments, newComment],
          };
        }
        return doc;
      })
    );

    setSelectedDocForDetail((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        comments: [...prev.comments, newComment],
      };
    });

    setNewCommentText("");
    showToast("Komentar & umpan balik pedagogik berhasil ditambahkan!");
  };

  // Filtered documents list
  const filteredDocs = documents
    .filter((doc) => {
      // Search
      const matchSearch =
        searchQuery === "" ||
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.mataPelajaran.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.authorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      // Jalur filter
      const matchJalur = filterJalur === "SEMUA" || doc.jalur === filterJalur;

      // Fase filter
      const matchFase = filterFase === "SEMUA" || doc.fase === filterFase;

      // DocType filter
      const matchDocType = filterDocType === "SEMUA" || doc.docType === filterDocType;

      return matchSearch && matchJalur && matchFase && matchDocType;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.avgRating - a.avgRating;
      if (sortBy === "copy") return b.copyCount - a.copyCount;
      return 0; // Default order
    });

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4">
          <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
          <p className="text-xs font-semibold text-slate-100">{toastMessage}</p>
        </div>
      )}

      {/* Community Banner & Hero Header */}
      <div className="bg-linear-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white p-6 sm:p-8 rounded-2xl shadow-md border border-slate-800 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="bg-blue-500/20 text-blue-400 border border-blue-400/30 text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Ruang Kolaborasi & Komunitas Guru Berbagi 2025/2026
              </span>
              <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Saling Adaptasi & Salin
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Pusat Berbagi Administrasi Kurikulum, Modul Ajar & Asesmen Guru
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Jelajahi dan adopsi modul ajar bermutu tinggi, bank soal HOTS, serta rancangan pembelajaran dari sesama rekan guru di seluruh Nusantara. Anda dapat menyalin dengan 1-klik, memberikan rating, dan berdiskusi pada catatan praktik baik.
            </p>
          </div>

          {/* Action Button: Share My Active Document */}
          <div className="shrink-0">
            <button
              onClick={() => {
                setShareTitle(
                  currentPkg
                    ? `${currentInput.mataPelajaran} ${currentInput.kelas} (${currentInput.jalur}) - Standar Resmi 2025/2026`
                    : "Dokumen Pembelajaran Saya"
                );
                setIsShareModalOpen(true);
              }}
              className="w-full sm:w-auto px-5 py-3 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-blue-500/20 transition-all cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>Bagikan Dokumen Saya ke Komunitas</span>
            </button>
          </div>
        </div>

        {/* Community Key Stats Bar */}
        <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/50">
            <span className="text-[11px] text-slate-400 block">Total Dokumen Berbagi:</span>
            <span className="text-base font-black text-white">{documents.length} Dokumen</span>
          </div>
          <div className="bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/50">
            <span className="text-[11px] text-slate-400 block">Telah Disalin & Diadaptasi:</span>
            <span className="text-base font-black text-emerald-400">
              {documents.reduce((acc, d) => acc + d.copyCount, 0) + 127} Kali
            </span>
          </div>
          <div className="bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/50">
            <span className="text-[11px] text-slate-400 block">Rata-rata Rating Komunitas:</span>
            <span className="text-base font-black text-amber-400 flex items-center gap-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400 inline" />
              4.9 / 5.0
            </span>
          </div>
          <div className="bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/50">
            <span className="text-[11px] text-slate-400 block">Regulasi Terkunci:</span>
            <span className="text-base font-black text-blue-400">100% Resmi 2025/2026</span>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-3">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari mata pelajaran, topik materi (misal: English for Change, Aljabar), nama guru, atau tagar..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {/* Jalur Filter */}
            <select
              value={filterJalur}
              onChange={(e) => setFilterJalur(e.target.value as any)}
              className="bg-slate-50 border border-slate-200 text-slate-700 py-2 px-2.5 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="SEMUA">Semua Jalur</option>
              <option value="Dinas">Dinas (Deep Learning)</option>
              <option value="Kemenag">Kemenag (KBC & PPRA)</option>
            </select>

            {/* Fase Filter */}
            <select
              value={filterFase}
              onChange={(e) => setFilterFase(e.target.value as any)}
              className="bg-slate-50 border border-slate-200 text-slate-700 py-2 px-2.5 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="SEMUA">Semua Fase</option>
              <option value="Fase A">Fase A (SD Kelas 1-2)</option>
              <option value="Fase B">Fase B (SD Kelas 3-4)</option>
              <option value="Fase C">Fase C (SD Kelas 5-6)</option>
              <option value="Fase D">Fase D (SMP/MTs)</option>
              <option value="Fase E">Fase E (SMA/MA Kelas 10)</option>
              <option value="Fase F">Fase F (SMA/MA Kelas 11-12)</option>
            </select>

            {/* Doc Type Filter */}
            <select
              value={filterDocType}
              onChange={(e) => setFilterDocType(e.target.value)}
              className="bg-slate-50 border border-slate-200 text-slate-700 py-2 px-2.5 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="SEMUA">Semua Jenis Dokumen</option>
              <option value="Paket Lengkap 9 Dokumen">Paket Lengkap 9 Dokumen</option>
              <option value="Modul Ajar">Modul Ajar</option>
              <option value="LKPD">LKPD Eksplorasi</option>
              <option value="Bank Soal & Asesmen">Bank Soal & Asesmen</option>
            </select>

            {/* Sort Filter */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-50 border border-slate-200 text-slate-700 py-2 px-2.5 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="terbaru">Terbaru</option>
              <option value="rating">Rating Tertinggi</option>
              <option value="copy">Paling Banyak Disalin</option>
            </select>
          </div>
        </div>
      </div>

      {/* Community Document Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredDocs.map((doc) => {
          const isKemenag = doc.jalur === "Kemenag";
          return (
            <div
              key={doc.id}
              className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Header */}
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                      isKemenag
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                        : "bg-blue-100 text-blue-800 border border-blue-200"
                    }`}
                  >
                    Jalur {doc.jalur}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {doc.fase} • {doc.kelas}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                    {doc.title}
                  </h3>
                  <p className="text-[11px] text-blue-600 font-semibold mt-0.5">
                    {doc.mataPelajaran} &bull; {doc.docType}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {doc.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-1 pt-1">
                  {doc.tags.slice(0, 4).map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-slate-50 text-slate-600 px-2 py-0.5 rounded-md border border-slate-200 flex items-center gap-0.5 font-medium"
                    >
                      <Tag className="w-2.5 h-2.5 text-slate-400" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author & Metrics */}
              <div className="px-5 py-3 bg-slate-50/70 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-[11px] shrink-0">
                      {doc.authorName.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-slate-900 text-[11px] truncate">
                        {doc.authorName}
                      </p>
                      <p className="text-[10px] text-slate-500 truncate">{doc.authorSchool}</p>
                    </div>
                  </div>

                  {/* Rating Display */}
                  <div className="flex items-center gap-1 shrink-0 text-right">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-xs text-slate-800">{doc.avgRating}</span>
                    <span className="text-[10px] text-slate-400">({doc.totalRatings})</span>
                  </div>
                </div>

                {/* Action Buttons: Adapt & View Detail */}
                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => handleAdapt(doc)}
                    className="flex-1 py-2 px-3 bg-[#0F172A] hover:bg-slate-800 text-white rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs"
                    title="Salin dan gunakan dokumen ini pada lembar kerja Anda"
                  >
                    <Copy className="w-3.5 h-3.5 text-blue-400" />
                    <span>Salin & Adaptasi</span>
                  </button>

                  <button
                    onClick={() => setSelectedDocForDetail(doc)}
                    className="py-2 px-2.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer"
                    title="Beri rating dan baca diskusi/komentar guru lain"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
                    <span>{doc.comments.length}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredDocs.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-slate-200 p-8 space-y-3">
          <Info className="w-8 h-8 text-slate-400 mx-auto" />
          <h3 className="font-bold text-slate-800 text-base">Tidak ditemukan dokumen yang cocok</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Coba ubah kata kunci pencarian atau sesuaikan opsi filter jalur, fase, dan jenis dokumen.
          </p>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 1: SHARE DOKUMEN SAYA KE KOMUNITAS */}
      {/* ========================================================================= */}
      {isShareModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-5 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Share2 className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-base text-slate-900">
                  Bagikan Dokumen ke Ruang Kolaborasi Guru
                </h3>
              </div>
              <button
                onClick={() => setIsShareModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 font-bold text-lg cursor-pointer"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handlePublishDocument} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-700">Judul Dokumen Publikasi:</label>
                <input
                  type="text"
                  required
                  value={shareTitle}
                  onChange={(e) => setShareTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Contoh: Modul Ajar English for Change Unit 1-5 HOTS Lengkap"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Jenis Dokumen:</label>
                <select
                  value={shareDocType}
                  onChange={(e) => setShareDocType(e.target.value as any)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="Paket Lengkap 9 Dokumen">Paket Lengkap 9 Dokumen (Dokumen 1 - 9)</option>
                  <option value="Modul Ajar">Modul Ajar Terpadu (Dokumen 5)</option>
                  <option value="LKPD">Lembar Kerja Peserta Didik (LKPD - Dokumen 6)</option>
                  <option value="Bank Soal & Asesmen">Bank Soal & Asesmen (Dokumen 8 & 9)</option>
                  <option value="ATP & Prota">Alur Tujuan Pembelajaran & Prota (Dokumen 2 & 3)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Deskripsi / Catatan Praktik Baik:</label>
                <textarea
                  rows={3}
                  required
                  value={shareDescription}
                  onChange={(e) => setShareDescription(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 leading-relaxed focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Jelaskan keunggulan dokumen, stimulus nyata yang digunakan, dan tips implementasi di kelas..."
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Tagar / Topik Kunci (Pisahkan dengan koma):</label>
                <input
                  type="text"
                  value={shareTags}
                  onChange={(e) => setShareTags(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Contoh: EnglishForChange, KelasXI, DeepLearning, HOTS"
                />
              </div>

              {/* Publisher Preview */}
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                <span className="font-bold text-slate-700 block text-[11px]">Identitas Pengunggah:</span>
                <p className="text-slate-800 font-medium">
                  {currentInput.namaGuru} &bull; {currentInput.namaSatuan}
                </p>
                <p className="text-slate-500 text-[10px]">
                  Jalur {currentInput.jalur} &bull; {currentInput.fase} ({currentInput.kelas})
                </p>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsShareModalOpen(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-semibold cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Publikasikan Sekarang</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: DETAIL DOKUMEN, RATING & KOMENTAR PRAKTIK BAIK */}
      {/* ========================================================================= */}
      {selectedDocForDetail && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 space-y-5 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                  {selectedDocForDetail.docType}
                </span>
                <h3 className="font-bold text-base text-slate-900 mt-1">
                  {selectedDocForDetail.title}
                </h3>
                <p className="text-xs text-slate-500">
                  Oleh {selectedDocForDetail.authorName} &bull; {selectedDocForDetail.authorSchool}
                </p>
              </div>
              <button
                onClick={() => setSelectedDocForDetail(null)}
                className="text-slate-400 hover:text-slate-600 font-bold text-xl cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Content Summary */}
            <div className="space-y-2 text-xs">
              <p className="text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                {selectedDocForDetail.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-blue-50/50 rounded-lg border border-blue-100">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-800">Rerata Rating:</span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= Math.round(selectedDocForDetail.avgRating)
                            ? "fill-amber-400 text-amber-400"
                            : "text-slate-300"
                        }`}
                      />
                    ))}
                    <span className="font-bold text-slate-900 ml-1">
                      {selectedDocForDetail.avgRating} / 5.0
                    </span>
                    <span className="text-slate-500">
                      ({selectedDocForDetail.totalRatings} ulasan guru)
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    handleAdapt(selectedDocForDetail);
                    setSelectedDocForDetail(null);
                  }}
                  className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin ke Lembar Kerja Saya</span>
                </button>
              </div>
            </div>

            {/* Interactive Rating Section */}
            <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200 text-xs space-y-2">
              <p className="font-bold text-amber-950 flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span>Beri Peringkat (Rating) untuk Dokumen Ini:</span>
              </p>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => handleAddRating(selectedDocForDetail.id, s)}
                    className="p-1 hover:scale-125 transition-transform cursor-pointer"
                    title={`Beri ${s} Bintang`}
                  >
                    <Star
                      className={`w-6 h-6 ${
                        s <= userRatingScore
                          ? "fill-amber-400 text-amber-400"
                          : "text-slate-300 hover:text-amber-300"
                      }`}
                    />
                  </button>
                ))}
                <span className="text-[11px] text-amber-900 ml-2 font-semibold">
                  Klik bintang untuk menilai kelengkapan dan kepatuhan regulasi.
                </span>
              </div>
            </div>

            {/* Comments List */}
            <div className="space-y-3 pt-2 text-xs">
              <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-blue-600" />
                <span>Diskusi & Catatan Praktik Baik ({selectedDocForDetail.comments.length}):</span>
              </h4>

              <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                {selectedDocForDetail.comments.map((c) => (
                  <div
                    key={c.id}
                    className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1"
                  >
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-slate-900">{c.authorName}</span>
                      <span className="text-slate-400">{c.createdAt}</span>
                    </div>
                    {c.authorSchool && (
                      <p className="text-[10px] text-slate-500 font-medium">{c.authorSchool}</p>
                    )}
                    <p className="text-slate-700 leading-relaxed mt-1">{c.content}</p>
                  </div>
                ))}
              </div>

              {/* Add Comment Form */}
              <form onSubmit={handleAddComment} className="pt-2 border-t border-slate-100 space-y-2">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <input
                    type="text"
                    required
                    value={commenterName}
                    onChange={(e) => setCommenterName(e.target.value)}
                    placeholder="Nama Anda"
                    className="px-2.5 py-1.5 border border-slate-300 rounded-md text-slate-800"
                  />
                  <input
                    type="text"
                    value={commenterSchool}
                    onChange={(e) => setCommenterSchool(e.target.value)}
                    placeholder="Asal Satuan Pendidikan"
                    className="px-2.5 py-1.5 border border-slate-300 rounded-md text-slate-800"
                  />
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    required
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                    placeholder="Tuliskan pengalaman penerapan, pertanyaan, atau masukan membangun..."
                    className="flex-1 px-3 py-2 border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#0F172A] hover:bg-slate-800 text-white rounded-lg font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
