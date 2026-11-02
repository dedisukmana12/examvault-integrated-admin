// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import { CPDataset } from "../curriculumDatabase";

export const FASE_A_AGAMA_DATASETS: CPDataset[] = [
  // 1. Pendidikan Agama Islam dan Budi Pekerti (Fase A)
  {
    fase: "Fase A",
    kelasDefault: "Kelas I",
    mapel: "Pendidikan Agama Islam dan Budi Pekerti",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Al-Qur'an dan Hadis",
        deskripsiCP:
          "Mengenal huruf hijaiyah dan harakatnya, huruf hijaiyah bersambung, dan mampu membaca surah-surah pendek Al-Qur'an (Al-Fatihah, Al-Ikhlas, An-Nas, Al-Falaq) dengan baik dan benar.",
        kompetensiKKO: "Mengenal, Melafalkan, Membaca",
        lingkupMateri: "Huruf Hijaiyah Berharakat, Surah Al-Fatihah, Surah Pendek (Al-Ikhlas, An-Nas)",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Mengenal dan melafalkan huruf hijaiyah berharakat (fathah, kasrah, dhammah) secara fasih serta membaca Surah Al-Fatihah dan Surah Al-Ikhlas dengan tartil.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Mengenal bentuk huruf dasar hijaiyah",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kemandirian", "Penalaran Kritis"],
            dimensiKarakterKemenag: ["Cinta Allah & Rasul-Nya", "Cinta Al-Qur'an", "PPRA: Berkeadaban (Ta'addub)"],
            konteksPembelajaran: {
              stimulus: "Siswa bersama-sama melafalkan Surah Al-Fatihah dengan suara merdu dan khusyuk sebelum memulai pelajaran di kelas.",
              stimulusKemenag: "Membaca Al-Qur'an dengan tartil dan benar mendatangkan ketenangan jiwa dan pahala yang berlimpah.",
              masalahNyata: "Bagaimana cara membedakan bunyi harakat fathah (a), kasrah (i), dan dhammah (u)?",
              kegiatanEksplorasi: [
                "Menunjuk dan melafalkan kartu huruf hijaiyah berharakat.",
                "Tepuk anak saleh dan tadarus bersama surah Al-Fatihah.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Analisislah mengapa Surah Al-Fatihah disebut sebagai Ummul Qur'an (Induk Al-Qur'an) dan wajib dibaca dalam setiap rakaat salat!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Melafalkan huruf hijaiyah dan Surah Al-Fatihah",
                  baru: "Masih terbata-bata melafalkan makhraj huruf hijaiyah.",
                  layak: "Mampu melafalkan huruf berharakat fathah, kasrah, dhammah.",
                  cakap: "Mampu melafalkan Surah Al-Fatihah dan Al-Ikhlas secara tartil dan hafal.",
                  mahir: "Mampu menjelaskan arti pokok Surah Al-Ikhlas tentang keesaan Allah SWT.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah tanda baca (harakat) hijaiyah dan bunyinya yang BENAR? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Fathah berada di atas huruf, berbunyi vokal 'A'.", isCorrect: true },
                  { kode: "B", teks: "Kasrah berada di bawah huruf, berbunyi vokal 'I'.", isCorrect: true },
                  { kode: "C", teks: "Dhammah berbentuk seperti wau kecil di atas huruf, berbunyi vokal 'U'.", isCorrect: true },
                  { kode: "D", teks: "Sukun berada di bawah huruf, berbunyi vokal 'O'.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Fathah (a), Kasrah (i), dan Dhammah (u) adalah 3 harakat utama. Sukun adalah tanda mati.",
              },
              soalUraian: {
                level: "C4 (Pemahaman)",
                pertanyaan: "Sebutkan pesan utama yang terkandung di dalam Surah Al-Ikhlas ayat 1-4!",
                kunci: "Surah Al-Ikhlas menegaskan bahwa Allah itu Maha Esa (Satu), tempat bergantung segala makhluk, tidak beranak dan tidak diperanakkan, serta tidak ada yang setara dengan-Nya.",
                pembahasan: "Konsep ketauhidan murni dalam Islam.",
                rubrik: [
                  { kriteria: "Menjelaskan Allah Maha Esa / Tunggal", skor: 10 },
                  { kriteria: "Menjelaskan Allah tidak beranak dan tempat bergantung", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Akidah dan Akhlak",
        deskripsiCP:
          "Mengenal rukun Iman (khususnya iman kepada Allah dan Rasul-Nya), Asmaul Husna (Ar-Rahman, Ar-Rahim, Al-Malik), serta membiasakan sikap santun, berbakti kepada orang tua dan guru, dan menjaga kebersihan.",
        kompetensiKKO: "Mengenal, Mengimani, Membiasakan",
        lingkupMateri: "Rukun Iman, Asmaul Husna (Ar-Rahman, Ar-Rahim), Akhlak Santun & Berbakti, Menjaga Kebersihan",
        tpList: [
          {
            kodeTP: "TP.02",
            teksTP:
              "Mengenal rukun Iman, memahami makna Asmaul Husna Ar-Rahman dan Ar-Rahim, serta meneladani sifat kasih sayang dalam kehidupan di rumah dan sekolah.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Mengenal kalimat syahadat",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kolaborasi", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Allah & Rasul-Nya", "Cinta Diri & Sesama", "PPRA: Kasih Sayang (Rahmah)"],
            konteksPembelajaran: {
              stimulus: "Setiap hari Allah menurunkan hujan, menumbuhkan padi, dan memberi udara sejuk untuk semua makhluk tanpa terkecuali.",
              stimulusKemenag: "Sifat Ar-Rahman dan Ar-Rahim Allah mengajarkan kita untuk selalu berbuat baik dan menyayangi sesama manusia dan hewan.",
              masalahNyata: "Bagaimana cara kita meniru sifat pengasih dan penyayang Allah dalam pergaulan di kelas?",
              kegiatanEksplorasi: [
                "Bernyanyi lagu Rukun Iman dan Asmaul Husna bersama.",
                "Menceritakan contoh berbuat kasih sayang kepada kucing atau tanaman di rumah.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Bandingkan arti dari Asmaul Husna 'Ar-Rahman' (Maha Pengasih) dengan 'Ar-Rahim' (Maha Penyayang)!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Memahami Rukun Iman dan Asmaul Husna",
                  baru: "Menghafal rukun iman terbalik urutannya.",
                  layak: "Mampu menyebutkan 6 Rukun Iman secara urut.",
                  cakap: "Mampu menjelaskan makna Ar-Rahman dan Ar-Rahim serta memberikan contoh kasih sayang.",
                  mahir: "Mampu mempraktikkan sikap santun dan gemar memaafkan kesalahan teman.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah yang termasuk ke dalam 6 RUKUN IMAN dalam Islam? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Iman kepada Allah SWT.", isCorrect: true },
                  { kode: "B", teks: "Iman kepada Malaikat-Malaikat Allah.", isCorrect: true },
                  { kode: "C", teks: "Iman kepada Kitab-Kitab Allah dan Rasul-Rasul-Nya.", isCorrect: true },
                  { kode: "D", teks: "Mengerjakan puasa di bulan Ramadhan.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, dan C adalah Rukun Iman. Puasa Ramadhan adalah Rukun Islam ke-4.",
              },
              soalUraian: {
                level: "C4 (Penerapan Akhlak)",
                pertanyaan: "Tuliskan 2 contoh sikap berbakti dan sopan santun kepada kedua orang tua saat berada di rumah!",
                kunci: "1. Mencium tangan dan berpamitan saat hendak berangkat ke sekolah. 2. Berbicara dengan suara lembut dan segera membantu saat dipanggil orang tua.",
                pembahasan: "Akhlakul karimah kepada orang tua (birrul walidain).",
                rubrik: [
                  { kriteria: "Menyebutkan contoh berpamitan/salam", skor: 10 },
                  { kriteria: "Menyebutkan contoh berbicara lembut dan membantu", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Fikih",
        deskripsiCP:
          "Mengenal rukun Islam, melafalkan dua kalimat syahadat beserta artinya, serta mempraktikkan tata cara bersuci (wudhu/tayamum) dan gerakan salat fardhu secara benar.",
        kompetensiKKO: "Mengenal, Melafalkan, Mempraktikkan",
        lingkupMateri: "Rukun Islam, Dua Kalimat Syahadat, Tata Cara Wudhu, Gerakan & Bacaan Salat",
        tpList: [
          {
            kodeTP: "TP.03",
            teksTP:
              "Melafalkan dua kalimat syahadat beserta artinya dan mempraktikkan tata cara bersuci (wudhu) sesuai urutan rukun wudhu secara tertib dan bersih.",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "Mengenal pentingnya kebersihan badan",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kemandirian", "Kesehatan"],
            dimensiKarakterKemenag: ["Cinta Ibadah", "Cinta Kebersihan", "PPRA: Keteladanan (Qudwah)"],
            konteksPembelajaran: {
              stimulus: "Siswa berbaris tertib di tempat wudhu sekolah, membasuh wajah, tangan hingga siku, dan membasuh kaki dengan hemat air.",
              stimulusKemenag: "Wudhu membersihkan fisik dari kotoran dan menyucikan hati sebelum menghadap Allah dalam salat.",
              masalahNyata: "Apa akibatnya jika salat dikerjakan tanpa berwudhu terlebih dahulu?",
              kegiatanEksplorasi: [
                "Praktik langsung tata cara wudhu urut 1 sampai 6 di tempat wudhu.",
                "Menjodohkan gambar urutan gerakan wudhu.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Analisislah mengapa saat berwudhu kita tidak boleh menggunakan air secara berlebihan (boros)!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Melafalkan syahadat dan mempraktikkan wudhu",
                  baru: "Gerakan wudhu masih sering terbalik urutannya.",
                  layak: "Mampu melafalkan dua kalimat syahadat.",
                  cakap: "Mampu mempraktikkan urutan wudhu dengan tertib dan membasuh anggota wajib wudhu secara sempurna.",
                  mahir: "Mampu melafalkan doa setelah wudhu dan tertib menjaga kesucian diri.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah anggota tubuh yang WAJIB dibasuh saat berwudhu (Rukun Wudhu)? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Membasuh seluruh wajah (muka).", isCorrect: true },
                  { kode: "B", teks: "Membasuh kedua tangan sampai siku.", isCorrect: true },
                  { kode: "C", teks: "Mengusap sebagian kepala.", isCorrect: true },
                  { kode: "D", teks: "Membasuh kedua kaki sampai mata kaki.", isCorrect: true },
                ],
                kunci: "A, B, C, dan D",
                pembahasan: "Rukun wudhu mencakup niat, membasuh wajah, tangan hingga siku, mengusap kepala, membasuh kaki hingga mata kaki, dan tertib.",
              },
              soalUraian: {
                level: "C4 (Lafal & Makna)",
                pertanyaan: "Tuliskan lafal dua kalimat syahadat (syahadatain) beserta artinya dalam bahasa Indonesia!",
                kunci: "Lafal: 'Asyhadu alla ilaha illallah, wa asyhadu anna Muhammadar Rasulullah'. Artinya: 'Aku bersaksi bahwa tiada Tuhan selain Allah, dan aku bersaksi bahwa Nabi Muhammad adalah utusan Allah'.",
                pembahasan: "Inti fondasi keimanan dan pintu masuk Islam.",
                rubrik: [
                  { kriteria: "Menuliskan lafal syahadat dengan benar", skor: 10 },
                  { kriteria: "Menjelaskan arti syahadat tauhid dan rasul", skor: 10 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.04",
            teksTP:
              "Mendemonstrasikan gerakan salat fardhu (takbiratul ihram, ruku', i'tidal, sujud, duduk di antara dua sujud, tahiyyat, dan salam) secara tertib dan tumaninah.",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "TP.03 - Praktik wudhu yang tertib",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ibadah", "PPRA: Berkeadaban (Ta'addub)"],
            konteksPembelajaran: {
              stimulus: "Siswa kelas 1 melaksanakan salat zuhur berjamaah di musala sekolah dengan saf yang rapi dan lurus.",
              stimulusKemenag: "Salat adalah tiang agama yang mencegah perbuatan keji dan munkar serta mendidik kita hidup disiplin waktu.",
              masalahNyata: "Mengapa gerakan dalam salat harus dilakukan dengan tenang (tumaninah) dan tidak terburu-buru?",
              kegiatanEksplorasi: [
                "Peragaan gerakan salat satu per satu di depan kelas.",
                "Simulasi salat berjamaah dan mengenal posisi imam serta makmum.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi", teks: "Evaluasilah apakah salat seseorang sah jika saat sujud dahinya tidak menyentuh sajadah karena tertutup peci?" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Mendemonstrasikan gerakan salat fardhu",
                  baru: "Masih bingung membedakan posisi ruku' dan sujud.",
                  layak: "Mampu menirukan gerakan salat dari takbir sampai salam.",
                  cakap: "Mampu mempraktikkan gerakan salat dengan urut, tertib, dan tumaninah.",
                  mahir: "Mampu melafalkan bacaan takbir, ruku', sujud, dan doa tahiyyat dengan baik.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah nama-nama salat fardhu 5 waktu beserta jumlah rakaatnya yang BENAR? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Salat Subuh: 2 rakaat.", isCorrect: true },
                  { kode: "B", teks: "Salat Zuhur: 4 rakaat.", isCorrect: true },
                  { kode: "C", teks: "Salat Maghrib: 3 rakaat.", isCorrect: true },
                  { kode: "D", teks: "Salat Isya: 5 rakaat.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Subuh (2), Zuhur (4), Asar (4), Maghrib (3), Isya (4). Isya 4 rakaat.",
              },
              soalUraian: {
                level: "C4 (Urutan Ibadah)",
                pertanyaan: "Sebutkan urutan 4 gerakan awal dalam salat dimulai dari berdiri tegak menghadap kiblat!",
                kunci: "1. Berdiri tegak dan berniat. 2. Mengangkat kedua tangan sambil mengucap Takbiratul Ihram ('Allahu Akbar'). 3. Bersedekap di atas dada. 4. Ruku' dengan membungkukkan badan dan kedua tangan memegang lutut.",
                pembahasan: "Urutan gerakan salat dasar.",
                rubrik: [
                  { kriteria: "Menyebutkan niat dan takbiratul ihram", skor: 10 },
                  { kriteria: "Menyebutkan bersedekap dan ruku'", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 2. Pendidikan Agama Kristen dan Budi Pekerti (Fase A)
  {
    fase: "Fase A",
    kelasDefault: "Kelas I",
    mapel: "Pendidikan Agama Kristen dan Budi Pekerti",
    jalurApplicable: ["Dinas"],
    elemenList: [
      {
        namaElemen: "Allah Berkarya",
        deskripsiCP:
          "Memahami Allah menciptakan dirinya sebagai pribadi yang istimewa, anggota keluarga, teman, serta alam semesta sekitarnya yang indah.",
        kompetensiKKO: "Memahami, Mensyukuri, Menjaga",
        lingkupMateri: "Allah Pencipta Diriku, Keluarga Anugerah Tuhan, Alam Ciptaan Tuhan",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Mensyukuri dirinya sebagai ciptaan Allah yang unik dan istimewa serta merawat anggota tubuh yang diberikan Tuhan dengan penuh tanggung jawab.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Mengenal anggota tubuh sendiri",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kemandirian", "Kesehatan"],
            dimensiKarakterKemenag: ["Cinta Allah", "Cinta Diri"],
            konteksPembelajaran: {
              stimulus: "Tuhan menciptakan setiap anak dengan wajah, senyum, dan bakat yang unik serta mata yang indah untuk melihat kebaikan.",
              masalahNyata: "Bagaimana cara kita menggunakan mata, tangan, dan mulut kita untuk memuliakan Tuhan?",
              kegiatanEksplorasi: [
                "Menggambar potret diri dan menuliskan hal yang disyukuri dari tubuhnya.",
                "Bernyanyi lagu 'Hati-hati Gunakan Matamu'.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Analisislah mengapa setiap manusia diciptakan berbeda-beda namun semuanya berharga di mata Tuhan!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Mensyukuri dan merawat tubuh ciptaan Tuhan",
                  baru: "Menyebutkan anggota tubuh dengan bimbingan.",
                  layak: "Mampu menyebutkan kegunaan mata dan tangan untuk hal baik.",
                  cakap: "Mampu menjelaskan bahwa dirinya istimewa dan merawat kebersihan tubuh.",
                  mahir: "Mampu menunjukkan sikap percaya diri dan saling menghargai ciptaan Tuhan.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah perbuatan yang menggunakan anggota tubuh untuk memuliakan Tuhan? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Mulut digunakan untuk berkata jujur dan memuji Tuhan.", isCorrect: true },
                  { kode: "B", teks: "Tangan digunakan untuk menolong teman yang terjatuh.", isCorrect: true },
                  { kode: "C", teks: "Kaki digunakan untuk menendang barang milik orang lain.", isCorrect: false },
                  { kode: "D", teks: "Telinga digunakan untuk mendengarkan nasihat orang tua.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "Menggunakan tubuh untuk berbuat kasih dan kebajikan mencerminkan rasa syukur atas karya ciptaan Tuhan.",
              },
              soalUraian: {
                level: "C4 (Refleksi)",
                pertanyaan: "Tuliskan 2 cara bersyukur kepada Tuhan atas anugerah keluarga di rumah!",
                kunci: "1. Menghormati dan mematuhi nasihat ayah dan ibu. 2. Rukun dan saling menyayangi bersama kakak dan adik.",
                pembahasan: "Keluarga adalah persekutuan kasih anugerah Allah.",
                rubrik: [
                  { kriteria: "Menyebutkan sikap patuh pada orang tua", skor: 10 },
                  { kriteria: "Menyebutkan sikap rukun bersama saudara", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Manusia dan Nilai-nilai Kristiani",
        deskripsiCP:
          "Menerapkan kasih kepada sesama manusia, hidup rukun di keluarga dan sekolah, serta suka menolong.",
        kompetensiKKO: "Menerapkan Kasih, Hidup Rukun, Suka Menolong",
        lingkupMateri: "Hukum Kasih, Kerukunan di Sekolah, Berbagi dan Memaafkan",
        tpList: [
          {
            kodeTP: "TP.02",
            teksTP:
              "Menerapkan hukum kasih dengan bersikap ramah, suka menolong, memaafkan teman, dan hidup rukun di lingkungan rumah maupun sekolah.",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "TP.01 - Memahami kasih Allah",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kolaborasi", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Kasih", "Cinta Damai"],
            konteksPembelajaran: {
              stimulus: "Kisah Orang Samaria yang Baik Hati mengajarkan kita menolong sesama yang terluka tanpa memandang latar belakangnya.",
              masalahNyata: "Bagaimana cara kita memaafkan teman yang tidak sengaja merusak mainan kita?",
              kegiatanEksplorasi: [
                "Bermain peran kisah Orang Samaria yang Murah Hati.",
                "Membuat kartu kasih bertuliskan 'Tuhan Mengasihi Kita Semua'.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi", teks: "Evaluasilah mengapa kita harus mau mengampuni teman yang bersalah kepada kita!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menerapkan nilai kasih Kristiani",
                  baru: "Masih membalas jika diganggu teman.",
                  layak: "Mampu menceritakan kisah orang Samaria.",
                  cakap: "Mampu mempraktikkan sikap memaafkan dan suka menolong teman di kelas.",
                  mahir: "Mampu menjadi teladan perdamaian dan kerukunan bagi teman-temannya.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah tindakan yang mencerminkan HUKUM KASIH dalam kehidupan sehari-hari? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Berbagi bekal makanan dengan teman yang tidak membawa sarapan.", isCorrect: true },
                  { kode: "B", teks: "Memaafkan teman yang meminta maaf dengan tulus.", isCorrect: true },
                  { kode: "C", teks: "Menyimpan dendam dan tidak mau bertegur sapa.", isCorrect: false },
                  { kode: "D", teks: "Mendoakan teman yang sedang terbaring sakit.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "Kasih diwujudkan melalui berbagi, mengampuni, dan mendoakan.",
              },
              soalUraian: {
                level: "C4 (Penerapan Kasih)",
                pertanyaan: "Apa yang diajarkan oleh Tuhan Yesus tentang bagaimana kita harus memperlakukan teman-teman kita di sekolah?",
                kunci: "Tuhan Yesus mengajarkan kita untuk saling mengasihi sesama seperti mengasihi diri sendiri, saling menolong, rendah hati, dan saling mengampuni kesalahan.",
                pembahasan: "Prinsip dasar moralitas Kristiani.",
                rubrik: [
                  { kriteria: "Menjelaskan kasih seperti mengasihi diri sendiri", skor: 10 },
                  { kriteria: "Menjelaskan sikap mengampuni dan menolong", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 3. Pendidikan Agama Katolik dan Budi Pekerti (Fase A)
  {
    fase: "Fase A",
    kelasDefault: "Kelas I",
    mapel: "Pendidikan Agama Katolik dan Budi Pekerti",
    jalurApplicable: ["Dinas"],
    elemenList: [
      {
        namaElemen: "Pribadi Peserta Didik dan Yesus Kristus",
        deskripsiCP:
          "Mengenal diri sebagai pribadi yang dikasihi Allah, mengenal kisah masa kanak-kanak Yesus, dan membiasakan berdoa Bapa Kami dan Salam Maria.",
        kompetensiKKO: "Mengenal Diri, Mengenal Yesus, Berdoa",
        lingkupMateri: "Diriku Berharga di Mata Allah, Masa Kanak-kanak Yesus, Doa Bapa Kami & Tanda Salib",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Mengenal diri sebagai citra Allah yang berharga, mengenal kisah kelahiran dan masa kanak-kanak Yesus Kristus, serta membuat Tanda Salib dan mendaraskan Doa Bapa Kami dengan khidmat.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Mengenal simbol Tanda Salib",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Allah", "Cinta Kasih"],
            konteksPembelajaran: {
              stimulus: "Yesus lahir di kandang Betlehem dalam kesederhanaan, dikelilingi gembala dan para malaikat yang bernyanyi 'Kemuliaan bagi Allah di tempat yang mahatinggi'.",
              masalahNyata: "Mengapa kita membuat Tanda Salib sebelum dan sesudah berdoa?",
              kegiatanEksplorasi: [
                "Praktik membuat Tanda Salib: 'Dalam nama Bapa, dan Putra, dan Roh Kudus. Amin'.",
                "Mewarnai gambar Gua Natal dan kelahiran Bayi Yesus.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Analisislah keteladanan yang dapat kita tiru dari masa kanak-kanak Yesus yang patuh kepada Bunda Maria dan Santo Yosef di Nazaret!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Membuat Tanda Salib dan mendaraskan doa",
                  baru: "Tanda salat terbalik posisi tangan kanannya.",
                  layak: "Mampu mendaraskan Doa Bapa Kami.",
                  cakap: "Mampu membuat Tanda Salib dengan benar dan menceritakan kisah kanak-kanak Yesus.",
                  mahir: "Mampu memimpin doa pembuka di kelas dengan sikap tubuh liturgis yang sopan.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah doa-doa dasar yang didaraskan oleh umat Katolik? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Doa Bapa Kami (yang diajarkan oleh Tuhan Yesus).", isCorrect: true },
                  { kode: "B", teks: "Doa Salam Maria.", isCorrect: true },
                  { kode: "C", teks: "Doa Kemuliaan kepada Bapa, Putra, dan Roh Kudus.", isCorrect: true },
                  { kode: "D", teks: "Membaca mantra sihir.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Bapa Kami, Salam Maria, dan Kemuliaan adalah doa-doa harian umat Katolik.",
              },
              soalUraian: {
                level: "C4 (Doa Liturgis)",
                pertanyaan: "Bagaimana urutan membuat Tanda Salib menggunakan tangan kanan?",
                kunci: "Tangan kanan menyentuh dahi ('Dalam nama Bapa'), menyentuh dada ('dan Putra'), menyentuh bahu kiri ke bahu kanan ('dan Roh Kudus'), lalu mengatupkan kedua tangan di depan dada ('Amin').",
                pembahasan: "Tata gerak liturgi Tanda Salib.",
                rubrik: [
                  { kriteria: "Menyebutkan dahi, dada, bahu kiri ke kanan", skor: 10 },
                  { kriteria: "Menyebutkan lafal trinitas dan amin", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 4. Pendidikan Agama Hindu dan Budi Pekerti (Fase A)
  {
    fase: "Fase A",
    kelasDefault: "Kelas I",
    mapel: "Pendidikan Agama Hindu dan Budi Pekerti",
    jalurApplicable: ["Dinas"],
    elemenList: [
      {
        namaElemen: "Sradha dan Bhakti",
        deskripsiCP:
          "Mengenal Hyang Widhi Wasa sebagai pencipta alam semesta, Tri Murti (Brahma, Wisnu, Siwa), serta Tri Kaya Parisudha.",
        kompetensiKKO: "Mengenal, Menghayati, Melaksanakan",
        lingkupMateri: "Hyang Widhi Wasa, Tri Murti, Tri Kaya Parisudha (Pikiran, Perkataan, Perbuatan Baik)",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Mengenal kemahakuasaan Sang Hyang Widhi Wasa sebagai Tri Murti dan menerapkan ajaran Tri Kaya Parisudha (berpikir yang baik, berkata yang benar, dan berbuat yang bajik) dalam keseharian.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Mengenal salam panganjali 'Om Swastyastu'",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Penalaran Kritis", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Tuhan", "Cinta Kebaikan"],
            konteksPembelajaran: {
              stimulus: "Mengucapkan salam 'Om Swastyastu' dengan cakupan tangan di depan dada mengajarkan kita mendoakan keselamatan bagi sesama ciptaan Hyang Widhi.",
              masalahNyata: "Bagaimana cara kita menjaga perkataan agar selalu sesuai dengan ajaran Wacika Parisudha?",
              kegiatanEksplorasi: [
                "Melafalkan mantram Gayatri dan Dainika Upasana.",
                "Membuat tabel pengamalan Tri Kaya Parisudha di rumah.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Analisislah tugas kemahakuasaan Dewa Brahma, Dewa Wisnu, dan Dewa Siwa dalam memelihara keseimbangan alam semesta!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Memahami Tri Murti dan Tri Kaya Parisudha",
                  baru: "Menyebutkan bagian Tri Kaya Parisudha terbata-bata.",
                  layak: "Mampu menyebutkan arti Tri Kaya Parisudha.",
                  cakap: "Mampu membedakan Manacika (pikiran), Wacika (perkataan), dan Kayika (perbuatan) serta melaksanakannya.",
                  mahir: "Mampu menerapkan sikap santun dan hening saat melaksanakan persembahyangan.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah pasangan nama Dewa Tri Murti dan fungsinya yang BENAR? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Dewa Brahma sebagai pencipta (Utpatti) alam semesta.", isCorrect: true },
                  { kode: "B", teks: "Dewa Wisnu sebagai pemelihara (Sthiti) seluruh ciptaan.", isCorrect: true },
                  { kode: "C", teks: "Dewa Siwa sebagai pelebur/pengembali (Pralina) ke asalnya.", isCorrect: true },
                  { kode: "D", teks: "Dewa Brahma sebagai perusak alam.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Tri Murti terdiri dari Brahma (pencipta), Wisnu (pemelihara), dan Siwa (pelebur).",
              },
              soalUraian: {
                level: "C4 (Tri Kaya Parisudha)",
                pertanyaan: "Sebutkan dan jelaskan 3 bagian dari ajaran Tri Kaya Parisudha!",
                kunci: "1. Manacika Parisudha: berpikir yang baik dan suci. 2. Wacika Parisudha: berkata yang sopan dan benar (tidak berbohong). 3. Kayika Parisudha: berbuat dan bertindak yang jujur serta menolong sesama.",
                pembahasan: "Etika moral dasar dalam ajaran Hindu.",
                rubrik: [
                  { kriteria: "Menyebutkan Manacika dan Wacika beserta artinya", skor: 10 },
                  { kriteria: "Menyebutkan Kayika beserta artinya", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 5. Pendidikan Agama Buddha dan Budi Pekerti (Fase A)
  {
    fase: "Fase A",
    kelasDefault: "Kelas I",
    mapel: "Pendidikan Agama Buddha dan Budi Pekerti",
    jalurApplicable: ["Dinas"],
    elemenList: [
      {
        namaElemen: "Sejarah dan Sila",
        deskripsiCP:
          "Mengenal kisah masa kanak-kanak Pangeran Siddhartha, tempat suci agama Buddha, serta mempraktikkan Pancasila Buddhis.",
        kompetensiKKO: "Mengenal, Meneladani, Mempraktikkan Sila",
        lingkupMateri: "Kelahiran Pangeran Siddhartha, Pancasila Buddhis (Moralitas), Berdana dan Kasih Sayang",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Mengenal peristiwa kelahiran Pangeran Siddhartha dan meneladani sifat cinta kasih (Metta) serta mempraktikkan sila tidak menyakiti makhluk hidup dan tidak berbohong.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Mengenal salam buddhis 'Namo Buddhaya'",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kemandirian", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Kasih", "Cinta Kebaikan"],
            konteksPembelajaran: {
              stimulus: "Pangeran Siddhartha kecil menolong burung angsa yang terluka terkena panah dengan penuh kelembutan dan mengobatinya sampai sembuh.",
              masalahNyata: "Mengapa kita tidak boleh menginjak semut atau menyakiti hewan di sekitar kita dengan sengaja?",
              kegiatanEksplorasi: [
                "Mendengarkan kisah Pangeran Siddhartha menolong angsa.",
                "Praktik duduk hening meditasi pernapasan (Anapanasati sederhana).",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Analisislah mengapa Pangeran Siddhartha lebih berhak memiliki angsa tersebut dibandingkan Pangeran Devadatta yang memanahnya!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Meneladani cinta kasih Pangeran Siddhartha",
                  baru: "Mengetahui nama Pangeran Siddhartha.",
                  layak: "Mampu menceritakan kisah pertolongan pada angsa.",
                  cakap: "Mampu mempraktikkan sila tidak menyakiti hewan dan berbicara jujur.",
                  mahir: "Mampu bermeditasi hening dengan tenang dan memiliki empati tinggi.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah perbuatan yang sesuai dengan ajaran PANCASILA BUDDHIS? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Menyayangi semua hewan dan tidak menyiksanya.", isCorrect: true },
                  { kode: "B", teks: "Tidak mengambil barang yang bukan milik kita.", isCorrect: true },
                  { kode: "C", teks: "Selalu berbicara jujur dan tidak berdusta.", isCorrect: true },
                  { kode: "D", teks: "Merusak sarang burung di pohon sekolah.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Sila pertama (tidak membunuh/menyakiti), kedua (tidak mencuri), dan keempat (tidak berdusta).",
              },
              soalUraian: {
                level: "C4 (Kisah Inspiratif)",
                pertanyaan: "Ceritakan apa yang dilakukan Pangeran Siddhartha saat melihat seekor angsa putih jatuh terkena panah pemburu!",
                kunci: "Pangeran Siddhartha segera memangku angsa tersebut, mencabut anak panah dengan hati-hati, membalut lukanya dengan obat tanaman herbal, memberinya air minum, dan merawatnya hingga bisa terbang kembali.",
                pembahasan: "Wujud cinta kasih universal (Metta & Karuna).",
                rubrik: [
                  { kriteria: "Menceritakan tindakan mencabut panah dan mengobati", skor: 10 },
                  { kriteria: "Menjelaskan nilai kasih sayang tanpa kekerasan", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 6. Pendidikan Agama Khonghucu dan Budi Pekerti (Fase A)
  {
    fase: "Fase A",
    kelasDefault: "Kelas I",
    mapel: "Pendidikan Agama Khonghucu dan Budi Pekerti",
    jalurApplicable: ["Dinas"],
    elemenList: [
      {
        namaElemen: "Tian dan Karakter Mulia",
        deskripsiCP:
          "Mengenal Tian sebagai Pencipta, Nabi Kongzi, dan mempraktikkan sikap bakti (Xiao) kepada orang tua dan cinta kasih (Ren).",
        kompetensiKKO: "Mengenal, Menghormati, Mempraktikkan Bakti",
        lingkupMateri: "Tian Yang Maha Esa, Keteladanan Nabi Kongzi, Sikap Bakti (Xiao), Salam Wei De Dong Tian",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Mengenal Tian Yang Maha Esa, meneladani masa kecil Nabi Kongzi yang tekun belajar, serta mempraktikkan sikap bakti (Xiao) dan hormat (Li) kepada orang tua dan guru.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Mengenal salam 'Wei De Dong Tian - Xian You Yi De'",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kemandirian", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Tuhan", "Cinta Orang Tua"],
            konteksPembelajaran: {
              stimulus: "Nabi Kongzi sejak kecil gemar bermain meniru upacara persembahyangan dan sangat patuh melayani ibundanya dengan penuh kasih.",
              masalahNyata: "Bagaimana cara kita menunjukkan sikap bakti (Xiao) kepada orang tua di rumah setiap hari?",
              kegiatanEksplorasi: [
                "Praktik memberi hormat bersikap Bai (merangkapkan tangan di depan dada).",
                "Menceritakan kebiasaan membantu ayah dan ibu di rumah.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Analisislah mengapa sikap bakti kepada orang tua (Xiao) menjadi pokok utama dari semua kebajikan dalam ajaran Khonghucu!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Mempraktikkan sikap bakti dan hormat",
                  baru: "Mengetahui salam Khonghucu.",
                  layak: "Mampu merangkapkan tangan bersikap Bai.",
                  cakap: "Mampu menjelaskan makna sikap Xiao dan mematuhi nasihat orang tua.",
                  mahir: "Mampu menunjukkan budi pekerti luhur (Junzi) dalam bertutur kata dan bersikap.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah perbuatan yang mencerminkan SIKAP BAKTI (XIAO) kepada orang tua? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Mendengarkan dan mematuhi nasihat orang tua dengan tulus.", isCorrect: true },
                  { kode: "B", teks: "Membantu merapikan meja makan dan menjaga adik.", isCorrect: true },
                  { kode: "C", teks: "Membantah dan berbicara kasar saat dinasihati ibu.", isCorrect: false },
                  { kode: "D", teks: "Rajin belajar agar orang tua merasa bangga dan bahagia.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "Bakti diwujudkan melalui kepatuhan, bantuan nyata, dan prestasi belajar yang membanggakan.",
              },
              soalUraian: {
                level: "C4 (Sikap Bakti)",
                pertanyaan: "Jelaskan apa yang dimaksud dengan sikap 'Xiao' (Bakti) dan berikan contoh perbuatannya di sekolah terhadap guru!",
                kunci: "Sikap Xiao adalah rasa hormat, cinta, dan bakti yang tulus. Di sekolah terhadap guru dicontohkan dengan menyapa guru dengan salam hormat, memperhatikan pelajaran dengan tertib, dan mengerjakan tugas tepat waktu.",
                pembahasan: "Guru adalah orang tua kedua di sekolah yang wajib dihormati.",
                rubrik: [
                  { kriteria: "Menjelaskan arti Xiao (bakti dan hormat)", skor: 10 },
                  { kriteria: "Memberikan contoh sikap hormat kepada guru di sekolah", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 7. Al-Qur'an Hadis MI (Fase A - Kemenag)
  {
    fase: "Fase A",
    kelasDefault: "Kelas I",
    mapel: "Al-Qur'an Hadis",
    jalurApplicable: ["Kemenag"],
    elemenList: [
      {
        namaElemen: "Ilmu Tajwid & Surah Pendek",
        deskripsiCP:
          "Mengenal huruf hijaiyah tunggal dan bersambung sesuai makhraj dan harakat, membaca Surah Al-Fatihah, An-Nas, Al-Falaq, Al-Ikhlas, Al-Lahab, dan Al-Kafirun, serta memahami hadis kebersihan dan kasih sayang.",
        kompetensiKKO: "Mengenal, Melafalkan, Menghafal, Memahami",
        lingkupMateri: "Makharijul Huruf, Surah Al-Fatihah s.d. An-Nas, Hadis Kebersihan & Kasih Sayang",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Mengenal dan melafalkan huruf hijaiyah sesuai makhrajnya, membaca dan menghafal Surah Al-Fatihah, Al-Ikhlas, Al-Falaq, dan An-Nas secara tartil.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Mengenal huruf hijaiyah dasar",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Allah & Rasul-Nya", "Cinta Al-Qur'an", "PPRA: Berkeadaban"],
            konteksPembelajaran: {
              stimulus: "Siswa MI melafalkan Surah Al-Falaq dan An-Nas untuk memohon perlindungan kepada Allah dari segala kejahatan makhluk.",
              stimulusKemenag: "Al-Qur'an adalah pedoman hidup yang menyinari hati dan membimbing akhlak setiap muslim.",
              masalahNyata: "Mengapa kita dianjurkan membaca Surah Al-Falaq dan An-Nas sebelum tidur?",
              kegiatanEksplorasi: [
                "Talaqqi dan musyafahah pelafalan makhraj huruf bersama guru.",
                "Menghafal surah pendek dengan metode gerakan isyarat tangan.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Analisislah perbedaan pesan perlindungan dalam Surah Al-Falaq (dari kejahatan luar) dan Surah An-Nas (dari bisikan was-was setan)!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Membaca dan menghafal surah pendek",
                  baru: "Hafalan surah masih sering tertukar ayatnya.",
                  layak: "Mampu membaca Surah Al-Fatihah dan Al-Ikhlas.",
                  cakap: "Mampu menghafal lancar Surah Al-Falaq dan An-Nas dengan tajwid benar.",
                  mahir: "Mampu menjelaskan intisari pesan perlindungan kepada Allah SWT.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah surah-surah Al-Qur'an yang termasuk dalam 'Al-Mu'awwidzatain' (dua surah pemohon perlindungan)? (Pilih jawaban yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Surah Al-Falaq (Waktu Subuh).", isCorrect: true },
                  { kode: "B", teks: "Surah An-Nas (Manusia).", isCorrect: true },
                  { kode: "C", teks: "Surah Al-Kautsar.", isCorrect: false },
                  { kode: "D", teks: "Surah Al-Fil.", isCorrect: false },
                ],
                kunci: "A dan B",
                pembahasan: "Al-Mu'awwidzatain adalah sebutan untuk dua surah pelindung yaitu Al-Falaq dan An-Nas.",
              },
              soalUraian: {
                level: "C4 (Hadis Kebersihan)",
                pertanyaan: "Tuliskan bunyi hadis kebersihan yang diriwayatkan oleh Imam Muslim beserta artinya!",
                kunci: "Lafal: 'At-Thuhuuru syathrul iimaan'. Artinya: 'Kebersihan/kesucian itu adalah sebagian dari iman'.",
                pembahasan: "Pentingnya menjaga kebersihan raga dan lingkungan bagi muslim.",
                rubrik: [
                  { kriteria: "Menuliskan lafal hadis dengan benar", skor: 10 },
                  { kriteria: "Menuliskan arti hadis secara tepat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 8. Akidah Akhlak MI (Fase A - Kemenag)
  {
    fase: "Fase A",
    kelasDefault: "Kelas I",
    mapel: "Akidah Akhlak",
    jalurApplicable: ["Kemenag"],
    elemenList: [
      {
        namaElemen: "Kalimat Thayyibah & Asmaul Husna",
        deskripsiCP:
          "Membiasakan pengucapan kalimat thayyibah (Basmalah, Hamdalah, Ta'awwudz), mengenal Asmaul Husna (Ar-Rahman, Ar-Rahim, Al-Quddus), serta adab mandi, berpakaian, dan makan-minum.",
        kompetensiKKO: "Membiasakan, Mengenal, Mempraktikkan Adab",
        lingkupMateri: "Kalimat Thayyibah (Basmalah & Hamdalah), Asmaul Husna (Al-Quddus), Adab Harian Muslim",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Membiasakan mengucapkan kalimat thayyibah Basmalah dan Hamdalah pada setiap awal dan akhir aktivitas serta mempraktikkan adab makan-minum secara santun sesuai sunnah.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Mengenal ucapan bismillah",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Allah & Rasul-Nya", "PPRA: Berkeadaban (Ta'addub)", "Cinta Kebaikan"],
            konteksPembelajaran: {
              stimulus: "Sebelum menyuap nasi, Ahmad membaca 'Bismillah' dengan tangan kanan dalam posisi duduk yang tenang.",
              stimulusKemenag: "Setiap perkara baik yang diawali dengan Basmalah akan diberkahi oleh Allah SWT.",
              masalahNyata: "Mengapa kita tidak boleh makan atau minum sambil berdiri dan terburu-buru?",
              kegiatanEksplorasi: [
                "Simulasi adab makan bersama menggunakan tangan kanan dan berdoa.",
                "Membuat kaligrafi hias lafal Basmalah dan Hamdalah.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Analisislah manfaat mengucapkan 'Alhamdulillah' saat berhasil menyelesaikan tugas sekolah!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Membiasakan kalimat thayyibah dan adab makan",
                  baru: "Sering lupa membaca basmalah sebelum makan.",
                  layak: "Mampu melafalkan basmalah dan hamdalah.",
                  cakap: "Mampu mempraktikkan adab makan duduk dengan tangan kanan dan membaca doa sebelum/sesudah makan.",
                  mahir: "Mampu mengingatkan teman secara santun saat melihat teman makan sambil berdiri.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah adab makan dan minum yang diajarkan oleh Rasulullah SAW? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Membaca Basmalah sebelum mulai makan.", isCorrect: true },
                  { kode: "B", teks: "Makan dan minum menggunakan tangan kanan.", isCorrect: true },
                  { kode: "C", teks: "Makan dalam posisi duduk yang tenang.", isCorrect: true },
                  { kode: "D", teks: "Meniup makanan panas yang masih mengepul.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Rasulullah melarang meniup makanan panas dan menganjurkan makan duduk dengan tangan kanan serta membaca basmalah.",
              },
              soalUraian: {
                level: "C4 (Asmaul Husna Al-Quddus)",
                pertanyaan: "Jelaskan arti dari Asmaul Husna 'Al-Quddus' dan bagaimana cara kita meneladaninya dalam menjaga kebersihan badan dan hati!",
                kunci: "Al-Quddus artinya Allah Maha Suci dari segala kekurangan. Cara meneladaninya adalah dengan menjaga kebersihan tubuh, pakaian, dan tempat ibadah, serta menjaga hati dari sifat iri, dengki, dan sombong.",
                pembahasan: "Penghayatan sifat kesucian Allah.",
                rubrik: [
                  { kriteria: "Menjelaskan arti Al-Quddus (Maha Suci)", skor: 10 },
                  { kriteria: "Menjelaskan keteladanan menjaga kebersihan fisik dan hati", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 9. Fikih MI (Fase A - Kemenag)
  {
    fase: "Fase A",
    kelasDefault: "Kelas I",
    mapel: "Fikih",
    jalurApplicable: ["Kemenag"],
    elemenList: [
      {
        namaElemen: "Taharah dan Rukun Islam",
        deskripsiCP:
          "Mengenal rukun Islam, syahadatain, tata cara bersuci dari hadas dan najis (wudhu dan tayamum), serta tata cara salat fardhu.",
        kompetensiKKO: "Mengenal, Mempraktikkan Taharah, Mempraktikkan Salat",
        lingkupMateri: "Rukun Islam, Wudhu & Tayamum, Istinja', Gerakan Salat Fardhu",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Memahami rukun Islam, mempraktikkan adab buang hajat (istinja') yang bersih, dan mempraktikkan tata cara wudhu serta tayamum secara benar dan tertib.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Mengenal air mutlak untuk bersuci",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kemandirian", "Kesehatan"],
            dimensiKarakterKemenag: ["Cinta Ibadah", "Cinta Kesucian", "PPRA: Keteladanan"],
            konteksPembelajaran: {
              stimulus: "Siswa belajar doa masuk kamar mandi dengan mendahulukan kaki kiri dan membersihkan diri (istinja') hingga bersih sempurna.",
              stimulusKemenag: "Bersuci (taharah) adalah syarat sah ibadah salat agar salat kita diterima oleh Allah SWT.",
              masalahNyata: "Kapan seseorang diperbolehkan bersuci menggunakan debu bersih (tayamum)?",
              kegiatanEksplorasi: [
                "Praktik gerakan tayamum mengusap muka dan kedua belah tangan dengan debu suci.",
                "Simulasi urutan istinja' yang benar dan hemat air.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Analisislah syarat-syarat yang membolehkan seseorang melakukan tayamum sebagai pengganti wudhu!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Mempraktikkan taharah wudhu dan tayamum",
                  baru: "Masih membasuh tangan kiri saat tayamum tanpa urutan.",
                  layak: "Mampu menyebutkan urutan wudhu.",
                  cakap: "Mampu mempraktikkan wudhu dan tayamum secara runtut dan sempurna.",
                  mahir: "Mampu menjelaskan hal-hal yang membatalkan wudhu.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah hal-hal yang dapat MEMBATALKAN WUDHU? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Keluarnya sesuatu dari dua jalan (buang air kecil/besar/buang angin).", isCorrect: true },
                  { kode: "B", teks: "Tidur lelap dalam posisi berbaring.", isCorrect: true },
                  { kode: "C", teks: "Minum air putih segelas.", isCorrect: false },
                  { kode: "D", teks: "Hilang akal karena pingsan atau mabuk.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "Keluarnya hadas, tidur lelap berbaring, dan hilang akal membatalkan wudhu. Minum air tidak membatalkan wudhu.",
              },
              soalUraian: {
                level: "C4 (Tata Cara Tayamum)",
                pertanyaan: "Jelaskan langkah-langkah melakukan tayamum secara ringkas dan benar!",
                kunci: "1. Berniat tayamum. 2. Menepukkan kedua telapak tangan ke debu suci lalu meniupnya perlahan. 3. Mengusap seluruh wajah. 4. Menepukkan kembali tangan ke debu lalu mengusap kedua tangan sampai siku secara tertib.",
                pembahasan: "Rukun tayamum dalam fikih Islam.",
                rubrik: [
                  { kriteria: "Menyebutkan niat dan usap wajah", skor: 10 },
                  { kriteria: "Menyebutkan usap tangan hingga siku secara tertib", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 10. Bahasa Arab MI (Fase A - Kemenag)
  {
    fase: "Fase A",
    kelasDefault: "Kelas I",
    mapel: "Bahasa Arab",
    jalurApplicable: ["Kemenag"],
    elemenList: [
      {
        namaElemen: "Menyimak dan Berbicara Sederhana",
        deskripsiCP:
          "Mendengarkan komponen bahasa Arab (fonem, kata, ungkapan sapaan), menirukan ungkapan perkenalan (at-ta'aruf), peralatan sekolah (al-adawat al-madrasiyyah), dan angka 1-10 (al-arqam).",
        kompetensiKKO: "Mendengarkan, Menirukan, Melafalkan, Berbicara",
        lingkupMateri: "Perkenalan Diri (At-Ta'aruf), Perlengkapan Sekolah, Anggota Tubuh, Angka 1-10 Arab",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Mendengarkan dan menirukan ungkapan sapaan dan perkenalan diri (At-Ta'aruf) serta melafalkan kosa kata peralatan sekolah dalam bahasa Arab dengan intonasi yang fasih.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mengenal bunyi huruf hijaiyah",
            dimensiKarakterDinas: ["Komunikasi", "Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Bahasa Al-Qur'an", "Cinta Ilmu", "PPRA: Berkeadaban"],
            konteksPembelajaran: {
              stimulus: "Dua orang siswa saling menyapa di gerbang madrasah: 'Ahlan wa Sahlan' - 'Ahlan bika', 'Mas muka?' - 'Ismi Ahmad'.",
              stimulusKemenag: "Bahasa Arab adalah bahasa Al-Qur'an dan bahasa persaudaraan umat Islam sedunia.",
              masalahNyata: "Bagaimana cara kita menanyakan nama teman baru menggunakan bahasa Arab yang sopan?",
              kegiatanEksplorasi: [
                "Bermain dialog berpasangan perkenalan bahasa Arab.",
                "Menempel label kosa kata bahasa Arab pada meja, kursi, dan papan tulis.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Bandingkan penggunaan kata tanya 'Mas muka?' (untuk laki-laki) dan 'Mas muki?' (untuk perempuan)!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Melafalkan kosa kata dan sapaan bahasa Arab",
                  baru: "Masih malu melafalkan kosa kata bahasa Arab.",
                  layak: "Mampu merespons salam 'Ahlan wa Sahlan'.",
                  cakap: "Mampu melakukan percakapan perkenalan diri sederhana dan menyebutkan 5 nama alat sekolah dalam bahasa Arab.",
                  mahir: "Mampu menghitung angka 1-10 dalam bahasa Arab dengan lancar dan berlagu.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah pasangan kosa kata peralatan sekolah dalam bahasa Arab dan artinya yang BENAR? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "قَلَمٌ (Qalamun) = Pena / Pulpen.", isCorrect: true },
                  { kode: "B", teks: "كِتَابٌ (Kitaabun) = Buku.", isCorrect: true },
                  { kode: "C", teks: "مَكْتَبٌ (Maktabun) = Meja.", isCorrect: true },
                  { kode: "D", teks: "بَابٌ (Baabun) = Jendela.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Qalamun = pulpen, Kitaabun = buku, Maktabun = meja. Baabun artinya pintu (bukan jendela).",
              },
              soalUraian: {
                level: "C4 (Dialog Sederhana)",
                pertanyaan: "Tuliskan arti dalam bahasa Indonesia dari kalimat dialog bahasa Arab berikut:\n1. 'مَا اسْمُكَ؟' (Mas muka?)\n2. 'اسْمِي عُمَر' (Ismii 'Umar)!",
                kunci: "1. 'Siapa namamu (laki-laki)?'\n2. 'Namaku Umar'.",
                pembahasan: "Kosa kata perkenalan identitas dasar bahasa Arab.",
                rubrik: [
                  { kriteria: "Menerjemahkan kalimat tanya nomor 1 dengan tepat", skor: 10 },
                  { kriteria: "Menerjemahkan jawaban nomor 2 dengan tepat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },
];
