// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import { CPDataset } from "./curriculumDatabase";
import { FASE_A_UMUM_DATASETS } from "./faseA/faseA_umum";
import { FASE_A_AGAMA_DATASETS } from "./faseA/faseA_agama";
import { FASE_A_SENI_MULOK_DATASETS } from "./faseA/faseA_seni_mulok";

/**
 * Capaian Pembelajaran Resmi Fase A (Kelas 1 dan 2 SD/MI)
 * Berdasarkan Keputusan Kepala BSKAP No. 046/H/KR/2025 & KMA No. 1503 Tahun 2025.
 *
 * Mata Pelajaran Resmi di Fase A:
 * 1. Pendidikan Agama dan Budi Pekerti (Islam, Kristen, Katolik, Hindu, Buddha, Khonghucu / Kemenag: Al-Qur'an Hadis, Akidah Akhlak, Fikih, Bahasa Arab)
 * 2. Pendidikan Pancasila
 * 3. Bahasa Indonesia
 * 4. Matematika
 * 5. Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)
 * 6. Seni (Seni Rupa, Seni Musik, Seni Tari, Seni Teater)
 * 7. Muatan Lokal (Bahasa Daerah)
 *
 * Catatan Resmi:
 * - IPAS belum diajarkan di Fase A (dimulai pada Fase B / Kelas 3).
 * - Bahasa Inggris tidak diajarkan di Fase A untuk penguatan fondasi literasi Bahasa Indonesia.
 * - Informatika terintegrasi pada Matematika dan Pancasila (tanpa CP berdiri sendiri).
 * - Prakarya baru diajarkan pada jenjang SMP (Fase D).
 */
export const FASE_A_DATASETS: CPDataset[] = [
  ...FASE_A_UMUM_DATASETS,
  ...FASE_A_AGAMA_DATASETS,
  ...FASE_A_SENI_MULOK_DATASETS,

  {
    fase: "Fase A",
    kelasDefault: "Kelas I",
    mapel: "Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pemahaman Konsep",
        deskripsiCP: "Memahami konsep Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK) secara komprehensif.",
        kompetensiKKO: "Memahami, Menganalisis",
        lingkupMateri: "Materi Esensial Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP: "Memahami konsep dasar Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK) dalam kehidupan sehari-hari.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Memiliki pengetahuan dasar terkait fenomena.",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Kewargaan", "Tasamuh"],
            konteksPembelajaran: {
              stimulus: "Menampilkan kasus atau gambar relevan dengan Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK).",
              masalahNyata: "Bagaimana penerapan Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK) menyelesaikan masalah tersebut?",
              kegiatanEksplorasi: ["Observasi lingkungan", "Diskusi kelompok"],
              pertanyaanHOTS: [{ level: "C4", teks: "Analisis dampak fenomena tersebut!" }],
              rubrikIndikator: [{ kriteria: "Pemahaman Konsep", baru: "Belum", layak: "Cukup", cakap: "Baik", mahir: "Sangat Baik" }],
              soalPGK: {
                pertanyaan: "Pernyataan yang benar tentang Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK) adalah...",
                pilihan: [{ kode: "A", teks: "Pilihan A", isCorrect: true }, { kode: "B", teks: "Pilihan B", isCorrect: false }],
                kunci: "A",
                pembahasan: "Pembahasan untuk opsi A."
              },
              soalUraian: {
                level: "C4",
                pertanyaan: "Jelaskan dengan bahasamu sendiri tentang konsep ini!",
                kunci: "Jawaban logis dan relevan.",
                rubrik: [{ kriteria: "Ketepatan Analisis", skor: 10 }]
              }
            }
          }
        ]
      }
    ]
  },
];
