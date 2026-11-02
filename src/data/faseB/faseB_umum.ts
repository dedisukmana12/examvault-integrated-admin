// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import { CPDataset } from "../curriculumDatabase";

export const FASE_B_UMUM_DATASETS: CPDataset[] = [
  // 1. Pendidikan Pancasila (Fase B - Kelas III & IV SD/MI)
  {
    fase: "Fase B",
    kelasDefault: "Kelas IV",
    mapel: "Pendidikan Pancasila",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pancasila",
        deskripsiCP:
          "Mengidentifikasi makna sila-sila Pancasila dan penerapannya dalam kehidupan sehari-hari; mengenal karakter para perumus Pancasila; serta menunjukkan sikap bangga menjadi anak Indonesia yang memiliki bahasa Indonesia sebagai bahasa persatuan di lingkungan sekitar.",
        kompetensiKKO: "Mengidentifikasi, Menganalisis, Meneladani, Menerapkan",
        lingkupMateri: "Makna Sila 1-5 Pancasila, Keteladanan Tokoh Perumus Pancasila, Bahasa Indonesia sebagai Bahasa Persatuan",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Mengidentifikasi makna nilai-nilai yang terkandung dalam lima sila Pancasila dan menerapkannya dalam interaksi sosial di lingkungan keluarga, sekolah, dan masyarakat sekitar.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mengenal simbol dan sila-sila Pancasila",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kewargaan", "Penalaran Kritis"],
            dimensiKarakterKemenag: ["Cinta Allah & Rasul-Nya", "Cinta Tanah Air", "PPRA: Berkeadaban (Ta'addub)"],
            konteksPembelajaran: {
              stimulus: "Pohon beringin dengan akar tunjang yang kokoh dan sulur rimbun mencerminkan persatuan Indonesia yang menaungi keberagaman suku dan budaya di bumi Nusantara.",
              stimulusKemenag: "Kerukunan dan tolong-menolong antarsesama umat manusia adalah amanah ibadah yang mewujudkan rahmat bagi semesta alam.",
              masalahNyata: "Bagaimana cara kita menerapkan nilai kemanusiaan yang adil dan beradab saat melihat teman yang kesulitan membeli perlengkapan sekolah?",
              kegiatanEksplorasi: [
                "Menganalisis studi kasus pengamalan sila Pancasila dalam kehidupan warga kampung.",
                "Membuat peta konsep hubungan simbol sila dengan perilaku terpuji di sekolah.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Analisislah mengapa sikap membeda-bedakan teman berdasarkan asal daerah bertentangan dengan sila Persatuan Indonesia!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Mengidentifikasi dan menerapkan makna sila Pancasila",
                  baru: "Menyebutkan nama sila tanpa memahami nilai penerapannya.",
                  layak: "Mampu memberikan 1 contoh penerapan tiap sila.",
                  cakap: "Mampu menjelaskan makna kelima sila dan menerapkannya secara konsisten di kelas.",
                  mahir: "Mampu mengajak dan menginspirasi teman untuk mengamalkan nilai Pancasila dalam menyelesaikan perselisihan.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah perilaku yang mencerminkan pengamalan SILA KETIGA PANCASILA (Persatuan Indonesia) di lingkungan sekolah? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Bermain bersama seluruh teman tanpa memandang perbedaan suku dan agama.", isCorrect: true },
                  { kode: "B", teks: "Menggunakan bahasa Indonesia yang baik saat berkomunikasi dengan teman dari berbagai daerah.", isCorrect: true },
                  { kode: "C", teks: "Mengikuti upacara bendera hari Senin dengan tertib dan khidmat.", isCorrect: true },
                  { kode: "D", teks: "Hanya mau berteman dengan siswa yang berasal dari satu kampung saja.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Berteman tanpa sekat suku, berbahasa Indonesia, dan khidmat upacara adalah wujud nyata persatuan Indonesia.",
              },
              soalUraian: {
                level: "C4 (Analisis Nilai)",
                pertanyaan: "Jelaskan 3 karakter teladan dari para tokoh pendiri bangsa (seperti Ir. Soekarno, Drs. Mohammad Hatta, dan Mr. Mohammad Yamin) saat merumuskan dasar negara Pancasila!",
                kunci: "1. Mengutamakan kepentingan bangsa di atas kepentingan pribadi/golongan. 2. Berjiwa lapang dada dan menghargai perbedaan pendapat dalam musyawarah. 3. Memiliki rasa cinta tanah air (patriotisme) yang tinggi serta semangat pantang menyerah.",
                pembahasan: "Nilai keteladanan perumus Pancasila.",
                rubrik: [
                  { kriteria: "Menyebutkan sikap mengutamakan kepentingan bersama", skor: 7 },
                  { kriteria: "Menyebutkan sikap toleran dan menghargai musyawarah", skor: 7 },
                  { kriteria: "Menyebutkan rasa cinta tanah air dan patriotisme", skor: 6 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Undang-Undang Dasar Negara Republik Indonesia Tahun 1945",
        deskripsiCP:
          "Mengidentifikasi dan melaksanakan aturan di sekolah dan lingkungan tempat tinggal; serta mengidentifikasi dan menerapkan hak yang didapat dan kewajiban sebagai anggota keluarga dan sebagai warga sekolah.",
        kompetensiKKO: "Mengidentifikasi, Melaksanakan, Membedakan Hak & Kewajiban",
        lingkupMateri: "Norma & Aturan di Sekolah/Masyarakat, Hak dan Kewajiban Anak di Rumah & Sekolah",
        tpList: [
          {
            kodeTP: "TP.02",
            teksTP:
              "Mengidentifikasi dan membedakan hak serta kewajiban sebagai anggota keluarga dan warga sekolah serta melaksanakan aturan tata tertib dengan penuh tanggung jawab.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mengenal aturan dasar di rumah dan kelas",
            dimensiKarakterDinas: ["Kemandirian", "Kewargaan", "Penalaran Kritis"],
            dimensiKarakterKemenag: ["Cinta Diri & Sesama", "PPRA: Berkeadaban (Ta'addub)"],
            konteksPembelajaran: {
              stimulus: "Jadwal piket kebersihan kelas dilaksanakan bersama secara bergiliran agar ruang belajar selalu nyaman, rapi, dan sehat.",
              stimulusKemenag: "Menunaikan kewajiban sebelum menuntut hak adalah akhlak terpuji yang mencerminkan pribadi amanah dan berdisiplin tinggi.",
              masalahNyata: "Apa akibatnya bagi suasana belajar di kelas jika ada siswa yang menuntut hak belajar nyaman tetapi menolak melaksanakan kewajiban piket?",
              kegiatanEksplorasi: [
                "Membuat tabel perbandingan Hak dan Kewajiban di rumah versus di sekolah.",
                "Simulasi penyusunan kesepakatan kelas yang adil dan demokratis.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi", teks: "Evaluasilah hubungan sebab-akibat antara pemenuhan kewajiban menjaga fasilitas sekolah dengan perolehan hak belajar yang nyaman!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Membedakan dan melaksanakan hak serta kewajiban",
                  baru: "Sering menuntut hak tanpa mau menjalankan tugas kewajiban.",
                  layak: "Mampu menyebutkan 3 hak dan 3 kewajiban warga sekolah.",
                  cakap: "Mampu menjalankan kewajiban piket dan tata tertib secara mandiri tanpa harus ditegur.",
                  mahir: "Mampu menjadi teladan disiplin dan mengedukasi teman sebaya tentang pentingnya keseimbangan hak dan kewajiban.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah yang merupakan contoh KEWAJIBAN siswa sebagai warga sekolah? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Mendengarkan penjelasan guru saat proses pembelajaran dengan seksama.", isCorrect: true },
                  { kode: "B", teks: "Menjaga kebersihan dan merawat fasilitas perpustakaan serta ruang kelas.", isCorrect: true },
                  { kode: "C", teks: "Mendapatkan bimbingan dan pengajaran dari guru.", isCorrect: false },
                  { kode: "D", teks: "Memakai seragam sekolah sesuai jadwal dengan rapi dan bersepatu hitam.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "A, B, dan D adalah kewajiban. Pilihan C adalah hak murid mendapatkan bimbingan.",
              },
              soalUraian: {
                level: "C4 (Keseimbangan Hak dan Kewajiban)",
                pertanyaan: "Jelaskan mengapa pelaksanaan kewajiban harus didahulukan daripada penuntutan hak dalam kehidupan sehari-hari!",
                kunci: "Kewajiban harus didahulukan karena hak seseorang baru dapat terpenuhi dengan baik jika semua orang telah menjalankan tanggung jawab dan kewajibannya masing-masing. Jika semua menuntut hak tanpa kewajiban, akan timbul kekacauan dan ketidakadilan.",
                pembahasan: "Prinsip etika hukum dan moral pemenuhan hak & kewajiban.",
                rubrik: [
                  { kriteria: "Menjelaskan hak orang lain bergantung pada kewajiban kita", skor: 10 },
                  { kriteria: "Menjelaskan dampak ketidaktertiban jika kewajiban diabaikan", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Bhinneka Tunggal Ika",
        deskripsiCP:
          "Membedakan dan menghargai identitas, keluarga, dan teman-temannya sesuai budaya, suku bangsa, bahasa, agama, dan kepercayaannya di lingkungan sekitar.",
        kompetensiKKO: "Membedakan, Menghargai, Membangun Toleransi",
        lingkupMateri: "Keberagaman Suku, Budaya, Agama, Bahasa Daerah, dan Sikap Toleransi",
        tpList: [
          {
            kodeTP: "TP.03",
            teksTP:
              "Mengidentifikasi keragaman suku bangsa, bahasa, rumah adat, serta agama di lingkungan sekitar dan menunjukkan sikap toleransi menghargai perbedaan.",
            alokasiJP: 6,
            semester: "GENAP",
            prasyarat: "Mengenal identitas diri dan teman sebaya",
            dimensiKarakterDinas: ["Kewargaan", "Kolaborasi", "Komunikasi"],
            dimensiKarakterKemenag: ["Cinta Sesama & Tanah Air", "PPRA: Toleransi (Tasamuh)", "PPRA: Dinamis (Tathawwur)"],
            konteksPembelajaran: {
              stimulus: "Pameran festival budaya mini di sekolah menampilkan pakaian adat dari berbagai daerah (Jawa, Sunda, Minang, Dayak, Bugis, Papua) dan makanan khas nusantara.",
              stimulusKemenag: "Allah menciptakan manusia bersuku-suku dan berbangsa-bangsa agar saling mengenal, berkasih sayang, dan tolong-menolong.",
              masalahNyata: "Bagaimana cara kita menunjukkan sikap menghargai saat teman yang berbeda agama sedang merayakan hari raya keagamaannya?",
              kegiatanEksplorasi: [
                "Wawancara teman sekelas tentang asal suku, makanan tradisional favorit, dan bahasa daerah keluarga.",
                "Membuat poster kampanye 'Indahnya Keberagaman dalam Bingkai Bhinneka Tunggal Ika'.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Analisislah bagaimana keberagaman budaya dan adat istiadat dapat memperkaya khazanah bangsa Indonesia dan bukan menjadi pemecah belah!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menghargai keberagaman suku, budaya, dan agama",
                  baru: "Menertawakan logat bahasa atau busana adat teman yang berbeda.",
                  layak: "Mengenal nama-nama suku dan agama resmi di Indonesia.",
                  cakap: "Mampu berinteraksi akrab dan menghormati tradisi teman yang berbeda latar belakang.",
                  mahir: "Mampu menginisiasi kerja sama lintas budaya dan aktif merawat toleransi di sekolah.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah sikap yang menunjukkan PENGHARGAAN TERHADAP KEBERAGAMAN BUDAYA di Indonesia? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Mencicipi dan mengapresiasi makanan tradisional dari berbagai daerah.", isCorrect: true },
                  { kode: "B", teks: "Memberikan ucapan selamat dengan tulus saat teman merayakan hari raya agamanya.", isCorrect: true },
                  { kode: "C", teks: "Meremehkan tarian adat dari daerah lain karena dianggap kuno.", isCorrect: false },
                  { kode: "D", teks: "Mempelajari lagu-lagu daerah nusantara dengan penuh semangat.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "Mencicipi kuliner daerah, mengucapkan selamat hari raya, dan belajar lagu daerah adalah cerminan toleransi budaya.",
              },
              soalUraian: {
                level: "C4 (Studi Kasus Keberagaman)",
                pertanyaan: "Di kelas 4 terdapat murid dari suku Jawa, Batak, Sunda, dan Bugis. Saat jam istirahat, Doni mengejek logat bicara temannya. Apa saran dan tindakan solutif yang tepat untuk menyelesaikan masalah tersebut?",
                kunci: "Mengingatkan Doni secara santun bahwa perbedaan logat adalah kekayaan budaya bangsa yang harus dihormati sesuai semboyan Bhinneka Tunggal Ika. Mengajak seluruh teman saling belajar kosa kata daerah masing-masing agar tercipta suasana kelas yang rukun dan harmonis.",
                pembahasan: "Solusi resolusi konflik keberagaman di kelas.",
                rubrik: [
                  { kriteria: "Menyampaikan teguran santun berlandaskan Bhinneka Tunggal Ika", skor: 10 },
                  { kriteria: "Memberikan solusi kolaboratif saling mengenal budaya", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Negara Kesatuan Republik Indonesia",
        deskripsiCP:
          "Mengidentifikasi lingkungan tempat tinggal (RT, RW, desa atau kelurahan, dan kecamatan) sebagai bagian dari wilayah NKRI; serta menunjukkan perilaku bekerja sama dalam berbagai bentuk keberagaman suku bangsa, sosial, dan budaya di Indonesia yang terikat persatuan dan kesatuan di lingkungan sekitar.",
        kompetensiKKO: "Mengidentifikasi Wilayah, Bekerja Sama, Memperkokoh NKRI",
        lingkupMateri: "Struktur Wilayah Administrasi (RT, RW, Desa/Kelurahan, Kecamatan), Gotong Royong Warga",
        tpList: [
          {
            kodeTP: "TP.04",
            teksTP:
              "Mengidentifikasi susunan wilayah tempat tinggal (RT, RW, Desa/Kelurahan, Kecamatan) sebagai bagian utuh NKRI serta berpartisipasi aktif dalam kegiatan kerja sama warga sekitar.",
            alokasiJP: 6,
            semester: "GENAP",
            prasyarat: "TP.03 - Memahami keberagaman suku bangsa",
            dimensiKarakterDinas: ["Kewargaan", "Kolaborasi", "Penalaran Kritis"],
            dimensiKarakterKemenag: ["Cinta Tanah Air (Hubbul Wathan)", "PPRA: Keteladanan (Qudwah)"],
            konteksPembelajaran: {
              stimulus: "Peta wilayah kecamatan memperlihatkan batas-batas desa dan kelurahan yang dihubungkan oleh jalan, sungai, dan fasilitas pelayanan publik warga.",
              stimulusKemenag: "Cinta tanah air adalah bagian dari iman; menjaga kerukunan dan kebersihan lingkungan tempat tinggal adalah pengabdian yang mulia.",
              masalahNyata: "Mengapa gotong royong warga di tingkat RT/RW sangat penting untuk menjaga keamanan dan kebersihan lingkungan bersama?",
              kegiatanEksplorasi: [
                "Membuat denah susunan lingkungan tempat tinggal dari rumah ke kantor kelurahan/desa.",
                "Mengamati kegiatan posyandu, siskamling, dan kerja bakti di lingkungan sekitar.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Analisislah fungsi struktur pemerintahan desa/kelurahan dalam melayani kebutuhan administrasi dan kesejahteraan warga masyarakat!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Memahami struktur wilayah dan kerja sama warga",
                  baru: "Belum mengetahui nama RT, RW, atau desa tempat tinggalnya.",
                  layak: "Mampu menyebutkan urutan wilayah dari RT hingga Kecamatan.",
                  cakap: "Mampu menjelaskan tugas pokok kepala desa/lurah dan ikut serta dalam kegiatan bakti lingkungan.",
                  mahir: "Mampu membuat peta tematik fasilitas publik di lingkungan kelurahan dan menggerakkan aksi peduli sampah.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah urutan tingkatan struktur pemerintahan wilayah dari yang PALING KECIL hingga yang LEBIH LUAS yang benar? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Rukun Tetangga (RT) → Rukun Warga (RW) → Desa/Kelurahan → Kecamatan.", isCorrect: true },
                  { kode: "B", teks: "Desa dipimpin oleh Kepala Desa, sedangkan Kelurahan dipimpin oleh seorang Lurah.", isCorrect: true },
                  { kode: "C", teks: "Kecamatan adalah gabungan dari beberapa kabupaten/kota.", isCorrect: false },
                  { kode: "D", teks: "Beberapa RT bergabung membentuk satu Rukun Warga (RW).", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "A, B, D benar. C salah karena beberapa desa/kelurahan membentuk kecamatan, bukan kabupaten.",
              },
              soalUraian: {
                level: "C4 (Struktur Pemerintahan)",
                pertanyaan: "Sebutkan 3 contoh kegiatan kerja sama (gotong royong) yang biasa dilakukan warga di tingkat RT/RW dan jelaskan manfaatnya bagi persatuan warga!",
                kunci: "1. Kerja bakti membersihkan saluran air/selokan (mencegah banjir dan sarang nyamuk). 2. Ronda malam / Siskamling (menjaga keamanan kampung). 3. Membantu tetangga yang sedang mengadakan hajatan atau terkena musibah (meringankan beban dan mempererat silaturahmi).",
                pembahasan: "Bentuk gotong royong dan nilai kohesi sosial di masyarakat.",
                rubrik: [
                  { kriteria: "Menyebutkan 3 contoh kegiatan gotong royong nyata", skor: 10 },
                  { kriteria: "Menjelaskan manfaat bagi persatuan dan kebersihan lingkungan", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 2. Bahasa Indonesia (Fase B - Kelas III & IV SD/MI)
  {
    fase: "Fase B",
    kelasDefault: "Kelas IV",
    mapel: "Bahasa Indonesia",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Menyimak",
        deskripsiCP:
          "Memahami ide pokok suatu informasi dari teks nonsastra berbentuk teks aural (teks yang dibacakan dan/atau didengarkan); serta memahami isi teks sastra berbentuk teks aural.",
        kompetensiKKO: "Menyimak, Mengidentifikasi Ide Pokok, Menafsirkan",
        lingkupMateri: "Ide Pokok Teks Aural Nonsastra, Makna Cerita Fabel/Dongeng Aural",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menyimak dengan konsentrasi untuk mengidentifikasi ide pokok, ide pendukung, dan pesan moral dari teks eksplanasi dan teks sastra yang dibacakan guru atau media audio.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mampu menyimak cerita pendek",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian", "Komunikasi"],
            dimensiKarakterKemenag: ["Cinta Ilmu Pengetahuan", "PPRA: Keteladanan (Qudwah)"],
            konteksPembelajaran: {
              stimulus: "Rekaman siniar (podcast) anak tentang 'Petualangan Menyelamatkan Hutan Mangrove dari Sampah Plastik' diperdengarkan di depan kelas.",
              stimulusKemenag: "Mendengarkan dengan penuh perhatian adalah adab thalabul ilmi yang melatih kepekaan hati dan ketajaman akal pikiran.",
              masalahNyata: "Bagaimana cara mencatat informasi penting saat mendengarkan penjelasan berita tanpa tertinggal alur ceritanya?",
              kegiatanEksplorasi: [
                "Mencatat kata kunci dengan teknik 5W1H (Apa, Siapa, Di mana, Kapan, Mengapa, Bagaimana) dari teks yang dibacakan.",
                "Mendiskusikan pesan moral cerita rakyat nusantara hasil rekaman audio.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Analisislah perbedaan antara gagasan utama (ide pokok) dengan kalimat pengembang (ide pendukung) dalam teks yang kamu dengar!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menyimak dan menemukan ide pokok teks aural",
                  baru: "Hanya mengingat 1 kata tanpa mampu merangkum alur informasi.",
                  layak: "Mampu menyebutkan tokoh utama dan peristiwa pokok.",
                  cakap: "Mampu menuliskan ide pokok paragraf dan 2 kalimat penjelas secara akurat.",
                  mahir: "Mampu menyimpulkan makna tersirat dan mengevaluasi validitas isi teks lisan secara kritis.",
                },
              ],
              soalPGK: {
                pertanyaan: "Setelah menyimak teks bacaan tentang 'Siklus Daur Air', manakah informasi yang merupakan FAKTA POKOK? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Air laut menguap menjadi awan karena terkena panas sinar matahari (Evaporasi).", isCorrect: true },
                  { kode: "B", teks: "Uap air di atmosfer mengalami pengembunan membentuk butiran awan (Kondensasi).", isCorrect: true },
                  { kode: "C", teks: "Air hujan turun ke bumi dan meresap kembali ke dalam tanah (Presipitasi & Infiltrasi).", isCorrect: true },
                  { kode: "D", teks: "Air laut berkurang habis total setelah terjadi penguapan air di siang hari.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah tahapan siklus air yang ilmiah. D salah karena daur air bersifat terus-menerus.",
              },
              soalUraian: {
                level: "C4 (Penarikan Kesimpulan Aural)",
                pertanyaan: "Tuliskan langkah-langkah menemukan ide pokok dari sebuah teks penjelasan yang dibacakan oleh guru!",
                kunci: "1. Mendengarkan seluruh bacaan dari awal hingga akhir dengan fokus dan konsentrasi. 2. Mencatat kata kunci atau topik yang paling sering dibahas. 3. Menentukan kalimat utama pada awal (deduktif) atau akhir (induktif) paragraf untuk merumuskan ide pokoknya.",
                pembahasan: "Teknik menyimak aktif untuk menemukan gagasan utama.",
                rubrik: [
                  { kriteria: "Menyebutkan fokus mendengarkan dan mencatat kata kunci", skor: 10 },
                  { kriteria: "Menjelaskan identifikasi kalimat utama/topik pokok", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Membaca dan Memirsa",
        deskripsiCP:
          "Membaca kata-kata baru dengan fasih dari bacaan dan/atau tayangan yang dipirsa; serta memahami ide pokok, ide pendukung, pesan, dan informasi dalam teks sastra dan nonsastra berbentuk cetak dan/atau elektronik.",
        kompetensiKKO: "Membaca Fasih, Menganalisis Teks, Membedakan Fakta & Opini",
        lingkupMateri: "Kosakata Baru & KBBI, Ide Pokok Paragraf, Teks Narasi & Teks Petunjuk/Prosedur",
        tpList: [
          {
            kodeTP: "TP.02",
            teksTP:
              "Membaca teks narasi dan teks petunjuk secara lancar dengan intonasi tepat, menemukan makna kosakata baru menggunakan kamus (KBBI), serta menganalisis ide pokok bacaan.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mampu membaca lancar kalimat majemuk",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian", "Kreativitas"],
            dimensiKarakterKemenag: ["Cinta Membaca (Iqra)", "PPRA: Dinamis & Inovatif"],
            konteksPembelajaran: {
              stimulus: "Buku ensiklopedia bergambar tentang 'Teknologi Transportasi Ramah Lingkungan: Mobil Listrik dan Kereta Cepat Nusantara' dibaca bersama di pojok baca.",
              stimulusKemenag: "Membaca dengan pemahaman mendalam adalah perintah wahyu pertama (Iqra) untuk membuka cakrawala ilmu dan kearifan.",
              masalahNyata: "Bagaimana cara membedakan kalimat yang menyatakan FAKTA nyata dengan kalimat yang berisi OPINI (pendapat pribadi) dalam sebuah artikel berita?",
              kegiatanEksplorasi: [
                "Menemukan arti kata sulit (misal: 'biodegradable', 'konservasi', 'turbin') di kamus daring/cetak.",
                "Membuat bagan alur peristiwa (awal - konflik - penyelesaian) dari cerita rakyat.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Bandingkan karakteristik bahasa pada teks petunjuk (prosedur) dengan bahasa pada cerita dongeng imajinatif!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Membaca fasih dan menganalisis makna teks",
                  baru: "Membaca terbata-bata dan belum memahami arti kata baru.",
                  layak: "Mampu membaca lancar dan menjawab pertanyaan tersurat teks.",
                  cakap: "Mampu menemukan makna kata baru di KBBI dan merangkum ide pokok paragraf dengan tepat.",
                  mahir: "Mampu membandingkan pesan moral dari 2 teks berbeda dan mengkritisi sudut pandang penulis.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah kalimat berikut yang tergolong sebagai kalimat FAKTA (dapat dibuktikan kebenarannya secara nyata)? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Matahari terbit dari arah timur dan terbenam di arah barat.", isCorrect: true },
                  { kode: "B", teks: "Candi Borobudur terletak di Kabupaten Magelang, Provinsi Jawa Tengah.", isCorrect: true },
                  { kode: "C", teks: "Semua orang pasti merasa sangat bahagia saat makan es krim cokelat.", isCorrect: false },
                  { kode: "D", teks: "Indonesia memiliki lebih dari 17.000 pulau yang tersebar dari Sabang sampai Merauke.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "A, B, D adalah data fakta objektif. C adalah kalimat opini subjektif.",
              },
              soalUraian: {
                level: "C4 (Analisis Teks Prosedur)",
                pertanyaan: "Sebutkan 3 ciri utama dari Teks Petunjuk (Prosedur) yang membedakannya dari teks cerita dongeng!",
                kunci: "1. Menggunakan kalimat perintah / instruksi yang lugas dan jelas (misal: campurkan, tekan, potong). 2. Disusun secara urut dan runtut langkah demi langkah (menggunakan penomoran/tahapan). 3. Memuat informasi panduan bahan atau alat yang dibutuhkan secara rinci dan pasti.",
                pembahasan: "Karakteristik teks petunjuk/prosedur.",
                rubrik: [
                  { kriteria: "Menyebutkan kalimat instruksi lugas", skor: 7 },
                  { kriteria: "Menyebutkan tahapan urut/runtut", skor: 7 },
                  { kriteria: "Menyebutkan rincian alat dan bahan", skor: 6 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Berbicara dan Mempresentasikan",
        deskripsiCP:
          "Menyajikan pendapat dengan pilihan kata dan sikap tubuh/gestur yang sesuai, menggunakan volume dan intonasi yang tepat sesuai konteks; menanggapi diskusi sesuai tata cara; serta menceritakan kembali isi dan/atau informasi dari berbagai tipe teks yang dibaca, dipirsa, atau didengar.",
        kompetensiKKO: "Menyajikan Pendapat, Berdiskusi Santun, Menceritakan Kembali",
        lingkupMateri: "Presentasi Lisan, Tata Cara Diskusi & Tanggapan Santun, Menceritakan Ulang Cerita",
        tpList: [
          {
            kodeTP: "TP.03",
            teksTP:
              "Menyampaikan pendapat, tanggapan santun dalam diskusi kelompok, serta menceritakan kembali isi teks yang dibaca dengan intonasi jelas, gestur percaya diri, dan kosakata denotatif.",
            alokasiJP: 6,
            semester: "GENAP",
            prasyarat: "Mampu berbicara di depan kelompok kecil",
            dimensiKarakterDinas: ["Komunikasi", "Kolaborasi", "Kreativitas"],
            dimensiKarakterKemenag: ["Cinta Diri & Sesama", "PPRA: Musyawarah (Syura)", "PPRA: Berkeadaban"],
            konteksPembelajaran: {
              stimulus: "Kegiatan 'Show and Tell' di kelas di mana siswa mempresentasikan benda bersejarah atau hasil karya buatannya di depan teman-teman.",
              stimulusKemenag: "Berbicara dengan kata-kata yang baik (qaulan ma'rufan), sopan, dan lemah lembut adalah cerminan kemuliaan akhlak.",
              masalahNyata: "Bagaimana cara menyampaikan sanggahan atau perbedaan pendapat dalam diskusi tanpa menyinggung perasaan teman?",
              kegiatanEksplorasi: [
                "Praktik diskusi kelompok menentukan judul drama kelas dengan aturan angkat tangan sebelum bicara.",
                "Menceritakan kembali dongeng fabel menggunakan boneka tangan buatan sendiri.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi", teks: "Evaluasilah efektivitas penggunaan intonasi dan kontak mata saat menyampaikan presentasi di depan kelas!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menyampaikan presentasi dan menanggapi diskusi",
                  baru: "Bicara berbisik-bisik dan menunduk saat presentasi.",
                  layak: "Mampu berbicara dengan suara terdengar di barisan depan.",
                  cakap: "Mampu berpresentasi dengan kontak mata, intonasi jelas, dan merespons pertanyaan dengan sopan.",
                  mahir: "Mampu menguasai panggung, menyajikan argumen runut dengan data pendukung, dan memoderasi diskusi kelas.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah etika atau tata cara yang BENAR saat menyampaikan pendapat dalam sebuah musyawarah/diskusi kelas? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Mengangkat tangan terlebih dahulu dan menunggu dipersilakan oleh pemimpin diskusi.", isCorrect: true },
                  { kode: "B", teks: "Menggunakan kalimat pembuka santun, seperti 'Menurut pendapat saya...' atau 'Mohon izin menambahkan...'.", isCorrect: true },
                  { kode: "C", teks: "Memotong pembicaraan teman secara tiba-tiba dengan berteriak keras.", isCorrect: false },
                  { kode: "D", teks: "Menghargai dan mendengarkan pendapat teman yang berbeda hingga selesai.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "Mengangkat tangan, menggunakan kata santun, dan menyimak adalah etika diskusi yang terpuji.",
              },
              soalUraian: {
                level: "C4 (Etika Komunikasi)",
                pertanyaan: "Tuliskan contoh kalimat yang santun untuk menyampaikan ketidaksetujuan terhadap usulan teman dalam diskusi kelas tanpa membuatnya tersinggung!",
                kunci: "Contoh: 'Saya sangat menghargai usulan yang disampaikan oleh Budi. Namun, mohon izin menyampaikan pertimbangan lain, bagaimana jika kita memilih opsi kedua karena biayanya lebih hemat dan lokasinya lebih dekat dengan sekolah?'",
                pembahasan: "Komunikasi asertif dan diplomatis dalam musyawarah.",
                rubrik: [
                  { kriteria: "Memuat apresiasi terhadap usulan teman", skor: 10 },
                  { kriteria: "Menyampaikan alasan alternatif secara rasional dan santun", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Menulis",
        deskripsiCP:
          "Menulis berbagai tipe teks sederhana dengan rangkaian kalimat yang beragam; serta menggunakan kaidah kebahasaan dan kosakata baru yang memiliki makna denotatif untuk menulis teks sesuai dengan konteks.",
        kompetensiKKO: "Menulis Teks Narasi/Deskripsi, Menerapkan EYD, Mengembangkan Paragraf",
        lingkupMateri: "Paragraf Narasi, Deskripsi, & Prosedur; Penggunaan Huruf Kapital, Tanda Titik, Koma, Kata Hubung",
        tpList: [
          {
            kodeTP: "TP.04",
            teksTP:
              "Menulis teks deskripsi dan narasi sederhana dengan struktur runtut, pilihan kata denotatif yang kaya, serta menerapkan kaidah ejaan huruf kapital dan tanda baca secara tepat.",
            alokasiJP: 6,
            semester: "GENAP",
            prasyarat: "Mampu menyusun kalimat tunggal dan majemuk",
            dimensiKarakterDinas: ["Kreativitas", "Kemandirian", "Penalaran Kritis"],
            dimensiKarakterKemenag: ["Cinta Karya Tulis", "PPRA: Dinamis (Tathawwur)"],
            konteksPembelajaran: {
              stimulus: "Foto pemandangan sawah terasering di lereng bukit dengan aliran sungai jernih dan petani membajak sawah menginspirasi siswa menulis karangan deskripsi.",
              stimulusKemenag: "Menulis karya bermanfaat yang mengabadikan kebaikan adalah amal jariyah literasi yang bernilai luhur.",
              masalahNyata: "Bagaimana cara menyusun paragraf deskripsi agar pembaca seolah-olah dapat melihat, mendengar, dan merasakan langsung objek yang kita ceritakan?",
              kegiatanEksplorasi: [
                "Menulis draf deskripsi hewan peliharaan atau tempat wisata lokal favorit.",
                "Penyuntingan bersama (peer-editing) memeriksa penggunaan huruf kapital pada nama kota, nama orang, dan awal kalimat.",
              ],
              pertanyaanHOTS: [
                { level: "C6 - Kreasi", teks: "Rancanglah sebuah paragraf deskripsi yang menggambarkan kebersihan dan keindahan taman sekolahmu dengan menggunakan minimal 3 kata sifat penginderaan!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menulis teks deskripsi sesuai kaidah kebahasaan",
                  baru: "Tulisan belum membentuk paragraf utuh dan banyak salah eja.",
                  layak: "Mampu menulis 1 paragraf sederhana dengan 3-4 kalimat.",
                  cakap: "Mampu menulis karangan deskripsi 2-3 paragraf runtut dengan huruf kapital dan tanda baca yang benar.",
                  mahir: "Mampu menghasilkan tulisan yang kaya metafora visual, alur mengalir hidup, dan tata bahasa baku sempurna.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah kalimat yang menggunakan HURUF KAPITAL DAN TANDA BACA SECARA BENAR? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Siti, Dayu, dan Edo berlibur ke Danau Toba di Provinsi Sumatera Utara.", isCorrect: true },
                  { kode: "B", teks: "Pada hari Minggu, ayah membeli apel, jeruk, dan mangga di pasar.", isCorrect: true },
                  { kode: "C", teks: "kemarin rani pergi ke jakarta naik kereta api bersama ibunya", isCorrect: false },
                  { kode: "D", teks: "Wah, indah sekali pemandangan matahari terbit di Pantai Kuta!", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "A, B, D benar ejaannya. C salah karena tidak memakai huruf kapital awal kalimat/nama orang/kota dan tanpa tanda titik.",
              },
              soalUraian: {
                level: "C6 (Produksi Teks)",
                pertanyaan: "Tuliskan sebuah paragraf deskripsi singkat (3-4 kalimat) yang menceritakan tentang 'Perpustakaan Sekolahku' dengan memperhatikan ejaan huruf kapital dan tanda baca yang benar!",
                kunci: "Perpustakaan di sekolahku sangat bersih, rapi, dan nyaman. Buku-buku cerita, sains, dan ensiklopedia tersusun rapi di atas rak kayu bertingkat. Ruangan perpustakaan terasa sejuk sehingga para murid sangat senang membaca buku di sana saat jam istirahat.",
                pembahasan: "Menulis paragraf deskripsi dengan kosakata indrawi dan ejaan tepat.",
                rubrik: [
                  { kriteria: "Kesesuaian tema deskripsi perpustakaan dan kelengkapan 3-4 kalimat", skor: 10 },
                  { kriteria: "Ketepatan huruf kapital dan tanda baca (titik, koma)", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 3. Matematika (Fase B - Kelas III & IV SD/MI)
  {
    fase: "Fase B",
    kelasDefault: "Kelas IV",
    mapel: "Matematika",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Bilangan",
        deskripsiCP: "Memiliki pemahaman dan intuisi bilangan (number sense) pada bilangan cacah sampai 10.000; membaca, menulis, membandingkan, mengurutkan, menentukan nilai tempat, komposisi dan dekomposisi bilangan cacah sampai 10.000; melakukan operasi penjumlahan/pengurangan cacah sampai 1.000; perkalian/pembagian sampai 100 konkret/gambar/simbol; mengenal kelipatan dan faktor; membandingkan dan mengurutkan pecahan pembilang satu & penyebut sama; mengenal pecahan senilai, intuisi desimal, dan persen.",
        kompetensiKKO: "Menghitung, Membandingkan, Mengurutkan, Menentukan Pecahan Senilai",
        lingkupMateri: "Bilangan Cacah s.d 10.000 & Pecahan",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP: "Membaca dan menuliskan lambang bilangan cacah sampai 10.000 dengan benar.",
            alokasiJP: 4,
            semester: "GANJIL",
            prasyarat: "Mengenal bilangan dasar",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Ketelitian"],
            konteksPembelajaran: {
              stimulus: "Membaca data populasi penduduk di sebuah desa.",
              masalahNyata: "Bagaimana cara membaca angka ribuan dengan tepat?",
              kegiatanEksplorasi: ["Membaca kartu angka ribuan"],
              pertanyaanHOTS: [{ level: "C3", teks: "Tuliskan lambang bilangan dari empat ribu lima ratus dua puluh!" }],
              rubrikIndikator: [{ kriteria: "Membaca bilangan", baru: "Belum", layak: "Cukup", cakap: "Baik", mahir: "Sangat Baik" }],
              soalPGK: { pertanyaan: "Lambang bilangan 4.520 dibaca...", pilihan: [{ kode: "A", teks: "Empat ribu lima ratus dua puluh", isCorrect: true }], kunci: "A" },
              soalUraian: { level: "C1", pertanyaan: "Tuliskan bilangan 5.000 dalam kata!", kunci: "Lima ribu" }
            }
          },
          {
            kodeTP: "TP.02",
            teksTP: "Menentukan dan menganalisis nilai tempat (ribuan, ratusan, puluhan, satuan) pada bilangan cacah sampai 10.000.",
            alokasiJP: 4,
            semester: "GANJIL",
            prasyarat: "Membaca bilangan 4 digit",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Ketelitian"],
            konteksPembelajaran: {
              stimulus: "Menyusun balok base-10.",
              masalahNyata: "Apa bedanya angka 5 di nilai ribuan dan puluhan?",
              kegiatanEksplorasi: ["Mengurai bilangan dengan balok"],
              pertanyaanHOTS: [{ level: "C4", teks: "Analisislah letak angka 7 pada 7.345!" }],
              rubrikIndikator: [{ kriteria: "Nilai tempat", baru: "Belum", layak: "Cukup", cakap: "Baik", mahir: "Sangat Baik" }],
              soalPGK: { pertanyaan: "Nilai angka 3 pada 4.350 adalah...", pilihan: [{ kode: "A", teks: "300", isCorrect: true }], kunci: "A" },
              soalUraian: { level: "C4", pertanyaan: "Jelaskan beda 4.050 dan 4.500!", kunci: "Posisi ratusan dan puluhan berbeda" }
            }
          },
          {
            kodeTP: "TP.03",
            teksTP: "Membandingkan dan mengurutkan bilangan cacah sampai 10.000 menggunakan garis bilangan atau benda konkret.",
            alokasiJP: 4,
            semester: "GANJIL",
            prasyarat: "Memahami nilai tempat",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Ketelitian"],
            konteksPembelajaran: {
              stimulus: "Membandingkan harga barang di toko.",
              masalahNyata: "Barang mana yang lebih mahal?",
              kegiatanEksplorasi: ["Mengurutkan kartu harga"],
              pertanyaanHOTS: [{ level: "C4", teks: "Urutkan dari yang terbesar!" }],
              rubrikIndikator: [{ kriteria: "Mengurutkan", baru: "Belum", layak: "Cukup", cakap: "Baik", mahir: "Sangat Baik" }],
              soalPGK: { pertanyaan: "5.400 ... 5.040", pilihan: [{ kode: "A", teks: ">", isCorrect: true }], kunci: "A" },
              soalUraian: { level: "C4", pertanyaan: "Urutkan 3.400, 3.040, 4.300!", kunci: "3.040, 3.400, 4.300" }
            }
          },
          {
            kodeTP: "TP.04",
            teksTP: "Melakukan komposisi (menyusun) dan dekomposisi (mengurai) bilangan cacah sampai 10.000 ke dalam bentuk panjang nilai tempat.",
            alokasiJP: 4,
            semester: "GANJIL",
            prasyarat: "Memahami urutan bilangan",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Ketelitian"],
            konteksPembelajaran: {
              stimulus: "Menggabungkan uang ribuan, ratusan, puluhan.",
              masalahNyata: "Bagaimana memecah uang 5.450?",
              kegiatanEksplorasi: ["Bermain peran kasir"],
              pertanyaanHOTS: [{ level: "C4", teks: "Uraikan 8.920!" }],
              rubrikIndikator: [{ kriteria: "Dekomposisi", baru: "Belum", layak: "Cukup", cakap: "Baik", mahir: "Sangat Baik" }],
              soalPGK: { pertanyaan: "6.000 + 400 + 2 = ...", pilihan: [{ kode: "A", teks: "6.402", isCorrect: true }], kunci: "A" },
              soalUraian: { level: "C4", pertanyaan: "Tuliskan bentuk panjang 7.058!", kunci: "7.000 + 50 + 8" }
            }
          },
          {
            kodeTP: "TP.05",
            teksTP: "Menyelesaikan operasi penjumlahan bilangan cacah sampai 1.000 dengan teknik menyimpan dalam konteks masalah sehari-hari.",
            alokasiJP: 4,
            semester: "GANJIL",
            prasyarat: "Dekomposisi bilangan",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Ketelitian"],
            konteksPembelajaran: {
              stimulus: "Menghitung total panen buah dari dua kebun.",
              masalahNyata: "Berapa total panen semuanya?",
              kegiatanEksplorasi: ["Menjumlah bersusun"],
              pertanyaanHOTS: [{ level: "C3", teks: "Jumlahkan 456 + 289!" }],
              rubrikIndikator: [{ kriteria: "Penjumlahan", baru: "Belum", layak: "Cukup", cakap: "Baik", mahir: "Sangat Baik" }],
              soalPGK: { pertanyaan: "345 + 172 = ...", pilihan: [{ kode: "A", teks: "517", isCorrect: true }], kunci: "A" },
              soalUraian: { level: "C3", pertanyaan: "Hitung total 500 + 600!", kunci: "1.100" }
            }
          },
          {
            kodeTP: "TP.06",
            teksTP: "Menyelesaikan operasi pengurangan bilangan cacah sampai 1.000 dengan teknik meminjam dalam konteks masalah sehari-hari.",
            alokasiJP: 4,
            semester: "GANJIL",
            prasyarat: "Penjumlahan bilangan",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Ketelitian"],
            konteksPembelajaran: {
              stimulus: "Menghitung sisa uang setelah belanja.",
              masalahNyata: "Berapa kembalian yang diterima?",
              kegiatanEksplorasi: ["Pengurangan bersusun"],
              pertanyaanHOTS: [{ level: "C3", teks: "Kurangkan 800 - 345!" }],
              rubrikIndikator: [{ kriteria: "Pengurangan", baru: "Belum", layak: "Cukup", cakap: "Baik", mahir: "Sangat Baik" }],
              soalPGK: { pertanyaan: "500 - 125 = ...", pilihan: [{ kode: "A", teks: "375", isCorrect: true }], kunci: "A" },
              soalUraian: { level: "C3", pertanyaan: "Hitung sisa 1.000 - 450!", kunci: "550" }
            }
          },
          {
            kodeTP: "TP.07",
            teksTP: "Menghitung perkalian bilangan cacah sampai 100 menggunakan manipulatif konkret dan algoritma standar.",
            alokasiJP: 4,
            semester: "GENAP",
            prasyarat: "Pengurangan bilangan",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Ketelitian"],
            konteksPembelajaran: {
              stimulus: "Menghitung jumlah roda pada 15 mobil.",
              masalahNyata: "Bagaimana cara cepat menghitungnya?",
              kegiatanEksplorasi: ["Perkalian dengan kelompok benda"],
              pertanyaanHOTS: [{ level: "C3", teks: "Hitung 12 x 4!" }],
              rubrikIndikator: [{ kriteria: "Perkalian", baru: "Belum", layak: "Cukup", cakap: "Baik", mahir: "Sangat Baik" }],
              soalPGK: { pertanyaan: "8 x 7 = ...", pilihan: [{ kode: "A", teks: "56", isCorrect: true }], kunci: "A" },
              soalUraian: { level: "C3", pertanyaan: "Hitung 15 x 5!", kunci: "75" }
            }
          },
          {
            kodeTP: "TP.08",
            teksTP: "Menghitung pembagian bilangan cacah sampai 100 sebagai pengurangan berulang dan kebalikan dari perkalian.",
            alokasiJP: 4,
            semester: "GENAP",
            prasyarat: "Perkalian bilangan",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Ketelitian"],
            konteksPembelajaran: {
              stimulus: "Membagikan 48 permen kepada 6 anak sama rata.",
              masalahNyata: "Berapa permen yang didapat setiap anak?",
              kegiatanEksplorasi: ["Membagi benda konkret"],
              pertanyaanHOTS: [{ level: "C3", teks: "Hitung 72 : 8!" }],
              rubrikIndikator: [{ kriteria: "Pembagian", baru: "Belum", layak: "Cukup", cakap: "Baik", mahir: "Sangat Baik" }],
              soalPGK: { pertanyaan: "54 : 9 = ...", pilihan: [{ kode: "A", teks: "6", isCorrect: true }], kunci: "A" },
              soalUraian: { level: "C3", pertanyaan: "Hitung 80 : 10!", kunci: "8" }
            }
          },
          {
            kodeTP: "TP.09",
            teksTP: "Mengidentifikasi konsep faktor dan kelipatan suatu bilangan cacah.",
            alokasiJP: 4,
            semester: "GENAP",
            prasyarat: "Pembagian bilangan",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Ketelitian"],
            konteksPembelajaran: {
              stimulus: "Mencari bilangan yang bisa membagi habis 12.",
              masalahNyata: "Berapa saja faktor dari 12?",
              kegiatanEksplorasi: ["Bermain kancing kelipatan"],
              pertanyaanHOTS: [{ level: "C4", teks: "Temukan faktor dari 18!" }],
              rubrikIndikator: [{ kriteria: "Faktor & Kelipatan", baru: "Belum", layak: "Cukup", cakap: "Baik", mahir: "Sangat Baik" }],
              soalPGK: { pertanyaan: "Faktor dari 8 adalah...", pilihan: [{ kode: "A", teks: "1, 2, 4, 8", isCorrect: true }], kunci: "A" },
              soalUraian: { level: "C4", pertanyaan: "Sebutkan 3 kelipatan pertama dari 5!", kunci: "5, 10, 15" }
            }
          },
          {
            kodeTP: "TP.10",
            teksTP: "Membuktikan dan menyajikan pecahan senilai menggunakan gambar dan benda konkret.",
            alokasiJP: 4,
            semester: "GENAP",
            prasyarat: "Faktor bilangan",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Ketelitian"],
            konteksPembelajaran: {
              stimulus: "Membagi pizza menjadi 4 bagian dan 8 bagian.",
              masalahNyata: "Apakah 1/2 sama dengan 2/4?",
              kegiatanEksplorasi: ["Melipat kertas pecahan"],
              pertanyaanHOTS: [{ level: "C4", teks: "Buktikan 1/3 = 2/6!" }],
              rubrikIndikator: [{ kriteria: "Pecahan senilai", baru: "Belum", layak: "Cukup", cakap: "Baik", mahir: "Sangat Baik" }],
              soalPGK: { pertanyaan: "Pecahan senilai dari 1/2 adalah...", pilihan: [{ kode: "A", teks: "2/4", isCorrect: true }], kunci: "A" },
              soalUraian: { level: "C4", pertanyaan: "Berikan 2 pecahan senilai dari 1/4!", kunci: "2/8 dan 3/12" }
            }
          },
          {
            kodeTP: "TP.11",
            teksTP: "Membandingkan dan mengurutkan antarpecahan dengan pembilang satu dan berpenyebut sama.",
            alokasiJP: 4,
            semester: "GENAP",
            prasyarat: "Pecahan senilai",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Ketelitian"],
            konteksPembelajaran: {
              stimulus: "Membandingkan sisa kue milik adik dan kakak.",
              masalahNyata: "Mana yang lebih besar, 1/4 atau 1/3?",
              kegiatanEksplorasi: ["Menggunakan pita ukur"],
              pertanyaanHOTS: [{ level: "C4", teks: "Urutkan 1/2, 1/4, 1/3!" }],
              rubrikIndikator: [{ kriteria: "Membandingkan pecahan", baru: "Belum", layak: "Cukup", cakap: "Baik", mahir: "Sangat Baik" }],
              soalPGK: { pertanyaan: "1/4 ... 1/2", pilihan: [{ kode: "A", teks: "<", isCorrect: true }], kunci: "A" },
              soalUraian: { level: "C4", pertanyaan: "Mana yang lebih besar 1/5 atau 1/8?", kunci: "1/5" }
            }
          },
          {
            kodeTP: "TP.12",
            teksTP: "Mengonversi representasi pecahan biasa ke bentuk pecahan desimal persepuluhan/perseratusan dan persen.",
            alokasiJP: 4,
            semester: "GENAP",
            prasyarat: "Mengurutkan pecahan",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Ketelitian"],
            konteksPembelajaran: {
              stimulus: "Melihat diskon 50% di toko.",
              masalahNyata: "Apa arti 50% dalam pecahan?",
              kegiatanEksplorasi: ["Mengubah bentuk pecahan"],
              pertanyaanHOTS: [{ level: "C4", teks: "Ubah 3/4 menjadi desimal!" }],
              rubrikIndikator: [{ kriteria: "Konversi pecahan", baru: "Belum", layak: "Cukup", cakap: "Baik", mahir: "Sangat Baik" }],
              soalPGK: { pertanyaan: "1/2 dalam bentuk desimal adalah...", pilihan: [{ kode: "A", teks: "0,5", isCorrect: true }], kunci: "A" },
              soalUraian: { level: "C4", pertanyaan: "Ubah 0,25 menjadi pecahan biasa!", kunci: "1/4" }
            }
          }
        ]
      }
    ]
  },
{
    fase: "Fase B",
    kelasDefault: "Kelas IV",
    mapel: "Ilmu Pengetahuan Alam dan Sosial (IPAS)",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pemahaman IPAS",
        deskripsiCP:
          "Menjelaskan bentuk dan fungsi pancaindra; menganalisis siklus hidup makhluk hidup dan upaya pelestariannya; menghasilkan solusi untuk pelestarian SDA sebagai upaya mitigasi perubahan iklim; menyimpulkan proses perubahan wujud zat; menjelaskan sumber, bentuk, dan proses perubahan energi; membedakan jenis gaya dan pengaruhnya terhadap arah/gerak/bentuk benda; menjelaskan peran/tugas/interaksi sosial di sekitar; mengenali letak kabupaten/kota dan provinsi menggunakan peta; mengklasifikasikan bentang alam dan keterkaitannya dengan profesi masyarakat, budaya, dan pelestariannya; menganalisis sejarah masyarakat; serta menjelaskan nilai mata uang dan pengelolaan keuangan bijak.",
        kompetensiKKO: "Menganalisis, Menyimpulkan, Mengklasifikasikan, Merancang Solusi",
        lingkupMateri: "Pancaindra, Siklus Hidup & Pelestarian Makhluk Hidup, Wujud Zat & Energi, Gaya & Gerak, Peta Wilayah & Bentang Alam, Sejarah Lokal & Literasi Keuangan",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menganalisis bentuk dan fungsi pancaindra manusia, siklus hidup (metamorfosis) makhluk hidup, serta merancang solusi pelestarian sumber daya alam hayati di lingkungan sekitar.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mengenal bagian tubuh dan jenis hewan di sekitar",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas", "Kesehatan"],
            dimensiKarakterKemenag: ["Cinta Alam Semesta", "PPRA: Keteladanan (Qudwah)"],
            konteksPembelajaran: {
              stimulus: "Siswa mengamati kepompong ulat sutra di pohon daun murbei yang bermetamorfosis sempurna menjadi kupu-kupu yang indah dalam siklus hidupnya.",
              stimulusKemenag: "Setiap ciptaan Tuhan diciptakan dengan rancangan yang sempurna dan saling bergantung dalam jaring-jaring kehidupan.",
              masalahNyata: "Mengapa populasi lebah madu dan kupu-kupu berkurang drastis jika petani menyemprotkan pestisida kimia secara berlebihan?",
              kegiatanEksplorasi: [
                "Membuat bagan siklus hidup kupu-kupu (metamorfosis sempurna) versus kecoak/belalang (metamorfosis tidak sempurna).",
                "Merancang pot tanaman bunga ramah serangga penyerbuk di halaman sekolah.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Bandingkan tahapan metamorfosis sempurna pada katak/kupu-kupu dengan metamorfosis tidak sempurna pada belalang/kecoak!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menganalisis siklus hidup dan pancaindra",
                  baru: "Menyebutkan nama hewan tanpa memahami urutan metamorfosis.",
                  layak: "Mampu mengurutkan daur hidup kupu-kupu (telur-ulat-kepompong-kupu).",
                  cakap: "Mampu membedakan metamorfosis sempurna dan tidak sempurna beserta contoh hewannya.",
                  mahir: "Mampu menganalisis dampak kepunahan salah satu fase metamorfosis terhadap rantai makanan ekosistem.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah pasangan hewan dan jenis daur hidup (metamorfosis) yang BENAR? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Kupu-kupu dan Katak mengalami METAMORFOSIS SEMPURNA.", isCorrect: true },
                  { kode: "B", teks: "Kecoak dan Belalang mengalami METAMORFOSIS TIDAK SEMPURNA (tanpa fase pupa/kepompong).", isCorrect: true },
                  { kode: "C", teks: "Nyamuk mengalami metamorfosis tidak sempurna karena langsung bertelur menjadi nyamuk dewasa.", isCorrect: false },
                  { kode: "D", teks: "Kucing dan Ayam mengalami daur hidup TANPA METAMORFOSIS (bentuk anak serupa induknya).", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "A, B, D benar. C salah karena nyamuk mengalami metamorfosis sempurna (telur-jentik-pupa-nyamuk).",
              },
              soalUraian: {
                level: "C4 (Metamorfosis & Ekologi)",
                pertanyaan: "Jelaskan urutan tahapan metamorfosis sempurna pada kupu-kupu dan jelaskan pada tahapan manakah hewan tersebut sering dianggap merugikan petani namun pada tahapan lain justru sangat menguntungkan petani!",
                kunci: "Urutan tahapan: Telur → Ulat (Larva) → Kepompong (Pupa) → Kupu-kupu dewasa (Imago).\nTahapan merugikan: Fase Ulat (Larva) karena memakan daun tanaman hingga rusak.\nTahapan menguntungkan: Fase Kupu-kupu dewasa (Imago) karena membantu proses penyerbukan bunga tanaman pertanian.",
                pembahasan: "Siklus hidup hewan dan perannya dalam ekosistem pertanian.",
                rubrik: [
                  { kriteria: "Menyebutkan 4 tahapan daur hidup kupu-kupu secara urut", skor: 10 },
                  { kriteria: "Menjelaskan fase ulat merugikan dan fase kupu-kupu membantu penyerbukan", skor: 10 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.02",
            teksTP:
              "Menyelidiki proses perubahan wujud zat (mencair, membeku, menguap, mengembun, menyublim), sifat-sifat gaya (dorong, tarik, gesek, gravitasi, magnet), serta bentuk transformasi energi dalam kehidupan sehari-hari.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mengenal wujud benda padat, cair, dan gas",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu Pengetahuan", "PPRA: Dinamis & Inovatif"],
            konteksPembelajaran: {
              stimulus: "Panel surya di atap sekolah mengubah energi cahaya matahari menjadi energi listrik yang menyalakan lampu kelas dan kipas angin.",
              stimulusKemenag: "Energi tidak dapat dimusnahkan tetapi dapat diubah bentuknya untuk memberi manfaat bagi kelangsungan hidup manusia di bumi.",
              masalahNyata: "Mengapa es batu di dalam gelas yang didiamkan di tempat terbuka dapat mencair dan dinding luar gelas menjadi basah berair?",
              kegiatanEksplorasi: [
                "Eksperimen membuat mobil mainan bertenaga magnet dan dorongan balon udara.",
                "Membuat bagan transformasi energi pada setrika listrik (listrik → panas) dan bel listrik (listrik → bunyi).",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis Gaya & Energi", teks: "Analisislah mengapa permukaan ban kendaraan dibuat beralur kasar dihubungkan dengan konsep gaya gesek dan keselamatan berkendara!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menganalisis wujud zat, gaya, dan transformasi energi",
                  baru: "Belum mampu membedakan proses mencair dan menguap.",
                  layak: "Mampu menyebutkan 3 jenis gaya dan contoh perubahan energi sederhana.",
                  cakap: "Mampu menjelaskan mekanisme gaya gesek, gravitasi, dan perubahan wujud zat melalui percobaan.",
                  mahir: "Mampu merancang purwarupa alat sederhana pemanfaatan energi terbarukan ramah lingkungan.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah pasangan peristiwa sehari-hari dan JENIS PERUBAHAN WUJUD ZAT yang TEPAT? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Mentega yang dipanaskan di atas wajan meleleh menjadi cair = MENCAIR.", isCorrect: true },
                  { kode: "B", teks: "Terbentuknya titik-titik air di luar gelas berisi es = MENGEMBUN.", isCorrect: true },
                  { kode: "C", teks: "Kapur barus di dalam lemari lama-kelamaan mengecil dan habis = MENYUBLIM.", isCorrect: true },
                  { kode: "D", teks: "Air yang dimasak hingga mendidih dan keluar asap uap air = MEMBEKU.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C benar. D salah karena air mendidih berubah menjadi uap adalah peristiwa MENGUAP.",
              },
              soalUraian: {
                level: "C4 (Transformasi Energi & Gaya)",
                pertanyaan: "1. Sebutkan perubahan bentuk energi yang terjadi pada alat-alat berikut:\n   a. Kipas Angin Listrik\n   b. Pembangkit Listrik Tenaga Air (PLTA)\n2. Mengapa kita lebih mudah terpeleset jika berjalan di lantai keramik yang basah dan licin dibandingkan di jalan aspal yang kering?",
                kunci: "1. a. Energi Listrik → Energi Gerak (Kinetik).\n   b. Energi Potensial/Kinetik Air → Energi Gerak Turbin → Energi Listrik (Generator).\n2. Karena lantai keramik yang basah memiliki gaya gesek yang sangat kecil (permukaan licin), sehingga telapak kaki kurang mencengkeram lantai dan mudah tergelincir.",
                pembahasan: "Hukum kekekalan energi dan penerapan konsep gaya gesek.",
                rubrik: [
                  { kriteria: "Menjelaskan perubahan energi kipas angin dan PLTA", skor: 10 },
                  { kriteria: "Menjelaskan gaya gesek kecil pada lantai licin", skor: 10 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.03",
            teksTP:
              "Mengenali letak geografis kabupaten/kota dan provinsi tempat tinggal menggunakan peta, mengklasifikasikan bentang alam (dataran tinggi, dataran rendah, pantai) serta keterkaitannya dengan mata pencaharian masyarakat.",
            alokasiJP: 6,
            semester: "GENAP",
            prasyarat: "Mengenal arah mata angin dasar",
            dimensiKarakterDinas: ["Kewargaan", "Penalaran Kritis", "Kolaborasi"],
            dimensiKarakterKemenag: ["Cinta Tanah Air", "PPRA: Berkeadaban"],
            konteksPembelajaran: {
              stimulus: "Peta digital Provinsi memperlihatkan kawasan pegunungan berhawa sejuk tempat perkebunan teh dan sayur, kawasan pesisir pantai tempat nelayan menangkap ikan, dan perkotaan dataran rendah sentra industri dan jasa.",
              stimulusKemenag: "Keragaman bentang alam nusantara adalah anugerah kesuburan yang mengharuskan manusia bersyukur dan menjaga kelestarian alam.",
              masalahNyata: "Mengapa profesi masyarakat di daerah pesisir pantai berbeda dengan profesi masyarakat yang tinggal di lereng pegunungan dataran tinggi?",
              kegiatanEksplorasi: [
                "Membaca simbol-simbol peta (gunung segitiga merah/hitam, sungai garis biru, batas kota garis putus-putus).",
                "Membuat tabel keterkaitan antara bentang alam, potensi sumber daya, dan profesi dominan masyarakat.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis Geografis", teks: "Analisislah bagaimana kondisi geografis suatu wilayah memengaruhi jenis makanan khas, bentuk rumah adat, dan mata pencaharian penduduknya!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Membaca peta dan mengklasifikasikan bentang alam",
                  baru: "Belum mampu membedakan arah utara, selatan, timur, dan barat pada peta.",
                  layak: "Mampu membaca legenda dasar peta.",
                  cakap: "Mampu menghubungkan 3 jenis bentang alam dengan profesi dan komoditas unggulan masyarakat.",
                  mahir: "Mampu menganalisis peluang ekonomi kreatif lokal berbasis potensi bentang alam daerahnya secara komprehensif.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah pasangan antara BENTANG ALAM dan MATA PENCAHARIAN UTAMA masyarakat yang SESUAI? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Daerah Pesisir Pantai: Nelayan, petani garam, dan budidaya tambak udang.", isCorrect: true },
                  { kode: "B", teks: "Dataran Tinggi / Pegunungan: Petani sayur-mayur, pemetik teh, dan pemandu wisata alam.", isCorrect: true },
                  { kode: "C", teks: "Dataran Rendah: Petani padi sawah, karyawan perkantoran, dan pedagang.", isCorrect: true },
                  { kode: "D", teks: "Puncak Gunung Berapi: Nelayan penangkap ikan tuna laut dalam.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C benar. D salah karena nelayan laut beraktivitas di pesisir/laut, bukan di puncak gunung.",
              },
              soalUraian: {
                level: "C4 (Geografi & Sosial Budaya)",
                pertanyaan: "Sebutkan 3 komponen utama yang wajib ada pada sebuah PETA resmi agar peta tersebut mudah dibaca dan dipahami penggunaannya!",
                kunci: "1. Judul Peta (menjelaskan isi wilayah peta). 2. Skala Peta (perbandingan jarak di peta dengan jarak sebenarnya). 3. Penunjuk Arah Mata Angin / Orientasi (menunjukkan arah utara). (Komponen lain: Legenda/Simbol, Garis Astronomis, Sumber Peta).",
                pembahasan: "Komponen-komponen peta geografis standar.",
                rubrik: [
                  { kriteria: "Menyebutkan Judul Peta dan Skala Peta", skor: 10 },
                  { kriteria: "Menyebutkan Arah Mata Angin dan Legenda/Simbol", skor: 10 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.04",
            teksTP:
              "Menganalisis peninggalan sejarah kerajaan nusantara di lingkungan sekitar, memahami fungsi nilai mata uang, serta mempraktikkan pengelolaan keuangan pribadi secara bijak dan hemat.",
            alokasiJP: 6,
            semester: "GENAP",
            prasyarat: "Mengenal pecahan uang rupiah",
            dimensiKarakterDinas: ["Kewargaan", "Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Sejarah Bangsa", "PPRA: Berimbang (Tawazun)"],
            konteksPembelajaran: {
              stimulus: "Siswa mengadakan simulasi 'Pasar Tradisional Mini' di kelas untuk mempraktikkan jual-beli kebutuhan pokok menggunakan uang mainan dan mencatat pengeluaran di buku tabungan.",
              stimulusKemenag: "Mengelola rezeki dengan hemat, tidak boros (israf), dan gemar menabung serta berbagi sedekah adalah tuntunan mulia.",
              masalahNyata: "Bagaimana cara membedakan antara kebutuhan primer yang mendesak dengan keinginan sekunder saat kita memiliki uang saku terbatas?",
              kegiatanEksplorasi: [
                "Menyusun daftar skala prioritas belanja harian (Kebutuhan vs. Keinginan).",
                "Mencari informasi tentang tokoh pahlawan nasional yang tertera pada pecahan uang kertas Rupiah emisi terbaru.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Finansial", teks: "Evaluasilah dampak kebiasaan hidup hemat dan gemar menabung sejak usia dini terhadap kesiapan menghadapi kebutuhan darurat di masa depan!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menganalisis sejarah lokal dan mengelola keuangan bijak",
                  baru: "Menghabiskan seluruh uang saku untuk jajan tanpa menyisihkan tabungan.",
                  layak: "Mampu membedakan uang kertas dan logam rupiah.",
                  cakap: "Mampu menyusun skala prioritas kebutuhan dan mencatat pemasukan-pengeluaran uang saku.",
                  mahir: "Mampu membuat rencana anggaran tabungan impian dan menganalisis nilai sejarah uang rupiah secara kritis.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah tindakan yang mencerminkan PENGELOLAAN KEUANGAN SECARA BIJAK DAN CERDAS? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Mendahulukan membeli buku pelajaran dan alat tulis sebelum membeli mainan baru.", isCorrect: true },
                  { kode: "B", teks: "Menyisihkan sebagian uang saku setiap hari untuk ditabung di celengan atau bank.", isCorrect: true },
                  { kode: "C", teks: "Membeli semua barang diskon yang dilihat meskipun barang tersebut tidak dibutuhkan.", isCorrect: false },
                  { kode: "D", teks: "Mencatat setiap uang masuk dan uang keluar dalam buku catatan harian.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "A, B, D adalah prinsip literasi finansial bijak (prioritas kebutuhan, menabung, pembukuan).",
              },
              soalUraian: {
                level: "C4 (Literasi Keuangan)",
                pertanyaan: "Jelaskan perbedaan mendasar antara 'Kebutuhan' dan 'Keinginan', serta berikan masing-masing 2 contohnya bagi seorang pelajar kelas 4 SD!",
                kunci: "Kebutuhan adalah segala sesuatu yang mutlak harus dipenuhi untuk kelangsungan hidup dan proses belajar, jika tidak dipenuhi akan mengganggu aktivitas (Contoh: Makanan bergizi, seragam dan sepatu sekolah, buku tulis). Keinginan adalah sesuatu yang ingin dimiliki untuk kesenangan atau gengsi tetapi tidak wajib ada (Contoh: Mainan gim konsol mahal, sepatu bermerek terkenal edisi terbatas).",
                pembahasan: "Konsep dasar skala prioritas kebutuhan ekonomi.",
                rubrik: [
                  { kriteria: "Menjelaskan definisi kebutuhan dan 2 contohnya", skor: 10 },
                  { kriteria: "Menjelaskan definisi keinginan dan 2 contohnya", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Keterampilan Proses IPAS",
        deskripsiCP:
          "Mengamati fenomena dan peristiwa secara sederhana dengan mencatat hasil pengamatan; mempertanyakan dan memprediksi; merencanakan dan melakukan penyelidikan; memproses serta menganalisis data dan informasi (turus dan diagram gambar dengan bimbingan); mengevaluasi dan refleksi; serta mengomunikasikan hasil penyelidikan secara lisan dan tertulis.",
        kompetensiKKO: "Mengamati, Merencanakan Penyelidikan, Menganalisis Data Turus, Mengomunikasikan",
        lingkupMateri: "Penyelidikan Ilmiah Sederhana, Pencatatan Data Turus & Tabel, Laporan Hasil Percobaan",
        tpList: [
          {
            kodeTP: "TP.05",
            teksTP:
              "Melakukan penyelidikan ilmiah sederhana tentang pengaruh sinar matahari dan air terhadap pertumbuhan kecambah kacang hijau, mencatat data pengamatan dengan tabel turus, dan mengomunikasikan hasil laporan secara percaya diri.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mampu menggunakan penggaris satuan sentimeter",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kolaborasi", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Penelitian & Fakta", "PPRA: Dinamis & Inovatif"],
            konteksPembelajaran: {
              stimulus: "Dua wadah kapas berisi biji kacang hijau diletakkan di dua tempat berbeda: Wadah A di bawah sinar matahari terang dan Wadah B di dalam kardus gelap.",
              stimulusKemenag: "Meneliti keteraturan alam melalui eksperimen ilmiah mempertebal keimanan akan keagungan ciptaan Sang Maha Pencipta.",
              masalahNyata: "Mengapa batang kecambah di tempat gelap tumbuh lebih panjang tetapi pucat dan rapuh dibandingkan kecambah di tempat terang?",
              kegiatanEksplorasi: [
                "Mengukur tinggi tanaman kecambah setiap pagi selama 7 hari menggunakan penggaris.",
                "Membuat grafik perbandingan pertumbuhan dan mempresentasikan di depan kelas.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Ilmiah", teks: "Evaluasilah faktor-faktor yang menyebabkan perbedaan warna daun hijau segar pada tanaman terkena matahari dengan daun kuning pucat pada tanaman di tempat gelap!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Melakukan penyelidikan dan pelaporan data ilmiah",
                  baru: "Lupa mencatat data pengamatan harian.",
                  layak: "Mampu mencatat tinggi tanaman dalam tabel angka sederhana.",
                  cakap: "Mampu menyajikan data turus dan grafik batang pertumbuhan dengan rapi dan objektif.",
                  mahir: "Mampu menarik kesimpulan ilmiah berbasis bukti data dan menyampaikan presentasi laporan secara memukau.",
                },
              ],
              soalPGK: {
                pertanyaan: "Dalam sebuah eksperimen menguji pengaruh pupuk organik terhadap pertumbuhan tanaman tomat, manakah langkah metode ilmiah yang BENAR? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Memberikan jenis dan takaran tanah yang sama pada pot perlakuan dan pot kontrol (Variabel Kontrol).", isCorrect: true },
                  { kode: "B", teks: "Menyiram kedua pot dengan jumlah volume air dan jadwal yang sama persis.", isCorrect: true },
                  { kode: "C", teks: "Mengubah-ubah jumlah pupuk setiap hari tanpa mencatat ukurannya.", isCorrect: false },
                  { kode: "D", teks: "Mencatat pertambahan tinggi batang dan jumlah daun secara rutin setiap minggu.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "A, B, D adalah prinsip variabel terkontrol dalam metode ilmiah yang valid.",
              },
              soalUraian: {
                level: "C5 (Evaluasi Data Percobaan)",
                pertanyaan: "Berdasarkan hasil percobaan 7 hari, tanaman di tempat terang tingginya 12 cm dengan daun hijau tua dan batang kokoh, sedangkan tanaman di tempat gelap tingginya 18 cm dengan daun kuning pucat dan batang lemas. Buatlah kesimpulan ilmiah dari percobaan tersebut!",
                kunci: "Kesimpulan: Cahaya matahari sangat dibutuhkan oleh tanaman untuk proses fotosintesis yang menghasilkan klorofil (zat hijau daun) dan memperkokoh batang tanaman. Tanaman di tempat gelap mengalami peristiwa 'etiolasi' (tumbuh cepat mencari cahaya namun batangnya lemah dan tidak sehat).",
                pembahasan: "Analisis fenomena etiolasi dan fotosintesis pada tumbuhan.",
                rubrik: [
                  { kriteria: "Menjelaskan fungsi cahaya matahari untuk fotosintesis dan klorofil", skor: 10 },
                  { kriteria: "Menjelaskan fenomena etiolasi batang panjang tapi rapuh di tempat gelap", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 5. Bahasa Inggris (Fase B - Kelas III & IV SD/MI - Wajib Mulai Fase B - CEFR Level A1)
  {
    fase: "Fase B",
    kelasDefault: "Kelas IV",
    mapel: "Bahasa Inggris",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Menyimak - Berbicara (Listening - Speaking)",
        deskripsiCP:
          "Memahami dan merespon teks lisan atau teks multimodal sederhana tentang kehidupan sehari-hari baik secara verbal atau nonverbal sesuai konteks (CEFR Level A1 - target penguasaan kosakata frekuensi tinggi).",
        kompetensiKKO: "Menyimak, Merespons Lisan, Berdialog Sehari-hari",
        lingkupMateri: "Greetings & Self-Introduction, Daily Activities, Classroom Objects, Likes & Dislikes",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Merespons sapaan (greetings), memperkenalkan identitas diri (self-introduction), dan mengekspresikan kesukaan (likes/dislikes) secara lisan menggunakan kalimat bahasa Inggris sederhana dengan percaya diri.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mengenal alfabet dan angka 1-20 dalam bahasa Inggris",
            dimensiKarakterDinas: ["Komunikasi", "Kewargaan", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Bahasa Internasional", "PPRA: Dinamis (Tathawwur)"],
            konteksPembelajaran: {
              stimulus: "Dialog video kartun anak tentang perkenalan murid baru di sekolah: 'Hello, my name is Made. I am nine years old. I like playing soccer and reading comic books.'",
              stimulusKemenag: "Mempelajari bahasa asing membuka jalan silaturahmi global untuk saling mengenal dan menebarkan kebaikan antarbangsa.",
              masalahNyata: "How do you ask your friend's hobby in English politely?",
              kegiatanEksplorasi: [
                "Role-play perkenalan berpasangan di depan kelas (Name, Age, Hobby, Favorite Food).",
                "Chant lagu ceria 'Good Morning, How Are You?' dengan gerak tubuh berirama.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis Bahasa", teks: "Differentiate the usage of 'I like...' versus 'I don't like...' in expressing personal preferences!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Listening and speaking simple English expressions",
                  baru: "Belum percaya diri mengucapkan kata sapaan bahasa Inggris.",
                  layak: "Mampu menjawab sapaan 'How are you?' dengan 'I am fine, thank you.'",
                  cakap: "Mampu memperkenalkan diri dan menyampaikan 3 hobi menggunakan tata bahasa dasar yang tepat.",
                  mahir: "Mampu berdialog interaktif lancar dengan pelafalan (pronunciation) dan intonasi yang natural.",
                },
              ],
              soalPGK: {
                pertanyaan: "Which of the following are CORRECT English greetings for daily communication? (Choose all correct answers!)",
                pilihan: [
                  { kode: "A", teks: "'Good morning, teacher! How are you today?'", isCorrect: true },
                  { kode: "B", teks: "'Nice to meet you, my name is Sarah.'", isCorrect: true },
                  { kode: "C", teks: "'Goodbye, see you tomorrow!'", isCorrect: true },
                  { kode: "D", teks: "'I am sleeping yesterday morning.'", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C are standard daily greetings and farewells. D is grammatically incorrect.",
              },
              soalUraian: {
                level: "C4 (Speaking / Dialogue Construction)",
                pertanyaan: "Write a short 4-line self-introduction dialogue in English including your name, age, class, and favorite activity!",
                kunci: "Example:\n1. 'Hello friends, my name is Ahmad.'\n2. 'I am nine years old.'\n3. 'I am in the fourth grade.'\n4. 'I like drawing scenery pictures and playing badminton.'",
                pembahasan: "Basic A1 CEFR self-introduction model.",
                rubrik: [
                  { kriteria: "Correct name, age, and class structure", skor: 10 },
                  { kriteria: "Correct hobby sentence with 'I like...'", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Membaca - Memirsa & Menulis - Mempresentasikan (Reading, Viewing, Writing)",
        deskripsiCP:
          "Memahami teks tulis pendek sederhana atau teks multimodal tentang kehidupan sehari-hari dan meresponsnya secara verbal atau nonverbal; serta mengomunikasikan gagasan tentang topik sehari-hari dalam teks tulis pendek atau teks multimodal sesuai konteks.",
        kompetensiKKO: "Membaca Teks Pendek, Menemukan Kosakata Kunci, Menulis Deskripsi Sederhana",
        lingkupMateri: "Short Descriptive Texts (Animals, Family, My House), Simple Sentences, Multimodal Posters",
        tpList: [
          {
            kodeTP: "TP.02",
            teksTP:
              "Membaca dan memahami informasi kunci dari teks deskripsi pendek bergambar tentang hewan peliharaan atau keluarga, serta menulis 3-4 kalimat deskriptif sederhana dengan ejaan yang benar.",
            alokasiJP: 6,
            semester: "GENAP",
            prasyarat: "TP.01 - Menguasai kosakata benda di sekitar",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas", "Komunikasi"],
            dimensiKarakterKemenag: ["Cinta Ilmu & Bahasa", "PPRA: Dinamis"],
            konteksPembelajaran: {
              stimulus: "Kartu bacaan bergambar tentang 'My Pet Cat, Miko': 'This is my cat. His name is Miko. He is white and orange. He has soft fur and big eyes. Miko likes drinking milk and playing with a ball.'",
              stimulusKemenag: "Menyayangi hewan ciptaan Tuhan adalah wujud kasih sayang yang dapat diungkapkan melalui tulisan indah.",
              masalahNyata: "How do you describe your bedroom in 3 simple English sentences?",
              kegiatanEksplorasi: [
                "Mencocokkan kalimat deskripsi dengan gambar hewan yang sesuai.",
                "Menulis kartu pos mini 'My Dream House' dengan menempelkan gambar dan menuliskan kalimat pendukungnya.",
              ],
              pertanyaanHOTS: [
                { level: "C6 - Writing Creation", teks: "Create 3 simple descriptive sentences about your favorite animal using adjectives (color, size, ability)!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Reading comprehension and simple writing",
                  baru: "Menyalin kata dengan banyak huruf yang tertukar.",
                  layak: "Mampu membaca teks pendek dan menjawab 2 pertanyaan isi teks.",
                  cakap: "Mampu menulis 3 kalimat deskriptif dengan subjek, to be/kata kerja, dan kata sifat yang tepat.",
                  mahir: "Mampu membuat poster mini multimodal yang memadukan gambar dan paragraf deskriptif bahasa Inggris secara rapi dan menarik.",
                },
              ],
              soalPGK: {
                pertanyaan: "Read the text: 'Rudi has a big brown dog named Buster. Buster has long ears and a friendly tail. Buster loves running in the park.' Which statements are TRUE based on the text? (Choose all correct answers!)",
                pilihan: [
                  { kode: "A", teks: "The dog's name is Buster.", isCorrect: true },
                  { kode: "B", teks: "Buster's color is brown.", isCorrect: true },
                  { kode: "C", teks: "Buster loves running in the park.", isCorrect: true },
                  { kode: "D", teks: "Buster is a small black cat.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C are explicitly stated in the text. D is incorrect.",
              },
              soalUraian: {
                level: "C6 (Simple Writing)",
                pertanyaan: "Arrange these jumbled words into correct English sentences:\n1. (is / my / This / family / happy)\n2. (likes / My / cooking / mother / soup)",
                kunci: "1. 'This is my happy family.'\n2. 'My mother likes cooking soup.'",
                pembahasan: "Subject + Verb / Complement word order in English sentences.",
                rubrik: [
                  { kriteria: "Sentence 1 arranged correctly with capital letter and period", skor: 10 },
                  { kriteria: "Sentence 2 arranged correctly with proper verb agreement", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 6. Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK) (Fase B - Kelas III & IV SD/MI)
  {
    fase: "Fase B",
    kelasDefault: "Kelas IV",
    mapel: "Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Terampil Bergerak dan Belajar Melalui Gerak",
        deskripsiCP:
          "Menghaluskan keterampilan gerak fundamental dan menerapkannya dalam situasi gerak yang baru; menyesuaikan strategi gerak; memperagakan berbagai konsep gerak dalam rangkaian gerak; menerapkan peraturan untuk menumbuhkan fair play di dalam berbagai aktivitas jasmani; serta berpartisipasi positif dalam tim.",
        kompetensiKKO: "Menghaluskan Gerak Dasar, Menerapkan Strategi Permainan, Menjunjung Fair Play",
        lingkupMateri: "Variasi Gerak Dasar Lokomotor, Nonlokomotor, Manipulatif dalam Permainan Bola Kecil/Besar (Kasti, Sepak Bola Mini)",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Mempraktikkan variasi dan kombinasi pola gerak dasar lokomotor, nonlokomotor, dan manipulatif (melempar, menangkap, memukul bola) dalam permainan kasti dan sepak bola mini dengan menjunjung tinggi sportivitas dan kerja sama tim.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mampu melempar dan menangkap bola dengan 2 tangan",
            dimensiKarakterDinas: ["Kesehatan", "Kolaborasi", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Kesehatan Tubuh", "PPRA: Berkeadaban (Ta'addub)"],
            konteksPembelajaran: {
              stimulus: "Pertandingan kasti antarkelas di lapangan sekolah melatih kekompakan tim saat melempar bola ke pemukul dan berlari menuju tiang hinggap dengan aman.",
              stimulusKemenag: "Akal yang sehat terdapat pada tubuh yang kuat (Al-Aqlu as-salim fil jismi as-salim); olahraga teratur menjaga kebugaran fisik sebagai rasa syukur atas nikmat sehat.",
              masalahNyata: "Bagaimana cara mengatur posisi tangan saat menangkap bola kasti yang melambung tinggi agar bola tidak terlepas dan jari tidak cedera?",
              kegiatanEksplorasi: [
                "Latihan sirkuit berpasangan: lempar tangkap bola melambung, mendatar, dan menyusur tanah.",
                "Bermain permainan kasti modifikasi dengan aturan fair play yang disepakati bersama.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis Gerak", teks: "Analisislah keuntungan melempar bola mendatar dibandingkan melempar melambung saat tim penjaga ingin mematikan pelari lawan dalam permainan kasti!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Mempraktikkan variasi gerak manipulatif dan fair play",
                  baru: "Sering melepaskan bola saat menangkap dan emosi jika kalah.",
                  layak: "Mampu memukul bola kasti dari lemparan lambat.",
                  cakap: "Mampu mengombinasikan gerak melempar, menangkap, dan memukul secara akurat serta mematuhi aturan wasit.",
                  mahir: "Mampu mengatur taktik penempatan posisi tim di lapangan dan memberi semangat sportif kepada kawan maupun lawan.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah yang termasuk contoh kombinasi GERAK MANIPULATIF DAN LOKOMOTOR dalam permainan olahraga? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Berlari kencang sambil menggiring bola sepak dengan kaki (dribbling).", isCorrect: true },
                  { kode: "B", teks: "Melompat ke atas sambil melempar bola basket ke dalam ring.", isCorrect: true },
                  { kode: "C", teks: "Berlari menuju tiang hinggap setelah memukul bola kasti.", isCorrect: true },
                  { kode: "D", teks: "Duduk bersila diam di pinggir lapangan sambil minum air.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C menggabungkan gerak berpindah tempat (lokomotor) dengan memainkan objek bola (manipulatif).",
              },
              soalUraian: {
                level: "C4 (Taktik & Keterampilan Gerak)",
                pertanyaan: "Jelaskan bagaimana posisi kaki, badan, dan kedua telapak tangan yang benar saat bersiap menangkap bola kasti yang datang melambung tinggi!",
                kunci: "1. Posisi kaki dibuka selebar bahu dengan salah satu kaki sedikit di depan untuk menjaga keseimbangan. 2. Pandangan mata fokus mengarah ke arah datangnya bola. 3. Kedua telapak tangan dirapatkan membentuk corong/mangkuk di depan dada/wajah dengan jari-jari rileks terbuka. 4. Saat bola menyentuh telapak tangan, jari-jari segera menutup dan tarik tangan sedikit ke belakang untuk meredam laju bola.",
                pembahasan: "Teknik dasar menangkap bola lambung pada permainan bola kecil.",
                rubrik: [
                  { kriteria: "Menjelaskan posisi kaki dan fokus pandangan mata", skor: 10 },
                  { kriteria: "Menjelaskan bentuk tangan mangkuk dan gerakan meredam laju bola", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Bergaya Hidup Aktif dan Memilih Hidup yang Menyehatkan",
        deskripsiCP:
          "Berpartisipasi dalam berbagai aktivitas jasmani dan mengenali faktor yang menyebabkannya menyenangkan; mengenali risiko kesehatan akibat gaya hidup dan aktivitas pencegahannya; mengidentifikasi pola makan sehat dan bergizi seimbang sesuai rekomendasi kesehatan; serta mempraktikkan penanganan cedera ringan sesuai prinsip pertolongan pertama (P3K).",
        kompetensiKKO: "Menganalisis Gaya Hidup Sehat, Pola Makan Bergizi Seimbang, Praktik P3K Cedera Ringan",
        lingkupMateri: "Pola Makan Gizi Seimbang (Isi Piringku), Pencegahan Penyakit Menular, P3K Luka Lecet & Memar (Metode RICE)",
        tpList: [
          {
            kodeTP: "TP.02",
            teksTP:
              "Mengidentifikasi prinsip pola makan sehat bergizi seimbang (Isi Piringku), bahaya makanan cepat saji (junk food), serta mempraktikkan langkah pertolongan pertama pada cedera ringan (luka lecet dan memar/terkilir) dengan prosedur yang tepat.",
            alokasiJP: 6,
            semester: "GENAP",
            prasyarat: "Mengenal kebersihan diri dan cuci tangan 6 langkah",
            dimensiKarakterDinas: ["Kesehatan", "Kemandirian", "Penalaran Kritis"],
            dimensiKarakterKemenag: ["Cinta Kesehatan & Kebersihan", "PPRA: Keseimbangan (Tawazun)"],
            konteksPembelajaran: {
              stimulus: "Poster pedoman 'Isi Piringku' dari Kementerian Kesehatan memperlihatkan porsi 1/2 piring berisi sayur dan buah, serta 1/2 piring lagi berisi makanan pokok (karbohidrat) dan lauk pauk (protein).",
              stimulusKemenag: "Konsumsilah makanan yang halal lagi baik (thayyib) dan jangan berlebih-lebihan agar tubuh selalu bugar dan terhindar dari penyakit.",
              masalahNyata: "Bagaimana cara memberikan pertolongan pertama yang benar jika ada teman terjatuh saat lari pagi hingga lututnya mengalami luka lecet berdarah?",
              kegiatanEksplorasi: [
                "Simulasi membersihkan luka lecet dengan air mengalir, antiseptik, dan memasang plester luka.",
                "Menyusun menu makan siang gizi seimbang untuk bekal sekolah.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Kesehatan", teks: "Evaluasilah dampak jangka panjang dari kebiasaan mengonsumsi makanan manis/minuman kemasan berpemanis buatan setiap hari terhadap kesehatan tubuh!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menganalisis gizi seimbang dan mempraktikkan P3K",
                  baru: "Mengobati luka dengan meniupnya menggunakan mulut.",
                  layak: "Mampu menyebutkan zat gizi karbohidrat, protein, dan vitamin.",
                  cakap: "Mampu membersihkan luka lecet dan mengompres memar dengan es secara benar.",
                  mahir: "Mampu menjelaskan protokol pertolongan pertama (RICE) dan merancang menu pola hidup sehat keluarga.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah tindakan PERTOLONGAN PERTAMA PADA KECELAKAAN (P3K) yang BENAR untuk menangani luka lecet dan memar? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Membasuh luka lecet yang kotor dengan air bersih mengalir atau cairan antiseptik steril.", isCorrect: true },
                  { kode: "B", teks: "Mengompres bagian tubuh yang memar/terbentur dengan kantong es dingin untuk mengurangi pembengkakan.", isCorrect: true },
                  { kode: "C", teks: "Menutup luka lecet yang sudah bersih dengan perban/plester steril agar terhindar dari kuman.", isCorrect: true },
                  { kode: "D", teks: "Mengoleskan pasta gigi atau mentega pada luka berdarah yang terbuka lebar.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah protokol P3K luka ringan yang higienis. D dilarang karena dapat memicu infeksi parah.",
              },
              soalUraian: {
                level: "C4 (Prosedur P3K & Nutrisi)",
                pertanyaan: "Jelaskan apa yang dimaksud dengan pedoman 'Isi Piringku' dalam menu makan bergizi seimbang dan sebutkan proporsi pembagian piring makannya!",
                kunci: "Pedoman 'Isi Piringku' adalah panduan porsi makan sehat sekali makan yang proporsional:\n1. 1/3 bagian dari piring berisi Makanan Pokok (sumber karbohidrat: nasi, jagung, ubi).\n2. 1/3 bagian dari piring berisi Sayur-mayur (sumber serat dan mineral).\n3. 1/6 bagian dari piring berisi Lauk Pauk (sumber protein hewani/nabati: telur, ikan, tahu, tempe).\n4. 1/6 bagian dari piring berisi Buah-buahan (sumber vitamin).\n(Dilengkapi dengan minum air putih yang cukup dan mencuci tangan pakai sabun).",
                pembahasan: "Standar pedoman nutrisi nasional Kementerian Kesehatan RI.",
                rubrik: [
                  { kriteria: "Menjelaskan pembagian 1/2 piring untuk sayur dan buah", skor: 10 },
                  { kriteria: "Menjelaskan pembagian 1/2 piring untuk makanan pokok dan lauk pauk", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },
];
