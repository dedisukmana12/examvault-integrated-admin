// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import { CPDataset } from "../curriculumDatabase";

export const FASE_C_AGAMA_DATASETS: CPDataset[] = [
  // 1. Pendidikan Agama Islam dan Budi Pekerti (Fase C - SD/MI)
  {
    fase: "Fase C",
    kelasDefault: "Kelas V",
    mapel: "Pendidikan Agama Islam dan Budi Pekerti",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Al-Qur'an dan Hadis",
        deskripsiCP:
          "Peserta didik mampu membaca, menghafal, menulis, dan memahami pesan pokok surat-surat pendek dan ayat Al-Qur'an tentang keragaman dengan baik dan benar, serta hadis tentang keragaman dan tolong-menolong.",
        kompetensiKKO: "Membaca Tartil, Menghafal Fasih, Menulis Kaidah Khat, Memahami Pesan Keragaman",
        lingkupMateri: "QS. Al-Hujurat: 13 (Keragaman Manusia), QS. Al-Ma'un (Kepedulian Sosial), Hadis Tolong-Menolong",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Membaca dengan tartil, menghafal, menulis, dan menganalisis pesan pokok QS. Al-Hujurat: 13 tentang keragaman dan QS. Al-Ma'un tentang kepedulian terhadap anak yatim dan kaum dhuafa.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Mengenal hukum tajwid dasar nun mati/tanwin",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kewargaan", "Kolaborasi"],
            dimensiKarakterKemenag: ["Cinta Allah & Rasul-Nya", "Cinta Sesama", "PPRA: Toleransi (Tasamuh)"],
            konteksPembelajaran: {
              stimulus: "QS. Al-Hujurat: 13 menegaskan bahwa manusia diciptakan bersuku-suku dan berbangsa-bangsa agar saling mengenal (lita'arafu), dan yang paling mulia adalah yang paling bertakwa.",
              stimulusKemenag: "Mencintai keragaman ciptaan Allah adalah wujud syukur atas luasnya rahmat Ilahi yang meliputi seluruh alam.",
              masalahNyata: "Bagaimana cara menerapkan pesan QS. Al-Ma'un agar kita tidak termasuk golongan orang yang mendustakan agama?",
              kegiatanEksplorasi: [
                "Praktik membaca QS. Al-Hujurat: 13 dengan hukum tajwid mad thabi'i, ghunnah, dan ikhfa.",
                "Menyelenggarakan bakti sosial santunan anak yatim dan dhuafa di lingkungan sekitar sekolah.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi",
                  teks: "Evaluasilah kriteria orang yang 'mendustakan agama' menurut QS. Al-Ma'un dan kaitkan dengan perilaku sosial kita sehari-hari!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Membaca tartil dan memahami pesan QS. Al-Hujurat: 13",
                  baru: "Membaca terbata-bata tanpa kaidah tajwid yang benar.",
                  layak: "Mampu membaca dan menghafal QS. Al-Hujurat: 13 secara lancar.",
                  cakap: "Mampu menjelaskan makna kosa kata dan pesan pokok tentang persaudaraan universal.",
                  mahir: "Mampu menjadi pelopor aksi sosial peduli yatim dan dhuafa berlandaskan nilai QS. Al-Ma'un.",
                },
              ],
              soalPGK: {
                pertanyaan: "Berdasarkan QS. Al-Ma'un ayat 1-7, manakah perbuatan yang termasuk ciri orang yang mendustakan agama? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Menghardik anak yatim.", isCorrect: true },
                  { kode: "B", teks: "Tidak menganjurkan memberi makan orang miskin.", isCorrect: true },
                  { kode: "C", teks: "Lalai dalam salatnya dan berbuat riya (pamer).", isCorrect: true },
                  { kode: "D", teks: "Menolak memberikan bantuan barang yang berguna.", isCorrect: true },
                ],
                kunci: "A, B, C, dan D",
                pembahasan: "Semua pilihan (A, B, C, D) adalah sifat-sifat pendusta agama yang disebutkan secara eksplisit dalam QS. Al-Ma'un ayat 1-7.",
              },
              soalUraian: {
                level: "C4 (Pesan Pokok QS. Al-Hujurat: 13)",
                pertanyaan: "Jelaskan mengapa Allah SWT menciptakan manusia berbeda suku, bangsa, dan warna kulit berdasarkan QS. Al-Hujurat: 13, dan apa tolak ukur kemuliaan manusia di sisi Allah!",
                kunci: "Allah menciptakan manusia beraneka ragam suku dan bangsa tujuannya adalah agar saling mengenal (lita'arafu), saling memahami, dan saling bekerja sama dalam kebaikan. Tolak ukur kemuliaan seorang hamba di sisi Allah bukanlah harta, keturunan, rupa fisik, atau pangkatnya, melainkan tingkat ketakwaannya (inna akramakum 'indallahi atqakum).",
                pembahasan: "Menanamkan nilai kesetaraan kemanusiaan dan takwa sebagai inti ajaran Islam.",
                rubrik: [
                  { kriteria: "Menjelaskan tujuan penciptaan manusia untuk saling mengenal (*lita'arafu*)", skor: 10 },
                  { kriteria: "Menyebutkan takwa sebagai ukuran kemuliaan sejati di sisi Allah", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Akidah",
        deskripsiCP:
          "Peserta didik mampu memahami asmaulhusna (al-Qawiyy, al-Qayyum, al-Muhyi, al-Mumit, al-Ba'its); memahami keniscayaan hari kiamat, qada dan qadar; serta menerapkannya dalam kehidupan sehari-hari.",
        kompetensiKKO: "Memahami Asmaulhusna, Meyakini Hari Akhir & Takdir, Menunjukkan Sikap Tawakal",
        lingkupMateri: "Asmaulhusna (Al-Qawiyy, Al-Qayyum, Al-Muhyi, Al-Mumit, Al-Ba'its), Iman kepada Hari Akhir, Iman kepada Qada & Qadar",
        tpList: [
          {
            kodeTP: "TP.02",
            teksTP:
              "Meneladani asmaulhusna (Al-Qawiyy, Al-Qayyum, Al-Muhyi, Al-Mumit, Al-Ba'its), meyakini peristiwa hari akhir serta qada dan qadar dengan menunjukkan sikap ikhtiar, doa, tawakal, dan optimisme.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Memahami rukun iman 1 sampai 4",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kemandirian", "Penalaran Kritis"],
            dimensiKarakterKemenag: ["Cinta Allah & Rasul-Nya", "Cinta Keteguhan Hati", "PPRA: Tawakal"],
            konteksPembelajaran: {
              stimulus: "Merenungi kekuasaan Allah yang menghidupkan bumi yang gersang (Al-Muhyi) dan kepastian terjadinya hari pembalasan amal manusia di akhirat kelak.",
              stimulusKemenag: "Keimanan kepada hari akhir melahirkan rasa tanggung jawab moral tertinggi bahwa setiap lintasan niat dan perbuatan pasti diperhitungkan.",
              masalahNyata: "Bagaimana cara kita menyikapi kegagalan dalam perlombaan dengan memadukan konsep ikhtiar maksimal dan tawakal atas takdir Allah?",
              kegiatanEksplorasi: [
                "Kajian tematik Asmaulhusna dan pembuatan kaligrafi Asmaulhusna Al-Qayyum.",
                "Studi kasus menghubungkan ikhtiar belajar, doa orang tua, dan sikap menerima ketetapan takdir (Qada dan Qadar).",
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Teologis",
                  teks: "Evaluasilah mengapa orang yang beriman kepada Qada dan Qadar tidak akan mudah berputus asa saat gagal dan tidak akan sombong saat meraih kesuksesan besar!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Meneladani Asmaulhusna dan keimanan pada Hari Akhir",
                  baru: "Menghafal nama Asmaulhusna tanpa memahami artinya.",
                  layak: "Mampu menjelaskan arti Al-Qawiyy, Al-Qayyum, Al-Muhyi, Al-Mumit, Al-Ba'its.",
                  cakap: "Mampu mengaitkan peristiwa hari akhir dengan kesadaran beramal saleh di dunia.",
                  mahir: "Mampu menunjukkan sikap tawakal matang dan optimisme tinggi dalam menghadapi berbagai ujian hidup.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah pasangan nama Asmaulhusna dan artinya yang TEPAT? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Al-Qawiyy artinya Allah Maha Kuat.", isCorrect: true },
                  { kode: "B", teks: "Al-Qayyum artinya Allah Maha Mandiri / Berdiri Sendiri.", isCorrect: true },
                  { kode: "C", teks: "Al-Muhyi artinya Allah Maha Menghidupkan.", isCorrect: true },
                  { kode: "D", teks: "Al-Ba'its artinya Allah Maha Membangkitkan setelah kematian.", isCorrect: true },
                ],
                kunci: "A, B, C, dan D",
                pembahasan: "Semua pasangan nama dan arti Asmaulhusna pada pilihan A, B, C, D adalah tepat.",
              },
              soalUraian: {
                level: "C4 (Konsep Ikhtiar dan Tawakal)",
                pertanyaan: "Jelaskan hubungan yang harmonis antara Ikhtiar, Doa, dan Tawakal dalam ajaran Islam ketika seseorang menghadapi ujian sekolah!",
                kunci: "1. Ikhtiar: Berusaha belajar sungguh-sungguh dan memahami materi dengan giat. 2. Doa: Memohon kelancaran, kemudahan, dan keberkahan kepada Allah SWT dengan rendah hati. 3. Tawakal: Menyerahkan hasil akhir sepenuhnya kepada kehendak dan ketetapan terbaik dari Allah dengan hati yang lapang dan ridha.",
                pembahasan: "Tiga serangkai sikap hidup muslim dalam mencapai cita-cita hidup.",
                rubrik: [
                  { kriteria: "Menjelaskan porsi ikhtiar dan doa secara seimbang", skor: 10 },
                  { kriteria: "Menjelaskan konsep tawakal menyerahkan hasil kepada Allah", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Akhlak",
        deskripsiCP:
          "Peserta didik mampu memahami akhlak mulia kepada diri sendiri, sesama manusia, dan alam lingkungan; serta menjauhi akhlak tercela (seperti dusta, boros, pamer, dan kikir).",
        kompetensiKKO: "Menerapkan Akhlak Mulia, Menghindari Akhlak Tercela, Merawat Kelestarian Alam",
        lingkupMateri: "Adab Berteman & Berbicara Santun, Sikap Peduli Lingkungan (Eco-Jihad), Menghindari Sikap Tabdzir (Boros) & Riya",
        tpList: [
          {
            kodeTP: "TP.03",
            teksTP:
              "Membiasakan akhlak terpuji (berkata santun, amanah, peduli lingkungan hidup) serta menghindari akhlak tercela (tabdzir/boros, kikir, riya, dan menggunjing/ghibah).",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "Memahami adab makan, minum, dan berbicara",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kemandirian", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Sesama", "Cinta Lingkungan", "PPRA: Keteladanan (Qudwah)"],
            konteksPembelajaran: {
              stimulus: "Kampanye gerakan hemat air wudhu dan larangan membuang sisa makanan (mubazir) di kantin sekolah.",
              stimulusKemenag: "Sesungguhnya pemboros-pemboros itu adalah saudara-saudara setan (QS. Al-Isra: 27). Merawat bumi adalah wujud cinta kepada Sang Maha Pencipta.",
              masalahNyata: "Bagaimana cara menegur teman yang gemar membicarakan aib orang lain (ghibah) secara bijak tanpa menyinggung perasaannya?",
              kegiatanEksplorasi: [
                "Proyek 'Wudhu Hemat Air' dengan mengukur volume air wudhu cukup 1 gayung/keran kecil.",
                "Simulasi bermain peran menolak ajakan bergunjing di media sosial.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Perilaku",
                  teks: "Evaluasilah bagaimana bahaya sifat pamer (riya) dan berlebih-lebihan (tabdzir) di media sosial dapat merusak ketulusan hati dan memicu kesenjangan sosial!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Penerapan akhlak terpuji dan pencegahan akhlak tercela",
                  baru: "Mengetahui larangan boros namun sering menyisakan makanan di piring.",
                  layak: "Mampu membedakan perbuatan terpuji dan tercela.",
                  cakap: "Mampu membiasakan hidup hemat dan bertutur kata santun secara konsisten.",
                  mahir: "Mampu menjadi pelopor duta lingkungan hidup Islami dan teladan anti-perundungan di sekolah.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah tindakan yang mencerminkan AKHLAK TERPUJI dalam menjaga kelestarian alam lingkungan? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Menghemat penggunaan air saat berwudhu dan mencuci tangan.", isCorrect: true },
                  { kode: "B", teks: "Menanam dan merawat pohon di halaman rumah atau sekolah.", isCorrect: true },
                  { kode: "C", teks: "Memilah sampah organik dan anorganik pada tempatnya.", isCorrect: true },
                  { kode: "D", teks: "Membuang sampah plastik ke aliran sungai yang mengalir.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah implementasi akhlak merawat alam ciptaan Allah. D adalah perbuatan merusak lingkungan.",
              },
              soalUraian: {
                level: "C4 (Bahaya Tabdzir dan Israf)",
                pertanyaan: "Jelaskan perbedaan antara sifat *Tabdzir* (boros/sia-sia) dan *Israf* (berlebih-lebihan), serta berikan masing-masing 1 contoh nyatanya!",
                kunci: "1. Tabdzir: Mengeluarkan harta/sumber daya untuk hal-hal yang tidak ada manfaatnya atau dilarang agama (Contoh: Membeli kembang api atau membuang makanan utuh ke tempat sampah). 2. Israf: Menggunakan sesuatu secara berlebihan melampaui batas kewajaran meskipun asalnya halal (Contoh: Mengambil makanan terlalu banyak di pesta hingga tidak sanggup menghabiskannya).",
                pembahasan: "Memahami konsep hidup bersahaja dan proporsional dalam etika konsumsi Islam.",
                rubrik: [
                  { kriteria: "Menjelaskan pengertian dan contoh Tabdzir secara tepat", skor: 10 },
                  { kriteria: "Menjelaskan pengertian dan contoh Israf secara tepat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Fikih",
        deskripsiCP:
          "Peserta didik mampu memahami zakat, infak, sedekah, dan hadiah; memahami ketentuan haji dan umrah; serta mempraktikkan puasa sunah.",
        kompetensiKKO: "Memahami Zakat, Infak, Sedekah & Hadiah, Memahami Manasik Haji & Umrah, Mempraktikkan Puasa Sunah",
        lingkupMateri: "Fikih Zakat Fitrah & Zakat Mal, Infak vs Sedekah, Rukun Haji & Umrah, Puasa Sunah (Senin-Kamis, Arafah)",
        tpList: [
          {
            kodeTP: "TP.04",
            teksTP:
              "Menganalisis ketentuan zakat fitrah, zakat mal, infak, sedekah, dan hadiah, serta memahami rukun manasik haji dan keutamaan puasa sunah.",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "Memahami rukun Islam dan ketentuan puasa Ramadan",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kewargaan", "Kolaborasi"],
            dimensiKarakterKemenag: ["Cinta Keadilan Sosial", "PPRA: Kesetaraan", "Cinta Baitullah"],
            konteksPembelajaran: {
              stimulus: "Pengumpulan dan pembagian zakat fitrah beras 2,5 kg / 3,5 liter menjelang Hari Raya Idul Fitri kepada 8 asnaf (golongan penerima zakat).",
              stimulusKemenag: "Zakat membersihkan jiwa muzakki dan menumbuhkan rasa persaudaraan serta mengentaskan kemiskinan umat.",
              masalahNyata: "Apa perbedaan mendasar antara Zakat (wajib), Infak (sukarela berbentuk harta), Sedekah (segala kebaikan termasuk senyuman), dan Hadiah?",
              kegiatanEksplorasi: [
                "Simulasi penghitungan zakat fitrah satu keluarga dan penimbangan beras zakat.",
                "Praktik manasik haji mini di halaman sekolah (Ihram, Tawaf mengelilingi miniatur Ka'bah, Sa'i, Wukuf).",
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Sosio-Ekonomi",
                  teks: "Evaluasilah peran strategis pengelolaan zakat mal produktif (pemberian modal usaha) dalam memberdayakan mustahik agar mandiri secara ekonomi!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Pemahaman Fikih Zakat, Sedekah, dan Haji",
                  baru: "Menyamakan zakat fitrah dengan sedekah biasa.",
                  layak: "Mampu menyebutkan 8 golongan penerima zakat (asnaf).",
                  cakap: "Mampu membedakan zakat, infak, sedekah, dan hadiah serta menghitung takaran zakat fitrah.",
                  mahir: "Mampu mempraktikkan rukun manasik haji secara tertib dan menjelaskan filosofi spiritual tawaf.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah golongan yang BERHAK menerima zakat (8 Asnaf) menurut QS. At-Taubah ayat 60? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Fakir dan Miskin.", isCorrect: true },
                  { kode: "B", teks: "Amil (pengelola zakat) dan Mualaf (orang yang baru masuk Islam).", isCorrect: true },
                  { kode: "C", teks: "Gharimin (orang yang terlilit utang demi kebaikan) dan Ibnu Sabil (musafir).", isCorrect: true },
                  { kode: "D", teks: "Orang kaya yang serakah dan kikir.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "8 Asnaf: Fakir, Miskin, Amil, Mualaf, Riqab, Gharimin, Fisabilillah, Ibnu Sabil. Orang kaya bukan penerima zakat.",
              },
              soalUraian: {
                level: "C4 (Perbedaan Infak dan Sedekah)",
                pertanyaan: "Jelaskan perbedaan antara Zakat, Infak, dan Sedekah dari segi hukum dan bentuk objek yang diberikan!",
                kunci: "1. Zakat: Hukumnya Fardhu 'Ain (wajib), dengan kadar, nisab, haul, dan waktu tertentu berupa harta/makanan pokok untuk 8 asnaf. 2. Infak: Hukumnya sunah/sukarela, dikeluarkan kapan saja tanpa batas minimal, objeknya khusus berupa materi/harta benda. 3. Sedekah: Hukumnya sunah/sukarela, cakupannya lebih luas dari infak karena mencakup materi maupun non-materi (seperti senyuman, menyingkirkan duri di jalan, atau mengajarkan ilmu).",
                pembahasan: "Membedakan spektrum ibadah sosial maliyah dalam fikih Islam.",
                rubrik: [
                  { kriteria: "Menjelaskan konsep Zakat wajib dengan takaran pasti", skor: 10 },
                  { kriteria: "Menjelaskan perbedaan cakupan objek Infak (harta) dan Sedekah (harta & perbuatan baik)", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Sejarah Peradaban Islam",
        deskripsiCP:
          "Peserta didik mampu memahami kisah perjuangan Khulafaur Rasyidin dalam menyebarkan ajaran Islam; meneladani kepemimpinan Abu Bakar as-Siddiq, Umar bin Khattab, Usman bin Affan, dan Ali bin Abi Thalib.",
        kompetensiKKO: "Menganalisis Perjuangan Khulafaur Rasyidin, Meneladani Karakter Kepemimpinan Sahabat",
        lingkupMateri: "Karakteristik Kepemimpinan 4 Khulafaur Rasyidin, Prestasi Kodifikasi Al-Qur'an & Kesejahteraan Rakyat",
        tpList: [
          {
            kodeTP: "TP.05",
            teksTP:
              "Menganalisis kisah perjuangan dan meneladani nilai kepemimpinan Khulafaur Rasyidin (Abu Bakar, Umar, Usman, Ali) dalam kehidupan bermasyarakat dan berbangsa.",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "Memahami peristiwa hijrah Nabi Muhammad SAW ke Madinah",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kewargaan", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Sahabat Nabi", "Cinta Keadilan Sosial", "PPRA: Keteladanan (Qudwah)"],
            konteksPembelajaran: {
              stimulus: "Ketegasan Khalifah Umar bin Khattab yang berkeliling di malam hari membawa gandum untuk rakyatnya yang kelaparan, dan kedermawanan Khalifah Usman bin Affan membeli sumur Raumah untuk diwakafkan kepada masyarakat.",
              stimulusKemenag: "Kepemimpinan dalam Islam adalah amanah pengabdian untuk melayani rakyat (sayyidul qaumi khadimuhum), bukan mencari kekuasaan pribadi.",
              masalahNyata: "Bagaimana cara meneladani kejujuran Abu Bakar As-Siddiq dan kecerdasan keadilan Ali bin Abi Thalib dalam memimpin organisasi kelas?",
              kegiatanEksplorasi: [
                "Membuat peta konsep prestasi emas masing-masing dari 4 Khulafaur Rasyidin.",
                "Menulis esai reflektif bertema 'Menjadi Pemimpin yang Dicintai Rakyat: Belajar dari Sahabat Umar bin Khattab'.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Kepemimpinan",
                  teks: "Evaluasilah keputusan berani Khalifah Abu Bakar As-Siddiq dalam memerangi kaum murtad dan pembangkang zakat demi menjaga keutuhan akidah dan stabilitas negara!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Meneladani kepemimpinan Khulafaur Rasyidin",
                  baru: "Hanya menghafal urutan nama 4 khalifah.",
                  layak: "Mampu menceritakan salah satu sifat utama dari masing-masing khalifah.",
                  cakap: "Mampu menganalisis prestasi pemerintahan Khulafaur Rasyidin dan relevansinya di era modern.",
                  mahir: "Mampu mengaplikasikan nilai integritas, anti-korupsi, dan kerendahan hati kepemimpinan sahabat dalam kehidupan nyata.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah prestasi kepemimpinan yang berhasil dicapai pada masa KHALIFAH USMAN BIN AFFAN? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Membukukan dan menyeragamkan mushaf Al-Qur'an (Mushaf Usmani).", isCorrect: true },
                  { kode: "B", teks: "Memperluas Masjid Nabawi di Madinah dan Masjidil Haram di Makkah.", isCorrect: true },
                  { kode: "C", teks: "Membentuk armada angkatan laut Islam yang tangguh.", isCorrect: true },
                  { kode: "D", teks: "Mendirikan lembaga perbankan konvensional berbunga tinggi.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Prestasi Khalifah Usman bin Affan: Kodifikasi Mushaf Usmani, renovasi/perluasan Masjid Suci, dan pembentukan armada laut pertama Islam.",
              },
              soalUraian: {
                level: "C4 (Keteladanan Sahabat)",
                pertanyaan: "Jelaskan gelar yang disandang oleh Khalifah Abu Bakar (*As-Siddiq*) dan Khalifah Umar bin Khattab (*Al-Faruq*), serta apa alasan pemberian gelar tersebut!",
                kunci: "1. Abu Bakar bergelar *As-Siddiq* (Yang Membenarkan): Karena beliau selalu membenarkan dan mempercayai perkataan Nabi Muhammad SAW tanpa keraguan, khususnya saat peristiwa Isra Mi'raj. 2. Umar bin Khattab bergelar *Al-Faruq* (Pembeda/Pemisah): Karena beliau memiliki ketegasan luar biasa yang mampu memisahkan dan membedakan secara tegas antara perkara yang hak (benar) dan yang batil (salah).",
                pembahasan: "Meneladani integritas akidah dan ketegasan moral sahabat Nabi.",
                rubrik: [
                  { kriteria: "Menjelaskan makna dan latar belakang gelar As-Siddiq", skor: 10 },
                  { kriteria: "Menjelaskan makna dan latar belakang gelar Al-Faruq", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 2. Al-Qur'an Hadis (MI Fase C - Kemenag KBC)
  {
    fase: "Fase C",
    kelasDefault: "Kelas V",
    mapel: "Al-Qur'an Hadis",
    jalurApplicable: ["Kemenag"],
    elemenList: [
      {
        namaElemen: "Ilmu Tajwid & Tahsin",
        deskripsiCP:
          "Peserta didik mampu menerapkan hukum bacaan mim sukun (ikhfa syafawi, idgham mimi, izhar syafawi), hukum bacaan lam jalalah, dan hukum bacaan ra (tafkhim dan tarqiq) dalam membaca Al-Qur'an secara tartil.",
        kompetensiKKO: "Menerapkan Hukum Mim Sukun, Melafalkan Lam Jalalah & Ra Tafkhim/Tarqiq, Membaca Tartil",
        lingkupMateri: "Hukum Mim Sukun (3 Macam), Lam Jalalah Tafkhim/Tarqiq, Hukum Ra Tafkhim & Tarqiq",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menerapkan hukum bacaan mim sukun (ikhfa syafawi, idgham mimi, izhar syafawi) serta hukum lam jalalah dan hukum ra tafkhim/tarqiq dalam membaca ayat-ayat Al-Qur'an secara fasih dan tartil.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Memahami hukum nun mati dan tanwin",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Al-Qur'an", "Cinta Keindahan Tilawah", "PPRA: Berkeadaban (Ta'addub)"],
            konteksPembelajaran: {
              stimulus: "Lantunan tilawah ayat suci Al-Qur'an yang melafalkan lafaz jalalah 'Allahu' dengan tebal (tafkhim) saat didahului harakat fathah/dhammah.",
              stimulusKemenag: "Membaca Al-Qur'an dengan kaidah tajwid yang tertib adalah adab mahabbah (cinta) kepada kalam Ilahi.",
              masalahNyata: "Bagaimana cara membedakan pengucapan huruf ra yang harus dibaca tebal (tafkhim) dengan yang harus dibaca tipis (tarqiq)?",
              kegiatanEksplorasi: [
                "Tadarus kelompok mengidentifikasi hukum mim sukun pada juz 30.",
                "Praktik pelafalan suara ra tarqiq (berharakat kasrah) dan ra tafkhim (berharakat fathah/dhammah).",
              ],
              pertanyaanHOTS: [
                {
                  level: "C4 - Analisis Tajwid",
                  teks: "Analisislah hukum bacaan huruf ra pada kata 'فِرْعَوْنَ' (Fir'aun) dan jelaskan mengapa dibaca tarqiq (tipis) meskipun huruf ra-nya berharakat sukun!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Penerapan hukum mim sukun dan ra tafkhim/tarqiq",
                  baru: "Membaca semua huruf ra dengan tebal tanpa membedakan harakat.",
                  layak: "Mampu menyebutkan 3 hukum mim sukun.",
                  cakap: "Mampu mempraktikkan hukum mim sukun dan lam jalalah dengan benar.",
                  mahir: "Mampu mendeteksi dan mengoreksi kesalahan hukum tajwid ra tafkhim/tarqiq dalam satu surat utuh.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah contoh hukum bacaan IKFA SYAFAWI (mim sukun bertemu huruf ba)? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "تَرْمِيهِمْ بِحِجَارَةٍ (Tarmiihim bihijaarah)", isCorrect: true },
                  { kode: "B", teks: "فَاحْكُمْ بَيْنَهُمْ (Fahkum bainahum)", isCorrect: true },
                  { kode: "C", teks: "لَهُمْ مَغْفِرَةٌ (Lahum maghfirah)", isCorrect: false },
                  { kode: "D", teks: "أَلَمْ تَرَ (Alam tara)", isCorrect: false },
                ],
                kunci: "A dan B",
                pembahasan: "A dan B adalah Ikhfa Syafawi (mim sukun bertemu ba). C adalah Idgham Mimi (mim bertemu mim), D adalah Izhar Syafawi (mim bertemu ta).",
              },
              soalUraian: {
                level: "C4 (Hukum Ra Tafkhim vs Tarqiq)",
                pertanyaan: "Sebutkan 2 syarat huruf RA harus dibaca TAFKHIM (tebal) dan 2 syarat huruf RA harus dibaca TARQIQ (tipis)!",
                kunci: "Syarat Ra Tafkhim (Tebal): 1. Huruf ra berharakat fathah atau dhammah (contoh: رَحْمَةٌ, رُسُلٌ). 2. Huruf ra sukun yang didahului huruf berharakat fathah atau dhammah (contoh: مَرْيَمَ, قُرْآنٌ). Syarat Ra Tarqiq (Tipis): 1. Huruf ra berharakat kasrah (contoh: رِزْقًا). 2. Huruf ra sukun yang didahului huruf berharakat kasrah asli dan tidak bertemu huruf isti'la (contoh: فِرْعَوْنَ).",
                pembahasan: "Menganalisis hukum makharijul huruf dan kaidah tajwid ra.",
                rubrik: [
                  { kriteria: "Menjelaskan 2 syarat ra tafkhim secara tepat", skor: 10 },
                  { kriteria: "Menjelaskan 2 syarat ra tarqiq secara tepat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 3. Fikih (MI Fase C - Kemenag KBC)
  {
    fase: "Fase C",
    kelasDefault: "Kelas V",
    mapel: "Fikih",
    jalurApplicable: ["Kemenag"],
    elemenList: [
      {
        namaElemen: "Fikih Ibadah & Muamalah",
        deskripsiCP:
          "Peserta didik mampu memahami ketentuan kurban dan akikah; memahami ketentuan jual beli, pinjam meminjam, dan khiyar dalam muamalah Islam secara adil dan berkah.",
        kompetensiKKO: "Menganalisis Ketentuan Kurban & Akikah, Menerapkan Fikih Muamalah Jual Beli Halal",
        lingkupMateri: "Fikih Kurban & Akikah, Rukun & Syarat Jual Beli, Konsep Khiyar, Larangan Riba & Penipuan",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menganalisis ketentuan kurban dan akikah serta menerapkan rukun jual beli Islami dan hak khiyar untuk mewujudkan muamalah yang jujur dan berkah.",
            alokasiJP: 10,
            semester: "GANJIL",
            prasyarat: "Memahami makanan dan minuman yang halal dan haram",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Penalaran Kritis", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Syariat Allah", "Cinta Keadilan Transaksi", "PPRA: Kesetaraan (Musawah)"],
            konteksPembelajaran: {
              stimulus: "Penyembelihan hewan kurban saat Hari Raya Idul Adha dan hari Tasyrik serta transaksi jual beli di koperasi madrasah dengan kuitansi bukti bayar yang transparan.",
              stimulusKemenag: "Kurban adalah bukti cinta pengorbanan hamba kepada Allah (QS. Al-Kautsar: 2), dan muamalah jujur adalah wujud kasih sayang kepada sesama manusia.",
              masalahNyata: "Bagaimana cara menerapkan hak khiyar (memilih melanjutkan atau membatalkan akad) jika barang yang dibeli secara daring terdapat cacat tersembunyi?",
              kegiatanEksplorasi: [
                "Studi komparasi perbedaan hewan kurban (kambing, domba, sapi, unta) dan waktu penyembelihannya.",
                "Simulasi transaksi jual beli di madrasah mempraktikkan akad ijab-kabul dan khiyar aib.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Muamalah",
                  teks: "Evaluasilah hikmah disyariatkannya hak 'Khiyar' dalam perdagangan Islam untuk melindungi pembeli dan penjual dari penipuan dan penyesalan!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Ketentuan kurban, akikah, dan muamalah jual beli",
                  baru: "Menyamakan waktu pelaksanaan kurban dengan akikah.",
                  layak: "Mampu menyebutkan syarat hewan yang sah untuk kurban.",
                  cakap: "Mampu menjelaskan perbedaan kurban dan akikah serta macam-macam khiyar.",
                  mahir: "Mampu menganalisis status hukum transaksi jual beli modern (e-commerce) menurut prinsip fikih muamalah.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah waktu yang SAH untuk menyembelih hewan KURBAN? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Tanggal 10 Zulhijah (Hari Raya Idul Adha) setelah salat Id.", isCorrect: true },
                  { kode: "B", teks: "Tanggal 11, 12, dan 13 Zulhijah (Hari Tasyrik).", isCorrect: true },
                  { kode: "C", teks: "Tanggal 9 Zulhijah sebelum salat Id dimulai.", isCorrect: false },
                  { kode: "D", teks: "Tanggal 15 Zulhijah.", isCorrect: false },
                ],
                kunci: "A dan B",
                pembahasan: "Waktu kurban adalah 4 hari: 10 Zulhijah (setelah salat Id) dan hari Tasyrik (11, 12, 13 Zulhijah sebelum terbenam matahari).",
              },
              soalUraian: {
                level: "C4 (Perbedaan Kurban dan Akikah)",
                pertanyaan: "Jelaskan 3 perbedaan utama antara ibadah KURBAN dan ibadah AKIKAH dari segi tujuan, waktu pelaksanaan, dan pembagian dagingnya!",
                kunci: "1. Tujuan: Kurban adalah ibadah taqarrub mendekatkan diri kepada Allah memperingati pengorbanan Nabi Ibrahim; Akikah adalah wujud syukur atas kelahiran bayi. 2. Waktu: Kurban dilaksanakan khusus tanggal 10-13 Zulhijah; Akikah disunahkan pada hari ke-7 (atau ke-14, 21) setelah kelahiran anak. 3. Pembagian Daging: Daging kurban disunahkan dibagikan dalam kondisi mentah/segar; Daging akikah disunahkan dibagikan dalam kondisi sudah dimasak matang siap santap.",
                pembahasan: "Memahami distingsi fikih ibadah kurban dan akikah.",
                rubrik: [
                  { kriteria: "Menjelaskan perbedaan tujuan dan waktu pelaksanaan", skor: 10 },
                  { kriteria: "Menjelaskan perbedaan pembagian kondisi daging (mentah vs matang)", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },
];
