// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import { CPDataset } from "../curriculumDatabase";

export const FASE_B_SENI_MULOK_DATASETS: CPDataset[] = [
  // 1. Seni Rupa (Fase B - Kelas III & IV SD/MI)
  {
    fase: "Fase B",
    kelasDefault: "Kelas IV",
    mapel: "Seni Rupa",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Mengalami, Menciptakan, dan Merefleksikan",
        deskripsiCP:
          "Mengidentifikasi unsur rupa (garis, bidang, bentuk, ruang, warna, tekstur) dan prinsip desain (keseimbangan, proporsi, irama, kontras) dalam benda-benda sekitar atau karya seni rupa; menciptakan karya 2D/3D dari bahan alam/daur ulang; serta merefleksikan dan mengapresiasi karya seni buatan diri sendiri dan orang lain.",
        kompetensiKKO: "Mengidentifikasi Unsur Rupa, Menerapkan Prinsip Desain, Menciptakan Karya 2D/3D",
        lingkupMateri: "Unsur Rupa & Prinsip Desain, Gambar Perspektif Sederhana, Kriya Anyaman / Daur Ulang Plastik",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Mengidentifikasi unsur rupa dan prinsip desain (keseimbangan simetris/asimetris dan irama warna) untuk menciptakan karya gambar ilustrasi alam atau motif dekoratif nusantara yang bernilai estetis.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mengenal warna primer dan sekunder",
            dimensiKarakterDinas: ["Kreativitas", "Kemandirian", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Keindahan & Budaya", "PPRA: Dinamis & Inovatif"],
            konteksPembelajaran: {
              stimulus: "Ragam hias motif batik kawung dan megamendung nusantara menampilkan perpaduan garis lengkung dan keseimbangan simetris yang indah dan sarat filosofi kearifan lokal.",
              stimulusKemenag: "Seni rupa yang indah dan rapi mengekspresikan rasa syukur atas keindahan alam semesta ciptaan Sang Maha Indah.",
              masalahNyata: "Bagaimana cara menciptakan keseimbangan komposisi warna pada gambar pemandangan agar tidak terasa berat sebelah?",
              kegiatanEksplorasi: [
                "Eksplorasi menggambar motif ragam hias daerah dengan pola pengulangan irama garis.",
                "Membuat karya kriya 3 dimensi memanfaatkan kardus bekas atau bubur kertas.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis Desain", teks: "Analisislah perbedaan antara prinsip keseimbangan simetris (kiri-kanan sama persis) dengan keseimbangan asimetris dalam komposisi karya lukis!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menerapkan unsur rupa dan prinsip desain",
                  baru: "Komposisi gambar menumpuk di salah satu sudut kertas.",
                  layak: "Mampu menggambar motif dekoratif sederhana.",
                  cakap: "Mampu memadukan gradasi warna, tekstur, dan prinsip keseimbangan secara harmonis.",
                  mahir: "Mampu menciptakan karya seni rupa orisinal dengan detail tekstur yang memukau dan mampu mengapresiasi karya teman secara kritis.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah yang termasuk UNSUR-UNSUR RUPA DASAR dalam karya seni rupa? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Garis (lurus, lengkung, zigzag, spiral).", isCorrect: true },
                  { kode: "B", teks: "Bentuk dan Bidang (geometris dan organis).", isCorrect: true },
                  { kode: "C", teks: "Warna dan Tekstur (kasar, halus, semu).", isCorrect: true },
                  { kode: "D", teks: "Tempo nada dan ketukan birama musik.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Garis, bentuk, warna, dan tekstur adalah unsur rupa. Tempo nada adalah unsur musik.",
              },
              soalUraian: {
                level: "C4 (Prinsip Desain)",
                pertanyaan: "Jelaskan apa yang dimaksud dengan 'Tekstur Nyata' dan 'Tekstur Semu' dalam seni rupa beserta contohnya masing-masing!",
                kunci: "Tekstur Nyata adalah sifat permukaan benda yang jika dilihat dan diraba terasa sama sifat kasarnya atau halusnya (Contoh: Kulit kayu asli, amplas, atau tempelan cangkang telur pada kolase). Tekstur Semu adalah sifat permukaan yang jika dilihat tampak bertekstur kasar/berbatu tetapi jika diraba terasa rata dan halus karena hanya berupa efek gambar lukisan (Contoh: Lukisan dinding batu bata di atas kertas halus).",
                pembahasan: "Konsep dasar elemen tekstur rupa.",
                rubrik: [
                  { kriteria: "Menjelaskan tekstur nyata dan contohnya", skor: 10 },
                  { kriteria: "Menjelaskan tekstur semu dan contohnya", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 2. Seni Musik (Fase B - Kelas III & IV SD/MI)
  {
    fase: "Fase B",
    kelasDefault: "Kelas IV",
    mapel: "Seni Musik",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Mengalami, Menciptakan, dan Berpikir Artistik",
        deskripsiCP:
          "Mengenali nada dan pola irama menggunakan anggota tubuh maupun alat musik; menirukan pola irama dan melodi menggunakan alat musik ritmis atau melodis (pianika/rekorder/angklung); menyebutkan karakteristik ragam alat musik tradisional; membuat bunyi ritmis dari bahan sekitar; serta melakukan umpan balik apresiasi musik dengan istilah musik yang tepat.",
        kompetensiKKO: "Mengenali Nada, Memainkan Alat Melodis/Ritmis, Mengapresiasi Lagu",
        lingkupMateri: "Tangga Nada Diatonis, Notasi Angka, Permainan Alat Musik Pianika/Recorder, Lagu Daerah Nusantara",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Membaca notasi angka, mengenali tinggi-rendah nada (solmisasi), serta memainkan instrumen musik melodis sederhana (pianika/rekorder) dan ritmis pada lagu daerah nusantara secara harmonis dan kompak.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mengenal ketukan birama stabil",
            dimensiKarakterDinas: ["Kreativitas", "Kolaborasi", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Seni Budaya Nusantara", "PPRA: Dinamis"],
            konteksPembelajaran: {
              stimulus: "Ansambel musik kelas memainkan lagu daerah 'Bungong Jeumpa' dan 'Yamko Rambe Yamko' dengan perpaduan petikan gitar, tiupan pianika, dan ketukan marakas.",
              stimulusKemenag: "Harmoni nada musik melatih keteraturan, kepekaan rasa, dan kekompakan bekerja sama dalam keberagaman.",
              masalahNyata: "Bagaimana cara mengatur teknik pernapasan dan penjarian (fingering) pada pianika agar menghasilkan nada yang jernih dan tidak terputus-putus?",
              kegiatanEksplorasi: [
                "Latihan membaca partitur notasi angka lagu wajib 'Bagimu Negeri'.",
                "Praktik memainkan tangga nada C Mayor (Do-Re-Mi-Fa-Sol-La-Si-Do) pada tuts putih pianika.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis Musik", teks: "Bandingkan fungsi peran alat musik MELODIS (pembawa lagu) dengan alat musik RITMIS (pengatur tempo) dalam sebuah pertunjukan musik ansambel!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Membaca notasi dan memainkan alat musik melodis",
                  baru: "Salah menekan tuts nada dan meniup terlalu keras tanpa tempo.",
                  layak: "Mampu membaca not angka 1 sampai 7 secara urut.",
                  cakap: "Mampu memainkan 1 lagu daerah menggunakan pianika dengan tempo stabil dan penjarian benar.",
                  mahir: "Mampu memimpin ansambel mini kelas dan mengaransemen variasi ketukan perkusi secara kreatif.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah yang termasuk contoh ALAT MUSIK MELODIS (alat musik yang dapat menghasilkan susunan nada do-re-mi)? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Pianika (dimainkan dengan ditiup dan ditekan tutsnya).", isCorrect: true },
                  { kode: "B", teks: "Rekorder (alat musik tiup melodis).", isCorrect: true },
                  { kode: "C", teks: "Glockenspiel / Kolintang kayu bernada.", isCorrect: true },
                  { kode: "D", teks: "Rebana dan Tamborin tanpa dawai/tuts.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Pianika, rekorder, dan kolintang adalah alat musik melodis bernada. Rebana adalah alat ritmis.",
              },
              soalUraian: {
                level: "C4 (Teori Musik Dasar)",
                pertanyaan: "Tuliskan susunan tangga nada diatonis mayor dalam lambang 'Notasi Angka' dan sebutkan nama solmisasi bunyinya dari nada terendah hingga nada tertinggi!",
                kunci: "Susunan Notasi Angka: 1 - 2 - 3 - 4 - 5 - 6 - 7 - 1̇\nNama Solmisasi: Do - Re - Mi - Fa - Sol - La - Si - Do Tinggi.",
                pembahasan: "Tangga nada diatonis standar dan lambang notasi angka.",
                rubrik: [
                  { kriteria: "Menuliskan notasi angka 1 s.d 1̇ dengan titik di atas", skor: 10 },
                  { kriteria: "Menyebutkan nama solmisasi do hingga do tinggi secara urut", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 3. Seni Tari (Fase B - Kelas III & IV SD/MI)
  {
    fase: "Fase B",
    kelasDefault: "Kelas IV",
    mapel: "Seni Tari",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Mengalami, Menciptakan, dan Berpikir Artistik",
        deskripsiCP:
          "Mengamati bentuk penyajian tari berdasarkan latar belakang; mengeksplorasi unsur utama tari (ruang, waktu, tenaga) sesuai level gerak (tinggi, sedang, rendah) dan perubahan arah hadap (depan, belakang, samping, diagonal); meragakan hasil tari dengan bekerja secara kooperatif; serta mengembangkan gerak kreasi tari bertema flora/fauna atau kegiatan masyarakat.",
        kompetensiKKO: "Mengeksplorasi Unsur Tari, Memeragakan Level Gerak & Arah Hadap, Meragakan Tari Kooperatif",
        lingkupMateri: "Level Gerak (Tinggi, Sedang, Rendah), Pola Lantai & Arah Hadap, Tari Kreasi Daerah Bertema Alam",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Mengeksplorasi dan memperagakan kombinasi unsur utama tari (ruang, tenaga, waktu) berdasarkan level gerak (tinggi, sedang, rendah), variasi pola lantai, dan perubahan arah hadap dalam tari kreasi daerah secara kompak.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mampu bergerak selaras dengan iringan musik",
            dimensiKarakterDinas: ["Kreativitas", "Kolaborasi", "Kesehatan"],
            dimensiKarakterKemenag: ["Cinta Warisan Luhur Bangsa", "PPRA: Dinamis & Kompak"],
            konteksPembelajaran: {
              stimulus: "Tari Menanam Padi kreasi nusantara menampilkan gerakan level rendah (jongkok mencangkul), level sedang (membungkuk menanam bibit), dan level tinggi (berjinjit memetik bulir padi menguning) yang dibawakan secara berkelompok.",
              stimulusKemenag: "Gerak tari tradisi yang sopan dan anggun menyiratkan nilai gotong royong dan rasa syukur kepada Sang Pemberi Rezeki.",
              masalahNyata: "Bagaimana cara mengatur pola lantai tari (garis lurus, zigzag, lingkaran) agar seluruh penari terlihat jelas di atas panggung?",
              kegiatanEksplorasi: [
                "Praktik variasi gerak level rendah (duduk/jongkok) dan level tinggi (lompat/jinjit).",
                "Merancang pola lantai kelompok berbentuk diagonal dan lingkaran.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis Estetika Tari", teks: "Analisislah fungsi penggunaan level gerak dan pola lantai yang bervariasi dalam sebuah pertunjukan tari kelompok agar tidak terlihat monoton!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Memperagakan level gerak dan pola lantai tari",
                  baru: "Gerakan penari saling bertabrakan karena tidak paham arah hadap.",
                  layak: "Mampu menirukan 3 ragam gerak tari daerah.",
                  cakap: "Mampu menarikan tari kreasi dengan transisi level gerak (tinggi-sedang-rendah) dan pola lantai yang rapi.",
                  mahir: "Mampu menyelaraskan dinamika tenaga (halus-tegas), ekspresi wajah (wirasa), dan kekompakan wiraga-wirama secara sempurna.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah yang merupakan 3 UNSUR UTAMA DALAM SENI TARI yang saling melengkapi? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Wiraga: Keterampilan gerak tubuh, kelenturan, dan teknik posisi badan.", isCorrect: true },
                  { kode: "B", teks: "Wirama: Keselarasan gerak penari dengan irama ketukan dan tempo musik pengiring.", isCorrect: true },
                  { kode: "C", teks: "Wirasa: Penghayatan emosi, ekspresi penjiwaan mimik wajah, dan karakter tari.", isCorrect: true },
                  { kode: "D", teks: "Wiraboga: Menyiapkan hidangan makanan penonton.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Wiraga, Wirama, dan Wirasa adalah 3 unsur hakiki penilai estetika seni tari.",
              },
              soalUraian: {
                level: "C4 (Level Gerak Seni Tari)",
                pertanyaan: "Jelaskan apa yang dimaksud dengan Level Rendah, Level Sedang, dan Level Tinggi dalam seni tari beserta contoh gerakannya!",
                kunci: "1. Level Rendah: Gerakan tari yang dilakukan dengan menyentuh lantai, posisi duduk bersimpuh, bersila, atau merebah (Contoh: Gerak duduk pada Tari Saman).\n2. Level Sedang: Gerakan tari yang dilakukan dalam posisi berdiri wajar, setengah membungkuk, atau lutut sedikit ditekuk (mendak) (Contoh: Gerakan Tari Piring posisi berdiri).\n3. Level Tinggi: Gerakan tari yang dilakukan dengan posisi melayang di udara, melompat, atau berdiri berjinjit dengan kedua tangan diangkat tinggi ke atas (Contoh: Gerakan meloncat pada Tari Perang Papua).",
                pembahasan: "Klasifikasi level ruang vertikal gerak seni tari.",
                rubrik: [
                  { kriteria: "Menjelaskan level rendah dan level sedang dengan contoh", skor: 10 },
                  { kriteria: "Menjelaskan level tinggi dengan contoh", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 4. Seni Teater (Fase B - Kelas III & IV SD/MI)
  {
    fase: "Fase B",
    kelasDefault: "Kelas IV",
    mapel: "Seni Teater",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Mengalami, Bekerja Artistik, dan Menciptakan Lakon",
        deskripsiCP:
          "Mengenal teknik dasar akting (pemeranan) melalui proses meniru (mimesis), mengenal gerak tubuh dan olah vokal sesuai tokoh atau perilaku objek di sekitar; merefleksikan pengalaman bermain teater; menggunakan properti dan kostum sederhana yang sesuai dengan tokoh; serta mengamati dan memainkan lakon cerita dongeng/fabel bersama tim.",
        kompetensiKKO: "Meniru Karakter (Mimesis), Olah Vokal & Tubuh, Memainkan Lakon Cerita",
        lingkupMateri: "Olah Vokal (Artikulasi, Volume, Intonasi), Olah Tubuh & Mimik, Properti Karakter, Pementasan Drama Fabel Pendek",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Mempraktikkan teknik dasar olah tubuh, olah vokal (artikulasi dan proyeksi suara), serta memanfaatkan properti panggung sederhana untuk memainkan tokoh dalam sebuah lakon drama anak dengan penuh percaya diri.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mampu membaca naskah dialog dengan lancar",
            dimensiKarakterDinas: ["Kreativitas", "Kolaborasi", "Komunikasi"],
            dimensiKarakterKemenag: ["Cinta Kebersamaan", "PPRA: Dinamis & Terbuka"],
            konteksPembelajaran: {
              stimulus: "Pementasan drama pendek cerita rakyat 'Malin Kundang yang Durhaka' atau 'Kisah Semut dan Belalang' di panggung kelas dengan kostum dan properti buatan sendiri.",
              stimulusKemenag: "Seni peran teater mengasah empati untuk merasakan perjuangan orang lain dan menyampaikan pesan-pesan moral kebajikan.",
              masalahNyata: "Bagaimana cara memproyeksikan suara agar dialog yang kita ucapkan di panggung terdengar jelas sampai ke baris penonton paling belakang tanpa harus berteriak parau?",
              kegiatanEksplorasi: [
                "Latihan olah vokal huruf vokal A-I-U-E-O dengan membuka rahang dan pernapasan diafragma.",
                "Eksplorasi gerak pantomim menirukan pekerjaan petani, nelayan, atau dokter menggunakan properti imajiner.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis Seni Peran", teks: "Analisislah pentingnya konsistensi karakter (gerak tubuh, cara berjalan, dan intonasi suara) yang dibawakan aktor dari awal babak hingga akhir pementasan lakon!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Teknik pemeranan, olah vokal, dan properti",
                  baru: "Membelakangi penonton (blocking salah) dan suara tidak terdengar.",
                  layak: "Mampu menghafal dialog teks naskah drama.",
                  cakap: "Mampu melafalkan dialog dengan artikulasi jelas, ekspresi mimik tepat, dan memanfaatkan properti secara wajar.",
                  mahir: "Mampu menjiwai karakter tokoh secara mendalam, merespons improvisasi rekan panggung secara cair, dan memukau penonton.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah yang merupakan TIGA DASAR LATIHAN UTAMA dalam seni peran (keaktoran) teater? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Olah Tubuh: Melatih kelenturan, gestur, cara berjalan, dan stamina fisik di panggung.", isCorrect: true },
                  { kode: "B", teks: "Olah Vokal: Melatih artikulasi ucapan, kejelasan kata, proyeksi suara, dan intonasi emosi.", isCorrect: true },
                  { kode: "C", teks: "Olah Rasa / Pikiran: Melatih konsentrasi, imajinasi, kepekaan emosi, dan penghayatan karakter tokoh.", isCorrect: true },
                  { kode: "D", teks: "Olah Boga: Memasak untuk konsumsi penonton sebelum pentas.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Olah Tubuh, Olah Vokal, dan Olah Rasa adalah 3 pilar dasar latihan keaktoran teater.",
              },
              soalUraian: {
                level: "C4 (Teknik Pemeranan Teater)",
                pertanyaan: "Jelaskan apa yang dimaksud dengan istilah 'Blocking' (tata panggung) dan 'Artikulasi' dalam seni pementasan drama teater!",
                kunci: "1. Blocking: Pengaturan tata letak, posisi berdiri, dan perpindahan gerak aktor di atas panggung agar komposisi visual seimbang, tidak menutupi aktor lain, dan tidak membelakangi penonton.\n2. Artikulasi: Kejelasan pengucapan kata-kata, lafal bunyi huruf vokal dan konsonan yang diucapkan aktor agar dialog terdengar jelas dan dapat dipahami oleh seluruh penonton.",
                pembahasan: "Istilah teknis dasar panggung teater.",
                rubrik: [
                  { kriteria: "Menjelaskan pengertian Blocking panggung", skor: 10 },
                  { kriteria: "Menjelaskan pengertian Artikulasi vokal", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 5. Muatan Lokal (Bahasa Daerah) (Fase B - Kelas III & IV SD/MI)
  {
    fase: "Fase B",
    kelasDefault: "Kelas IV",
    mapel: "Muatan Lokal (Bahasa Daerah)",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Menyimak, Membaca, dan Berbicara Unggah-Ungguh Bahasa Daerah",
        deskripsiCP:
          "Menyimak dan menceritakan kembali cerita rakyat/dongeng fabel daerah; membaca dan memahami teks deskripsi/narasi berbahasa daerah; menerapkan tingkatan tutur bahasa santun (unggah-ungguh basa / undha-usuk basa: ngoko & krama / loma & lemes); serta melantunkan tembang macapat/pupuh daerah dengan titi laras yang tepat.",
        kompetensiKKO: "Menganalisis Cerita Daerah, Menerapkan Unggah-Ungguh, Melantunkan Tembang Daerah",
        lingkupMateri: "Cerita Rakyat Daerah (Legenda Asal-Usul), Tingkat Tutur Santun (Krama/Lemes), Tembang Tradisional Daerah",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menganalisis unsur intrinsik cerita legenda daerah, menerapkan tingkatan bahasa santun (krama/lemes) saat berbicara dengan guru dan orang tua, serta melantunkan tembang dolanan/tradisional daerah dengan penghayatan.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mengenal kosa kata bahasa daerah sehari-hari",
            dimensiKarakterDinas: ["Kewargaan", "Komunikasi", "Penalaran Kritis"],
            dimensiKarakterKemenag: ["Cinta Budaya Luhur", "PPRA: Berkeadaban (Ta'addub)"],
            konteksPembelajaran: {
              stimulus: "Dongeng legenda 'Asal-Usul Rawa Pening' atau 'Sangkuriang' dibacakan dalam bahasa daerah yang santun diiringi alunan alat musik tradisional.",
              stimulusKemenag: "Bahasa daerah sarat dengan nilai adab, budi pekerti luhur, dan rasa hormat yang mendalam kepada orang yang lebih tua.",
              masalahNyata: "Mengapa saat berbicara kepada kakek, nenek, atau guru kita harus menggunakan ragam krama/bahasa halus dan bukan ragam ngoko/loma?",
              kegiatanEksplorasi: [
                "Mengubah kalimat percakapan bahasa ngoko sehari-hari menjadi kalimat krama alus yang santun.",
                "Menyanyikan tembang macapat Pocung/Maskumambang atau pupuh Asmarandana bersama.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis Kebahasaan Daerah", teks: "Analisislah bagaimana penggunaan unggah-ungguh (tingkat tutur) bahasa daerah melatih generasi muda memiliki rasa rendah hati dan tata krama dalam pergaulan!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menerapkan unggah-ungguh bahasa daerah",
                  baru: "Menggunakan kata-kata kasar atau ngoko kepada guru.",
                  layak: "Mampu mengartikan 5 kosa kata krama/halus.",
                  cakap: "Mampu berdialog menggunakan bahasa krama/halus santun dan menceritakan pesan moral legenda daerah.",
                  mahir: "Mampu mendongeng dalam bahasa daerah dengan fasih, artikulatif, dan melantunkan tembang daerah secara merdu.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah kalimat percakapan bahasa daerah (ragam krama/halus) yang TEPAT diucapkan seorang murid kepada bapak/ibu guru? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "'Nuwun sewu Bapak/Ibu Guru, kula badhe nyuwun pirsa babagan tugas punika.' (Jawa)", isCorrect: true },
                  { kode: "B", teks: "'Wilujeng enjing Ibu Guru, hapunten abdi bade naroskeun perkawis PR.' (Sunda)", isCorrect: true },
                  { kode: "C", teks: "'Kula sampun nedha kalawau enjang.' (Jawa Krama)", isCorrect: true },
                  { kode: "D", teks: "'He guru, kowe mangan opo saiki?' (Ngoko Kasar)", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, dan C adalah ragam bahasa krama/lemes yang sopan santun kepada guru. D kasar.",
              },
              soalUraian: {
                level: "C4 (Unggah-Ungguh Bahasa Daerah)",
                pertanyaan: "Ubahlah kalimat bahasa ngoko berikut menjadi kalimat ragam Krama Alus yang santun:\n1. 'Bapak mangan sega goreng ing warung.'\n2. 'Ibu lunga menyang pasar numpak becak.'",
                kunci: "1. Krama Alus: 'Bapak dhahar sekul goreng wonten ing warung.'\n2. Krama Alus: 'Ibu tindak dhateng peken nitih becak.'",
                pembahasan: "Penerapan undha-usuk / unggah-ungguh basa ragam krama inggil.",
                rubrik: [
                  { kriteria: "Mengubah kalimat 1 (dhahar, sekul, wonten) dengan tepat", skor: 10 },
                  { kriteria: "Mengubah kalimat 2 (tindak, dhateng peken, nitih) dengan tepat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },
];
