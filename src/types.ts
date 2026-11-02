// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
export type PathwayType = "Dinas" | "Kemenag";

export type FaseType = "Fase A" | "Fase B" | "Fase C" | "Fase D" | "Fase E" | "Fase F";

export interface TeacherInput {
  jalur: PathwayType;
  namaSatuan: string;
  namaGuru: string;
  nipGuru: string;
  namaKepala: string;
  nipKepala: string;
  namaWakil?: string; // Wakil Kepala Madrasah/Sekolah Bidang Kurikulum
  nipWakil?: string;
  fase: FaseType;
  kelas: string;
  mataPelajaran: string;
  tahunAjaran: string;
  kotaSatuan?: string;
  tanggalPengesahan?: string;
  durasiMenitJP?: number; // SD/MI 35, SMP/MTs 40, SMA/SMK/MA 45
  mingguEfektif?: number; // 36 or 32 for final grade
  // Kop Surat & School Identity fields
  instansiInduk?: string; // e.g. "KEMENTERIAN AGAMA REPUBLIK INDONESIA" or "PEMERINTAH PROVINSI ..."
  kantorWilayah?: string; // e.g. "KANTOR KEMENTERIAN AGAMA KABUPATEN ..." or "DINAS PENDIDIKAN DAN KEBUDAYAAN"
  alamatSatuan?: string; // e.g. "Jl. Raya Bojongjati No. 45, Pandeglang"
  kontakSatuan?: string; // e.g. "Telp: (0253) 555-1234 | Email: ma.bojongjati@kemenag.go.id | Website: www.mabojongjati.sch.id"
  logoUrl?: string; // Logo Kiri (data URI / URL)
  logoOption?: "kemenag" | "kemdikbud" | "custom" | "none";
  logoKananUrl?: string; // Logo Kanan (data URI / URL)
  logoKananOption?: "kemenag" | "kemdikbud" | "custom" | "none";
  showBabCover?: boolean; // Tampilkan cover depan untuk setiap bab
}

export interface Doc1Item {
  elemen: string;
  capaianPembelajaran: string;
  kompetensiKKO: string;
  lingkupMateri: string;
  rencanaRumusanTP: string;
}

export interface Doc2Item {
  no: number;
  kodeTP: string;
  tujuanPembelajaran: string;
  alokasiJP: number;
  metodePengurutan: string;
  targetKarakter: string;
}

export interface Doc3Item {
  semester: "GANJIL" | "GENAP";
  no: number;
  tujuanPembelajaran: string;
  alokasiJP: number;
  keterangan: string;
  isSummaryRow?: boolean;
}

export interface Doc4WeekDistribution {
  bulan: string; // e.g. "Juli", "Agustus", etc.
  minggu: [number | string, number | string, number | string, number | string, number | string];
}

export interface Doc4Item {
  no: number;
  kodeTP: string;
  tujuanPembelajaran: string;
  alokasiJP: number;
  distribusiBulan: Doc4WeekDistribution[];
  keterangan: string;
}

export interface Doc5ModulAjar {
  identitas: {
    namaPenyusun: string;
    satuanPendidikan: string;
    faseKelas: string;
    semester?: "GANJIL" | "GENAP";
    mataPelajaran: string;
    alokasiWaktu: string;
    tahunAjaran: string;
  };
  ruangLingkup: {
    elemenCP: string;
    tpTerpilih: string;
    kodeTP: string;
    targetKarakter: string;
  };
  desainPengalaman: {
    praktikPedagogis: {
      keterangan: string;
      sumberAlat: string;
    };
    kemitraan: {
      keterangan: string;
      sumberAlat: string;
    };
    lingkungan: {
      keterangan: string;
      sumberAlat: string;
    };
    digital: {
      keterangan: string;
      sumberAlat: string;
    };
  };
  siklusLangkah: {
    tahap1: {
      nama: string; // Memahami (Mindful) or Feel (Merasakan)
      durasi: string;
      kegiatan: string[];
    };
    tahap2: {
      nama: string; // Mengaplikasikan (Meaningful) or Imagine (Membayangkan)
      durasi: string;
      diferensiasiKonten: string;
      diferensiasiProses: string;
      diferensiasiProduk: string;
      kegiatan: string[];
    };
    tahap3: {
      nama: string; // Merefleksikan (Joyful) or Do (Melakukan)
      durasi: string;
      kegiatan: string[];
    };
    tahap4?: {
      nama: string; // Share (Membagikan) for Kemenag KBC
      durasi: string;
      kegiatan: string[];
    };
  };
}

export interface Doc6LKPD {
  mataPelajaran: string;
  kelas: string;
  tujuanPembelajaran: string;
  kodeTP: string;
  stimulusKontekstual: string;
  tabelPengamatan: {
    no: number;
    variabel: string;
    panduanFisik: string;
  }[];
  pertanyaanHOTS: {
    no: number;
    level: string; // C4/C5/C6
    pertanyaan: string;
  }[];
}

export interface Doc7KKTP {
  tujuanPembelajaran: string;
  kodeTP: string;
  indikatorRubrik: {
    kriteria: string;
    baruBerkembang: string; // 0-40%
    layakCukup: string;     // 41-65%
    cakapMemenuhi: string;  // 66-85% (Standar SKL)
    mahir: string;          // 86-100% (Melampaui SKL)
  }[];
  tindakLanjut: {
    range: string;
    predikat: string;
    tindakan: string;
  }[];
}

export interface Doc8KisiKisiItem {
  no: number;
  elemenCP: string;
  tujuanPembelajaran: string;
  kodeTP: string;
  materiPokok: string;
  indikatorSoal: string;
  levelKognitif: string; // L1 / L2 / L3 (C1-C6)
  bentukSoal: "Pilihan Ganda Kompleks" | "Uraian Kasus HOTS" | "Pilihan Ganda" | "Uraian";
  noSoal: number;
  bobotSkor: number;
}

