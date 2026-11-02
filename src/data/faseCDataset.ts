// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import { CPDataset } from "./curriculumDatabase";
import { FASE_C_UMUM_DATASETS } from "./faseC/faseC_umum";
import { FASE_C_AGAMA_DATASETS } from "./faseC/faseC_agama";
import { FASE_C_SENI_KODING_DATASETS } from "./faseC/faseC_seni_koding";

/**
 * Capaian Pembelajaran Resmi Fase C (Kelas 5 dan 6 SD/MI)
 * Berdasarkan Keputusan Kepala BSKAP No. 046/H/KR/2025 & KMA No. 1503 Tahun 2025.
 *
 * Mata Pelajaran Resmi di Fase C:
 * 1. Pendidikan Pancasila (Pancasila, UUD 1945, Bhinneka Tunggal Ika, NKRI)
 * 2. Bahasa Indonesia (Menyimak, Membaca-Memirsa, Berbicara-Mempresentasikan, Menulis)
 * 3. Matematika (Bilangan s.d 1.000.000, Aljabar Pola & Proporsi, Pengukuran Luas/Volume/Sudut, Geometri Bangun Ruang, Analisis Data & Peluang)
 * 4. Ilmu Pengetahuan Alam dan Sosial (IPAS) - [WAJIB MANDIRI]
 * 5. Bahasa Inggris - [WAJIB MANDIRI - CEFR Level A1]
 * 6. Koding dan Kecerdasan Artifisial (KA) - [MATA PELAJARAN PILIHAN BARU FASE C - BSKAP No. 046/2025]
 * 7. Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)
 * 8. Seni (Pilihan Cabang: Seni Rupa, Seni Musik, Seni Tari, Seni Teater)
 * 9. Pendidikan Agama & Budi Pekerti (Islam, Kristen, Katolik, Hindu, Buddha, Khonghucu / Kemenag: Al-Qur'an Hadis, Akidah Akhlak, Fikih, SKI, Bahasa Arab)
 * 10. Muatan Lokal (Bahasa Daerah / Kearifan Budaya)
 *
 * Catatan Regulasi Resmi BSKAP 046/2025:
 * - IPAS & Bahasa Inggris diajarkan sebagai mapel wajib mandiri di Fase C.
 * - Koding & Kecerdasan Artifisial (KA) ditetapkan sebagai Mata Pelajaran Pilihan di jenjang SD/MI (mulai Fase C).
 * - Informatika murni sebagai mapel wajib dan Prakarya baru dimulai di Fase D (SMP/MTs).
 */
export const FASE_C_DATASETS: CPDataset[] = [
  ...FASE_C_UMUM_DATASETS,
  ...FASE_C_AGAMA_DATASETS,
  ...FASE_C_SENI_KODING_DATASETS,

  {
    fase: "Fase C",
    kelasDefault: "Kelas V",
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
