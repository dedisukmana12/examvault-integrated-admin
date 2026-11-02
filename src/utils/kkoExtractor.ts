// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
/**
 * Utility untuk ekstraksi KKO (Kata Kerja Operasional) Taksonomi Bloom (C1 - C6)
 * dan Lingkup Materi spesifik per Tujuan Pembelajaran (TP).
 * Mencegah redundansi duplikasi KKO makro pada tabel Analisis Dokumen 1.
 */

export interface BloomInfo {
  level: "C1" | "C2" | "C3" | "C4" | "C5" | "C6";
  label: string;
  badgeClass: string;
}

export const BLOOM_KKO_MAP: Record<string, BloomInfo> = {
  // C1 - Mengingat / Remembering
  mengenal: { level: "C1", label: "Mengingat", badgeClass: "bg-sky-50 text-sky-800 border-sky-200" },
  mengenali: { level: "C1", label: "Mengingat", badgeClass: "bg-sky-50 text-sky-800 border-sky-200" },
  mengidentifikasi: { level: "C1", label: "Mengingat", badgeClass: "bg-sky-50 text-sky-800 border-sky-200" },
  menyebutkan: { level: "C1", label: "Mengingat", badgeClass: "bg-sky-50 text-sky-800 border-sky-200" },
  menunjukkan: { level: "C1", label: "Mengingat", badgeClass: "bg-sky-50 text-sky-800 border-sky-200" },
  menuliskan: { level: "C1", label: "Mengingat", badgeClass: "bg-sky-50 text-sky-800 border-sky-200" },
  membaca: { level: "C1", label: "Mengingat", badgeClass: "bg-sky-50 text-sky-800 border-sky-200" },
  mendaftar: { level: "C1", label: "Mengingat", badgeClass: "bg-sky-50 text-sky-800 border-sky-200" },
  menghafal: { level: "C1", label: "Mengingat", badgeClass: "bg-sky-50 text-sky-800 border-sky-200" },
  melafalkan: { level: "C1", label: "Mengingat", badgeClass: "bg-sky-50 text-sky-800 border-sky-200" },
  menyalin: { level: "C1", label: "Mengingat", badgeClass: "bg-sky-50 text-sky-800 border-sky-200" },
  meniru: { level: "C1", label: "Mengingat", badgeClass: "bg-sky-50 text-sky-800 border-sky-200" },
  memilih: { level: "C1", label: "Mengingat", badgeClass: "bg-sky-50 text-sky-800 border-sky-200" },
  memasangkan: { level: "C1", label: "Mengingat", badgeClass: "bg-sky-50 text-sky-800 border-sky-200" },
  identify: { level: "C1", label: "Remembering", badgeClass: "bg-sky-50 text-sky-800 border-sky-200" },
  name: { level: "C1", label: "Remembering", badgeClass: "bg-sky-50 text-sky-800 border-sky-200" },
  list: { level: "C1", label: "Remembering", badgeClass: "bg-sky-50 text-sky-800 border-sky-200" },
  recall: { level: "C1", label: "Remembering", badgeClass: "bg-sky-50 text-sky-800 border-sky-200" },
  state: { level: "C1", label: "Remembering", badgeClass: "bg-sky-50 text-sky-800 border-sky-200" },
  define: { level: "C1", label: "Remembering", badgeClass: "bg-sky-50 text-sky-800 border-sky-200" },

  // C2 - Memahami / Understanding
  memahami: { level: "C2", label: "Memahami", badgeClass: "bg-blue-50 text-blue-800 border-blue-200" },
  menjelaskan: { level: "C2", label: "Memahami", badgeClass: "bg-blue-50 text-blue-800 border-blue-200" },
  menceritakan: { level: "C2", label: "Memahami", badgeClass: "bg-blue-50 text-blue-800 border-blue-200" },
  menguraikan: { level: "C2", label: "Memahami", badgeClass: "bg-blue-50 text-blue-800 border-blue-200" },
  mengklasifikasikan: { level: "C2", label: "Memahami", badgeClass: "bg-blue-50 text-blue-800 border-blue-200" },
  mengelompokkan: { level: "C2", label: "Memahami", badgeClass: "bg-blue-50 text-blue-800 border-blue-200" },
  mencontohkan: { level: "C2", label: "Memahami", badgeClass: "bg-blue-50 text-blue-800 border-blue-200" },
  merangkum: { level: "C2", label: "Memahami", badgeClass: "bg-blue-50 text-blue-800 border-blue-200" },
  menyimpulkan: { level: "C2", label: "Memahami", badgeClass: "bg-blue-50 text-blue-800 border-blue-200" },
  memperkirakan: { level: "C2", label: "Memahami", badgeClass: "bg-blue-50 text-blue-800 border-blue-200" },
  menafsirkan: { level: "C2", label: "Memahami", badgeClass: "bg-blue-50 text-blue-800 border-blue-200" },
  menginterpretasikan: { level: "C2", label: "Memahami", badgeClass: "bg-blue-50 text-blue-800 border-blue-200" },
  mendiskusikan: { level: "C2", label: "Memahami", badgeClass: "bg-blue-50 text-blue-800 border-blue-200" },
  menyimak: { level: "C2", label: "Memahami", badgeClass: "bg-blue-50 text-blue-800 border-blue-200" },
  understand: { level: "C2", label: "Understanding", badgeClass: "bg-blue-50 text-blue-800 border-blue-200" },
  explain: { level: "C2", label: "Understanding", badgeClass: "bg-blue-50 text-blue-800 border-blue-200" },
  describe: { level: "C2", label: "Understanding", badgeClass: "bg-blue-50 text-blue-800 border-blue-200" },
  summarize: { level: "C2", label: "Understanding", badgeClass: "bg-blue-50 text-blue-800 border-blue-200" },
  interpret: { level: "C2", label: "Understanding", badgeClass: "bg-blue-50 text-blue-800 border-blue-200" },

  // C3 - Mengaplikasikan / Applying
  menerapkan: { level: "C3", label: "Mengaplikasikan", badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  menggunakan: { level: "C3", label: "Mengaplikasikan", badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  menghitung: { level: "C3", label: "Mengaplikasikan", badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  menyelesaikan: { level: "C3", label: "Mengaplikasikan", badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  melakukan: { level: "C3", label: "Mengaplikasikan", badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  mengoperasikan: { level: "C3", label: "Mengaplikasikan", badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  mendemonstrasikan: { level: "C3", label: "Mengaplikasikan", badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  menjalankan: { level: "C3", label: "Mengaplikasikan", badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  mengurutkan: { level: "C3", label: "Mengaplikasikan", badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  menentukan: { level: "C3", label: "Mengaplikasikan", badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  mengonversi: { level: "C3", label: "Mengaplikasikan", badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  menghubungkan: { level: "C3", label: "Mengaplikasikan", badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  memodifikasi: { level: "C3", label: "Mengaplikasikan", badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  mematuhi: { level: "C3", label: "Mengaplikasikan", badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  mempraktikkan: { level: "C3", label: "Mengaplikasikan", badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  membiasakan: { level: "C3", label: "Mengaplikasikan", badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  apply: { level: "C3", label: "Applying", badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  demonstrate: { level: "C3", label: "Applying", badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  use: { level: "C3", label: "Applying", badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  solve: { level: "C3", label: "Applying", badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  calculate: { level: "C3", label: "Applying", badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  perform: { level: "C3", label: "Applying", badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200" },

  // C4 - Menganalisis / Analyzing
  menganalisis: { level: "C4", label: "Menganalisis", badgeClass: "bg-amber-50 text-amber-800 border-amber-200" },
  membandingkan: { level: "C4", label: "Menganalisis", badgeClass: "bg-amber-50 text-amber-800 border-amber-200" },
  menelaah: { level: "C4", label: "Menganalisis", badgeClass: "bg-amber-50 text-amber-800 border-amber-200" },
  memeriksa: { level: "C4", label: "Menganalisis", badgeClass: "bg-amber-50 text-amber-800 border-amber-200" },
  membedakan: { level: "C4", label: "Menganalisis", badgeClass: "bg-amber-50 text-amber-800 border-amber-200" },
  mendekomposisi: { level: "C4", label: "Menganalisis", badgeClass: "bg-amber-50 text-amber-800 border-amber-200" },
  mengorganisasikan: { level: "C4", label: "Menganalisis", badgeClass: "bg-amber-50 text-amber-800 border-amber-200" },
  menemukan: { level: "C4", label: "Menganalisis", badgeClass: "bg-amber-50 text-amber-800 border-amber-200" },
  memetakan: { level: "C4", label: "Menganalisis", badgeClass: "bg-amber-50 text-amber-800 border-amber-200" },
  mendeteksi: { level: "C4", label: "Menganalisis", badgeClass: "bg-amber-50 text-amber-800 border-amber-200" },
  mengomparasi: { level: "C4", label: "Menganalisis", badgeClass: "bg-amber-50 text-amber-800 border-amber-200" },
  menginvestigasi: { level: "C4", label: "Menganalisis", badgeClass: "bg-amber-50 text-amber-800 border-amber-200" },
  mengkritisi: { level: "C4", label: "Menganalisis", badgeClass: "bg-amber-50 text-amber-800 border-amber-200" },
  analyze: { level: "C4", label: "Analyzing", badgeClass: "bg-amber-50 text-amber-800 border-amber-200" },
  compare: { level: "C4", label: "Analyzing", badgeClass: "bg-amber-50 text-amber-800 border-amber-200" },
  contrast: { level: "C4", label: "Analyzing", badgeClass: "bg-amber-50 text-amber-800 border-amber-200" },
  differentiate: { level: "C4", label: "Analyzing", badgeClass: "bg-amber-50 text-amber-800 border-amber-200" },
  examine: { level: "C4", label: "Analyzing", badgeClass: "bg-amber-50 text-amber-800 border-amber-200" },

  // C5 - Mengevaluasi / Evaluating
  mengevaluasi: { level: "C5", label: "Mengevaluasi", badgeClass: "bg-purple-50 text-purple-800 border-purple-200" },
  menilai: { level: "C5", label: "Mengevaluasi", badgeClass: "bg-purple-50 text-purple-800 border-purple-200" },
  mengkritik: { level: "C5", label: "Mengevaluasi", badgeClass: "bg-purple-50 text-purple-800 border-purple-200" },
  membuktikan: { level: "C5", label: "Mengevaluasi", badgeClass: "bg-purple-50 text-purple-800 border-purple-200" },
  memvalidasi: { level: "C5", label: "Mengevaluasi", badgeClass: "bg-purple-50 text-purple-800 border-purple-200" },
  mempertimbangkan: { level: "C5", label: "Mengevaluasi", badgeClass: "bg-purple-50 text-purple-800 border-purple-200" },
  menguji: { level: "C5", label: "Mengevaluasi", badgeClass: "bg-purple-50 text-purple-800 border-purple-200" },
  menyanggah: { level: "C5", label: "Mengevaluasi", badgeClass: "bg-purple-50 text-purple-800 border-purple-200" },
  mempertahankan: { level: "C5", label: "Mengevaluasi", badgeClass: "bg-purple-50 text-purple-800 border-purple-200" },
  merefleksikan: { level: "C5", label: "Mengevaluasi", badgeClass: "bg-purple-50 text-purple-800 border-purple-200" },
  mengapresiasi: { level: "C5", label: "Mengevaluasi", badgeClass: "bg-purple-50 text-purple-800 border-purple-200" },
  evaluate: { level: "C5", label: "Evaluating", badgeClass: "bg-purple-50 text-purple-800 border-purple-200" },
  assess: { level: "C5", label: "Evaluating", badgeClass: "bg-purple-50 text-purple-800 border-purple-200" },
  critique: { level: "C5", label: "Evaluating", badgeClass: "bg-purple-50 text-purple-800 border-purple-200" },
  justify: { level: "C5", label: "Evaluating", badgeClass: "bg-purple-50 text-purple-800 border-purple-200" },
  judge: { level: "C5", label: "Evaluating", badgeClass: "bg-purple-50 text-purple-800 border-purple-200" },

  // C6 - Mencipta / Creating
  merancang: { level: "C6", label: "Mencipta", badgeClass: "bg-rose-50 text-rose-800 border-rose-200" },
  membuat: { level: "C6", label: "Mencipta", badgeClass: "bg-rose-50 text-rose-800 border-rose-200" },
  menciptakan: { level: "C6", label: "Mencipta", badgeClass: "bg-rose-50 text-rose-800 border-rose-200" },
  mengembangkan: { level: "C6", label: "Mencipta", badgeClass: "bg-rose-50 text-rose-800 border-rose-200" },
  menyusun: { level: "C6", label: "Mencipta", badgeClass: "bg-rose-50 text-rose-800 border-rose-200" },
  memproduksi: { level: "C6", label: "Mencipta", badgeClass: "bg-rose-50 text-rose-800 border-rose-200" },
  mengonstruksi: { level: "C6", label: "Mencipta", badgeClass: "bg-rose-50 text-rose-800 border-rose-200" },
  memformulasikan: { level: "C6", label: "Mencipta", badgeClass: "bg-rose-50 text-rose-800 border-rose-200" },
  membangun: { level: "C6", label: "Mencipta", badgeClass: "bg-rose-50 text-rose-800 border-rose-200" },
  mempresentasikan: { level: "C6", label: "Menyajikan", badgeClass: "bg-rose-50 text-rose-800 border-rose-200" },
  menyajikan: { level: "C6", label: "Menyajikan", badgeClass: "bg-rose-50 text-rose-800 border-rose-200" },
  mengomunikasikan: { level: "C6", label: "Menyajikan", badgeClass: "bg-rose-50 text-rose-800 border-rose-200" },
  create: { level: "C6", label: "Creating", badgeClass: "bg-rose-50 text-rose-800 border-rose-200" },
  design: { level: "C6", label: "Creating", badgeClass: "bg-rose-50 text-rose-800 border-rose-200" },
  compose: { level: "C6", label: "Creating", badgeClass: "bg-rose-50 text-rose-800 border-rose-200" },
  construct: { level: "C6", label: "Creating", badgeClass: "bg-rose-50 text-rose-800 border-rose-200" },
  produce: { level: "C6", label: "Creating", badgeClass: "bg-rose-50 text-rose-800 border-rose-200" },
};

/**
 * Ekstraksi KKO spesifik dan unik dari teks Tujuan Pembelajaran (TP).
 * Menghilangkan repetisi makro KKO pada tabel Dokumen 1.
 */
export function extractSpecificKKO(teksTP: string, fallbackElementKKO?: string): string {
  if (!teksTP) return fallbackElementKKO || "Memahami (C2 - Memahami)";

  // Jika fallbackElementKKO sudah berupa KKO tunggal spesifik (misal: "Menganalisis (C4)"), gunakan langsung
  if (
    fallbackElementKKO &&
    !fallbackElementKKO.includes(",") &&
    /\(C[1-6]/.test(fallbackElementKKO)
  ) {
    return fallbackElementKKO;
  }

  // Bersihkan awalan umum seperti "Peserta didik mampu", "Siswa dapat", angka "1. ", dsb.
  const cleanTP = teksTP
    .replace(/^[\d\.\-\)\s]+/, "")
    .replace(/^(peserta didik|murid|siswa)\s+(mampu|dapat)\s+/i, "")
    .trim();

  // 1. Jika ada daftar KKO dari elemen induk, cari kata yang benar-benar dipakai di TP ini
  if (fallbackElementKKO && fallbackElementKKO.includes(",")) {
    const candidateVerbs = fallbackElementKKO.split(",").map((v) => v.trim()).filter(Boolean);
    for (const candidate of candidateVerbs) {
      // Ambil kata pertama candidate
      const cleanCandidateWord = candidate.split(" ")[0].replace(/[^a-zA-Z]/g, "");
      if (!cleanCandidateWord) continue;
      const regex = new RegExp(`\\b${cleanCandidateWord}\\b`, "i");
      if (regex.test(cleanTP.slice(0, 60))) {
        const norm = cleanCandidateWord.toLowerCase();
        const bloom = BLOOM_KKO_MAP[norm];
        if (bloom) {
          return `${cleanCandidateWord} (${bloom.level} - ${bloom.label})`;
        }
        return candidate;
      }
    }
  }

  // 2. Ekstraksi kata kerja utama dari awal rumusan TP
  const words = cleanTP.split(/\s+/);
  const firstWord = (words[0] || "").replace(/[^a-zA-Z]/g, "");
  const normFirst = firstWord.toLowerCase();

  // Periksa apakah kata pertama ada di kamus Bloom
  if (BLOOM_KKO_MAP[normFirst]) {
    const bloom = BLOOM_KKO_MAP[normFirst];
    // Cek apakah ada kata kerja kedua (misal: "Membandingkan dan mengurutkan")
    if (words[1] && /^(dan|serta|atau)$/i.test(words[1]) && words[2]) {
      const secondWord = words[2].replace(/[^a-zA-Z]/g, "");
      const normSecond = secondWord.toLowerCase();
      if (BLOOM_KKO_MAP[normSecond]) {
        const bloom2 = BLOOM_KKO_MAP[normSecond];
        return `${firstWord} (${bloom.level}) & ${secondWord} (${bloom2.level})`;
      }
    }
    return `${firstWord} (${bloom.level} - ${bloom.label})`;
  }

  // Cek kata kedua jika kata pertama adalah adverbia/preposisi
  if (words[1]) {
    const secondWord = words[1].replace(/[^a-zA-Z]/g, "");
    const normSecond = secondWord.toLowerCase();
    if (BLOOM_KKO_MAP[normSecond]) {
      const bloom = BLOOM_KKO_MAP[normSecond];
      return `${secondWord} (${bloom.level} - ${bloom.label})`;
    }
  }

  // Fallback ke kata pertama atau fallback elemen
  if (fallbackElementKKO && !fallbackElementKKO.includes(",")) {
    return fallbackElementKKO;
  }

  return firstWord ? `${firstWord} (C2 - Memahami)` : "Memahami (C2 - Memahami)";
}

/**
 * Ekstraksi lingkup materi spesifik per Tujuan Pembelajaran.
 * Memisahkan materi makro menjadi fokus materi per unit/TP.
 */
export function extractSpecificMateri(
  teksTP: string,
  elementMateri?: string,
  elementName?: string
): string {
  if (!teksTP) return elementMateri || elementName || "Materi Esensial";

  if (elementMateri && elementMateri.includes(",")) {
    const topics = elementMateri.split(",").map((s) => s.trim()).filter(Boolean);
    // Skoring topik berdasarkan kecocokan kata kunci unik yang ada di rumusan TP
    const scoredTopics = topics.map((t) => {
      const words = t.split(/\s+/).filter((w) => {
        const lw = w.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
        return lw.length > 3 && !["pancasila", "indonesia", "dalam", "dengan", "secara", "pada", "yang", "untuk"].includes(lw);
      });
      const matchCount = words.filter((w) => {
        const cleanW = w.replace(/[^a-zA-Z0-9]/g, "");
        return cleanW && new RegExp(`\\b${cleanW}\\b`, "i").test(teksTP);
      }).length;
      return { topic: t, matchCount };
    });

    const maxMatch = Math.max(...scoredTopics.map((s) => s.matchCount));
    if (maxMatch > 0) {
      const topTopics = scoredTopics
        .filter((s) => s.matchCount === maxMatch)
        .map((s) => s.topic);
      return topTopics.join(", ");
    }
  }

  if (elementMateri && elementMateri.trim().length > 0) {
    return elementMateri;
  }

  // Ekstraksi otomatis dari rumusan TP (ambil bagian tengah/predikat materi)
  const clean = teksTP
    .replace(/^[\d\.\-\)\s]+/, "")
    .replace(/^(peserta didik|murid|siswa)\s+(mampu|dapat)\s+/i, "")
    .replace(/^(mengenal|memahami|menerapkan|menganalisis|mengevaluasi|merancang|menjelaskan|menceritakan|menghitung|menyelesaikan)\s+/i, "")
    .trim();

  // Potong sebelum kata keterangan konteks jika ada
  const contextMarkers = [" melalui ", " dengan ", " dalam ", " secara ", " pada "];
  let cutoff = clean.length;
  for (const marker of contextMarkers) {
    const pos = clean.indexOf(marker);
    if (pos > 15 && pos < cutoff) {
      cutoff = pos;
    }
  }

  const extracted = clean.slice(0, Math.min(cutoff, 70)).trim();
  return extracted.length > 5 ? extracted : elementName || "Materi Esensial";
}
