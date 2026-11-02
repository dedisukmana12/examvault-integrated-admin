// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import { CPDataset } from "../curriculumDatabase";

export const FASE_C_UMUM_DATASETS: CPDataset[] = [
  // 1. Pendidikan Pancasila (Fase C - Kelas V/VI)
  {
    fase: "Fase C",
    kelasDefault: "Kelas V",
    mapel: "Pendidikan Pancasila",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pancasila",
        deskripsiCP:
          "Peserta didik mampu memahami kronologi sejarah kelahiran Pancasila; meneladani sikap para perumus Pancasila dan menerapkannya di lingkungan masyarakat; menghubungkan sila-sila dalam Pancasila sebagai suatu kesatuan yang utuh; serta menguraikan makna nilai-nilai Pancasila sebagai dasar negara dan pandangan hidup bangsa.",
        kompetensiKKO: "Memahami Kronologi, Meneladani Sikap Perumus, Menghubungkan Sila Utuh, Menguraikan Makna Dasar Negara",
        lingkupMateri: "Kronologi Kelahiran Pancasila (BPUPKI - PPKI), Keterhubungan Hierarkis 5 Sila, Pengamalan Nilai Luhur Bangsa",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menganalisis kronologi sejarah kelahiran Pancasila, meneladani keteladanan perumus Pancasila, dan menghubungkan sila-sila Pancasila sebagai satu kesatuan utuh dalam kehidupan bermasyarakat.",
            alokasiJP: 10,
            semester: "GANJIL",
            prasyarat: "Memahami lambang Garuda Pancasila dan makna 5 sila dasar",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Penalaran Kritis", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Allah & Rasul-Nya", "Cinta Tanah Air", "PPRA: Berkeadaban (Ta'addub)"],
            konteksPembelajaran: {
              stimulus: "Sidang BPUPKI 29 Mei - 1 Juni 1945 dan Piagam Jakarta 22 Juni 1945 membuktikan jiwa kenegarawanan para pendiri bangsa yang rela mengorbankan kepentingan golongan demi persatuan NKRI.",
              stimulusKemenag: "Nilai ketuhanan yang murni memancar dalam wujud kasih sayang kemanusiaan, persatuan yang rukun, permusyawaratan yang adil, dan pemerataan kesejahteraan bersama.",
              masalahNyata: "Bagaimana cara kita meneladani sikap kompromi positif para tokoh pendiri bangsa saat menyepakati perubahan kalimat pembuka Piagam Jakarta menjadi Sila Pertama?",
              kegiatanEksplorasi: [
                "Analisis garis waktu (timeline) sidang BPUPKI hingga penetapan PPKI 18 Agustus 1945.",
                "Bermain peran sidang perumusan dasar negara dan studi kasus keterpaduan kelima sila.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi",
                  teks: "Evaluasilah mengapa kesepakatan perubahan tujuh kata dalam Piagam Jakarta menjadi 'Ketuhanan Yang Maha Esa' pada 18 Agustus 1945 merupakan wujud tertinggi jiwa kenegarawanan demi keutuhan NKRI!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menganalisis kronologi sejarah dan keterhubungan sila",
                  baru: "Menyebutkan tanggal kelahiran Pancasila tanpa memahami proses sidangnya.",
                  layak: "Mampu menjelaskan usulan tiga tokoh perumus (Muh. Yamin, Soepomo, Soekarno).",
                  cakap: "Mampu menganalisis dinamika musyawarah perumusan dan keterpaduan lima sila secara runtut.",
                  mahir: "Mampu merumuskan solusi atas konflik kemasyarakatan dengan landasan kelima sila Pancasila.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah tokoh bangsa yang menyampaikan gagasan dasar negara dalam sidang BPUPKI tanggal 29 Mei - 1 Juni 1945? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Mr. Mohammad Yamin (29 Mei 1945).", isCorrect: true },
                  { kode: "B", teks: "Prof. Dr. Soepomo (31 Mei 1945).", isCorrect: true },
                  { kode: "C", teks: "Ir. Soekarno (1 Juni 1945).", isCorrect: true },
                  { kode: "D", teks: "Jenderal Sudirman.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Tiga tokoh pengusul konsep dasar negara dalam sidang BPUPKI pertama adalah Moh. Yamin, Soepomo, dan Soekarno.",
              },
              soalUraian: {
                level: "C4 (Analisis Keterpaduan Sila)",
                pertanyaan: "Jelaskan bagaimana pengamalan Sila ke-3 (Persatuan Indonesia) harus dilandasi oleh Sila ke-2 (Kemanusiaan yang Adil dan Beradab) agar tidak berkembang menjadi nasionalisme yang sempit (chauvinisme)!",
                kunci: "Persatuan Indonesia (Sila 3) tidak boleh membuat kita merendahkan martabat suku atau bangsa lain. Sila ke-2 menuntut perlakuan yang adil dan beradab kepada seluruh umat manusia. Dengan demikian, rasa kebangsaan Indonesia adalah nasionalisme yang menjunjung tinggi perikemanusiaan dan persaudaraan antarbangsa.",
                pembahasan: "Keterpaduan Sila 2 dan Sila 3 melahirkan nasionalisme yang humanis dan inklusif.",
                rubrik: [
                  { kriteria: "Menjelaskan bahaya nasionalisme sempit tanpa nilai kemanusiaan", skor: 10 },
                  { kriteria: "Menjelaskan konsep nasionalisme humanis berdasarkan Sila ke-2", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Undang-Undang Dasar Negara Republik Indonesia Tahun 1945",
        deskripsiCP:
          "Peserta didik mampu mengimplementasikan bentuk-bentuk norma, hak, dan kewajiban dalam kedudukannya sebagai warga negara; mengenal Pembukaan Undang-Undang Dasar Negara Republik Indonesia Tahun 1945; serta mempraktikkan musyawarah untuk membuat kesepakatan dan aturan bersama, lalu menerapkannya dalam lingkungan keluarga dan sekolah.",
        kompetensiKKO: "Mengimplementasikan Norma, Mengenal Pembukaan UUD 1945, Mempraktikkan Musyawarah Mufakat",
        lingkupMateri: "Norma, Hak & Kewajiban WNI, Makna 4 Alinea Pembukaan UUD 1945, Budaya Musyawarah",
        tpList: [
          {
            kodeTP: "TP.02",
            teksTP:
              "Mengimplementasikan norma, hak, dan kewajiban warga negara, menguraikan makna 4 alinea Pembukaan UUD 1945, serta mempraktikkan musyawarah mufakat di lingkungan keluarga dan sekolah.",
            alokasiJP: 10,
            semester: "GANJIL",
            prasyarat: "Memahami aturan dan tata tertib di rumah dan sekolah",
            dimensiKarakterDinas: ["Kewargaan", "Penalaran Kritis", "Kolaborasi"],
            dimensiKarakterKemenag: ["Cinta Keadilan", "PPRA: Musyawarah (Syura)", "Cinta Tanah Air"],
            konteksPembelajaran: {
              stimulus: "Pembukaan UUD 1945 memuat tujuan nasional: melindungi segenap bangsa, memajukan kesejahteraan umum, mencerdaskan kehidupan bangsa, dan ikut melaksanakan ketertiban dunia.",
              stimulusKemenag: "Bermusyawarah dalam urusan publik (amruhum syura bainahum) adalah perintah agama untuk melahirkan keputusan yang adil dan diridhoi bersama.",
              masalahNyata: "Bagaimana cara menyepakati aturan piket kelas atau jadwal belajar kelompok secara demokratis jika terdapat perbedaan pendapat yang tajam?",
              kegiatanEksplorasi: [
                "Simulasi musyawarah penyusunan deklarasi kelas ramah anak dan bebas perundungan.",
                "Membedah makna pokok pikiran alinea 1 sampai 4 Pembukaan UUD NRI 1945.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi",
                  teks: "Evaluasilah keterkaitan antara pelaksanaan kewajiban membayar pajak dan menaati hukum dengan terwujudnya tujuan mencerdaskan kehidupan bangsa pada Pembukaan UUD 1945!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Penerapan norma dan pemahaman Pembukaan UUD 1945",
                  baru: "Mengetahui hak diri sendiri tanpa mau melaksanakan kewajiban.",
                  layak: "Mampu menyebutkan 4 alinea Pembukaan UUD 1945 secara runtut.",
                  cakap: "Mampu mempraktikkan musyawarah mufakat dan menghargai keputusan bersama.",
                  mahir: "Mampu memimpin resolusi musyawarah dan merumuskan norma kelas yang berkeadilan.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah tujuan nasional bangsa Indonesia yang tercantum dalam Alinea Keempat Pembukaan UUD 1945? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Melindungi segenap bangsa Indonesia dan seluruh tumpah darah Indonesia.", isCorrect: true },
                  { kode: "B", teks: "Memajukan kesejahteraan umum.", isCorrect: true },
                  { kode: "C", teks: "Mencerdaskan kehidupan bangsa.", isCorrect: true },
                  { kode: "D", teks: "Menjajah negara lain yang lemah secara ekonomi.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Empat tujuan negara dalam Pembukaan UUD 1945: melindungi bangsa, menyejahterakan umum, mencerdaskan bangsa, dan ikut ketertiban dunia.",
              },
              soalUraian: {
                level: "C4 (Penerapan Musyawarah)",
                pertanyaan: "Jelaskan 3 etika penting yang harus dijunjung tinggi saat mengikuti musyawarah mufakat di sekolah!",
                kunci: "1. Menyampaikan pendapat secara santun dan tidak memotong pembicaraan orang lain. 2. Menghargai perbedaan pendapat dan tidak memaksakan kehendak pribadi. 3. Melaksanakan hasil keputusan musyawarah dengan ikhlas dan penuh tanggung jawab meskipun usulan pribadinya tidak terpilih.",
                pembahasan: "Menanamkan nilai demokrasi Pancasila dan budaya musyawarah mufakat.",
                rubrik: [
                  { kriteria: "Menyebutkan 3 etika musyawarah secara tepat", skor: 10 },
                  { kriteria: "Menjelaskan komitmen pelaksanaan hasil keputusan bersama", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Bhinneka Tunggal Ika",
        deskripsiCP:
          "Peserta didik mampu menyajikan hasil identifikasi sikap menghormati perbedaan suku, ras, agama, dan budaya di lingkungan masyarakat sekitar; menunjukkan sikap toleransi, gotong royong, dan moderasi beragama.",
        kompetensiKKO: "Menyajikan Hasil Identifikasi, Menunjukkan Sikap Toleransi, Menerapkan Gotong Royong",
        lingkupMateri: "Keragaman Sosio-Kultural, Tradisi Gotong Royong, Moderasi Beragama di Lingkungan Sekitar",
        tpList: [
          {
            kodeTP: "TP.03",
            teksTP:
              "Menyajikan hasil identifikasi keragaman suku, agama, dan budaya serta mengimplementasikan sikap toleransi, moderasi beragama, dan gotong royong di lingkungan sekitar.",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "Mengenal keragaman rumah adat, pakaian daerah, dan tarian",
            dimensiKarakterDinas: ["Kewargaan", "Kolaborasi", "Komunikasi"],
            dimensiKarakterKemenag: ["Cinta Tanah Air", "PPRA: Toleransi (Tasamuh)", "PPRA: Moderat (Tawassut)"],
            konteksPembelajaran: {
              stimulus: "Tradisi gotong royong 'Sambatan' di Jawa, 'Mapalus' di Minahasa, atau 'Ngrombo' di Lombok menjadi sarana merekatkan kebhinekaan lintas agama dan latar belakang.",
              stimulusKemenag: "Menghargai keragaman adalah sunnatullah (hukum penciptaan) agar manusia saling mengenal (lita'arafu) dan tolong-menolong dalam kebaikan.",
              masalahNyata: "Bagaimana cara kita mengajak teman sekelas untuk menghormati perayaan hari besar keagamaan teman yang berbeda agama tanpa mencampuradukkan akidah?",
              kegiatanEksplorasi: [
                "Membuat peta visual keragaman budaya dan kearifan lokal daerah tempat tinggal.",
                "Menyelenggarakan festival kuliner nusantara mini di kelas dengan saling menceritakan filosofi makanan khas daerah.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi",
                  teks: "Evaluasilah peran penting sikap moderasi beragama dalam mencegah potensi gesekan sosial di lingkungan perumahan yang multikultural!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menyajikan identifikasi keragaman dan moderasi",
                  baru: "Mengetahui keberagaman suku secara terbatas.",
                  layak: "Mampu membuat daftar 5 suku dan agama di sekitarnya.",
                  cakap: "Mampu menyajikan analisis keragaman budaya dan mempraktikkan toleransi aktif.",
                  mahir: "Mampu menjadi inisiator kegiatan gotong royong inklusif di lingkungan sekolah/masyarakat.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah contoh sikap toleransi dan moderasi yang TEPAT dalam kehidupan sehari-hari? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Memberi kesempatan teman beribadah sesuai agamanya saat kerja kelompok.", isCorrect: true },
                  { kode: "B", teks: "Tidak memutar musik dengan volume keras saat tetangga sedang melaksanakan ibadah.", isCorrect: true },
                  { kode: "C", teks: "Bekerja sama membersihkan selokan desa tanpa membeda-bedakan suku dan agama.", isCorrect: true },
                  { kode: "D", teks: "Hanya mau berteman dengan orang yang satu suku dan satu daerah asal saja.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah perwujudan sikap tasamuh dan persatuan. D adalah sikap eksklusif yang memecah belah.",
              },
              soalUraian: {
                level: "C4 (Analisis Moderasi)",
                pertanyaan: "Jelaskan apa yang dimaksud dengan 'Gotong Royong' dan bagaimana tradisi gotong royong dapat memperkokoh persatuan bangsa di era modern!",
                kunci: "Gotong royong adalah kegiatan bekerja bersama-sama secara sukarela untuk mencapai hasil yang bermanfaat bagi kepentingan umum. Gotong royong memperkokoh persatuan karena meruntuhkan sekat perbedaan suku/agama, menumbuhkan rasa senasib sepenanggungan, dan membangun solidaritas sosial masyarakat.",
                pembahasan: "Gotong royong sebagai intisari nilai Pancasila dan perekat integrasi nasional.",
                rubrik: [
                  { kriteria: "Menjelaskan pengertian gotong royong secara tepat", skor: 10 },
                  { kriteria: "Menjelaskan dampaknya terhadap penguatan persatuan bangsa", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 2. Bahasa Indonesia (Fase C - Kelas V/VI)
  {
    fase: "Fase C",
    kelasDefault: "Kelas V",
    mapel: "Bahasa Indonesia",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Menyimak",
        deskripsiCP:
          "Peserta didik mampu menganalisis informasi dari teks nonsastra berbentuk teks aural (teks yang dibacakan dan/atau didengarkan), serta menganalisis isi teks sastra berbentuk teks aural.",
        kompetensiKKO: "Menganalisis Informasi Teks Aural, Mengevaluasi Fakta vs Opini, Menemukan Pesan Moral Sastra",
        lingkupMateri: "Teks Aural Berita, Siniar (Podcast) Edukatif, Cerita Rakyat & Drama Audio",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menganalisis dan mengevaluasi informasi, ide pokok, fakta vs opini, serta pesan moral dari teks sastra dan nonsastra aural (didengarkan/dibacakan).",
            alokasiJP: 10,
            semester: "GANJIL",
            prasyarat: "Mampu menyimak cerita dan menyebutkan tokoh",
            dimensiKarakterDinas: ["Penalaran Kritis", "Komunikasi", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Kebenaran (Tabayyun)", "Cinta Ilmu", "PPRA: Berkeadaban"],
            konteksPembelajaran: {
              stimulus: "Mendengarkan rekaman siniar wawancara tentang inovasi daur ulang sampah plastik dan fabel audio bertema kepemimpinan bijak sang kancil.",
              stimulusKemenag: "Meneliti kebenaran setiap kabar yang didengar (tabayyun) adalah prinsip penting agar tidak mudah termakan berita palsu.",
              masalahNyata: "Bagaimana cara kita membedakan pernyataan fakta berbasis data ilmiah dengan opini emosional pembicara dalam siaran berita radio?",
              kegiatanEksplorasi: [
                "Menyimak rekaman berita dan mencatat 3 kalimat fakta serta 2 kalimat opini.",
                "Menganalisis pesan tersirat dan amanat moral dari teks drama audio anak.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi",
                  teks: "Evaluasilah validitas informasi yang disampaikan pembicara dalam rekaman siniar berdasarkan bukti data yang disajikannya!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menganalisis informasi dan membedakan fakta vs opini teks aural",
                  baru: "Belum mampu membedakan kalimat fakta dengan pendapat pribadi.",
                  layak: "Mampu mengenali fakta yang memuat angka dan waktu.",
                  cakap: "Mampu memisahkan fakta dan opini serta merumuskan ide pokok teks aural.",
                  mahir: "Mampu mengevaluasi motif penutur dan menganalisis nuansa makna tersirat dalam teks aural.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah kalimat berikut yang merupakan FAKTA yang dapat dibuktikan kebenarannya? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Danau Toba adalah danau vulkanik terbesar di Indonesia dan Asia Tenggara.", isCorrect: true },
                  { kode: "B", teks: "Pemandangan di sekitar Danau Toba adalah pemandangan yang paling indah di dunia.", isCorrect: false },
                  { kode: "C", teks: "Candi Borobudur dibangun pada abad ke-8 oleh Dinasti Syailendra.", isCorrect: true },
                  { kode: "D", teks: "Semua orang pasti menyukai makanan pedas khas Padang.", isCorrect: false },
                ],
                kunci: "A dan C",
                pembahasan: "A dan C adalah fakta sejarah/geografis yang terverifikasi. B dan D adalah opini/penilaian subjektif.",
              },
              soalUraian: {
                level: "C4 (Analisis Amanat Teks Aural)",
                pertanyaan: "Setelah mendengarkan cerita tentang 'Persahabatan Elang dan Merpati', jelaskan amanat moral apa yang dapat kamu petik dan bagaimana contoh penerapannya di kelas!",
                kunci: "Amanat: Sahabat sejati adalah mereka yang saling melengkapi kekurangan dan saling menolong saat mengalami kesulitan tanpa memandang fisik atau derajat. Penerapan di kelas: Membantu teman yang kesulitan memahami pelajaran matematika tanpa mengejeknya.",
                pembahasan: "Menganalisis pesan moral dan mengontekstualisasikannya dalam kehidupan nyata.",
                rubrik: [
                  { kriteria: "Menyebutkan amanat cerita secara tepat", skor: 10 },
                  { kriteria: "Memberikan contoh penerapan nyata di kelas", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Membaca dan Memirsa",
        deskripsiCP:
          "Peserta didik mampu membaca kata-kata dengan berbagai pola kombinasi huruf secara fasih dari bacaan dan/atau tayangan yang dipirsa; serta menganalisis informasi serta nilai-nilai dalam teks sastra dan nonsastra berwujud teks visual dan/atau audiovisual.",
        kompetensiKKO: "Membaca Fasih, Menganalisis Informasi Visual/Audiovisual, Menafsirkan Nilai Teks Sastra",
        lingkupMateri: "Teks Eksplanasi Fenomena Alam, Infografis Multimodal, Cerpen Anak & Majas",
        tpList: [
          {
            kodeTP: "TP.02",
            teksTP:
              "Menganalisis informasi, pola sebab-akibat pada teks eksplanasi ilmiah multimodal, serta menafsirkan majas dan nilai-nilai dalam teks sastra visual/audiovisual.",
            alokasiJP: 10,
            semester: "GANJIL",
            prasyarat: "Mampu membaca lancar teks panjang",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Cinta Bahasa & Sastra", "PPRA: Dinamis"],
            konteksPembelajaran: {
              stimulus: "Infografis teks eksplanasi siklus hidrologi dan puisi alam nusantara yang memuat majas personifikasi 'Ombak pantai bernyanyi memecah kesunyian'.",
              stimulusKemenag: "Tadabbur ayat-ayat alam semesta yang tertuang dalam teks ilmiah memperkuat keimanan atas keteraturan ciptaan Tuhan.",
              masalahNyata: "Bagaimana cara memahami alur hubungan sebab-akibat terjadinya bencana banjir dari sebuah bagan infografis?",
              kegiatanEksplorasi: [
                "Membaca teks eksplanasi 'Proses Terjadinya Gempa Bumi Tektonik' dan membuat peta konsep sebab-akibat.",
                "Mengidentifikasi jenis majas (personifikasi, metafora, hiperbola) dalam kumpulan puisi anak.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C4 - Analisis",
                  teks: "Analisislah bagaimana penggunaan majas personifikasi dalam puisi mampu membangkitkan imajinasi dan kedekatan emosional pembaca terhadap alam sekitar!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menganalisis teks eksplanasi dan majas sastra",
                  baru: "Membaca teks secara harfiah tanpa memahami pesan tersirat.",
                  layak: "Mampu menemukan informasi tersurat dalam teks eksplanasi.",
                  cakap: "Mampu mengurai struktur teks eksplanasi dan menentukan jenis majas secara tepat.",
                  mahir: "Mampu membandingkan efektivitas teks eksplanasi visual versus audiovisual secara kritis.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah kalimat berikut yang menggunakan MAJAS PERSONIFIKASI (menggambarkan benda mati bersikap seperti manusia)? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Angin malam berbisik lembut membelai dedaunan.", isCorrect: true },
                  { kode: "B", teks: "Matahari pagi tersenyum hangat menyapa para petani.", isCorrect: true },
                  { kode: "C", teks: "Suaranya menggelegar membelah angkasa.", isCorrect: false },
                  { kode: "D", teks: "Pena menari-nari di atas lembaran kertas putih.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "A, B, dan D mengatribusikan sifat manusia (berbisik, tersenyum, menari) pada benda mati. C adalah majas hiperbola.",
              },
              soalUraian: {
                level: "C4 (Analisis Hubungan Kausalitas)",
                pertanyaan: "Bacalah teks berikut: 'Penebangan hutan secara liar menyebabkan tanah kehilangan daya resap air hujan. Ketika hujan deras mengguyur, air langsung meluncur membawa lapisan tanah atas dan memicu longsor.' Jelaskan rantai sebab-akibat yang terjadi pada peristiwa tersebut!",
                kunci: "Sebab Awal: Penebangan hutan liar -> Akibat 1: Hilangnya daya resap air tanah -> Akibat 2: Air hujan meluncur membawa lapisan tanah -> Akibat Akhir: Terjadinya bencana tanah longsor.",
                pembahasan: "Menganalisis hubungan sebab-akibat berantai dalam teks eksplanasi.",
                rubrik: [
                  { kriteria: "Menguraikan faktor penyebab awal secara tepat", skor: 10 },
                  { kriteria: "Menjelaskan rangkaian akibat hingga terjadi bencana longsor", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Berbicara dan Mempresentasikan",
        deskripsiCP:
          "Peserta didik mampu mempresentasikan gagasan dari berbagai tipe teks dengan efektif dan santun; serta menyampaikan perasaan berdasarkan fakta dan imajinasi (baik dari diri sendiri maupun orang lain) secara indah dan menarik dalam bentuk teks sastra dengan penggunaan kosakata secara kreatif.",
        kompetensiKKO: "Mempresentasikan Gagasan Efektif, Berpidato Santun, Menampilkan Puisi Ekspresif",
        lingkupMateri: "Pidato Persuasif, Presentasi Laporan Proyek, Deklamasi Puisi & Mendongeng",
        tpList: [
          {
            kodeTP: "TP.03",
            teksTP:
              "Mempresentasikan gagasan dan pidato persuasif secara efektif, santun, dan runtut, serta mendeklamasikan karya sastra (puisi/prosa) dengan artikulasi dan ekspresi yang memikat.",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "Mampu berbicara percaya diri di depan teman sekelas",
            dimensiKarakterDinas: ["Komunikasi", "Kreativitas", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "PPRA: Berkeadaban (Ta'addub)", "PPRA: Dinamis"],
            konteksPembelajaran: {
              stimulus: "Praktik pidato kampanye lingkungan 'Sekolah Bebas Plastik' dan lomba deklamasi puisi kebangsaan di hadapan seluruh siswa.",
              stimulusKemenag: "Menyampaikan kata-kata kebaikan dengan tutur kata yang santun (qaulan layyina) dan indah adalah keteladanan para nabi.",
              masalahNyata: "Bagaimana cara mengatur intonasi suara dan bahasa tubuh saat berpidato agar pendengar tergerak untuk ikut aksi nyata?",
              kegiatanEksplorasi: [
                "Latihan olah vokal: intonasi, modulasi volume, jeda, dan artikulasi.",
                "Simulasi pidato 3 menit dengan lembar penilaian diri dan umpan balik teman sebaya.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Retorika",
                  teks: "Evaluasilah keefektifan penggunaan data statistik versus cerita emosional (storytelling) dalam meyakinkan audiens pada pidato persuasif!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Keterampilan berpidato dan presentasi persuasif",
                  baru: "Membaca teks dari awal sampai akhir tanpa kontak mata.",
                  layak: "Mampu menyampaikan pidato dengan suara lantang dan jelas.",
                  cakap: "Mampu berpidato dengan struktur pembuka, isi argumen, dan penutup ajakan yang runtut.",
                  mahir: "Mampu menguasai panggung, menggunakan modulasi suara memikat, dan merespons pertanyaan secara cerdas.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah bagian yang WAJIB ada dalam struktur naskah PIDATO PERSUASIF yang baik? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Salam pembuka, sapaan hormat, dan ungkapan syukur.", isCorrect: true },
                  { kode: "B", teks: "Pernyataan topik masalah dan argumen logis yang meyakinkan.", isCorrect: true },
                  { kode: "C", teks: "Kalimat ajakan/himbauan bertindak nyata dan salam penutup.", isCorrect: true },
                  { kode: "D", teks: "Daftar belanja keluarga pembicara.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Struktur pidato persuasif terdiri atas: Pembuka, Isi (Pernyataan Posisi & Rangkaian Argumen), dan Penutup (Ajakan/Simpulan).",
              },
              soalUraian: {
                level: "C6 (Menyusun Kalimat Penutup Pidato)",
                pertanyaan: "Tuliskan 1 paragraf penutup pidato persuasif (3-4 kalimat) yang berisi kalimat ajakan bertema 'Gerakan Menanam Pohon di Lingkungan Sekolah'!",
                kunci: "Contoh: 'Hadirin yang saya hormati, satu pohon yang kita tanam hari ini adalah nafas kehidupan bagi generasi masa depan. Mari kita bersama-sama mengambil sekop dan menanam bibit pohon di halaman sekolah kita. Bersama kita wujudkan sekolah yang hijau, asri, dan lestari. Terima kasih atas perhatiannya, salam lestari!'",
                pembahasan: "Menyusun simpulan persuasif dengan diksi motivasional yang membangkitkan aksi.",
                rubrik: [
                  { kriteria: "Memuat kalimat ajakan menanam pohon yang jelas dan persuasif", skor: 10 },
                  { kriteria: "Penggunaan tata kalimat efektif dan penutup santun", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Menulis",
        deskripsiCP:
          "Peserta didik mampu menulis berbagai tipe teks sederhana berdasarkan gagasan, hasil pengamatan, pengalaman, dan/atau imajinasi dengan rangkaian kalimat kompleks secara kreatif, menarik, dan/atau indah; serta menggunakan kaidah kebahasaan dan kosakata baru yang memiliki makna denotatif dan konotatif.",
        kompetensiKKO: "Menulis Teks Beragam Genre, Menyusun Teks Eksposisi/Prosedur Kompleks, Menerapkan EYD",
        lingkupMateri: "Teks Prosedur Kompleks, Teks Eksposisi Hasil Riset Mini, Diksi Denotatif vs Konotatif, EYD Edisi V",
        tpList: [
          {
            kodeTP: "TP.04",
            teksTP:
              "Menulis teks eksposisi dan teks naratif/deskriptif kompleks berdasarkan hasil pengamatan/pengalaman dengan kalimat efektif, diksi denotatif/konotatif, dan kaidah ejaan bahasa Indonesia.",
            alokasiJP: 10,
            semester: "GENAP",
            prasyarat: "Mampu menyusun paragraf dengan kalimat utama dan penjelas",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "PPRA: Keteladanan (Qudwah)", "Cinta Kebenaran"],
            konteksPembelajaran: {
              stimulus: "Pengamatan proses pembuatan kompos organik daun kering di kebun sekolah dan penyusunan artikel ilmiah populer untuk majalah dinding sekolah.",
              stimulusKemenag: "Menuliskan petunjuk kebaikan dan risalah ilmu dengan kaidah bahasa yang tertib adalah amal jariyah yang mencerdaskan umat.",
              masalahNyata: "Bagaimana cara menyusun draf tulisan eksposisi agar alur penjelasannya logis, runtut, dan tidak membingungkan pembaca?",
              kegiatanEksplorasi: [
                "Menulis draf teks eksposisi bertema 'Pentingnya Sarapan Sehat Bergizi Seimbang bagi Pelajar'.",
                "Penyuntingan silang (peer-editing) memeriksa penggunaan tanda baca huruf miring, tanda petik, dan huruf kapital.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C6 - Kreasi",
                  teks: "Rancanglah teks prosedur pembuatan pupuk cair organik berbahan limbah kulit buah dengan tahapan kerja yang higienis, terukur, dan aman!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Keterampilan menulis teks eksposisi dan ejaan baku",
                  baru: "Menulis kalimat tanpa memperhatikan tanda baca titik dan koma.",
                  layak: "Mampu menulis teks eksposisi sederhana dengan struktur pembuka, isi, penutup.",
                  cakap: "Mampu memadukan fakta data pengamatan dengan kalimat efektif dan kaidah EYD yang tepat.",
                  mahir: "Mampu menghasilkan artikel ilmiah populer yang sangat menarik, kaya kosakata baru, dan siap publikasi.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah penggunaan huruf kapital dan tanda baca yang BENAR menurut kaidah EYD? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Ibu guru bertanya, \"Kapan kalian akan mengumpulkan laporan proyek sains?\"", isCorrect: true },
                  { kode: "B", teks: "Kata serapan asing ditulis dengan huruf miring, contoh: *smartphone*.", isCorrect: true },
                  { kode: "C", teks: "Kami berlibur ke Danau Toba di Provinsi Sumatera Utara.", isCorrect: true },
                  { kode: "D", teks: "Bapak membeli jeruk bali, pisang ambon, dan gula jawa.", isCorrect: true },
                ],
                kunci: "A, B, C, dan D",
                pembahasan: "Semua pilihan menerapkan kaidah EYD yang tepat (petikan langsung, huruf miring istilah asing, kapital nama geografis, huruf kecil nama jenis buah).",
              },
              soalUraian: {
                level: "C6 (Menulis Teks Prosedur)",
                pertanyaan: "Tulislah teks prosedur sederhana (minimal 4 langkah berurutan) tentang 'Cara Membuat Larutan Pengganti Cairan Tubuh (Oralit) di Rumah' dengan menggunakan kalimat perintah yang jelas!",
                kunci: "Langkah-langkah: 1. Siapkan 1 gelas (200 ml) air matang hangat. 2. Masukkan 1/2 sendok teh garam dapur dan 2 sendok teh gula pasir ke dalam air. 3. Aduk campuran tersebut hingga garam dan gula larut sempurna. 4. Minumkan larutan oralit secara bertahap kepada penderita diare untuk mencegah dehidrasi.",
                pembahasan: "Menuliskan langkah-langkah prosedural yang terukur, runtut, dan aplikatif.",
                rubrik: [
                  { kriteria: "Menuliskan takaran bahan yang tepat dan logis", skor: 10 },
                  { kriteria: "Menyusun 4 langkah kerja dengan kalimat imperatif yang jelas", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 3. Matematika (Fase C - Kelas V/VI)
  {
    fase: "Fase C",
    kelasDefault: "Kelas V",
    mapel: "Matematika",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Bilangan",
        deskripsiCP:
          "Peserta didik menunjukkan pemahaman dan intuisi bilangan (number sense) pada bilangan cacah sampai 1.000.000; mampu membaca, menulis, menentukan nilai tempat, membandingkan, mengurutkan, melakukan komposisi dan dekomposisi bilangan; menyelesaikan masalah yang berkaitan dengan uang; melakukan operasi penjumlahan, pengurangan, perkalian, dan pembagian bilangan cacah sampai 100.000; serta menyelesaikan masalah yang berkaitan dengan KPK dan FPB. Peserta didik juga dapat membandingkan dan mengurutkan berbagai pecahan termasuk pecahan campuran, melakukan operasi penjumlahan dan pengurangan pecahan, serta melakukan operasi perkalian dan pembagian pecahan dengan bilangan asli; mengubah pecahan menjadi berbagai bentuk pecahan lain, serta membandingkan dan mengurutkan bilangan desimal (satu angka di belakang koma).",
        kompetensiKKO: "Memahami Number Sense s.d. 1.000.000, Menyelesaikan KPK & FPB, Operasi Pecahan & Desimal",
        lingkupMateri: "Bilangan Cacah s.d 1.000.000, KPK dan FPB, Operasi Hitung Campur Pecahan, Desimal, dan Persen",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Membaca, menulis, menentukan nilai tempat, dan menyelesaikan operasi hitung campur bilangan cacah sampai 1.000.000 serta menyelesaikan masalah yang berkaitan dengan uang, KPK, dan FPB.",
            alokasiJP: 10,
            semester: "GANJIL",
            prasyarat: "Memahami bilangan cacah sampai 10.000 dan perkalian dasar",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Cinta Ketelitian", "PPRA: Berimbang (Tawazun)"],
            konteksPembelajaran: {
              stimulus: "Data laporan keuangan kas sekolah dan jadwal ronda malam pos kamling: Petugas A bertugas setiap 4 hari sekali dan Petugas B setiap 6 hari sekali.",
              stimulusKemenag: "Menghitung keuangan dan permodalan dengan jujur dan cermat adalah landasan muamalah yang bersih dari riba dan penipuan.",
              masalahNyata: "Jika Petugas A dan Petugas B bertugas bersama pada tanggal 1 Mei, pada tanggal berapa mereka akan bertugas ronda bersama lagi untuk kedua kalinya?",
              kegiatanEksplorasi: [
                "Eksplorasi tabel nilai tempat jutaan, ratus ribuan, puluh ribuan, ribuan, ratusan, puluhan, dan satuan.",
                "Menentukan KPK dan FPB menggunakan metode pohon faktor (faktorisasi prima) dan tabel pembagian bersusun.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C4 - Analisis FPB",
                  teks: "Ibu memiliki 36 kue bolu dan 48 kue lapis yang akan dibagikan ke dalam kotak bingkisan dengan jumlah sama banyak tanpa sisa. Analisislah berapa jumlah kotak terbanyak yang dibutuhkan dan isi masing-masing kue dalam setiap kotak!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Operasi bilangan sampai 1.000.000 dan penerapan KPK/FPB",
                  baru: "Mengerjakan operasi hitung campuran tanpa mendahulukan perkalian/pembagian.",
                  layak: "Mampu membaca dan menulis bilangan cacah sampai 1.000.000.",
                  cakap: "Mampu menentukan KPK dan FPB serta menyelesaikan soal cerita kontekstual secara tepat.",
                  mahir: "Mampu memecahkan masalah analisis keuangan multi-tahap dan pemodelan matematika kompleks secara mandiri.",
                },
              ],
              soalPGK: {
                pertanyaan: "Lampu A menyala setiap 6 detik sekali dan Lampu B menyala setiap 8 detik sekali. Manakah pernyataan yang BENAR mengenai kedua lampu tersebut? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "KPK dari bilangan 6 dan 8 adalah 24.", isCorrect: true },
                  { kode: "B", teks: "Kedua lampu akan menyala bersamaan setiap 24 detik sekali.", isCorrect: true },
                  { kode: "C", teks: "Dalam waktu 60 detik, kedua lampu menyala bersama sebanyak 2 kali.", isCorrect: true },
                  { kode: "D", teks: "FPB dari 6 dan 8 adalah 4.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "KPK(6, 8) = 24 detik. Menyala bersama pada detik ke-24 dan 48 (2 kali dalam 60 detik). FPB(6, 8) = 2 (bukan 4).",
              },
              soalUraian: {
                level: "C4 (Penerapan FPB)",
                pertanyaan: "Pak Danu memanen 45 buah mangga dan 60 buah jeruk. Buah-buah tersebut akan dimasukkan ke dalam beberapa keranjang dengan jumlah mangga dan jeruk yang sama banyak di setiap keranjang. Tentukan: a) Berapa keranjang terbanyak yang dibutuhkan? b) Berapa jumlah mangga dan jeruk di setiap keranjang?",
                kunci: "Faktorisasi: 45 = 3² x 5; 60 = 2² x 3 x 5. a) Keranjang terbanyak = FPB(45, 60) = 3 x 5 = 15 keranjang. b) Isi tiap keranjang: Mangga = 45 : 15 = 3 buah; Jeruk = 60 : 15 = 4 buah.",
                pembahasan: "Menyelesaikan masalah pembagian merata menggunakan konsep FPB.",
                rubrik: [
                  { kriteria: "Menentukan FPB = 15 keranjang secara tepat", skor: 10 },
                  { kriteria: "Menghitung isi mangga (3) dan jeruk (4) per keranjang", skor: 10 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.02",
            teksTP:
              "Melakukan operasi hitung penjumlahan, pengurangan, perkalian, dan pembagian pecahan biasa, pecahan campuran, desimal, dan persen dalam pemecahan masalah sehari-hari.",
            alokasiJP: 12,
            semester: "GANJIL",
            prasyarat: "Memahami pecahan senilai dan penyederhanaan pecahan",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Keadilan", "PPRA: Kesetaraan (Musawah)"],
            konteksPembelajaran: {
              stimulus: "Ibu membeli 3 1/2 kg gula pasir. Sebanyak 1 1/4 kg digunakan untuk membuat sirup dan 0,75 kg digunakan untuk membuat kue bolu.",
              stimulusKemenag: "Kecermatan dalam takaran pecahan mencerminkan perintah untuk menyempurnakan takaran dan timbangan secara adil.",
              masalahNyata: "Berapa kg sisa gula pasir ibu yang belum digunakan?",
              kegiatanEksplorasi: [
                "Konversi pecahan biasa, campuran, desimal, dan persen menggunakan kartu bilangan.",
                "Eksplorasi perkalian pecahan dengan model luas persegi berpetak.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C4 - Analisis Persentase",
                  teks: "Sebuah toko memberikan diskon 20% untuk sebuah sepatu seharga Rp300.000. Jika pembeli membayar dengan uang Rp300.000, hitunglah berapa uang kembalian yang diterima pembeli!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Operasi hitung pecahan, desimal, dan persen",
                  baru: "Menjumlahkan pembilang dengan pembilang dan penyebut dengan penyebut tanpa menyamakan KPK penyebut.",
                  layak: "Mampu menjumlahkan pecahan berpenyebut beda.",
                  cakap: "Mampu melakukan operasi hitung campur pecahan biasa, campuran, dan desimal secara akurat.",
                  mahir: "Mampu memecahkan masalah persentase diskon, rasio perbandingan, dan pemodelan pecahan multi-tahap.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah hasil operasi hitung pecahan berikut yang BENAR? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "2/3 + 1/4 = 8/12 + 3/12 = 11/12", isCorrect: true },
                  { kode: "B", teks: "3/4 x 2/5 = 6/20 = 3/10", isCorrect: true },
                  { kode: "C", teks: "1,5 : 0,3 = 5", isCorrect: true },
                  { kode: "D", teks: "1/2 - 1/3 = 1/1 = 1", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C benar. D salah karena 3/6 - 2/6 = 1/6.",
              },
              soalUraian: {
                level: "C4 (Soal Cerita Pecahan)",
                pertanyaan: "Pak Ahmad memiliki sebidang tanah seluas 800 m². Sebanyak 3/8 bagian dibangun rumah, 25% bagian dijadikan taman bunga, dan sisanya dibuat kolam ikan. Berapa m² luas tanah yang dibuat untuk kolam ikan?",
                kunci: "Luas rumah = 3/8 x 800 = 300 m². Luas taman = 25/100 x 800 = 200 m². Luas kolam ikan = 800 - (300 + 200) = 800 - 500 = 300 m².",
                pembahasan: "Menghitung nilai bagian pecahan dan persen dari luas total lahan.",
                rubrik: [
                  { kriteria: "Menghitung luas rumah (300 m²) dan taman (200 m²)", skor: 10 },
                  { kriteria: "Menghitung sisa luas kolam ikan (300 m²) secara tepat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Aljabar",
        deskripsiCP:
          "Peserta didik mampu menemukan nilai yang belum diketahui dalam kalimat matematika yang melibatkan penjumlahan, pengurangan, perkalian, dan pembagian pada bilangan cacah sampai 1.000 dengan menggunakan sifat-sifat bilangan dan operasinya. Peserta didik juga dapat mengidentifikasi, meniru, dan mengembangkan pola bilangan membesar dan mengecil yang melibatkan perkalian dan pembagian; bernalar secara proporsional untuk menyelesaikan masalah sehari-hari dengan rasio satuan; serta menggunakan operasi perkalian dan pembagian dalam menyelesaikan masalah sehari-hari yang terkait dengan proporsi.",
        kompetensiKKO: "Menemukan Nilai Belum Diketahui, Mengembangkan Pola Bilangan, Bernalar Proporsional Rasio Satuan",
        lingkupMateri: "Kalimat Matematika Terbuka, Pola Bilangan Perkalian/Pembagian, Rasio dan Proporsi Satuan",
        tpList: [
          {
            kodeTP: "TP.03",
            teksTP:
              "Menemukan nilai yang belum diketahui dalam kalimat matematika bilangan cacah, mengembangkan pola bilangan membesar/mengecil, serta menyelesaikan masalah rasio dan proporsi satuan.",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "Memahami pola gambar dan perkalian dasar",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "PPRA: Berimbang (Tawazun)"],
            konteksPembelajaran: {
              stimulus: "Resep membuat 10 porsi kue membutuhkan 250 gram gula dan 500 gram tepung. Jika ingin membuat 25 porsi kue, berapa kebutuhan bahannya?",
              stimulusKemenag: "Keseimbangan proporsi dan takaran yang tepat mencerminkan keteraturan hukum alam ciptaan Sang Maha Pencipta.",
              masalahNyata: "Bagaimana cara menentukan nilai x pada persamaan: 450 + x = 1.000 atau 15 x y = 450?",
              kegiatanEksplorasi: [
                "Memecahkan teka-teki pola bilangan melompat perkalian: 3, 6, 12, 24, ..., ...",
                "Menghitung rasio satuan perbandingan harga barang di supermarket (harga per 100 gram).",
              ],
              pertanyaanHOTS: [
                {
                  level: "C4 - Analisis Proporsi",
                  teks: "Sebuah mobil membutuhkan 5 liter bensin untuk menempuh jarak 60 km. Analisislah berapa liter bensin yang dibutuhkan mobil tersebut untuk menempuh perjalanan sejauh 240 km dengan kecepatan rata-rata konstan!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menyelesaikan kalimat matematika dan penalaran proporsional",
                  baru: "Menebak angka tanpa menggunakan operasi invers (kebalikan).",
                  layak: "Mampu menemukan nilai pada kalimat penjumlahan terbuka sederhana.",
                  cakap: "Mampu mengembangkan pola bilangan perkalian dan menyelesaikan masalah rasio satuan secara akurat.",
                  mahir: "Mampu memodelkan hubungan proporsi senilai majemuk ke dalam bentuk rumus matematis yang elegan.",
                },
              ],
              soalPGK: {
                pertanyaan: "Diberikan pola bilangan: 4, 12, 36, 108, p, q. Manakah pernyataan yang BENAR mengenai pola bilangan tersebut? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Pola bilangan di atas adalah pola membesar dengan aturan dikalikan 3.", isCorrect: true },
                  { kode: "B", teks: "Nilai p adalah 108 x 3 = 324.", isCorrect: true },
                  { kode: "C", teks: "Nilai q adalah 324 x 3 = 972.", isCorrect: true },
                  { kode: "D", teks: "Pola bilangan di atas adalah pola bertambah 8 secara tetap.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Aturan pola: setiap suku dikali 3. Suku ke-5 = 324, suku ke-6 = 972.",
              },
              soalUraian: {
                level: "C4 (Penalaran Proporsional)",
                pertanyaan: "Sebuah mesin cetak otomatis dapat mencetak 180 lembar undangan dalam waktu 15 menit. Berapa lembar undangan yang dapat dicetak oleh mesin tersebut jika bekerja tanpa henti selama 1 jam?",
                kunci: "Kecepatan cetak per menit = 180 : 15 = 12 lembar/menit. Waktu 1 jam = 60 menit. Jumlah undangan tercetak = 60 menit x 12 lembar/menit = 720 lembar undangan.",
                pembahasan: "Menyelesaikan rasio satuan (laju kerja) dan mengalikannya dengan durasi total waktu.",
                rubrik: [
                  { kriteria: "Menghitung laju cetak per menit (12 lembar/menit)", skor: 10 },
                  { kriteria: "Menghitung total cetak dalam 1 jam (720 lembar)", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Pengukuran",
        deskripsiCP:
          "Peserta didik mampu menentukan keliling dan luas berbagai bentuk bangun datar (segitiga, segiempat, dan segi banyak) serta gabungannya; menghitung durasi waktu; dan mengukur besar sudut pada bangun datar atau yang dibentuk dari dua garis berpotongan.",
        kompetensiKKO: "Menentukan Keliling & Luas Bangun Datar Gabungan, Menghitung Durasi Waktu, Mengukur Besar Sudut",
        lingkupMateri: "Luas Segitiga, Jajar Genjang, Trapesium, Lingkaran, Keliling & Luas Gabungan, Pengukuran Sudut Busur Derajat",
        tpList: [
          {
            kodeTP: "TP.04",
            teksTP:
              "Menentukan keliling dan luas berbagai bangun datar (segitiga, segiempat, segi banyak, lingkaran) serta gabungannya, menghitung durasi waktu, dan mengukur besar sudut menggunakan busur derajat.",
            alokasiJP: 10,
            semester: "GENAP",
            prasyarat: "Memahami rumus luas persegi dan persegipanjang",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "PPRA: Berimbang (Tawazun)"],
            konteksPembelajaran: {
              stimulus: "Denah taman kota berbentuk gabungan persegipanjang berukuran 20 m x 10 m dan setengah lingkaran berdiameter 14 m di sisi lebarnya.",
              stimulusKemenag: "Pengukuran sudut dan orientasi arah yang presisi adalah dasar hisab penentuan arah kiblat dan waktu salat.",
              masalahNyata: "Berapa m² luas total rumput yang dibutuhkan untuk menutup seluruh area taman tersebut?",
              kegiatanEksplorasi: [
                "Mengukur sudut-sudut segitiga menggunakan busur derajat dan membuktikan jumlah sudut segitiga selalu 180°.",
                "Memotong dan menyusun bangun datar gabungan untuk menghitung luas total.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C4 - Analisis Geometri Pengukuran",
                  teks: "Sebuah lapangan berbentuk trapesium sama kaki dengan panjang sisi sejajar 18 m dan 12 m serta tinggi 8 m. Hitunglah luas lapangan tersebut dan berapa biaya pengecatan jika biaya per m² adalah Rp25.000!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menghitung luas gabungan bangun datar dan pengukuran sudut",
                  baru: "Menjumlahkan angka sisi tanpa memperhatikan rumus luas bangun datar.",
                  layak: "Mampu menghitung luas segitiga L = 1/2 x a x t.",
                  cakap: "Mampu menghitung luas gabungan bangun datar dan mengukur sudut busur derajat secara tepat.",
                  mahir: "Mampu memecahkan masalah optimasi luas bidang tidak beraturan dan konversi durasi waktu multi-satuan.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah rumus perhitungan luas bangun datar yang BENAR? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Luas Segitiga = 1/2 x alas x tinggi.", isCorrect: true },
                  { kode: "B", teks: "Luas Jajar Genjang = alas x tinggi.", isCorrect: true },
                  { kode: "C", teks: "Luas Trapesium = 1/2 x (jumlah sisi sejajar) x tinggi.", isCorrect: true },
                  { kode: "D", teks: "Luas Persegi Panjang = 2 x (panjang + lebar).", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C benar. D salah karena 2 x (p + l) adalah rumus keliling persegipanjang, bukan luas.",
              },
              soalUraian: {
                level: "C4 (Luas Bangun Gabungan)",
                pertanyaan: "Sebuah bangun datar terdiri atas gabungan persegi berukuran sisi 14 cm dan setengah lingkaran yang menempel pada salah satu sisinya (diameter = 14 cm). Hitunglah luas total bangun gabungan tersebut! (Gunakan π = 22/7)",
                kunci: "Luas persegi = s x s = 14 x 14 = 196 cm². Luas setengah lingkaran = 1/2 x π x r² = 1/2 x 22/7 x 7 x 7 = 1/2 x 154 = 77 cm². Luas total = 196 + 77 = 273 cm².",
                pembahasan: "Menghitung luas persegi dan luas setengah lingkaran lalu menjumlahkannya.",
                rubrik: [
                  { kriteria: "Menghitung luas persegi (196 cm²) dan setengah lingkaran (77 cm²)", skor: 10 },
                  { kriteria: "Menghitung luas total (273 cm²) secara benar", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Geometri",
        deskripsiCP:
          "Peserta didik mampu mengkonstruksi dan mengurai bangun ruang (kubus, balok, dan gabungannya) dan mengenali visualisasi spasial (tampilan bagian depan, atas, dan samping); membandingkan karakteristik antar-bangun datar dan antar-bangun ruang; serta menentukan lokasi pada peta yang menggunakan sistem berpetak.",
        kompetensiKKO: "Mengkonstruksi Bangun Ruang, Mengenali Visualisasi Spasial, Menentukan Lokasi Sistem Berpetak",
        lingkupMateri: "Jaring-Jaring Kubus & Balok, Tampak Depan/Atas/Samping (Spasial), Peta Sistem Koordinat Berpetak",
        tpList: [
          {
            kodeTP: "TP.05",
            teksTP:
              "Mengonstruksi dan mengurai bangun ruang kubus dan balok (jaring-jaring), mengenali visualisasi spasial 3D dari berbagai perspektif, serta menentukan posisi lokasi pada peta sistem berpetak.",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "Mengenal sifat-sifat bangun ruang kubus dan balok",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "PPRA: Dinamis & Inovatif"],
            konteksPembelajaran: {
              stimulus: "Kardus kemasan produk susu berbentuk balok dibuka lipatannya untuk melihat pola jaring-jaring balok yang membentuk bangun 3 dimensi.",
              stimulusKemenag: "Sistem koordinat dan proyeksi peta adalah teknologi navigasi yang dikembangkan ilmuwan muslim untuk penjelajahan samudra dan pemetaan dunia.",
              masalahNyata: "Bagaimana cara menentukan tampilan tampak atas (top view) dan tampak depan (front view) dari susunan kubus-kubus satuan?",
              kegiatanEksplorasi: [
                "Membuat miniatur jaring-jaring kubus dan balok dari kertas karton berpetak.",
                "Permainan membaca peta koordinat berpetak: menemukan posisi gedung sekolah pada petak (Kolom D, Baris 4).",
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Spasial",
                  teks: "Diberikan gambar susunan 8 kubus satuan. Evaluasilah gambar tampak atas, tampak depan, dan tampak samping kanan dari susunan kubus tersebut!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Jaring-jaring bangun ruang dan visualisasi spasial",
                  baru: "Menyusun pola jaring-jaring yang saat dilipat ada sisi yang saling menumpuk.",
                  layak: "Mampu menggambar 1 pola jaring-jaring kubus standar.",
                  cakap: "Mampu memvalidasi pola jaring-jaring balok dan menggambar tampilan spasial 3D dari berbagai sisi.",
                  mahir: "Mampu memecahkan masalah navigasi peta berpetak dan dekonstruksi bangun ruang majemuk.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah pernyataan yang BENAR mengenai sifat-sifat bangun ruang BALOK? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Memiliki 6 sisi berbentuk persegipanjang di mana sisi yang berhadapan sama besar.", isCorrect: true },
                  { kode: "B", teks: "Memiliki 12 rusuk yang terbagi menjadi 3 kelompok rusuk sejajar sama panjang.", isCorrect: true },
                  { kode: "C", teks: "Memiliki 8 titik sudut yang semuanya berbentuk siku-siku.", isCorrect: true },
                  { kode: "D", teks: "Memiliki panjang seluruh rusuk yang semuanya sama panjang.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah sifat balok. D salah karena rusuk yang sama panjang pada balok hanya rusuk-rusuk yang sejajar (panjang, lebar, tinggi).",
              },
              soalUraian: {
                level: "C4 (Sistem Berpetak dan Luas Permukaan)",
                pertanyaan: "Sebuah balok memiliki ukuran panjang 10 cm, lebar 6 cm, dan tinggi 4 cm. Hitunglah luas seluruh permukaan jaring-jaring balok tersebut!",
                kunci: "Luas Permukaan Balok = 2 x (p x l + p x t + l x t) = 2 x (10x6 + 10x4 + 6x4) = 2 x (60 + 40 + 24) = 2 x 124 = 248 cm².",
                pembahasan: "Menghitung luas permukaan 6 sisi bidang balok.",
                rubrik: [
                  { kriteria: "Menuliskan rumus luas permukaan balok dengan benar", skor: 10 },
                  { kriteria: "Menghitung hasil akhir 248 cm² secara tepat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Analisis Data dan Peluang",
        deskripsiCP:
          "Peserta didik mampu mengurutkan, membandingkan, menyajikan, dan menganalisis data banyak benda serta data hasil pengukuran dalam bentuk gambar, piktogram, diagram batang, dan tabel frekuensi untuk mendapatkan informasi; serta menentukan kejadian dengan kemungkinan yang lebih besar atau lebih kecil dalam suatu percobaan acak.",
        kompetensiKKO: "Menyajikan Data Piktogram/Batang, Menganalisis Tabel Frekuensi, Menentukan Peluang Kemungkinan Acak",
        lingkupMateri: "Piktogram, Diagram Batang Tunggal & Ganda, Tabel Frekuensi, Peluang Sederhana (Peluang Lebih Besar/Kecil)",
        tpList: [
          {
            kodeTP: "TP.06",
            teksTP:
              "Menyajikan dan menganalisis data dalam bentuk tabel frekuensi, piktogram, dan diagram batang serta menentukan peluang kejadian acak (kemungkinan lebih besar/kecil).",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "Mampu membaca tabel sederhana",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian", "Komunikasi"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Cinta Kejujuran Data", "PPRA: Keteladanan"],
            konteksPembelajaran: {
              stimulus: "Data hasil pengukuran berat badan siswa kelas V dan percobaan melempar sebuah dadu berangka 1 sampai 6 sebanyak 30 kali.",
              stimulusKemenag: "Menyajikan data fakta yang jujur dan akurat mencerminkan integritas moral dalam menjunjung tinggi amanah ilmiah.",
              masalahNyata: "Dalam sebuah kantong terdapat 8 kelereng merah dan 2 kelereng biru. Kelereng warna apa yang memiliki peluang lebih besar terambil dalam sekali ambil tanpa melihat?",
              kegiatanEksplorasi: [
                "Melakukan survei jenis ekstrakurikuler pilihan siswa dan menggambar diagram batang ganda.",
                "Eksperimen peluang koin dan kelereng untuk membandingkan frekuensi harapan versus hasil nyata.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Peluang",
                  teks: "Diberikan sebuah pemutar (spinner) roda keberuntungan dengan 6 juring berwarna merah dan 2 juring berwarna hijau. Evaluasilah kemungkinan jarum berhenti pada warna merah dibandingkan warna hijau disertai alasan rasional!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menyajikan diagram data dan memahami peluang acak",
                  baru: "Membaca diagram batang tanpa memperhatikan skala angka pada sumbu vertikal.",
                  layak: "Mampu membuat tabel frekuensi dari data mentah.",
                  cakap: "Mampu menyajikan diagram batang rapi dan menentukan perbandingan peluang kejadian acak.",
                  mahir: "Mampu menginterpretasikan tren data multi-variabel dan merumuskan simpulan prediktif berbasis probabilitas.",
                },
              ],
              soalPGK: {
                pertanyaan: "Dalam sebuah kotak terdapat 5 bola merah, 3 bola kuning, dan 2 bola hijau. Manakah pernyataan peluang yang BENAR? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Peluang terambil bola merah adalah yang paling besar (5 dari 10 bola).", isCorrect: true },
                  { kode: "B", teks: "Peluang terambil bola hijau adalah yang paling kecil (2 dari 10 bola).", isCorrect: true },
                  { kode: "C", teks: "Peluang terambil bola kuning lebih kecil daripada bola merah tetapi lebih besar daripada bola hijau.", isCorrect: true },
                  { kode: "D", teks: "Peluang terambil bola hitam adalah pasti terjadi.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Jumlah bola = 10. Peluang merah (5/10), kuning (3/10), hijau (2/10). Bola hitam tidak ada dalam kotak sehingga mustahil terjadi.",
              },
              soalUraian: {
                level: "C4 (Analisis Diagram Batang)",
                pertanyaan: "Berikut data penjualan buku di koperasi sekolah selama 5 hari: Senin (30 buku), Selasa (45 buku), Rabu (40 buku), Kamis (55 buku), Jumat (50 buku). a) Pada hari apa penjualan buku paling tinggi? b) Berapa rata-rata penjualan buku per hari?",
                kunci: "a) Penjualan buku paling tinggi terjadi pada hari Kamis (55 buku). b) Rata-rata = (30 + 45 + 40 + 55 + 50) : 5 = 220 : 5 = 44 buku per hari.",
                pembahasan: "Menganalisis nilai tertinggi dan menghitung mean (rata-rata) data harian.",
                rubrik: [
                  { kriteria: "Menyebutkan hari penjualan tertinggi (Kamis = 55 buku)", skor: 10 },
                  { kriteria: "Menghitung total (220) dan rata-rata (44 buku) secara tepat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 4. IPAS (Fase C - Kelas V/VI)
  {
    fase: "Fase C",
    kelasDefault: "Kelas V",
    mapel: "Ilmu Pengetahuan Alam dan Sosial (IPAS)",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pemahaman IPAS (Sains dan Sosial)",
        deskripsiCP:
          "Peserta didik mampu menjelaskan letak dan kondisi geografis negara Indonesia dengan menggunakan peta konvensional/digital; meninjau sejarah perjuangan para pahlawan di lingkungan sekitar tempat tinggalnya; menemukan keragaman budaya nasional dalam konteks kebhinekaan berdasarkan pemahaman terhadap nilai-nilai kearifan lokal yang berlaku di wilayah tempat tinggal; serta menerangkan dan menerapkan kegiatan ekonomi masyarakat di lingkungan sekitar.",
        kompetensiKKO: "Menjelaskan Letak Geografis, Meninjau Sejarah Pahlawan Lokal, Menemukan Nilai Kearifan Budaya, Menerapkan Kegiatan Ekonomi",
        lingkupMateri: "Kondisi Geografis Maritim & Agraris Indonesia, Sejarah Perjuangan Kemerdekaan, Nilai Kearifan Lokal, Kegiatan Ekonomi Masyarakat",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menjelaskan letak astronomis dan geografis maritim/agraris Indonesia menggunakan peta konvensional/digital serta menganalisis dampaknya terhadap iklim dan mata pencaharian masyarakat.",
            alokasiJP: 10,
            semester: "GANJIL",
            prasyarat: "Mengenal arah mata angin dan peta pulau-pulau besar Indonesia",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kewargaan", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Tanah Air", "Cinta Lingkungan Maritim", "PPRA: Keteladanan"],
            konteksPembelajaran: {
              stimulus: "Indonesia terletak di antara dua benua (Asia dan Australia) serta dua samudra (Hindia dan Pasifik), dilewati garis khatulistiwa dengan keanekaragaman hayati maritim dan hutan hujan tropis.",
              stimulusKemenag: "Letak kepulauan nusantara yang subur dan kaya rempah-rempah adalah anugerah rahmat Tuhan yang wajib dirawat dan dijaga kedaulatannya.",
              masalahNyata: "Mengapa posisi silang Indonesia menjadikannya jalur perdagangan internasional yang sangat ramai sekaligus rawan penyelundupan hasil laut?",
              kegiatanEksplorasi: [
                "Menganalisis peta digital (Google Maps / Google Earth) melihat garis batas laut ZEE dan zona waktu WIB, WITA, WIT.",
                "Diskusi komparasi mata pencaharian masyarakat dataran tinggi (perkebunan teh/sayur) versus masyarakat pesisir pantai (nelayan/budidaya garam).",
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Geografis",
                  teks: "Evaluasilah bagaimana status Indonesia sebagai 'Poros Maritim Dunia' dapat dioptimalkan untuk meningkatkan kesejahteraan para nelayan tradisional!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menjelaskan letak geografis dan dampak sosio-ekonomis",
                  baru: "Menyebutkan nama 5 pulau besar di Indonesia.",
                  layak: "Mampu menunjukkan letak benua dan samudra pada peta.",
                  cakap: "Mampu menganalisis pengaruh letak geografis terhadap iklim muson dan kegiatan ekonomi agraris/maritim.",
                  mahir: "Mampu merumuskan ide pengembangan potensi kelautan lokal yang ramah lingkungan dan berkelanjutan.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah pernyataan yang BENAR mengenai letak geografis dan astronomis wilayah Indonesia? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Terletak di antara Benua Asia dan Benua Australia.", isCorrect: true },
                  { kode: "B", teks: "Terletak di antara Samudra Hindia dan Samudra Pasifik.", isCorrect: true },
                  { kode: "C", teks: "Berada di zona iklim tropis dengan dua musim (kemarau dan hujan).", isCorrect: true },
                  { kode: "D", teks: "Dilewati oleh garis kutub utara sehingga bersalju sepanjang tahun.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C benar. D salah karena Indonesia dilewati garis khatulistiwa (ekuator), bukan kutub.",
              },
              soalUraian: {
                level: "C4 (Analisis Iklim Muson)",
                pertanyaan: "Jelaskan bagaimana pergerakan Angin Muson Barat menyebabkan terjadinya musim hujan di sebagian besar wilayah Indonesia!",
                kunci: "Angin Muson Barat berhembus dari Benua Asia menuju Benua Australia melewati Samudra Hindia yang sangat luas. Angin ini membawa banyak uap air. Ketika uap air ini mencapai kepulauan Indonesia, terjadi kondensasi dan turunlah hujan lebat, menandai berlangsungnya musim hujan (biasanya Oktober - April).",
                pembahasan: "Menganalisis mekanisme sirkulasi angin muson terhadap pergantian musim di Indonesia.",
                rubrik: [
                  { kriteria: "Menjelaskan arah hembusan dari Asia ke Australia melewati samudra", skor: 10 },
                  { kriteria: "Menjelaskan proses uap air menjadi hujan lebat di nusantara", skor: 10 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.02",
            teksTP:
              "Meninjau sejarah perjuangan para pahlawan kemerdekaan di lingkungan sekitar, menemukan nilai kearifan lokal, serta menerapkan prinsip kegiatan ekonomi kreatif.",
            alokasiJP: 10,
            semester: "GENAP",
            prasyarat: "Mengenal nama-nama pahlawan nasional",
            dimensiKarakterDinas: ["Kewargaan", "Penalaran Kritis", "Kolaborasi"],
            dimensiKarakterKemenag: ["Cinta Sejarah Bangsa", "Cinta Kearifan Lokal", "PPRA: Keteladanan"],
            konteksPembelajaran: {
              stimulus: "Situs bersejarah benteng perjuangan dan sentra industri kerajinan gerabah lokal yang mengolah tanah liat menjadi produk seni bernilai ekspor.",
              stimulusKemenag: "Menghargai jasa para syuhada dan pahlawan yang memperjuangkan kemerdekaan adalah tanda syukur atas nikmat kedaulatan tanah air.",
              masalahNyata: "Bagaimana cara pengrajin lokal memanfaatkan media digital untuk memasarkan produk kearifan lokal ke pasar internasional?",
              kegiatanEksplorasi: [
                "Wawancara dengan sesepuh/tokoh masyarakat tentang sejarah perjuangan tokoh lokal masa pergerakan.",
                "Merancang model usaha ekonomi kreatif berbasis pemanfaatan bahan daur ulang di sekolah.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Nilai Sejarah",
                  teks: "Evaluasilah bagaimana nilai pantang menyerah dan persatuan yang dicontohkan para pahlawan dapat diterapkan oleh generasi muda dalam menghadapi tantangan era digital!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Meninjau sejarah pahlawan dan penerapan ekonomi kreatif",
                  baru: "Menghafal nama pahlawan tanpa memahami nilai keteladanannya.",
                  layak: "Mampu menceritakan biografi singkat seorang pahlawan nasional.",
                  cakap: "Mampu menganalisis nilai juang pahlawan lokal dan mengaitkannya dengan pelestarian kearifan lokal.",
                  mahir: "Mampu merancang rencana aksi ekonomi kreatif berbasis kearifan lokal yang berdampak sosial.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah yang termasuk kegiatan EKONOMI KREATIF berbasis kearifan lokal nusantara? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Pembuatan batik tulis dengan motif khas flora daerah setempat.", isCorrect: true },
                  { kode: "B", teks: "Pengolahan bahan pangan singkong menjadi aneka keripik modern kemasan menarik.", isCorrect: true },
                  { kode: "C", teks: "Kerajinan anyaman bambu menjadi tas dan kap lampu estetik.", isCorrect: true },
                  { kode: "D", teks: "Mengimpor barang plastik bekas tanpa pengolahan seni.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah inovasi nilai tambah kearifan lokal (ekonomi kreatif). D bukan kearifan lokal.",
              },
              soalUraian: {
                level: "C4 (Kegiatan Ekonomi Masyarakat)",
                pertanyaan: "Sebutkan dan jelaskan 3 jenis kegiatan ekonomi utama dalam masyarakat (Produksi, Distribusi, Konsumsi) beserta contoh nyatanya dalam kehidupan sehari-hari!",
                kunci: "1. Produksi: Kegiatan menghasilkan barang/jasa untuk menambah nilai guna (Contoh: Petani menanam dan memanen padi di sawah). 2. Distribusi: Kegiatan menyalurkan barang dari produsen ke konsumen (Contoh: Truk pengangkut beras mengirim beras dari desa ke pasar kota). 3. Konsumsi: Kegiatan menggunakan atau menghabiskan nilai guna barang/jasa untuk memenuhi kebutuhan (Contoh: Keluarga membeli dan memasak beras menjadi nasi untuk dimakan).",
                pembahasan: "Memahami rantai alur kegiatan ekonomi masyarakat secara komprehensif.",
                rubrik: [
                  { kriteria: "Menjelaskan konsep Produksi, Distribusi, Konsumsi secara akurat", skor: 10 },
                  { kriteria: "Memberikan contoh konkret yang runtut dan saling berkaitan", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Keterampilan Proses",
        deskripsiCP:
          "Peserta didik mampu menerapkan keterampilan proses secara dinamis yang meliputi: Mengamati fenomena dan peristiwa secara sederhana; Mempertanyakan dan Memprediksi dengan panduan pendidik; Merencanakan dan Melakukan Penyelidikan mandiri menggunakan alat bantu; Memproses serta Menganalisis Data dan Informasi dalam tabel/grafik; Mengevaluasi dan Refleksi; serta Mengomunikasikan Hasil penyelidikan ditunjang argumen logis melalui berbagai media.",
        kompetensiKKO: "Mengamati, Merumuskan Pertanyaan Ilmiah, Melakukan Penyelidikan Terukur, Mengomunikasikan Hasil",
        lingkupMateri: "Penyelidikan Ilmiah Terstruktur, Pengendalian Variabel, Pembuatan Grafik & Tabel Data, Komunikasi Riset",
        tpList: [
          {
            kodeTP: "TP.03",
            teksTP:
              "Menerapkan keterampilan proses ilmiah secara dinamis (mengamati, memprediksi, menyelidiki, mengolah data tabel/grafik, mengevaluasi, dan mengomunikasikan hasil) dalam investigasi sains dan sosial.",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "TP.01 & TP.02 IPAS",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian", "Kolaborasi", "Komunikasi"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Cinta Kebenaran Ilmiah", "PPRA: Keteladanan"],
            konteksPembelajaran: {
              stimulus: "Penyelidikan faktor yang memengaruhi kecepatan larutnya gula dalam air (pengaruh suhu air panas vs dingin, dan pengaruh pengadukan cepat vs lambat).",
              stimulusKemenag: "Metode ilmiah melatih kejujuran akal dan objektivitas sikap dalam menemukan hukum sebab-akibat keteraturan alam semesta.",
              masalahNyata: "Mengapa gula pasir lebih cepat larut dalam teh panas yang diaduk dibandingkan dalam air es yang tidak diaduk?",
              kegiatanEksplorasi: [
                "Merancang tabel eksperimen dengan variabel bebas (suhu air), variabel terikat (waktu larut), dan variabel kontrol (jumlah gula).",
                "Mengukur waktu menggunakan stopwatch dan menggambar grafik batang perbandingan waktu larut.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Penyelidikan",
                  teks: "Berdasarkan data eksperimen kelarutan, evaluasilah bagaimana kenaikan energi kinetik partikel air panas mempercepat proses pelarutan zat padat!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Keterampilan proses riset dan penyajian data ilmiah",
                  baru: "Melakukan eksperimen tanpa menggunakan alat ukur waktu (stopwatch).",
                  layak: "Mampu mencatat waktu larut pada tabel sederhana.",
                  cakap: "Mampu mengontrol variabel bebas/terikat dan menyajikan grafik hasil pengamatan secara akurat.",
                  mahir: "Mampu menyusun laporan ilmiah utuh, mengevaluasi kelemahan percobaan, dan mempresentasikan hasil riset dengan argumen logis.",
                },
              ],
              soalPGK: {
                pertanyaan: "Dalam eksperimen menguji pengaruh suhu air terhadap kecepatan larutnya gula, manakah variabel yang harus DIJADIKAN VARIABEL KONTROL (dibuat sama persis)? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Massa atau jumlah sendok gula pasir yang dilarutkan.", isCorrect: true },
                  { kode: "B", teks: "Volume air di dalam setiap gelas (misal: 100 ml).", isCorrect: true },
                  { kode: "C", teks: "Bentuk dan jenis gelas yang digunakan.", isCorrect: true },
                  { kode: "D", teks: "Suhu air (panas, hangat, dingin).", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah variabel kontrol (harus dibuat sama). D adalah variabel bebas (faktor yang sengaja diubah-ubah).",
              },
              soalUraian: {
                level: "C4 (Analisis Keterampilan Proses)",
                pertanyaan: "Jelaskan mengapa dalam suatu percobaan ilmiah kita hanya boleh mengubah SATU variabel bebas pada satu waktu dan harus menjaga variabel lainnya tetap sama (variabel kontrol)!",
                kunci: "Agar hasil percobaan valid dan adil (*fair test*). Jika kita mengubah lebih dari satu variabel secara bersamaan (misalnya mengubah suhu air sekaligus jumlah gulanya), kita tidak akan dapat mengetahui dengan pasti faktor mana yang sebenarnya memengaruhi perbedaan waktu kelarutan tersebut.",
                pembahasan: "Prinsip keabsahan metodologi ilmiah uji terkontrol (*controlled experiment*).",
                rubrik: [
                  { kriteria: "Menjelaskan konsep uji yang adil (*fair test*)", skor: 10 },
                  { kriteria: "Menjelaskan kepastian penentuan faktor penyebab hasil eksperimen", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 5. Bahasa Inggris (Fase C - Kelas V/VI) [CEFR Level A1]
  {
    fase: "Fase C",
    kelasDefault: "Kelas V",
    mapel: "Bahasa Inggris",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Menyimak - Berbicara (Listening - Speaking)",
        deskripsiCP:
          "Peserta didik mampu memahami alur informasi secara keseluruhan, gagasan utama, dan informasi rinci dari beragam teks lisan atau teks multimodal tentang topik sehari-hari menggunakan kalimat pendek dan sederhana secara verbal.",
        kompetensiKKO: "Memahami Alur Informasi Lisan, Merespon Pertanyaan Verbal, Berinteraksi Kalimat Sederhana CEFR A1",
        lingkupMateri: "Daily Routines, School Activities, Food & Drinks, Asking & Giving Directions (CEFR Level A1)",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Memahami alur informasi rinci dan gagasan utama dari teks lisan/multimodal sederhana tentang kegiatan sehari-hari (daily routines) serta berinteraksi verbal dengan kalimat pendek dan santun (CEFR A1).",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Mengenal kosakata dasar greetings, numbers, and colors",
            dimensiKarakterDinas: ["Komunikasi", "Kemandirian", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Ilmu Bahasa", "PPRA: Berkeadaban (Ta'addub)", "Cinta Kebhinekaan Global"],
            konteksPembelajaran: {
              stimulus: "Dialog audio interaktif antara dua siswa yang mendiskusikan jadwal kegiatan ekstrakurikuler dan hobi akhir pekan: 'What time do you usually wake up on Sunday?'",
              stimulusKemenag: "Menguasai bahasa internasional adalah sarana menjalin persaudaraan antarbangsa dan menyebarkan pesan kedamaian dunia.",
              masalahNyata: "How to express time, daily habits, and personal preferences politely in English conversation?",
              kegiatanEksplorasi: [
                "Role-playing interview berpasangan: 'A Day in My Life' (kegiatan dari bangun tidur hingga malam).",
                "Menyimak lagu edukatif tentang 'Telling Time & Daily Activities' dan melengkapi lirik rumpang.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C4 - Analysis",
                  teks: "Compare and analyze the differences between Simple Present Tense for habitual actions (e.g., 'I study English every Monday') and Present Continuous Tense for current activities (e.g., 'I am studying English now')!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Listening comprehension and speaking fluency (CEFR A1)",
                  baru: "Hanya merespons dengan satu kata tanpa struktur kalimat subjek-predikat.",
                  layak: "Mampu menjawab pertanyaan waktu dan aktivitas harian dengan pola kalimat sederhana.",
                  cakap: "Mampu berdialog lancar menggunakan Simple Present Tense dengan pelafalan (pronunciation) yang jelas.",
                  mahir: "Mampu menceritakan kembali jadwal harian orang lain secara runtut dan percaya diri dengan intonasi natural.",
                },
              ],
              soalPGK: {
                pertanyaan: "Which sentences correctly describe DAILY HABITUAL ROUTINES? (Choose all correct answers!)",
                pilihan: [
                  { kode: "A", teks: "She brushes her teeth every morning before breakfast.", isCorrect: true },
                  { kode: "B", teks: "They walk to school together at 06.30 AM.", isCorrect: true },
                  { kode: "C", teks: "He plays football in the field every Sunday afternoon.", isCorrect: true },
                  { kode: "D", teks: "Yesterday I will eat fried rice for dinner.", isCorrect: false },
                ],
                kunci: "A, B, and C",
                pembahasan: "A, B, C use correct Simple Present Tense for daily routines. D has incorrect grammar mixing yesterday and will.",
              },
              soalUraian: {
                level: "C4 (Speaking / Dialogue Construction)",
                pertanyaan: "Complete the short dialogue below with polite and accurate expressions: \nA: 'Excuse me, what time does the school library open?' \nB: '...' \nA: 'Thank you very much!' \nB: '...'",
                kunci: "B: 'It opens at 08.00 in the morning.' (or: 'The library opens at 8 AM.'). B: 'You are welcome!' (or: 'My pleasure! / Don't mention it!').",
                pembahasan: "Memberikan informasi waktu pembukaan perpustakaan dan merespons ucapan terima kasih secara santun.",
                rubrik: [
                  { kriteria: "Menyampaikan informasi jam dengan tata bahasa tepat", skor: 10 },
                  { kriteria: "Merespons ucapan terima kasih dengan ungkapan santun", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Membaca - Memirsa (Reading - Viewing)",
        deskripsiCP:
          "Peserta didik mampu memahami alur informasi secara keseluruhan, gagasan utama, dan informasi rinci dari beragam teks pendek atau teks multimodal tentang topik sehari-hari dan meresponnya sesuai konteks.",
        kompetensiKKO: "Membaca Teks Pendek, Menemukan Informasi Rinci, Menafsirkan Teks Multimodal",
        lingkupMateri: "Descriptive Text (Animals, Places, Persons), Short Notice, Timetable, CEFR A1 Vocabulary",
        tpList: [
          {
            kodeTP: "TP.02",
            teksTP:
              "Membaca dan menganalisis ide pokok serta informasi rinci dari teks deskripsi pendek dan teks multimodal (tanda petunjuk, jadwal, deskripsi hewan/tempat) sesuai konteks (CEFR A1).",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Mampu membaca kosakata dasar benda di sekitar",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "PPRA: Dinamis"],
            konteksPembelajaran: {
              stimulus: "Teks deskripsi bergambar tentang 'Komodo Dragon, The Ancient Giant Lizard of Indonesia' dan jadwal penerbangan di bandara.",
              stimulusKemenag: "Membaca teks tentang kekayaan fauna nusantara menumbuhkan rasa bangga dan cinta terhadap anugerah alam ciptaan Tuhan.",
              masalahNyata: "How to extract key facts (habitat, diet, physical characteristics) from an English descriptive text?",
              kegiatanEksplorasi: [
                "Membaca teks deskripsi tentang tempat wisata candi Borobudur dan melengkapi tabel fakta (Location, Built in, Material, Features).",
                "Mencocokkan rambu-rambu petunjuk (Public Notices) dengan maknanya.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C4 - Analysis",
                  teks: "Read the descriptive text about Raja Ampat and analyze why it is called a paradise for marine biodiversity based on the supporting details provided in the text!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Reading comprehension of descriptive text",
                  baru: "Hanya menebak arti kata tanpa melihat petunjuk visual atau konteks kalimat.",
                  layak: "Mampu menemukan jawaban pertanyaan 'What', 'Where', dan 'When' yang tersurat.",
                  cakap: "Mampu menentukan gagasan utama setiap paragraf dan mengidentifikasi kata sifat deskriptif secara tepat.",
                  mahir: "Mampu menyimpulkan makna tersirat dan membandingkan dua teks deskripsi yang berbeda secara kritis.",
                },
              ],
              soalPGK: {
                pertanyaan: "Read the text: 'The Komodo dragon is the largest living lizard on Earth. It lives on Komodo Island, East Nusa Tenggara. It has a long heavy body, a thick tail, and a yellow forked tongue.' Which statements are TRUE based on the text? (Choose all correct answers!)",
                pilihan: [
                  { kode: "A", teks: "Komodo dragons are the largest living species of lizard.", isCorrect: true },
                  { kode: "B", teks: "Their natural habitat is located on Komodo Island in East Nusa Tenggara.", isCorrect: true },
                  { kode: "C", teks: "They have a yellow forked tongue and a heavy body.", isCorrect: true },
                  { kode: "D", teks: "Komodo dragons can fly in the sky like birds.", isCorrect: false },
                ],
                kunci: "A, B, and C",
                pembahasan: "A, B, C are directly stated in the text. D is incorrect fact.",
              },
              soalUraian: {
                level: "C4 (Reading Comprehension)",
                pertanyaan: "Read: 'My school library is very cozy. It has air conditioners, large bookshelves, and comfortable sofa chairs. Students can borrow up to three books for one week.' Answer the questions: a) Why is the library cozy? b) How many books can a student borrow at one time?",
                kunci: "a) The library is cozy because it has air conditioners, large bookshelves, and comfortable sofa chairs. b) A student can borrow up to three (3) books at one time.",
                pembahasan: "Menjawab pertanyaan pemahaman membaca secara rinci berdasarkan data tersurat dalam teks.",
                rubrik: [
                  { kriteria: "Menjawab alasan suasana nyaman perpustakaan dengan tepat", skor: 10 },
                  { kriteria: "Menjawab batasan jumlah peminjaman buku (3 buku)", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Menulis - Mempresentasikan (Writing - Presenting)",
        deskripsiCP:
          "Peserta didik mampu mengomunikasikan gagasan dan pengalaman sederhana secara tertulis atau multimodal menggunakan struktur kalimat sederhana secara runut.",
        kompetensiKKO: "Menulis Kalimat Sederhana, Menyusun Paragraf Deskripsi Pendek, Mempresentasikan Karya",
        lingkupMateri: "Writing Short Descriptive Paragraphs, Greeting Cards, Simple Recipe/Procedure (CEFR Level A1)",
        tpList: [
          {
            kodeTP: "TP.03",
            teksTP:
              "Menulis dan menyajikan teks deskripsi pendek dan teks prosedur sederhana tentang hewan peliharaan, makanan kesukaan, atau kartu ucapan dengan kosakata dan tata bahasa yang tepat (CEFR A1).",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "TP.01 & TP.02 Bahasa Inggris",
            dimensiKarakterDinas: ["Komunikasi", "Kreativitas", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "PPRA: Keteladanan (Qudwah)", "Cinta Kebenaran"],
            konteksPembelajaran: {
              stimulus: "Membuat poster mini bergambar tentang hewan peliharaan favorit (My Cute Cat / My Lovely Rabbit) dan kartu ucapan Hari Guru (Happy Teachers' Day Card).",
              stimulusKemenag: "Menuliskan ungkapan doa, rasa terima kasih, dan apresiasi kepada guru dan orang tua adalah cerminan budi pekerti luhur.",
              masalahNyata: "How to compose a coherent 4-sentence descriptive paragraph about my favorite pet using appropriate adjectives?",
              kegiatanEksplorasi: [
                "Menulis draf paragraf deskriptif 4-5 kalimat dengan panduan kata tanya: Name, Color, Food, and Habit.",
                "Membuat kartu ucapan selamat ulang tahun atau hari guru dalam bahasa Inggris.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C6 - Creation",
                  teks: "Write a short recipe paragraph (3 steps) on 'How to Make a Glass of Fresh Orange Juice' using sequential connectors (First, Next, Finally)!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Writing simple descriptive/procedural text in English",
                  baru: "Menulis kata-kata acak tanpa menggunakan kata kerja (verb) atau to be.",
                  layak: "Mampu menyusun kalimat tunggal S-V-O sederhana.",
                  cakap: "Mampu menyusun 1 paragraf deskripsi runtut dengan penggunaan kata sifat dan kata ganti yang akurat.",
                  mahir: "Mampu menulis kartu ucapan atau esai deskripsi mini dengan variasi kosakata kaya dan tata bahasa bebas kesalahan.",
                },
              ],
              soalPGK: {
                pertanyaan: "Which sentences are grammatically CORRECT in English? (Choose all correct answers!)",
                pilihan: [
                  { kode: "A", teks: "I have a cute white rabbit named Fluffy.", isCorrect: true },
                  { kode: "B", teks: "It likes eating fresh carrots and vegetables.", isCorrect: true },
                  { kode: "C", teks: "Its fur is very soft and clean.", isCorrect: true },
                  { kode: "D", teks: "Rabbit is have four long ear.", isCorrect: false },
                ],
                kunci: "A, B, and C",
                pembahasan: "A, B, C are grammatically correct. D has multiple grammatical errors (incorrect subject-verb agreement and plural noun).",
              },
              soalUraian: {
                level: "C6 (Writing Short Paragraph)",
                pertanyaan: "Write a short 3-sentence description about YOUR FAVORITE ANIMAL. Mention its name, color, and why you like it!",
                kunci: "Example: 'My favorite animal is the dolphin. It has smooth grey skin and a friendly smile. I like dolphins because they are very smart and playful in the ocean.'",
                pembahasan: "Menyusun 3 kalimat deskripsi sederhana yang memuat nama, ciri fisik, dan alasan kesukaan.",
                rubrik: [
                  { kriteria: "Menyebutkan nama dan ciri fisik hewan dengan benar", skor: 10 },
                  { kriteria: "Mengemukakan alasan kesukaan dengan kalimat yang jelas", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 6. PJOK (Fase C - Kelas V/VI)
  {
    fase: "Fase C",
    kelasDefault: "Kelas V",
    mapel: "Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Terampil Bergerak",
        deskripsiCP:
          "Peserta didik mampu menyesuaikan keterampilan gerak melintasi berbagai situasi gerak; mentransfer strategi gerak yang sudah dikuasai ke dalam berbagai situasi gerak yang berbeda; serta menginvestigasi konsep gerak untuk meningkatkan capaian keterampilan gerak.",
        kompetensiKKO: "Menyesuaikan Keterampilan Gerak, Mentransfer Strategi Gerak, Menginvestigasi Konsep Gerak",
        lingkupMateri: "Pola Gerak Kombinasi Permainan Invasi (Sepak Bola, Basket), Net (Voli Mini), Lapangan (Rounders), Atletik",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menyesuaikan dan mentransfer keterampilan variasi gerak spesifik (passing, dribbling, shooting bola voli/basket dan lempar-tangkap rounders) serta menginvestigasi konsep biomekanika gerak.",
            alokasiJP: 12,
            semester: "GANJIL",
            prasyarat: "Menguasai koordinasi gerak dasar lokomotor dan manipulatif",
            dimensiKarakterDinas: ["Kesehatan", "Kolaborasi", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Kesehatan Tubuh", "PPRA: Berkeadaban", "Cinta Kerja Sama"],
            konteksPembelajaran: {
              stimulus: "Permainan bola voli mini menuntut koordinasi passing bawah untuk menerima servis lawan lalu mengumpan passing atas kepada smasher untuk mencetak poin.",
              stimulusKemenag: "Kebugaran raga dan ketangkasan fisik yang prima adalah sarana menunaikan amanah ibadah dan berbuat kebajikan bagi sesama.",
              masalahNyata: "Bagaimana cara mengatur sudut ayunan lengan saat passing bawah agar bola memantul melambung ke arah rekan satu tim, bukan keluar lapangan?",
              kegiatanEksplorasi: [
                "Latihan passing bawah berpasangan melewati net setinggi 2 meter.",
                "Simulasi mini turnamen rounders dengan menerapkan aturan strike, ball, dan out.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C4 - Analisis Biomekanika",
                  teks: "Analisislah mengapa saat melakukan passing bawah bola voli, perkenaan bola yang tepat harus jatuh pada pergelangan tangan bagian atas (lengan bawah) dan bukan pada ujung jari tangan!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Variasi gerak spesifik bola voli dan rounders",
                  baru: "Menekuk siku saat bola menyentuh lengan sehingga arah bola melenceng ke belakang.",
                  layak: "Mampu melakukan servis bawah melewati net.",
                  cakap: "Mampu mempraktikkan kombinasi passing bawah dan passing atas dengan perkenaan bola tepat.",
                  mahir: "Mampu mengatur tempo permainan, menerapkan taktik penempatan bola kosong, dan menunjukkan kepemimpinan tim.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah teknik dasar yang BENAR dalam melakukan PASSING BAWAH bola voli? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Kedua kaki dibuka selebar bahu dengan lutut sedikit ditekuk (kuda-kuda).", isCorrect: true },
                  { kode: "B", teks: "Kedua tangan dirapatkan dan diluruskan ke depan bawah dengan ibu jari sejajar.", isCorrect: true },
                  { kode: "C", teks: "Mengayunkan lengan dari bawah ke atas dengan sudut tidak melebihi 90 derajat.", isCorrect: true },
                  { kode: "D", teks: "Menekuk kedua siku tangan saat bola mengenai lengan.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah teknik passing bawah yang benar. D salah karena siku harus tetap lurus dan terkunci.",
              },
              soalUraian: {
                level: "C4 (Analisis Gerak Atletik)",
                pertanyaan: "Sebutkan 4 tahapan utama dalam cabang atletik LOMPAT JAUH gaya jongkok (tuck style) secara berurutan, dan jelaskan sikap badan saat melayang di udara!",
                kunci: "4 tahapan: 1. Awalan (lari cepat bertahap). 2. Tolakan/tumpuan (menolak dengan satu kaki terkuat di balok tumpu). 3. Melayang di udara. 4. Mendarat (dengan kedua kaki bersamaan). Sikap melayang gaya jongkok: Setelah menolak, kedua kaki ditekuk ke depan mendekati dada dan kedua tangan diayunkan ke depan untuk menjaga keseimbangan.",
                pembahasan: "Menganalisis rangkaian gerak teknis nomor lompat jauh atletik.",
                rubrik: [
                  { kriteria: "Menyebutkan 4 tahapan lompat jauh secara runtut", skor: 10 },
                  { kriteria: "Menjelaskan sikap badan melayang gaya jongkok secara tepat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Belajar Melalui Gerak",
        deskripsiCP:
          "Peserta didik mampu menguji efektivitas penerapan strategi gerak dalam berbagai situasi; merancang peraturan alternatif dan modifikasi permainan untuk mendukung prinsip fair play serta partisipasi inklusif; dan menjalankan berbagai peran untuk mencapai keberhasilan kelompok/tim.",
        kompetensiKKO: "Menguji Efektivitas Strategi, Merancang Peraturan Modifikasi Inklusif, Menjalankan Peran Tim",
        lingkupMateri: "Taktik Formasi Sederhana, Modifikasi Permainan Inklusif, Fair Play & Sportivitas Tim",
        tpList: [
          {
            kodeTP: "TP.02",
            teksTP:
              "Menguji efektivitas strategi gerak, merancang modifikasi aturan permainan inklusif yang menjunjung tinggi fair play, serta menjalankan peran aktif dalam keberhasilan tim.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Memahami aturan dasar permainan beregu",
            dimensiKarakterDinas: ["Kolaborasi", "Kewargaan", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Keadilan & Kejujuran", "PPRA: Keteladanan (Qudwah)", "Cinta Sesama"],
            konteksPembelajaran: {
              stimulus: "Merancang aturan modifikasi bola basket mini (ketinggian ring diturunkan dan semua anggota regu wajib menyentuh bola sebelum menembak) agar siswa yang bertubuh kecil dapat berpartisipasi aktif.",
              stimulusKemenag: "Kejujuran mengakui sentuhan bola (fair play) dan merangkul rekan setim adalah manifestasi akhlak luhur olahragawan beriman.",
              masalahNyata: "Bagaimana cara menyusun strategi penempatan pemain agar semua anggota kelompok berkontribusi sesuai kelebihannya masing-masing?",
              kegiatanEksplorasi: [
                "Simulasi menyusun formasi bertahan dan menyerang dalam mini soccer 5 lawan 5.",
                "Praktik menjadi wasit netral dan merancang aturan permainan yang ramah bagi siswa inklusi.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Taktik",
                  teks: "Evaluasilah bagaimana strategi umpan pendek cepat (tiki-taka) mampu mengatasi lawan yang memiliki postur tubuh jauh lebih tinggi dalam permainan sepak bola!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Penerapan strategi dan sportivitas tim inklusif",
                  baru: "Bermain individualis tanpa mau mengoper bola kepada rekan setim.",
                  layak: "Mampu bermain mengikuti aturan standar permainan.",
                  cakap: "Mampu menerapkan strategi kerja sama tim dan merancang modifikasi permainan yang adil bagi semua.",
                  mahir: "Mampu menjadi teladan sportivitas sejati, memimpin regu dengan bijak, dan merangkul teman berkebutuhan khusus.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah tindakan yang mencerminkan sikap FAIR PLAY dan SPORTIVITAS dalam pertandingan olahraga? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Mengakui bola keluar mengenai tangan/kaki sendiri kepada wasit.", isCorrect: true },
                  { kode: "B", teks: "Membantu pemain lawan yang terjatuh untuk bangkit berdiri.", isCorrect: true },
                  { kode: "C", teks: "Mengucapkan selamat dan bersalaman dengan tim lawan setelah laga berakhir.", isCorrect: true },
                  { kode: "D", teks: "Pura-pura cedera untuk mengulur-ulur waktu kemenangan.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah esensi nilai luhur fair play dan sportivitas. D adalah tindakan tidak terpuji.",
              },
              soalUraian: {
                level: "C5 (Dilema Fair Play)",
                pertanyaan: "Saat timmu sedang melancarkan serangan balik cepat, seorang pemain lawan terjatuh dan mengerang kesakitan di dekat gawangnya. Sebagai pembawa bola, tindakan apa yang paling tepat kamu lakukan dan jelaskan alasan moralnya!",
                kunci: "Tindakan paling tepat adalah membuang bola keluar lapangan (fair play) untuk menghentikan sementara pertandingan agar tim medis dapat menolong pemain lawan yang cedera. Alasan moral: Keselamatan dan kesehatan nyawa sesama manusia berada jauh di atas kepentingan mencetak gol atau memenangkan pertandingan.",
                pembahasan: "Menjunjung tinggi kemanusiaan di atas ambisi kemenangan olahraga.",
                rubrik: [
                  { kriteria: "Menjelaskan tindakan membuang bola keluar lapangan", skor: 10 },
                  { kriteria: "Menjelaskan alasan moral keselamatan jiwa di atas kemenangan", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Bergaya Hidup Aktif & Memilih Hidup yang Menyehatkan",
        deskripsiCP:
          "Peserta didik mampu berpartisipasi dalam aktivitas jasmani teratur, menjelaskan pengaruh langsungnya terhadap kesehatan, serta mengidentifikasi rekomendasi aktivitas fisik harian guna mencegah perilaku sedenter; mengidentifikasi dan menghubungkan antara gaya hidup, risiko kesehatan, dan aktivitas pencegahannya; menjelaskan pola makan sehat berdasarkan informasi kandungan gizi makanan; serta mempraktikkan penanganan cedera sedang berdasarkan prinsip pertolongan pertama.",
        kompetensiKKO: "Berpartisipasi Aktivitas Teratur, Mencegah Perilaku Sedenter, Menganalisis Gizi Makanan, Mempraktikkan Pertolongan Pertama (P3K)",
        lingkupMateri: "Aktivitas Fisik Harian 60 Menit, Pola Makan Gizi Seimbang (Isi Piringku), Penanganan Cedera RICE",
        tpList: [
          {
            kodeTP: "TP.03",
            teksTP:
              "Berpartisipasi dalam aktivitas fisik teratur untuk mencegah perilaku sedenter, menganalisis pola makan gizi seimbang, serta mempraktikkan pertolongan pertama pada cedera (metode RICE).",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "Memahami pentingnya sarapan dan kebersihan diri",
            dimensiKarakterDinas: ["Kesehatan", "Kemandirian", "Penalaran Kritis"],
            dimensiKarakterKemenag: ["Cinta Kesehatan Tubuh", "PPRA: Keteladanan", "Cinta Kesucian"],
            konteksPembelajaran: {
              stimulus: "Kampanye WHO: Anak usia 5-17 tahun dianjurkan melakukan aktivitas fisik intensitas sedang hingga berat minimal 60 menit setiap hari untuk mencegah obesitas dan diabetes dini.",
              stimulusKemenag: "Menjaga kesehatan raga adalah amanah titipan Tuhan yang akan dimintai pertanggungjawaban.",
              masalahNyata: "Bagaimana cara melakukan pertolongan pertama saat teman mengalami cedera pergelangan kaki terkilir (sprain) saat bermain bola di lapangan sekolah?",
              kegiatanEksplorasi: [
                "Praktik penanganan cedera dengan metode RICE (Rest, Ice, Compression, Elevation) menggunakan perban elastis dan kantong es.",
                "Analisis label nilai gizi (nutrition facts) pada kemasan makanan ringan untuk menghitung kandungan gula dan garam.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Kesehatan",
                  teks: "Evaluasilah dampak jangka panjang dari kebiasaan gaya hidup sedenter (terlalu banyak duduk di depan gawai) terhadap postur tulang belakang dan kebugaran jantung-paru anak!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Penerapan pola hidup aktif, gizi seimbang, dan P3K cedera",
                  baru: "Mengompres bagian yang terkilir menggunakan air panas yang justru memperparah pembengkakan.",
                  layak: "Mampu menjelaskan arti singkatan RICE.",
                  cakap: "Mampu mempraktikkan 4 tahapan RICE dengan benar dan menyusun menu makanan gizi seimbang.",
                  mahir: "Mampu menjadi kader UKS cilik yang tanggap darurat dan mengedukasi teman sebaya tentang pencegahan cedera.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah tahapan yang BENAR dalam prinsip penanganan cedera terkilir metode R.I.C.E? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "R - Rest (Istirahatkan bagian tubuh yang mengalami cedera).", isCorrect: true },
                  { kode: "B", teks: "I - Ice (Kompres dingin dengan es yang dibungkus handuk selama 15-20 menit).", isCorrect: true },
                  { kode: "C", teks: "C - Compression (Balut tekan menggunakan perban elastis untuk mengurangi bengkak).", isCorrect: true },
                  { kode: "D", teks: "E - Elevation (Posisikan bagian cedera lebih tinggi dari letak jantung).", isCorrect: true },
                ],
                kunci: "A, B, C, dan D",
                pembahasan: "RICE adalah protokol standar pertolongan pertama pada cedera otot/sendi: Rest, Ice, Compression, Elevation.",
              },
              soalUraian: {
                level: "C4 (Pola Gizi Seimbang)",
                pertanyaan: "Jelaskan pembagian porsi makanan pokok, lauk-pauk, sayuran, dan buah-buahan dalam satu piring makan menurut panduan kesehatan 'Isi Piringku' dari Kementerian Kesehatan!",
                kunci: "Dalam panduan 'Isi Piringku': 1. 2/3 dari setengah piring berisi Makanan Pokok (sumber karbohidrat seperti nasi, jagung, kentang). 2. 1/3 dari setengah piring berisi Lauk-Pauk (sumber protein hewani/nabati seperti ikan, telur, tempe). 3. 2/3 dari setengah piring lainnya berisi Sayur-Mayur (sumber serat dan vitamin). 4. 1/3 dari setengah piring lainnya berisi Buah-Buahan (sumber vitamin dan mineral). Ditambah minum air putih 8 gelas sehari dan mencuci tangan dengan sabun.",
                pembahasan: "Menerapkan proporsi piring gizi seimbang untuk tumbuh kembang optimal anak.",
                rubrik: [
                  { kriteria: "Menjelaskan proporsi makanan pokok dan lauk-pauk secara tepat", skor: 10 },
                  { kriteria: "Menjelaskan proporsi sayuran dan buah-buahan secara tepat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },
];
