// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import { CPDataset } from "./curriculumDatabase";

export const MATH_JSON_DATASETS: CPDataset[] = [
  {
    "fase": "Fase A",
    "kelasDefault": "Kelas I",
    "mapel": "Matematika",
    "jalurApplicable": [
      "Dinas",
      "Kemenag"
    ],
    "elemenList": [
      {
        "namaElemen": "Bilangan",
        "deskripsiCP": "Memiliki intuisi bilangan (number sense) pada bilangan cacah sampai 100; membaca, menulis, menentukan nilai tempat, membandingkan, mengurutkan, komposisi dan dekomposisi bilangan; penjumlahan dan pengurangan dengan benda konkret sampai 20; memahami pecahan sebagai bagian keseluruhan melalui pembagian sama banyak, dengan pengenalan setengah dan seperempat.",
        "kompetensiKKO": "Memahami, Menerapkan, Menganalisis",
        "lingkupMateri": "Materi esensial matematika",
        "tpList": [
          {
            "kodeTP": "TP.01",
            "teksTP": "Memahami konsep dasar Bilangan pada fase A sesuai dengan konteks yang diberikan.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "Materi sebelumnya",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Mengamati masalah sehari-hari berkaitan dengan Bilangan.",
              "masalahNyata": "Bagaimana cara menyelesaikan masalah Bilangan ini?",
              "kegiatanEksplorasi": [
                "Mendiskusikan materi Bilangan"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah penerapan konsep Bilangan!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Pemahaman Bilangan",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Konsep yang benar tentang Bilangan adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C3",
                "pertanyaan": "Jelaskan fungsi dari Bilangan!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.02",
            "teksTP": "Menerapkan pemahaman Bilangan untuk memecahkan masalah dalam kehidupan sehari-hari.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "TP.01",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menerapkan rumus dan aturan Bilangan.",
              "masalahNyata": "Dapatkah kamu memodelkan ini ke dalam bentuk matematika?",
              "kegiatanEksplorasi": [
                "Mengerjakan studi kasus Bilangan"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C5",
                  "teks": "Evaluasi keefektifan cara ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Aplikasi Bilangan",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Hasil aplikasi Bilangan adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Gunakan konsep ini untuk menyelesaikan masalah X!",
                "kunci": "Jawaban yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.03",
            "teksTP": "Menganalisis hubungan antar komponen dalam Bilangan secara sistematis dan logis.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.02",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Membandingkan dua kasus Bilangan yang berbeda.",
              "masalahNyata": "Apa perbedaan utama dari kedua metode ini?",
              "kegiatanEksplorasi": [
                "Membuat tabel analisis Bilangan"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah hubungan sebab-akibatnya!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Analisis Bilangan",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Perbedaan utama adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Jelaskan perbandingan keduanya!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.04",
            "teksTP": "Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi Bilangan.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.03",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menyajikan proyek mini berkaitan dengan Bilangan.",
              "masalahNyata": "Bagaimana cara mempresentasikan hasil rancanganmu?",
              "kegiatanEksplorasi": [
                "Membuat presentasi kelompok tentang Bilangan"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C6",
                  "teks": "Buatlah model matematis baru untuk memecahkan masalah ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Evaluasi & Kreasi Bilangan",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Langkah terbaik adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C6",
                "pertanyaan": "Rancanglah sebuah solusi unik!",
                "kunci": "Solusi yang benar"
              }
            }
          }
        ]
      },
      {
        "namaElemen": "Aljabar",
        "deskripsiCP": "Memahami makna simbol matematika “=” dalam kalimat matematika yang terkait penjumlahan dan pengurangan bilangan cacah sampai 20 menggunakan gambar; mengenali, meniru, dan melanjutkan pola bukan bilangan (gambar, warna, bunyi/suara).",
        "kompetensiKKO": "Memahami, Menerapkan, Menganalisis",
        "lingkupMateri": "Materi esensial matematika",
        "tpList": [
          {
            "kodeTP": "TP.05",
            "teksTP": "Memahami konsep dasar Aljabar pada fase A sesuai dengan konteks yang diberikan.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "Materi sebelumnya",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Mengamati masalah sehari-hari berkaitan dengan Aljabar.",
              "masalahNyata": "Bagaimana cara menyelesaikan masalah Aljabar ini?",
              "kegiatanEksplorasi": [
                "Mendiskusikan materi Aljabar"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah penerapan konsep Aljabar!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Pemahaman Aljabar",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Konsep yang benar tentang Aljabar adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C3",
                "pertanyaan": "Jelaskan fungsi dari Aljabar!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.06",
            "teksTP": "Menerapkan pemahaman Aljabar untuk memecahkan masalah dalam kehidupan sehari-hari.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "TP.01",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menerapkan rumus dan aturan Aljabar.",
              "masalahNyata": "Dapatkah kamu memodelkan ini ke dalam bentuk matematika?",
              "kegiatanEksplorasi": [
                "Mengerjakan studi kasus Aljabar"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C5",
                  "teks": "Evaluasi keefektifan cara ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Aplikasi Aljabar",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Hasil aplikasi Aljabar adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Gunakan konsep ini untuk menyelesaikan masalah X!",
                "kunci": "Jawaban yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.07",
            "teksTP": "Menganalisis hubungan antar komponen dalam Aljabar secara sistematis dan logis.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.02",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Membandingkan dua kasus Aljabar yang berbeda.",
              "masalahNyata": "Apa perbedaan utama dari kedua metode ini?",
              "kegiatanEksplorasi": [
                "Membuat tabel analisis Aljabar"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah hubungan sebab-akibatnya!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Analisis Aljabar",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Perbedaan utama adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Jelaskan perbandingan keduanya!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.08",
            "teksTP": "Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi Aljabar.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.03",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menyajikan proyek mini berkaitan dengan Aljabar.",
              "masalahNyata": "Bagaimana cara mempresentasikan hasil rancanganmu?",
              "kegiatanEksplorasi": [
                "Membuat presentasi kelompok tentang Aljabar"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C6",
                  "teks": "Buatlah model matematis baru untuk memecahkan masalah ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Evaluasi & Kreasi Aljabar",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Langkah terbaik adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C6",
                "pertanyaan": "Rancanglah sebuah solusi unik!",
                "kunci": "Solusi yang benar"
              }
            }
          }
        ]
      },
      {
        "namaElemen": "Pengukuran",
        "deskripsiCP": "Membandingkan panjang dan berat secara langsung; membandingkan durasi waktu; mengukur dan mengestimasi panjang dan berat menggunakan satuan tidak baku.",
        "kompetensiKKO": "Memahami, Menerapkan, Menganalisis",
        "lingkupMateri": "Materi esensial matematika",
        "tpList": [
          {
            "kodeTP": "TP.09",
            "teksTP": "Memahami konsep dasar Pengukuran pada fase A sesuai dengan konteks yang diberikan.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "Materi sebelumnya",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Mengamati masalah sehari-hari berkaitan dengan Pengukuran.",
              "masalahNyata": "Bagaimana cara menyelesaikan masalah Pengukuran ini?",
              "kegiatanEksplorasi": [
                "Mendiskusikan materi Pengukuran"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah penerapan konsep Pengukuran!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Pemahaman Pengukuran",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Konsep yang benar tentang Pengukuran adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C3",
                "pertanyaan": "Jelaskan fungsi dari Pengukuran!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.10",
            "teksTP": "Menerapkan pemahaman Pengukuran untuk memecahkan masalah dalam kehidupan sehari-hari.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "TP.01",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menerapkan rumus dan aturan Pengukuran.",
              "masalahNyata": "Dapatkah kamu memodelkan ini ke dalam bentuk matematika?",
              "kegiatanEksplorasi": [
                "Mengerjakan studi kasus Pengukuran"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C5",
                  "teks": "Evaluasi keefektifan cara ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Aplikasi Pengukuran",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Hasil aplikasi Pengukuran adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Gunakan konsep ini untuk menyelesaikan masalah X!",
                "kunci": "Jawaban yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.11",
            "teksTP": "Menganalisis hubungan antar komponen dalam Pengukuran secara sistematis dan logis.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.02",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Membandingkan dua kasus Pengukuran yang berbeda.",
              "masalahNyata": "Apa perbedaan utama dari kedua metode ini?",
              "kegiatanEksplorasi": [
                "Membuat tabel analisis Pengukuran"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah hubungan sebab-akibatnya!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Analisis Pengukuran",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Perbedaan utama adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Jelaskan perbandingan keduanya!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.12",
            "teksTP": "Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi Pengukuran.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.03",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menyajikan proyek mini berkaitan dengan Pengukuran.",
              "masalahNyata": "Bagaimana cara mempresentasikan hasil rancanganmu?",
              "kegiatanEksplorasi": [
                "Membuat presentasi kelompok tentang Pengukuran"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C6",
                  "teks": "Buatlah model matematis baru untuk memecahkan masalah ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Evaluasi & Kreasi Pengukuran",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Langkah terbaik adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C6",
                "pertanyaan": "Rancanglah sebuah solusi unik!",
                "kunci": "Solusi yang benar"
              }
            }
          }
        ]
      },
      {
        "namaElemen": "Geometri",
        "deskripsiCP": "Mengenal bangun datar (segitiga, segiempat, segi banyak, lingkaran) dan bangun ruang (balok, kubus, kerucut, bola); komposisi/dekomposisi bangun datar; menentukan posisi benda terhadap benda lain (kanan, kiri, depan, belakang, bawah, atas).",
        "kompetensiKKO": "Memahami, Menerapkan, Menganalisis",
        "lingkupMateri": "Materi esensial matematika",
        "tpList": [
          {
            "kodeTP": "TP.13",
            "teksTP": "Memahami konsep dasar Geometri pada fase A sesuai dengan konteks yang diberikan.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "Materi sebelumnya",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Mengamati masalah sehari-hari berkaitan dengan Geometri.",
              "masalahNyata": "Bagaimana cara menyelesaikan masalah Geometri ini?",
              "kegiatanEksplorasi": [
                "Mendiskusikan materi Geometri"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah penerapan konsep Geometri!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Pemahaman Geometri",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Konsep yang benar tentang Geometri adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C3",
                "pertanyaan": "Jelaskan fungsi dari Geometri!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.14",
            "teksTP": "Menerapkan pemahaman Geometri untuk memecahkan masalah dalam kehidupan sehari-hari.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "TP.01",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menerapkan rumus dan aturan Geometri.",
              "masalahNyata": "Dapatkah kamu memodelkan ini ke dalam bentuk matematika?",
              "kegiatanEksplorasi": [
                "Mengerjakan studi kasus Geometri"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C5",
                  "teks": "Evaluasi keefektifan cara ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Aplikasi Geometri",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Hasil aplikasi Geometri adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Gunakan konsep ini untuk menyelesaikan masalah X!",
                "kunci": "Jawaban yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.15",
            "teksTP": "Menganalisis hubungan antar komponen dalam Geometri secara sistematis dan logis.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.02",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Membandingkan dua kasus Geometri yang berbeda.",
              "masalahNyata": "Apa perbedaan utama dari kedua metode ini?",
              "kegiatanEksplorasi": [
                "Membuat tabel analisis Geometri"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah hubungan sebab-akibatnya!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Analisis Geometri",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Perbedaan utama adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Jelaskan perbandingan keduanya!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.16",
            "teksTP": "Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi Geometri.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.03",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menyajikan proyek mini berkaitan dengan Geometri.",
              "masalahNyata": "Bagaimana cara mempresentasikan hasil rancanganmu?",
              "kegiatanEksplorasi": [
                "Membuat presentasi kelompok tentang Geometri"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C6",
                  "teks": "Buatlah model matematis baru untuk memecahkan masalah ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Evaluasi & Kreasi Geometri",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Langkah terbaik adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C6",
                "pertanyaan": "Rancanglah sebuah solusi unik!",
                "kunci": "Solusi yang benar"
              }
            }
          }
        ]
      },
      {
        "namaElemen": "Analisis Data dan Peluang",
        "deskripsiCP": "Mengurutkan, menyortir, mengelompokkan, membandingkan, dan menyajikan data dari banyak benda menggunakan turus dan piktogram paling banyak 4 kategori.",
        "kompetensiKKO": "Memahami, Menerapkan, Menganalisis",
        "lingkupMateri": "Materi esensial matematika",
        "tpList": [
          {
            "kodeTP": "TP.17",
            "teksTP": "Memahami konsep dasar Analisis Data dan Peluang pada fase A sesuai dengan konteks yang diberikan.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "Materi sebelumnya",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Mengamati masalah sehari-hari berkaitan dengan Analisis Data dan Peluang.",
              "masalahNyata": "Bagaimana cara menyelesaikan masalah Analisis Data dan Peluang ini?",
              "kegiatanEksplorasi": [
                "Mendiskusikan materi Analisis Data dan Peluang"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah penerapan konsep Analisis Data dan Peluang!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Pemahaman Analisis Data dan Peluang",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Konsep yang benar tentang Analisis Data dan Peluang adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C3",
                "pertanyaan": "Jelaskan fungsi dari Analisis Data dan Peluang!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.18",
            "teksTP": "Menerapkan pemahaman Analisis Data dan Peluang untuk memecahkan masalah dalam kehidupan sehari-hari.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "TP.01",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menerapkan rumus dan aturan Analisis Data dan Peluang.",
              "masalahNyata": "Dapatkah kamu memodelkan ini ke dalam bentuk matematika?",
              "kegiatanEksplorasi": [
                "Mengerjakan studi kasus Analisis Data dan Peluang"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C5",
                  "teks": "Evaluasi keefektifan cara ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Aplikasi Analisis Data dan Peluang",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Hasil aplikasi Analisis Data dan Peluang adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Gunakan konsep ini untuk menyelesaikan masalah X!",
                "kunci": "Jawaban yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.19",
            "teksTP": "Menganalisis hubungan antar komponen dalam Analisis Data dan Peluang secara sistematis dan logis.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.02",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Membandingkan dua kasus Analisis Data dan Peluang yang berbeda.",
              "masalahNyata": "Apa perbedaan utama dari kedua metode ini?",
              "kegiatanEksplorasi": [
                "Membuat tabel analisis Analisis Data dan Peluang"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah hubungan sebab-akibatnya!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Analisis Analisis Data dan Peluang",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Perbedaan utama adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Jelaskan perbandingan keduanya!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.20",
            "teksTP": "Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi Analisis Data dan Peluang.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.03",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menyajikan proyek mini berkaitan dengan Analisis Data dan Peluang.",
              "masalahNyata": "Bagaimana cara mempresentasikan hasil rancanganmu?",
              "kegiatanEksplorasi": [
                "Membuat presentasi kelompok tentang Analisis Data dan Peluang"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C6",
                  "teks": "Buatlah model matematis baru untuk memecahkan masalah ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Evaluasi & Kreasi Analisis Data dan Peluang",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Langkah terbaik adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C6",
                "pertanyaan": "Rancanglah sebuah solusi unik!",
                "kunci": "Solusi yang benar"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "fase": "Fase B",
    "kelasDefault": "Kelas III",
    "mapel": "Matematika",
    "jalurApplicable": [
      "Dinas",
      "Kemenag"
    ],
    "elemenList": [
      {
        "namaElemen": "Bilangan",
        "deskripsiCP": "Number sense bilangan cacah sampai 10.000; membaca, menulis, membandingkan, mengurutkan; nilai tempat; komposisi/dekomposisi sampai 10.000; operasi penjumlahan/pengurangan sampai 1.000; perkalian/pembagian sampai 100 dengan benda konkret, gambar, simbol; kelipatan dan faktor; perbandingan/pengurutan pecahan dengan pembilang satu dan penyebut sama; pecahan senilai; intuisi pecahan/desimal; pecahan sebagai desimal dan persen.",
        "kompetensiKKO": "Memahami, Menerapkan, Menganalisis",
        "lingkupMateri": "Materi esensial matematika",
        "tpList": [
          {
            "kodeTP": "TP.01",
            "teksTP": "Memahami konsep dasar Bilangan pada fase B sesuai dengan konteks yang diberikan.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "Materi sebelumnya",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Mengamati masalah sehari-hari berkaitan dengan Bilangan.",
              "masalahNyata": "Bagaimana cara menyelesaikan masalah Bilangan ini?",
              "kegiatanEksplorasi": [
                "Mendiskusikan materi Bilangan"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah penerapan konsep Bilangan!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Pemahaman Bilangan",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Konsep yang benar tentang Bilangan adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C3",
                "pertanyaan": "Jelaskan fungsi dari Bilangan!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.02",
            "teksTP": "Menerapkan pemahaman Bilangan untuk memecahkan masalah dalam kehidupan sehari-hari.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "TP.01",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menerapkan rumus dan aturan Bilangan.",
              "masalahNyata": "Dapatkah kamu memodelkan ini ke dalam bentuk matematika?",
              "kegiatanEksplorasi": [
                "Mengerjakan studi kasus Bilangan"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C5",
                  "teks": "Evaluasi keefektifan cara ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Aplikasi Bilangan",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Hasil aplikasi Bilangan adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Gunakan konsep ini untuk menyelesaikan masalah X!",
                "kunci": "Jawaban yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.03",
            "teksTP": "Menganalisis hubungan antar komponen dalam Bilangan secara sistematis dan logis.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.02",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Membandingkan dua kasus Bilangan yang berbeda.",
              "masalahNyata": "Apa perbedaan utama dari kedua metode ini?",
              "kegiatanEksplorasi": [
                "Membuat tabel analisis Bilangan"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah hubungan sebab-akibatnya!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Analisis Bilangan",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Perbedaan utama adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Jelaskan perbandingan keduanya!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.04",
            "teksTP": "Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi Bilangan.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.03",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menyajikan proyek mini berkaitan dengan Bilangan.",
              "masalahNyata": "Bagaimana cara mempresentasikan hasil rancanganmu?",
              "kegiatanEksplorasi": [
                "Membuat presentasi kelompok tentang Bilangan"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C6",
                  "teks": "Buatlah model matematis baru untuk memecahkan masalah ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Evaluasi & Kreasi Bilangan",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Langkah terbaik adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C6",
                "pertanyaan": "Rancanglah sebuah solusi unik!",
                "kunci": "Solusi yang benar"
              }
            }
          }
        ]
      },
      {
        "namaElemen": "Aljabar",
        "deskripsiCP": "Menemukan nilai yang tidak diketahui dalam kalimat matematika penjumlahan dan pengurangan bilangan cacah sampai 100 menggunakan sifat bilangan dan operasi; mengidentifikasi, meniru, dan mengembangkan pola gambar/objek sederhana serta pola bilangan membesar/mengecil yang melibatkan penjumlahan dan pengurangan sampai 100.",
        "kompetensiKKO": "Memahami, Menerapkan, Menganalisis",
        "lingkupMateri": "Materi esensial matematika",
        "tpList": [
          {
            "kodeTP": "TP.05",
            "teksTP": "Memahami konsep dasar Aljabar pada fase B sesuai dengan konteks yang diberikan.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "Materi sebelumnya",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Mengamati masalah sehari-hari berkaitan dengan Aljabar.",
              "masalahNyata": "Bagaimana cara menyelesaikan masalah Aljabar ini?",
              "kegiatanEksplorasi": [
                "Mendiskusikan materi Aljabar"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah penerapan konsep Aljabar!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Pemahaman Aljabar",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Konsep yang benar tentang Aljabar adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C3",
                "pertanyaan": "Jelaskan fungsi dari Aljabar!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.06",
            "teksTP": "Menerapkan pemahaman Aljabar untuk memecahkan masalah dalam kehidupan sehari-hari.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "TP.01",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menerapkan rumus dan aturan Aljabar.",
              "masalahNyata": "Dapatkah kamu memodelkan ini ke dalam bentuk matematika?",
              "kegiatanEksplorasi": [
                "Mengerjakan studi kasus Aljabar"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C5",
                  "teks": "Evaluasi keefektifan cara ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Aplikasi Aljabar",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Hasil aplikasi Aljabar adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Gunakan konsep ini untuk menyelesaikan masalah X!",
                "kunci": "Jawaban yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.07",
            "teksTP": "Menganalisis hubungan antar komponen dalam Aljabar secara sistematis dan logis.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.02",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Membandingkan dua kasus Aljabar yang berbeda.",
              "masalahNyata": "Apa perbedaan utama dari kedua metode ini?",
              "kegiatanEksplorasi": [
                "Membuat tabel analisis Aljabar"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah hubungan sebab-akibatnya!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Analisis Aljabar",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Perbedaan utama adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Jelaskan perbandingan keduanya!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.08",
            "teksTP": "Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi Aljabar.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.03",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menyajikan proyek mini berkaitan dengan Aljabar.",
              "masalahNyata": "Bagaimana cara mempresentasikan hasil rancanganmu?",
              "kegiatanEksplorasi": [
                "Membuat presentasi kelompok tentang Aljabar"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C6",
                  "teks": "Buatlah model matematis baru untuk memecahkan masalah ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Evaluasi & Kreasi Aljabar",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Langkah terbaik adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C6",
                "pertanyaan": "Rancanglah sebuah solusi unik!",
                "kunci": "Solusi yang benar"
              }
            }
          }
        ]
      },
      {
        "namaElemen": "Pengukuran",
        "deskripsiCP": "Mengukur panjang dan berat menggunakan satuan baku; hubungan antar-satuan panjang cm dan m serta berat g dan kg; mengukur dan mengestimasi luas/volume dengan satuan tidak baku dan baku berupa bilangan cacah.",
        "kompetensiKKO": "Memahami, Menerapkan, Menganalisis",
        "lingkupMateri": "Materi esensial matematika",
        "tpList": [
          {
            "kodeTP": "TP.09",
            "teksTP": "Memahami konsep dasar Pengukuran pada fase B sesuai dengan konteks yang diberikan.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "Materi sebelumnya",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Mengamati masalah sehari-hari berkaitan dengan Pengukuran.",
              "masalahNyata": "Bagaimana cara menyelesaikan masalah Pengukuran ini?",
              "kegiatanEksplorasi": [
                "Mendiskusikan materi Pengukuran"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah penerapan konsep Pengukuran!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Pemahaman Pengukuran",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Konsep yang benar tentang Pengukuran adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C3",
                "pertanyaan": "Jelaskan fungsi dari Pengukuran!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.10",
            "teksTP": "Menerapkan pemahaman Pengukuran untuk memecahkan masalah dalam kehidupan sehari-hari.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "TP.01",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menerapkan rumus dan aturan Pengukuran.",
              "masalahNyata": "Dapatkah kamu memodelkan ini ke dalam bentuk matematika?",
              "kegiatanEksplorasi": [
                "Mengerjakan studi kasus Pengukuran"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C5",
                  "teks": "Evaluasi keefektifan cara ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Aplikasi Pengukuran",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Hasil aplikasi Pengukuran adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Gunakan konsep ini untuk menyelesaikan masalah X!",
                "kunci": "Jawaban yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.11",
            "teksTP": "Menganalisis hubungan antar komponen dalam Pengukuran secara sistematis dan logis.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.02",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Membandingkan dua kasus Pengukuran yang berbeda.",
              "masalahNyata": "Apa perbedaan utama dari kedua metode ini?",
              "kegiatanEksplorasi": [
                "Membuat tabel analisis Pengukuran"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah hubungan sebab-akibatnya!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Analisis Pengukuran",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Perbedaan utama adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Jelaskan perbandingan keduanya!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.12",
            "teksTP": "Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi Pengukuran.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.03",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menyajikan proyek mini berkaitan dengan Pengukuran.",
              "masalahNyata": "Bagaimana cara mempresentasikan hasil rancanganmu?",
              "kegiatanEksplorasi": [
                "Membuat presentasi kelompok tentang Pengukuran"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C6",
                  "teks": "Buatlah model matematis baru untuk memecahkan masalah ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Evaluasi & Kreasi Pengukuran",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Langkah terbaik adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C6",
                "pertanyaan": "Rancanglah sebuah solusi unik!",
                "kunci": "Solusi yang benar"
              }
            }
          }
        ]
      },
      {
        "namaElemen": "Geometri",
        "deskripsiCP": "Mendeskripsikan ciri bangun datar (segiempat, segitiga, segi banyak); komposisi dan dekomposisi bangun datar dengan lebih dari satu cara jika memungkinkan.",
        "kompetensiKKO": "Memahami, Menerapkan, Menganalisis",
        "lingkupMateri": "Materi esensial matematika",
        "tpList": [
          {
            "kodeTP": "TP.13",
            "teksTP": "Memahami konsep dasar Geometri pada fase B sesuai dengan konteks yang diberikan.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "Materi sebelumnya",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Mengamati masalah sehari-hari berkaitan dengan Geometri.",
              "masalahNyata": "Bagaimana cara menyelesaikan masalah Geometri ini?",
              "kegiatanEksplorasi": [
                "Mendiskusikan materi Geometri"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah penerapan konsep Geometri!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Pemahaman Geometri",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Konsep yang benar tentang Geometri adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C3",
                "pertanyaan": "Jelaskan fungsi dari Geometri!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.14",
            "teksTP": "Menerapkan pemahaman Geometri untuk memecahkan masalah dalam kehidupan sehari-hari.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "TP.01",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menerapkan rumus dan aturan Geometri.",
              "masalahNyata": "Dapatkah kamu memodelkan ini ke dalam bentuk matematika?",
              "kegiatanEksplorasi": [
                "Mengerjakan studi kasus Geometri"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C5",
                  "teks": "Evaluasi keefektifan cara ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Aplikasi Geometri",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Hasil aplikasi Geometri adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Gunakan konsep ini untuk menyelesaikan masalah X!",
                "kunci": "Jawaban yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.15",
            "teksTP": "Menganalisis hubungan antar komponen dalam Geometri secara sistematis dan logis.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.02",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Membandingkan dua kasus Geometri yang berbeda.",
              "masalahNyata": "Apa perbedaan utama dari kedua metode ini?",
              "kegiatanEksplorasi": [
                "Membuat tabel analisis Geometri"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah hubungan sebab-akibatnya!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Analisis Geometri",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Perbedaan utama adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Jelaskan perbandingan keduanya!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.16",
            "teksTP": "Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi Geometri.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.03",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menyajikan proyek mini berkaitan dengan Geometri.",
              "masalahNyata": "Bagaimana cara mempresentasikan hasil rancanganmu?",
              "kegiatanEksplorasi": [
                "Membuat presentasi kelompok tentang Geometri"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C6",
                  "teks": "Buatlah model matematis baru untuk memecahkan masalah ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Evaluasi & Kreasi Geometri",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Langkah terbaik adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C6",
                "pertanyaan": "Rancanglah sebuah solusi unik!",
                "kunci": "Solusi yang benar"
              }
            }
          }
        ]
      },
      {
        "namaElemen": "Analisis Data dan Peluang",
        "deskripsiCP": "Mengurutkan, membandingkan, menyajikan, menganalisis, dan menginterpretasi data dalam tabel, diagram gambar, piktogram, dan diagram batang skala satu satuan.",
        "kompetensiKKO": "Memahami, Menerapkan, Menganalisis",
        "lingkupMateri": "Materi esensial matematika",
        "tpList": [
          {
            "kodeTP": "TP.17",
            "teksTP": "Memahami konsep dasar Analisis Data dan Peluang pada fase B sesuai dengan konteks yang diberikan.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "Materi sebelumnya",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Mengamati masalah sehari-hari berkaitan dengan Analisis Data dan Peluang.",
              "masalahNyata": "Bagaimana cara menyelesaikan masalah Analisis Data dan Peluang ini?",
              "kegiatanEksplorasi": [
                "Mendiskusikan materi Analisis Data dan Peluang"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah penerapan konsep Analisis Data dan Peluang!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Pemahaman Analisis Data dan Peluang",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Konsep yang benar tentang Analisis Data dan Peluang adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C3",
                "pertanyaan": "Jelaskan fungsi dari Analisis Data dan Peluang!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.18",
            "teksTP": "Menerapkan pemahaman Analisis Data dan Peluang untuk memecahkan masalah dalam kehidupan sehari-hari.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "TP.01",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menerapkan rumus dan aturan Analisis Data dan Peluang.",
              "masalahNyata": "Dapatkah kamu memodelkan ini ke dalam bentuk matematika?",
              "kegiatanEksplorasi": [
                "Mengerjakan studi kasus Analisis Data dan Peluang"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C5",
                  "teks": "Evaluasi keefektifan cara ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Aplikasi Analisis Data dan Peluang",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Hasil aplikasi Analisis Data dan Peluang adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Gunakan konsep ini untuk menyelesaikan masalah X!",
                "kunci": "Jawaban yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.19",
            "teksTP": "Menganalisis hubungan antar komponen dalam Analisis Data dan Peluang secara sistematis dan logis.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.02",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Membandingkan dua kasus Analisis Data dan Peluang yang berbeda.",
              "masalahNyata": "Apa perbedaan utama dari kedua metode ini?",
              "kegiatanEksplorasi": [
                "Membuat tabel analisis Analisis Data dan Peluang"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah hubungan sebab-akibatnya!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Analisis Analisis Data dan Peluang",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Perbedaan utama adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Jelaskan perbandingan keduanya!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.20",
            "teksTP": "Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi Analisis Data dan Peluang.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.03",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menyajikan proyek mini berkaitan dengan Analisis Data dan Peluang.",
              "masalahNyata": "Bagaimana cara mempresentasikan hasil rancanganmu?",
              "kegiatanEksplorasi": [
                "Membuat presentasi kelompok tentang Analisis Data dan Peluang"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C6",
                  "teks": "Buatlah model matematis baru untuk memecahkan masalah ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Evaluasi & Kreasi Analisis Data dan Peluang",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Langkah terbaik adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C6",
                "pertanyaan": "Rancanglah sebuah solusi unik!",
                "kunci": "Solusi yang benar"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "fase": "Fase C",
    "kelasDefault": "Kelas V",
    "mapel": "Matematika",
    "jalurApplicable": [
      "Dinas",
      "Kemenag"
    ],
    "elemenList": [
      {
        "namaElemen": "Bilangan",
        "deskripsiCP": "Number sense bilangan cacah sampai 1.000.000; membaca/menulis/nilai tempat/membandingkan/mengurutkan/komposisi/dekomposisi; masalah uang; operasi +, −, ×, ÷ bilangan cacah sampai 100.000; KPK dan FPB; perbandingan/pengurutan pecahan termasuk campuran; penjumlahan/pengurangan pecahan; perkalian/pembagian pecahan dengan bilangan asli; konversi berbagai bentuk pecahan; membandingkan/mengurutkan desimal satu angka di belakang koma.",
        "kompetensiKKO": "Memahami, Menerapkan, Menganalisis",
        "lingkupMateri": "Materi esensial matematika",
        "tpList": [
          {
            "kodeTP": "TP.01",
            "teksTP": "Memahami konsep dasar Bilangan pada fase C sesuai dengan konteks yang diberikan.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "Materi sebelumnya",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Mengamati masalah sehari-hari berkaitan dengan Bilangan.",
              "masalahNyata": "Bagaimana cara menyelesaikan masalah Bilangan ini?",
              "kegiatanEksplorasi": [
                "Mendiskusikan materi Bilangan"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah penerapan konsep Bilangan!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Pemahaman Bilangan",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Konsep yang benar tentang Bilangan adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C3",
                "pertanyaan": "Jelaskan fungsi dari Bilangan!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.02",
            "teksTP": "Menerapkan pemahaman Bilangan untuk memecahkan masalah dalam kehidupan sehari-hari.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "TP.01",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menerapkan rumus dan aturan Bilangan.",
              "masalahNyata": "Dapatkah kamu memodelkan ini ke dalam bentuk matematika?",
              "kegiatanEksplorasi": [
                "Mengerjakan studi kasus Bilangan"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C5",
                  "teks": "Evaluasi keefektifan cara ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Aplikasi Bilangan",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Hasil aplikasi Bilangan adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Gunakan konsep ini untuk menyelesaikan masalah X!",
                "kunci": "Jawaban yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.03",
            "teksTP": "Menganalisis hubungan antar komponen dalam Bilangan secara sistematis dan logis.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.02",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Membandingkan dua kasus Bilangan yang berbeda.",
              "masalahNyata": "Apa perbedaan utama dari kedua metode ini?",
              "kegiatanEksplorasi": [
                "Membuat tabel analisis Bilangan"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah hubungan sebab-akibatnya!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Analisis Bilangan",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Perbedaan utama adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Jelaskan perbandingan keduanya!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.04",
            "teksTP": "Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi Bilangan.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.03",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menyajikan proyek mini berkaitan dengan Bilangan.",
              "masalahNyata": "Bagaimana cara mempresentasikan hasil rancanganmu?",
              "kegiatanEksplorasi": [
                "Membuat presentasi kelompok tentang Bilangan"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C6",
                  "teks": "Buatlah model matematis baru untuk memecahkan masalah ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Evaluasi & Kreasi Bilangan",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Langkah terbaik adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C6",
                "pertanyaan": "Rancanglah sebuah solusi unik!",
                "kunci": "Solusi yang benar"
              }
            }
          }
        ]
      },
      {
        "namaElemen": "Aljabar",
        "deskripsiCP": "Menemukan nilai yang belum diketahui dalam kalimat matematika penjumlahan, pengurangan, perkalian, pembagian bilangan cacah sampai 1000 menggunakan sifat bilangan dan operasi; mengidentifikasi/meniru/mengembangkan pola bilangan membesar/mengecil dengan perkalian/pembagian; bernalar proporsional dengan rasio satuan; menggunakan perkalian/pembagian untuk masalah proporsi sehari-hari.",
        "kompetensiKKO": "Memahami, Menerapkan, Menganalisis",
        "lingkupMateri": "Materi esensial matematika",
        "tpList": [
          {
            "kodeTP": "TP.05",
            "teksTP": "Memahami konsep dasar Aljabar pada fase C sesuai dengan konteks yang diberikan.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "Materi sebelumnya",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Mengamati masalah sehari-hari berkaitan dengan Aljabar.",
              "masalahNyata": "Bagaimana cara menyelesaikan masalah Aljabar ini?",
              "kegiatanEksplorasi": [
                "Mendiskusikan materi Aljabar"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah penerapan konsep Aljabar!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Pemahaman Aljabar",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Konsep yang benar tentang Aljabar adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C3",
                "pertanyaan": "Jelaskan fungsi dari Aljabar!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.06",
            "teksTP": "Menerapkan pemahaman Aljabar untuk memecahkan masalah dalam kehidupan sehari-hari.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "TP.01",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menerapkan rumus dan aturan Aljabar.",
              "masalahNyata": "Dapatkah kamu memodelkan ini ke dalam bentuk matematika?",
              "kegiatanEksplorasi": [
                "Mengerjakan studi kasus Aljabar"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C5",
                  "teks": "Evaluasi keefektifan cara ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Aplikasi Aljabar",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Hasil aplikasi Aljabar adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Gunakan konsep ini untuk menyelesaikan masalah X!",
                "kunci": "Jawaban yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.07",
            "teksTP": "Menganalisis hubungan antar komponen dalam Aljabar secara sistematis dan logis.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.02",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Membandingkan dua kasus Aljabar yang berbeda.",
              "masalahNyata": "Apa perbedaan utama dari kedua metode ini?",
              "kegiatanEksplorasi": [
                "Membuat tabel analisis Aljabar"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah hubungan sebab-akibatnya!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Analisis Aljabar",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Perbedaan utama adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Jelaskan perbandingan keduanya!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.08",
            "teksTP": "Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi Aljabar.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.03",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menyajikan proyek mini berkaitan dengan Aljabar.",
              "masalahNyata": "Bagaimana cara mempresentasikan hasil rancanganmu?",
              "kegiatanEksplorasi": [
                "Membuat presentasi kelompok tentang Aljabar"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C6",
                  "teks": "Buatlah model matematis baru untuk memecahkan masalah ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Evaluasi & Kreasi Aljabar",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Langkah terbaik adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C6",
                "pertanyaan": "Rancanglah sebuah solusi unik!",
                "kunci": "Solusi yang benar"
              }
            }
          }
        ]
      },
      {
        "namaElemen": "Pengukuran",
        "deskripsiCP": "Menentukan keliling dan luas segitiga, segiempat, segi banyak serta gabungannya; menghitung durasi waktu; mengukur besar sudut pada bangun datar atau dari dua garis berpotongan.",
        "kompetensiKKO": "Memahami, Menerapkan, Menganalisis",
        "lingkupMateri": "Materi esensial matematika",
        "tpList": [
          {
            "kodeTP": "TP.09",
            "teksTP": "Memahami konsep dasar Pengukuran pada fase C sesuai dengan konteks yang diberikan.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "Materi sebelumnya",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Mengamati masalah sehari-hari berkaitan dengan Pengukuran.",
              "masalahNyata": "Bagaimana cara menyelesaikan masalah Pengukuran ini?",
              "kegiatanEksplorasi": [
                "Mendiskusikan materi Pengukuran"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah penerapan konsep Pengukuran!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Pemahaman Pengukuran",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Konsep yang benar tentang Pengukuran adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C3",
                "pertanyaan": "Jelaskan fungsi dari Pengukuran!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.10",
            "teksTP": "Menerapkan pemahaman Pengukuran untuk memecahkan masalah dalam kehidupan sehari-hari.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "TP.01",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menerapkan rumus dan aturan Pengukuran.",
              "masalahNyata": "Dapatkah kamu memodelkan ini ke dalam bentuk matematika?",
              "kegiatanEksplorasi": [
                "Mengerjakan studi kasus Pengukuran"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C5",
                  "teks": "Evaluasi keefektifan cara ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Aplikasi Pengukuran",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Hasil aplikasi Pengukuran adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Gunakan konsep ini untuk menyelesaikan masalah X!",
                "kunci": "Jawaban yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.11",
            "teksTP": "Menganalisis hubungan antar komponen dalam Pengukuran secara sistematis dan logis.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.02",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Membandingkan dua kasus Pengukuran yang berbeda.",
              "masalahNyata": "Apa perbedaan utama dari kedua metode ini?",
              "kegiatanEksplorasi": [
                "Membuat tabel analisis Pengukuran"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah hubungan sebab-akibatnya!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Analisis Pengukuran",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Perbedaan utama adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Jelaskan perbandingan keduanya!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.12",
            "teksTP": "Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi Pengukuran.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.03",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menyajikan proyek mini berkaitan dengan Pengukuran.",
              "masalahNyata": "Bagaimana cara mempresentasikan hasil rancanganmu?",
              "kegiatanEksplorasi": [
                "Membuat presentasi kelompok tentang Pengukuran"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C6",
                  "teks": "Buatlah model matematis baru untuk memecahkan masalah ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Evaluasi & Kreasi Pengukuran",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Langkah terbaik adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C6",
                "pertanyaan": "Rancanglah sebuah solusi unik!",
                "kunci": "Solusi yang benar"
              }
            }
          }
        ]
      },
      {
        "namaElemen": "Geometri",
        "deskripsiCP": "Mengkonstruksi dan mengurai kubus, balok, gabungan; visualisasi spasial bagian depan/atas/samping; membandingkan karakteristik bangun datar dan ruang; menentukan lokasi pada peta berpetak.",
        "kompetensiKKO": "Memahami, Menerapkan, Menganalisis",
        "lingkupMateri": "Materi esensial matematika",
        "tpList": [
          {
            "kodeTP": "TP.13",
            "teksTP": "Memahami konsep dasar Geometri pada fase C sesuai dengan konteks yang diberikan.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "Materi sebelumnya",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Mengamati masalah sehari-hari berkaitan dengan Geometri.",
              "masalahNyata": "Bagaimana cara menyelesaikan masalah Geometri ini?",
              "kegiatanEksplorasi": [
                "Mendiskusikan materi Geometri"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah penerapan konsep Geometri!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Pemahaman Geometri",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Konsep yang benar tentang Geometri adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C3",
                "pertanyaan": "Jelaskan fungsi dari Geometri!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.14",
            "teksTP": "Menerapkan pemahaman Geometri untuk memecahkan masalah dalam kehidupan sehari-hari.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "TP.01",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menerapkan rumus dan aturan Geometri.",
              "masalahNyata": "Dapatkah kamu memodelkan ini ke dalam bentuk matematika?",
              "kegiatanEksplorasi": [
                "Mengerjakan studi kasus Geometri"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C5",
                  "teks": "Evaluasi keefektifan cara ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Aplikasi Geometri",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Hasil aplikasi Geometri adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Gunakan konsep ini untuk menyelesaikan masalah X!",
                "kunci": "Jawaban yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.15",
            "teksTP": "Menganalisis hubungan antar komponen dalam Geometri secara sistematis dan logis.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.02",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Membandingkan dua kasus Geometri yang berbeda.",
              "masalahNyata": "Apa perbedaan utama dari kedua metode ini?",
              "kegiatanEksplorasi": [
                "Membuat tabel analisis Geometri"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah hubungan sebab-akibatnya!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Analisis Geometri",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Perbedaan utama adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Jelaskan perbandingan keduanya!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.16",
            "teksTP": "Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi Geometri.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.03",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menyajikan proyek mini berkaitan dengan Geometri.",
              "masalahNyata": "Bagaimana cara mempresentasikan hasil rancanganmu?",
              "kegiatanEksplorasi": [
                "Membuat presentasi kelompok tentang Geometri"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C6",
                  "teks": "Buatlah model matematis baru untuk memecahkan masalah ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Evaluasi & Kreasi Geometri",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Langkah terbaik adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C6",
                "pertanyaan": "Rancanglah sebuah solusi unik!",
                "kunci": "Solusi yang benar"
              }
            }
          }
        ]
      },
      {
        "namaElemen": "Analisis Data dan Peluang",
        "deskripsiCP": "Mengurutkan, membandingkan, menyajikan, menganalisis data banyak benda dan hasil pengukuran dalam gambar, piktogram, diagram batang, tabel frekuensi; menentukan kejadian dengan kemungkinan lebih besar/kecil dalam percobaan acak.",
        "kompetensiKKO": "Memahami, Menerapkan, Menganalisis",
        "lingkupMateri": "Materi esensial matematika",
        "tpList": [
          {
            "kodeTP": "TP.17",
            "teksTP": "Memahami konsep dasar Analisis Data dan Peluang pada fase C sesuai dengan konteks yang diberikan.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "Materi sebelumnya",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Mengamati masalah sehari-hari berkaitan dengan Analisis Data dan Peluang.",
              "masalahNyata": "Bagaimana cara menyelesaikan masalah Analisis Data dan Peluang ini?",
              "kegiatanEksplorasi": [
                "Mendiskusikan materi Analisis Data dan Peluang"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah penerapan konsep Analisis Data dan Peluang!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Pemahaman Analisis Data dan Peluang",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Konsep yang benar tentang Analisis Data dan Peluang adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C3",
                "pertanyaan": "Jelaskan fungsi dari Analisis Data dan Peluang!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.18",
            "teksTP": "Menerapkan pemahaman Analisis Data dan Peluang untuk memecahkan masalah dalam kehidupan sehari-hari.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "TP.01",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menerapkan rumus dan aturan Analisis Data dan Peluang.",
              "masalahNyata": "Dapatkah kamu memodelkan ini ke dalam bentuk matematika?",
              "kegiatanEksplorasi": [
                "Mengerjakan studi kasus Analisis Data dan Peluang"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C5",
                  "teks": "Evaluasi keefektifan cara ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Aplikasi Analisis Data dan Peluang",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Hasil aplikasi Analisis Data dan Peluang adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Gunakan konsep ini untuk menyelesaikan masalah X!",
                "kunci": "Jawaban yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.19",
            "teksTP": "Menganalisis hubungan antar komponen dalam Analisis Data dan Peluang secara sistematis dan logis.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.02",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Membandingkan dua kasus Analisis Data dan Peluang yang berbeda.",
              "masalahNyata": "Apa perbedaan utama dari kedua metode ini?",
              "kegiatanEksplorasi": [
                "Membuat tabel analisis Analisis Data dan Peluang"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah hubungan sebab-akibatnya!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Analisis Analisis Data dan Peluang",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Perbedaan utama adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Jelaskan perbandingan keduanya!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.20",
            "teksTP": "Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi Analisis Data dan Peluang.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.03",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menyajikan proyek mini berkaitan dengan Analisis Data dan Peluang.",
              "masalahNyata": "Bagaimana cara mempresentasikan hasil rancanganmu?",
              "kegiatanEksplorasi": [
                "Membuat presentasi kelompok tentang Analisis Data dan Peluang"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C6",
                  "teks": "Buatlah model matematis baru untuk memecahkan masalah ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Evaluasi & Kreasi Analisis Data dan Peluang",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Langkah terbaik adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C6",
                "pertanyaan": "Rancanglah sebuah solusi unik!",
                "kunci": "Solusi yang benar"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "fase": "Fase D",
    "kelasDefault": "Kelas VII",
    "mapel": "Matematika",
    "jalurApplicable": [
      "Dinas",
      "Kemenag"
    ],
    "elemenList": [
      {
        "namaElemen": "Bilangan",
        "deskripsiCP": "Bilangan bulat, rasional, desimal, berpangkat bulat dan akar, notasi ilmiah; operasi aritmatika bilangan real; estimasi/perkiraan termasuk literasi finansial; rasio meliputi skala, proporsi, laju perubahan.",
        "kompetensiKKO": "Memahami, Menerapkan, Menganalisis",
        "lingkupMateri": "Materi esensial matematika",
        "tpList": [
          {
            "kodeTP": "TP.01",
            "teksTP": "Memahami konsep dasar Bilangan pada fase D sesuai dengan konteks yang diberikan.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "Materi sebelumnya",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Mengamati masalah sehari-hari berkaitan dengan Bilangan.",
              "masalahNyata": "Bagaimana cara menyelesaikan masalah Bilangan ini?",
              "kegiatanEksplorasi": [
                "Mendiskusikan materi Bilangan"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah penerapan konsep Bilangan!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Pemahaman Bilangan",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Konsep yang benar tentang Bilangan adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C3",
                "pertanyaan": "Jelaskan fungsi dari Bilangan!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.02",
            "teksTP": "Menerapkan pemahaman Bilangan untuk memecahkan masalah dalam kehidupan sehari-hari.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "TP.01",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menerapkan rumus dan aturan Bilangan.",
              "masalahNyata": "Dapatkah kamu memodelkan ini ke dalam bentuk matematika?",
              "kegiatanEksplorasi": [
                "Mengerjakan studi kasus Bilangan"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C5",
                  "teks": "Evaluasi keefektifan cara ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Aplikasi Bilangan",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Hasil aplikasi Bilangan adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Gunakan konsep ini untuk menyelesaikan masalah X!",
                "kunci": "Jawaban yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.03",
            "teksTP": "Menganalisis hubungan antar komponen dalam Bilangan secara sistematis dan logis.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.02",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Membandingkan dua kasus Bilangan yang berbeda.",
              "masalahNyata": "Apa perbedaan utama dari kedua metode ini?",
              "kegiatanEksplorasi": [
                "Membuat tabel analisis Bilangan"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah hubungan sebab-akibatnya!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Analisis Bilangan",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Perbedaan utama adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Jelaskan perbandingan keduanya!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.04",
            "teksTP": "Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi Bilangan.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.03",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menyajikan proyek mini berkaitan dengan Bilangan.",
              "masalahNyata": "Bagaimana cara mempresentasikan hasil rancanganmu?",
              "kegiatanEksplorasi": [
                "Membuat presentasi kelompok tentang Bilangan"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C6",
                  "teks": "Buatlah model matematis baru untuk memecahkan masalah ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Evaluasi & Kreasi Bilangan",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Langkah terbaik adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C6",
                "pertanyaan": "Rancanglah sebuah solusi unik!",
                "kunci": "Solusi yang benar"
              }
            }
          }
        ]
      },
      {
        "namaElemen": "Aljabar",
        "deskripsiCP": "Mengenali, memprediksi, menggeneralisasi pola susunan benda dan bilangan; menyatakan situasi dalam bentuk aljabar; sifat operasi komutatif, asosiatif, distributif untuk bentuk ekuivalen; relasi dan fungsi (domain, kodomain, range) dengan diagram panah, tabel, pasangan berurutan, grafik; membedakan fungsi non-linear dan linear secara grafik; persamaan/pertidaksamaan linear satu variabel; masalah relasi, fungsi, persamaan linear; sistem persamaan linear dua variabel melalui beberapa cara.",
        "kompetensiKKO": "Memahami, Menerapkan, Menganalisis",
        "lingkupMateri": "Materi esensial matematika",
        "tpList": [
          {
            "kodeTP": "TP.05",
            "teksTP": "Memahami konsep dasar Aljabar pada fase D sesuai dengan konteks yang diberikan.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "Materi sebelumnya",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Mengamati masalah sehari-hari berkaitan dengan Aljabar.",
              "masalahNyata": "Bagaimana cara menyelesaikan masalah Aljabar ini?",
              "kegiatanEksplorasi": [
                "Mendiskusikan materi Aljabar"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah penerapan konsep Aljabar!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Pemahaman Aljabar",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Konsep yang benar tentang Aljabar adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C3",
                "pertanyaan": "Jelaskan fungsi dari Aljabar!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.06",
            "teksTP": "Menerapkan pemahaman Aljabar untuk memecahkan masalah dalam kehidupan sehari-hari.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "TP.01",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menerapkan rumus dan aturan Aljabar.",
              "masalahNyata": "Dapatkah kamu memodelkan ini ke dalam bentuk matematika?",
              "kegiatanEksplorasi": [
                "Mengerjakan studi kasus Aljabar"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C5",
                  "teks": "Evaluasi keefektifan cara ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Aplikasi Aljabar",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Hasil aplikasi Aljabar adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Gunakan konsep ini untuk menyelesaikan masalah X!",
                "kunci": "Jawaban yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.07",
            "teksTP": "Menganalisis hubungan antar komponen dalam Aljabar secara sistematis dan logis.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.02",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Membandingkan dua kasus Aljabar yang berbeda.",
              "masalahNyata": "Apa perbedaan utama dari kedua metode ini?",
              "kegiatanEksplorasi": [
                "Membuat tabel analisis Aljabar"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah hubungan sebab-akibatnya!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Analisis Aljabar",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Perbedaan utama adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Jelaskan perbandingan keduanya!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.08",
            "teksTP": "Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi Aljabar.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.03",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menyajikan proyek mini berkaitan dengan Aljabar.",
              "masalahNyata": "Bagaimana cara mempresentasikan hasil rancanganmu?",
              "kegiatanEksplorasi": [
                "Membuat presentasi kelompok tentang Aljabar"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C6",
                  "teks": "Buatlah model matematis baru untuk memecahkan masalah ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Evaluasi & Kreasi Aljabar",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Langkah terbaik adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C6",
                "pertanyaan": "Rancanglah sebuah solusi unik!",
                "kunci": "Solusi yang benar"
              }
            }
          }
        ]
      },
      {
        "namaElemen": "Pengukuran",
        "deskripsiCP": "Keliling, luas, panjang busur, sudut, luas juring lingkaran; luas permukaan dan volume prisma, tabung, bola, limas, kerucut; pengaruh perubahan proporsional terhadap panjang, sudut, luas, dan/atau volume.",
        "kompetensiKKO": "Memahami, Menerapkan, Menganalisis",
        "lingkupMateri": "Materi esensial matematika",
        "tpList": [
          {
            "kodeTP": "TP.09",
            "teksTP": "Memahami konsep dasar Pengukuran pada fase D sesuai dengan konteks yang diberikan.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "Materi sebelumnya",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Mengamati masalah sehari-hari berkaitan dengan Pengukuran.",
              "masalahNyata": "Bagaimana cara menyelesaikan masalah Pengukuran ini?",
              "kegiatanEksplorasi": [
                "Mendiskusikan materi Pengukuran"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah penerapan konsep Pengukuran!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Pemahaman Pengukuran",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Konsep yang benar tentang Pengukuran adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C3",
                "pertanyaan": "Jelaskan fungsi dari Pengukuran!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.10",
            "teksTP": "Menerapkan pemahaman Pengukuran untuk memecahkan masalah dalam kehidupan sehari-hari.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "TP.01",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menerapkan rumus dan aturan Pengukuran.",
              "masalahNyata": "Dapatkah kamu memodelkan ini ke dalam bentuk matematika?",
              "kegiatanEksplorasi": [
                "Mengerjakan studi kasus Pengukuran"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C5",
                  "teks": "Evaluasi keefektifan cara ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Aplikasi Pengukuran",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Hasil aplikasi Pengukuran adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Gunakan konsep ini untuk menyelesaikan masalah X!",
                "kunci": "Jawaban yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.11",
            "teksTP": "Menganalisis hubungan antar komponen dalam Pengukuran secara sistematis dan logis.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.02",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Membandingkan dua kasus Pengukuran yang berbeda.",
              "masalahNyata": "Apa perbedaan utama dari kedua metode ini?",
              "kegiatanEksplorasi": [
                "Membuat tabel analisis Pengukuran"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah hubungan sebab-akibatnya!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Analisis Pengukuran",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Perbedaan utama adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Jelaskan perbandingan keduanya!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.12",
            "teksTP": "Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi Pengukuran.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.03",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menyajikan proyek mini berkaitan dengan Pengukuran.",
              "masalahNyata": "Bagaimana cara mempresentasikan hasil rancanganmu?",
              "kegiatanEksplorasi": [
                "Membuat presentasi kelompok tentang Pengukuran"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C6",
                  "teks": "Buatlah model matematis baru untuk memecahkan masalah ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Evaluasi & Kreasi Pengukuran",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Langkah terbaik adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C6",
                "pertanyaan": "Rancanglah sebuah solusi unik!",
                "kunci": "Solusi yang benar"
              }
            }
          }
        ]
      },
      {
        "namaElemen": "Geometri",
        "deskripsiCP": "Jaring-jaring prisma, tabung, limas, kerucut; hubungan sudut pada dua garis berpotongan dan dua garis sejajar dipotong transversal; jumlah sudut segitiga; kekongruenan dan kesebangunan segitiga/segiempat; Teorema Pythagoras dan aplikasi termasuk bilangan irasional serta jarak dua titik pada koordinat Kartesius; transformasi tunggal refleksi, translasi, rotasi, dilatasi titik/garis/bangun datar pada koordinat Kartesius.",
        "kompetensiKKO": "Memahami, Menerapkan, Menganalisis",
        "lingkupMateri": "Materi esensial matematika",
        "tpList": [
          {
            "kodeTP": "TP.13",
            "teksTP": "Memahami konsep dasar Geometri pada fase D sesuai dengan konteks yang diberikan.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "Materi sebelumnya",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Mengamati masalah sehari-hari berkaitan dengan Geometri.",
              "masalahNyata": "Bagaimana cara menyelesaikan masalah Geometri ini?",
              "kegiatanEksplorasi": [
                "Mendiskusikan materi Geometri"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah penerapan konsep Geometri!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Pemahaman Geometri",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Konsep yang benar tentang Geometri adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C3",
                "pertanyaan": "Jelaskan fungsi dari Geometri!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.14",
            "teksTP": "Menerapkan pemahaman Geometri untuk memecahkan masalah dalam kehidupan sehari-hari.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "TP.01",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menerapkan rumus dan aturan Geometri.",
              "masalahNyata": "Dapatkah kamu memodelkan ini ke dalam bentuk matematika?",
              "kegiatanEksplorasi": [
                "Mengerjakan studi kasus Geometri"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C5",
                  "teks": "Evaluasi keefektifan cara ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Aplikasi Geometri",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Hasil aplikasi Geometri adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Gunakan konsep ini untuk menyelesaikan masalah X!",
                "kunci": "Jawaban yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.15",
            "teksTP": "Menganalisis hubungan antar komponen dalam Geometri secara sistematis dan logis.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.02",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Membandingkan dua kasus Geometri yang berbeda.",
              "masalahNyata": "Apa perbedaan utama dari kedua metode ini?",
              "kegiatanEksplorasi": [
                "Membuat tabel analisis Geometri"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah hubungan sebab-akibatnya!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Analisis Geometri",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Perbedaan utama adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Jelaskan perbandingan keduanya!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.16",
            "teksTP": "Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi Geometri.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.03",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menyajikan proyek mini berkaitan dengan Geometri.",
              "masalahNyata": "Bagaimana cara mempresentasikan hasil rancanganmu?",
              "kegiatanEksplorasi": [
                "Membuat presentasi kelompok tentang Geometri"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C6",
                  "teks": "Buatlah model matematis baru untuk memecahkan masalah ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Evaluasi & Kreasi Geometri",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Langkah terbaik adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C6",
                "pertanyaan": "Rancanglah sebuah solusi unik!",
                "kunci": "Solusi yang benar"
              }
            }
          }
        ]
      },
      {
        "namaElemen": "Analisis Data dan Peluang",
        "deskripsiCP": "Merumuskan pertanyaan, mengumpulkan, menyajikan, menganalisis data; diagram batang/lingkaran; sampel dan populasi; mean, median, modus, range; membandingkan kelompok data, memprediksi, membuat keputusan; menyelidiki perubahan ukuran pemusatan; peluang dan frekuensi relatif untuk frekuensi harapan satu kejadian dalam percobaan sederhana.",
        "kompetensiKKO": "Memahami, Menerapkan, Menganalisis",
        "lingkupMateri": "Materi esensial matematika",
        "tpList": [
          {
            "kodeTP": "TP.17",
            "teksTP": "Memahami konsep dasar Analisis Data dan Peluang pada fase D sesuai dengan konteks yang diberikan.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "Materi sebelumnya",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Mengamati masalah sehari-hari berkaitan dengan Analisis Data dan Peluang.",
              "masalahNyata": "Bagaimana cara menyelesaikan masalah Analisis Data dan Peluang ini?",
              "kegiatanEksplorasi": [
                "Mendiskusikan materi Analisis Data dan Peluang"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah penerapan konsep Analisis Data dan Peluang!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Pemahaman Analisis Data dan Peluang",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Konsep yang benar tentang Analisis Data dan Peluang adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C3",
                "pertanyaan": "Jelaskan fungsi dari Analisis Data dan Peluang!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.18",
            "teksTP": "Menerapkan pemahaman Analisis Data dan Peluang untuk memecahkan masalah dalam kehidupan sehari-hari.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "TP.01",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menerapkan rumus dan aturan Analisis Data dan Peluang.",
              "masalahNyata": "Dapatkah kamu memodelkan ini ke dalam bentuk matematika?",
              "kegiatanEksplorasi": [
                "Mengerjakan studi kasus Analisis Data dan Peluang"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C5",
                  "teks": "Evaluasi keefektifan cara ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Aplikasi Analisis Data dan Peluang",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Hasil aplikasi Analisis Data dan Peluang adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Gunakan konsep ini untuk menyelesaikan masalah X!",
                "kunci": "Jawaban yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.19",
            "teksTP": "Menganalisis hubungan antar komponen dalam Analisis Data dan Peluang secara sistematis dan logis.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.02",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Membandingkan dua kasus Analisis Data dan Peluang yang berbeda.",
              "masalahNyata": "Apa perbedaan utama dari kedua metode ini?",
              "kegiatanEksplorasi": [
                "Membuat tabel analisis Analisis Data dan Peluang"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah hubungan sebab-akibatnya!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Analisis Analisis Data dan Peluang",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Perbedaan utama adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Jelaskan perbandingan keduanya!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.20",
            "teksTP": "Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi Analisis Data dan Peluang.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.03",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menyajikan proyek mini berkaitan dengan Analisis Data dan Peluang.",
              "masalahNyata": "Bagaimana cara mempresentasikan hasil rancanganmu?",
              "kegiatanEksplorasi": [
                "Membuat presentasi kelompok tentang Analisis Data dan Peluang"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C6",
                  "teks": "Buatlah model matematis baru untuk memecahkan masalah ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Evaluasi & Kreasi Analisis Data dan Peluang",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Langkah terbaik adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C6",
                "pertanyaan": "Rancanglah sebuah solusi unik!",
                "kunci": "Solusi yang benar"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "fase": "Fase E",
    "kelasDefault": "Kelas X",
    "mapel": "Matematika",
    "jalurApplicable": [
      "Dinas",
      "Kemenag"
    ],
    "elemenList": [
      {
        "namaElemen": "Bilangan",
        "deskripsiCP": "Menggeneralisasi sifat-sifat bilangan berpangkat termasuk pangkat pecahan dan menggunakannya untuk menyelesaikan masalah.",
        "kompetensiKKO": "Memahami, Menerapkan, Menganalisis",
        "lingkupMateri": "Materi esensial matematika",
        "tpList": [
          {
            "kodeTP": "TP.01",
            "teksTP": "Memahami konsep dasar Bilangan pada fase E sesuai dengan konteks yang diberikan.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "Materi sebelumnya",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Mengamati masalah sehari-hari berkaitan dengan Bilangan.",
              "masalahNyata": "Bagaimana cara menyelesaikan masalah Bilangan ini?",
              "kegiatanEksplorasi": [
                "Mendiskusikan materi Bilangan"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah penerapan konsep Bilangan!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Pemahaman Bilangan",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Konsep yang benar tentang Bilangan adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C3",
                "pertanyaan": "Jelaskan fungsi dari Bilangan!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.02",
            "teksTP": "Menerapkan pemahaman Bilangan untuk memecahkan masalah dalam kehidupan sehari-hari.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "TP.01",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menerapkan rumus dan aturan Bilangan.",
              "masalahNyata": "Dapatkah kamu memodelkan ini ke dalam bentuk matematika?",
              "kegiatanEksplorasi": [
                "Mengerjakan studi kasus Bilangan"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C5",
                  "teks": "Evaluasi keefektifan cara ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Aplikasi Bilangan",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Hasil aplikasi Bilangan adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Gunakan konsep ini untuk menyelesaikan masalah X!",
                "kunci": "Jawaban yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.03",
            "teksTP": "Menganalisis hubungan antar komponen dalam Bilangan secara sistematis dan logis.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.02",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Membandingkan dua kasus Bilangan yang berbeda.",
              "masalahNyata": "Apa perbedaan utama dari kedua metode ini?",
              "kegiatanEksplorasi": [
                "Membuat tabel analisis Bilangan"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah hubungan sebab-akibatnya!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Analisis Bilangan",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Perbedaan utama adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Jelaskan perbandingan keduanya!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.04",
            "teksTP": "Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi Bilangan.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.03",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menyajikan proyek mini berkaitan dengan Bilangan.",
              "masalahNyata": "Bagaimana cara mempresentasikan hasil rancanganmu?",
              "kegiatanEksplorasi": [
                "Membuat presentasi kelompok tentang Bilangan"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C6",
                  "teks": "Buatlah model matematis baru untuk memecahkan masalah ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Evaluasi & Kreasi Bilangan",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Langkah terbaik adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C6",
                "pertanyaan": "Rancanglah sebuah solusi unik!",
                "kunci": "Solusi yang benar"
              }
            }
          }
        ]
      },
      {
        "namaElemen": "Aljabar dan Fungsi",
        "deskripsiCP": "Menyelesaikan masalah sistem pertidaksamaan linear dua variabel; persamaan dan fungsi kuadrat termasuk akar imajiner; persamaan eksponensial berbasis/bilangan pokok sama dan fungsi eksponensial.",
        "kompetensiKKO": "Memahami, Menerapkan, Menganalisis",
        "lingkupMateri": "Materi esensial matematika",
        "tpList": [
          {
            "kodeTP": "TP.05",
            "teksTP": "Memahami konsep dasar Aljabar dan Fungsi pada fase E sesuai dengan konteks yang diberikan.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "Materi sebelumnya",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Mengamati masalah sehari-hari berkaitan dengan Aljabar dan Fungsi.",
              "masalahNyata": "Bagaimana cara menyelesaikan masalah Aljabar dan Fungsi ini?",
              "kegiatanEksplorasi": [
                "Mendiskusikan materi Aljabar dan Fungsi"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah penerapan konsep Aljabar dan Fungsi!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Pemahaman Aljabar dan Fungsi",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Konsep yang benar tentang Aljabar dan Fungsi adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C3",
                "pertanyaan": "Jelaskan fungsi dari Aljabar dan Fungsi!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.06",
            "teksTP": "Menerapkan pemahaman Aljabar dan Fungsi untuk memecahkan masalah dalam kehidupan sehari-hari.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "TP.01",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menerapkan rumus dan aturan Aljabar dan Fungsi.",
              "masalahNyata": "Dapatkah kamu memodelkan ini ke dalam bentuk matematika?",
              "kegiatanEksplorasi": [
                "Mengerjakan studi kasus Aljabar dan Fungsi"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C5",
                  "teks": "Evaluasi keefektifan cara ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Aplikasi Aljabar dan Fungsi",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Hasil aplikasi Aljabar dan Fungsi adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Gunakan konsep ini untuk menyelesaikan masalah X!",
                "kunci": "Jawaban yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.07",
            "teksTP": "Menganalisis hubungan antar komponen dalam Aljabar dan Fungsi secara sistematis dan logis.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.02",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Membandingkan dua kasus Aljabar dan Fungsi yang berbeda.",
              "masalahNyata": "Apa perbedaan utama dari kedua metode ini?",
              "kegiatanEksplorasi": [
                "Membuat tabel analisis Aljabar dan Fungsi"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah hubungan sebab-akibatnya!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Analisis Aljabar dan Fungsi",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Perbedaan utama adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Jelaskan perbandingan keduanya!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.08",
            "teksTP": "Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi Aljabar dan Fungsi.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.03",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menyajikan proyek mini berkaitan dengan Aljabar dan Fungsi.",
              "masalahNyata": "Bagaimana cara mempresentasikan hasil rancanganmu?",
              "kegiatanEksplorasi": [
                "Membuat presentasi kelompok tentang Aljabar dan Fungsi"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C6",
                  "teks": "Buatlah model matematis baru untuk memecahkan masalah ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Evaluasi & Kreasi Aljabar dan Fungsi",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Langkah terbaik adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C6",
                "pertanyaan": "Rancanglah sebuah solusi unik!",
                "kunci": "Solusi yang benar"
              }
            }
          }
        ]
      },
      {
        "namaElemen": "Geometri",
        "deskripsiCP": "Mengaplikasikan perbandingan trigonometri sinus, cosinus, tangen pada sudut lancip.",
        "kompetensiKKO": "Memahami, Menerapkan, Menganalisis",
        "lingkupMateri": "Materi esensial matematika",
        "tpList": [
          {
            "kodeTP": "TP.09",
            "teksTP": "Memahami konsep dasar Geometri pada fase E sesuai dengan konteks yang diberikan.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "Materi sebelumnya",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Mengamati masalah sehari-hari berkaitan dengan Geometri.",
              "masalahNyata": "Bagaimana cara menyelesaikan masalah Geometri ini?",
              "kegiatanEksplorasi": [
                "Mendiskusikan materi Geometri"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah penerapan konsep Geometri!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Pemahaman Geometri",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Konsep yang benar tentang Geometri adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C3",
                "pertanyaan": "Jelaskan fungsi dari Geometri!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.10",
            "teksTP": "Menerapkan pemahaman Geometri untuk memecahkan masalah dalam kehidupan sehari-hari.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "TP.01",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menerapkan rumus dan aturan Geometri.",
              "masalahNyata": "Dapatkah kamu memodelkan ini ke dalam bentuk matematika?",
              "kegiatanEksplorasi": [
                "Mengerjakan studi kasus Geometri"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C5",
                  "teks": "Evaluasi keefektifan cara ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Aplikasi Geometri",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Hasil aplikasi Geometri adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Gunakan konsep ini untuk menyelesaikan masalah X!",
                "kunci": "Jawaban yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.11",
            "teksTP": "Menganalisis hubungan antar komponen dalam Geometri secara sistematis dan logis.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.02",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Membandingkan dua kasus Geometri yang berbeda.",
              "masalahNyata": "Apa perbedaan utama dari kedua metode ini?",
              "kegiatanEksplorasi": [
                "Membuat tabel analisis Geometri"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah hubungan sebab-akibatnya!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Analisis Geometri",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Perbedaan utama adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Jelaskan perbandingan keduanya!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.12",
            "teksTP": "Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi Geometri.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.03",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menyajikan proyek mini berkaitan dengan Geometri.",
              "masalahNyata": "Bagaimana cara mempresentasikan hasil rancanganmu?",
              "kegiatanEksplorasi": [
                "Membuat presentasi kelompok tentang Geometri"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C6",
                  "teks": "Buatlah model matematis baru untuk memecahkan masalah ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Evaluasi & Kreasi Geometri",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Langkah terbaik adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C6",
                "pertanyaan": "Rancanglah sebuah solusi unik!",
                "kunci": "Solusi yang benar"
              }
            }
          }
        ]
      },
      {
        "namaElemen": "Analisis Data dan Peluang",
        "deskripsiCP": "Jangkauan kuartil dan interkuartil; box plot; memilih/menggunakan box plot, histogram, dot plot sesuai karakteristik data; diagram pencar untuk hubungan dua variabel numerik/kuantitatif termasuk waktu; mengevaluasi laporan statistika di media termasuk tampilan, statistika, representasi data dan matriks.",
        "kompetensiKKO": "Memahami, Menerapkan, Menganalisis",
        "lingkupMateri": "Materi esensial matematika",
        "tpList": [
          {
            "kodeTP": "TP.13",
            "teksTP": "Memahami konsep dasar Analisis Data dan Peluang pada fase E sesuai dengan konteks yang diberikan.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "Materi sebelumnya",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Mengamati masalah sehari-hari berkaitan dengan Analisis Data dan Peluang.",
              "masalahNyata": "Bagaimana cara menyelesaikan masalah Analisis Data dan Peluang ini?",
              "kegiatanEksplorasi": [
                "Mendiskusikan materi Analisis Data dan Peluang"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah penerapan konsep Analisis Data dan Peluang!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Pemahaman Analisis Data dan Peluang",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Konsep yang benar tentang Analisis Data dan Peluang adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C3",
                "pertanyaan": "Jelaskan fungsi dari Analisis Data dan Peluang!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.14",
            "teksTP": "Menerapkan pemahaman Analisis Data dan Peluang untuk memecahkan masalah dalam kehidupan sehari-hari.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "TP.01",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menerapkan rumus dan aturan Analisis Data dan Peluang.",
              "masalahNyata": "Dapatkah kamu memodelkan ini ke dalam bentuk matematika?",
              "kegiatanEksplorasi": [
                "Mengerjakan studi kasus Analisis Data dan Peluang"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C5",
                  "teks": "Evaluasi keefektifan cara ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Aplikasi Analisis Data dan Peluang",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Hasil aplikasi Analisis Data dan Peluang adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Gunakan konsep ini untuk menyelesaikan masalah X!",
                "kunci": "Jawaban yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.15",
            "teksTP": "Menganalisis hubungan antar komponen dalam Analisis Data dan Peluang secara sistematis dan logis.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.02",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Membandingkan dua kasus Analisis Data dan Peluang yang berbeda.",
              "masalahNyata": "Apa perbedaan utama dari kedua metode ini?",
              "kegiatanEksplorasi": [
                "Membuat tabel analisis Analisis Data dan Peluang"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah hubungan sebab-akibatnya!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Analisis Analisis Data dan Peluang",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Perbedaan utama adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Jelaskan perbandingan keduanya!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.16",
            "teksTP": "Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi Analisis Data dan Peluang.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.03",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menyajikan proyek mini berkaitan dengan Analisis Data dan Peluang.",
              "masalahNyata": "Bagaimana cara mempresentasikan hasil rancanganmu?",
              "kegiatanEksplorasi": [
                "Membuat presentasi kelompok tentang Analisis Data dan Peluang"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C6",
                  "teks": "Buatlah model matematis baru untuk memecahkan masalah ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Evaluasi & Kreasi Analisis Data dan Peluang",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Langkah terbaik adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C6",
                "pertanyaan": "Rancanglah sebuah solusi unik!",
                "kunci": "Solusi yang benar"
              }
            }
          }
        ]
      }
    ]
  },
  {
    "fase": "Fase F",
    "kelasDefault": "Kelas XI",
    "mapel": "Matematika",
    "jalurApplicable": [
      "Dinas",
      "Kemenag"
    ],
    "elemenList": [
      {
        "namaElemen": "Bilangan",
        "deskripsiCP": "Barisan dan deret aritmetika/geometri; aplikasi pada bunga tunggal/majemuk; memodelkan pinjaman dan investasi dengan bunga majemuk dan anuitas; menyelidiki secara numerik/grafis pengaruh suku bunga dan periode pembayaran.",
        "kompetensiKKO": "Memahami, Menerapkan, Menganalisis",
        "lingkupMateri": "Materi esensial matematika",
        "tpList": [
          {
            "kodeTP": "TP.01",
            "teksTP": "Memahami konsep dasar Bilangan pada fase F sesuai dengan konteks yang diberikan.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "Materi sebelumnya",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Mengamati masalah sehari-hari berkaitan dengan Bilangan.",
              "masalahNyata": "Bagaimana cara menyelesaikan masalah Bilangan ini?",
              "kegiatanEksplorasi": [
                "Mendiskusikan materi Bilangan"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah penerapan konsep Bilangan!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Pemahaman Bilangan",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Konsep yang benar tentang Bilangan adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C3",
                "pertanyaan": "Jelaskan fungsi dari Bilangan!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.02",
            "teksTP": "Menerapkan pemahaman Bilangan untuk memecahkan masalah dalam kehidupan sehari-hari.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "TP.01",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menerapkan rumus dan aturan Bilangan.",
              "masalahNyata": "Dapatkah kamu memodelkan ini ke dalam bentuk matematika?",
              "kegiatanEksplorasi": [
                "Mengerjakan studi kasus Bilangan"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C5",
                  "teks": "Evaluasi keefektifan cara ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Aplikasi Bilangan",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Hasil aplikasi Bilangan adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Gunakan konsep ini untuk menyelesaikan masalah X!",
                "kunci": "Jawaban yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.03",
            "teksTP": "Menganalisis hubungan antar komponen dalam Bilangan secara sistematis dan logis.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.02",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Membandingkan dua kasus Bilangan yang berbeda.",
              "masalahNyata": "Apa perbedaan utama dari kedua metode ini?",
              "kegiatanEksplorasi": [
                "Membuat tabel analisis Bilangan"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah hubungan sebab-akibatnya!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Analisis Bilangan",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Perbedaan utama adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Jelaskan perbandingan keduanya!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.04",
            "teksTP": "Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi Bilangan.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.03",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menyajikan proyek mini berkaitan dengan Bilangan.",
              "masalahNyata": "Bagaimana cara mempresentasikan hasil rancanganmu?",
              "kegiatanEksplorasi": [
                "Membuat presentasi kelompok tentang Bilangan"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C6",
                  "teks": "Buatlah model matematis baru untuk memecahkan masalah ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Evaluasi & Kreasi Bilangan",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Langkah terbaik adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C6",
                "pertanyaan": "Rancanglah sebuah solusi unik!",
                "kunci": "Solusi yang benar"
              }
            }
          }
        ]
      },
      {
        "namaElemen": "Aljabar dan Fungsi",
        "deskripsiCP": "Menentukan fungsi invers, komposisi fungsi, dan transformasi fungsi untuk memodelkan situasi dunia nyata menggunakan fungsi yang sesuai (linear, kuadrat, eksponensial).",
        "kompetensiKKO": "Memahami, Menerapkan, Menganalisis",
        "lingkupMateri": "Materi esensial matematika",
        "tpList": [
          {
            "kodeTP": "TP.05",
            "teksTP": "Memahami konsep dasar Aljabar dan Fungsi pada fase F sesuai dengan konteks yang diberikan.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "Materi sebelumnya",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Mengamati masalah sehari-hari berkaitan dengan Aljabar dan Fungsi.",
              "masalahNyata": "Bagaimana cara menyelesaikan masalah Aljabar dan Fungsi ini?",
              "kegiatanEksplorasi": [
                "Mendiskusikan materi Aljabar dan Fungsi"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah penerapan konsep Aljabar dan Fungsi!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Pemahaman Aljabar dan Fungsi",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Konsep yang benar tentang Aljabar dan Fungsi adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C3",
                "pertanyaan": "Jelaskan fungsi dari Aljabar dan Fungsi!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.06",
            "teksTP": "Menerapkan pemahaman Aljabar dan Fungsi untuk memecahkan masalah dalam kehidupan sehari-hari.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "TP.01",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menerapkan rumus dan aturan Aljabar dan Fungsi.",
              "masalahNyata": "Dapatkah kamu memodelkan ini ke dalam bentuk matematika?",
              "kegiatanEksplorasi": [
                "Mengerjakan studi kasus Aljabar dan Fungsi"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C5",
                  "teks": "Evaluasi keefektifan cara ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Aplikasi Aljabar dan Fungsi",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Hasil aplikasi Aljabar dan Fungsi adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Gunakan konsep ini untuk menyelesaikan masalah X!",
                "kunci": "Jawaban yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.07",
            "teksTP": "Menganalisis hubungan antar komponen dalam Aljabar dan Fungsi secara sistematis dan logis.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.02",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Membandingkan dua kasus Aljabar dan Fungsi yang berbeda.",
              "masalahNyata": "Apa perbedaan utama dari kedua metode ini?",
              "kegiatanEksplorasi": [
                "Membuat tabel analisis Aljabar dan Fungsi"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah hubungan sebab-akibatnya!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Analisis Aljabar dan Fungsi",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Perbedaan utama adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Jelaskan perbandingan keduanya!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.08",
            "teksTP": "Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi Aljabar dan Fungsi.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.03",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menyajikan proyek mini berkaitan dengan Aljabar dan Fungsi.",
              "masalahNyata": "Bagaimana cara mempresentasikan hasil rancanganmu?",
              "kegiatanEksplorasi": [
                "Membuat presentasi kelompok tentang Aljabar dan Fungsi"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C6",
                  "teks": "Buatlah model matematis baru untuk memecahkan masalah ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Evaluasi & Kreasi Aljabar dan Fungsi",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Langkah terbaik adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C6",
                "pertanyaan": "Rancanglah sebuah solusi unik!",
                "kunci": "Solusi yang benar"
              }
            }
          }
        ]
      },
      {
        "namaElemen": "Geometri",
        "deskripsiCP": "Menerapkan, mengidentifikasi, dan menjelaskan hubungan antara unsur-unsur lingkaran untuk menyelesaikan masalah.",
        "kompetensiKKO": "Memahami, Menerapkan, Menganalisis",
        "lingkupMateri": "Materi esensial matematika",
        "tpList": [
          {
            "kodeTP": "TP.09",
            "teksTP": "Memahami konsep dasar Geometri pada fase F sesuai dengan konteks yang diberikan.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "Materi sebelumnya",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Mengamati masalah sehari-hari berkaitan dengan Geometri.",
              "masalahNyata": "Bagaimana cara menyelesaikan masalah Geometri ini?",
              "kegiatanEksplorasi": [
                "Mendiskusikan materi Geometri"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah penerapan konsep Geometri!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Pemahaman Geometri",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Konsep yang benar tentang Geometri adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C3",
                "pertanyaan": "Jelaskan fungsi dari Geometri!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.10",
            "teksTP": "Menerapkan pemahaman Geometri untuk memecahkan masalah dalam kehidupan sehari-hari.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "TP.01",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menerapkan rumus dan aturan Geometri.",
              "masalahNyata": "Dapatkah kamu memodelkan ini ke dalam bentuk matematika?",
              "kegiatanEksplorasi": [
                "Mengerjakan studi kasus Geometri"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C5",
                  "teks": "Evaluasi keefektifan cara ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Aplikasi Geometri",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Hasil aplikasi Geometri adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Gunakan konsep ini untuk menyelesaikan masalah X!",
                "kunci": "Jawaban yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.11",
            "teksTP": "Menganalisis hubungan antar komponen dalam Geometri secara sistematis dan logis.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.02",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Membandingkan dua kasus Geometri yang berbeda.",
              "masalahNyata": "Apa perbedaan utama dari kedua metode ini?",
              "kegiatanEksplorasi": [
                "Membuat tabel analisis Geometri"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah hubungan sebab-akibatnya!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Analisis Geometri",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Perbedaan utama adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Jelaskan perbandingan keduanya!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.12",
            "teksTP": "Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi Geometri.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.03",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menyajikan proyek mini berkaitan dengan Geometri.",
              "masalahNyata": "Bagaimana cara mempresentasikan hasil rancanganmu?",
              "kegiatanEksplorasi": [
                "Membuat presentasi kelompok tentang Geometri"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C6",
                  "teks": "Buatlah model matematis baru untuk memecahkan masalah ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Evaluasi & Kreasi Geometri",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Langkah terbaik adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C6",
                "pertanyaan": "Rancanglah sebuah solusi unik!",
                "kunci": "Solusi yang benar"
              }
            }
          }
        ]
      },
      {
        "namaElemen": "Analisis Data dan Peluang",
        "deskripsiCP": "Penyelidikan statistika untuk asosiasi dua variabel kategorikal dan numerikal; memperkirakan best fit linear; membedakan asosiasi dan sebab-akibat; peluang/frekuensi harapan kejadian majemuk; kejadian saling bebas dan saling lepas; peluang bersyarat dan kejadian saling bebas menggunakan permutasi dan kombinasi.",
        "kompetensiKKO": "Memahami, Menerapkan, Menganalisis",
        "lingkupMateri": "Materi esensial matematika",
        "tpList": [
          {
            "kodeTP": "TP.13",
            "teksTP": "Memahami konsep dasar Analisis Data dan Peluang pada fase F sesuai dengan konteks yang diberikan.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "Materi sebelumnya",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Mengamati masalah sehari-hari berkaitan dengan Analisis Data dan Peluang.",
              "masalahNyata": "Bagaimana cara menyelesaikan masalah Analisis Data dan Peluang ini?",
              "kegiatanEksplorasi": [
                "Mendiskusikan materi Analisis Data dan Peluang"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah penerapan konsep Analisis Data dan Peluang!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Pemahaman Analisis Data dan Peluang",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Konsep yang benar tentang Analisis Data dan Peluang adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C3",
                "pertanyaan": "Jelaskan fungsi dari Analisis Data dan Peluang!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.14",
            "teksTP": "Menerapkan pemahaman Analisis Data dan Peluang untuk memecahkan masalah dalam kehidupan sehari-hari.",
            "alokasiJP": 6,
            "semester": "GANJIL",
            "prasyarat": "TP.01",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menerapkan rumus dan aturan Analisis Data dan Peluang.",
              "masalahNyata": "Dapatkah kamu memodelkan ini ke dalam bentuk matematika?",
              "kegiatanEksplorasi": [
                "Mengerjakan studi kasus Analisis Data dan Peluang"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C5",
                  "teks": "Evaluasi keefektifan cara ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Aplikasi Analisis Data dan Peluang",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Hasil aplikasi Analisis Data dan Peluang adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Gunakan konsep ini untuk menyelesaikan masalah X!",
                "kunci": "Jawaban yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.15",
            "teksTP": "Menganalisis hubungan antar komponen dalam Analisis Data dan Peluang secara sistematis dan logis.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.02",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Membandingkan dua kasus Analisis Data dan Peluang yang berbeda.",
              "masalahNyata": "Apa perbedaan utama dari kedua metode ini?",
              "kegiatanEksplorasi": [
                "Membuat tabel analisis Analisis Data dan Peluang"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C4",
                  "teks": "Analisislah hubungan sebab-akibatnya!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Analisis Analisis Data dan Peluang",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Perbedaan utama adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C4",
                "pertanyaan": "Jelaskan perbandingan keduanya!",
                "kunci": "Penjelasan yang benar"
              }
            }
          },
          {
            "kodeTP": "TP.16",
            "teksTP": "Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi Analisis Data dan Peluang.",
            "alokasiJP": 6,
            "semester": "GENAP",
            "prasyarat": "TP.03",
            "dimensiKarakterDinas": [
              "Penalaran Kritis",
              "Kemandirian"
            ],
            "dimensiKarakterKemenag": [
              "Cinta Ilmu",
              "Ketelitian"
            ],
            "konteksPembelajaran": {
              "stimulus": "Menyajikan proyek mini berkaitan dengan Analisis Data dan Peluang.",
              "masalahNyata": "Bagaimana cara mempresentasikan hasil rancanganmu?",
              "kegiatanEksplorasi": [
                "Membuat presentasi kelompok tentang Analisis Data dan Peluang"
              ],
              "pertanyaanHOTS": [
                {
                  "level": "C6",
                  "teks": "Buatlah model matematis baru untuk memecahkan masalah ini!"
                }
              ],
              "rubrikIndikator": [
                {
                  "kriteria": "Evaluasi & Kreasi Analisis Data dan Peluang",
                  "baru": "Belum",
                  "layak": "Cukup",
                  "cakap": "Baik",
                  "mahir": "Sangat Baik"
                }
              ],
              "soalPGK": {
                "pertanyaan": "Langkah terbaik adalah...",
                "pilihan": [
                  {
                    "kode": "A",
                    "teks": "Pilihan yang benar",
                    "isCorrect": true
                  }
                ],
                "kunci": "A"
              },
              "soalUraian": {
                "level": "C6",
                "pertanyaan": "Rancanglah sebuah solusi unik!",
                "kunci": "Solusi yang benar"
              }
            }
          }
        ]
      }
    ]
  }
];
