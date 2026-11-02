// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import { CPDataset } from "./curriculumDatabase";

export const FASE_E_DATASETS: CPDataset[] = [
  // 1. Pendidikan Pancasila (Fase E - Kelas X SMA/MA/SMK)
  {
    fase: "Fase E",
    kelasDefault: "Kelas X",
    mapel: "Pendidikan Pancasila",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pancasila",
        deskripsiCP:
          "Menganalisis cara pandang para pendiri bangsa tentang rumusan dasar negara; menganalisis fungsi dan kedudukan Pancasila sebagai dasar negara, pandangan hidup bangsa, dan ideologi negara; mengkaji hakikat dan integritas penerapan nilai Pancasila dalam kehidupan berbangsa dan bernegara.",
        kompetensiKKO: "Menganalisis Cara Pandang Pendiri Bangsa, Mengkaji Hakikat & Integritas Ideologi, Menerapkan Nilai Pancasila",
        lingkupMateri: "Dialektika Gagasan Moh. Yamin, Soepomo, Soekarno; Pancasila sebagai Meja Statis & Leitstar Dinamis",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menganalisis dialektika cara pandang para pendiri bangsa (Moh. Yamin, Soepomo, Soekarno) dalam sidang BPUPK serta mengkaji fungsi Pancasila sebagai meja statis pemersatu dan bintang penuntun (leitstar dinamis) dalam merespons tantangan global.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Memahami kronologi sidang BPUPK dan PPKI",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kewargaan", "Keimanan & Ketakwaan thd Tuhan YME"],
            dimensiKarakterKemenag: ["Cinta Tanah Air", "Cinta Kebenaran", "PPRA: Keteladanan (Qudwah)"],
            konteksPembelajaran: {
              stimulus: "Pidato 1 Juni 1945 Bung Karno menegaskan bahwa Pancasila adalah 'Philosofische Grondslag' (fondasi filosofis) dan 'Weltanschauung' (pandangan dunia bersama) yang menyatukan seluruh suku, agama, dan golongan di Indonesia.",
              stimulusKemenag: "Konsensus Pancasila sebagai Kalimatun Sawa' (kesepakatan titik temu) mencerminkan kebijaksanaan para ulama dan tokoh bangsa dalam merawat kemajemukan bangsa tanpa kehilangan prinsip tauhid.",
              masalahNyata: "Bagaimana Pancasila mampu berperan sebagai 'leitstar dinamis' dalam membentengi identitas bangsa di tengah gempuran ideologi transnasional dan disrupsi kecerdasan buatan?",
              kegiatanEksplorasi: [
                "Analisis komparatif teks pidato asli tiga tokoh pendiri bangsa mengenai integrasi negara dan hak asasi.",
                "Simulasi Focus Group Discussion (FGD) mengenai penerapan nilai gotong royong dalam mitigasi krisis pangan.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Filosofis", teks: "Evaluasilah konsep 'Negara Integralistik' Soepomo dibandingkan dengan paham negara hukum demokratis dalam konteks perlindungan hak-hak warga negara pasca-Amandemen UUD 1945!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Analisis pemikiran pendiri bangsa dan ideologi",
                  baru: "Menyebutkan nama-nama pendiri bangsa tanpa memahami substansi pokok pikirannya.",
                  layak: "Mampu menjelaskan perbedaan gagasan dasar negara antara Yamin, Soepomo, dan Soekarno.",
                  cakap: "Mampu menganalisis sintesis filosofis Pancasila sebagai meja statis dan bintang pemandu (leitstar dinamis).",
                  mahir: "Mampu mengonstruksi argumen filosofis orisinal mengenai relevansi nilai Pancasila terhadap etika tata kelola global.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah pernyataan yang BENAR mengenai konsep Pancasila menurut pidato Ir. Soekarno pada 1 Juni 1945? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Pancasila diusulkan sebagai Philosofische Grondslag (dasar filsafat) berdirinya negara Indonesia merdeka.", isCorrect: true 
              },
                  { kode: "B", teks: "Jika diperas menjadi Trisila, intinya adalah Sosio-Nasionalisme, Sosio-Demokrasi, dan Ketuhanan.", isCorrect: true },
                  { kode: "C", teks: "Jika Trisila diperas lagi menjadi Ekasila, intinya adalah 'Gotong Royong'.", isCorrect: true },
                  { kode: "D", teks: "Pancasila dimaksudkan untuk mendirikan negara teokrasi berbasis satu agama tertentu.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah gagasan otentik Bung Karno 1 Juni 1945. D salah karena Indonesia berakar pada prinsip kebangsaan bhinneka.",
              },
              soalUraian: {
                level: "C5 (Evaluasi Konsep Meja Statis & Leitstar Dinamis)",
                pertanyaan: "Jelaskan makna ganda Pancasila sebagai 'Meja Statis' sekaligus 'Bintang Penuntun (Leitstar Dinamis)' bagi perjalanan bangsa Indonesia di abad ke-21!",
                kunci: "Sebagai Meja Statis, Pancasila merupakan titik temu, konsensus dasar, dan fondasi pemersatu yang menampung seluruh keragaman suku, agama, ras, dan golongan sehingga keutuhan NKRI tetap kokoh tidak goyah. Sebagai Bintang Penuntun (Leitstar Dinamis), Pancasila memberikan arah gerak, cita-cita moral, dan kelenturan etis yang dinamis dalam menuntun bangsa mengambil kebijakan modern menghadapi perubahan zaman, globalisasi, dan perkembangan iptek tanpa tercerabut dari jati diri bangsa.",
                pembahasan: "Memahami dialektika fungsi Pancasila dalam menjaga kestabilan dan memandu transformasi progresif.",
                rubrik: [
                  { kriteria: "Menjelaskan fungsi meja statis sebagai titik temu pemersatu keberagaman", skor: 10 },
                  { kriteria: "Menjelaskan fungsi leitstar dinamis sebagai pedoman gerak adaptif zaman", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Undang-Undang Dasar Negara Republik Indonesia Tahun 1945",
        deskripsiCP:
          "Menganalisis konstitusi Indonesia, hierarki peraturan perundang-undangan, serta keselarasan antara undang-undang dan UUD 1945; menganalisis hak dan kewajiban warga negara untuk mendukung pelaksanaan demokrasi Pancasila.",
        kompetensiKKO: "Menganalisis Sinkronisasi Hukum, Menguji Keselarasan Perundang-undangan, Menegakkan Demokrasi Konstitusional",
        lingkupMateri: "Konstitusionalisme & Amandemen UUD 1945, Uji Materi di MK & MA, Perlindungan Hak Konstitusional WNI",
        tpList: [
          {
            kodeTP: "TP.02",
            teksTP:
              "Menganalisis asas konstitusionalisme, mekanisme sinkronisasi perundang-undangan (judicial review di Mahkamah Konstitusi dan Mahkamah Agung), serta pelaksanaan hak-kewajiban konstitusional dalam sistem demokrasi Pancasila.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Memahami tata urutan peraturan perundang-undangan nasional",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kewargaan", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Keadilan & Hukum", "PPRA: Berimbang (Tawazun)"],
            konteksPembelajaran: {
              stimulus: "Gugatan uji materi (judicial review) oleh koalisi masyarakat sipil ke Mahkamah Konstitusi terhadap pasal-pasal undang-undang ketenagakerjaan yang dinilai mereduksi hak konstitusional buruh.",
              stimulusKemenag: "Menegakkan supremasi hukum yang berkeadilan merupakan perwujudan prinsip syariah dalam memelihara jiwa, akal, keturunan, dan harta warga masyarakat (maqashid syari'ah).",
              masalahNyata: "Bagaimana mekanisme konstitusional warga negara menuntut pembatalan undang-undang yang dirasa merugikan hak asasinya secara sah tanpa anarki?",
              kegiatanEksplorasi: [
                "Simulasi sidang semu (moot court) perkara pengujian undang-undang terhadap UUD 1945 di Mahkamah Konstitusi.",
                "Memetakan perbedaan wewenang pengujian norma hukum antara MK (menguji UU terhadap UUD) dan MA (menguji peraturan di bawah UU terhadap UU).",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Yuridis Konstitusional", teks: "Evaluasilah efektivitas lembaga Mahkamah Konstitusi sebagai 'The Guardian of the Constitution' dalam membatalkan norma hukum yang bertentangan dengan prinsip negara hukum demokratis!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Analisis sinkronisasi konstitusi dan judicial review",
                  baru: "Menyamakan wewenang Mahkamah Konstitusi dengan Mahkamah Agung.",
                  layak: "Mampu menjelaskan fungsi pengujian undang-undang terhadap UUD 1945.",
                  cakap: "Mampu menganalisis asas sinkronisasi hukum vertikal-horizontal dan mekanisme gugatan legal standing di MK.",
                  mahir: "Mampu menyusun naskah permohonan uji materi (legal brief) sederhana dengan argumentasi hukum yang tajam dan presisi.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah pernyataan yang BENAR mengenai kewenangan Mahkamah Konstitusi (MK) menurut Pasal 24C UUD 1945? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Menguji undang-undang terhadap Undang-Undang Dasar Negara Republik Indonesia Tahun 1945.", isCorrect: true 
              },
                  { kode: "B", teks: "Memutus sengketa kewenangan lembaga negara yang kewenangannya diberikan oleh UUD.", isCorrect: true },
                  { kode: "C", teks: "Memutus pembubaran partai politik dan memutus perselisihan hasil pemilihan umum.", isCorrect: true },
                  { kode: "D", teks: "Menguji peraturan pemerintah terhadap undang-undang.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah wewenang konstitusional MK. Pilihan D adalah kewenangan Mahkamah Agung (MA).",
              },
              soalUraian: {
                level: "C4 (Analisis Pembagian Kewenangan Uji Materi)",
                pertanyaan: "Jelaskan perbedaan fundamental kewenangan pengujian peraturan perundang-undangan (judicial review) antara Mahkamah Konstitusi (MK) dan Mahkamah Agung (MA) di Indonesia!",
                kunci: "1. Mahkamah Konstitusi (MK) berwenang menguji produk Undang-Undang (UU) atau Perppu terhadap Undang-Undang Dasar NRI Tahun 1945. 2. Mahkamah Agung (MA) berwenang menguji peraturan perundang-undangan di bawah undang-undang (seperti Peraturan Pemerintah, Perpres, Perda) terhadap Undang-Undang.",
                pembahasan: "Memahami batas yurisdiksi peradilan tata negara dalam sistem hukum Indonesia.",
                rubrik: [
                  { kriteria: "Menjelaskan objek dan batu uji kewenangan MK secara tepat", skor: 10 },
                  { kriteria: "Menjelaskan objek dan batu uji kewenangan MA secara tepat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 2. Bahasa Indonesia (Fase E - Kelas X SMA/MA/SMK)
  {
    fase: "Fase E",
    kelasDefault: "Kelas X",
    mapel: "Bahasa Indonesia",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Menyimak",
        deskripsiCP:
          "Mengevaluasi dan mengkreasi informasi berupa gagasan, pikiran, perasaan, atau pesan dari teks lisan, mono/dialog (laporan hasil observasi, anekdot, negosiasi, biografi, eksposisi, dan puisi) untuk menemukan makna tersurat dan tersirat.",
        kompetensiKKO: "Mengevaluasi Akurasi Teks Lisan, Mengkritisi Teks Anekdot & Negosiasi, Mengkreasi Gagasan",
        lingkupMateri: "Teks Anekdot Audio-Visual (Kritik Sosial), Negosiasi Lisan Multilateral, Evaluasi Retorika Monolog",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Mengevaluasi gagasan, sindiran halus, pesan tersirat, dan fungsi kritik sosial dalam teks anekdot audio-visual (lawakan tunggal/stand-up comedy) serta menganalisis taktik persuasi dalam teks negosiasi lisan.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Memahami struktur dan fungsi teks lisan",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas", "Komunikasi"],
            dimensiKarakterKemenag: ["Cinta Kebenaran", "PPRA: Dinamis & Terbuka (Tatawwur wa Ibtikar)"],
            konteksPembelajaran: {
              stimulus: "Video komedi tunggal (stand-up comedy) seorang komika yang mengkritik perilaku pejabat korup dan fasilitas trotoar ramah disabilitas yang disalahgunakan pedagang.",
              stimulusKemenag: "Menyampaikan kritik konstruktif melalui humor cerdas dan sindiran santun mencerminkan ketinggian adab berbahasa yang mencerahkan tanpa menghina fisik.",
              masalahNyata: "Bagaimana cara membedakan antara humor satir berbobot kritik sosial dengan lelucon perundungan (bullying/body shaming)?",
              kegiatanEksplorasi: [
                "Bedah struktur teks anekdot: Abstraksi, Orientasi, Krisis, Reaksi, dan Koda pada rekaman pertunjukan komika.",
                "Analisis taktik tawar-menawar (konsesi dan kompromi) pada rekaman sidang mediasi sengketa lahan.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Makna Tersirat", teks: "Evaluasilah ketajaman kritik sosial dan penggunaan majas ironi dalam teks anekdot monolog terkait kebijakan pelayanan publik!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Mengevaluasi teks anekdot dan negosiasi lisan",
                  baru: "Hanya tertawa pada unsur lucu tanpa menangkap substansi kritik sosial di baliknya.",
                  layak: "Mampu mengidentifikasi bagian krisis dan reaksi dalam teks anekdot.",
                  cakap: "Mampu mengevaluasi pesan tersirat, fungsi sosial kritik anekdot, dan taktik persuasi negosiasi.",
                  mahir: "Mampu menyusun dan menampilkan materi stand-up comedy cerdas bertema antikorupsi dengan logika satire yang memukau.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah ciri utama yang membedakan TEKS ANEKDOT dengan TEKS HUMOR BIASA? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Teks anekdot memuat kritik sosial atau pesan tersirat yang ditujukan kepada layanan publik/tokoh penting.", isCorrect: true 
              },
                  { kode: "B", teks: "Teks anekdot memiliki struktur formal: Abstraksi, Orientasi, Krisis, Reaksi, dan Koda.", isCorrect: true },
                  { kode: "C", teks: "Teks anekdot semata-mata bertujuan menghibur tanpa ada pesan moral.", isCorrect: false },
                  { kode: "D", teks: "Teks anekdot sering menggunakan majas sindiran seperti ironi, sinisme, atau sarkasme halus.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "Anekdot memuat kritik tersirat, berstruktur khas (krisis-reaksi), dan sarat majas sindiran edukatif.",
              },
              soalUraian: {
                level: "C4 (Analisis Struktur & Kritik Anekdot)",
                pertanyaan: "Dengarkan petikan anekdot: 'Seorang politisi berkunjung ke desa tertinggal dan berjanji: \"Jika saya terpilih, saya akan membangun jembatan megah untuk kalian!\" Warga desa berbisik heran: \"Tapi Pak, di desa kami tidak ada sungai.\" Sang politisi tersenyum mantap: \"Tenang, sungainya pun akan kami bangunkan!\"' Analisislah bagian Krisis dari anekdot tersebut dan jelaskan kritik sosial yang disampaikannya!",
                kunci: "Bagian Krisis: Jawaban politisi yang mengatakan 'Tenang, sungainya pun akan kami bangunkan'. Kritik Sosial: Mengkritisi tabiat oknum politisi yang kerap mengumbar janji-janji kampanye muluk, tidak masuk akal, dan tidak sesuai dengan kebutuhan riil masyarakat hanya demi meraih simpati dan suara saat pemilihan.",
                pembahasan: "Menganalisis punchline krisis dan makna denotatif-konotatif kritik sosial.",
                rubrik: [
                  { kriteria: "Mengidentifikasi bagian krisis kutipan anekdot dengan tepat", skor: 10 },
                  { kriteria: "Menjelaskan kritik sosial terhadap janji politisi secara komprehensif", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Membaca dan Memirsa",
        deskripsiCP:
          "Mengevaluasi gagasan, pandangan, dan akurasi fakta dalam pelbagai tipe teks fiksi dan nonfiksi; mengkritisi asumsi dan bias penulis dalam teks eksposisi, negosiasi, biografi, atau karya sastra.",
        kompetensiKKO: "Mengevaluasi Gagasan Teks, Mengkritisi Asumsi & Bias, Menafsirkan Nilai Keteladanan",
        lingkupMateri: "Teks Biografi Tokoh Inspiratif, Teks Eksposisi Analitis, Analisis Nilai Karakter & Bias Penulis",
        tpList: [
          {
            kodeTP: "TP.02",
            teksTP:
              "Mengevaluasi akurasi data faktual dan meneladani karakter unggul tokoh dalam teks biografi serta mengkritisi bias argumentasi penulis dalam teks eksposisi analitis.",
            alokasiJP: 10,
            semester: "GANJIL",
            prasyarat: "Mampu membaca pemahaman teks narasi dan eksplanasi",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian", "Kreativitas"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "PPRA: Keteladanan (Qudwah)"],
            konteksPembelajaran: {
              stimulus: "Biografi B.J. Habibie yang mengupas dedikasi riset dirgantara, penemuan Teori Keretakan Sayap Pesawat (Crack Progression Theory), dan kesederhanaan hidup beliau.",
              stimulusKemenag: "Meneladani rekam jejak perjuangan intelektual para ilmuwan dan ulama nusantara menumbuhkan ghirah keilmuan dan ketahanan mental generasi muda.",
              masalahNyata: "Bagaimana cara menyaring keteladanan tokoh biografi agar dapat diimplementasikan dalam kebiasaan belajar sehari-hari siswa kelas X?",
              kegiatanEksplorasi: [
                "Membuat matriks analisis karakter unggul tokoh (problem solver, ulet, visioner, cinta tanah air) beserta bukti kutipan teks.",
                "Mendeteksi bias bahasa evaluatif pada teks tajuk rencana editorial surat kabar.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Kritis", teks: "Evaluasilah relevansi nilai integritas dan kegigihan riset B.J. Habibie dalam menghadapi era persaingan inovasi teknologi global saat ini!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menganalisis teks biografi dan bias eksposisi",
                  baru: "Hanya menyalin tanggal lahir dan riwayat sekolah tokoh.",
                  layak: "Mampu menyebutkan peristiwa penting dalam kehidupan tokoh biografi.",
                  cakap: "Mampu menganalisis karakter unggul tokoh dan menghubungkannya dengan konteks kehidupan nyata.",
                  mahir: "Mampu menyusun kritik biografi komparatif dengan merekonstruksi faktor sosiologis keberhasilan tokoh.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah struktur pokok pembangun TEKS BIOGRAFI yang sistematis? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Orientasi (Pengenalan latar belakang tokoh, keluarga, dan masa kecil).", isCorrect: true 
              },
                  { kode: "B", teks: "Peristiwa Penting / Masalah (Rangkaian peristiwa, perjuangan, karier, dan rintangan yang dihadapi tokoh).", isCorrect: true },
                  { kode: "C", teks: "Reorientasi (Pandangan/simpulan evaluatif penulis terhadap kontribusi tokoh).", isCorrect: true },
                  { kode: "D", teks: "Tesis dan Argumentasi Pro-Kontra.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Struktur teks biografi mencakup Orientasi, Peristiwa Penting (Important Events), dan Reorientasi.",
              },
              soalUraian: {
                level: "C4 (Analisis Keteladanan Tokoh)",
                pertanyaan: "Berdasarkan biografi B.J. Habibie, analisislah 2 (dua) karakter unggul beliau saat menuntut ilmu di Jerman dalam keterbatasan biaya, dan jelaskan bagaimana Anda dapat menerapkan karakter tersebut dalam mengatasi kesulitan belajar!",
                kunci: "1. Karakter Mandiri dan Pantang Menyerah: Habibie rela berjalan kaki berkilo-kilometer dan belajar hingga larut malam demi menghemat biaya tanpa mengeluh. Penerapan: Tidak mudah putus asa saat menghadapi materi pelajaran yang sulit dan tekun berlatih mandiri. 2. Karakter Disiplin dan Visioner: Membagi waktu secara ketat antara kuliah dan riset inovasi. Penerapan: Membuat jadwal belajar teratur dan fokus pada tujuan akademik jangka panjang.",
                pembahasan: "Menginternalisasi nilai keteladanan tokoh biografi dalam kehidupan belajar nyata.",
                rubrik: [
                  { kriteria: "Mengidentifikasi 2 karakter unggul tokoh secara tepat dari teks", skor: 10 },
                  { kriteria: "Menjelaskan rencana penerapan kontekstual dalam belajar mandiri", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 3. Matematika (Fase E - Kelas X SMA/MA/SMK)
  {
    fase: "Fase E",
    kelasDefault: "Kelas X",
    mapel: "Matematika",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Bilangan",
        deskripsiCP:
          "Menggeneralisasi sifat-sifat eksponen dan logaritma; menyelesaikan masalah kontekstual yang berkaitan dengan barisan dan deret aritmetika serta geometri.",
        kompetensiKKO: "Menggeneralisasi Sifat Eksponen/Logaritma, Menyelesaikan Barisan/Deret Aritmetika & Geometri",
        lingkupMateri: "Fungsi & Persamaan Eksponen, Operasi Logaritma, Bunga Majemuk & Peluruhan Radioaktif, Deret Geometri Tak Hingga",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menggeneralisasi sifat-sifat eksponen dan logaritma serta menerapkannya dalam memodelkan fenomena pertumbuhan populasi, peluruhan zat radioaktif, dan perhitungan bunga majemuk perbankan.",
            alokasiJP: 12,
            semester: "GANJIL",
            prasyarat: "Operasi perpangkatan bulat dan bentuk akar dasar",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Cinta Ketelitian", "PPRA: Berimbang (Tawazun)"],
            konteksPembelajaran: {
              stimulus: "Pertumbuhan bakteri E. coli membelah diri menjadi 2 setiap 20 menit (f(t) = N0 . 2^(t/20)), atau perhitungan peluruhan zat radioaktif isotop Karbon-14 untuk menentukan umur fosil purbakala.",
              stimulusKemenag: "Keteraturan eksponensial dalam pembelahan sel makhluk hidup adalah bukti ketetapan ukuran hukum ciptaan Allah di alam semesta (biqadarin ma'lum).",
              masalahNyata: "Jika awalnya terdapat 500 bakteri, berapa waktu yang dibutuhkan agar populasi bakteri mencapai minimal 32.000 koloni?",
              kegiatanEksplorasi: [
                "Grafik fungsi eksponensial f(x) = a^x dan kebalikannya fungsi logaritma f(x) = ^a log x pada aplikasi GeoGebra.",
                "Simulasi perhitungan akumulasi saldo deposito dengan sistem bunga majemuk triwulanan.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis Pemodelan Logaritma", teks: "Selesaikan persamaan logaritma: ^2 log (x + 3) + ^2 log (x - 1) = 5 dan ujilah syarat basis serta numerus yang berlaku!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menyelesaikan eksponen dan logaritma",
                  baru: "Lupa sifat penjumlahan logaritma menjadi perkalian numerus.",
                  layak: "Mampu menyederhanakan bentuk eksponen dan logaritma sederhana.",
                  cakap: "Mampu menyelesaikan persamaan eksponen/logaritma dan memodelkan masalah peluruhan zat/bunga majemuk.",
                  mahir: "Mampu memecahkan masalah kontekstual multi-tahap kompleks dan menganalisis syarat eksistensi logaritma secara rigor.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah sifat-sifat eksponen dan logaritma berikut yang BENAR untuk a, b > 0 dan a != 1? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "^a log (b x c) = ^a log b + ^a log c", isCorrect: true 
              },
                  { kode: "B", teks: "^a log (b / c) = ^a log b - ^a log c", isCorrect: true },
                  { kode: "C", teks: "a^(m) x a^(n) = a^(m + n)", isCorrect: true },
                  { kode: "D", teks: "^a log (b + c) = (^a log b) x (^a log c)", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah sifat logaritma dan eksponen yang baku. Pilihan D keliru.",
              },
              soalUraian: {
                level: "C4 (Aplikasi Bunga Majemuk)",
                pertanyaan: "Modal sebesar Rp10.000.000,00 diinvestasikan pada bank dengan suku bunga majemuk 6% per tahun yang dihitung setiap akhir tahun. Tentukan total nilai investasi tersebut setelah 3 tahun!",
                kunci: "Rumus Bunga Majemuk: Mn = M0 (1 + i)^n. M0 = Rp10.000.000, i = 6% = 0,06, n = 3 tahun. M3 = 10.000.000 x (1 + 0,06)^3 = 10.000.000 x (1,06)^3 = 10.000.000 x 1,191016 = Rp11.910.160,00.",
                pembahasan: "Menghitung akumulasi nilai investasi dengan model eksponensial bunga majemuk.",
                rubrik: [
                  { kriteria: "Menuliskan formula bunga majemuk secara tepat", skor: 10 },
                  { kriteria: "Melakukan perhitungan pemangkatan dan hasil akhir Rp11.910.160,00 dengan benar", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Aljabar dan Fungsi",
        deskripsiCP:
          "Menyelesaikan sistem persamaan linear tiga variabel (SPLTV) dan sistem pertidaksamaan linear dua variabel (SPtLDV); memahami fungsi kuadrat, fungsi eksponensial, serta karakteristik grafiknya.",
        kompetensiKKO: "Menyelesaikan SPLTV, Menentukan DHP SPtLDV, Menganalisis Grafik Fungsi Kuadrat",
        lingkupMateri: "SPLTV (Eliminasi-Substitusi), Daerah Himpunan Penyelesaian (DHP) SPtLDV, Titik Puncak & Diskriminan Fungsi Kuadrat",
        tpList: [
          {
            kodeTP: "TP.02",
            teksTP:
              "Menyelesaikan Sistem Persamaan Linear Tiga Variabel (SPLTV) dan memodelkan daerah himpunan penyelesaian (DHP) Sistem Pertidaksamaan Linear Dua Variabel (SPtLDV) dalam masalah program linear optimasi biaya.",
            alokasiJP: 12,
            semester: "GANJIL",
            prasyarat: "Memahami SPLDV dan persamaan garis lurus",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Keadilan", "PPRA: Berimbang"],
            konteksPembelajaran: {
              stimulus: "Sebuah pabrik roti memproduksi tiga varian roti: cokelat, keju, dan daging dengan kebutuhan tepung, mentega, dan gula yang berbeda. Stok harian bahan baku terbatas.",
              stimulusKemenag: "Prinsip optimasi aljabar mencerminkan anjuran Islam agar manusia mengelola sumber daya secara efisien dan tidak berlebih-lebihan (israf).",
              masalahNyata: "Berapa kapasitas produksi masing-masing varian roti agar seluruh stok bahan baku habis terpakai secara optimal?",
              kegiatanEksplorasi: [
                "Penyelesaian SPLTV menggunakan metode matriks determinan (aturan Cramer) atau metode eliminasi bertingkat.",
                "Mengarsir daerah himpunan penyelesaian (DHP) sistem pertidaksamaan pada koordinat Kartesius.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis SPLTV", teks: "Tentukan himpunan penyelesaian dari SPLTV: x + y + z = 6, 2x - y + z = 3, dan x + 2y - z = 2 serta interpretasikan maknanya dalam perpotongan 3 bidang ruang!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menyelesaikan SPLTV dan SPtLDV",
                  baru: "Keliru saat melakukan substitusi variabel kedua ke persamaan ketiga.",
                  layak: "Mampu memodelkan masalah sehari-hari ke dalam SPLTV 3 variabel.",
                  cakap: "Mampu menyelesaikan SPLTV dan menentukan daerah penyelesaian pertidaksamaan secara tepat.",
                  mahir: "Mampu menganalisis titik-titik pojok optimum (nilai maksimum/minimum) pada DHP tak beraturan.",
                },
              ],
              soalPGK: {
                pertanyaan: "Diberikan SPLTV: (1) x + y + z = 9, (2) 2x - y + z = 8, (3) x + 2y - z = 7. Manakah pernyataan nilai variabel yang BENAR? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Nilai x = 3.", isCorrect: true 
              },
                  { kode: "B", teks: "Nilai y = 4.", isCorrect: true },
                  { kode: "C", teks: "Nilai z = 2.", isCorrect: true },
                  { kode: "D", teks: "Nilai x + y - z = 5.", isCorrect: true },
                ],
                kunci: "A, B, C, dan D",
                pembahasan: "Eliminasi y dari (1) dan (2) -> 3x + 2z = 17. Dari (1) dan (3) -> 3x + 3y = 16. Didapat x = 3, y = 4, z = 2. Maka 3 + 4 - 2 = 5.",
              },
              soalUraian: {
                level: "C4 (Pemodelan SPLTV)",
                pertanyaan: "Tiga orang sahabat membeli paket alat tulis di toko yang sama. Ali membeli 2 buku, 1 pulpen, dan 1 penggaris seharga Rp17.000,00. Budi membeli 1 buku, 2 pulpen, dan 1 penggaris seharga Rp16.000,00. Caca membeli 3 buku, 1 pulpen, dan 2 penggaris seharga Rp25.000,00. Buatlah model SPLTV dan tentukan harga satuan masing-masing 1 buku, 1 pulpen, dan 1 penggaris!",
                kunci: "Model SPLTV: (1) 2x + y + z = 17.000; (2) x + 2y + z = 16.000; (3) 3x + y + 2z = 25.000. Kurangkan (1) dan (2): x - y = 1.000 -> x = y + 1.000. Selesaikan sistem: didapatkan x (buku) = Rp6.000,00, y (pulpen) = Rp3.000,00, dan z (penggaris) = Rp2.000,00.",
                pembahasan: "Langkah eliminasi dan substitusi SPLTV kontekstual.",
                rubrik: [
                  { kriteria: "Menyusun sistem 3 persamaan dengan variabel yang didefinisikan jelas", skor: 10 },
                  { kriteria: "Menemukan harga satuan buku Rp6.000, pulpen Rp3.000, penggaris Rp2.000", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Pengukuran & Geometri",
        deskripsiCP:
          "Menjelaskan perbandingan trigonometri (sinus, kosinus, tangen) pada segitiga siku-siku; menggunakan perbandingan trigonometri untuk menyelesaikan masalah kontekstual pengukuran tinggi/jarak.",
        kompetensiKKO: "Menjelaskan Perbandingan Trigonometri, Menerapkan Sin/Cos/Tan, Mengukur Tinggi & Jarak",
        lingkupMateri: "Perbandingan Sudut Istimewa (0°, 30°, 45°, 60°, 90°), Sudut Elevasi & Depresi, Aplikasi Klinometer",
        tpList: [
          {
            kodeTP: "TP.03",
            teksTP:
              "Menentukan nilai perbandingan trigonometri (sinus, kosinus, tangen, cosecan, secan, cotangen) pada segitiga siku-siku dan menggunakannya untuk mengukur tinggi pohon/gedung menggunakan sudut elevasi klinometer.",
            alokasiJP: 10,
            semester: "GENAP",
            prasyarat: "Teorema Pythagoras dan kesebangunan segitiga",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "PPRA: Keteladanan"],
            konteksPembelajaran: {
              stimulus: "Seorang siswa berdiri sejauh 24 meter dari kaki tiang bendera dan mengamati puncak tiang dengan sudut elevasi 30° menggunakan alat klinometer sederhana. Tinggi mata siswa dari tanah adalah 1,5 meter.",
              stimulusKemenag: "Ilmu ukur segitiga (trigonometri) dikembangkan oleh ilmuwan muslim seperti Al-Battani dan Al-Biruni untuk menghitung arah kiblat dan keliling bumi secara akurat.",
              masalahNyata: "Berapa meter tinggi total tiang bendera tersebut dari permukaan tanah? (tan 30° = 1/3 akar 3 = 0,577)",
              kegiatanEksplorasi: [
                "Proyek pengukuran tinggi gedung sekolah nyata menggunakan klinometer busur derajat buatan sendiri.",
                "Menemukan nilai rasio sisi depan, samping, dan miring pada segitiga siku-siku bersudut istimewa.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis Geometri Trigonometri", teks: "Dari puncak mercusuar setinggi 60 m di atas permukaan laut, seorang pengamat melihat dua kapal A dan B yang segaris dengan sudut depresi masing-masing 45° dan 30°. Hitunglah jarak antara kedua kapal tersebut!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menyelesaikan perbandingan trigonometri",
                  baru: "Tertukar antara sisi depan (opposite) dan sisi samping (adjacent).",
                  layak: "Mampu menentukan nilai sin, cos, tan sudut istimewa 30°, 45°, 60°.",
                  cakap: "Mampu menggunakan rumus tangen sudut elevasi untuk menghitung tinggi objek tak terjangkau.",
                  mahir: "Mampu memecahkan masalah navigasi kapal dan sudut depresi berganda secara presisi.",
                },
              ],
              soalPGK: {
                pertanyaan: "Pada segitiga siku-siku ABC dengan siku-siku di B, jika panjang AB = 3 cm dan BC = 4 cm (sisi miring AC = 5 cm), manakah nilai perbandingan trigonometri untuk sudut A yang BENAR? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "sin A = sisi depan / sisi miring = BC / AC = 4/5", isCorrect: true 
              },
                  { kode: "B", teks: "cos A = sisi samping / sisi miring = AB / AC = 3/5", isCorrect: true },
                  { kode: "C", teks: "tan A = sisi depan / sisi samping = BC / AB = 4/3", isCorrect: true },
                  { kode: "D", teks: "sin A = 3/5", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Sisi depan sudut A adalah BC (4), sisi samping AB (3), sisi miring AC (5).",
              },
              soalUraian: {
                level: "C4 (Pengukuran Klinometer Sudut Elevasi)",
                pertanyaan: "Riko mengamati puncak sebuah gedung bertingkat dengan sudut elevasi 45°. Jarak Riko ke dinding gedung adalah 50 meter. Jika tinggi mata Riko dari permukaan tanah adalah 1,6 meter, hitunglah tinggi gedung tersebut!",
                kunci: "tan 45° = y / x -> 1 = y / 50 -> y = 50 meter (tinggi dari batas mata). Tinggi total gedung = y + tinggi mata Riko = 50 m + 1,6 m = 51,6 meter.",
                pembahasan: "Penerapan perbandingan trigonometri tangen pada sudut elevasi 45°.",
                rubrik: [
                  { kriteria: "Menghitung tinggi segitiga menggunakan rumus tan 45° = 50 m", skor: 10 },
                  { kriteria: "Menambahkan tinggi pengamat dan mendapatkan hasil 51,6 m secara tepat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 4. Fisika (Fase E - Kelas X SMA/MA/SMK)
  {
    fase: "Fase E",
    kelasDefault: "Kelas X",
    mapel: "Fisika",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pemahaman Fisika",
        deskripsiCP:
          "Menganalisis besaran fisika dan pengukurannya; energi terbarukan dan hukum kekekalan energi; dinamika gerak dan gaya; pemanasan global dan dampaknya terhadap lingkungan.",
        kompetensiKKO: "Menganalisis Ketidakpastian Pengukuran, Menerapkan Hukum Kekekalan Energi, Merancang Energi Terbarukan",
        lingkupMateri: "Angka Penting & Jangka Sorong/Mikrometer, Konversi Energi (Mekanik, Listrik, Surya), Efisiensi Panel Surya & Kincir Angin",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menganalisis prinsip pengukuran besaran fisis menggunakan alat ukur presisi (jangka sorong dan mikrometer sekrup) dengan memperhitungkan angka penting dan ketidakpastian pengukuran.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Mengenal besaran pokok dan satuan SI",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ketelitian", "PPRA: Keteladanan"],
            konteksPembelajaran: {
              stimulus: "Pengukuran ketebalan pelat logam komponen pesawat terbang dan diameter silinder mesin menggunakan mikrometer sekrup dengan ketelitian 0,01 mm.",
              stimulusKemenag: "Ketelitian dalam mengukur dan menimbang adalah perintah syariat yang mulia (wa aqimul wazna bil qisthi wa la tukhsirul mizan).",
              masalahNyata: "Bagaimana cara membaca skala utama dan skala nonius pada jangka sorong serta menentukan nilai ketidakpastian mutlaknya (Delta x = 1/2 x NST)?",
              kegiatanEksplorasi: [
                "Praktikum pengukuran berulang diameter kelereng dan koin menggunakan jangka sorong serta mikrometer sekrup.",
                "Penerapan kaidah operasi penjumlahan dan perkalian angka penting pada perhitungan luas pelat tipis.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis Ketidakpastian Pengukuran", teks: "Diberikan hasil pengukuran panjang balok (12,45 +- 0,05) cm dan lebar (4,2 +- 0,05) cm. Analisislah luas balok menurut kaidah angka penting dan tentukan persentase ketidakpastian relatifnya!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Pengukuran presisi dan angka penting",
                  baru: "Membaca skala nonius tanpa mengalikan dengan nilai skala terkecil (NST).",
                  layak: "Mampu membaca hasil jangka sorong dan mikrometer dengan benar.",
                  cakap: "Mampu menuliskan hasil pengukuran lengkap dengan nilai ketidakpastian dan menerapkan aturan angka penting.",
                  mahir: "Mampu menganalisis galat sistematik dan galat acak dalam eksperimen laboratorium fisika.",
                },
              ],
              soalPGK: {
                pertanyaan: "Sebuah mikrometer sekrup menunjukkan skala utama 4,5 mm dan garis ke-28 pada skala nonius berimpit dengan garis mendatar. Manakah pernyataan yang BENAR? (NST = 0,01 mm) (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Nilai skala nonius adalah 28 x 0,01 mm = 0,28 mm.", isCorrect: true 
              },
                  { kode: "B", teks: "Hasil pembacaan total adalah 4,5 mm + 0,28 mm = 4,78 mm.", isCorrect: true },
                  { kode: "C", teks: "Ketidakpastian mutlak pengukuran tunggal alat tersebut adalah 0,005 mm.", isCorrect: true },
                  { kode: "D", teks: "Hasil pembacaan total adalah 4,28 mm.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Skala utama = 4,5 mm, skala nonius = 0,28 mm. Total = 4,78 mm. Delta x = 1/2 x 0,01 = 0,005 mm.",
              },
              soalUraian: {
                level: "C4 (Kaidah Angka Penting)",
                pertanyaan: "Seorang siswa mengukur panjang dan lebar sebuah pelat tipis logam menggunakan jangka sorong. Hasil pengukurannya adalah panjang 15,35 cm dan lebar 2,4 cm. Berdasarkan kaidah angka penting, hitunglah luas pelat logam tersebut!",
                kunci: "Panjang = 15,35 cm (memiliki 4 angka penting). Lebar = 2,4 cm (memiliki 2 angka penting). Luas = 15,35 x 2,4 = 36,84 cm². Berdasarkan aturan perkalian angka penting, hasil akhir harus dibulatkan mengikuti jumlah angka penting paling sedikit (yaitu 2 AP). Maka luas pelat dibulatkan menjadi 37 cm² (atau 3,7 x 10¹ cm²).",
                pembahasan: "Aturan operasi perkalian angka penting ditentukan oleh data dengan AP paling sedikit.",
                rubrik: [
                  { kriteria: "Menghitung hasil kali aritmetika 36,84 cm²", skor: 10 },
                  { kriteria: "Menerapkan aturan pembulatan 2 angka penting menjadi 37 cm²", skor: 10 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.02",
            teksTP:
              "Menganalisis bentuk-bentuk energi terbarukan (surya, angin, biomassa, mikrohidro), menerapkan hukum kekekalan energi, dan merancang prototipe pembangkit listrik mikrohidro/surya sederhana sebagai solusi krisis energi.",
            alokasiJP: 10,
            semester: "GENAP",
            prasyarat: "Konsep energi kinetik, potensial, dan daya listrik",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas", "Kolaborasi"],
            dimensiKarakterKemenag: ["Cinta Lingkungan", "PPRA: Dinamis & Inovatif"],
            konteksPembelajaran: {
              stimulus: "Pembangunan Pembangkit Listrik Tenaga Mikrohidro (PLTMH) di daerah pedesaan terpencil memanfaatkan debit aliran sungai dan ketinggian jatuh air (head).",
              stimulusKemenag: "Menjaga kelestarian alam dan beralih dari energi fosil yang mencemari ke energi bersih terbarukan adalah amanah khalifah fil ardh.",
              masalahNyata: "Berapa daya listrik teoretis yang dihasilkan jika sebuah air terjun setinggi 20 meter memiliki debit aliran air 0,5 m³/s dengan efisiensi turbin 80%? (g = 10 m/s², rho air = 1.000 kg/m³)",
              kegiatanEksplorasi: [
                "Merancang model prototipe kincir air turbin pelton menggunakan bahan daur ulang ramah lingkungan.",
                "Eksplorasi kalkulator jejak karbon (carbon footprint) dan analisis efisiensi panel fotovoltaik.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Efisiensi Energi", teks: "Evaluasilah keunggulan dan tantangan intermitensi energi surya dan angin di wilayah kepulauan tropis Indonesia dibanding energi beban dasar (baseload) geotermal!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Analisis energi terbarukan dan hukum kekekalan",
                  baru: "Menyebutkan jenis energi terbarukan tanpa memahami prinsip konversi energinya.",
                  layak: "Mampu menghitung energi potensial air terjun.",
                  cakap: "Mampu menghitung daya output listrik PLTMH dengan memperhitungkan faktor efisiensi sistem.",
                  mahir: "Mampu merancang desain teknis sistem hibrida energi terbarukan (solar-wind hybrid) untuk skala komunitas mandiri.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah yang merupakan sumber ENERGI TERBARUKAN (bersih dan ramah lingkungan)? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Energi Panas Bumi (Geotermal).", isCorrect: true 
              },
                  { kode: "B", teks: "Energi Radiasi Surya (Fotovoltaik).", isCorrect: true },
                  { kode: "C", teks: "Energi Aliran Air (Mikrohidro).", isCorrect: true },
                  { kode: "D", teks: "Energi Pembakaran Batubara Antrasit.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Geotermal, surya, dan mikrohidro adalah energi terbarukan. Batubara adalah energi fosil tak terbarukan.",
              },
              soalUraian: {
                level: "C4 (Perhitungan Daya PLTMH)",
                pertanyaan: "Sebuah air terjun memiliki ketinggian h = 15 meter dan debit air Q = 2 m³/s. Jika massa jenis air rho = 1.000 kg/m³, percepatan gravitasi g = 10 m/s², dan efisiensi generator turbin eta = 70%, hitunglah daya listrik nyata yang dapat dihasilkan oleh generator PLTMH tersebut dalam satuan Kilowatt (kW)!",
                kunci: "Daya Air (Pin) = rho x Q x g x h = 1.000 kg/m³ x 2 m³/s x 10 m/s² x 15 m = 300.000 Watt = 300 kW. Daya Listrik Nyata (Pout) = eta x Pin = 70% x 300 kW = 0,7 x 300 kW = 210 kW.",
                pembahasan: "Menghitung konversi energi potensial gravitasi air menjadi energi listrik dengan efisiensi generator.",
                rubrik: [
                  { kriteria: "Menghitung daya input fluida air 300 kW secara benar", skor: 10 },
                  { kriteria: "Menghitung daya output listrik akhir 210 kW dengan tepat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 5. Kimia (Fase E - Kelas X SMA/MA/SMK)
  {
    fase: "Fase E",
    kelasDefault: "Kelas X",
    mapel: "Kimia",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pemahaman Kimia",
        deskripsiCP:
          "Menganalisis struktur atom, sistem periodik unsur, ikatan kimia, hukum-hukum dasar kimia, konsep mol dan stoikiometri; memahami prinsip Kimia Hijau (*Green Chemistry*) dalam kehidupan sehari-hari.",
        kompetensiKKO: "Menganalisis Struktur Atom & SPU, Menerapkan Hukum Dasar Kimia & Mol, Menginternalisasi Green Chemistry",
        lingkupMateri: "Konfigurasi Elektron Bohr/Mekanika Kuantum, Hukum Lavoisier & Proust, Konsep Mol (n = gr/Mr), 12 Prinsip Green Chemistry",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menganalisis 12 prinsip Kimia Hijau (Green Chemistry) dalam merancang proses sintesis ramah lingkungan, mencegah timbulan limbah berbahaya, dan mengkaji struktur atom dalam sistem periodik unsur.",
            alokasiJP: 10,
            semester: "GANJIL",
            prasyarat: "Mengenal wujud zat dan perubahan kimia",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas"],
            dimensiKarakterKemenag: ["Cinta Lingkungan", "PPRA: Berkeadaban"],
            konteksPembelajaran: {
              stimulus: "Pengembangan bioplastik berbahan dasar pati singkong yang mudah terurai (biodegradable) menggantikan plastik sintetis berbasis minyak bumi (prinsip bahan baku terbarukan).",
              stimulusKemenag: "Pencegahan kerusakan lingkungan melalui prinsip kimia hijau adalah implementasi nyata dari larangan membuat kerusakan di muka bumi (la tufsidu fil ardh).",
              masalahNyata: "Bagaimana cara mendesain sintesis kimia dengan nilai ekonomi atom (atom economy) 100% sehingga tidak menghasilkan produk sampingan beracun?",
              kegiatanEksplorasi: [
                "Eksplorasi matriks 12 Prinsip Green Chemistry (Paul Anastas & John Warner).",
                "Analisis konfigurasi elektron atom menurut nomor atom dan penentuan letak golongan serta periode dalam SPU.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Prinsip Kimia Hijau", teks: "Evaluasilah penerapan katalis ramah lingkungan (katalisis enzim/zeolit) dibanding penggunaan asam kuat anorganik dalam industri esterifikasi bio-diesel!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Prinsip Kimia Hijau dan struktur atom",
                  baru: "Mengetahui istilah kimia hijau tanpa memahami ke-12 prinsipnya.",
                  layak: "Mampu menyebutkan 3 prinsip kimia hijau.",
                  cakap: "Mampu menganalisis efisiensi ekonomi atom dan menentukan letak unsur dalam SPU berdasarkan konfigurasi elektron.",
                  mahir: "Mampu merumuskan alternatif sintesis kimia hijau untuk pengolahan limbah organik sekolah.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah yang merupakan pilar dari 12 PRINSIP KIMIA HIJAU (Green Chemistry)? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Mencegah timbulan limbah lebih baik daripada mengolah limbah setelah terbentuk.", isCorrect: true 
              },
                  { kode: "B", teks: "Memaksimalkan nilai Ekonomi Atom (Atom Economy) dalam sintesis kimia.", isCorrect: true },
                  { kode: "C", teks: "Menggunakan pelarut dan kondisi reaksi yang lebih aman (seperti air atau pelarut hijau).", isCorrect: true },
                  { kode: "D", teks: "Menggunakan bahan kimia beracun pekat agar reaksi berlangsung secepat mungkin.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah prinsip fundamental kimia hijau. D bertentangan dengan keamanan lingkungan.",
              },
              soalUraian: {
                level: "C4 (Analisis Letak Unsur dalam SPU)",
                pertanyaan: "Suatu unsur X memiliki nomor atom 19. Tuliskan konfigurasi elektron unsur X tersebut (kulit K, L, M, N), tentukan jumlah elektron valensinya, serta tentukan letak Golongan dan Periode unsur X dalam Sistem Periodik Unsur!",
                kunci: "Nomor atom = 19. Konfigurasi elektron Bohr: K = 2, L = 8, M = 8, N = 1 (atau 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹). Elektron valensi = 1. Jumlah kulit utama yang terisi = 4 (K, L, M, N) -> Periode 4. Elektron valensi = 1 -> Golongan IA (Logam Alkali).",
                pembahasan: "Menentukan letak unsur pada SPU berdasarkan konfigurasi elektron kulit.",
                rubrik: [
                  { kriteria: "Menuliskan konfigurasi elektron 2, 8, 8, 1 dengan tepat", skor: 10 },
                  { kriteria: "Menentukan Golongan IA dan Periode 4 secara tepat", skor: 10 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.02",
            teksTP:
              "Menerapkan hukum-hukum dasar kimia (Lavoisier, Proust, Dalton, Gay-Lussac, Avogadro) dan konsep mol untuk menyelesaikan perhitungan stoikiometri reaksi pembakaran gas metana.",
            alokasiJP: 12,
            semester: "GENAP",
            prasyarat: "Persamaan reaksi kimia setara",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ketelitian", "PPRA: Berimbang"],
            konteksPembelajaran: {
              stimulus: "Reaksi pembakaran sempurna gas metana (CH4 + 2O2 -> CO2 + 2H2O) dalam kompor biogas ramah lingkungan.",
              stimulusKemenag: "Hukum kekekalan massa (Lavoisier) bahwa massa zat sebelum dan sesudah reaksi adalah tetap mencerminkan keseimbangan ciptaan Tuhan yang sempurna.",
              masalahNyata: "Berapa liter gas oksigen (O2) pada kondisi STP yang dibutuhkan untuk membakar sempurna 3,2 gram gas metana CH4? (Ar C=12, H=1, O=16)",
              kegiatanEksplorasi: [
                "Eksperimen pembuktian Hukum Lavoisier menggunakan cuka dan soda kue dalam botol tertutup di atas timbangan digital.",
                "Menghubungkan jembatan mol: Massa (gr) <-> Mol (n) <-> Volume Gas STP (22,4 L) <-> Jumlah Partikel (6,02 x 10^23).",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis Stoikiometri", teks: "Hitunglah massa endapan kalsium karbonat CaCO3 yang terbentuk jika 100 mL larutan CaCl2 0,1 M direaksikan dengan 100 mL Na2CO3 0,1 M serta tentukan pereaksi pembatasnya!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menyelesaikan stoikiometri dan hukum dasar kimia",
                  baru: "Menghitung mol tanpa menyetarakan koefisien persamaan reaksi.",
                  layak: "Mampu menyetarakan persamaan reaksi kimia sederhana.",
                  cakap: "Mampu menghitung jumlah mol, massa, dan volume gas STP dengan jembatan mol.",
                  mahir: "Mampu menganalisis pereaksi pembatas (limiting reactant) dan rendemen hasil persentase reaksi.",
                },
              ],
              soalPGK: {
                pertanyaan: "Pada kondisi Standar Suhu dan Tekanan (STP: 0°C, 1 atm), manakah pernyataan yang BENAR mengenai 1 mol gas ideal? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Memiliki volume sebesar 22,4 Liter.", isCorrect: true 
              },
                  { kode: "B", teks: "Mengandung jumlah partikel sebanyak 6,02 x 10^23 molekul (Bilangan Avogadro).", isCorrect: true },
                  { kode: "C", teks: "Massa 1 mol gas CO2 (Mr = 44 g/mol) adalah 44 gram.", isCorrect: true },
                  { kode: "D", teks: "Memiliki volume sebesar 24,0 Liter.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Volume molar STP adalah 22,4 L/mol dan jumlah partikel L = 6,02 x 10^23 partikel/mol.",
              },
              soalUraian: {
                level: "C4 (Perhitungan Stoikiometri Gas)",
                pertanyaan: "Gas propana (C3H8) terbakar sempurna menurut persamaan reaksi yang belum setara: C3H8(g) + O2(g) -> CO2(g) + H2O(g). Jika gas C3H8 yang dibakar adalah 4,4 gram (Mr = 44 g/mol): 1. Setarakan persamaan reaksi tersebut! 2. Hitunglah volume gas CO2 yang dihasilkan pada kondisi standar (STP)!",
                kunci: "1. Reaksi Setara: C3H8(g) + 5O2(g) -> 3CO2(g) + 4H2O(g). 2. Mol C3H8 = gr / Mr = 4,4 / 44 = 0,1 mol. Berdasarkan perbandingan koefisien reaksi, mol CO2 = (3 / 1) x mol C3H8 = 3 x 0,1 = 0,3 mol. Volume CO2 (STP) = mol x 22,4 L = 0,3 x 22,4 = 6,72 Liter.",
                pembahasan: "Penyetaraan reaksi hidrokarbon dan perhitungan volume gas dari koefisien reaksi.",
                rubrik: [
                  { kriteria: "Menyetarakan persamaan reaksi dengan koefisien 1, 5, 3, 4", skor: 10 },
                  { kriteria: "Menghitung mol C3H8 dan volume CO2 (6,72 Liter) secara tepat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 6. Biologi (Fase E - Kelas X SMA/MA/SMK)
  {
    fase: "Fase E",
    kelasDefault: "Kelas X",
    mapel: "Biologi",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pemahaman Biologi",
        deskripsiCP:
          "Menganalisis keanekaragaman hayati dan perannya di Indonesia; struktur dan reproduksi virus serta pencegahannya; ekosistem dan perubahan lingkungan akibat aktivitas manusia.",
        kompetensiKKO: "Menganalisis Keanekaragaman Hayati, Mengkaji Struktur & Daur Litik/Lisogenik Virus, Merumuskan Solusi Ekologis",
        lingkupMateri: "Biodiversitas Gen/Jenis/Ekosistem, Garis Wallace & Weber, Daur Litik vs Lisogenik Virus, Vaksinasi mRNA",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menganalisis tingkatan keanekaragaman hayati (gen, jenis, ekosistem), sebaran flora-fauna Indonesia (garis Wallace dan Weber), serta upaya pelestarian in-situ dan ex-situ terhadap spesies endemik terancam punah.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Memahami klasifikasi makhluk hidup dasar",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Lingkungan Hidup", "PPRA: Keteladanan"],
            konteksPembelajaran: {
              stimulus: "Penyelamatan populasi Badak Jawa (Rhinoceros sondaicus) di Taman Nasional Ujung Kulon (pelestarian in-situ) dan penangkaran Harimau Sumatera di Taman Safari (pelestarian ex-situ).",
              stimulusKemenag: "Keanekaragaman hayati nusantara adalah amanah agung dari Sang Pencipta yang wajib dijaga agar tidak punah akibat keserakahan manusia.",
              masalahNyata: "Mengapa penurunan keanekaragaman tingkat gen pada suatu populasi satwa liar dapat meningkatkan risiko kepunahan akibat penyakit?",
              kegiatanEksplorasi: [
                "Eksplorasi peta biogeografi pembagian fauna zona Asiatis, Peralihan (Wallacea), dan Australis.",
                "Analisis studi kasus perambahan hutan lindung terhadap keanekaragaman jenis burung endemik.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Konservasi", teks: "Evaluasilah efektivitas pembentukan koridor satwa (wildlife corridor) dalam menghubungkan fragmen hutan yang terisolasi akibat pembangunan jalan tol!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Analisis biodiversitas dan konservasi",
                  baru: "Menyamakan keanekaragaman tingkat gen dengan tingkat jenis.",
                  layak: "Mampu membedakan fauna Asiatis, Peralihan, dan Australis.",
                  cakap: "Mampu menganalisis ancaman deforestasi terhadap biodiversitas dan membedakan konservasi in-situ vs ex-situ.",
                  mahir: "Mampu merancang rencana aksi restorasi habitat berbasis spesies pohon asli lokal.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah fauna Indonesia yang termasuk ke dalam TIPE PERALIHAN (WILAYAH WALLACEA) yang memiliki ciri khas endemik unik? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Anoa (Bubalus quarlesi / depressicornis)", isCorrect: true 
              },
                  { kode: "B", teks: "Komodo (Varanus komodoensis)", isCorrect: true },
                  { kode: "C", teks: "Babirusa (Babyrousa babyrussa)", isCorrect: true },
                  { kode: "D", teks: "Orangutan Sumatera (Pongo abelii)", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Anoa, Komodo, dan Babirusa adalah fauna khas zona Peralihan (Sulawesi & NTT). Orangutan adalah fauna Asiatis.",
              },
              soalUraian: {
                level: "C4 (Analisis Pelestarian In-situ vs Ex-situ)",
                pertanyaan: "Jelaskan perbedaan mendasar antara metode pelestarian 'In-situ' dan 'Ex-situ' bagi satwa liar yang terancam punah di Indonesia, dan berikan masing-masing 1 contoh lokasi pelestariannya!",
                kunci: "1. Pelestarian In-situ: Upaya pelestarian satwa/tumbuhan di dalam habitat aslinya agar ekosistem alaminya tetap terjaga. Contoh: Taman Nasional Ujung Kulon untuk Badak Jawa atau TN Komodo di NTT. 2. Pelestarian Ex-situ: Upaya pelestarian satwa/tumbuhan di luar habitat aslinya karena habitat aslinya telah rusak atau terancam parah. Contoh: Kebun Raya Bogor untuk flora langka atau Taman Safari Indonesia untuk satwa liar.",
                pembahasan: "Memahami strategi konservasi keanekaragaman hayati nasional.",
                rubrik: [
                  { kriteria: "Menjelaskan konsep in-situ dan memberikan 1 contoh lokasi yang tepat", skor: 10 },
                  { kriteria: "Menjelaskan konsep ex-situ dan memberikan 1 contoh lokasi yang tepat", skor: 10 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.02",
            teksTP:
              "Menganalisis struktur morfologi virus, membandingkan mekanisme replikasi daur litik dan daur lisogenik, serta mengkaji peranan vaksin dan bioteknologi dalam pencegahan penyakit infeksi virus.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Memahami struktur sel prokariotik dan eukariotik",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu Kedokteran", "PPRA: Berkeadaban"],
            konteksPembelajaran: {
              stimulus: "Mekanisme infeksi virus SARS-CoV-2 (penyebab COVID-19) yang mengikat reseptor ACE2 pada sel paru-paru dan inovasi pengembangan vaksin platform mRNA.",
              stimulusKemenag: "Mempelajari mikroorganisme patogen dan ikhtiar pengobatan (vaksinasi) merupakan bentuk tawakal ilmiah dan perlindungan jiwa (hifdzun nafs).",
              masalahNyata: "Mengapa virus disebut sebagai bentuk peralihan antara benda mati (dapat dikristalkan) dan makhluk hidup (dapat bereproduksi di dalam sel inang hidup)?",
              kegiatanEksplorasi: [
                "Bagan perbandingan tahapan Daur Litik (Adsorpsi, Penetrasi, Sintesis, Perakitan, Lisis) vs Daur Lisogenik (Penggabungan Profag, Pembelahan).",
                "Studi literatur mekanisme pembentukan antibodi memori pascavaksinasi.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Daur Hidup Virus", teks: "Evaluasilah faktor pemicu (seperti radiasi UV atau penurunan imunitas sel inang) yang menyebabkan profag pada daur lisogenik beralih memasuki daur litik yang destruktif!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menganalisis struktur dan replikasi virus",
                  baru: "Menganggap virus memiliki struktur sel lengkap dengan sitoplasma dan membran sel.",
                  layak: "Mampu menyebutkan bagian-bagian bakteriofag (kapsid, asam nukleat DNA/RNA, ekor).",
                  cakap: "Mampu membandingkan tahapan daur litik dan lisogenik secara runtut beserta perbedaannya.",
                  mahir: "Mampu menganalisis efektivitas vaksin mRNA dan mutasi varian baru materi genetik virus.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah pernyataan yang BENAR mengenai karakteristik biologi VIRUS? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Virus bersifat aseluler (bukan sel) karena tidak memiliki sitoplasma, organel, dan membran plasma.", isCorrect: true 
              },
                  { kode: "B", teks: "Hanya memiliki salah satu jenis asam nukleat saja (DNA saja atau RNA saja).", isCorrect: true },
                  { kode: "C", teks: "Hanya dapat bereplikasi (memperbanyak diri) di dalam sel inang hidup (parasit obligat).", isCorrect: true },
                  { kode: "D", teks: "Dapat dibasmi secara efektif menggunakan obat antibiotik.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah ciri biologis virus. D keliru karena antibiotik hanya membunuh bakteri, bukan virus.",
              },
              soalUraian: {
                level: "C4 (Komparasi Daur Litik vs Lisogenik)",
                pertanyaan: "Jelaskan 2 (dua) perbedaan mendasar antara daur Litik dan daur Lisogenik pada replikasi virus Bakteriofag!",
                kunci: "1. Kondisi Sel Inang: Pada daur litik, sel inang hancur/pecah (lisis) dan mati pada akhir fase replikasi. Pada daur lisogenik, sel inang tetap hidup dan tidak rusak karena asam nukleat virus menyatu dengan DNA inang membentuk profag. 2. Kecepatan dan Sifat: Daur litik bersifat aktif dan cepat menghasilkan virion baru dalam jumlah banyak, sedangkan daur lisogenik bersifat laten/dorman di mana DNA virus ikut mengganda saat sel inang membelah diri.",
                pembahasan: "Memahami mekanisme daur infeksi litik versus integrasi profag lisogenik.",
                rubrik: [
                  { kriteria: "Menjelaskan perbedaan nasib sel inang (lisis mati vs tetap hidup)", skor: 10 },
                  { kriteria: "Menjelaskan perbedaan pembentukan profag laten vs virion aktif", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },
  // Ilmu Pengetahuan Sosial (IPS) - Fase E
  {
    fase: "Fase E",
    kelasDefault: "Kelas X",
    mapel: "Ilmu Pengetahuan Sosial (IPS)",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pemahaman Konsep & Keterampilan Proses",
        deskripsiCP: "Menjelaskan konsep dasar geografi dan fenomena fisik (litosfer, atmosfer, hidrosfer), mengimplementasikan peta dan SIG; menelaah hakikat ilmu ekonomi, mekanisme pasar, produk keuangan dan risiko; menjelaskan fungsi sosiologi dan mengkaji masyarakat secara kritis, peran individu, keragaman budaya multikultural; menelaah konsep dasar sejarah dan peristiwa dari kerajaan Hindu-Buddha hingga Islam.",
        kompetensiKKO: "Menjelaskan, Mengimplementasikan, Menelaah, Mengkaji, Menganalisis",
        lingkupMateri: "Geografi Fisik & SIG, Ekonomi & Literasi Keuangan, Sosiologi & Dinamika Kelompok, Antropologi Multikultural, Sejarah Hindu-Buddha & Islam",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP: "Menjelaskan fenomena geografi fisik (litosfer, atmosfer, hidrosfer) dan mengimplementasikan penggunaan peta serta Sistem Informasi Geografis (SIG) untuk mitigasi kebencanaan.",
            alokasiJP: 12,
            semester: "GANJIL",
            prasyarat: "Memahami konsep ruang dan interaksi spasial di Fase D",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian", "Kreativitas"],
            dimensiKarakterKemenag: ["Cinta Alam Semesta", "PPRA: Dinamis dan Inovatif (Tathawwur wa Ibtikar)"],
            konteksPembelajaran: {
              stimulus: "Siswa mengamati peta wilayah rawan gempa dan gunung berapi (Ring of Fire) di Indonesia melalui citra satelit.",
              stimulusKemenag: "Siswa menelaah ayat-ayat tentang penciptaan bumi (litosfer) dan langit (atmosfer) sebagai tanda kebesaran Allah yang perlu dipelajari untuk mitigasi bencana.",
              masalahNyata: "Bagaimana cara kita menggunakan teknologi SIG dan peta kerawanan untuk merencanakan jalur evakuasi bencana yang aman di daerah tempat tinggal?",
              kegiatanEksplorasi: [
                "Melakukan analisis lapisan litosfer di wilayah sekitar menggunakan data dari BMKG/Google Earth.",
                "Membuat denah/jalur evakuasi kebencanaan (SIG sederhana) berbasis titik kumpul aman."
              ],
              pertanyaanHOTS: [
                { level: "C6 - Kreasi", teks: "Berdasarkan data spasial kerawanan banjir dan tata guna lahan, rancanglah sebuah sistem peringatan dini dan jalur evakuasi yang paling efektif untuk wilayah permukiman padat penduduk!" }
              ],
              rubrikIndikator: [
                { kriteria: "Implementasi SIG", baru: "Hanya menyebutkan fungsi peta konvensional.", layak: "Mampu menjelaskan konsep SIG dan fungsinya untuk mitigasi.", cakap: "Mampu membaca dan menafsirkan data SIG terkait kerawanan bencana.", mahir: "Mampu merancang atau memodelkan tata ruang evakuasi menggunakan pendekatan SIG." }
              ],
              soalPGK: {
                pertanyaan: "Dalam pemanfaatan Sistem Informasi Geografis (SIG) untuk analisis daerah rawan banjir, data spasial yang sangat diperlukan adalah... (Pilih 2 jawaban benar)",
                pilihan: [
                  { kode: "A", teks: "Peta jaringan jalan dan fasilitas umum.", isCorrect: false 
              },
                  { kode: "B", teks: "Peta curah hujan wilayah.", isCorrect: true },
                  { kode: "C", teks: "Peta kemiringan lereng dan topografi.", isCorrect: true },
                  { kode: "D", teks: "Peta batas administrasi politik.", isCorrect: false }
                ],
                kunci: "Sesuai opsi benar",
                pembahasan: "Pembahasan soal ini merujuk pada materi."
              },
              soalUraian: {
                level: "C4 HOTS",
                pertanyaan: "Analisislah mengapa fenomena cuaca ekstrem dan badai lebih sering dikaji dalam ruang lingkup atmosfer dan hidrosfer, dan bagaimana penginderaan jauh dapat membantu mitigasinya!",
                kunci: "Cuaca ekstrem dan badai melibatkan sirkulasi udara (atmosfer) dan uap air laut (hidrosfer). Penginderaan jauh dengan satelit cuaca dapat memantau pergerakan awan, suhu permukaan laut, dan pola angin secara real-time, sehingga BMKG dapat memberikan peringatan dini kepada masyarakat sebelum badai mencapai daratan.",
                pembahasan: "Skor 4: Penjelasan sangat komprehensif memuat interaksi atmosfer-hidrosfer dan peran penginderaan jauh. Skor 3: Menjelaskan salah satu konsep dengan baik. Skor 2: Penjelasan kurang akurat. Skor 1: Jawaban salah/tidak relevan.",
                rubrik: [{ kriteria: "Jawaban komprehensif", skor: 10 }]
              }
            }
          }
        ]
      }
    ]
  }

,
  {
    fase: "Fase E",
    kelasDefault: "Kelas X",
    mapel: "Ilmu Pengetahuan Sosial (IPS)",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pemahaman Konsep & Keterampilan Proses",
        deskripsiCP: "Menjelaskan konsep dasar geografi dan fenomena fisik (litosfer, atmosfer, hidrosfer), mengimplementasikan peta dan SIG; menelaah hakikat ilmu ekonomi, mekanisme pasar, produk keuangan dan risiko; menjelaskan fungsi sosiologi dan mengkaji masyarakat secara kritis, peran individu, keragaman budaya multikultural; menelaah konsep dasar sejarah dan peristiwa dari kerajaan Hindu-Buddha hingga Islam.",
        kompetensiKKO: "Menjelaskan, Mengimplementasikan, Menelaah, Mengkaji, Menganalisis",
        lingkupMateri: "Geografi Fisik & SIG, Ekonomi & Literasi Keuangan, Sosiologi & Dinamika Kelompok, Antropologi Multikultural, Sejarah Hindu-Buddha & Islam",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP: "Menjelaskan fenomena geografi fisik (litosfer, atmosfer, hidrosfer) dan mengimplementasikan penggunaan peta serta Sistem Informasi Geografis (SIG) untuk mitigasi kebencanaan.",
            alokasiJP: 12,
            semester: "GANJIL",
            prasyarat: "Memahami konsep ruang dan interaksi spasial di Fase D",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian", "Kreativitas"],
            dimensiKarakterKemenag: ["Cinta Alam Semesta", "PPRA: Dinamis dan Inovatif (Tathawwur wa Ibtikar)"],
            konteksPembelajaran: {
              stimulus: "Siswa mengamati peta wilayah rawan gempa dan gunung berapi (Ring of Fire) di Indonesia melalui citra satelit.",
              stimulusKemenag: "Siswa menelaah ayat-ayat tentang penciptaan bumi (litosfer) dan langit (atmosfer) sebagai tanda kebesaran Allah yang perlu dipelajari untuk mitigasi bencana.",
              masalahNyata: "Bagaimana cara kita menggunakan teknologi SIG dan peta kerawanan untuk merencanakan jalur evakuasi bencana yang aman di daerah tempat tinggal?",
              kegiatanEksplorasi: [
                "Melakukan analisis lapisan litosfer di wilayah sekitar menggunakan data dari BMKG/Google Earth.",
                "Membuat denah/jalur evakuasi kebencanaan (SIG sederhana) berbasis titik kumpul aman."
              ],
              pertanyaanHOTS: [
                { level: "C6 - Kreasi", teks: "Berdasarkan data spasial kerawanan banjir dan tata guna lahan, rancanglah sebuah sistem peringatan dini dan jalur evakuasi yang paling efektif untuk wilayah permukiman padat penduduk!" }
              ],
              rubrikIndikator: [
                { kriteria: "Implementasi SIG", baru: "Hanya menyebutkan fungsi peta konvensional.", layak: "Mampu menjelaskan konsep SIG dan fungsinya untuk mitigasi.", cakap: "Mampu membaca dan menafsirkan data SIG terkait kerawanan bencana.", mahir: "Mampu merancang atau memodelkan tata ruang evakuasi menggunakan pendekatan SIG." }
              ],
              soalPGK: {
                pertanyaan: "Dalam pemanfaatan Sistem Informasi Geografis (SIG) untuk analisis daerah rawan banjir, data spasial yang sangat diperlukan adalah... (Pilih 2 jawaban benar)",
                pilihan: [
                  { kode: "A", teks: "Peta jaringan jalan dan fasilitas umum.", isCorrect: false },
                  { kode: "B", teks: "Peta curah hujan wilayah.", isCorrect: true },
                  { kode: "C", teks: "Peta kemiringan lereng dan topografi.", isCorrect: true },
                  { kode: "D", teks: "Peta batas administrasi politik.", isCorrect: false }
                ]
              },
              soalUraian: { level: "C4 HOTS", pertanyaan: "Analisislah mengapa fenomena cuaca ekstrem dan badai lebih sering dikaji dalam ruang lingkup atmosfer dan hidrosfer, dan bagaimana penginderaan jauh dapat membantu mitigasinya!",
                kunci: "Cuaca ekstrem dan badai melibatkan sirkulasi udara (atmosfer) dan uap air laut (hidrosfer). Penginderaan jauh dengan satelit cuaca dapat memantau pergerakan awan, suhu permukaan laut, dan pola angin secara real-time, sehingga BMKG dapat memberikan peringatan dini kepada masyarakat sebelum badai mencapai daratan.",
                pembahasan: "Skor 4: Penjelasan sangat komprehensif memuat interaksi atmosfer-hidrosfer dan peran penginderaan jauh. Skor 3: Menjelaskan salah satu konsep dengan baik. Skor 2: Penjelasan kurang akurat. Skor 1: Jawaban salah/tidak relevan."
              }
            }
          }
        ]
      }
    ]
  },
  {
    fase: "Fase E",
    kelasDefault: "Kelas X",
    mapel: "Matematika",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Bilangan",
        deskripsiCP: "Menggeneralisasi sifat-sifat bilangan berpangkat termasuk pangkat pecahan dan menggunakannya untuk menyelesaikan masalah.",
        kompetensiKKO: "Menggeneralisasi, Menyelesaikan",
        lingkupMateri: "Sifat Bilangan Berpangkat, Pangkat Pecahan",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP: "Menggeneralisasi sifat-sifat bilangan berpangkat (eksponen) dan menerapkannya dalam memecahkan masalah peluruhan atau pertumbuhan.",
            alokasiJP: 16,
            semester: "GANJIL",
            prasyarat: "Memahami operasi perkalian dan pembagian dasar",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Tafakur (Refleksi penciptaan)"],
            konteksPembelajaran: {
              stimulus: "Siswa mengamati video pertumbuhan populasi bakteri yang membelah diri setiap 20 menit.",
              stimulusKemenag: "Siswa merenungkan penciptaan alam semesta dan bagaimana ilmuwan menghitung usia fosil menggunakan prinsip peluruhan radioaktif (waktu paruh).",
              masalahNyata: "Bagaimana cara kita memprediksi jumlah bakteri pada jam ke-5 tanpa harus menghitungnya satu per satu?",
              kegiatanEksplorasi: [
                "Melakukan eksperimen simulasi pembelahan sel dengan melipat kertas secara berulang.",
                "Menemukan pola bilangan dan merumuskannya dalam bentuk pangkat (eksponen)."
              ],
              pertanyaanHOTS: [
                { level: "C5 - Mengevaluasi", teks: "Jika suatu bakteri membelah diri menjadi 3 setiap 30 menit, evaluasilah apakah dalam 3 jam jumlahnya akan melebihi 1000 bakteri!" }
              ],
              rubrikIndikator: [
                { kriteria: "Generalisasi Eksponen", baru: "Belum memahami konsep bilangan berpangkat.", layak: "Mampu menghitung nilai bilangan berpangkat sederhana.", cakap: "Mampu menggunakan sifat-sifat eksponen untuk menyederhanakan bentuk aljabar.", mahir: "Mampu menyelesaikan masalah kontekstual pertumbuhan/peluruhan menggunakan konsep eksponen." }
              ],
              soalPGK: {
                pertanyaan: "Berdasarkan sifat-sifat eksponen, manakah pernyataan berikut yang bernilai benar? (Pilih 2)",
                pilihan: [
                  { kode: "A", teks: "2^3 x 2^4 = 2^12", isCorrect: false },
                  { kode: "B", teks: "3^5 / 3^2 = 3^3", isCorrect: true },
                  { kode: "C", teks: "(4^2)^3 = 4^6", isCorrect: true },
                  { kode: "D", teks: "5^0 = 0", isCorrect: false }
                ]
              },
              soalUraian: {
                level: "C4 HOTS",
                pertanyaan: "Sebuah unsur radioaktif memiliki waktu paruh 10 tahun. Jika massa awalnya 100 gram, analisislah sisa massa unsur tersebut setelah 40 tahun dengan menggunakan konsep bilangan berpangkat pecahan!",
                kunci: "Massa akhir = M_awal x (1/2)^(t/waktu_paruh). M = 100 x (1/2)^(40/10) = 100 x (1/2)^4 = 100 x 1/16 = 6.25 gram.",
                pembahasan: "Siswa menggunakan rumus peluruhan radioaktif dan sifat pangkat untuk mendapatkan hasil akurat.",
                rubrik: [{ kriteria: "Pemodelan yang tepat dan hasil perhitungan benar", skor: 10 }]
              }
            }
          }
        ]
      },
      {
        namaElemen: "Aljabar dan Fungsi",
        deskripsiCP: "Menyelesaikan masalah sistem pertidaksamaan linear dua variabel; persamaan dan fungsi kuadrat termasuk akar imajiner; persamaan eksponensial berbasis sama dan fungsi eksponensial.",
        kompetensiKKO: "Menyelesaikan, Menganalisis",
        lingkupMateri: "Sistem Pertidaksamaan Linear Dua Variabel (SPtLDV), Fungsi Kuadrat, Persamaan Eksponensial",
        tpList: [
          {
            kodeTP: "TP.02",
            teksTP: "Menyelesaikan masalah kontekstual yang berkaitan dengan Sistem Pertidaksamaan Linear Dua Variabel (SPtLDV) untuk optimasi alokasi sumber daya.",
            alokasiJP: 18,
            semester: "GENAP",
            prasyarat: "Sistem Persamaan Linear Dua Variabel (Fase D)",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas", "Gotong Royong"],
            dimensiKarakterKemenag: ["Cinta Sesama", "Tawazun (Keseimbangan & Keadilan)"],
            konteksPembelajaran: {
              stimulus: "Siswa diminta merancang menu makanan sehat untuk panti asuhan dengan dana dan gizi terbatas.",
              stimulusKemenag: "Siswa mengelola dana zakat produktif untuk dua jenis usaha UMKM dengan syarat keuntungan dan batasan modal tertentu.",
              masalahNyata: "Bagaimana cara membagi modal Rp10.000.000 untuk membuat kerajinan A dan B agar keuntungannya maksimal, padahal bahan bakunya terbatas?",
              kegiatanEksplorasi: [
                "Menerjemahkan batasan-batasan nyata ke dalam model matematika (pertidaksamaan).",
                "Menggambar grafik daerah penyelesaian SPtLDV dan mencari titik pojok (uji titik optimum)."
              ],
              pertanyaanHOTS: [
                { level: "C6 - Mengkreasi", teks: "Rancanglah kombinasi produksi barang A dan B yang memberikan keuntungan tertinggi tanpa melanggar batas ketersediaan bahan baku di gudang!" }
              ],
              rubrikIndikator: [
                { kriteria: "Penyelesaian SPtLDV", baru: "Hanya dapat membuat satu pertidaksamaan dari masalah.", layak: "Mampu memodelkan seluruh SPtLDV namun belum dapat menggambar grafiknya.", cakap: "Mampu menggambar daerah penyelesaian (DHP) dengan tepat.", mahir: "Mampu menemukan nilai optimum (maksimum/minimum) dari masalah program linear." }
              ],
              soalPGK: {
                pertanyaan: "Daerah penyelesaian dari sistem pertidaksamaan x + y <= 4; 2x + y <= 6; x >= 0; y >= 0 memiliki titik-titik sudut (pojok)... (Pilih 2 jawaban benar)",
                pilihan: [
                  { kode: "A", teks: "(0, 4)", isCorrect: true },
                  { kode: "B", teks: "(4, 0)", isCorrect: false },
                  { kode: "C", teks: "(3, 0)", isCorrect: true },
                  { kode: "D", teks: "(2, 3)", isCorrect: false }
                ]
              },
              soalUraian: {
                level: "C5 HOTS",
                pertanyaan: "Seorang penjahit memiliki 60 meter kain sutra dan 40 meter kain katun. Gaun jenis I memerlukan 2 meter sutra dan 1 meter katun, sedangkan gaun jenis II memerlukan 1 meter sutra dan 2 meter katun. Jika laba gaun I Rp300.000 dan gaun II Rp200.000, tentukan laba maksimum yang bisa diperoleh!",
                kunci: "Model: 2x + y <= 60; x + 2y <= 40; Titik potong (26.6, 6.6) dibulatkan atau dicek titik pojok (30,0), (0,20), (26, 8) dsb. Maksimum pada produksi tertentu.",
                pembahasan: "Siswa dinilai dari langkah pemodelan, grafik, dan uji titik pojok.",
                rubrik: [{ kriteria: "Langkah terstruktur hingga uji titik pojok benar", skor: 10 }]
              }
            }
          }
        ]
      },
      {
        namaElemen: "Geometri",
        deskripsiCP: "Mengaplikasikan perbandingan trigonometri sinus, cosinus, tangen pada sudut lancip.",
        kompetensiKKO: "Mengaplikasikan, Menyelesaikan",
        lingkupMateri: "Perbandingan Trigonometri, Sudut Elevasi, Sudut Depresi",
        tpList: [
          {
            kodeTP: "TP.03",
            teksTP: "Mengaplikasikan perbandingan trigonometri sinus, cosinus, dan tangen untuk memecahkan masalah pengukuran tidak langsung dalam kehidupan sehari-hari.",
            alokasiJP: 14,
            semester: "GENAP",
            prasyarat: "Teorema Pythagoras dan Kesebangunan Segitiga",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Ketelitian dan Etos Kerja"],
            konteksPembelajaran: {
              stimulus: "Siswa diajak mengukur tinggi tiang bendera di halaman sekolah tanpa memanjatnya menggunakan alat sederhana (klinometer).",
              stimulusKemenag: "Siswa mendiskusikan penentuan arah kiblat dan awal waktu shalat yang melibatkan konsep pengukuran sudut dan geometri astronomi dasar.",
              masalahNyata: "Bagaimana cara kita mengetahui tinggi sebuah gedung bertingkat jika kita hanya mengetahui jarak kita berdiri dan sudut elevasi pandangan kita?",
              kegiatanEksplorasi: [
                "Praktik membuat klinometer sederhana dari busur derajat dan bandul.",
                "Melakukan pengukuran sudut elevasi terhadap puncak objek (tiang/pohon/gedung)."
              ],
              pertanyaanHOTS: [
                { level: "C5 - Mengevaluasi", teks: "Jika tinggi pengamat diabaikan, buktikan bahwa semakin dekat kita berdiri ke gedung, sudut elevasi pandangan ke puncak gedung akan semakin besar!" }
              ],
              rubrikIndikator: [
                { kriteria: "Aplikasi Trigonometri", baru: "Belum hafal rasio sin, cos, tan.", layak: "Mampu menentukan nilai sin, cos, tan pada segitiga siku-siku standar.", cakap: "Mampu menerjemahkan masalah nyata ke dalam sketsa segitiga siku-siku.", mahir: "Mampu menghitung panjang sisi/sudut yang belum diketahui dan menyelesaikan masalah kontekstual tinggi objek." }
              ],
              soalPGK: {
                pertanyaan: "Dalam segitiga siku-siku, perbandingan trigonometri yang didefinisikan sebagai perbandingan sisi depan (opposite) dengan sisi miring (hypotenuse) adalah... (Pilih 1 yang paling tepat, dan 1 perbandingan turunannya jika ada, di sini pilih 2 pernyataan yang benar terkait sinus dan cosinus)",
                pilihan: [
                  { kode: "A", teks: "Sinus adalah Depan dibagi Miring (De/Mi).", isCorrect: true },
                  { kode: "B", teks: "Cosinus adalah Samping dibagi Miring (Sa/Mi).", isCorrect: true },
                  { kode: "C", teks: "Tangen adalah Miring dibagi Depan.", isCorrect: false },
                  { kode: "D", teks: "Sinus adalah Samping dibagi Depan.", isCorrect: false }
                ]
              },
              soalUraian: {
                level: "C4 HOTS",
                pertanyaan: "Ahmad berdiri pada jarak 10 meter dari sebuah pohon. Ia melihat puncak pohon dengan sudut elevasi 45 derajat. Jika tinggi mata Ahmad dari tanah adalah 1,5 meter, tentukan tinggi pohon tersebut!",
                kunci: "Sketsa segitiga: Jarak horizontal = 10m. Tinggi bagian atas = 10 x tan(45) = 10 x 1 = 10m. Tinggi total = 10m + tinggi mata (1,5m) = 11,5 meter.",
                pembahasan: "Menggunakan tangen sudut elevasi dan menambahkan tinggi pengamat.",
                rubrik: [{ kriteria: "Sketsa benar, aplikasi Tangen benar, hasil akhir akurat", skor: 10 }]
              }
            }
          }
        ]
      }
    ]
  },

  {
    fase: "Fase E",
    kelasDefault: "Kelas X",
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
    fase: "Fase E",
    kelasDefault: "Kelas X",
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
    fase: "Fase E",
    kelasDefault: "Kelas X",
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
    fase: "Fase E",
    kelasDefault: "Kelas X",
    mapel: "Geografi",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pemahaman Konsep",
        deskripsiCP: "Memahami konsep Geografi secara komprehensif.",
        kompetensiKKO: "Memahami, Menganalisis",
        lingkupMateri: "Materi Esensial Geografi",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP: "Memahami konsep dasar Geografi dalam kehidupan sehari-hari.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Memiliki pengetahuan dasar terkait fenomena sosial/alam.",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Kewargaan", "Tasamuh"],
            konteksPembelajaran: {
              stimulus: "Menampilkan kasus atau gambar relevan dengan Geografi.",
              masalahNyata: "Bagaimana penerapan Geografi menyelesaikan masalah tersebut?",
              kegiatanEksplorasi: ["Observasi lingkungan", "Diskusi kelompok"],
              pertanyaanHOTS: [{ level: "C4", teks: "Analisis dampak fenomena tersebut!" }],
              rubrikIndikator: [{ kriteria: "Pemahaman Konsep", baru: "Belum", layak: "Cukup", cakap: "Baik", mahir: "Sangat Baik" }],
              soalPGK: {
                pertanyaan: "Pernyataan yang benar tentang Geografi adalah...",
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
    fase: "Fase E",
    kelasDefault: "Kelas X",
    mapel: "Informatika",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pemahaman Konsep",
        deskripsiCP: "Memahami konsep Informatika secara komprehensif.",
        kompetensiKKO: "Memahami, Menganalisis",
        lingkupMateri: "Materi Esensial Informatika",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP: "Memahami konsep dasar Informatika dalam kehidupan sehari-hari.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Memiliki pengetahuan dasar terkait fenomena sosial/alam.",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Kewargaan", "Tasamuh"],
            konteksPembelajaran: {
              stimulus: "Menampilkan kasus atau gambar relevan dengan Informatika.",
              masalahNyata: "Bagaimana penerapan Informatika menyelesaikan masalah tersebut?",
              kegiatanEksplorasi: ["Observasi lingkungan", "Diskusi kelompok"],
              pertanyaanHOTS: [{ level: "C4", teks: "Analisis dampak fenomena tersebut!" }],
              rubrikIndikator: [{ kriteria: "Pemahaman Konsep", baru: "Belum", layak: "Cukup", cakap: "Baik", mahir: "Sangat Baik" }],
              soalPGK: {
                pertanyaan: "Pernyataan yang benar tentang Informatika adalah...",
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
    fase: "Fase E",
    kelasDefault: "Kelas X",
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
  // 14. Fikih (Fase E - Kelas X MA Kemenag KBC)
  {
    fase: "Fase E",
    kelasDefault: "Kelas X",
    mapel: "Fikih",
    jalurApplicable: ["Kemenag", "Dinas"],
    elemenList: [
      {
        namaElemen: "Fikih Ibadah & Sumber Hukum Islam",
        deskripsiCP:
          "Menganalisis konsep fikih dan syariat Islam beserta sumber hukum Islam yang disepakati (Al-Qur'an, Hadis, Ijma', Qiyas) dan yang diperselisihkan; mengevaluasi tata cara pengurusan jenazah (tajhiz al-janazah); menerapkan ketentuan zakat fitrah, zakat mal, zakat profesi dan wakaf produktif; serta menganalisis ketentuan dan hikmah ibadah haji dan umrah dalam membentuk kesalehan spiritual dan sosial.",
        kompetensiKKO:
          "Menganalisis Sumber Hukum Islam, Mengevaluasi Tata Cara Tajhiz Janazah, Menerapkan Zakat & Wakaf Produktif, Menganalisis Manasik Haji & Umrah",
        lingkupMateri:
          "Konsep Fikih & Ushul Fikih, Tajhiz al-Janazah (Memandikan, Mengafani, Menyalatkan, Menguburkan), Fikih Zakat & Wakaf Produktif, Manasik Haji & Umrah Berkelanjutan",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menganalisis konsep dasar fikih, syariat Islam, dan sumber hukum Islam yang muttafaq (Al-Qur'an, Sunnah, Ijma', Qiyas) serta mukhtalaf dalam menjawab problematika hukum kontemporer dengan nalar kritis dan sikap moderat.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Memahami pengertian dasar hukum Islam dan rukun Islam",
            dimensiKarakterDinas: ["Penalaran Kritis", "Keimanan & Ketakwaan thd Tuhan YME", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Cinta Allah & Rasul", "PPRA: Berkeadaban (Ta'addub) & Musawah"],
            konteksPembelajaran: {
              stimulus:
                "Dalam menghadapi perkembangan zaman seperti rekayasa genetika dan kecerdasan buatan, para ulama menggunakan ijtihad berbasis qiyas dan maslahah mursalah untuk menetapkan kepastian hukum syar'i.",
              stimulusKemenag:
                "Sumber hukum Islam tidak hanya menjaga kemurnian akidah, tetapi juga menumbuhkan cinta ilmu dan akhlak mulia dalam menegakkan keadilan serta rahmatan lil 'alamin.",
              masalahNyata:
                "Bagaimana mekanisme para fukaha dalam mengistinbatkan hukum Islam melalui metode qiyas terhadap isu-isu baru yang belum memiliki teks nash eksplisit?",
              kegiatanEksplorasi: [
                "Studi kasus penalaran istinbat hukum qiyas pada pengharaman narkoba berdasarkan ilat memabukkan khamar.",
                "Simulasi musyawarah bahtsul masail sederhana membahas etika pemanfaatan teknologi digital.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Metodologis",
                  teks: "Evaluasilah urgensi penetapan hukum melalui Ijma' dan Qiyas ketika terjadi silang pendapat fukaha pada era disrupsi teknologi digital modern!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Penguasaan konsep sumber hukum Islam dan mekanisme ijtihad",
                  baru: "Hanya mampu menyebutkan nama-nama sumber hukum tanpa memahami kedudukannya.",
                  layak: "Mampu menjelaskan perbedaan Al-Qur'an, Hadis, Ijma', dan Qiyas secara konseptual.",
                  cakap: "Mampu menganalisis rukun qiyas (asal, far'u, hukum asal, 'ilat) dengan contoh konkret.",
                  mahir: "Mampu mengkritisi dan mengevaluasi penerapan metodologi ijtihad pada masalah kekinian secara komprehensif.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah pernyataan yang BENAR mengenai rukun-rukun qiyas dan penerapannya? (Pilihlah lebih dari satu jawaban yang benar)",
                pilihan: [
                  { kode: "A", teks: "Asal (pokok) adalah peristiwa yang sudah ada ketetapan hukumnya dalam nash Al-Qur'an atau Hadis.", isCorrect: true },
                  { kode: "B", teks: "'Illat adalah sifat yang melandasi ditetapkannya suatu hukum pada asal.", isCorrect: true },
                  { kode: "C", teks: "Far'u (cabang) wajib memiliki hukum yang berlawanan dengan hukum asal.", isCorrect: false },
                  { kode: "D", teks: "Pengharaman narkotika dianalogikan dengan khamar karena kesamaan sifat merusak akal (iskar).", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "Rukun qiyas meliputi Asal, Far'u, Hukum Asal, dan 'Illat. Far'u justru menyamakan hukumnya dengan hukum asal.",
              },
              soalUraian: {
                level: "C5 - Evaluasi",
                pertanyaan: "Jelaskan 4 rukun qiyas dan berikan contoh konkret penerapannya pada salah satu persoalan muamalah atau medis kontemporer!",
                kunci: "Rukun qiyas: Asal, Far'u, Hukum Asal, dan 'Illat. Contoh: Ganja/narkoba dianalogikan dengan khamar karena 'illat memabukkan dan merusak kesadaran akal sehat.",
                pembahasan: "Pemahaman metodologis ijtihad melalui qiyas pada masalah hukum kontemporer.",
                rubrik: [
                  { kriteria: "Ketepatan identifikasi 4 rukun qiyas", skor: 5 },
                  { kriteria: "Ketepatan contoh dan analisis 'illat kontemporer", skor: 5 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.02",
            teksTP:
              "Mengevaluasi tata cara pengurusan jenazah (tajhiz al-janazah: memandikan, mengafani, menyalatkan, dan memakamkan) serta mendemonstrasikannya sesuai sunnah dengan penuh empati dan penghormatan martabat kemanusiaan.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Memahami konsep fardhu kifayah dan rukun salat",
            dimensiKarakterDinas: ["Kolaborasi", "Kemandirian", "Keimanan & Ketakwaan thd Tuhan YME"],
            dimensiKarakterKemenag: ["Cinta Sesama", "Cinta Lingkungan", "PPRA: Keteladanan (Qudwah) & Tawassut"],
            konteksPembelajaran: {
              stimulus:
                "Pengurusan jenazah merupakan kewajiban fardhu kifayah yang mencerminkan pemuliaan tertinggi Islam terhadap jasad manusia, mulai dari menjaga aib saat memandikan hingga mendoakan ampunan.",
              stimulusKemenag:
                "Merawat jenazah melatih jiwa kasih sayang (rahmah) dan kesadaran spiritual akan kefanaan dunia serta pentingnya bekal amal shalih.",
              masalahNyata:
                "Bagaimana prosedur tajhiz al-janazah yang syar'i dan higienis pada kondisi khusus seperti korban bencana alam atau penyakit menular tanpa mengurangi kehormatan jenazah?",
              kegiatanEksplorasi: [
                "Praktik simulasi memotong dan menata kain kafan untuk jenazah laki-laki dan perempuan menggunakan manekin.",
                "Praktik simulasi salat jenazah 4 takbir beserta bacaan doa lengkap.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Fikih Darurat",
                  teks: "Analisis dan evaluasilah tata cara pemulasaraan jenazah dalam kondisi darurat medis (seperti pandemi/wabah) berdasarkan kaidah fikih 'adh-dharuratu tubihu al-mahzhurat'!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Penguasaan tata kelola tajhiz al-janazah",
                  baru: "Mengetahui tahapan jenazah namun ragu pada rukun salat jenazah.",
                  layak: "Mampu menjelaskan urutan memandikan, mengafani, dan menyalatkan secara tekstual.",
                  cakap: "Mampu mempraktikkan simulasi salat jenazah 4 takbir dan tata cara kafan dengan benar.",
                  mahir: "Mampu memimpin tata laksana jenazah dan menganalisis fatwa kondisi darurat secara akurat.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah urutan bacaan dan rukun salat jenazah yang TEPAT sesuai tuntunan sunnah? (Pilihlah lebih dari satu jawaban benar)",
                pilihan: [
                  { kode: "A", teks: "Setelah takbir pertama membaca Surat Al-Fatihah.", isCorrect: true },
                  { kode: "B", teks: "Setelah takbir kedua membaca selawat kepada Nabi Muhammad SAW.", isCorrect: true },
                  { kode: "C", teks: "Setelah takbir ketiga membaca doa permohonan ampunan khusus bagi jenazah.", isCorrect: true },
                  { kode: "D", teks: "Setelah takbir keempat wajib melakukan sujud tilawah.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Salat jenazah terdiri dari 4 takbir tanpa rukuk dan sujud: Takbir 1 Al-Fatihah, Takbir 2 Selawat, Takbir 3 Doa jenazah, Takbir 4 Doa dan Salam.",
              },
              soalUraian: {
                level: "C4 - Analisis Prosedural",
                pertanyaan: "Uraikan tata cara mengafani jenazah laki-laki dan perempuan beserta jumlah lapis kain yang disunnahkan!",
                kunci: "Jenazah laki-laki disunnahkan 3 lapis kain kafan putih. Jenazah perempuan disunnahkan 5 lapis (kain basahan, baju kurung, kerudung, dan dua lapis penutup seluruh tubuh).",
                pembahasan: "Pemahaman adab dan tata cara mengafani jenazah sesuai sunnah.",
                rubrik: [
                  { kriteria: "Rincian kafan jenazah laki-laki", skor: 5 },
                  { kriteria: "Rincian kafan jenazah perempuan", skor: 5 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.03",
            teksTP:
              "Menerapkan ketentuan fikih zakat fitrah, zakat mal, zakat profesi, dan instrumen wakaf uang demi mewujudkan keadilan sosial dan pengentasan kemiskinan umat.",
            alokasiJP: 10,
            semester: "GANJIL",
            prasyarat: "Memahami nisab, haul, dan 8 asnaf penerima zakat",
            dimensiKarakterDinas: ["Kewargaan", "Penalaran Kritis", "Kolaborasi"],
            dimensiKarakterKemenag: ["Cinta Keadilan", "Cinta Sesama", "PPRA: Dinamis & Inovatif (Tathawwur wa Ibtikar)"],
            konteksPembelajaran: {
              stimulus:
                "Zakat dan wakaf bukan sekadar ritual ibadah, melainkan pilar fiskal sosial Islam. Di era modern, zakat penghasilan/profesi dan Cash Waqf Linked Sukuk (CWLS) menjadi inovasi filantropi Islam.",
              stimulusKemenag:
                "Mengeluarkan zakat menyucikan jiwa dari sifat kikir dan menumbuhkan solidaritas sosial berbasis cinta kasih kepada mustahik.",
              masalahNyata:
                "Bagaimana menghitung zakat profesi seorang profesional muda dengan penghasilan bulanan dan bagaimana mendistribusikan wakaf uang untuk pemberdayaan ekonomi mikro mustahik?",
              kegiatanEksplorasi: [
                "Proyek mini: Simulasi penghitungan zakat penghasilan bulanan dengan nisab setara 85 gram emas.",
                "Rancangan proposal program pendayagunaan wakaf uang produktif untuk modal beasiswa santri dhuafa.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C6 - Kreasi Model Filantropi",
                  teks: "Rancanglah sebuah model integrasi zakat produktif dan wakaf uang yang berkelanjutan untuk membebaskan masyarakat desa dari jeratan rentenir/pinjol ilegal!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Penerapan fikih zakat mal, profesi, dan wakaf uang",
                  baru: "Mengetahui zakat fitrah namun belum memahami zakat profesi dan wakaf produktif.",
                  layak: "Mampu menghitung zakat fitrah dan zakat emas sesuai nisab standar.",
                  cakap: "Mampu menghitung zakat profesi bulanan dan membedakan skema zakat vs wakaf.",
                  mahir: "Mampu merancang instrumen filantropi Islam produktif untuk pemberdayaan ekonomi dhuafa.",
                },
              ],
              soalPGK: {
                pertanyaan: "Berdasarkan fatwa MUI No. 3 Tahun 2003 tentang Zakat Penghasilan, pernyataan manakah yang BENAR? (Pilihlah lebih dari satu jawaban benar)",
                pilihan: [
                  { kode: "A", teks: "Pak Ahmad wajib mengeluarkan zakat profesi karena penghasilan bulanannya melebihi nisab bulanan.", isCorrect: true },
                  { kode: "B", teks: "Besaran kadar zakat profesi yang wajib dikeluarkan adalah 2,5% dari penghasilan.", isCorrect: true },
                  { kode: "C", teks: "Zakat yang wajib dikeluarkan Pak Ahmad per bulan adalah Rp375.000.", isCorrect: true },
                  { kode: "D", teks: "Pak Ahmad tidak wajib zakat karena belum mencapai haul satu tahun kalender penuh.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Zakat profesi dikeluarkan saat menerima penghasilan (qiyas pada zakat pertanian dalam hal waktu dan zakat emas dalam hal kadar 2,5%). Rp15.000.000 x 2,5% = Rp375.000.",
              },
              soalUraian: {
                level: "C4 - Analisis Perbandingan",
                pertanyaan: "Jelaskan perbedaan fundamental antara zakat dan wakaf dari segi kepemilikan aset (pokok harta) dan sasaran penerima manfaatnya!",
                kunci: "Zakat kepemilikannya berpindah langsung kepada 8 mustahik untuk dikonsumsi/dimanfaatkan. Wakaf pokok hartanya ditahan (tidak boleh dijual/dihibahkan/diwariskan), dan hanya manfaat/hasil pengelolaannya yang disalurkan kepada mauquf 'alaih.",
                pembahasan: "Memahami distingsi yuridis dan maqashid antara zakat konsumtif dan wakaf produktif.",
                rubrik: [
                  { kriteria: "Ketepatan status pokok harta zakat vs wakaf", skor: 5 },
                  { kriteria: "Ketepatan sasaran manfaat dan penerima", skor: 5 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.04",
            teksTP:
              "Menganalisis ketentuan, rukun, wajib, larangan, dan hikmah ibadah haji serta umrah dalam menumbuhkan kesalehan spiritual, persaudaraan global (ukhuwah islamiyah), dan kepedulian sosial.",
            alokasiJP: 10,
            semester: "GANJIL",
            prasyarat: "Memahami syarat istitha'ah dan tata cara ihram",
            dimensiKarakterDinas: ["Kemandirian", "Kewargaan", "Keimanan & Ketakwaan thd Tuhan YME"],
            dimensiKarakterKemenag: ["Cinta Tanah Air & Persaudaraan Global", "Cinta Allah", "PPRA: Keteladanan & Kesetaraan"],
            konteksPembelajaran: {
              stimulus:
                "Ibadah haji merupakan puncak manifestasi persamaan derajat manusia di hadapan Allah SWT saat wukuf di Arafah, di mana seluruh jamaah mengenakan pakaian ihram putih tanpa membedakan status sosial.",
              stimulusKemenag:
                "Nilai spiritual haji mabrur tercermin pada kepedulian sosial pasca-haji, santun dalam bertutur kata (menghindari rafats, fusuq, jidal), dan menebarkan kedamaian.",
              masalahNyata:
                "Bagaimana menentukan pilihan pelaksanaan haji (Ifrad, Qiran, Tamattu') bagi jamaah haji Indonesia serta konsekuensi dam (denda) yang harus ditunaikan?",
              kegiatanEksplorasi: [
                "Pembuatan alur diagram alir (flowchart) perbedaan rukun dan wajib haji beserta konsekuensi hukum jika tertinggal.",
                "Simulasi manasik haji tamattu': Ihram, Tawaf, Sa'i, Tahallul Umrah, dilanjutkan Ihram Haji, Wukuf Arafah, Mabit Muzdalifah, Lempar Jumrah, dan Tawaf Ifadhah.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Yuridis Fikih",
                  teks: "Evaluasilah penerapan kebijakan Murur dan Tanazul pada mabit di Mina dan Muzdalifah bagi jamaah lansia/risti dari sudut pandang Maqashid Syariah hifzh an-nafs (menjaga jiwa)!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Penguasaan manasik dan hikmah haji-umrah",
                  baru: "Mengetahui haji sebagai rukun Islam kelima namun tertukar antara rukun dan wajib haji.",
                  layak: "Mampu menguraikan urutan manasik haji tamattu' secara runtut.",
                  cakap: "Mampu membedakan rukun haji, wajib haji, dan ketentuan dam secara tepat.",
                  mahir: "Mampu menganalisis problematika manasik kontemporer berbasis maqashid syariah.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah pernyataan yang BENAR mengenai perbedaan rukun haji dan wajib haji? (Pilihlah lebih dari satu jawaban benar)",
                pilihan: [
                  { kode: "A", teks: "Rukun haji jika ditinggalkan salah satunya maka hajinya batal dan tidak bisa diganti dengan dam.", isCorrect: true },
                  { kode: "B", teks: "Wajib haji jika ditinggalkan hajinya tetap sah tetapi pelakunya berdosa dan wajib membayar dam.", isCorrect: true },
                  { kode: "C", teks: "Wukuf di padang Arafah termasuk dalam rukun haji.", isCorrect: true },
                  { kode: "D", teks: "Mabit di Muzdalifah dan Mina termasuk dalam rukun haji.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Mabit di Muzdalifah dan Mina adalah wajib haji (bisa diganti dam), sedangkan rukun haji (ihram, wukuf, tawaf ifadhah, sa'i, tahallul, tertib) tidak dapat diganti dengan dam.",
              },
              soalUraian: {
                level: "C4 - Analisis Perbandingan",
                pertanyaan: "Jelaskan perbedaan mendasar antara Haji Tamattu', Haji Ifrad, dan Haji Qiran serta dam yang menyertainya!",
                kunci: "Haji Tamattu': Melaksanakan umrah terlebih dahulu baru haji (wajib dam). Haji Ifrad: Melaksanakan haji terlebih dahulu baru umrah (tidak wajib dam). Haji Qiran: Menggabungkan niat haji dan umrah sekaligus dalam satu ihram (wajib dam).",
                pembahasan: "Analisis komparatif 3 metode pelaksanaan haji sesuai fiqih sunnah.",
                rubrik: [
                  { kriteria: "Ketepatan penjelasan urutan 3 jenis manasik haji", skor: 6 },
                  { kriteria: "Ketepatan ketentuan dam masing-masing jenis", skor: 4 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Fikih Muamalah & Transaksi Kontemporer",
        deskripsiCP:
          "Menganalisis konsep dan prinsip akad muamalah, rukun jual beli (bai'), hak khiyar; mengevaluasi bahaya riba dan penerapannya dalam produk perbankan syariah; menganalisis transaksi ekonomi digital kontemporer (fintech, pinjol/paylater, uang digital); serta memahami syirkah, asuransi syariah (takaful), dan fikih kepemilikan (milkiyah) demi kemaslahatan umat.",
        kompetensiKKO:
          "Menganalisis Prinsip Akad & Jual Beli Halal, Mengevaluasi Bahaya Riba & Bank Syariah, Menganalisis Transaksi Digital Fintech Kontemporer, Mengkaji Asuransi Syariah & Syirkah",
        lingkupMateri:
          "Rukun & Syarat Jual Beli (Bai'), Hak Khiyar, Riba vs Keuangan Syariah (Mudharabah/Musyarakah/Murabahah), Transaksi Digital (E-Commerce, Paylater, E-Wallet, Fatwa DSN-MUI), Syirkah & Takaful",
        tpList: [
          {
            kodeTP: "TP.05",
            teksTP:
              "Menerapkan prinsip-prinsip akad muamalah, rukun jual beli halal (bai'), dan hak khiyar dalam mewujudkan transaksi ekonomi yang adil, jujur, transparan, dan saling rela (an-taradhin).",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "Memahami pengertian muamalah dan etika berniaga dalam Islam",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kolaborasi", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Keadilan", "Cinta Kebenaran", "PPRA: Keteladanan & Integritas (Amanah)"],
            konteksPembelajaran: {
              stimulus:
                "Prinsip dasar muamalah adalah 'al-ashlu fi al-mu'amalati al-ibahah' (asal hukum transaksi adalah boleh) selama tidak ada dalil yang mengharamkannya karena mengandung unsur riba, gharar, maysir, atau kezhaliman.",
              stimulusKemenag:
                "Penerapan hak khiyar (hak memilih melanjutkan atau membatalkan akad) mencerminkan cinta keadilan dan perlindungan hak konsumen agar tidak timbul penyesalan.",
              masalahNyata:
                "Bagaimana penerapan hak khiyar 'aib dan khiyar syarat pada transaksi belanja daring (online shopping marketplace) ketika barang yang diterima mengalami cacat atau tidak sesuai deskripsi?",
              kegiatanEksplorasi: [
                "Simulasi transaksi jual beli langsung dan virtual dengan menerapkan hak khiyar majelis, syarat, dan 'aib.",
                "Penyusunan infografis panduan berbelanja cerdas dan syar'i terhindar dari gharar dan penipuan digital.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Analisis Kasus Muamalah",
                  teks: "Analisis dan nilailah keabsahan klausul 'Barang yang sudah dibeli tidak dapat ditukar atau dikembalikan' ditinjau dari prinsip hak khiyar 'aib dalam fikih muamalah Islam!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Penerapan rukun jual beli dan hak khiyar",
                  baru: "Mengetahui jual beli namun belum memahami hak khiyar dan syarat objek ma'qud 'alaih.",
                  layak: "Mampu menyebutkan rukun jual beli dan jenis khiyar secara teoritis.",
                  cakap: "Mampu menganalisis kasus sengketa jual beli online dengan menerapkan khiyar 'aib.",
                  mahir: "Mampu menyusun klausul kontrak jual beli modern yang adil dan bebas gharar.",
                },
              ],
              soalPGK: {
                pertanyaan: "Berdasarkan konsep fikih muamalah, klausul transaksi garansi uji coba 3 hari dan barang tanpa cacat mencerminkan jenis khiyar apa saja? (Pilihlah lebih dari satu jawaban benar)",
                pilihan: [
                  { kode: "A", teks: "Khiyar Syarat, karena ada kesepakatan tenggang waktu tertentu (3 hari) untuk menguji barang.", isCorrect: true },
                  { kode: "B", teks: "Khiyar 'Aib, karena memberi hak pembatalan jika terdapat cacat tersembunyi pada barang.", isCorrect: true },
                  { kode: "C", teks: "Khiyar Majelis, karena hak memilih hanya berlaku selama masih berada di dalam toko penjual.", isCorrect: false },
                  { kode: "D", teks: "Khiyar Ru'yah, jika pembeli belum pernah melihat barang contoh sama sekali.", isCorrect: false },
                ],
                kunci: "A dan B",
                pembahasan: "Garansi uji coba 3 hari merupakan Khiyar Syarat (jangka waktu yang disepakati) dan jaminan barang tanpa cacat adalah Khiyar 'Aib.",
              },
              soalUraian: {
                level: "C4 - Analisis Rukun Jual Beli",
                pertanyaan: "Sebutkan 4 rukun jual beli dalam Islam dan jelaskan syarat sah objek barang yang diperjualbelikan (ma'qud 'alaih)!",
                kunci: "Rukun jual beli: Penjual (ba'i), Pembeli (musytari), Ijab-Kabul (sighat), dan Objek barang/uang (ma'qud 'alaih). Syarat objek: Suci, bermanfaat secara syar'i, milik penuh penjual, dapat diserahterimakan, dan diketahui spesifikasinya (tidak gharar).",
                pembahasan: "Memahami 4 rukun jual beli dan kriteria ma'qud 'alaih yang sah.",
                rubrik: [
                  { kriteria: "Kelengkapan 4 rukun jual beli", skor: 4 },
                  { kriteria: "Rincian syarat sah ma'qud 'alaih", skor: 6 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.06",
            teksTP:
              "Mengevaluasi bahaya riba dalam perspektif maqashid syariah serta menganalisis solusi perbankan syariah melalui akad titipan (wadiah), kemitraan bagi hasil (mudharabah, musyarakah), dan jual beli tangguh (murabahah).",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "Memahami definisi riba dan perbedaan untung perniagaan dengan riba",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kewargaan", "Keimanan & Ketakwaan thd Tuhan YME"],
            dimensiKarakterKemenag: ["Cinta Keadilan", "Cinta Kemaslahatan", "PPRA: Adil dan Konsisten (I'tidal)"],
            konteksPembelajaran: {
              stimulus:
                "Al-Qur'an secara tegas menghalalkan jual beli dan mengharamkan riba (QS. Al-Baqarah: 275). Riba menciptakan distorsi ekonomi di mana pemilik modal mendapatkan keuntungan pasti tanpa risiko, sementara peminjam menanggung seluruh beban kerugian.",
              stimulusKemenag:
                "Sistem perbankan syariah dibangun atas dasar cinta tolong-menolong (ta'awun) dan keadilan berbagi untung-rugi (profit and loss sharing).",
              masalahNyata:
                "Bagaimana mekanisme akad mudharabah dan murabahah di bank syariah dalam mendanai usaha UMKM masyarakat agar terhindar dari praktik riba jahiliyah maupun riba nasi'ah?",
              kegiatanEksplorasi: [
                "Perbandingan skema pinjaman bunga berbunga pada rentenir vs skema pembiayaan murabahah atau mudharabah di bank syariah.",
                "Kalkulasi simulasi nisbah bagi hasil tabungan mudharabah antara nasabah (shahibul mal) dan bank (mudharib).",
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Analisis Komparasi Kritis",
                  teks: "Kritisi anggapan masyarakat awam yang menyatakan bahwa 'Bank Syariah sama saja dengan Bank Konvensional, hanya beda istilah bunga diganti bagi hasil'. Berikan argumentasi fikih muamalah yang kokoh!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Analisis riba dan perbankan syariah",
                  baru: "Mengetahui riba haram namun menganggap sistem bank syariah sama dengan konvensional.",
                  layak: "Mampu mendefinisikan 4 jenis riba dan akad perbankan syariah.",
                  cakap: "Mampu menghitung nisbah bagi hasil mudharabah dan skema murabahah.",
                  mahir: "Mampu mengkritisi ilusi perbandingan bunga vs bagi hasil dengan argumen maqashid syariah.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah pernyataan yang BENAR mengenai karakteristik akad-akad pembiayaan syariah? (Pilihlah lebih dari satu jawaban benar)",
                pilihan: [
                  { kode: "A", teks: "Mudharabah adalah kemitraan di mana satu pihak menyediakan modal 100% dan pihak lain menyediakan keahlian/pengelolaan.", isCorrect: true },
                  { kode: "B", teks: "Murabahah adalah akad jual beli barang dengan menyatakan harga perolehan dan margin keuntungan yang disepakati.", isCorrect: true },
                  { kode: "C", teks: "Musyarakah adalah kemitraan usaha di mana semua pihak ikut menyertakan modal dan berbagi risiko usaha.", isCorrect: true },
                  { kode: "D", teks: "Wadiah yad dhamanah memperbolehkan bank memungut bunga pinjaman kepada penyimpan dana.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Wadiah yad dhamanah adalah titipan yang boleh dikelola bank dengan jaminan pengembalian utuh tanpa pembebanan bunga.",
              },
              soalUraian: {
                level: "C5 - Evaluasi Maqashid Syariah",
                pertanyaan: "Jelaskan 4 jenis riba (riba fadhl, riba nasi'ah, riba qardh, riba yad) dan uraikan mengapa Islam mengharamkan riba ditinjau dari aspek keadilan ekonomi!",
                kunci: "Riba fadhl (tukar menukar barang ribawi sejenis tak sama takaran/timbangan), Riba nasi'ah (tambahan karena penangguhan waktu), Riba qardh (manfaat/tambahan yang disyaratkan dalam utang piutang), Riba yad (berpisah sebelum serah terima). Riba diharamkan karena mengeksploitasi kebutuhan orang lain, merusak etos kerja produktif, dan memicu konsentrasi kekayaan pada segelintir elit.",
                pembahasan: "Penjelasan 4 varian riba dan implikasi filosofis pengharamannya.",
                rubrik: [
                  { kriteria: "Penjelasan 4 jenis riba dengan akurat", skor: 6 },
                  { kriteria: "Analisis hikmah pengharaman riba", skor: 4 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.07",
            teksTP:
              "Menganalisis keabsahan hukum transaksi ekonomi digital kontemporer (fintech syariah, pinjaman daring/paylater, e-wallet, uang kripto) berlandaskan fatwa Dewan Syariah Nasional (DSN-MUI).",
            alokasiJP: 10,
            semester: "GENAP",
            prasyarat: "Memahami rukun akad dan larangan gharar serta riba",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Kebenaran", "Cinta Kehati-hatian (Wara')", "PPRA: Dinamis dan Inovatif (Tathawwur wa Ibtikar)"],
            konteksPembelajaran: {
              stimulus:
                "Perkembangan teknologi finansial (Fintech) menghadirkan kemudahan transaksi melalui e-wallet, paylater, dan crowdfunding. Namun, kemudahan ini memicu tantangan fikih terkait keabsahan akad qardh wal ijarah, denda keterlambatan (ta'widh vs riba), serta volatilitas spekulatif.",
              stimulusKemenag:
                "Sikap kritis dan wara' (kehati-hatian) dalam bertransaksi digital menjaga diri dari jeratan utang konsumtif dan riba modern.",
              masalahNyata:
                "Bagaimana status hukum penggunaan fitur paylater dalam belanja daring menurut Fatwa DSN-MUI No. 116/DSN-MUI/IX/2017 tentang Uang Elektronik Syariah?",
              kegiatanEksplorasi: [
                "Bedah kasus terms and conditions (T&C) salah satu aplikasi paylater populer dan membandingkannya dengan pedoman fatwa DSN-MUI.",
                "Debat kelas terstruktur: 'Aset Kripto: Komoditas Investasi Masa Depan atau Maysir & Gharar Digital?'",
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Fatwa Syariah",
                  teks: "Evaluasilah keabsahan denda keterlambatan bayar (late fee) pada aplikasi pinjaman daring komersial dibandingkan dengan konsep ta'zir/ganti rugi riil (ta'widh) dalam fatwa DSN-MUI!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Analisis transaksi fintech dan ekonomi digital syariah",
                  baru: "Menggunakan fintech dan paylater tanpa memahami status hukum dan risiko ribanya.",
                  layak: "Mampu menjelaskan prinsip dasar uang elektronik dan batasan fatwa DSN-MUI.",
                  cakap: "Mampu membedakan akad qardh, ijarah, dan riba pada transaksi paylater.",
                  mahir: "Mampu mengevaluasi instrumen finansial kontemporer (kripto, crowdfunding) secara independen.",
                },
              ],
              soalPGK: {
                pertanyaan: "Syarat manakah yang WAJIB dipenuhi oleh dompet digital (e-wallet) agar transaksinya halal menurut syariat Islam? (Pilihlah lebih dari satu jawaban benar)",
                pilihan: [
                  { kode: "A", teks: "Dana pengguna yang ditempatkan pada penerbit e-wallet wajib disimpan pada bank syariah.", isCorrect: true },
                  { kode: "B", teks: "Biaya layanan (fee) yang dikenakan kepada merchant harus berbasis akad ijarah yang riil dan wajar.", isCorrect: true },
                  { kode: "C", teks: "Penerbit boleh memutar dana float pengguna ke instrumen investasi berbasis bunga konvensional.", isCorrect: false },
                  { kode: "D", teks: "Tidak boleh ada bunga atas saldo pengguna yang mengendap dalam dompet digital.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "Uang elektronik syariah mewajibkan penempatan dana float di bank syariah dan melarang segala bentuk bunga maupun penempatan di sektor ribawi.",
              },
              soalUraian: {
                level: "C5 - Evaluasi Kritis",
                pertanyaan: "Analisis alasan mengapa Ijtima Ulama Komisi Fatwa MUI Tahun 2021 mengharamkan penggunaan mata uang kripto (cryptocurrency) sebagai mata uang dan komoditas spekulatif!",
                kunci: "MUI mengharamkan kripto sebagai mata uang karena bertentangan dengan UU Mata Uang Rupiah dan mengandung gharar/ketidakjelasan serta tidak ada underlying asset riil. Sebagai aset komoditas, kripto yang bersifat spekulatif murni dihukumi haram karena memenuhi unsur maysir (judi).",
                pembahasan: "Kajian mendalam fatwa MUI mengenai mata uang kripto dan transaksi spekulatif digital.",
                rubrik: [
                  { kriteria: "Analisis status kripto sebagai alat tukar/mata uang", skor: 5 },
                  { kriteria: "Analisis status kripto sebagai aset/komoditas investasi", skor: 5 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.08",
            teksTP:
              "Mengkaji ketentuan syirkah (kemitraan usaha modal), asuransi syariah (takaful berbasis ta'awun), dan konsep kepemilikan harta (milkiyah) serta ihya'ul mawat demi kemaslahatan dan kedaulatan ekonomi umat.",
            alokasiJP: 10,
            semester: "GENAP",
            prasyarat: "Memahami konsep tolong-menolong (ta'awun) dan kepemilikan dalam Islam",
            dimensiKarakterDinas: ["Kolaborasi", "Kemandirian", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Lingkungan", "Cinta Sesama", "PPRA: Musyawarah (Syura) & Kesetaraan"],
            konteksPembelajaran: {
              stimulus:
                "Dalam Islam, kepemilikan mutlak adalah milik Allah SWT, sedangkan manusia hanya memegang hak kepemilikan relatif (amanah). Konsep syirkah dan takaful mengarahkan kapital untuk saling menolong dan menanggung risiko bersama (risk sharing).",
              stimulusKemenag:
                "Asuransi takaful berlandaskan akad hibah tabarru' (kebajikan sukarela untuk tolong-menolong), berbeda dengan asuransi konvensional yang memperjualbelikan risiko (risk transfer).",
              masalahNyata:
                "Bagaimana merancang model kemitraan syirkah 'inan antara pemilik modal dan pengelola kedai usaha santri kreatif agar pembagian laba dan penanggungan rugi berjalan adil dan berkah?",
              kegiatanEksplorasi: [
                "Penyusunan draf surat perjanjian kerja sama syirkah 'inan lengkap dengan nisbah bagi hasil dan mitigasi risiko usaha.",
                "Simulasi skema klaim asuransi kesehatan takaful menggunakan dana tabarru' peserta.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C6 - Kreasi Model Syirkah",
                  teks: "Rancanglah struktur akad kemitraan syirkah musyarakah mutanaqisah (kemitraan kepemilikan bertahap) untuk pembiayaan kepemilikan rumah (KPR) syariah yang adil bagi keluarga muda!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Penguasaan syirkah, asuransi takaful, dan ihya'ul mawat",
                  baru: "Mengetahui kerja sama modal namun belum memahami pembagian rugi menurut porsi modal.",
                  layak: "Mampu menjelaskan perbedaan asuransi takaful (risk sharing) vs konvensional (risk transfer).",
                  cakap: "Mampu menyusun draf perjanjian syirkah 'inan dengan nisbah bagi hasil yang syar'i.",
                  mahir: "Mampu merancang model kemitraan syirkah terintegrasi untuk kedaulatan ekonomi masyarakat.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah perbedaan BENAR antara asuransi syariah dan asuransi konvensional? (Pilihlah lebih dari satu jawaban benar)",
                pilihan: [
                  { kode: "A", teks: "Asuransi syariah berlandaskan akad tabarru' (tolong-menolong), sedangkan konvensional berbasis akad pertukaran (jual beli risiko).", isCorrect: true },
                  { kode: "B", teks: "Dalam asuransi syariah, surplus underwriting dapat dibagikan kepada peserta dan pengelola sesuai kesepakatan.", isCorrect: true },
                  { kode: "C", teks: "Asuransi syariah bebas dari unsur gharar, maysir, dan riba.", isCorrect: true },
                  { kode: "D", teks: "Premi asuransi syariah sepenuhnya menjadi milik perusahaan asuransi sejak disetorkan.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Premi dalam asuransi syariah dialokasikan ke rekening tabarru' milik kumpulan peserta untuk santunan musibah, bukan keuntungan sepihak perusahaan.",
              },
              soalUraian: {
                level: "C4 - Analisis Fikih Kepemilikan",
                pertanyaan: "Jelaskan konsep Ihya'ul Mawat (menghidupkan lahan mati) dalam fikih muamalah dan bagaimana prinsip ini dapat diterapkan untuk ketahanan pangan nasional!",
                kunci: "Ihya'ul Mawat adalah upaya mengolah dan menyuburkan tanah tak bertuan/terlantar yang belum dimiliki siapa pun sehingga tanah tersebut menjadi hak milik produktif pihak yang menghidupkannya. Dalam konteks modern, prinsip ini mendorong pemanfaatan lahan tidur dan reforma agraria produktif demi ketahanan pangan.",
                pembahasan: "Konsep pemilikan lahan produktif ihya'ul mawat dan signifikansi ketahanan pangan nasional.",
                rubrik: [
                  { kriteria: "Ketepatan definisi dan dalil Ihya'ul Mawat", skor: 5 },
                  { kriteria: "Koneksi kontekstual dengan ketahanan pangan nasional", skor: 5 },
                ],
              },
            },
          },
        ],
      },
    ],
  },
];
