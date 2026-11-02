// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import { CPDataset } from "./curriculumDatabase";
import { FASE_B_UMUM_DATASETS } from "./faseB/faseB_umum";
import { FASE_B_AGAMA_DATASETS } from "./faseB/faseB_agama";
import { FASE_B_SENI_MULOK_DATASETS } from "./faseB/faseB_seni_mulok";

/**
 * Capaian Pembelajaran Resmi Fase B (Kelas 3 dan 4 SD/MI)
 * Berdasarkan Keputusan Kepala BSKAP No. 046/H/KR/2025 & KMA No. 1503 Tahun 2025.
 *
 * Mata Pelajaran Resmi di Fase B:
 * 1. Pendidikan Pancasila (Pancasila, UUD 1945, Bhinneka Tunggal Ika, NKRI)
 * 2. Bahasa Indonesia (Menyimak, Membaca-Memirsa, Berbicara-Mempresentasikan, Menulis)
 * 3. Matematika (Bilangan s.d 10.000, Pecahan Senilai, Aljabar, Geometri, Analisis Data)
 * 4. Ilmu Pengetahuan Alam dan Sosial (IPAS) - [WAJIB MULAI FASE B]
 * 5. Bahasa Inggris - [WAJIB MULAI FASE B - CEFR Level A1]
 * 6. Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)
 * 7. Seni (Pilihan: Seni Rupa, Seni Musik, Seni Tari, Seni Teater)
 * 8. Pendidikan Agama & Budi Pekerti (Islam, Kristen, Katolik, Hindu, Buddha, Khonghucu / Kemenag: Al-Qur'an Hadis, Akidah Akhlak, Fikih, SKI, Bahasa Arab)
 * 9. Muatan Lokal (Bahasa Daerah)
 *
 * Catatan Regulasi Resmi:
 * - IPAS: Diajarkan mandiri mulai Fase B (menggabungkan sains fisis/biologis dan fenomena sosial).
 * - Bahasa Inggris: Wajib mulai diajarkan di Fase B (fokus listening-speaking & teks multimodal sederhana).
 * - Informatika: TIDAK ADA sebagai mapel mandiri di Fase B (diintegrasikan ke IPAS, Matematika, B. Indonesia, Pancasila).
 * - Prakarya: Ditiadakan dari jenjang SD (baru mulai diajarkan di Fase D / SMP).
 */
export const FASE_B_DATASETS: CPDataset[] = [
  ...FASE_B_UMUM_DATASETS,
  ...FASE_B_AGAMA_DATASETS,
  ...FASE_B_SENI_MULOK_DATASETS,

  {
    fase: "Fase B",
    kelasDefault: "Kelas III",
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
