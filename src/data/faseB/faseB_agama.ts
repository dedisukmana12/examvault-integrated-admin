// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import { CPDataset } from "../curriculumDatabase";

export const FASE_B_AGAMA_DATASETS: CPDataset[] = [
  // 1. Pendidikan Agama Islam dan Budi Pekerti (Fase B - Kelas III & IV SD/MI)
  {
    fase: "Fase B",
    kelasDefault: "Kelas IV",
    mapel: "Pendidikan Agama Islam dan Budi Pekerti",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Al-Qur'an dan Hadis",
        deskripsiCP:
          "Membaca surah-surah pendek pilihan (QS At-Tin, QS Al-Ma'un, QS Al-Kautsar) dengan tartil sesuai kaidah tajwid (hukum nun sukun/tanwin: Idgham, Ikhfa, Izhar, Iqlab); memahami pesan pokoknya; serta menghafalkan hadis tentang silaturahmi dan memelihara kebersihan.",
        kompetensiKKO: "Membaca Tartil, Menerapkan Tajwid, Menghafalkan, Menganalisis Pesan Pokok",
        lingkupMateri: "QS At-Tin & QS Al-Ma'un, Hukum Nun Sukun/Tanwin, Hadis Kasih Sayang & Silaturahmi",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Membaca QS At-Tin dan QS Al-Ma'un dengan tartil sesuai kaidah tajwid, menjelaskan pesan pokok kemuliaan manusia dan kepedulian terhadap anak yatim serta kaum dhuafa.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mampu membaca huruf hijaiyah bersambung",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Penalaran Kritis", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Al-Qur'an & Hadis", "Cinta Dhuafa", "PPRA: Berkeadaban (Ta'addub)"],
            konteksPembelajaran: {
              stimulus: "Ayat suci QS Al-Ma'un mengingatkan ancaman bagi orang yang mendustakan agama, yaitu orang yang menghardik anak yatim dan enggan menolong dengan barang berguna.",
              stimulusKemenag: "Al-Qur'an adalah pedoman hidup yang menyandingkan kesalehan ritual salat dengan kesalehan sosial kepedulian sesama manusia.",
              masalahNyata: "Mengapa orang yang rajin salat tetapi suka pamer (riya') dan tidak peduli pada anak yatim disebut sebagai pendusta agama dalam QS Al-Ma'un?",
              kegiatanEksplorasi: [
                "Menemukan hukum bacaan Nun Sukun dan Tanwin pada ayat-ayat QS At-Tin.",
                "Menyusun program 'Gerakan Sedekah Celengan Peduli Yatim' di kelas.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis Makna", teks: "Analisislah hubungan antara penciptaan manusia dalam bentuk sebaik-baiknya (Ahsani Taqwim) dalam QS At-Tin dengan kewajiban beramal saleh agar tidak direndahkan ke tempat paling bawah!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Membaca tartil dan memahami pesan QS Al-Ma'un",
                  baru: "Membaca masih terbata-bata dan hukum tajwid belum tepat.",
                  layak: "Mampu membaca dan menghafal QS Al-Ma'un.",
                  cakap: "Mampu membaca tartil dengan tajwid benar dan menjelaskan isi pokok surah secara runut.",
                  mahir: "Mampu menafsirkan hikmah sosial QS Al-Ma'un dan mempraktikkan aksi nyata kepedulian anak yatim di lingkungannya.",
                },
              ],
              soalPGK: {
                pertanyaan: "Berdasarkan pesan pokok yang terkandung dalam SURAH AL-MA'UN, manakah ciri-ciri orang yang mendustakan agama? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Orang yang menghardik dan berlaku kasar kepada anak yatim.", isCorrect: true },
                  { kode: "B", teks: "Orang yang tidak menganjurkan memberi makan orang miskin.", isCorrect: true },
                  { kode: "C", teks: "Orang yang lalai dari salatnya dan berbuat riya' (pamer).", isCorrect: true },
                  { kode: "D", teks: "Orang yang gemar bersedekah secara ikhlas dan sembunyi-sembunyi.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah 4 ciri pendusta agama yang ditegaskan dalam QS Al-Ma'un ayat 1-7.",
              },
              soalUraian: {
                level: "C4 (Pesan Pokok Al-Qur'an)",
                pertanyaan: "Jelaskan pesan pokok yang terkandung dalam QS At-Tin ayat 4-6 mengenai kemuliaan penciptaan manusia dan syarat agar manusia tidak jatuh ke derajat yang serendah-rendahnya!",
                kunci: "Allah menciptakan manusia dalam bentuk fisik dan akal yang paling sempurna (Ahsani Taqwim). Namun manusia akan dikembalikan ke tempat yang paling rendah (Asfala Safilin/neraka atau kehinaan) KECUALI orang-orang yang beriman dan senantiasa mengerjakan kebajikan/amal saleh, bagi mereka pahala yang tiada putus-putusnya.",
                pembahasan: "Tafsir kandungan ayat QS At-Tin tentang martabat insani.",
                rubrik: [
                  { kriteria: "Menjelaskan manusia diciptakan dalam bentuk paling sempurna", skor: 10 },
                  { kriteria: "Menjelaskan syarat iman dan amal saleh agar tidak hina", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Akidah dan Akhlak",
        deskripsiCP:
          "Memahami sifat-sifat Allah melalui Asmaul Husna (Al-Malik, Al-Quddus, As-Salam, Al-Mu'min, Al-Aziz); mengimani kitab-kitab Allah dan rasul-rasul Allah; serta menerapkan akhlak terpuji (berbakti kepada orang tua dan guru, toleransi, menghargai keberagaman, dan menjaga kebersihan lingkungan).",
        kompetensiKKO: "Memahami Asmaul Husna, Mengimani Rasul & Kitab, Meneladani Akhlak Terpuji",
        lingkupMateri: "Asmaul Husna (Al-Malik, Al-Quddus, As-Salam), Iman kepada Rasul & Kitab Allah, Birrul Walidain & Adab Bertetangga",
        tpList: [
          {
            kodeTP: "TP.02",
            teksTP:
              "Menjelaskan makna Asmaul Husna (Al-Malik, Al-Quddus, As-Salam, Al-Mu'min), mengimani para rasul dan kitab-kitab Allah, serta mempraktikkan adab santun birrul walidain dan toleransi dalam kehidupan bermasyarakat.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mengenal rukun iman",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kewargaan", "Komunikasi"],
            dimensiKarakterKemenag: ["Cinta Allah & Rasul", "Cinta Orang Tua & Guru", "PPRA: Toleransi (Tasamuh)"],
            konteksPembelajaran: {
              stimulus: "Kisah keteladanan Nabi Ibrahim as. dan Nabi Ismail as. dalam ketaatan beribadah dan rasa hormat yang mendalam kepada orang tua.",
              stimulusKemenag: "Meneladani As-Salam (Maha Pemberi Keselamatan) menginspirasi kita menjadi penebar salam kedamaian dan kerukunan bagi seluruh umat manusia.",
              masalahNyata: "Bagaimana cara kita meneladani sifat Asmaul Husna Al-Quddus (Maha Suci) dalam menjaga kebersihan hati, lisan, dan lingkungan sekolah?",
              kegiatanEksplorasi: [
                "Membuat pohon Asmaul Husna dan kartu aksi nyata peneladanannya.",
                "Bermain peran (role-play) adab meminta izin dan berbicara santun kepada orang tua sebelum berangkat sekolah.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis Akidah", teks: "Analisislah mengapa seorang muslim wajib mengimani seluruh rasul dan kitab suci yang diturunkan Allah sebelum Al-Qur'an (Taurat, Zabur, Injil)!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Meneladani Asmaul Husna dan akhlak birrul walidain",
                  baru: "Masih sering membantah nasihat orang tua.",
                  layak: "Mampu menyebutkan arti 4 Asmaul Husna dan 4 Kitab Suci.",
                  cakap: "Mampu mencontohkan perilaku meneladani Asmaul Husna dan mempraktikkan adab santun kepada guru dan orang tua.",
                  mahir: "Mampu menjadi duta damai (As-Salam) di kelas dan menunjukkan bakti tulus birrul walidain secara konsisten.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah pasangan antara ASMAUL HUSNA dan MAKNA PENELADANANNYA yang TEPAT? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Al-Quddus (Maha Suci): Menjaga kebersihan pakaian, badan, tempat ibadah, serta menjaga lisan dari perkataan kotor.", isCorrect: true },
                  { kode: "B", teks: "As-Salam (Maha Pemberi Kesejahteraan/Damai): Suka menebarkan salam, mendamaikan teman yang berselisih, dan tidak berbuat onar.", isCorrect: true },
                  { kode: "C", teks: "Al-Malik (Maha Merajai): Mampu mengendalikan hawa nafsu dan amarah serta menjadi pemimpin yang adil.", isCorrect: true },
                  { kode: "D", teks: "Al-Mu'min (Maha Pemberi Keamanan): Suka menakut-nakuti teman dengan cerita seram.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah makna dan contoh peneladanan Asmaul Husna yang benar.",
              },
              soalUraian: {
                level: "C4 (Rukun Iman - Kitab & Rasul)",
                pertanyaan: "Sebutkan 4 Kitab Suci yang wajib diimani beserta nama nabi dan rasul yang menerima masing-masing kitab suci tersebut!",
                kunci: "1. Kitab Taurat diturunkan kepada Nabi Musa as.\n2. Kitab Zabur diturunkan kepada Nabi Daud as.\n3. Kitab Injil diturunkan kepada Nabi Isa as.\n4. Kitab Al-Qur'an diturunkan kepada Nabi Muhammad saw.",
                pembahasan: "Materi rukun iman kepada kitab-kitab Allah SWT.",
                rubrik: [
                  { kriteria: "Menyebutkan Kitab Taurat (Nabi Musa) dan Zabur (Nabi Daud)", skor: 10 },
                  { kriteria: "Menyebutkan Kitab Injil (Nabi Isa) dan Al-Qur'an (Nabi Muhammad)", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Fikih Ibadah",
        deskripsiCP:
          "Memahami tata cara dan membiasakan salat berjamaah, salat Jumat, salat sunah rawatib dan duha; memahami ketentuan puasa Ramadan, tanda-tanda balig menurut pandangan ilmu fikih dan biologi, serta tata cara bersuci (mandi wajib).",
        kompetensiKKO: "Memahami Ketentuan Fikih, Mempraktikkan Salat Berjamaah, Mengidentifikasi Tanda Balig",
        lingkupMateri: "Salat Berjamaah & Salat Jumat, Tanda Balig (Fikih & Biologi), Mandi Wajib, Puasa Ramadan",
        tpList: [
          {
            kodeTP: "TP.03",
            teksTP:
              "Memahami ketentuan dan keutamaan salat berjamaah serta mengidentifikasi tanda-tanda usia balig menurut pandangan ilmu fikih dan ilmu biologi dengan rasa percaya diri dan bertanggung jawab.",
            alokasiJP: 6,
            semester: "GENAP",
            prasyarat: "Mampu mempraktikkan gerakan dan bacaan salat fardhu",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kemandirian", "Kesehatan"],
            dimensiKarakterKemenag: ["Cinta Ibadah", "PPRA: Berkeadaban"],
            konteksPembelajaran: {
              stimulus: "Siswa laki-laki dan perempuan mendengarkan penjelasan dokter dan guru agama tentang perubahan fisik dan tanggung jawab syariat saat memasuki masa pubertas/balig.",
              stimulusKemenag: "Memasuki usia balig adalah titik awal kedewasaan seorang mukalaf yang memikul tanggung jawab ibadah secara mandiri di hadapan Allah SWT.",
              masalahNyata: "Mengapa seorang anak yang telah balig wajib menjalankan salat lima waktu dan menutup aurat secara sempurna?",
              kegiatanEksplorasi: [
                "Simulasi merapikan saf salat berjamaah dan tata cara makmum masbuq.",
                "Membuat tabel perbedaan tanda-tanda balig pada anak laki-laki dan perempuan.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis Fikih & Biologi", teks: "Analisislah keterkaitan antara perubahan fisik masa pubertas (biologi) dengan status hukum taklif/mukalaf dalam syariat Islam (fikih)!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Memahami salat berjamaah dan tanda-tanda balig",
                  baru: "Belum mengetahui rukun dan syarat salat berjamaah.",
                  layak: "Mampu menyebutkan tanda balig secara umum.",
                  cakap: "Mampu mempraktikkan salat berjamaah sesuai posisi saf dan menjelaskan tanda balig fikih/biologi.",
                  mahir: "Mampu mengedukasi adab bersuci (taharah/mandi wajib) dan istiqomah menjalankan salat berjamaah di masjid.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah yang merupakan TANDA-TANDA USIA BALIG menurut ilmu fikih dan ilmu pengetahuan alam (biologi)? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Bagi anak laki-laki: Mengalami mimpi basah (ihtilam) dan tumbuhnya jakun serta suara membesar.", isCorrect: true },
                  { kode: "B", teks: "Bagi anak perempuan: Mengalami menstruasi (haid) dan pertumbuhan payudara serta pinggul.", isCorrect: true },
                  { kode: "C", teks: "Mencapai usia 15 tahun hijriyah bagi anak yang belum mengalami tanda fisik khusus.", isCorrect: true },
                  { kode: "D", teks: "Gigi susu pertama kali tanggal saat masih berusia 6 tahun.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah tanda-tanda balig syar'i dan biologis. D adalah fase pergantian gigi masa kanak-kanak.",
              },
              soalUraian: {
                level: "C4 (Tata Cara Mandi Wajib)",
                pertanyaan: "Sebutkan rukun (tata cara wajib) mandi besar/mandi wajib setelah berhadas besar agar seseorang kembali suci dan sah menjalankan salat!",
                kunci: "Rukun Mandi Wajib ada 2:\n1. Berniat mandi wajib untuk menghilangkan hadas besar (di dalam hati bersamaan dengan pertama kali membasuh air ke tubuh).\n2. Membasuh dan meratakan air bersih yang suci menyucikan ke seluruh anggota badan, mulai dari ujung rambut kepala hingga ujung jari kaki tanpa ada bagian yang terlewat.",
                pembahasan: "Fikih taharah bersuci dari hadas besar.",
                rubrik: [
                  { kriteria: "Menyebutkan niat menghilangkan hadas besar", skor: 10 },
                  { kriteria: "Menyebutkan meratakan air ke seluruh badan dari rambut hingga kaki", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Sejarah Peradaban Islam (SPI)",
        deskripsiCP:
          "Memahami kisah Nabi Muhammad saw. sebelum dan sesudah menjadi rasul periode Makkah (kelahiran, masa kanak-kanak, remaja berdagang, menerima wahyu di Gua Hira, dakwah sembunyi-sembunyi dan terang-terangan, serta peristiwa hijrah).",
        kompetensiKKO: "Memahami Kisah Sejarah, Meneladani Akhlak Rasulullah, Menganalisis Perjuangan Dakwah",
        lingkupMateri: "Kisah Nabi Muhammad saw. Periode Makkah, Gelar Al-Amin, Wahyu Pertama di Gua Hira, Ketabahan Menghadapi Boikot Quraisy",
        tpList: [
          {
            kodeTP: "TP.04",
            teksTP:
              "Menganalisis kisah keteladanan Nabi Muhammad saw. pada periode Makkah (kejujuran berdagang, penerimaan wahyu di Gua Hira, dan ketabahan dalam berdakwah) serta meneladaninya dalam kehidupan sehari-hari.",
            alokasiJP: 6,
            semester: "GENAP",
            prasyarat: "Mengenal silsilah keluarga Nabi Muhammad saw.",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Penalaran Kritis", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Rasulullah (Mahabbah)", "PPRA: Keteladanan (Qudwah)"],
            konteksPembelajaran: {
              stimulus: "Gelar 'Al-Amin' (yang dapat dipercaya) disematkan oleh seluruh penduduk Makkah kepada Nabi Muhammad saw. karena kejujuran beliau yang luar biasa dalam berdagang dan bergaul sejak usia muda.",
              stimulusKemenag: "Meneladani akhlak Rasulullah saw. (Uswatun Hasanah) adalah wujud cinta tertinggi yang menghiasi jiwa setiap penuntut ilmu.",
              masalahNyata: "Mengapa sifat jujur dan amanah Nabi Muhammad saw. mampu mendamaikan perselisihan antarpemimpin suku Quraisy saat peletakan batu Hajar Aswad?",
              kegiatanEksplorasi: [
                "Membuat peta alur peristiwa dakwah Nabi Muhammad saw. di Makkah (Gua Hira → Dakwah Sirriyah → Dakwah Jahriyah → Isra Mi'raj).",
                "Menulis refleksi keteladanan sifat Fathanah (Cerdas), Amanah (Terpercaya), Siddiq (Jujur), dan Tabligh (Menyampaikan).",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis Sejarah", teks: "Analisislah ketabahan dan strategi dakwah Nabi Muhammad saw. saat menghadapi pemboikotan ekonomi dan sosial oleh kaum kafir Quraisy di Makkah!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menganalisis kisah Nabi Muhammad saw. periode Makkah",
                  baru: "Menyebutkan nama nabi tanpa memahami alur sejarah dakwahnya.",
                  layak: "Mampu menceritakan peristiwa wahyu pertama di Gua Hira.",
                  cakap: "Mampu menjelaskan strategi dakwah sembunyi-sembunyi dan terang-terangan serta sifat wajib Rasul.",
                  mahir: "Mampu mengontekstualisasikan nilai kejujuran Al-Amin dalam menghadapi tantangan godaan kecurangan di zaman modern.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah peristiwa penting yang terjadi dalam KEHIDUPAN NABI MUHAMMAD SAW. PADA PERIODE MAKKAH? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Mendapat gelar 'Al-Amin' (terpercaya) saat mendamaikan peletakan Hajar Aswad di Ka'bah.", isCorrect: true },
                  { kode: "B", teks: "Menerima wahyu pertama (QS Al-'Alaq 1-5) di Gua Hira melalui Malaikat Jibril.", isCorrect: true },
                  { kode: "C", teks: "Melakukan perjalanan agung Isra Mi'raj dan menerima perintah salat 5 waktu.", isCorrect: true },
                  { kode: "D", teks: "Mendirikan Masjid Nabawi dan Piagam Madinah.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C terjadi di periode Makkah. D terjadi di periode Madinah setelah hijrah.",
              },
              soalUraian: {
                level: "C4 (Keteladanan Rasulullah)",
                pertanyaan: "Sebutkan 4 sifat wajib bagi para Rasul Allah beserta artinya dan jelaskan bagaimana kamu menerapkannya di sekolah!",
                kunci: "1. As-Siddiq artinya Jujur/Benar (tidak pernah berbohong kepada guru dan teman).\n2. Al-Amanah artinya Terpercaya (menjaga barang titipan dan amanah tugas piket).\n3. At-Tabligh artinya Menyampaikan (menyampaikan pesan/kebaikan tanpa disembunyikan).\n4. Al-Fathanah artinya Cerdas/Bijaksana (rajin belajar dan menggunakan akal untuk memecahkan masalah).",
                pembahasan: "Sifat-sifat wajib rasul dan penerapannya dalam karakter murid.",
                rubrik: [
                  { kriteria: "Menyebutkan 4 sifat wajib dan artinya secara tepat", skor: 10 },
                  { kriteria: "Menjelaskan contoh penerapannya di sekolah", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 2. Pendidikan Agama Kristen dan Budi Pekerti (Fase B - Kelas III & IV SD)
  {
    fase: "Fase B",
    kelasDefault: "Kelas IV",
    mapel: "Pendidikan Agama Kristen dan Budi Pekerti",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Allah Hadir dalam Alam & Tanggung Jawab Manusia",
        deskripsiCP:
          "Memahami kehadiran Allah dalam berbagai fenomena alam; memahami dirinya sebagai pribadi yang bertumbuh; serta melaksanakan upaya nyata memelihara kelestarian alam dan lingkungan hidup di sekitarnya sebagai wujud ucapan syukur.",
        kompetensiKKO: "Memahami Kehadiran Allah, Memelihara Alam Ciptaan, Mengasihi Sesama",
        lingkupMateri: "Allah Pencipta dan Pemelihara Alam Semesta, Tindakan Nyata Peduli Lingkungan Hidup",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Memahami kehadiran Allah dalam keindahan dan keteraturan fenomena alam serta mewujudkan tanggung jawab merawat dan melestarikan lingkungan sekitar sebagai bentuk ucapan syukur kepada Sang Pencipta.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mengenal kisah penciptaan langit dan bumi",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kesehatan", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Lingkungan & Ciptaan Tuhan", "PPRA: Berkeadaban"],
            konteksPembelajaran: {
              stimulus: "Hamparan kebun teh yang hijau, air terjun yang jernih, dan udara pegunungan yang segar membangkitkan rasa takjub akan keagungan Allah yang memelihara semesta.",
              stimulusKemenag: "Menjaga kelestarian alam ciptaan Allah adalah tugas mulia penatalayanan (stewardship) yang dipercayakan kepada manusia.",
              masalahNyata: "Bagaimana cara kita menjaga kebersihan sungai dan mengurangi polusi plastik di lingkungan sekolah sebagai wujud iman?",
              kegiatanEksplorasi: [
                "Membuat jurnal pengamatan tanaman bunga di halaman gereja/sekolah.",
                "Merancang aksi hemat air dan penanaman pohon penghijauan.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Etika Lingkungan", teks: "Evaluasilah akibat dari tindakan eksploitasi hutan secara liar terhadap kelangsungan hidup makhluk ciptaan Allah lainnya!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Merawat lingkungan sebagai wujud syukur kepada Allah",
                  baru: "Membuang sampah sembarangan di taman sekolah.",
                  layak: "Mampu menceritakan kebaikan Allah melalui alam.",
                  cakap: "Mampu mempraktikkan aksi memelihara tanaman dan menghemat air.",
                  mahir: "Mampu memimpin kampanye peduli lingkungan hijau berbasis nilai-nilai kasih Kristiani.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah tindakan yang mencerminkan TANGGUNG JAWAB MEMELIHARA ALAM CIPTAAN ALLAH? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Menyiram dan merawat tanaman di pot sekolah setiap pagi.", isCorrect: true },
                  { kode: "B", teks: "Mematikan kran air yang tidak terpakai untuk mencegah pemborosan air bersih.", isCorrect: true },
                  { kode: "C", teks: "Membuang sampah botol plastik ke dalam saluran selokan air.", isCorrect: false },
                  { kode: "D", teks: "Memilah sampah organik dan anorganik di tempat sampah sekolah.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "A, B, dan D adalah wujud tanggung jawab penatalayanan alam. C merusak lingkungan.",
              },
              soalUraian: {
                level: "C4 (Tanggung Jawab Pemeliharaan Alam)",
                pertanyaan: "Jelaskan mengapa manusia bertanggung jawab merawat bumi dan isinya, serta berikan 3 contoh tindakan nyata yang dapat kamu lakukan di rumah!",
                kunci: "Manusia diciptakan menurut gambar dan rupa Allah (Imago Dei) dan diberi mandat untuk mengusahakan serta memelihara bumi dengan penuh kasih sayang bukan merusaknya.\nContoh tindakan di rumah:\n1. Menyiram tanaman pekarangan dan memberi pupuk kompos.\n2. Mematikan lampu kamar saat siang hari untuk menghemat energi listrik.\n3. Membawa tempat makan dan botol minum sendiri (tumbler) untuk mengurangi sampah plastik.",
                pembahasan: "Konsep mandat penatalayanan (stewardship) alam dalam iman Kristen.",
                rubrik: [
                  { kriteria: "Menjelaskan mandat pemeliharaan bumi dari Allah", skor: 10 },
                  { kriteria: "Memberikan 3 contoh tindakan nyata di rumah", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 3. Pendidikan Agama Katolik dan Budi Pekerti (Fase B - Kelas III & IV SD)
  {
    fase: "Fase B",
    kelasDefault: "Kelas IV",
    mapel: "Pendidikan Agama Katolik dan Budi Pekerti",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pribadi Peserta Didik dan Karya Keselamatan Allah",
        deskripsiCP:
          "Memahami dirinya sebagai pribadi yang tumbuh dan berkembang secara fisik, intelektual, dan emosional; mensyukuri karunia talenta; mengenal tokoh-tokoh Perjanjian Lama dan Perjanjian Baru; serta mengamalkan perintah kasih Yesus Kristus dalam hidup menggereja dan bermasyarakat.",
        kompetensiKKO: "Memahami Pertumbuhan Diri, Mensyukuri Talenta, Mengamalkan Hukum Kasih",
        lingkupMateri: "Pribadi yang Tumbuh & Bertalenta, Tokoh Kitab Suci, Hukum Kasih Yesus",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Memahami dan mensyukuri perkembangan dirinya sebagai pribadi unik anugerah Allah serta mengembangkan talenta untuk melayani sesama sesuai teladan kasih Yesus Kristus.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mengenal doa Bapa Kami dan Tanda Salib",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kemandirian", "Kreativitas"],
            dimensiKarakterKemenag: ["Cinta Kasih Kristiani", "PPRA: Berkeadaban"],
            konteksPembelajaran: {
              stimulus: "Perumpamaan tentang Talenta (Matius 25:14-30) mengajarkan setiap anak menerima anugerah talenta yang berbeda dari Tuhan untuk dikembangkan dan dibagikan dengan penuh tanggung jawab.",
              stimulusKemenag: "Kasihilah sesamamu manusia seperti dirimu sendiri adalah hukum utama yang mempersatukan segenap umat manusia dalam damai.",
              masalahNyata: "Bagaimana cara kita menggunakan bakat menyanyi atau menggambar untuk menghibur teman yang sedang sakit atau berduka?",
              kegiatanEksplorasi: [
                "Menulis daftar talenta/kemampuan diri dan rencana pengembangannya di buku harian.",
                "Drama mini kisah Orang Samaria yang Murah Hati (Lukas 10:25-37).",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis Karakter", teks: "Analisislah makna keteladanan Orang Samaria yang Murah Hati dalam mempraktikkan kasih sejati tanpa memandang sekat perbedaan latar belakang!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Mengembangkan talenta dan mengamalkan kasih Yesus",
                  baru: "Menyembunyikan kemampuan dan enggan membantu teman.",
                  layak: "Mampu menyebutkan 2 talenta yang dimiliki.",
                  cakap: "Mampu menggunakan bakatnya dalam kegiatan doa/paduan suara atau kerja bakti sekolah.",
                  mahir: "Mampu menginspirasi teman-teman untuk saling mendukung dan mempraktikkan bela rasa (compassion) kepada yang lemah.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah tindakan yang mencerminkan pengamalan HUKUM KASIH YESUS KRISTUS kepada sesama manusia? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Menolong korban bencana alam tanpa membeda-bedakan suku dan agamanya.", isCorrect: true },
                  { kode: "B", teks: "Memaafkan kesalahan teman yang meminta maaf dengan tulus hati.", isCorrect: true },
                  { kode: "C", teks: "Membagi bekal makanan kepada teman yang tidak membawa uang jajan.", isCorrect: true },
                  { kode: "D", teks: "Menyimpan dendam dan membalas perbuatan buruk teman dengan kejahatan.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah pengamalan hukum kasih dan pengampunan Kristiani. D bertentangan dengan ajaran kasih.",
              },
              soalUraian: {
                level: "C4 (Perumpamaan Talenta)",
                pertanyaan: "Jelaskan pesan moral yang diajarkan Yesus Kristus dalam 'Perumpamaan tentang Talenta' bagi kehidupan seorang pelajar!",
                kunci: "Pesan moral: Tuhan menganugerahkan bakat, kemampuan, dan waktu (talenta) yang berbeda kepada setiap manusia. Manusia wajib mengembangkan talenta tersebut dengan tekun, rajin, dan penuh tanggung jawab untuk memuliakan nama Tuhan dan menolong sesama, bukan memendam atau menyia-nyiakannya karena rasa malas atau takut.",
                pembahasan: "Tafsir pesan Kitab Suci Injil Matius tentang pengembangan karunia Allah.",
                rubrik: [
                  { kriteria: "Menjelaskan karunia talenta dari Tuhan yang unik", skor: 10 },
                  { kriteria: "Menjelaskan kewajiban mengembangkan untuk kebaikan sesama", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 4. Pendidikan Agama Hindu dan Budi Pekerti (Fase B - Kelas III & IV SD)
  {
    fase: "Fase B",
    kelasDefault: "Kelas IV",
    mapel: "Pendidikan Agama Hindu dan Budi Pekerti",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Kitab Suci Weda, Sraddha, Susila, dan Sejarah Hindu",
        deskripsiCP:
          "Memahami kitab Purana sebagai bagian dari Upaweda; memahami Hyang Widhi Wasa sebagai Tri Murti dan Cadu Sakti; memahami ajaran susila Tri Parartha dan Catur Paramitha; memahami hari suci dan tempat suci agama Hindu; serta mengenal tokoh-tokoh kerajaan Hindu di Indonesia.",
        kompetensiKKO: "Memahami Kitab Purana, Menghayati Tri Murti & Cadu Sakti, Menerapkan Tri Parartha",
        lingkupMateri: "Kitab Purana, Konsep Tri Murti & Cadu Sakti, Ajaran Tri Parartha & Catur Paramitha, Hari Suci (Galungan, Nyepi)",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Memahami Hyang Widhi Wasa dalam manifestasi Tri Murti dan Cadu Sakti serta menerapkan ajaran susila Tri Parartha (Asih, Mpunya, Bhakti) dan Catur Paramitha dalam menciptakan keharmonisan hidup.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mengenal konsep Tri Kaya Parisudha",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kewargaan", "Komunikasi"],
            dimensiKarakterKemenag: ["Cinta Kedamaian (Shanti)", "PPRA: Keseimbangan"],
            konteksPembelajaran: {
              stimulus: "Perayaan Hari Suci Nyepi (Catur Brata Penyepian: Amati Geni, Amati Karya, Amati Lelungan, Amati Lelanguan) mewujudkan keheningan batin dan pemulihan alam semesta.",
              stimulusKemenag: "Tri Hita Karana mengajarkan tiga hubungan harmonis: manusia dengan Tuhan (Parhyangan), manusia dengan sesama (Pawongan), dan manusia dengan alam lingkungan (Palemahan).",
              masalahNyata: "Bagaimana cara kita menerapkan ajaran Asih (cinta kasih) dan Mpunya (rela berkorban/berdana) saat membantu teman yang tertimpa musibah?",
              kegiatanEksplorasi: [
                "Mengelompokkan manifestasi Tri Murti (Brahma: Pencipta, Wisnu: Pemelihara, Siwa: Pelebur).",
                "Praktik pelantunan mantram Gayatri dan mantram Tri Sandhya secara khusyuk.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis Filosofis", teks: "Analisislah keterkaitan antara Cadu Sakti (4 Kemahakuasaan Hyang Widhi) dengan keteraturan hukum alam semesta (Rta)!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menghayati Tri Murti dan menerapkan Tri Parartha",
                  baru: "Sering bertengkar dan bersikap kasar kepada teman.",
                  layak: "Mampu menyebutkan nama-nama dewa Tri Murti dan senjatanya.",
                  cakap: "Mampu menjelaskan makna Tri Parartha (Asih, Mpunya, Bhakti) dan melantunkan Tri Sandhya tepat waktu.",
                  mahir: "Mampu mengamalkan ajaran Catur Paramitha (Maitri, Karuna, Mudita, Upeksa) dalam menjaga kerukunan warga sekolah.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah pasangan manifestasi TRI MURTI dan SAKTI/FUNGSI KETUHANANNYA dalam agama Hindu yang BENAR? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Dewa Brahma: Berfungsi sebagai Pencipta (Utpatti) alam semesta dan isinya.", isCorrect: true },
                  { kode: "B", teks: "Dewa Wisnu: Berfungsi sebagai Pemelihara (Sthiti) seluruh ciptaan di alam semesta.", isCorrect: true },
                  { kode: "C", teks: "Dewa Siwa: Berfungsi sebagai Pelebur/Penyuci (Pralina) untuk mengembalikan ke asal mulanya.", isCorrect: true },
                  { kode: "D", teks: "Dewa Wisnu: Berfungsi sebagai perusak alam yang membawa bencana.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah ajaran kemahakuasaan Tri Murti dalam Weda.",
              },
              soalUraian: {
                level: "C4 (Ajaran Tri Parartha)",
                pertanyaan: "Jelaskan 3 bagian ajaran 'Tri Parartha' yang menuntun umat manusia menuju kebahagiaan dan keharmonisan hidup bersama!",
                kunci: "Tri Parartha terdiri dari 3 bagian:\n1. Asih: Menyayangi, mengasihi, dan mencintai seluruh makhluk ciptaan Tuhan tanpa kekerasan.\n2. Mpunya: Rela menolong, berderma, dan berkorban dengan tulus ikhlas kepada orang yang membutuhkan.\n3. Bhakti: Hormat, taat, dan sujud berbakti kepada Sang Hyang Widhi Wasa, orang tua, guru, dan para leluhur.",
                pembahasan: "Etika moral susila Tri Parartha dalam Agama Hindu.",
                rubrik: [
                  { kriteria: "Menjelaskan Asih dan Mpunya dengan tepat", skor: 10 },
                  { kriteria: "Menjelaskan Bhakti dengan tepat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 5. Pendidikan Agama Buddha dan Budi Pekerti (Fase B - Kelas III & IV SD)
  {
    fase: "Fase B",
    kelasDefault: "Kelas IV",
    mapel: "Pendidikan Agama Buddha dan Budi Pekerti",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Sejarah, Ritual, dan Etika Buddhis",
        deskripsiCP:
          "Memahami identitas Buddha Sakyamuni sebagai dasar keyakinan; meneladan Buddha Sakyamuni dalam menghargai sesama manusia; memahami doa Buddhis harian berlandaskan Ketuhanan YME dan Triratna; menghargai identitas aliran tradisi dalam agama Buddha; mengamalkan nilai-nilai Pancasila Buddhis berlandaskan Hukum Sebab Akibat yang Saling Bergantungan (Paticcasamuppada); serta mengamalkan parami, tolong menolong, kebersihan, dan kelestarian lingkungan.",
        kompetensiKKO: "Meneladani Buddha Sakyamuni, Melantunkan Doa Triratna, Mengamalkan Pancasila Buddhis",
        lingkupMateri: "Riwayat Pangeran Siddharta hingga Menjadi Buddha, Penghormatan Triratna (Buddha, Dhamma, Sangha), 5 Sila Pancasila Buddhis",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Meneladani riwayat perjuangan Buddha Sakyamuni, melantunkan doa puja bakti kepada Triratna, serta mengamalkan lima sila Pancasila Buddhis dalam melatih kedisiplinan moral dan cinta kasih.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mengenal salam Buddhis (Namo Buddhaya)",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Kasih Universal (Metta)", "PPRA: Berkeadaban"],
            konteksPembelajaran: {
              stimulus: "Pangeran Siddharta melepaskan kemewahan istana untuk mencari jalan mengakhiri penderitaan (dukkha) bagi semua makhluk hidup dengan penuh welas asih (Karuna).",
              stimulusKemenag: "Pancasila Buddhis melatih kesadaran diri (mindfulness) untuk tidak menyakiti makhluk hidup dan menebarkan kebahagiaan universal.",
              masalahNyata: "Bagaimana cara menerapkan sila pertama (Panatipata Veramani) saat melihat semut atau serangga di dalam kelas tanpa membunuhnya?",
              kegiatanEksplorasi: [
                "Praktik duduk hening meditasi pernapasan (Anapanasati) untuk menenangkan pikiran sebelum belajar.",
                "Menyusun kartu komik lima latihan moral Pancasila Buddhis.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis Etika", teks: "Analisislah bagaimana pengamalan Hukum Sebab Akibat (Hukum Kamma) memotivasi seseorang untuk selalu berbuat kebajikan dalam pikiran, ucapan, dan perbuatan!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Meneladani Buddha dan mengamalkan Pancasila Buddhis",
                  baru: "Sering mengganggu dan menyakiti hewan kecil.",
                  layak: "Mampu melafalkan 3 permata perlindungan Triratna.",
                  cakap: "Mampu menyebutkan 5 aturan kemoralan Pancasila Buddhis dan mempraktikkan meditasi hening.",
                  mahir: "Mampu memancarkan cinta kasih (Metta) tanpa batas kepada semua makhluk dan menjadi teladan kejujuran.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah yang merupakan sila dalam PANCASILA BUDDHIS (5 Latihan Kemoralan)? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Bertekad melatih diri menghindari pembunuhan makhluk hidup (Panatipata).", isCorrect: true },
                  { kode: "B", teks: "Bertekad melatih diri menghindari mengambil barang yang tidak diberikan / mencuri (Adinnadana).", isCorrect: true },
                  { kode: "C", teks: "Bertekad melatih diri menghindari ucapan yang tidak benar / berbohong (Musavada).", isCorrect: true },
                  { kode: "D", teks: "Bertekad untuk selalu membalas dendam kepada musuh.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah sila 1, 2, dan 4 dari Pancasila Buddhis. D bertentangan dengan ajaran Metta.",
              },
              soalUraian: {
                level: "C4 (Pancasila Buddhis)",
                pertanyaan: "Sebutkan 3 Permata Suci (Triratna) yang menjadi tempat perlindungan utama umat Buddha dan jelaskan maknanya!",
                kunci: "Triratna (Tiga Permata):\n1. Buddha: Guru Agung Yang Tercerahkan Sempurna yang menemukan dan mengajarkan jalan kebenaran.\n2. Dhamma: Ajaran kebenaran sejati dan hukum kesunyataan yang dibabarkan oleh Buddha.\n3. Sangha: Pasukan persaudaraan para bhikkhu/bhikkhuni suci yang melestarikan dan mempraktikkan Dhamma.",
                pembahasan: "Landasan keyakinan (Saddha) Triratna dalam agama Buddha.",
                rubrik: [
                  { kriteria: "Menyebutkan Buddha dan maknanya", skor: 7 },
                  { kriteria: "Menyebutkan Dhamma dan maknanya", skor: 7 },
                  { kriteria: "Menyebutkan Sangha dan maknanya", skor: 6 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 6. Pendidikan Agama Khonghucu dan Budi Pekerti (Fase B - Kelas III & IV SD)
  {
    fase: "Fase B",
    kelasDefault: "Kelas IV",
    mapel: "Pendidikan Agama Khonghucu dan Budi Pekerti",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Sejarah Suci, Tata Ibadah, dan Perilaku Junzi",
        deskripsiCP:
          "Memahami watak sejati (xing) menurut pandangan Mengzi dan sikap teladan murid-murid Nabi Kongzi; memahami tata cara dan pembiasaan berdoa (bao xin bade) serta ibadah di litang (miao/klenteng); serta memahami perilaku luhur Junzi (menghargai waktu, hati-hati, mengasihi sesama, 8 kebajikan bade, dan mau memperbaiki kesalahan).",
        kompetensiKKO: "Memahami Watak Sejati Xing, Membiasakan Doa Bao Xin Bade, Berperilaku Junzi",
        lingkupMateri: "Ajaran Xing Ben Shan Mengzi, Tata Ibadah di Litang, Delapan Kebajikan (Ba De)",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Memahami watak sejati manusia yang pada dasarnya baik (Xing Ben Shan), melaksanakan tata cara ibadah di Litang dengan hormat, serta menerapkan delapan kebajikan (Ba De) untuk membentuk pribadi Junzi yang berbudi pekerti luhur.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mengenal salam kebajikan (Wei De Dong Tian)",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kemandirian", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Kebajikan (Ren)", "PPRA: Berkeadaban"],
            konteksPembelajaran: {
              stimulus: "Nabi Kongzi mengajarkan bahwa seorang Junzi (insan berbudi luhur) selalu mengoreksi diri sendiri saat menghadapi kegagalan dan tidak menyalahkan orang lain.",
              stimulusKemenag: "Menghormati orang tua (Xiao) dan setia kepada kebenaran (Zhong) adalah pokok utama dari pembinaan diri manusia.",
              masalahNyata: "Bagaimana cara kita menunjukkan sikap berani mengakui kesalahan dan segera memperbaikinya di hadapan guru dan teman?",
              kegiatanEksplorasi: [
                "Mempelajari 8 butir kebajikan Ba De (Xiao, Ti, Zhong, Xin, Li, Yi, Lian, Chi).",
                "Praktik sikap hormat merangkapkan tangan (Bai/Gui) dalam tata ibadah Litang.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis Karakter", teks: "Analisislah mengapa sikap memiliki rasa malu (Chi) sangat penting untuk mencegah seseorang melakukan perbuatan curang atau melanggar aturan!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menerapkan nilai Ba De dan karakter Junzi",
                  baru: "Menolak mengakui kesalahan dan melempar kesalahan ke teman.",
                  layak: "Mampu menyebutkan arti Xiao (Bakti) dan Xin (Dapat dipercaya).",
                  cakap: "Mampu beribadah dengan dupa (hio) secara khidmat dan berperilaku sopan santun (Li).",
                  mahir: "Mampu menerapkan delapan kebajikan Ba De secara utuh dan menjadi teladan integritas di kelas.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah butir-butir KEBAJIKAN UTAMA (BA DE) dalam ajaran agama Khonghucu yang BENAR? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Xiao: Berbakti dan taat kepada orang tua dan leluhur.", isCorrect: true },
                  { kode: "B", teks: "Xin: Menepati janji, jujur, dan dapat dipercaya dalam perkataan.", isCorrect: true },
                  { kode: "C", teks: "Chi: Memiliki rasa malu jika berbuat kesalahan atau bertindak tidak terpuji.", isCorrect: true },
                  { kode: "D", teks: "Ti: Bersikap sombong dan membanggakan diri sendiri.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah bagian dari 8 kebajikan Ba De. D salah karena Ti artinya rendah hati dan menghormati saudara.",
              },
              soalUraian: {
                level: "C4 (Falsafah Watak Sejati Mengzi)",
                pertanyaan: "Jelaskan pandangan Mengzi (Mencius) tentang 'Watak Sejati Manusia' (Xing Ben Shan) dan mengapa pendidikan moral sangat diperlukan agar kebaikan tersebut tidak luntur!",
                kunci: "Mengzi mengajarkan bahwa watak dasar manusia pada hakikatnya adalah BAIK (Xing Ben Shan), seperti air yang mengalir ke tempat yang rendah. Manusia memiliki benih Cinta Kasih (Ren), Kebenaran (Yi), Kesusilaan (Li), dan Kebijaksanaan (Zhi). Pendidikan moral dan pembinaan diri sangat diperlukan agar benih kebaikan tersebut tidak tertutup oleh godaan hawa nafsu dan pengaruh buruk lingkungan sekitar.",
                pembahasan: "Konsep dasar antropologi moral dalam ajaran Ru Jiao / Khonghucu.",
                rubrik: [
                  { kriteria: "Menjelaskan watak dasar manusia hakikatnya baik (Xing Ben Shan)", skor: 10 },
                  { kriteria: "Menjelaskan fungsi pendidikan moral menjaga benih kebajikan", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 7. Kemenag Jalur Madrasah Ibtidaiyah: Al-Qur'an Hadis (Fase B - Kelas III & IV MI)
  {
    fase: "Fase B",
    kelasDefault: "Kelas IV",
    mapel: "Al-Qur'an Hadis",
    jalurApplicable: ["Kemenag"],
    elemenList: [
      {
        namaElemen: "Ilmu Tajwid dan Surah Pilihan MI",
        deskripsiCP:
          "Menerapkan hukum bacaan Qalqalah (Sugra & Kubra), Mad Thabi'i, dan hukum Mim Sukun (Ikhfa Syafawi, Idgham Mimi, Izhar Syafawi); membaca, menghafalkan, dan memahami kandungan surah-surah pendek (QS Al-Qari'ah, QS At-Takatsur, QS Az-Zalzalah); serta menghafal dan mengamalkan hadis tentang takwa dan niat.",
        kompetensiKKO: "Menerapkan Tajwid Qalqalah/Mim Sukun, Menghafalkan, Menganalisis Pesan Hari Kiamat",
        lingkupMateri: "Hukum Tajwid Qalqalah & Mim Sukun, QS Al-Qari'ah & At-Takatsur, Hadis Keutamaan Belajar Al-Qur'an",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menerapkan hukum tajwid Qalqalah dan hukum Mim Sukun saat membaca QS Al-Qari'ah dan QS At-Takatsur serta menganalisis pesan moral tentang peristiwa hari kiamat dan bahaya bermegah-megahan.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mengenal hukum Nun Sukun",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Penalaran Kritis"],
            dimensiKarakterKemenag: ["Cinta Al-Qur'an", "PPRA: Berkeadaban"],
            konteksPembelajaran: {
              stimulus: "QS Al-Qari'ah melukiskan dahsyatnya hari kiamat ketika manusia berhamburan seperti anai-anai dan gunung-gunung dihamburkan seperti bulu yang dibusur.",
              stimulusKemenag: "Al-Qur'an mengingatkan agar manusia tidak terlena oleh perlombaan menimbun harta duniawi hingga melupakan bekal akhirat.",
              masalahNyata: "Bagaimana cara membaca huruf Qalqalah (Ba, Jim, Dal, Tha, Qaf) saat berada di tengah kata (sugra) versus saat waqaf di akhir ayat (kubra)?",
              kegiatanEksplorasi: [
                "Menemukan huruf Qalqalah dan Mim Sukun pada mushaf juz 30.",
                "Diskusi refleksi pesan QS At-Takatsur tentang pola hidup sederhana dan qana'ah.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis Tajwid", teks: "Bandingkan perbedaan getaran dan pantulan suara pada bacaan Qalqalah Sugra dengan Qalqalah Kubra beserta contohnya!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menerapkan tajwid Qalqalah dan memahami QS Al-Qari'ah",
                  baru: "Membaca huruf Qalqalah tanpa memantulkannya.",
                  layak: "Mampu menyebutkan 5 huruf Qalqalah.",
                  cakap: "Mampu membedakan Qalqalah Sugra dan Kubra serta menghafal QS Al-Qari'ah dengan tartil.",
                  mahir: "Mampu menganalisis seluruh hukum mim sukun dan mengontekstualisasikan pesan QS At-Takatsur dalam perilaku hidup hemat.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah hukum tajwid MIM SUKUN (مْ) dan contoh bacaannya yang BENAR? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Ikhfa Syafawi: Mim sukun bertemu huruf Ba (ب) dibaca samar dengan dengung.", isCorrect: true },
                  { kode: "B", teks: "Idgham Mimi / Mutamatsilain: Mim sukun bertemu huruf Mim (م) dibaca melebur dengan dengung.", isCorrect: true },
                  { kode: "C", teks: "Izhar Syafawi: Mim sukun bertemu huruf selain Ba dan Mim dibaca jelas tanpa dengung.", isCorrect: true },
                  { kode: "D", teks: "Iqlab: Mim sukun bertemu huruf Nun dibaca berubah menjadi huruf Ra.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah 3 macam hukum Mim Sukun. Iqlab adalah hukum Nun Sukun bertemu Ba.",
              },
              soalUraian: {
                level: "C4 (Pesan Surah At-Takatsur)",
                pertanyaan: "Jelaskan peringatan yang disampaikan Allah dalam QS At-Takatsur mengenai perilaku manusia yang suka bermegah-megahan!",
                kunci: "Allah menegur manusia yang lalai dari ketaatan karena sibuk berlomba-lomba memperbanyak harta, kekayaan, dan kemewahan duniawi hingga mereka masuk ke dalam kubur. Kelak di akhirat mereka pasti akan ditanya dan dimintai pertanggungjawaban atas segala kenikmatan yang telah diberikan Allah di dunia.",
                pembahasan: "Kandungan tafsir QS At-Takatsur tentang bahaya materialisme.",
                rubrik: [
                  { kriteria: "Menjelaskan teguran kelalaian akibat menumpuk harta", skor: 10 },
                  { kriteria: "Menjelaskan pertanggungjawaban kenikmatan di akhirat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 8. Kemenag Jalur Madrasah Ibtidaiyah: Sejarah Kebudayaan Islam (SKI) (Fase B - Kelas III & IV MI - Wajib Mulai Kelas III/IV)
  {
    fase: "Fase B",
    kelasDefault: "Kelas IV",
    mapel: "Sejarah Kebudayaan Islam (SKI)",
    jalurApplicable: ["Kemenag"],
    elemenList: [
      {
        namaElemen: "Periode Makkah dan Madinah Awal",
        deskripsiCP:
          "Menganalisis kondisi masyarakat Arab pra-Islam (kepercayaan, sosial, ekonomi); masa kanak-kanak dan masa muda Nabi Muhammad saw.; peristiwa kerasulan dan dakwah di Makkah; peristiwa Isra Mi'raj; ketabahan para sahabat (Bilal bin Rabah, keluarga Yasir); serta peristiwa Bai'at Aqabah dan Hijrah ke Madinah.",
        kompetensiKKO: "Menganalisis Kondisi Pra-Islam, Mengidentifikasi Peristiwa Hijrah, Meneladani Sahabat",
        lingkupMateri: "Masyarakat Jahiliyah, Peristiwa Kerasulan di Gua Hira, Ketabahan Sahabat, Hijrah ke Yatsrib",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menganalisis kondisi sosial budaya bangsa Arab pra-Islam, perjuangan dakwah Rasulullah saw. di Makkah, serta ketabahan para sahabat utama dalam mempertahankan akidah tauhid.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mengenal kota Makkah dan Ka'bah",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kewargaan", "Penalaran Kritis"],
            dimensiKarakterKemenag: ["Cinta Peradaban Islam", "PPRA: Keteladanan (Qudwah)"],
            konteksPembelajaran: {
              stimulus: "Keteguhan iman sahabat Bilal bin Rabah yang tetap mengumandangkan 'Ahad... Ahad...' meskipun ditindih batu besar di padang pasir yang panas membara.",
              stimulusKemenag: "Sejarah Islam mengajarkan bahwa kejayaan peradaban dibangun di atas fondasi keteguhan iman, keadilan, dan persaudaraan sejati.",
              masalahNyata: "Mengapa kaum kafir Quraisy menolak ajaran Islam padahal mereka mengakui Nabi Muhammad saw. adalah orang yang paling jujur (Al-Amin)?",
              kegiatanEksplorasi: [
                "Membuat garis waktu (timeline) fase dakwah Rasulullah saw. di Makkah.",
                "Drama ketabahan keluarga Yasir dan pembebasan Bilal oleh Abu Bakar Ash-Shiddiq.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis Sejarah Kritis", teks: "Analisislah faktor-faktor ekonomi dan kekuasaan yang menyebabkan para pembesar kafir Quraisy menentang keras dakwah persamaan derajat manusia yang dibawa oleh Islam!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menganalisis sejarah dakwah Rasulullah di Makkah",
                  baru: "Menghafal nama tokoh tanpa memahami peran sejarahnya.",
                  layak: "Mampu menceritakan kisah penyiksaan sahabat Bilal.",
                  cakap: "Mampu menjelaskan latar belakang jahiliyah dan strategi dakwah sembunyi-sembunyi di Darul Arqam.",
                  mahir: "Mampu menarik hikmah perjuangan mempertahankan integritas iman di tengah tekanan sosial masa kini.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah ciri-ciri KONDISI MASYARAKAT JAHILIYAH ARAB SEBELUM ISLAM yang BENAR? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Menyembah patung berhala di sekeliling Ka'bah seperti Latta, Uzza, dan Manat.", isCorrect: true },
                  { kode: "B", teks: "Memiliki kebiasaan buruk mengubur bayi perempuan hidup-hidup karena dianggap aib keluarga.", isCorrect: true },
                  { kode: "C", teks: "Gemar berperang antarsuku hanya karena masalah sepele.", isCorrect: true },
                  { kode: "D", teks: "Seluruh masyarakat hidup bersatu dalam sistem hukum pemerintahan yang adil.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah ciri masa jahiliyah. D salah karena bangsa Arab pra-Islam terpecah-belah dalam kabilah.",
              },
              soalUraian: {
                level: "C4 (Strategi Dakwah)",
                pertanyaan: "Jelaskan mengapa pada masa awal kenabian, Nabi Muhammad saw. memilih berdakwah secara sembunyi-sembunyi (Sirriyah) di rumah sahabat Arqam bin Abil Arqam (Darul Arqam)!",
                kunci: "Dakwah Sirriyah dilakukan untuk menjaga keselamatan kaum muslimin yang jumlahnya masih sangat sedikit dan lemah, mencegah reaksi penyerangan mendadak dari kaum kafir Quraisy, serta membina akidah dan keimanan para pengikut awal (As-Sabiqunal Awwalun) secara intensif dan kokoh sebelum menghadapi perlawanan terbuka.",
                pembahasan: "Analisis strategi taktis dakwah Rasulullah periode awal.",
                rubrik: [
                  { kriteria: "Menjelaskan perlindungan bagi pengikut awal yang masih sedikit", skor: 10 },
                  { kriteria: "Menjelaskan pembinaan akidah yang mendalam di Darul Arqam", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },
];
