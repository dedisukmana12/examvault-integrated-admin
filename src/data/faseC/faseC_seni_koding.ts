// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import { CPDataset } from "../curriculumDatabase";

export const FASE_C_SENI_KODING_DATASETS: CPDataset[] = [
  // 1. Koding dan Kecerdasan Artifisial (KA) - [Mata Pelajaran Pilihan Fase C - BSKAP No. 046/H/KR/2025]
  {
    fase: "Fase C",
    kelasDefault: "Kelas V",
    mapel: "Koding dan Kecerdasan Artifisial (KA)",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Berpikir Komputasional (Computational Thinking)",
        deskripsiCP:
          "Peserta didik mampu menerapkan berpikir komputasional untuk menghasilkan solusi terhadap persoalan sehari-hari melalui dekomposisi masalah, pengenalan pola berulang, abstraksi fakta esensial, dan perancangan algoritma langkah terurut secara logis baik tanpa komputer (unplugged) maupun dengan komputer.",
        kompetensiKKO: "Menerapkan Dekomposisi, Mengenali Pola Berulang, Merancang Algoritma Terurut (Unplugged & Plugged)",
        lingkupMateri: "4 Fondasi Berpikir Komputasional (Dekomposisi, Pola, Abstraksi, Algoritma), Flowchart Logika Percabangan",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menerapkan 4 pilar berpikir komputasional (dekomposisi, pengenalan pola, abstraksi, dan algoritma) dalam memecahkan masalah logika sehari-hari dan merancang alur diagram alir (flowchart).",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Mampu menyusun langkah-langkah kerja berurutan",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu Teknologi", "PPRA: Dinamis & Inovatif (Tathawwur wa Ibtikar)"],
            konteksPembelajaran: {
              stimulus: "Menyusun algoritma optimasi rute terpendek pengiriman paket kurir pos keliling kota dan simulasi logika lampu lalu lintas otomatis di perempatan jalan.",
              stimulusKemenag: "Berpikir runtut dan sistematis adalah anugerah akal budi untuk menyelesaikan kesulitan manusia secara efektif dan berfaedah.",
              masalahNyata: "Bagaimana cara memecah (dekomposisi) masalah merapikan perpustakaan sekolah yang berantakan menjadi langkah-langkah kecil yang dapat dikerjakan secara paralel?",
              kegiatanEksplorasi: [
                "Permainan kartu logika *unplugged*: menyusun balok perintah algoritma mengarahkan robot melewati labirin rintangan.",
                "Membuat diagram alir (flowchart) dengan simbol Terminator, Process, Decision (Percabangan IF-ELSE).",
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Logika",
                  teks: "Evaluasilah kelebihan perancangan algoritma menggunakan struktur percabangan (IF-THEN-ELSE) dibandingkan instruksi sekuensial lurus dalam menangani kondisi cuaca tak terduga!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Penerapan 4 fondasi berpikir komputasional",
                  baru: "Menulis langkah kerja acak tanpa urutan yang logis.",
                  layak: "Mampu menjelaskan arti dekomposisi dan algoritma.",
                  cakap: "Mampu memetakan pola masalah dan membuat flowchart dengan simbol standar yang benar.",
                  mahir: "Mampu mengidentifikasi kesalahan logika (debugging) pada algoritma kompleks dan mengoptimalkan efisiensi langkah kerja.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah 4 pilar utama dalam BERPIKIR KOMPUTASIONAL (Computational Thinking)? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Dekomposisi (memecah masalah besar menjadi bagian-bagian kecil yang mudah dikelola).", isCorrect: true },
                  { kode: "B", teks: "Pengenalan Pola (mencari kesamaan atau keteraturan pada data masalah).", isCorrect: true },
                  { kode: "C", teks: "Abstraksi (fokus pada informasi penting dan mengabaikan detail yang tidak relevan).", isCorrect: true },
                  { kode: "D", teks: "Algoritma (merancang langkah-langkah terurut untuk menyelesaikan persoalan).", isCorrect: true },
                ],
                kunci: "A, B, C, dan D",
                pembahasan: "Empat fondasi berpikir komputasional adalah: Dekomposisi, Pengenalan Pola, Abstraksi, dan Perancangan Algoritma.",
              },
              soalUraian: {
                level: "C4 (Penerapan Dekomposisi & Algoritma)",
                pertanyaan: "Terapkan prinsip 'Dekomposisi' untuk memecah proyek pembuatan 'Aplikasi Kuis Pintar Sains Kelas V' menjadi 4 sub-tugas yang terstruktur!",
                kunci: "4 Sub-tugas Dekomposisi: 1. Penyusunan Konten: Mengumpulkan bank soal sains beserta kunci jawaban dan pembahasannya. 2. Desain Tampilan (UI): Merancang tata letak layar pembuka, tombol pilihan ganda A-B-C-D, dan papan skor. 3. Logika Pemrograman: Menulis kode logika penilaian (jika jawaban benar skor +10, jika salah skor +0). 4. Pengujian (Testing): Mencoba memainkan kuis untuk memeriksa apakah ada bug/soal yang tidak muncul.",
                pembahasan: "Mengurai proyek rekayasa perangkat lunak menjadi modul-modul fungsional yang dapat dikerjakan terpisah.",
                rubrik: [
                  { kriteria: "Mengidentifikasi 4 bagian modul proyek secara logis", skor: 10 },
                  { kriteria: "Menjelaskan fungsi spesifik masing-masing modul tugas", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Literasi Digital, Literasi & Etika Kecerdasan Artifisial (AI)",
        deskripsiCP:
          "Peserta didik mampu memahami konsep dasar Kecerdasan Artifisial (AI) dan pembelajarannya (machine learning sederhana); membedakan data teks, gambar, dan suara yang diproses oleh AI; serta menerapkan etika pemanfaatan AI yang bertanggung jawab, menjaga keamanan data pribadi, dan bersikap kritis terhadap misinformasi (hoaks).",
        kompetensiKKO: "Memahami Konsep Dasar AI, Membedakan Tipe Data AI, Menerapkan Etika & Keamanan Privasi",
        lingkupMateri: "Konsep Dasar AI & Machine Learning, Pengenalan Objek Gambar/Suara, Etika AI & Perlindungan Data Pribadi",
        tpList: [
          {
            kodeTP: "TP.02",
            teksTP:
              "Memahami cara kerja dasar Kecerdasan Artifisial (AI) dan pengenalan pola data (gambar/suara), serta menerapkan etika digital, privasi data, dan sikap kritis terhadap informasi AI.",
            alokasiJP: 10,
            semester: "GENAP",
            prasyarat: "TP.01 Koding & KA",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kewargaan", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Kebenaran (Tabayyun)", "Cinta Kejujuran Ilmiah", "PPRA: Berkeadaban (Ta'addub)"],
            konteksPembelajaran: {
              stimulus: "Eksperimen 'Teachable Machine' melatih model AI mengenali gestur tangan (jempol ke atas / jempol ke bawah) menggunakan kamera dan studi kasus bahaya membagikan data pribadi (NIK, password, alamat rumah) di internet.",
              stimulusKemenag: "Pemanfaatan teknologi canggih wajib dipandu dengan akhlak mulia agar mendatangkan kemaslahatan dan tidak menimbulkan bahaya bagi privasi sesama.",
              masalahNyata: "Bagaimana cara kita memverifikasi apakah sebuah foto atau berita di media sosial dihasilkan oleh generator AI palsu (deepfake/hoaks)?",
              kegiatanEksplorasi: [
                "Melatih model AI sederhana mengenali objek buah apel versus jeruk menggunakan web Teachable Machine.",
                "Membuat poster kampanye 'Lindungi Jejak Digitalmu: Stop Oversharing Data Pribadi!'.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Etika AI",
                  teks: "Evaluasilah mengapa penyalinan jawaban pekerjaan rumah secara langsung dari generator teks AI tanpa dibaca, dipahami, dan dipikirkan ulang merupakan pelanggaran integritas akademik!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Pemahaman cara kerja AI dan etika privasi data",
                  baru: "Menganggap AI adalah manusia pintar di dalam komputer.",
                  layak: "Mampu menjelaskan bahwa AI belajar dari kumpulan data latih (training data).",
                  cakap: "Mampu melatih model pengenal visual sederhana dan menerapkan prinsip keamanan sandi/privasi.",
                  mahir: "Mampu menganalisis bias data AI dan merumuskan panduan etika digital yang bijak bagi teman sebaya.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah tindakan yang mencerminkan ETIKA DIGITAL DAN KEAMANAN DATA PRIBADI yang tepat saat menggunakan internet dan AI? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Tidak membagikan nomor telepon, alamat rumah, atau kata sandi kepada orang tak dikenal di internet.", isCorrect: true },
                  { kode: "B", teks: "Selalu memverifikasi (cross-check) kebenaran informasi dari AI dengan buku referensi tepercaya.", isCorrect: true },
                  { kode: "C", teks: "Menggunakan AI sebagai asisten belajar dan inspirasi, bukan untuk menyontek tugas.", isCorrect: true },
                  { kode: "D", teks: "Mengunggah foto kartu identitas (KK/KTP) orang tua ke media sosial publik.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah etika dan keamanan data. D sangat berbahaya karena membocorkan privasi keluarga.",
              },
              soalUraian: {
                level: "C4 (Prinsip Kerja AI / Machine Learning)",
                pertanyaan: "Jelaskan secara sederhana bagaimana model Kecerdasan Artifisial (AI) dapat mengenali perbedaan antara gambar 'Kucing' dan 'Anjing'!",
                kunci: "AI belajar melalui proses *Machine Learning* menggunakan data latih (*training data*): 1. Pengembang memasukkan ribuan foto kucing dan foto anjing yang sudah diberi label. 2. Algoritma AI menganalisis dan mengenali pola fitur khas masing-masing (seperti bentuk telinga, pola kumis, bentuk moncong). 3. Ketika diberikan foto hewan baru, AI mencocokkan pola gambar tersebut dengan data latih dan memprediksi apakah gambar itu kucing atau anjing berdasarkan tingkat kemiripan polanya.",
                pembahasan: "Memahami mekanisme dasar klasifikasi gambar berbasis pengenalan pola dalam Machine Learning.",
                rubrik: [
                  { kriteria: "Menjelaskan peran data latih (kumpulan ribuan gambar)", skor: 10 },
                  { kriteria: "Menjelaskan proses pencocokan pola fitur fisik (telinga/moncong)", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Pemanfaatan & Pengembangan KA (Visual Block Programming)",
        deskripsiCP:
          "Peserta didik mampu membuat program visual berbasis blok (block-based coding seperti Scratch) sederhana yang memadukan animasi, suara, logika percabangan, variabel skor, dan interaksi pengguna untuk menciptakan karya digital edukatif.",
        kompetensiKKO: "Merancang Program Blok Visual, Menggunakan Logika Variabel & Looping, Menciptakan Game Edukasi",
        lingkupMateri: "Visual Block Programming (Scratch), Sprite & Backdrop, Event Handler, Variable Score & Timer, Looping (Forever/Repeat)",
        tpList: [
          {
            kodeTP: "TP.03",
            teksTP:
              "Merancang dan mengembangkan animasi interaktif atau game edukasi sederhana menggunakan pemrograman blok visual (Scratch) dengan mengintegrasikan variabel skor, perulangan, dan deteksi sensor sentuh.",
            alokasiJP: 10,
            semester: "GENAP",
            prasyarat: "TP.01 & TP.02 Koding & KA",
            dimensiKarakterDinas: ["Kreativitas", "Penalaran Kritis", "Kemandirian", "Kolaborasi"],
            dimensiKarakterKemenag: ["Cinta Karya Inovatif", "PPRA: Dinamis & Kreatif (Tathawwur wa Ibtikar)"],
            konteksPembelajaran: {
              stimulus: "Membuat game edukasi Scratch bertajuk 'Tangkap Sampah Sesuai Tongnya': Sprite buah jatuh dari atas, jika menyentuh tong sampah organik skor bertambah 10, jika salah menyentuh tong anorganik skor berkurang 5.",
              stimulusKemenag: "Kreativitas membuat karya teknologi yang mengedukasi adalah sedekah ilmu yang mencerdaskan sesama.",
              masalahNyata: "Bagaimana cara memprogram sprite karakter agar dapat bergerak ke kanan-kiri merespons tombol panah keyboard dan melompat jika tombol spasi ditekan?",
              kegiatanEksplorasi: [
                "Menyusun blok kode: `when [green flag] clicked`, `forever [if <key right arrow pressed?> then [change x by 10]]`.",
                "Menambahkan variabel 'Score' dan 'Timer 60 detik' lalu menguji permainan bersama rekan sekelas.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C6 - Kreasi Game Edukasi",
                  teks: "Rancanglah alur blok program untuk mendeteksi kondisi 'Game Over' ketika nilai variabel Timer telah mencapai angka 0 atau Sprite musuh menyentuh pemain!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Pemrograman blok visual dan pembuatan game interaktif",
                  baru: "Menempelkan blok kode tanpa mengaitkannya dengan pemicu `when flag clicked`.",
                  layak: "Mampu menggerakkan sprite dengan koordinat X dan Y.",
                  cakap: "Mampu memprogram interaksi antar-sprite menggunakan sensor sentuh (`touching?`) dan variabel skor.",
                  mahir: "Mampu menciptakan game edukasi multi-level yang responsif, bebas bug, dan memiliki efek suara serta animasi halus.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah blok kode dalam pemrograman Scratch yang berfungsi untuk MENGUBAH SKOR dan MELAKUKAN PERULANGAN TERUS MENERUS? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "`forever` (melakukan eksekusi blok perintah di dalamnya tanpa henti).", isCorrect: true },
                  { kode: "B", teks: "`change [Score] by (10)` (menambah nilai variabel skor sebesar 10).", isCorrect: true },
                  { kode: "C", teks: "`if <touching [Sprite2]?> then` (memeriksa kondisi persentuhan antar objek).", isCorrect: true },
                  { kode: "D", teks: "`stop all` (menghapus seluruh sprite dari memori).", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah blok standar untuk game loop, penambahan skor, dan deteksi tabrakan sprite. D salah karena `stop all` hanya menghentikan skrip yang berjalan.",
              },
              soalUraian: {
                level: "C6 (Rancang Bangun Logika Koding)",
                pertanyaan: "Jelaskan urutan logika blok program (algoritma Scratch) agar sebuah sprite ikan berenang mondar-mandir dari ujung kiri ke ujung kanan layar secara otomatis dan memantul saat menyentuh tepi layar!",
                kunci: "Urutan blok kode: 1. `when green flag clicked` (pemicu mulai program). 2. Masukkan blok perulangan `forever`. 3. Di dalam forever, letakkan blok `move (10) steps`. 4. Tambahkan blok `if on edge, bounce` (agar memantul saat menyentuh tepi). 5. Set gaya rotasi `set rotation style [left-right]` (agar gambar ikan tidak terbalik saat memantul).",
                pembahasan: "Menyusun skrip animasi gerak berkesinambungan dengan penanganan tepi layar.",
                rubrik: [
                  { kriteria: "Menyusun struktur pemicu dan perulangan `forever` dengan benar", skor: 10 },
                  { kriteria: "Menyertakan blok `move`, `if on edge bounce`, dan `rotation style`", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 2. Seni Rupa (Fase C - Kelas V/VI)
  {
    fase: "Fase C",
    kelasDefault: "Kelas V",
    mapel: "Seni Rupa",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Mengalami, Menciptakan & Berdampak",
        deskripsiCP:
          "Peserta didik mampu mengamati, merefleksikan, dan mengaplikasikan unsur-unsur rupa (garis, bentuk, warna, tekstur, ruang) dan prinsip-prinsip desain (keseimbangan, proporsi, ritme) dalam membuat karya seni 2D dan 3D berbasis motif kearifan lokal nusantara yang berdampak positif bagi lingkungan.",
        kompetensiKKO: "Mengaplikasikan Unsur Rupa & Prinsip Desain, Menggambar Ragam Hias Nusantara, Membuat Karya 3D Daur Ulang",
        lingkupMateri: "Prinsip Desain (Keseimbangan & Proporsi), Ragam Hias Motif Nusantara (Batik/Tenun), Patung 3D Daur Ulang",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Mengaplikasikan unsur rupa dan prinsip desain (proporsi, keseimbangan, ritme) dalam menggambar ragam hias motif nusantara serta menciptakan karya 3 dimensi ramah lingkungan.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Mengenal warna primer dan sekunder",
            dimensiKarakterDinas: ["Kreativitas", "Kewargaan", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Keindahan", "Cinta Warisan Budaya Nusantara", "PPRA: Keteladanan"],
            konteksPembelajaran: {
              stimulus: "Keindahan motif ragam hias geometris dan flora pada kain batik Mega Mendung Cirebon dan ukiran kayu Toraja yang sarat filosofi keseimbangan alam.",
              stimulusKemenag: "Seni rupa yang indah adalah sarana mengagumi keindahan penciptaan Ilahi yang mewujud dalam harmoni garis, bentuk, dan warna.",
              masalahNyata: "Bagaimana cara menyusun pola ragam hias berulang agar bidang kertas gambar terlihat dinamis dan seimbang?",
              kegiatanEksplorasi: [
                "Eksplorasi menggambar ragam hias fauna nusantara dengan prinsip stilasi (penyederhanaan bentuk dekoratif).",
                "Membuat karya patung topeng 3D menggunakan bubur kertas bekas (paper mache).",
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Estetika",
                  teks: "Evaluasilah bagaimana perpaduan warna komplementer (kontras berseberangan) dapat menonjolkan titik fokus (vocal point) pada karya lukisan dekoratif!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Penerapan unsur rupa, prinsip desain, dan kriya daur ulang",
                  baru: "Menggambar tanpa memperhatikan komposisi dan bidang kertas.",
                  layak: "Mampu meniru motif ragam hias daerah.",
                  cakap: "Mampu menerapkan prinsip proporsi, keseimbangan asimetris/simetris, dan teknik pewarnaan gradasi halus.",
                  mahir: "Mampu memamerkan karya seni rupa orisinal bernilai estetis tinggi yang mengangkat pesan kepedulian lingkungan.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah yang termasuk PRINSIP-PRINSIP DESAIN dalam seni rupa? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Keseimbangan (Balance: simetris atau asimetris).", isCorrect: true },
                  { kode: "B", teks: "Proporsi (kesebandingan ukuran antarbagian).", isCorrect: true },
                  { kode: "C", teks: "Ritme / Irama (pengulangan unsur visual secara teratur).", isCorrect: true },
                  { kode: "D", teks: "Gravitasi bumi dan massa jenis benda.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Prinsip desain seni rupa: Keseimbangan, Proporsi, Irama/Ritme, Kesatuan, dan Pusat Perhatian. D adalah konsep fisika.",
              },
              soalUraian: {
                level: "C4 (Analisis Unsur Rupa Motif Tradisional)",
                pertanyaan: "Jelaskan apa yang dimaksud dengan teknik *Stilasi* (penggayaan bentuk) dalam menggambar motif ragam hias nusantara, dan berikan contoh penerapannya pada motif hewan/tumbuhan!",
                kunci: "Stilasi adalah teknik mengubah atau menyederhanakan bentuk asli objek alami (hewan, tumbuhan, manusia) menjadi bentuk dekoratif baru yang artistik dan indah tanpa meninggalkan ciri khas utamanya. Contoh: Pada motif batik Burung Merak, bentuk sayap dan ekor burung merak digambar bergelombang dengan ornamen sulur-sulur bunga yang anggun dan simetris.",
                pembahasan: "Memahami konsep penciptaan karya seni dekoratif berbasis kearifan lokal.",
                rubrik: [
                  { kriteria: "Menjelaskan pengertian teknik stilasi secara tepat", skor: 10 },
                  { kriteria: "Memberikan contoh konkret stilasi flora/fauna", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },
];
