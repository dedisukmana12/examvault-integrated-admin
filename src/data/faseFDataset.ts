// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import { CPDataset } from "./curriculumDatabase";
import { FASE_F_BAHASA_INGGRIS_DATASETS } from "./faseF_bahasa_inggris";
import { FASE_F_BAHASA_INGGRIS_XI_DATASETS } from "./faseF_bahasa_inggris_xi";

export const FASE_F_DATASETS_BASE: CPDataset[] = [
  // 1. Pendidikan Pancasila (Fase F - Kelas XI/XII SMA/MA/SMK)
  {
    fase: "Fase F",
    kelasDefault: "Kelas XI",
    mapel: "Pendidikan Pancasila",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pancasila",
        deskripsiCP:
          "Menganalisis keterhitungan dan dinamika keterpaduan nilai-nilai Pancasila dalam perumusan kebijakan publik dan penyelesaian sengketa sosial; mengevaluasi efektivitas aktualisasi nilai Pancasila di era globalisasi.",
        kompetensiKKO: "Menganalisis Perumusan Kebijakan Publik, Menyelesaikan Sengketa Sosial, Mengevaluasi Aktualisasi Nilai Pancasila",
        lingkupMateri: "Pancasila sebagai Landasan Etis Kebijakan Publik, Resolusi Sengketa Agraria/Sosial, Aktualisasi Nilai di Era Disrupsi Global",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menganalisis keterpaduan dan penerapan nilai-nilai Pancasila dalam perumusan kebijakan publik yang berkeadilan sosial serta merancang rekomendasi penyelesaian sengketa sosial berbasis musyawarah mufakat.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Memahami kedudukan Pancasila sebagai dasar negara dan ideologi terbuka",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kewargaan", "Kolaborasi"],
            dimensiKarakterKemenag: ["Cinta Keadilan", "PPRA: Musyawarah (Syura)", "PPRA: Berkeadaban (Ta'addub)"],
            konteksPembelajaran: {
              stimulus: "Studi kasus perumusan Analisis Mengenai Dampak Lingkungan (AMDAL) dan relokasi pemukiman warga dalam proyek strategis nasional yang harus menyeimbangkan pertumbuhan ekonomi (Sila 5) dengan keadilan kemanusiaan (Sila 2).",
              stimulusKemenag: "Menghadirkan kebijakan publik yang berpihak pada kaum rentan (mustadh'afin) merupakan wujud nyata implementasi maqashid syari'ah dan nilai ketuhanan-kemanusiaan.",
              masalahNyata: "Bagaimana menyelaraskan antara target efisiensi ekonomi pembangunan infrastruktur dengan hak-hak tanah adat masyarakat lokal berdasarkan prinsip Sila Keadilan Sosial?",
              kegiatanEksplorasi: [
                "Simulasi dengar pendapat publik (public hearing) antara perwakilan pemda, investor, dan warga terdampak pembangunan.",
                "Penyusunan naskah rekomendasi kebijakan publik (policy brief) berlandaskan etika Pancasila.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Etika Kebijakan Publik", teks: "Evaluasilah tingkat keselarasan antara kebijakan tarif subsidi transportasi massal perkotaan dengan prinsip keadilan distributif Sila Kelima Pancasila!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Analisis nilai Pancasila dalam kebijakan publik",
                  baru: "Menilai kebijakan hanya dari satu sudut pandang keuntungan sepihak.",
                  layak: "Mampu menjelaskan kaitan sila-sila Pancasila dengan kebijakan pemerintah.",
                  cakap: "Mampu menganalisis benturan kepentingan dalam sengketa sosial dan merumuskan solusi win-win solution berlandaskan sila ke-4 dan ke-5.",
                  mahir: "Mampu menyusun policy paper komprehensif yang mengintegrasikan uji kelayakan konstitusional dan etika kebangsaan.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah indikator kebijakan publik yang MENCERMINKAN pengamalan sila 'Keadilan Sosial bagi Seluruh Rakyat Indonesia'? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Pemberian bantuan jaminan kesehatan nasional bagi masyarakat kurang mampu tanpa diskriminasi.", isCorrect: true 
              },
                  { kode: "B", teks: "Pembangunan infrastruktur listrik dan telekomunikasi menjangkau daerah 3T (Terdepan, Terluar, Tertinggal).", isCorrect: true },
                  { kode: "C", teks: "Pemberian konsesi lahan tambang raksasa kepada segelintir korporasi tanpa uji dampak lingkungan.", isCorrect: false },
                  { kode: "D", teks: "Penyediaan akses pendidikan kejuruan gratis dan beasiswa kuliah bagi keluarga pra-sejahtera.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "A, B, dan D mewujudkan pemerataan keadilan sosial. C bertentangan dengan keadilan sosial dan kelestarian alam.",
              },
              soalUraian: {
                level: "C5 (Evaluasi Resolusi Sengketa)",
                pertanyaan: "Terjadi sengketa batas lahan perkebunan antara warga desa adat dan sebuah perusahaan swasta. Sebagai fasilitator mediasi berjiwa Pancasila, analisislah langkah-langkah mediasi musyawarah mufakat (Sila ke-4) yang harus ditempuh agar tercapai kesepakatan damai yang adil (Sila ke-5)!",
                kunci: "1. Mengidentifikasi legalitas hak tanah adat dan izin HGU perusahaan secara transparan di hadapan kedua belah pihak. 2. Mengadakan forum musyawarah mufakat yang setara tanpa intimidasi atau dominasi kekuatan modal/aparat. 3. Menyepakati skema kemitraan plasma perkebunan (profit sharing) yang menjamin kesejahteraan ekonomi warga desa adat sekaligus memberikan kepastian berusaha bagi perusahaan. 4. Menandatangani nota kesepakatan yang mengikat secara hukum adat dan hukum positif nasional.",
                pembahasan: "Menerapkan nilai musyawarah dan keadilan dalam penyelesaian konflik sosial.",
                rubrik: [
                  { kriteria: "Menjelaskan identifikasi data faktual dan proses musyawarah setara", skor: 10 },
                  { kriteria: "Merumuskan model kemitraan adil dan pengesahan hukum mengikat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Undang-Undang Dasar Negara Republik Indonesia Tahun 1945",
        deskripsiCP:
          "Mengevaluasi pelaksanaan UUD 1945 dan amendemennya; merancangkan gagasan penegakan hak asasi manusia (HAM) serta pelindungan hukum bagi warga negara secara berkeadilan.",
        kompetensiKKO: "Mengevaluasi Amendemen UUD 1945, Merancang Penegakan HAM, Mengadvokasi Pelindungan Hukum",
        lingkupMateri: "Sejarah Empat Tahap Amendemen UUD 1945 (1999-2002), Penegakan HAM Berat (UU No. 26/2000), Bantuan Hukum bagi Kaum Rentan (UU No. 16/2011)",
        tpList: [
          {
            kodeTP: "TP.02",
            teksTP:
              "Mengevaluasi implikasi ketatanegaraan pasca-amendemen UUD 1945 terhadap sistem check and balances antar-lembaga negara serta merancang gagasan advokasi penegakan HAM dan akses bantuan hukum cuma-cuma (pro bono).",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Memahami hierarki perundang-undangan dan lembaga peradilan",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kewargaan", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Keadilan", "PPRA: Berimbang (Tawazun)"],
            konteksPembelajaran: {
              stimulus: "Sistem ketatanegaraan Indonesia pasca-amendemen menghapuskan kedudukan MPR sebagai lembaga tertinggi negara dan beralih ke prinsip kesetaraan kekuasaan (check and balances) antara Eksekutif, Legislatif, dan Yudikatif.",
              stimulusKemenag: "Menegakkan hak asasi kaum papa dan memastikan akses keadilan bagi terdakwa miskin adalah cerminan dari prinsip hifzhun nafs (menjaga jiwa) dan keadilan syar'i.",
              masalahNyata: "Mengapa warga miskin yang terjerat masalah hukum pidana sering kesulitan mendapatkan pendampingan pengacara yang berkualitas, dan bagaimana negara mengatasinya lewat posbakum?",
              kegiatanEksplorasi: [
                "Bagan relasi kekuasaan antar-lembaga negara (Presiden, DPR, DPD, MPR, MK, MA, KY, BPK) pasca-amendemen.",
                "Desain program klinik advokasi hukum remaja di lingkungan sekolah untuk korban perundungan siber.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Ketatanegaraan", teks: "Evaluasilah efektivitas kewenangan Dewan Perwakilan Daerah (DPD) dalam sistem bikameral Indonesia pasca-amendemen UUD 1945 dalam memperjuangkan aspirasi otonomi daerah!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Evaluasi amendemen UUD dan advokasi HAM",
                  baru: "Masih menganggap MPR sebagai pemegang kedaulatan rakyat tertinggi.",
                  layak: "Mampu menjelaskan 4 tahap amendemen UUD 1945.",
                  cakap: "Mampu menganalisis dinamika check and balances serta merancang skema bantuan hukum bagi kelompok marginal.",
                  mahir: "Mampu mengevaluasi putusan peradilan HAM dan merumuskan usulan reformasi peradilan terpadu.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah perubahan mendasar dalam struktur ketatanegaraan Republik Indonesia setelah 4 (empat) kali Amendemen UUD 1945? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Presiden dan Wakil Presiden dipilih langsung oleh rakyat melalui Pemilu satu paket.", isCorrect: true 
              },
                  { kode: "B", teks: "Masa jabatan Presiden dibatasi maksimal 2 periode (masing-masing 5 tahun).", isCorrect: true },
                  { kode: "C", teks: "Pembentukan lembaga negara baru: Mahkamah Konstitusi (MK), Dewan Perwakilan Daerah (DPD), dan Komisi Yudisial (KY).", isCorrect: true },
                  { kode: "D", teks: "MPR berwenang menetapkan Garis-Garis Besar Haluan Negara (GBHN) yang mengikat Presiden.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Pasca-amendemen, GBHN dihapus karena Presiden bertanggung jawab kepada rakyat pemilih melalui visi misi programnya.",
              },
              soalUraian: {
                level: "C4 (Analisis Mekanisme Check and Balances)",
                pertanyaan: "Jelaskan bagaimana mekanisme saling mengawasi dan mengimbangi (check and balances) bekerja antara Presiden dan DPR dalam proses pembentukan Undang-Undang di Indonesia!",
                kunci: "Setiap Rancangan Undang-Undang (RUU) dibahas bersama oleh DPR dan Presiden untuk mendapat persetujuan bersama (Pasal 20 Ayat 2 UUD 1945). Jika RUU tidak mendapat persetujuan bersama, RUU tersebut tidak boleh diajukan lagi dalam masa persidangan DPR saat itu. Presiden mengesahkan RUU yang telah disetujui bersama menjadi UU. Namun, jika Presiden tidak menandatangani RUU tersebut dalam waktu 30 hari sejak disetujui, RUU tersebut sah menjadi UU dan wajib diundangkan (Pasal 20 Ayat 5).",
                pembahasan: "Penerapan prinsip pembagian kekuasaan dalam fungsi legislasi.",
                rubrik: [
                  { kriteria: "Menjelaskan pembahasan bersama RUU antara Presiden dan DPR", skor: 10 },
                  { kriteria: "Menjelaskan implikasi batas 30 hari pengesahan RUU menjadi UU", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 2. Matematika Umum (Fase F - Kelas XI/XII SMA/MA/SMK)
  {
    fase: "Fase F",
    kelasDefault: "Kelas XI",
    mapel: "Matematika",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Aljabar dan Fungsi",
        deskripsiCP:
          "Memahami dan menerapkan konsep fungsi komposisi dan fungsi invers dalam pemecahan masalah nyata.",
        kompetensiKKO: "Menentukan Operasi Aljabar Fungsi, Mengomposisikan Fungsi (f o g)(x), Menentukan Fungsi Invers f^-1(x)",
        lingkupMateri: "Fungsi Komposisi Bertingkat, Sifat Komutatif/Asosiatif Komposisi, Syarat Fungsi Bijektif Invers",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menentukan hasil operasi aljabar fungsi, fungsi komposisi (f o g)(x), dan fungsi invers f^-1(x) serta menerapkannya dalam pemodelan konversi mata uang dan proses produksi multi-tahap industri.",
            alokasiJP: 12,
            semester: "GANJIL",
            prasyarat: "Memahami domain, kodomain, range fungsi linear dan kuadrat",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Cinta Ketelitian", "PPRA: Berimbang (Tawazun)"],
            konteksPembelajaran: {
              stimulus: "Proses pembuatan kertas di pabrik melalui dua mesin berturut-turut: Mesin I mengolah kayu menjadi bubur kertas (pulp) f(x) = 0,8x - 2, dan Mesin II mengolah pulp menjadi kertas g(y) = 0,6y + 5 (dalam satuan ton).",
              stimulusKemenag: "Keterpaduan sebab-akibat multi-proses dalam fungsi komposisi menggambarkan mata rantai ketetapan sunnatullah yang terstruktur rapi.",
              masalahNyata: "Jika tersedia 50 ton bahan dasar kayu, berapa ton kertas berkualitas yang dihasilkan oleh gabungan kedua mesin tersebut? (g o f)(x)",
              kegiatanEksplorasi: [
                "Eksplorasi diagram panah pemetaan fungsi satu-satu (injektif), pada (surjektif), dan bijektif.",
                "Penyelesaian aljabar fungsi invers f(x) = (ax + b)/(cx + d) menjadi f^-1(x) = (-dx + b)/(cx - a).",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis Komposisi Fungsi", teks: "Diberikan f(x) = 2x + 1 dan (f o g)(x) = 4x² - 6x + 7. Tentukan rumus fungsi g(x) dan evaluasilah nilai g(3)!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menyelesaikan fungsi komposisi dan invers",
                  baru: "Menganggap (f o g)(x) sama dengan (g o f)(x) (keliru komutatif).",
                  layak: "Mampu menghitung nilai (f o g)(a) untuk input angka tertentu.",
                  cakap: "Mampu menentukan rumus umum fungsi komposisi dan invers pecahan linear secara presisi.",
                  mahir: "Mampu memodelkan rantai pasok industri dengan komposisi tiga fungsi (f o g o h)(x) dan menganalisis domain terdefinisi.",
                },
              ],
              soalPGK: {
                pertanyaan: "Diberikan f(x) = 2x - 3 dan g(x) = x² + 1. Manakah pernyataan fungsi yang BENAR? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "(f o g)(x) = 2(x² + 1) - 3 = 2x² - 1", isCorrect: true 
              },
                  { kode: "B", teks: "(g o f)(x) = (2x - 3)² + 1 = 4x² - 12x + 10", isCorrect: true },
                  { kode: "C", teks: "Nilai (f o g)(2) = 2(2)² - 1 = 7", isCorrect: true },
                  { kode: "D", teks: "Operasi komposisi fungsi selalu bersifat komutatif: (f o g)(x) = (g o f)(x)", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Komposisi fungsi secara umum tidak bersifat komutatif: (f o g)(x) != (g o f)(x).",
              },
              soalUraian: {
                level: "C4 (Fungsi Invers Pecahan Linear)",
                pertanyaan: "Diketahui fungsi f(x) = (3x + 4) / (2x - 5) dengan x != 5/2. Tentukan rumus fungsi invers f^-1(x) beserta syarat daerah asal (domain) fungsi invers tersebut!",
                kunci: "Misalkan y = (3x + 4) / (2x - 5). y(2x - 5) = 3x + 4 -> 2xy - 5y = 3x + 4 -> 2xy - 3x = 5y + 4 -> x(2y - 3) = 5y + 4 -> x = (5y + 4) / (2y - 3). Maka rumus f^-1(x) = (5x + 4) / (2x - 3) dengan domain x != 3/2 (Df^-1 = {x | x in R, x != 3/2})",
                pembahasan: "Langkah aljabar penentuan fungsi invers bentuk pecahan linear.",
                rubrik: [
                  { kriteria: "Melakukan manipulasi aljabar pindah ruas untuk mengisolasi x", skor: 10 },
                  { kriteria: "Menuliskan rumus f^-1(x) = (5x + 4)/(2x - 3) dan syarat domain x != 3/2 secara tepat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Kalkulus",
        deskripsiCP:
          "Memahami konsep turunan (*derivative*) dan integral fungsi aljabar untuk menyelesaikan masalah laju perubahan dan pengukuran luas daerah.",
        kompetensiKKO: "Menentukan Turunan Fungsi Aljabar f'(x), Menentukan Nilai Stasioner Maksimum/Minimum, Menghitung Integral Tentu & Luas Daerah",
        lingkupMateri: "Aturan Rantai & Turunan f(x) = ax^n, Titik Stasioner & Masalah Optimasi Biaya/Laba, Integral Tak Tentu & Integral Tentu Luas Daerah Kurva",
        tpList: [
          {
            kodeTP: "TP.02",
            teksTP:
              "Menerapkan konsep turunan fungsi aljabar dalam menentukan titik stasioner (nilai maksimum dan minimum) pada masalah optimasi keuntungan ekonomi serta menggunakan integral tentu dalam menghitung luas daerah di bawah kurva.",
            alokasiJP: 14,
            semester: "GENAP",
            prasyarat: "Memahami limit fungsi aljabar dan grafik fungsi kuadrat/kubik",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Cinta Ketelitian", "PPRA: Keteladanan"],
            konteksPembelajaran: {
              stimulus: "Sebuah perusahaan memproduksi x unit barang dengan total biaya produksi C(x) = 2x² - 80x + 1.200 (dalam ribu rupiah) dan harga jual per unit p(x) = 160 - x. Perusahaan ingin menentukan kapasitas produksi agar memperoleh laba maksimum.",
              stimulusKemenag: "Prinsip kalkulus limit dan turunan mencerminkan kajian mikro perubahan gerak alamiah yang terus bertransformasi menuju titik puncak keseimbangan.",
              masalahNyata: "Berapa unit barang x yang harus diproduksi agar keuntungan total L(x) mencapai nilai maksimum, dan berapa laba maksimum tersebut?",
              kegiatanEksplorasi: [
                "Visualisasi garis singgung kurva dan titik stasioner f'(x) = 0 pada aplikasi grafik dinamis.",
                "Menghitung luas daerah tertutup antara parabola y = x² dan garis y = 4 menggunakan integral Riemann dan integral tentu.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Optimasi Kalkulus", teks: "Rancanglah dimensi sebuah kaleng silinder tertutup bervolume 1.000 cm³ dengan luas permukaan bahan minimum menggunakan konsep turunan pertama f'(r) = 0!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menyelesaikan turunan optimasi dan integral",
                  baru: "Lupa menurunkan pangkat saat mengaplikasikan aturan turunan d/dx(x^n) = n x^(n-1).",
                  layak: "Mampu menurunkan fungsi polinomial aljabar sederhana.",
                  cakap: "Mampu menentukan interval fungsi naik/turun dan menghitung nilai maksimum laba dengan f'(x) = 0.",
                  mahir: "Mampu mengonstruksi pemodelan integral tentu untuk menghitung luas daerah irisan kurva kompleks secara analitis.",
                },
              ],
              soalPGK: {
                pertanyaan: "Diberikan kurva f(x) = x³ - 3x² - 9x + 5. Manakah pernyataan analisis kalkulus yang BENAR? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Turunan pertama f'(x) = 3x² - 6x - 9.", isCorrect: true 
              },
                  { kode: "B", teks: "Titik stasioner kurva terjadi pada saat x = -1 dan x = 3.", isCorrect: true },
                  { kode: "C", teks: "Nilai balik maksimum kurva adalah f(-1) = 10.", isCorrect: true },
                  { kode: "D", teks: "Kurva selalu naik pada interval -1 < x < 3.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "f'(x) = 3(x² - 2x - 3) = 3(x - 3)(x + 1) = 0 -> x = 3 atau x = -1. f(-1) = -1 - 3 + 9 + 5 = 10. Pada interval -1 < x < 3 nilai f'(x) < 0 sehingga kurva turun.",
              },
              soalUraian: {
                level: "C4 (Optimasi Laba Produksi)",
                pertanyaan: "Suatu produk menghasilkan pendapatan total R(x) = 200x - 2x² dan biaya total C(x) = x² + 20x + 300 (dalam jutaan rupiah) untuk x unit barang. Tentukan jumlah unit barang x yang harus diproduksi agar memperoleh laba maksimum, serta tentukan besar laba maksimumnya!",
                kunci: "Fungsi Laba L(x) = R(x) - C(x) = (200x - 2x²) - (x² + 20x + 300) = -3x² + 180x - 300. Syarat laba maksimum: L'(x) = 0 -> -6x + 180 = 0 -> 6x = 180 -> x = 30 unit. Besar laba maksimum L(30) = -3(30)² + 180(30) - 300 = -3(900) + 5.400 - 300 = -2.700 + 5.400 - 300 = Rp2.400 juta (Rp2,4 Miliar).",
                pembahasan: "Mencari titik ekstrem fungsi kuadrat dengan turunan pertama.",
                rubrik: [
                  { kriteria: "Merumuskan fungsi laba L(x) = -3x² + 180x - 300", skor: 5 },
                  { kriteria: "Menurunkan fungsi dan menemukan kapasitas produksi optimal x = 30 unit", skor: 8 },
                  { kriteria: "Menghitung laba maksimum sebesar Rp2,4 Miliar secara tepat", skor: 7 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 3. Fisika Pilihan (Fase F - Kelas XI/XII SMA/MA/SMK)
  {
    fase: "Fase F",
    kelasDefault: "Kelas XI",
    mapel: "Fisika",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pemahaman Fisika",
        deskripsiCP:
          "Menganalisis kinematika dan dinamika rotasi, termodinamika, gelombang mekanik dan elektromagnetik, optik, listrik arus searah dan bolak-balik, induksi elektromagnetik, fisika modern, serta konsep kuantum dasar.",
        kompetensiKKO: "Menganalisis Dinamika Rotasi & Momen Inersia, Menerapkan Hukum Termodinamika & Siklus Carnot, Menganalisis Induksi Elektromagnetik Faraday",
        lingkupMateri: "Torsi (Momen Gaya), Momen Inersia (I = k m r²), Hukum Kekekalan Momentum Sudut, Hukum I & II Termodinamika, Efisiensi Mesin Carnot, Hukum Faraday & Lenz",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menganalisis konsep dinamika rotasi, momen gaya (torsi), momen inersia berbagai bentuk benda tegar, dan hukum kekekalan momentum sudut pada fenomena gerak berputar (seperti penari es skating dan roda gila mesin).",
            alokasiJP: 12,
            semester: "GANJIL",
            prasyarat: "Memahami Hukum Newton tentang Gerak dan Gerak Melingkar Beraturan",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Cinta Ketelitian", "PPRA: Keteladanan"],
            konteksPembelajaran: {
              stimulus: "Penari balet / figure skater berputar lebih cepat ketika merapatkan kedua tangannya ke dada dan berputar lebih lambat saat merentangkan tangannya (kekekalan momentum sudut L = I . omega).",
              stimulusKemenag: "Keteraturan gerak rotasi benda-benda langit dan partikel atomik berotasi pada porosnya adalah manifestasi ketetapan hukum fisika Ilahiah di alam semesta (kullun fi falakin yasbahun).",
              masalahNyata: "Mengapa sebuah silinder pejal menggelinding lebih cepat menuruni bidang miring dibanding sebuah silinder berongga (cincin) yang memiliki massa dan jari-jari yang sama?",
              kegiatanEksplorasi: [
                "Eksperimen gerak menggelinding tanpa slip silinder pejal vs silinder berongga pada lintasan miring.",
                "Perhitungan torsi total pada katrol bermassa yang menghubungkan dua beban gantung (tegangan tali T1 dan T2).",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Dinamika Rotasi", teks: "Buktikan secara analitis bahwa percepatan linier silinder pejal (I = 1/2 m r²) yang menggelinding murni menuruni bidang miring bersudut theta adalah a = 2/3 g sin(theta)!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Analisis dinamika rotasi dan momen inersia",
                  baru: "Menyamakan massa linier dengan momen inersia rotasi tanpa memperhitungkan distribusi massa r².",
                  layak: "Mampu menghitung momen gaya tau = F . r . sin(theta).",
                  cakap: "Mampu menerapkan hukum kekekalan momentum sudut L1 = L2 dan hukum II Newton gerak rotasi tau = I . alpha.",
                  mahir: "Mampu memecahkan sistem dinamika benda tegar komposit dengan energi kinetik total (translasi + rotasi) secara tuntas.",
                },
              ],
              soalPGK: {
                pertanyaan: "Seorang penari balet berputar dengan kedua lengan terentang dengan kecepatan sudut 4 rad/s dan momen inersia 5 kg.m². Saat ia merapatkan tangannya ke dada, momen inersianya mengecil menjadi 2 kg.m². Manakah pernyataan yang BENAR? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Momentum sudut penari balet bernilai konstan (kekal) yaitu 20 kg.m²/s.", isCorrect: true 
              },
                  { kode: "B", teks: "Kecepatan sudut putaran penari meningkat menjadi 10 rad/s.", isCorrect: true },
                  { kode: "C", teks: "Energi kinetik rotasi penari meningkat dari 40 Joule menjadi 100 Joule akibat kerja otot penari.", isCorrect: true },
                  { kode: "D", teks: "Kecepatan sudut putaran penari melambat menjadi 1,6 rad/s.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "L1 = I1 omega1 = 5 x 4 = 20. L2 = I2 omega2 -> 20 = 2 x omega2 -> omega2 = 10 rad/s. Ek1 = 1/2 (5)(4²) = 40 J. Ek2 = 1/2 (2)(10²) = 100 J.",
              },
              soalUraian: {
                level: "C4 (Analisis Benda Menggelinding)",
                pertanyaan: "Sebuah bola pejal bermassa m = 2 kg dan jari-jari R = 10 cm (momen inersia I = 2/5 m R²) menggelinding murni dari keadaan diam menuruni bidang miring setinggi h = 7 meter. Jika percepatan gravitasi g = 10 m/s², hitunglah kecepatan linier pusat massa bola saat tiba di dasar bidang miring!",
                kunci: "Gunakan Hukum Kekekalan Energi Mekanik: Em_awal = Em_akhir. m g h = Ek_translasi + Ek_rotasi -> m g h = 1/2 m v² + 1/2 I omega² -> m g h = 1/2 m v² + 1/2 (2/5 m R²) (v/R)² -> m g h = 1/2 m v² + 1/5 m v² = 7/10 m v². Maka g h = 7/10 v² -> v² = 10/7 g h. v² = 10/7 x 10 x 7 = 100 -> v = akar(100) = 10 m/s.",
                pembahasan: "Menghitung kecepatan linier benda menggelinding menggunakan kekekalan energi mekanik.",
                rubrik: [
                  { kriteria: "Menuliskan persamaan kekekalan energi translasi dan rotasi", skor: 10 },
                  { kriteria: "Menemukan nilai kecepatan linier v = 10 m/s secara tepat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 4. Kimia Pilihan (Fase F - Kelas XI/XII SMA/MA/SMK)
  {
    fase: "Fase F",
    kelasDefault: "Kelas XI",
    mapel: "Kimia",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pemahaman Kimia",
        deskripsiCP:
          "Menganalisis kesetimbangan kimia, laju reaksi, termokimia, larutan asam-basa, elektrokimia, sel volta, serta sifat dan sintesis senyawa karbon (kimia organik dan makromolekul).",
        kompetensiKKO: "Menganalisis Faktor Pergeseran Kesetimbangan (Le Chatelier), Menghitung pH Asam-Basa & Larutan Penyangga (Buffer), Menganalisis Potensial Sel Volta",
        lingkupMateri: "Asas Le Chatelier (Konsentrasi, Suhu, Tekanan, Volume), Tetapan Kesetimbangan Kc/Kp, Larutan Buffer (Penyangga Darah H2CO3/HCO3-), Titrasi Asam-Basa, Deret Volta & E°sel",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menganalisis faktor-faktor pergeseran arah kesetimbangan kimia (Asas Le Chatelier), menghitung nilai tetapan kesetimbangan (Kc dan Kp), serta mengoptimalkan produksi amonia (Proses Haber-Bosch) di industri pupuk.",
            alokasiJP: 12,
            semester: "GANJIL",
            prasyarat: "Memahami stoikiometri, konsep mol, dan laju reaksi kimia",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "PPRA: Dinamis & Terbuka", "Cinta Ketelitian"],
            konteksPembelajaran: {
              stimulus: "Sintesis amonia pada reaksi N2(g) + 3H2(g) <=> 2NH3(g) Delta H = -92 kJ. Untuk memaksimalkan rendemen hasil NH3 di pabrik pupuk urea, rekayasa suhu, tekanan tinggi (200 atm), dan katalis besi dilakukan.",
              stimulusKemenag: "Kondisi kesetimbangan dinamis kimia mengajarkan hakikat harmoni (mizan) alam di mana perubahan aksi akan selalu diimbangi oleh reaksi peredam demi menjaga kelangsungan hidup.",
              masalahNyata: "Mengapa pada industri amonia tidak digunakan suhu yang terlalu rendah meskipun reaksinya eksoterm, melainkan digunakan suhu kompromi (400-500 °C)?",
              kegiatanEksplorasi: [
                "Simulasi pergeseran warna ion kompleks [Fe(SCN)]²+ saat penambahan ion Fe³+ atau SCN-.",
                "Perhitungan nilai Kc dan Kp dari tabel MRS (Mula-mula, Reaksi, Sisa/Setimbang).",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Proses Kimia Industri", teks: "Evaluasilah pemilihan kondisi tekanan 200 atm dan suhu 450 °C pada proses Haber-Bosch dari tinjauan termodinamika (arah pergeseran kesetimbangan) versus kinetika kimia (laju reaksi efektif)!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Analisis kesetimbangan dan Le Chatelier",
                  baru: "Keliru menentukan arah pergeseran kesetimbangan akibat pengaruh perubahan volume/tekanan.",
                  layak: "Mampu merumuskan rumus matematis Kc berdasarkan persamaan reaksi.",
                  cakap: "Mampu menghitung Kc dan Kp serta menganalisis efek suhu, konsentrasi, dan katalis secara tepat.",
                  mahir: "Mampu merancang parameter optimasi reaktor industri kimia dengan mempertimbangkan aspek ekonomi dan efisiensi termal.",
                },
              ],
              soalPGK: {
                pertanyaan: "Pada reaksi kesetimbangan endoterm: 2SO3(g) <=> 2SO2(g) + O2(g) Delta H = +198 kJ, tindakan manakah yang AKAN MENGGESER kesetimbangan ke arah KANAN (menambah produk SO2 dan O2)? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Menaikkan suhu sistem reaksi.", isCorrect: true 
              },
                  { kode: "B", teks: "Menurunkan tekanan dengan memperbesar volume wadah reaksi.", isCorrect: true },
                  { kode: "C", teks: "Menambahkan gas SO3 ke dalam wadah reaksi.", isCorrect: true },
                  { kode: "D", teks: "Menurunkan suhu sistem reaksi.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Reaksi endoterm bergeser ke kanan jika suhu dinaikkan (A). Jumlah koefisien kanan (3) > kiri (2), sehingga volume diperbesar bergeser ke kanan (B). Menambah reaktan SO3 bergeser ke kanan (C).",
              },
              soalUraian: {
                level: "C4 (Perhitungan Tetapan Kesetimbangan Kc)",
                pertanyaan: "Dalam ruang tertutup bervolume 2 Liter pada suhu 500 K, dimasukkan 4 mol gas HI. Gas HI terurai menurut reaksi: 2HI(g) <=> H2(g) + I2(g). Jika saat tercapai keadaan setimbang terbentuk 1 mol gas H2, hitunglah derajat disosiasi (alpha) gas HI dan nilai tetapan kesetimbangan Kc reaksi tersebut!",
                kunci: "Reaksi: 2HI <=> H2 + I2. Mula-mula HI = 4 mol. Reaksi: H2 terbentuk = 1 mol, I2 terbentuk = 1 mol, HI bereaksi = 2 mol. Setimbang: HI sisa = 4 - 2 = 2 mol, H2 = 1 mol, I2 = 1 mol. Derajat disosiasi alpha = HI bereaksi / HI mula-mula = 2 / 4 = 0,5 (50%). Konsentrasi setimbang: [HI] = 2/2 = 1 M; [H2] = 1/2 = 0,5 M; [I2] = 1/2 = 0,5 M. Nilai Kc = ([H2] x [I2]) / [HI]² = (0,5 x 0,5) / (1)² = 0,25.",
                pembahasan: "Menghitung konsentrasi setimbang dan nilai Kc sistem gas terurai.",
                rubrik: [
                  { kriteria: "Membuat tabel MRS mol setimbang dan menghitung alpha = 50%", skor: 10 },
                  { kriteria: "Menghitung konsentrasi molar dan nilai Kc = 0,25 secara tepat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 5. Biologi Pilihan (Fase F - Kelas XI/XII SMA/MA/SMK)
  {
    fase: "Fase F",
    kelasDefault: "Kelas XI",
    mapel: "Biologi",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pemahaman Biologi",
        deskripsiCP:
          "Menganalisis bioproses seluler (transpor membran, metabolisme, sintesis protein), genetika dan pewarisan sifat, pertumbuhan-perkembangan, serta teori evolusi dan bioteknologi modern.",
        kompetensiKKO: "Menganalisis Mekanisme Transpor Membran Sel, Menganalisis Katabolisme & Anabolisme (Respirasi Aerob & Fotosintesis), Menganalisis Sintesis Protein (Transkripsi-Translasi)",
        lingkupMateri: "Difusi, Osmosis & Pompa Natrium-Kalium, Glikolisis, Dekarboksilasi Oksidatif, Siklus Krebs, Transpor Elektron (36/38 ATP), Dogma Sentral Biologi Molekuler (DNA -> mRNA -> Polipeptida)",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menganalisis tahapan bioproses respirasi aerob seluler (glikolisis, dekarboksilasi oksidatif, siklus Krebs, dan rantai transpor elektron) dalam menghasilkan energi molekuler ATP serta membedakannya dengan respirasi anaerob (fermentasi).",
            alokasiJP: 12,
            semester: "GANJIL",
            prasyarat: "Memahami struktur organel sel (mitokondria dan sitoplasma)",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "PPRA: Keteladanan", "Cinta Ketelitian"],
            konteksPembelajaran: {
              stimulus: "Fenomena kram otot (fatigue) pada atlet lari maraton akibat penumpukan asam laktat saat suplai oksigen sel otot menurun drastis sehingga sel beralih ke jalur fermentasi asam laktat.",
              stimulusKemenag: "Kompleksitas enzimatis mitokondria yang mengubah satu molekul glukosa menjadi energi penggerak seluler adalah mahakarya penciptaan biologis yang luar biasa presisi.",
              masalahNyata: "Mengapa hasil energi ATP dari 1 molekul glukosa pada respirasi aerob (36-38 ATP) jauh lebih besar dibanding fermentasi anaerob (hanya 2 ATP)?",
              kegiatanEksplorasi: [
                "Bagan alir skematis 4 tahap respirasi aerob beserta tempat berlangsung, substrat, dan produk yang dihasilkan.",
                "Eksperimen fermentasi alkohol oleh ragi Saccharomyces cerevisiae pada larutan gula dan deteksi gas CO2.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Biokimiawi", teks: "Evaluasilah peran akseptor elektron terakhir (gas oksigen) dalam fosforilasi oksidatif rantai transpor elektron di krista mitokondria dan jelaskan dampak racun sianida terhadap proses tersebut!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Analisis bioproses respirasi sel",
                  baru: "Menghafal rumus kimia respirasi tanpa memahami 4 tahapan biokimianya.",
                  layak: "Mampu menyebutkan 4 tahap respirasi aerob (glikolisis s.d. transpor elektron).",
                  cakap: "Mampu menghitung neraca total ATP dari NADH dan FADH2 pada rantai transpor elektron secara akurat.",
                  mahir: "Mampu menganalisis gangguan metabolisme seluler akibat inhibitor enzimatis (seperti sianida dan karbon monoksida) secara molekuler.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah pernyataan yang BENAR mengenai tahapan GLIKOLISIS pada respirasi seluler aerob? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Berlangsung di dalam sitoplasma (sitosol) sel.", isCorrect: true 
              },
                  { kode: "B", teks: "Mengubah 1 molekul Glukosa (6C) menjadi 2 molekul Asam Piruvat (3C).", isCorrect: true },
                  { kode: "C", teks: "Menghasilkan keuntungan bersih 2 ATP dan 2 NADH.", isCorrect: true },
                  { kode: "D", teks: "Membutuhkan oksigen bebas secara mutlak pada reaksinya.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Glikolisis berlangsung di sitosol tanpa memerlukan oksigen bebas (anaerobik) menghasilkan 2 piruvat, 2 NADH, 2 ATP bersih.",
              },
              soalUraian: {
                level: "C4 (Perhitungan Neraca Energi ATP)",
                pertanyaan: "Jelaskan berapa jumlah molekul ATP yang dihasilkan dari 10 NADH dan 2 FADH2 yang masuk ke rantai transpor elektron di membran dalam (krista) mitokondria menurut teori kemiosmosis (1 NADH = 3 ATP, 1 FADH2 = 2 ATP)!",
                kunci: "1. Dari 10 NADH: 10 x 3 ATP = 30 ATP. 2. Dari 2 FADH2: 2 x 2 ATP = 4 ATP. Total ATP yang dihasilkan dari rantai transpor elektron fosforilasi oksidatif adalah 30 + 4 = 34 ATP. Jika ditambah 2 ATP dari Glikolisis dan 2 ATP dari Siklus Krebs, maka total energi respirasi aerob adalah 38 ATP (atau 36 ATP pada sel eukariot dengan shuttle malat-aspartat tertentu).",
                pembahasan: "Menghitung neraca konversi reduksi elektron menjadi ATP kemiosmosis.",
                rubrik: [
                  { kriteria: "Menghitung konversi 10 NADH = 30 ATP dan 2 FADH2 = 4 ATP", skor: 10 },
                  { kriteria: "Menyimpulkan total 34 ATP pada transpor elektron secara tepat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 6. Ekonomi Pilihan (Fase F - Kelas XI/XII SMA/MA/SMK)
  {
    fase: "Fase F",
    kelasDefault: "Kelas XI",
    mapel: "Ekonomi",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pemahaman Ekonomi",
        deskripsiCP:
          "Menganalisis pertumbuhan ekonomi, ketenagakerjaan, kebijakan fiskal dan moneter, APBN/APBD, perdagangan internasional, pasar valuta asing, serta siklus akuntansi perusahaan jasa dan dagang.",
        kompetensiKKO: "Menganalisis Indikator Makroekonomi, Mengevaluasi Instrumen Kebijakan Moneter & Fiskal, Menganalisis Struktur APBN",
        lingkupMateri: "Pertumbuhan Ekonomi (PDB/GNP), Pengangguran & Inflasi, Operasi Pasar Terbuka (BI Rate), Pajak & Belanja Negara (APBN), Neraca Pembayaran Internasional",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menganalisis instrumen kebijakan moneter (suku bunga acuan, giro wajib minimum, operasi pasar terbuka) dan kebijakan fiskal (pajak dan subsidi belanja) dalam mengendalikan laju inflasi dan menjaga stabilitas pertumbuhan ekonomi nasional.",
            alokasiJP: 10,
            semester: "GANJIL",
            prasyarat: "Memahami konsep pendapatan nasional dan indeks harga konsumen",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kewargaan", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Keadilan", "PPRA: Berimbang (Tawazun)"],
            konteksPembelajaran: {
              stimulus: "Bank Indonesia menaikkan suku bunga acuan (BI-Rate) untuk meredam gejolak pelemahan nilai tukar Rupiah dan menekan imported inflation akibat lonjakan harga minyak mentah dunia.",
              stimulusKemenag: "Pengendalian inflasi dan pengelolaan keuangan negara yang adil mencegah tergerusnya daya beli masyarakat miskin dan mewujudkan pemerataan kekayaan sosial.",
              masalahNyata: "Bagaimana bauran kebijakan (policy mix) antara Bank Sentral dan Kementerian Keuangan bekerja sama mencegah terjadinya stagflasi (inflasi tinggi disertai perlambatan ekonomi)?",
              kegiatanEksplorasi: [
                "Simulasi Rapat Dewan Gubernur (RDG) Bank Sentral dalam menentukan kenaikan atau penurunan suku bunga acuan.",
                "Analisis infografis postur APBN: Pendapatan Perpajakan vs Belanja Perlindungan Sosial dan Subsidi Energi.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Kebijakan Makroekonomi", teks: "Evaluasilah dampak penerapan kebijakan moneter kontraktif (tight money policy) terhadap laju inflasi versus risiko kenaikan tingkat kredit macet (NPL) sektor UMKM!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Analisis kebijakan moneter dan fiskal",
                  baru: "Menyamakan otoritas kebijakan moneter (BI) dengan kebijakan fiskal (Kemenkeu).",
                  layak: "Mampu menyebutkan instrumen kebijakan moneter Bank Indonesia.",
                  cakap: "Mampu menganalisis mekanisme transmisi kebijakan moneter terhadap peredaran uang dan inflasi.",
                  mahir: "Mampu merumuskan rekomendasi bauran kebijakan fiskal-moneter countercyclical saat menghadapi ancaman resesi ekonomi global.",
                },
              ],
              soalPGK: {
                pertanyaan: "Ketika terjadi INFLASI TINGGI di dalam negeri, manakah instrumen KEBIJAKAN MONETER KONTRAKTIF yang dapat diambil oleh Bank Sentral? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Menaikkan tingkat suku bunga acuan (BI Rate) untuk mendorong masyarakat menabung.", isCorrect: true 
              },
                  { kode: "B", teks: "Menjual Surat Berharga Negara (SBN/SBI) kepada masyarakat untuk menarik uang beredar.", isCorrect: true },
                  { kode: "C", teks: "Menaikkan persentase Cadangan Kas Wajib (Giro Wajib Minimum) pada bank umum.", isCorrect: true },
                  { kode: "D", teks: "Menurunkan suku bunga kredit perbankan agar konsumsi masyarakat melonjak tajam.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah instrumen tight money policy untuk mengurangi jumlah uang beredar (JUB). Pilihan D adalah kebijakan ekspansif.",
              },
              soalUraian: {
                level: "C4 (Analisis Mekanisme Kebijakan Fiskal)",
                pertanyaan: "Jelaskan bagaimana pemerintah menggunakan instrumen Kebijakan Fiskal Ekspansif (melalui komponen pajak dan belanja negara) untuk memulihkan perekonomian yang sedang mengalami kelesuan daya beli dan resesi!",
                kunci: "1. Menurunkan Tarif Pajak (misal: insentif PPh atau PPN ditanggung pemerintah): Hal ini meningkatkan pendapatan siap pakai (disposable income) masyarakat dan korporasi sehingga gairah konsumsi dan investasi meningkat. 2. Meningkatkan Belanja Negara (Government Spending): Memperbesar alokasi belanja proyek infrastruktur padat karya dan bantuan sosial tunai. Hal ini secara langsung menciptakan lapangan kerja baru, mengalirkan likuiditas ke masyarakat bawah, dan memicu efek pengganda ekonomi (multiplier effect) untuk menggerakkan roda ekonomi nasional.",
                pembahasan: "Penerapan kebijakan fiskal anggaran defisit saat resesi ekonomi.",
                rubrik: [
                  { kriteria: "Menjelaskan mekanisme penurunan pajak untuk mendongkrak disposable income", skor: 10 },
                  { kriteria: "Menjelaskan peran belanja infrastruktur/bansos dalam efek pengganda ekonomi", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },
];

export const B_INDO_DATASETS: CPDataset[] = [
  {
    fase: "Fase F",
    kelasDefault: "Kelas XI",
    mapel: "Bahasa Indonesia",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Menyimak",
        deskripsiCP: "Murid mampu mengevaluasi gagasan, perasaan, pandangan, arahan, dan/atau pesan dari teks nonsastra berbentuk teks aural (teks yang dibacakan dan/atau didengarkan); serta mengapresiasi teks sastra berbentuk teks aural.",
        kompetensiKKO: "Mengevaluasi, Mengapresiasi",
        lingkupMateri: "Teks aural nonsastra (opini, argumentasi, wicara) dan teks aural sastra",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP: "Mengevaluasi gagasan dan argumen kritis dari teks aural nonsastra (misalnya gelar wicara atau debat) serta merumuskan umpan balik yang relevan.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mampu menyimak dan memahami ide pokok teks aural",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "PPRA: Kritis dan Mandiri"],
            konteksPembelajaran: {
              stimulus: "Menyimak rekaman siniar (podcast) atau gelar wicara mengenai isu lingkungan atau teknologi digital.",
              stimulusKemenag: "Menyimak ceramah ilmiah atau dialog kebangsaan mengenai etika berteknologi.",
              masalahNyata: "Bagaimana menyaring fakta dari opini dan bias dalam sebuah diskusi panel atau gelar wicara?",
              kegiatanEksplorasi: ["Diskusi kelompok mengevaluasi argumen narasumber.", "Mencatat poin-poin kelemahan dan keunggulan argumen (logical fallacy)."],
              pertanyaanHOTS: [{ level: "C5 - Evaluasi Argumen", teks: "Berdasarkan argumen narasumber pertama, apa celah logika yang terdapat dalam pernyataan tersebut?" }],
              rubrikIndikator: [
                { kriteria: "Evaluasi Argumen", baru: "Hanya menyebutkan ulang isi.", layak: "Mampu menemukan argumen utama.", cakap: "Mampu menilai kelemahan dan kelebihan argumen.", mahir: "Mampu mengevaluasi argumen dan menyajikan kontra-argumen yang kuat." }
              ],
              soalPGK: {
                pertanyaan: "Manakah yang termasuk kelemahan argumen (logical fallacy) dari narasumber?",
                pilihan: [
                  { kode: "A", teks: "Menyerang pribadi lawan debat (Ad Hominem).", isCorrect: true 
              },
                  { kode: "B", teks: "Menyajikan data statistik resmi.", isCorrect: false },
                  { kode: "C", teks: "Menggeneralisasi masalah tanpa data pendukung.", isCorrect: true },
                  { kode: "D", teks: "Mengutip pendapat ahli yang relevan.", isCorrect: false }
                ],
                kunci: "Sesuai opsi benar",
                pembahasan: "Pembahasan soal ini merujuk pada materi."
              },
              soalUraian: {
                level: "C4 HOTS",
                pertanyaan: "Uraikan penilaian kritis Anda terhadap kesimpulan akhir narasumber terkait isu teknologi digital dalam gelar wicara tersebut!",
                kunci: "Kesimpulan narasumber dinilai kurang komprehensif karena mengabaikan kesenjangan digital di daerah terpencil dan hanya fokus pada infrastruktur perkotaan.",
                pembahasan: "Skor 4: Penilaian kritis sangat tajam dan didukung fakta empiris. Skor 3: Penilaian cukup kritis. Skor 2: Penilaian normatif. Skor 1: Tidak relevan.",
              }
            }
          }
        ]
      },
      {
        namaElemen: "Membaca dan Memirsa",
        deskripsiCP: "Murid mampu mengevaluasi informasi berupa gagasan, perasaan, pandangan, arahan, dan/atau pesan dari berbagai tipe teks berwujud teks visual dan/atau audiovisual untuk menemukan makna yang tersurat dan tersirat berdasarkan kaidah logika berpikir; merefleksi gagasan dan pandangan berdasarkan kaidah logika berpikir dari berbagai tipe teks berwujud teks visual dan/atau audiovisual; serta mengapresiasi berbagai tipe teks berwujud teks visual dan/atau audiovisual.",
        kompetensiKKO: "Mengevaluasi, Menemukan, Merefleksi, Mengapresiasi",
        lingkupMateri: "Teks visual dan audiovisual (infografis, film dokumenter, iklan, karya sastra visual)",
        tpList: [
          {
            kodeTP: "TP.02",
            teksTP: "Mengevaluasi makna tersurat dan tersirat serta validitas informasi dalam teks multimodal (visual/audiovisual) menggunakan kaidah logika berpikir yang kritis.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mampu mengidentifikasi ide utama dari teks visual",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Kebenaran", "PPRA: Integritas"],
            konteksPembelajaran: {
              stimulus: "Menonton film dokumenter atau memirsa infografis tentang fenomena sosial kontemporer (seperti cyberbullying atau perubahan iklim).",
              stimulusKemenag: "Memirsa tayangan dokumenter yang mengandung nilai-nilai keberagaman, toleransi, atau moderasi beragama.",
              masalahNyata: "Banyak beredar disinformasi berbentuk visual/video di media sosial yang menggiring opini publik.",
              kegiatanEksplorasi: ["Melakukan analisis perbandingan antara dua infografis dengan topik yang sama namun sumber berbeda.", "Membongkar bias informasi dari sebuah tayangan iklan sosial."],
              pertanyaanHOTS: [{ level: "C5 - Evaluasi Bias Informasi", teks: "Berdasarkan infografis tersebut, bagian data mana yang berpotensi menyesatkan pembaca karena tidak menampilkan konteks yang utuh?" }],
              rubrikIndikator: [
                { kriteria: "Analisis Makna dan Validitas Visual", baru: "Hanya mampu menyebutkan informasi eksplisit.", layak: "Mampu menemukan makna tersirat.", cakap: "Mampu mengevaluasi validitas sumber informasi visual.", mahir: "Mampu membongkar bias, propaganda, atau fallacy dalam teks audiovisual." }
              ],
              soalPGK: {
                pertanyaan: "Indikator teks multimodal yang mengandung disinformasi (hoaks) adalah:",
                pilihan: [
                  { kode: "A", teks: "Sumber kutipan tidak dapat diverifikasi (fiktif).", isCorrect: true 
              },
                  { kode: "B", teks: "Menggunakan data resmi dari BPS.", isCorrect: false },
                  { kode: "C", teks: "Manipulasi rasio grafik (chart) untuk melebih-lebihkan data.", isCorrect: true },
                  { kode: "D", teks: "Terdapat atribusi pembuat karya yang jelas.", isCorrect: false }
                ],
                kunci: "Sesuai opsi benar",
                pembahasan: "Pembahasan soal ini merujuk pada materi."
              },
              soalUraian: {
                level: "C4 HOTS",
                pertanyaan: "Bagaimana cara merefleksikan dan memvalidasi gagasan yang disampaikan melalui video dokumenter sejarah kontroversial?",
                kunci: "Melakukan cross-check silang (membaca lateral) dengan arsip sejarah lain, memeriksa kredibilitas sutradara/sumber ahli di video, dan mewaspadai efek dramatisasi yang memanipulasi emosi.",
                pembahasan: "Skor 4: Analisis sangat komprehensif (lateral reading). Skor 3: Cukup komprehensif. Skor 2: Penjelasan dasar. Skor 1: Tidak menjawab.",
              }
            }
          }
        ]
      },
      {
        namaElemen: "Berbicara dan Mempresentasikan",
        deskripsiCP: "Murid mampu mempresentasikan gagasan, perasaan, pandangan, arahan, pesan, dan/atau kreativitas berbahasa dalam berbagai tipe teks berbentuk monolog, dialog, dan/atau gelar wicara secara logis, sistematis, kritis, dan kreatif sesuai dengan norma kesopanan dan budaya Indonesia; menyajikan karya sastra secara kreatif dan menarik; serta mempertahankan hasil penelitian dengan argumentasi.",
        kompetensiKKO: "Mempresentasikan, Menyajikan, Mempertahankan Argumentasi",
        lingkupMateri: "Presentasi ilmiah, gelar wicara, debat, penyajian karya sastra (musikalisasi puisi, monolog teater)",
        tpList: [
          {
            kodeTP: "TP.03",
            teksTP: "Mempresentasikan dan mempertahankan gagasan atau hasil penelitian sederhana dalam bentuk forum ilmiah (debat/panel) dengan argumen yang logis dan etika komunikasi yang santun.",
            alokasiJP: 6,
            semester: "GENAP",
            prasyarat: "Mampu merumuskan argumen yang terstruktur",
            dimensiKarakterDinas: ["Komunikasi", "Penalaran Kritis", "Kreativitas"],
            dimensiKarakterKemenag: ["Cinta Perdamaian", "PPRA: Kesantunan (Tasamuh)"],
            konteksPembelajaran: {
              stimulus: "Simulasi sidang karya tulis ilmiah atau perdebatan ala parlemen tentang isu aktual nasional.",
              stimulusKemenag: "Presentasi hasil kajian literatur mengenai integrasi sains dan agama dalam menghadapi tantangan modern.",
              masalahNyata: "Seringkali perdebatan di ruang publik kehilangan substansi karena mengedepankan emosi dibandingkan argumen berbasis data.",
              kegiatanEksplorasi: ["Mempersiapkan bahan tayang presentasi (slide).", "Melakukan simulasi debat atau gelar wicara dengan peran pro dan kontra.", "Berlatih menyajikan musikalisasi puisi atau teatrikal monolog."],
              pertanyaanHOTS: [{ level: "C6 - Kreasi dan Pembelaan Argumen", teks: "Susunlah argumen pembelaan (rebuttal) yang kuat jika data penelitian yang Anda presentasikan disanggah kelayakannya oleh tim penguji!" }],
              rubrikIndikator: [
                { kriteria: "Keterampilan Presentasi dan Debat", baru: "Membaca teks secara pasif.", layak: "Mampu berbicara dengan runtut tapi kurang interaktif.", cakap: "Mampu mempertahankan argumen dengan data yang relevan.", mahir: "Mampu memimpin gelar wicara, merespons sanggahan secara kritis, elegan, dan menjunjung tinggi etika budaya Indonesia." }
              ],
              soalPGK: {
                pertanyaan: "Teknik mempertahankan argumen yang efektif dan santun dalam sebuah presentasi penelitian adalah:",
                pilihan: [
                  { kode: "A", teks: "Mendengarkan sanggahan hingga selesai sebelum memberikan bantahan berbasis data.", isCorrect: true 
              },
                  { kode: "B", teks: "Menyerang kredibilitas penguji yang memberikan sanggahan.", isCorrect: false },
                  { kode: "C", teks: "Mengakui keterbatasan ruang lingkup penelitian jika sanggahan valid.", isCorrect: true },
                  { kode: "D", teks: "Menghindari kontak mata untuk menunjukkan rasa hormat berlebihan.", isCorrect: false }
                ],
                kunci: "Sesuai opsi benar",
                pembahasan: "Pembahasan soal ini merujuk pada materi."
              },
              soalUraian: {
                level: "C4 HOTS",
                pertanyaan: "Sebutkan dan jelaskan 3 aspek non-verbal (gestur/vokal) yang krusial untuk dikuasai saat menyajikan karya sastra berbentuk monolog teatrikal di panggung!",
                kunci: "1. Intonasi dan Artikulasi (kejelasan pengucapan kata dan dinamika nada). 2. Ekspresi Wajah (mimik) yang mencerminkan emosi tokoh. 3. Gestur (gerakan tubuh) yang memperkuat pesan dramatik.",
                pembahasan: "Skor 4: Tiga aspek dijelaskan dengan sangat detail. Skor 3: Dua aspek dijelaskan. Skor 2: Satu aspek. Skor 1: Jawaban salah.",
              }
            }
          }
        ]
      },
      {
        namaElemen: "Menulis",
        deskripsiCP: "Murid mampu menulis gagasan, pandangan, imajinasi, dan/atau pengetahuan metakognisi dalam berbagai tipe teks secara logis, kritis, dan kreatif; serta mempublikasikan hasil karya di media cetak, elektronik, dan/atau digital.",
        kompetensiKKO: "Menulis, Merumuskan, Mempublikasikan",
        lingkupMateri: "Penulisan esai kritis, artikel opini, cerita pendek (imajinasi), karya ilmiah sederhana, dan publikasi digital (blog/media sosial)",
        tpList: [
          {
            kodeTP: "TP.04",
            teksTP: "Menulis artikel opini, esai, atau karya sastra orisinal yang logis, kritis, dan kreatif, serta mempublikasikannya di platform digital atau media massa.",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "Mampu menyusun kalimat efektif dan paragraf yang koheren",
            dimensiKarakterDinas: ["Kreativitas", "Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "PPRA: Dinamis dan Inovatif (Tathawwur wa Ibtikar)"],
            konteksPembelajaran: {
              stimulus: "Membuat kampanye digital (digital campaign) atau blog sastra untuk menyuarakan gagasan inovatif bagi masyarakat.",
              stimulusKemenag: "Menulis esai reflektif mengenai peran pemuda beragama di era kecerdasan buatan.",
              masalahNyata: "Rendahnya kualitas literasi digital dan maraknya plagiarisme dalam penulisan karya anak bangsa di internet.",
              kegiatanEksplorasi: ["Melakukan riset referensi untuk esai.", "Menyusun draf tulisan, melakukan swa-sunting (self-editing), dan uji coba baca (peer-review).", "Mendesain tata letak untuk publikasi di media sosial (misal: carousel post) atau blog kompasiana."],
              pertanyaanHOTS: [{ level: "C6 - Kreasi Tulisan Orisinal", teks: "Rancanglah sebuah artikel opini 500 kata yang mengkritik secara konstruktif fenomena 'Fear Of Missing Out (FOMO)' di kalangan remaja masa kini!" }],
              rubrikIndikator: [
                { kriteria: "Kualitas Penulisan dan Publikasi", baru: "Tulisan tidak runtut dan banyak salah ejaan.", layak: "Struktur tulisan jelas namun gagasan kurang mendalam.", cakap: "Gagasan kritis, tata bahasa baik, dan orisinal.", mahir: "Tulisan sangat memukau (engaging), logis, bebas plagiasi, dan berhasil dipublikasikan secara daring dengan respons audiens." }
              ],
              soalPGK: {
                pertanyaan: "Dalam menyunting draf artikel opini sebelum dipublikasikan, aspek penyuntingan mekanis (copyediting) meliputi:",
                pilihan: [
                  { kode: "A", teks: "Pemeriksaan ejaan (PUEBI) dan tanda baca.", isCorrect: true 
              },
                  { kode: "B", teks: "Perubahan total struktur argumen dan tesis utama.", isCorrect: false },
                  { kode: "C", teks: "Kesesuaian penggunaan huruf kapital dan miring.", isCorrect: true },
                  { kode: "D", teks: "Penyusunan desain layout gambar grafis.", isCorrect: false }
                ],
                kunci: "Sesuai opsi benar",
                pembahasan: "Pembahasan soal ini merujuk pada materi."
              },
              soalUraian: {
                level: "C4 HOTS",
                pertanyaan: "Apa pentingnya proses 'Peer-Review' (tinjauan sejawat) sebelum mempublikasikan sebuah karya ilmiah atau opini ke media massa digital?",
                kunci: "Peer-review penting untuk meminimalisasi bias (blind-spot) penulis, mengoreksi kesalahan logika yang terlewat (fallacy), memastikan keterbacaan (readability) bagi audiens umum, serta memvalidasi objektivitas tulisan.",
                pembahasan: "Skor 4: Alasan dijelaskan komprehensif dan tajam. Skor 3: Alasan cukup jelas. Skor 2: Alasan klise/umum. Skor 1: Jawaban tidak relevan.",
              }
            }
          }
        ]
      }
    ]
  },
  {
    fase: "Fase F",
    kelasDefault: "Kelas XI",
    mapel: "Bahasa Indonesia Tingkat Lanjut",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Menyimak",
        deskripsiCP: "Murid mampu mengevaluasi teks nonsastra berbentuk teks aural yang digunakan dalam konteks sosial, akademis, dan dunia kerja; serta mengapresiasi teks sastra Indonesia dan teks sastra dunia berbentuk teks aural dan teks audio.",
        kompetensiKKO: "Mengevaluasi, Mengapresiasi",
        lingkupMateri: "Teks aural akademik, orasi dunia kerja, apresiasi sastra dunia dan sastra Indonesia tingkat lanjut",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP: "Mengevaluasi kompleksitas informasi dari teks aural akademik (kuliah pakar) atau profesional (dunia kerja), serta mengapresiasi mahakarya sastra dunia secara mendalam.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mampu menyimak wacana ilmiah standar tingkat menengah",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kewargaan Global"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "PPRA: Kedinamisan dan Inovasi"],
            konteksPembelajaran: {
              stimulus: "Menyimak orasi ilmiah penganugerahan Nobel atau bedah buku mahakarya sastra dunia.",
              stimulusKemenag: "Menyimak simposium akademik internasional lintas budaya mengenai sastra Islam.",
              masalahNyata: "Banyak lulusan SMA yang mengalami 'culture shock' akademis di dunia perkuliahan/kerja karena tidak terbiasa menyimak dan menangkap poin dari paparan yang panjang dan kompleks.",
              kegiatanEksplorasi: ["Mempraktikkan teknik mencatat Cornell (Cornell Note-taking) saat menyimak paparan dosen tamu/pakar.", "Mendengarkan pembacaan sajak sastra dunia dan menganalisis stilistikanya."],
              pertanyaanHOTS: [{ level: "C5 - Evaluasi Teks Akademis", teks: "Nilailah kekuatan dan kelemahan metodologi yang dipaparkan oleh pembicara dalam sesi orasi akademik tersebut!" }],
              rubrikIndikator: [
                { kriteria: "Keterampilan Menyimak Lanjut", baru: "Hanya menyimak pasif.", layak: "Mampu membuat ringkasan kasar.", cakap: "Mampu menangkap argumen utama dan detail teknis di dunia kerja.", mahir: "Mampu mengekstraksi informasi berdensitas tinggi dari teks aural dan menyintesisnya ke dalam notulen komprehensif." }
              ],
              soalPGK: {
                pertanyaan: "Keunggulan teknik mencatat Cornell (Cornell Note Taking) saat menyimak teks aural akademik adalah:",
                pilihan: [
                  { kode: "A", teks: "Membagi catatan menjadi kolom isyarat (cue), kolom catatan utama, dan ringkasan.", isCorrect: true 
              },
                  { kode: "B", teks: "Merekam suara pembicara tanpa perlu menulis.", isCorrect: false },
                  { kode: "C", teks: "Memudahkan proses *recall* atau pengingatan kembali saat belajar (review).", isCorrect: true },
                  { kode: "D", teks: "Menyalin seluruh kata yang diucapkan (transkrip verbatim).", isCorrect: false }
                ],
                kunci: "Sesuai opsi benar",
                pembahasan: "Pembahasan soal ini merujuk pada materi."
              },
              soalUraian: {
                level: "C4 HOTS",
                pertanyaan: "Jelaskan mengapa apresiasi terhadap sastra dunia penting untuk menumbuhkan wawasan kewargaan global (global citizenship)!",
                kunci: "Sastra dunia merekam kondisi psikologis, budaya, dan konflik historis dari berbagai bangsa. Dengan mengapresiasinya, murid dapat menumbuhkan empati universal, memahami keberagaman pandangan dunia (worldview), dan terhindar dari pemikiran etnosentris.",
                pembahasan: "Skor 4: Jawaban sangat filosofis dan kritis. Skor 3: Memadai. Skor 2: Kurang mendalam. Skor 1: Jawaban melenceng.",
              }
            }
          }
        ]
      },
      {
        namaElemen: "Membaca dan Memirsa",
        deskripsiCP: "Murid mampu mengevaluasi berbagai teks yang digunakan dalam konteks sosial, akademis, dan/atau dunia kerja berbentuk cetak atau digital; serta mempublikasikan hasil karya baik di media cetak maupun digital.",
        kompetensiKKO: "Mengevaluasi, Mempublikasikan (Literasi Baca)",
        lingkupMateri: "Jurnal akademik, laporan teknis dunia kerja, literatur kompleks, publikasi media massa",
        tpList: [
          {
            kodeTP: "TP.02",
            teksTP: "Mengevaluasi kualitas dan bias dari literatur akademik, jurnal, serta dokumen teknis dunia kerja, kemudian mempublikasikan resensi atau tinjauan literatur secara digital.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Menguasai kaidah membaca cepat dan kritis",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Kebenaran", "PPRA: Integritas"],
            konteksPembelajaran: {
              stimulus: "Menganalisis artikel jurnal ilmiah berbahasa Indonesia atau laporan teknis/Annual Report perusahaan BUMN.",
              stimulusKemenag: "Menganalisis naskah akademis mengenai tafsir sosial-keagamaan terkini dari jurnal terakreditasi.",
              masalahNyata: "Minimnya kemampuan membaca dokumen teknis dan jurnal ilmiah (literasi tingkat lanjut) yang menjadi hambatan besar saat memasuki universitas atau dunia korporasi.",
              kegiatanEksplorasi: ["Membaca skimming dan scanning dokumen Annual Report untuk mencari data kerugian perusahaan.", "Membedah metodologi dan temuan dalam artikel jurnal SINTA."],
              pertanyaanHOTS: [{ level: "C5 - Evaluasi Jurnal/Dokumen", teks: "Berdasarkan tinjauan pustaka jurnal tersebut, adakah argumen penulis yang bias akibat sponsor penelitian?" }],
              rubrikIndikator: [
                { kriteria: "Analisis Bacaan Akademik", baru: "Hanya menemukan informasi tersurat.", layak: "Mampu menjelaskan struktur teks akademis.", cakap: "Mampu mendeteksi asumsi dan kerangka teori penulis.", mahir: "Mampu memberikan kritik yang berbobot atas kelemahan argumen atau metodologi pada dokumen teknis dunia kerja." }
              ],
              soalPGK: {
                pertanyaan: "Ciri-ciri artikel jurnal akademik yang kredibel adalah:",
                pilihan: [
                  { kode: "A", teks: "Diterbitkan oleh penerbit predatori tanpa proses peer-review.", isCorrect: false 
              },
                  { kode: "B", teks: "Mencantumkan daftar rujukan (referensi) yang mutakhir dan relevan.", isCorrect: true },
                  { kode: "C", teks: "Memiliki kejelasan pada bagian metodologi penelitian.", isCorrect: true },
                  { kode: "D", teks: "Bahasa yang digunakan sangat emosional dan bombastis.", isCorrect: false }
                ],
                kunci: "Sesuai opsi benar",
                pembahasan: "Pembahasan soal ini merujuk pada materi."
              },
              soalUraian: {
                level: "C4 HOTS",
                pertanyaan: "Ketika membaca Laporan Tahunan (Annual Report) suatu instansi, mengapa bagian 'Catatan Atas Laporan Keuangan' sangat vital untuk dibaca kritis?",
                kunci: "Karena bagian tersebut memuat penjelasan mendetail atas angka-angka neraca, kebijakan akuntansi yang dipakai (yang bisa saja dirancang untuk menutupi kerugian), risiko utang, dan sengketa hukum yang mungkin tidak ditampilkan secara eksplisit di grafik utama.",
                pembahasan: "Skor 4: Sangat komprehensif. Skor 3: Cukup tepat. Skor 2: Penjelasan kurang logis. Skor 1: Salah.",
              }
            }
          }
        
        ]
      }
    ]
  }
];

export const GEOGRAFI_DATASETS: CPDataset[] = [
  {
    fase: "Fase F",
    kelasDefault: "Kelas XI",
    mapel: "Geografi",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pemahaman Konsep",
        deskripsiCP: "Menganalisis keuntungan posisi strategis wilayah Indonesia, keanekaragaman hayati, geografi penduduk, perubahan iklim, kebencanaan, lingkungan hidup, serta kewilayahan, pembangunan, dan kerja sama antarnegara.",
        kompetensiKKO: "Menganalisis, Memahami, Mengevaluasi",
        lingkupMateri: "Posisi Strategis Indonesia & SDA, Keanekaragaman Hayati, Dinamika Kependudukan, Mitigasi Bencana & Perubahan Iklim, Kewilayahan & Kerja Sama Global",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP: "Menganalisis keuntungan posisi strategis wilayah Indonesia dari sisi astronomis, geografis, dan geologis serta memetakan potensi sumber daya alamnya menggunakan prinsip Sistem Informasi Geografis (SIG).",
            alokasiJP: 10,
            semester: "GANJIL",
            prasyarat: "Memahami konsep dasar peta dan koordinat geografis",
            dimensiKarakterDinas: ["Kewargaan", "Penalaran Kritis", "Kreativitas"],
            dimensiKarakterKemenag: ["Cinta Tanah Air", "PPRA: Dinamis dan Inovatif"],
            konteksPembelajaran: {
              stimulus: "Menampilkan peta jalur pelayaran internasional (ALKI) dan peta sebaran barang tambang di Indonesia.",
              stimulusKemenag: "Mensyukuri kekayaan alam nusantara sebagai anugerah Tuhan yang wajib dikelola untuk kemaslahatan bersama.",
              masalahNyata: "Bagaimana Indonesia dapat mengoptimalkan posisi strategisnya sebagai poros maritim dunia tanpa mengorbankan kelestarian ekologi laut?",
              kegiatanEksplorasi: [
                "Melakukan overlay peta tematik sederhana untuk menentukan lokasi pelabuhan strategis.",
                "Diskusi kelompok mengenai dampak geologis (Cincin Api Pasifik) terhadap potensi energi panas bumi dan risiko gempa."
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Ruang", teks: "Berdasarkan peta topografi dan geologi yang disajikan, evaluasilah kelayakan wilayah pesisir X untuk dikembangkan menjadi Kawasan Ekonomi Khusus maritim!" }
              ],
              rubrikIndikator: [
                { kriteria: "Analisis Posisi Strategis", baru: "Hanya menyebutkan letak lintang dan bujur.", layak: "Mampu menjelaskan dampak letak geografis secara umum.", cakap: "Mampu menganalisis keuntungan ekonomi dan risiko geologis dari posisi Indonesia.", mahir: "Mampu menyusun strategi pemanfaatan posisi strategis Indonesia yang berkelanjutan menggunakan data spasial." }
              ],
              soalPGK: {
                pertanyaan: "Keuntungan Indonesia berada di persimpangan jalur perdagangan dunia (posisi silang) adalah... (Pilih jawaban yang benar)",
                pilihan: [
                  { kode: "A", teks: "Meningkatnya devisa negara dari sektor bea cukai dan logistik pelabuhan transit.", isCorrect: true 
              },
                  { kode: "B", teks: "Bebas dari ancaman gempa bumi vulkanik dan tektonik.", isCorrect: false },
                  { kode: "C", teks: "Terjadinya akulturasi budaya yang memperkaya khazanah sosial masyarakat.", isCorrect: true },
                  { kode: "D", teks: "Menurunnya biaya impor bahan baku industri karena jarak yang jauh.", isCorrect: false }
                ],
                kunci: "Sesuai opsi benar",
                pembahasan: "Pembahasan soal ini merujuk pada materi."
              },
              soalUraian: {
                level: "C4 HOTS",
                pertanyaan: "Analisislah mengapa letak geologis Indonesia pada zona pertemuan tiga lempeng tektonik utama dianggap sebagai 'pedang bermata dua' bagi pembangunan nasional!",
                kunci: "Di satu sisi (keuntungan), aktivitas tektonik menghasilkan tanah vulkanik yang subur dan cadangan energi panas bumi/mineral yang melimpah. Di sisi lain (kerugian/risiko), wilayah tersebut sangat rawan bencana gempa bumi, letusan gunung api, dan tsunami yang dapat merusak infrastruktur pembangunan.",
                pembahasan: "Skor 4: Analisis dua sisi sangat komprehensif dan logis. Skor 3: Analisis dua sisi cukup jelas. Skor 2: Hanya membahas satu sisi. Skor 1: Jawaban tidak relevan.",
              }
            }
          }
        ]
      }
    ]
  }
];

export const INFORMATIKA_F_DATASETS: CPDataset[] = [
  {
    fase: "Fase F",
    kelasDefault: "Kelas XI",
    mapel: "Informatika",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Berpikir Komputasional",
        deskripsiCP: "Memahami alur proses pengembangan program atau produk teknologi digital; menganalisis persoalan yang bisa menghasilkan lebih dari satu solusi dengan beberapa strategi algoritmik (greedy, dynamic programming, rekursi); merancang struktur data kompleks; mengenali jaringan komputer dan troubleshooting.",
        kompetensiKKO: "Menganalisis, Mengevaluasi, Merancang, Menerapkan",
        lingkupMateri: "Engineering Process, Strategi Algoritmik Lanjut, Struktur Data Kompleks, Jaringan Komputer & Troubleshooting",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP: "Menganalisis persoalan optimasi kompleks dan merancang solusi menggunakan strategi algoritmik dasar (seperti greedy atau dynamic programming) serta menjustifikasi efisiensi dari alternatif solusi yang dihasilkan.",
            alokasiJP: 10,
            semester: "GANJIL",
            prasyarat: "Memahami struktur data standar dan dasar-dasar algoritma",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "PPRA: Dinamis dan Inovatif (Tathawwur wa Ibtikar)"],
            konteksPembelajaran: {
              stimulus: "Siswa dihadapkan pada studi kasus penentuan rute terpendek pengiriman logistik bencana atau optimasi kapasitas ransum (Knapsack Problem).",
              stimulusKemenag: "Siswa dihadapkan pada pengaturan distribusi bantuan zakat yang adil dan efisien (optimasi) menggunakan penalaran sistematis, mensyukuri akal untuk kebaikan umat.",
              masalahNyata: "Bagaimana sebuah aplikasi kurir menentukan rute paling efisien untuk mengantarkan 10 paket dalam waktu tercepat?",
              kegiatanEksplorasi: [
                "Simulasi unplugged Knapsack Problem menggunakan barang-barang berbobot dan bernilai di kelas.",
                "Eksplorasi perbandingan hasil eksekusi pendekatan Greedy dan Dynamic Programming pada bahasa pemrograman Python/C++."
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Algoritma", teks: "Bandingkan hasil solusi pendekatan Greedy dan Dynamic Programming pada kasus Knapsack Problem ini. Mengapa pendekatan Greedy terkadang tidak memberikan hasil yang paling optimal? Berikan justifikasi!" }
              ],
              rubrikIndikator: [
                { kriteria: "Analisis Strategi Algoritmik", baru: "Hanya mampu menyebutkan nama strategi tanpa penjelasan.", layak: "Mampu menjelaskan konsep dasar algoritma Greedy dan DP.", cakap: "Mampu merancang solusi menggunakan salah satu algoritma dan menganalisis hasilnya.", mahir: "Mampu membandingkan kedua alternatif solusi (Greedy vs DP), merancang kode/pseudocode yang efisien, dan memberikan justifikasi trade-off kecepatan memori." }
              ],
              soalPGK: {
                pertanyaan: "Kelemahan utama pendekatan Greedy dalam menyelesaikan permasalahan optimasi dibandingkan dengan Dynamic Programming adalah... (Pilih 2 jawaban yang benar)",
                pilihan: [
                  { kode: "A", teks: "Greedy mengambil keputusan optimal lokal tanpa memperhitungkan dampak pada keputusan selanjutnya.", isCorrect: true 
              },
                  { kode: "B", teks: "Greedy membutuhkan memori yang jauh lebih besar dari Dynamic Programming.", isCorrect: false },
                  { kode: "C", teks: "Greedy mungkin terjebak pada optimum lokal dan tidak mencapai optimum global.", isCorrect: true },
                  { kode: "D", teks: "Greedy memecah masalah menjadi sub-masalah yang tumpang tindih secara rekursif.", isCorrect: false }
                ],
                kunci: "Sesuai opsi benar",
                pembahasan: "Pembahasan soal ini merujuk pada materi."
              },
              soalUraian: {
                level: "C4 HOTS",
                pertanyaan: "Analisislah mengapa pada kasus pencarian rute terpendek dengan biaya tertentu (seperti Traveling Salesperson Problem skala kecil), pendekatan Brute Force/Rekursif menjamin hasil paling optimal, namun tidak praktis digunakan! Jelaskan trade-off antara waktu eksekusi dan optimalitas solusi!",
                kunci: "Brute Force mencoba semua kemungkinan kombinasi rute, sehingga 100% menjamin optimum global ditemukan. Namun, pendekatan ini memiliki kompleksitas waktu faktorial O(n!), yang tidak praktis untuk jumlah titik (n) yang besar karena waktu komputasi akan meledak secara eksponensial. Trade-off: untuk kecepatan, sering digunakan heuristik/Greedy yang mengorbankan kepastian hasil paling optimal demi waktu penyelesaian yang masuk akal.",
                pembahasan: "Skor 4: Penjelasan sangat komprehensif, menyebut kompleksitas waktu dan trade-off. Skor 3: Penjelasan cukup jelas tentang mengapa tidak praktis. Skor 2: Hanya menjawab mencoba semua kemungkinan tanpa membahas trade-off waktu. Skor 1: Jawaban keliru atau sangat tidak relevan.",
              }
            }
          }
        ]
      }
    ]
  }
];



const KIMIA_F_DATASETS: CPDataset[] = [
  {
    fase: "Fase F",
    kelasDefault: "Kelas XI",
    mapel: "Kimia",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pemahaman Kimia & Keterampilan Proses",
        deskripsiCP: "Peserta didik memiliki pemahaman fakta, konsep, prinsip, hukum, dan teori pada struktur atom, ikatan kimia, bentuk molekul, gaya intermolekuler, termokimia, laju reaksi, kesetimbangan kimia, larutan, sel elektrokimia, senyawa karbon, dan makromolekul. Peserta didik memiliki kemampuan mengamati, mempertanyakan, memprediksi, merencanakan, melakukan penyelidikan, menganalisis data, mengevaluasi, serta mengomunikasikan hasil.",
        kompetensiKKO: "Menganalisis, Menjelaskan, Menerapkan, Mengidentifikasi, Merancang, Mengevaluasi",
        lingkupMateri: "Struktur Atom & SPU, Ikatan Kimia, Termokimia, Laju Reaksi, Kesetimbangan Kimia, Sifat Koligatif, Redoks & Elektrokimia, Senyawa Karbon & Makromolekul",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP: "Menganalisis hubungan struktur atom dengan sistem periodik unsur serta kaitannya dengan teknologi analitik modern.",
            alokasiJP: 30,
            semester: "GANJIL",
            prasyarat: "Memahami model atom dasar dan sifat unsur pada fase sebelumnya",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "PPRA: Dinamis dan Inovatif (Tathawwur wa Ibtikar)"],
            konteksPembelajaran: {
              stimulus: "Siswa mengamati spektrum cahaya dari kembang api dan menghubungkannya dengan perpindahan elektron (eksitasi/emisi energi).",
              stimulusKemenag: "Siswa mendiskusikan keteraturan struktur atom sebagai bukti kebesaran ciptaan Tuhan di alam semesta mikro.",
              masalahNyata: "Bagaimana struktur elektron suatu atom menentukan penggunaannya dalam teknologi medis seperti MRI (Magnetic Resonance Imaging)?",
              kegiatanEksplorasi: [
                "Melakukan analisis kasus mengenai aplikasi konfigurasi mekanika kuantum pada semikonduktor.",
                "Membuat rancangan model (misal menggunakan PhET) konfigurasi elektron dan bilangan kuantum."
              ],
              pertanyaanHOTS: [
                { level: "C5 - Mengevaluasi", teks: "Evaluasilah mengapa kestabilan konfigurasi setengah penuh pada subkulit d (seperti Kromium) lebih stabil dibandingkan konfigurasi teoritisnya!" }
              ],
              rubrikIndikator: [
                { kriteria: "Analisis Struktur Atom", baru: "Hanya dapat menulis konfigurasi kulit Bohr.", layak: "Mampu menulis konfigurasi subkulit namun salah menentukan bilangan kuantum.", cakap: "Mampu menulis konfigurasi dengan benar sesuai aturan Aufbau, Pauli, dan Hund.", mahir: "Sangat presisi menganalisis anomali konfigurasi dan mengaitkannya dengan fenomena MRI." }
              ],
              soalPGK: {
                pertanyaan: "Sebuah elektron terakhir memiliki bilangan kuantum: n = 3, l = 1, m = -1, s = -1/2. Pernyataan yang benar adalah... (Pilih 2)",
                pilihan: [
                  { kode: "A", teks: "Konfigurasi valensi adalah 3s2 3p4.", isCorrect: true },
                  { kode: "B", teks: "Unsur tersebut terletak di golongan IVA.", isCorrect: false },
                  { kode: "C", teks: "Unsur tersebut merupakan golongan VIA.", isCorrect: true },
                  { kode: "D", teks: "Jari-jari atom unsur tersebut lebih besar dari Natrium.", isCorrect: false }
                ],
                kunci: "A dan C",
                pembahasan: "n=3, l=1 (subkulit p). m=-1, s=-1/2 berarti ada 4 elektron di subkulit p. Konfigurasi valensi = 3s2 3p4 (Golongan VIA)."
              },
              soalUraian: {
                level: "C4 HOTS",
                pertanyaan: "Analisislah mengapa energi ionisasi Oksigen (O) lebih rendah dibandingkan Nitrogen (N) meskipun secara umum energi ionisasi meningkat dari kiri ke kanan dalam satu periode!",
                kunci: "Nitrogen memiliki konfigurasi 2p3 (setengah penuh, stabil). Oksigen memiliki 2p4, di mana terdapat satu pasang elektron di orbital p yang menimbulkan gaya tolak-menolak (repulsi), sehingga elektron lebih mudah dilepaskan.",
                pembahasan: "Skor 10: Penjelasan lengkap dengan konfigurasi dan konsep repulsi elektron. Skor 5: Penjelasan kurang detail mengenai stabilitas orbital."
              }
            }
          },
          {
            kodeTP: "TP.02",
            teksTP: "Membandingkan jenis ikatan kimia dan gaya intermolekuler dalam memprediksi sifat fisik materi.",
            alokasiJP: 35,
            semester: "GANJIL",
            prasyarat: "Memahami elektron valensi dan kestabilan atom (aturan oktet/duplet)",
            dimensiKarakterDinas: ["Kolaborasi", "Penalaran Kritis"],
            dimensiKarakterKemenag: ["Kewargaan", "Kemandirian"],
            konteksPembelajaran: {
              stimulus: "Guru mendemonstrasikan es batu yang mengapung di air dan titik didih air yang tinggi dibanding senyawa hidrida segolongannya (H2S).",
              stimulusKemenag: "Air diciptakan memiliki ikatan hidrogen unik sehingga wujudnya cair pada suhu ruang, menjadikannya sumber kehidupan sebagaimana dalam Al-Qur'an.",
              masalahNyata: "Mengapa sabun cuci mampu menghilangkan noda lemak dari pakaian, sedangkan air murni tidak bisa?",
              kegiatanEksplorasi: [
                "Eksplorasi laboratorium menguji tegangan permukaan air vs aseton.",
                "Menggambarkan struktur Lewis dan geometri molekul VSEPR menggunakan aplikasi Molview atau plastisin."
              ],
              pertanyaanHOTS: [
                { level: "C5 - Mengevaluasi", teks: "Berdasarkan gaya antarmolekulnya, evaluasilah efektivitas senyawa surfaktan dalam mendispersikan minyak dalam air!" }
              ],
              rubrikIndikator: [
                { kriteria: "Analisis VSEPR dan Intermolekuler", baru: "Hanya menyebutkan jenis ikatan.", layak: "Mampu membedakan polar/nonpolar tanpa mengaitkannya ke titik didih.", cakap: "Mampu menjelaskan ikatan hidrogen pada air menyebabkan titik didihnya tinggi.", mahir: "Mampu menganalisis komprehensif pengaruh kelarutan, viskositas, dan desain material berdasarkan gaya antarmolekul." }
              ],
              soalPGK: {
                pertanyaan: "Senyawa XCl3 dengan atom pusat X (Z=15) dan Cl (Z=17). Pernyataan yang benar tentang senyawa ini adalah... (Pilih 2)",
                pilihan: [
                  { kode: "A", teks: "Tipe geometrinya adalah AX3E1.", isCorrect: true },
                  { kode: "B", teks: "Bentuk molekulnya adalah Segitiga Planar.", isCorrect: false },
                  { kode: "C", teks: "Bentuk molekulnya adalah Piramida Trigonal dan bersifat polar.", isCorrect: true },
                  { kode: "D", teks: "Terdapat ikatan hidrogen kuat antarmolekul.", isCorrect: false }
                ],
                kunci: "A dan C",
                pembahasan: "Pusat P (Z=15) valensi 5. Mengikat 3 Cl, sisa 1 PEB. Tipe AX3E1 (Piramida Trigonal, asimetris/polar)."
              },
              soalUraian: {
                level: "C4 HOTS",
                pertanyaan: "Jelaskan secara ilmiah mengapa titik didih Butanol (117°C) sangat jauh berbeda dengan isomernya, Dietil Eter (34,6°C)!",
                kunci: "Butanol memiliki gugus -OH di mana hidrogen terikat pada atom O yang sangat elektronegatif, memungkinkan pembentukan ikatan hidrogen yang sangat kuat antar molekulnya. Dietil eter (C-O-C) tidak memiliki ikatan hidrogen langsung, hanya gaya dipol-dipol yang jauh lebih lemah.",
                pembahasan: "Skor 10: Menguraikan beda struktur -OH dan -O- serta kaitannya dengan ikatan hidrogen dan gaya dipol-dipol."
              }
            }
          }
        ]
      }
    ]
  }
];





const MATEMATIKA_F_DATASETS: CPDataset[] = [
  {
    fase: "Fase F",
    kelasDefault: "Kelas XI",
    mapel: "Matematika",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Bilangan",
        deskripsiCP: "Peserta didik dapat memodelkan pinjaman dan investasi dengan bunga majemuk dan anuitas, serta menyelidiki (secara numerik atau grafis) pengaruh masing-masing parameter (suku bunga, periode pembayaran) dalam model tersebut.",
        kompetensiKKO: "Memodelkan, Menyelidiki",
        lingkupMateri: "Bunga Majemuk, Anuitas, Model Pinjaman dan Investasi",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP: "Memodelkan pinjaman dan investasi dengan bunga majemuk dan anuitas serta menyelidiki secara numerik pengaruh suku bunga dan periode pembayaran.",
            alokasiJP: 25,
            semester: "GANJIL",
            prasyarat: "Memahami barisan dan deret aritmetika/geometri",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Kemandirian", "PPRA: Dinamis dan Inovatif"],
            konteksPembelajaran: {
              stimulus: "Siswa diberikan brosur pinjaman bank dan investasi reksa dana, lalu diminta menganalisis manakah yang lebih menguntungkan/merugikan dalam jangka panjang.",
              stimulusKemenag: "Siswa menganalisis sistem bagi hasil (syirkah) dibandingkan dengan bunga majemuk konvensional untuk memahami konsep keadilan ekonomi.",
              masalahNyata: "Bagaimana cara merencanakan pelunasan cicilan rumah (KPR) agar tidak terjebak utang yang menumpuk akibat bunga anuitas?",
              kegiatanEksplorasi: [
                "Melakukan simulasi perhitungan angsuran menggunakan spreadsheet.",
                "Membandingkan dua skema kredit dari bank berbeda."
              ],
              pertanyaanHOTS: [
                { level: "C5 - Mengevaluasi", teks: "Evaluasilah dampak perubahan suku bunga Bank Indonesia (BI Rate) terhadap cicilan KPR berstatus floating rate!" }
              ],
              rubrikIndikator: [
                { kriteria: "Pemodelan Finansial", baru: "Belum mampu membedakan bunga tunggal dan majemuk.", layak: "Mampu menghitung bunga majemuk namun belum memahami konsep anuitas.", cakap: "Mampu memodelkan perhitungan anuitas dan bunga majemuk dengan akurat.", mahir: "Mampu memberikan rekomendasi finansial berbasis analisis data matematis yang komprehensif." }
              ],
              soalPGK: {
                pertanyaan: "Pada pinjaman dengan sistem anuitas, komponen angsuran terdiri dari bunga dan cicilan pokok. Pernyataan yang benar seiring bertambahnya periode adalah... (Pilih 2)",
                pilihan: [
                  { kode: "A", teks: "Besar bunga setiap bulan semakin menurun.", isCorrect: true },
                  { kode: "B", teks: "Besar anuitas (total pembayaran bulanan) semakin meningkat.", isCorrect: false },
                  { kode: "C", teks: "Besar cicilan pokok setiap bulan semakin meningkat.", isCorrect: true },
                  { kode: "D", teks: "Rasio bunga terhadap cicilan pokok tetap konstan.", isCorrect: false }
                ],
                kunci: "A dan C",
                pembahasan: "Dalam sistem anuitas, total bayaran per bulan tetap (konstan). Karena sisa utang mengecil, porsi bunga menurun (A benar), sehingga porsi cicilan pokok membesar (C benar)."
              },
              soalUraian: {
                level: "C4 HOTS",
                pertanyaan: "Seseorang ingin mengambil pinjaman 100 juta dengan bunga 10% per tahun. Ia bimbang antara mengambil tenor 5 tahun atau 10 tahun. Analisislah konsekuensi finansial dari kedua pilihan tersebut berdasarkan konsep anuitas!",
                kunci: "Tenor 5 tahun memiliki cicilan per bulan yang lebih besar, namun total bunga yang dibayarkan jauh lebih kecil. Tenor 10 tahun memiliki cicilan per bulan lebih ringan, namun total bunga keseluruhan membengkak hampir dua kali lipat.",
                pembahasan: "Skor 10: Menganalisis trade-off antara cash flow bulanan (likuiditas) vs total beban bunga."
              }
            }
          }
        ]
      },
      {
        namaElemen: "Aljabar dan Fungsi",
        deskripsiCP: "Peserta didik dapat menyatakan data dalam bentuk matriks. Mereka dapat menentukan fungsi invers, komposisi fungsi, dan transformasi fungsi untuk memodelkan situasi dunia nyata menggunakan fungsi yang sesuai (linear, kuadrat, eksponensial).",
        kompetensiKKO: "Menyatakan, Menentukan, Memodelkan",
        lingkupMateri: "Matriks, Fungsi Invers, Komposisi Fungsi, Transformasi Fungsi",
        tpList: [
          {
            kodeTP: "TP.02",
            teksTP: "Menentukan fungsi invers, komposisi fungsi, dan transformasi fungsi untuk memodelkan situasi dunia nyata.",
            alokasiJP: 30,
            semester: "GANJIL",
            prasyarat: "Memahami relasi dan fungsi linear/kuadrat",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas"],
            dimensiKarakterKemenag: ["Kreativitas", "PPRA: Berkeadaban (Ta'addub)"],
            konteksPembelajaran: {
              stimulus: "Siswa diajak memahami proses konversi suhu dari Celcius ke Fahrenheit, lalu dikembalikan lagi ke Celcius (konsep Invers), atau proses nilai tukar mata uang berlapis (Rupiah -> USD -> Yen).",
              stimulusKemenag: "Siswa mensimulasikan sistem rantai distribusi zakat produktif yang dikonversi melalui beberapa lembaga amil (Komposisi fungsi ekonomi).",
              masalahNyata: "Bagaimana cara kerja sistem enkripsi pesan kriptografi sederhana menggunakan perkalian matriks dan fungsi invers?",
              kegiatanEksplorasi: [
                "Praktik 'Mesin Input-Output' secara kelompok untuk merumuskan invers.",
                "Eksplorasi transformasi fungsi menggunakan aplikasi GeoGebra."
              ],
              pertanyaanHOTS: [
                { level: "C5 - Mengevaluasi", teks: "Jika suatu fungsi merepresentasikan biaya produksi, apakah fungsi inversnya selalu bermakna secara logis di dunia nyata? Jelaskan alasanmu!" }
              ],
              rubrikIndikator: [
                { kriteria: "Komposisi dan Invers Fungsi", baru: "Hanya mampu mensubstitusi angka ke fungsi.", layak: "Mampu melakukan komposisi dua fungsi dasar.", cakap: "Mampu mencari fungsi invers dari fungsi rasional dan komposisi fungsi.", mahir: "Mampu memodelkan kasus dunia nyata (misal: diskon bertingkat) menggunakan komposisi fungsi secara tepat." }
              ],
              soalPGK: {
                pertanyaan: "Diberikan f(x) = 2x + 3 dan g(x) = x - 5. Manakah dari pernyataan berikut yang benar? (Pilih 2)",
                pilihan: [
                  { kode: "A", teks: "(f o g)(x) = 2x - 7", isCorrect: true },
                  { kode: "B", teks: "(g o f)(x) = 2x - 2", isCorrect: true },
                  { kode: "C", teks: "f invers(x) = (x + 3)/2", isCorrect: false },
                  { kode: "D", teks: "(f o g)(x) sama dengan (g o f)(x)", isCorrect: false }
                ],
                kunci: "A dan B",
                pembahasan: "f(g(x)) = 2(x-5)+3 = 2x-7. g(f(x)) = (2x+3)-5 = 2x-2. f invers = (x-3)/2."
              },
              soalUraian: {
                level: "C4 HOTS",
                pertanyaan: "Sebuah toko pakaian memberikan diskon 20% untuk semua item (Fungsi D(x) = 0.8x), dan ada potongan tambahan voucher Rp 50.000 (Fungsi V(x) = x - 50000). Jika kamu punya voucher tersebut, lebih untung mana: kasir menerapkan diskon dulu baru memotong voucher, atau potong voucher dulu baru diskon 20%? Buktikan dengan komposisi fungsi!",
                kunci: "Diskon dulu baru voucher: V(D(x)) = 0.8x - 50000. Voucher dulu baru diskon: D(V(x)) = 0.8(x - 50000) = 0.8x - 40000. Jadi, V(D(x)) lebih murah bagi pembeli (lebih untung) karena nilai akhirnya lebih kecil Rp 10.000.",
                pembahasan: "Skor 10: Membuktikan secara matematis kedua fungsi komposisi dan menarik kesimpulan yang benar."
              }
            }
          }
        ]
      }
,
      {
        namaElemen: "Geometri",
        deskripsiCP: "Menerapkan, mengidentifikasi, dan menjelaskan hubungan antara unsur-unsur lingkaran untuk menyelesaikan masalah.",
        kompetensiKKO: "Menerapkan, Mengidentifikasi, Menjelaskan",
        lingkupMateri: "Unsur-unsur Lingkaran, Busur, Juring, Tali Busur, Sudut Pusat dan Sudut Keliling",
        tpList: [
          {
            kodeTP: "TP.03",
            teksTP: "Menerapkan dan menjelaskan hubungan antara unsur-unsur lingkaran untuk menyelesaikan masalah konseptual dan aplikatif.",
            alokasiJP: 16,
            semester: "GENAP",
            prasyarat: "Memahami luas dan keliling lingkaran di Fase D",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas"],
            dimensiKarakterKemenag: ["Kreativitas", "Tafakur (Refleksi penciptaan)"],
            konteksPembelajaran: {
              stimulus: "Siswa mengamati desain arsitektur kubah masjid, roda gigi pada mesin, atau bianglala (ferris wheel).",
              stimulusKemenag: "Siswa menganalisis bentuk geometris pada desain kubah atau ornamen islami (arabesque) yang banyak memanfaatkan juring dan tali busur.",
              masalahNyata: "Bagaimana cara kita menghitung panjang besi yang melengkung pada kerangka bianglala atau kubah jika hanya diketahui sudut kemiringannya?",
              kegiatanEksplorasi: [
                "Mengeksplorasi juring, tembereng, sudut pusat, dan keliling menggunakan benda berbentuk lingkaran di sekitar.",
                "Membuat pembuktian empiris bahwa sudut keliling besarnya setengah dari sudut pusat jika menghadap busur yang sama."
              ],
              pertanyaanHOTS: [
                { level: "C5 - Mengevaluasi", teks: "Buktikan bahwa segi empat tali busur yang terbentuk dalam lingkaran selalu memiliki jumlah sudut berhadapan sebesar 180 derajat!" }
              ],
              rubrikIndikator: [
                { kriteria: "Geometri Lingkaran", baru: "Hanya mengenali jari-jari dan diameter.", layak: "Mampu mengidentifikasi tali busur, juring, dan sudut pusat.", cakap: "Mampu menghitung hubungan antara panjang busur dan luas juring.", mahir: "Mampu memecahkan masalah kompleks yang melibatkan segi empat tali busur dan garis singgung." }
              ],
              soalPGK: {
                pertanyaan: "Berdasarkan hubungan sudut dalam lingkaran, manakah pernyataan yang benar? (Pilih 2)",
                pilihan: [
                  { kode: "A", teks: "Besar sudut pusat adalah dua kali besar sudut keliling yang menghadap busur yang sama.", isCorrect: true },
                  { kode: "B", teks: "Semua sudut keliling yang menghadap busur yang sama besarnya sama.", isCorrect: true },
                  { kode: "C", teks: "Sudut keliling yang menghadap diameter besarnya 180 derajat.", isCorrect: false },
                  { kode: "D", teks: "Garis singgung selalu tegak lurus dengan sembarang tali busur.", isCorrect: false }
                ],
                kunci: "A dan B",
                pembahasan: "Sudut keliling menghadap diameter besarnya 90 derajat (C salah). Garis singgung tegak lurus dengan jari-jari, bukan sembarang tali busur (D salah)."
              },
              soalUraian: {
                level: "C4 HOTS",
                pertanyaan: "Dalam sebuah taman berbentuk lingkaran dengan jari-jari 14 m, dibuat sebuah area panggung berbentuk juring dengan sudut pusat 90 derajat. Area sisanya akan ditanami rumput. Hitunglah luas area yang ditanami rumput!",
                kunci: "Luas juring panggung = 90/360 * pi * r^2 = 1/4 * 22/7 * 196 = 154 m2. Luas taman = 22/7 * 196 = 616 m2. Sisa area = 616 - 154 = 462 m2.",
                pembahasan: "Skor 10: Langkah logis, menggunakan rasio juring yang tepat, hasil akhir benar.",
                rubrik: [{ kriteria: "Penerapan rumus juring lingkaran", skor: 10 }]
              }
            }
          }
        ]
      },
      {
        namaElemen: "Analisis Data dan Peluang",
        deskripsiCP: "Penyelidikan statistika untuk asosiasi dua variabel kategorikal dan numerikal; memperkirakan best fit linear; membedakan asosiasi dan sebab-akibat; peluang kejadian majemuk (saling bebas/lepas, bersyarat) dengan permutasi kombinasi.",
        kompetensiKKO: "Menyelidiki, Memperkirakan, Membedakan, Menentukan",
        lingkupMateri: "Statistika Bivariat, Regresi Linear, Peluang Majemuk, Permutasi, Kombinasi",
        tpList: [
          {
            kodeTP: "TP.04",
            teksTP: "Menyelidiki asosiasi dua variabel, memperkirakan garis regresi, serta menentukan peluang kejadian majemuk bersyarat menggunakan permutasi dan kombinasi.",
            alokasiJP: 30,            
            semester: "GENAP",
            prasyarat: "Memahami statistika univariat dan peluang empiris di Fase E",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian", "Kreativitas"],
            dimensiKarakterKemenag: ["Kemandirian", "Tawazun (Keseimbangan & Keadilan)"],
            konteksPembelajaran: {
              stimulus: "Siswa melihat data korelasi antara waktu bermain gadget dengan nilai ujian akhir, serta menganalisis peluang lolos seleksi perguruan tinggi.",
              stimulusKemenag: "Siswa mengevaluasi data korelasi antara rutinitas shalat/ibadah sunnah dengan tingkat kedisiplinan belajar menggunakan regresi linear.",
              masalahNyata: "Bagaimana cara membedakan apakah dua kejadian yang terjadi bersamaan itu murni karena sebab-akibat (causation) atau kebetulan saja (correlation)?",
              kegiatanEksplorasi: [
                "Mengumpulkan data bivariat (misal: tinggi badan vs ukuran sepatu) dan menggambar diagram pencar (scatter plot).",
                "Mensimulasikan permainan peluang bersyarat menggunakan kombinasi kartu."
              ],
              pertanyaanHOTS: [
                { level: "C5 - Mengevaluasi", teks: "Data menunjukkan bahwa saat penjualan es krim meningkat, kasus tenggelam di pantai juga meningkat. Evaluasilah apakah makan es krim menyebabkan tenggelam (sebab-akibat) atau adakah variabel perancu (lurking variable)?" }
              ],
              rubrikIndikator: [
                { kriteria: "Analisis Bivariat & Peluang", baru: "Hanya mampu membaca diagram batang.", layak: "Mampu membuat scatter plot namun belum bisa menarik kesimpulan korelasi.", cakap: "Mampu menarik garis best fit (regresi linear) secara manual dan membedakan kombinasi/permutasi.", mahir: "Mampu membuktikan kejadian saling lepas atau bersyarat menggunakan rumus peluang majemuk dan membedakan korelasi vs sebab-akibat." }
              ],
              soalPGK: {
                pertanyaan: "Dalam teori peluang, kejadian A dan B dikatakan saling lepas (mutually exclusive) jika... (Pilih 2 jawaban benar)",
                pilihan: [
                  { kode: "A", teks: "Peluang irisannya adalah nol: P(A ∩ B) = 0.", isCorrect: true },
                  { kode: "B", teks: "Kedua kejadian tidak dapat terjadi secara bersamaan.", isCorrect: true },
                  { kode: "C", teks: "Terjadinya A tidak mempengaruhi terjadinya B.", isCorrect: false },
                  { kode: "D", teks: "P(A ∪ B) = P(A) x P(B).", isCorrect: false }
                ],
                kunci: "A dan B",
                pembahasan: "Kejadian saling lepas berarti irisan nol dan tak bisa terjadi bersamaan. (C) mendefinisikan saling bebas (independent), sedangkan (D) adalah aturan perkalian bebas yang salah disamakan."
              },
              soalUraian: {
                level: "C4 HOTS",
                pertanyaan: "Sebuah panitia terdiri dari 5 orang akan dibentuk dari 7 pria dan 5 wanita. Jika syaratnya minimal harus ada 3 wanita, tentukan banyaknya cara susunan panitia tersebut menggunakan konsep Kombinasi!",
                kunci: "Kemungkinan: (3W, 2P), (4W, 1P), (5W, 0P). (3W,2P) = C(5,3) x C(7,2) = 10 x 21 = 210. (4W,1P) = C(5,4) x C(7,1) = 5 x 7 = 35. (5W,0P) = C(5,5) x C(7,0) = 1 x 1 = 1. Total = 210 + 35 + 1 = 246 cara.",
                pembahasan: "Siswa dinilai dari identifikasi kemungkinan skenario minimal 3 wanita dan penggunaan rumus kombinasi yang akurat.",
                rubrik: [{ kriteria: "Penyelesaian kasus kombinasi secara sistematis", skor: 10 }]
              }
            }
          }
        ]
      }
    ]
  }
];

export const FASE_F_NEW: CPDataset[] = [
  {
    fase: "Fase F",
    kelasDefault: "Kelas XI",
    mapel: "Sejarah",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pemahaman Konsep",
        deskripsiCP: "Memahami konsep Sejarah secara komprehensif.",
        kompetensiKKO: "Memahami, Menganalisis",
        lingkupMateri: "Materi Esensial Sejarah",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP: "Memahami konsep dasar Sejarah dalam kehidupan sehari-hari.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Memiliki pengetahuan dasar terkait fenomena sosial/alam.",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Kewargaan", "Tasamuh"],
            konteksPembelajaran: {
              stimulus: "Menampilkan kasus atau gambar relevan dengan Sejarah.",
              masalahNyata: "Bagaimana penerapan Sejarah menyelesaikan masalah tersebut?",
              kegiatanEksplorasi: ["Observasi lingkungan", "Diskusi kelompok"],
              pertanyaanHOTS: [{ level: "C4", teks: "Analisis dampak fenomena tersebut!" }],
              rubrikIndikator: [{ kriteria: "Pemahaman Konsep", baru: "Belum", layak: "Cukup", cakap: "Baik", mahir: "Sangat Baik" }],
              soalPGK: {
                pertanyaan: "Pernyataan yang benar tentang Sejarah adalah...",
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
  {
    fase: "Fase F",
    kelasDefault: "Kelas XI",
    mapel: "Sejarah Tingkat Lanjut",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pemahaman Konsep",
        deskripsiCP: "Memahami konsep Sejarah Tingkat Lanjut secara komprehensif.",
        kompetensiKKO: "Memahami, Menganalisis",
        lingkupMateri: "Materi Esensial Sejarah Tingkat Lanjut",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP: "Memahami konsep dasar Sejarah Tingkat Lanjut dalam kehidupan sehari-hari.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Memiliki pengetahuan dasar terkait fenomena sosial/alam.",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Kewargaan", "Tasamuh"],
            konteksPembelajaran: {
              stimulus: "Menampilkan kasus atau gambar relevan dengan Sejarah Tingkat Lanjut.",
              masalahNyata: "Bagaimana penerapan Sejarah Tingkat Lanjut menyelesaikan masalah tersebut?",
              kegiatanEksplorasi: ["Observasi lingkungan", "Diskusi kelompok"],
              pertanyaanHOTS: [{ level: "C4", teks: "Analisis dampak fenomena tersebut!" }],
              rubrikIndikator: [{ kriteria: "Pemahaman Konsep", baru: "Belum", layak: "Cukup", cakap: "Baik", mahir: "Sangat Baik" }],
              soalPGK: {
                pertanyaan: "Pernyataan yang benar tentang Sejarah Tingkat Lanjut adalah...",
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
  {
    fase: "Fase F",
    kelasDefault: "Kelas XI",
    mapel: "Sosiologi",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pemahaman Konsep",
        deskripsiCP: "Memahami konsep Sosiologi secara komprehensif.",
        kompetensiKKO: "Memahami, Menganalisis",
        lingkupMateri: "Materi Esensial Sosiologi",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP: "Memahami konsep dasar Sosiologi dalam kehidupan sehari-hari.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Memiliki pengetahuan dasar terkait fenomena sosial/alam.",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Kewargaan", "Tasamuh"],
            konteksPembelajaran: {
              stimulus: "Menampilkan kasus atau gambar relevan dengan Sosiologi.",
              masalahNyata: "Bagaimana penerapan Sosiologi menyelesaikan masalah tersebut?",
              kegiatanEksplorasi: ["Observasi lingkungan", "Diskusi kelompok"],
              pertanyaanHOTS: [{ level: "C4", teks: "Analisis dampak fenomena tersebut!" }],
              rubrikIndikator: [{ kriteria: "Pemahaman Konsep", baru: "Belum", layak: "Cukup", cakap: "Baik", mahir: "Sangat Baik" }],
              soalPGK: {
                pertanyaan: "Pernyataan yang benar tentang Sosiologi adalah...",
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
  {
    fase: "Fase F",
    kelasDefault: "Kelas XI",
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
            prasyarat: "Memiliki pengetahuan dasar terkait fenomena sosial/alam.",
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
  {
    fase: "Fase F",
    kelasDefault: "Kelas XI",
    mapel: "Antropologi",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pemahaman Konsep",
        deskripsiCP: "Memahami konsep Antropologi secara komprehensif.",
        kompetensiKKO: "Memahami, Menganalisis",
        lingkupMateri: "Materi Esensial Antropologi",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP: "Memahami konsep dasar Antropologi dalam kehidupan sehari-hari.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Memiliki pengetahuan dasar terkait fenomena sosial/alam.",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Kewargaan", "Tasamuh"],
            konteksPembelajaran: {
              stimulus: "Menampilkan kasus atau gambar relevan dengan Antropologi.",
              masalahNyata: "Bagaimana penerapan Antropologi menyelesaikan masalah tersebut?",
              kegiatanEksplorasi: ["Observasi lingkungan", "Diskusi kelompok"],
              pertanyaanHOTS: [{ level: "C4", teks: "Analisis dampak fenomena tersebut!" }],
              rubrikIndikator: [{ kriteria: "Pemahaman Konsep", baru: "Belum", layak: "Cukup", cakap: "Baik", mahir: "Sangat Baik" }],
              soalPGK: {
                pertanyaan: "Pernyataan yang benar tentang Antropologi adalah...",
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

export const FASE_F_DATASETS: CPDataset[] = [
  ...FASE_F_DATASETS_BASE,
  ...B_INDO_DATASETS,
  ...MATEMATIKA_F_DATASETS,
  ...FASE_F_NEW,
  ...FASE_F_BAHASA_INGGRIS_DATASETS,
  ...FASE_F_BAHASA_INGGRIS_XI_DATASETS,
];