export interface Doc9BankSoal {
  stimulusUtama: string;
  soalPGK: {
    noSoal: number;
    pertanyaan: string;
    pilihan: {
      kode: string;
      teks: string;
      isCorrect: boolean;
    }[];
    kunciJawaban: string;
    pembahasan: string;
    pedomanPenskoran: {
      kriteriaMaksimal: string;
      skorMaksimal: number;
      kriteriaParsial: string;
      skorParsial: number;
      kriteriaNol: string;
      skorNol: number;
    };
  }[];
  soalUraian: {
    noSoal: number;
    level: string; // C4 / C5 / C6
    pertanyaan: string;
    kunciJawaban: string;
    pembahasan: string;
    rubrikPenskoran: {
      kriteria: string;
      skor: number;
    }[];
  }[];
}

export interface UnitPackage {
  unitNumber: number;
  unitTitle: string;
  chapterTitle?: string;
  unitLabel?: string;
  kodeTP: string;
  tujuanPembelajaran: string;
  elemenCP: string;
  alokasiJP: number;
  semester: "GANJIL" | "GENAP";
  doc5ModulAjar: Doc5ModulAjar;
  doc6LKPD: Doc6LKPD;
  doc7KKTP: Doc7KKTP;
  doc8KisiKisi: Doc8KisiKisiItem[];
  doc9BankSoal: Doc9BankSoal;
}

export interface CompleteDocumentPackage {
  input: TeacherInput;
  doc1AnalisisCP: Doc1Item[];
  doc2ATP: Doc2Item[];
  doc3Prota: {
    items: Doc3Item[];
    subtotalGanjil: number;
    subtotalGenap: number;
    totalTahun: number;
  };
  doc4ProsemGanjil: Doc4Item[];
  doc4ProsemGenap: Doc4Item[];
  units: UnitPackage[]; // 100% Seluruh Unit / TP Lengkap 1 Tahun
  doc5ModulAjar: Doc5ModulAjar;
  doc6LKPD: Doc6LKPD;
  doc7KKTP: Doc7KKTP;
  doc8KisiKisi: Doc8KisiKisiItem[];
  doc9BankSoal: Doc9BankSoal;
  meta: {
    waktuGenerate: string;
    versiRegulasi: string;
    generatorEngine: string;
    totalUnit?: number;
    totalTP?: number;
  };
}

// ============================================================================
// INTEGRASI BANK SOAL DENGAN PEMBUATAN ASESMEN (Dokumen 8 & 9)
// ============================================================================
export type DifficultyLevel = "SEMUA" | "MUDAH" | "SEDANG" | "HOTS";
export type QuestionTypeFilter = "SEMUA" | "PGK" | "URAIAN" | "CAMPURAN";

export interface AssessmentConfig {
  judulAsesmen: string;
  selectedTPs: string[];
  selectedElements: string[];
  jumlahSoal: number;
  tingkatKesulitan: DifficultyLevel;
  bentukSoal: QuestionTypeFilter;
  alokasiWaktuMenit: number;
  petunjukUmum: string[];
  sertakanKisiKisi: boolean;
  sertakanKunciGuru: boolean;
}

export interface AssessmentQuestionItem {
  no: number;
  bentuk: "Pilihan Ganda Kompleks" | "Uraian Kasus HOTS" | "Pilihan Ganda";
  levelKognitif: string;
  stimulus?: string;
  pertanyaan: string;
  pilihan?: {
    kode: string;
    teks: string;
    isCorrect: boolean;
  }[];
  kunciJawaban: string;
  pembahasan?: string;
  pedomanPenskoran?: {
    kriteriaMaksimal?: string;
    skorMaksimal?: number;
    kriteriaParsial?: string;
    skorParsial?: number;
    rubrik?: { kriteria: string; skor: number }[];
  };
  kodeTP: string;
  tujuanPembelajaran: string;
  elemenCP: string;
}

export interface GeneratedAssessmentPaper {
  id: string;
  judulAsesmen: string;
  tanggalDibuat: string;
  waktuPengerjaan: string;
  header: {
    namaSatuan: string;
    mataPelajaran: string;
    kelas: string;
    semester: string;
    tahunAjaran: string;
    alokasiWaktu: string;
  };
  petunjukUmum: string[];
  kisiKisi: Doc8KisiKisiItem[];
  soalList: AssessmentQuestionItem[];
  totalSkorMaksimal: number;
}

// ============================================================================
// FITUR KOLABORASI ADMINISTRASI GURU (Berbagi, Salin/Adaptasi, Rating & Komentar)
// ============================================================================
export interface SharedComment {
  id: string;
  authorName: string;
  authorSchool: string;
  authorRole?: string;
  content: string;
  createdAt: string;
}

export interface SharedRating {
  id: string;
  userId: string;
  userName: string;
  rating: number; // 1 to 5
  createdAt: string;
}

export interface SharedDocumentItem {
  id: string;
  title: string;
  description: string;
  authorName: string;
  authorSchool: string;
  authorNip?: string;
  authorRole?: string;
  jalur: PathwayType;
  fase: FaseType;
  kelas: string;
  mataPelajaran: string;
  docType: "Paket Lengkap 9 Dokumen" | "Modul Ajar" | "LKPD" | "Bank Soal & Asesmen" | "ATP & Prota";
  tags: string[];
  ratings: SharedRating[];
  avgRating: number;
  totalRatings: number;
  comments: SharedComment[];
  copyCount: number;
  createdAt: string;
  // Payload used when forking/adapting to user's workspace
  payload: {
    input: TeacherInput;
    dynamicTPs?: any[];
  };
}
