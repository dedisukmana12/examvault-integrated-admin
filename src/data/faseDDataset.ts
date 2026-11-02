// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import { CPDataset } from "./curriculumDatabase";

export const FASE_D_DATASETS: CPDataset[] = [
  // 1. Pendidikan Pancasila (Fase D - Kelas VII/VIII/IX)
  {
    fase: "Fase D",
    kelasDefault: "Kelas VII",
    mapel: "Pendidikan Pancasila",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pancasila",
        deskripsiCP:
          "Menganalisis kronologi sejarah lahirnya Pancasila; memahami kedudukan dan fungsi Pancasila sebagai dasar negara, pandangan hidup bangsa, dan ideologi negara; menerapkan nilai-nilai Pancasila dalam kehidupan bermasyarakat, berbangsa, dan bernegara.",
        kompetensiKKO: "Menganalisis Kronologi Sejarah, Memahami Kedudukan & Fungsi Ideologi, Menerapkan Nilai Pancasila",
        lingkupMateri: "Sejarah BPUPK & PPKI, Rumusan Piagam Jakarta, Pancasila sebagai Dasar Negara & Pandangan Hidup",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menganalisis kronologi historis perumusan dan penetapan Pancasila sebagai dasar negara oleh BPUPK dan PPKI serta kedudukannya sebagai ideologi terbuka bangsa Indonesia.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Memahami simbol dan sila-sila Pancasila",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Penalaran Kritis", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Tanah Air", "Cinta Kebenaran Sejarah", "PPRA: Keteladanan (Qudwah)"],
            konteksPembelajaran: {
              stimulus: "Sidang pertama BPUPK (29 Mei - 1 Juni 1945) mendengarkan pidato para pendiri bangsa, diakhiri dengan pidato Ir. Soekarno pada 1 Juni 1945 yang mengusulkan nama 'Pancasila'.",
              stimulusKemenag: "Konsensus kebangsaan para ulama dan tokoh nasional dalam Piagam Jakarta dan penetapan 18 Agustus 1945 adalah bukti komitmen kebangsaan berbasis kemaslahatan umat (mu'ahadah wathaniyyah).",
              masalahNyata: "Bagaimana para pendiri bangsa berhasil mengatasi perbedaan pandangan mengenai dasar negara dengan mengedepankan musyawarah dan kepentingan bangsa di atas golongan?",
              kegiatanEksplorasi: [
                "Analisis perbandingan rumusan dasar negara menurut Mr. Mohammad Yamin, Prof. Dr. Soepomo, dan Ir. Soekarno.",
                "Eksplorasi dokumen historis Piagam Jakarta (Jakarta Charter) 22 Juni 1945 hingga rumusan final 18 Agustus 1945.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Historis", teks: "Evaluasilah kearifan sikap para pendiri bangsa saat menyepakati perubahan kalimat sila pertama dalam Piagam Jakarta demi menjaga keutuhan Republik Indonesia yang majemuk!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menganalisis sejarah perumusan dan fungsi Pancasila",
                  baru: "Hanya menghafal tanggal sidang tanpa memahami substansi usulan para tokoh.",
                  layak: "Mampu menjelaskan peran BPUPK dan PPKI dalam perumusan Pancasila.",
                  cakap: "Mampu menganalisis komparasi gagasan dasar negara dan proses konsensus kebangsaan.",
                  mahir: "Mampu mengevaluasi urgensi Pancasila sebagai ideologi terbuka dalam menjawab tantangan geopolitik kontemporer.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah pernyataan yang BENAR mengenai sejarah perumusan dan penetapan Pancasila? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Sidang BPUPK pertama berlangsung pada tanggal 29 Mei sampai dengan 1 Juni 1945.", isCorrect: true 
              },
                  { kode: "B", teks: "Panitia Sembilan berhasil merumuskan naskah Mukaddimah/Piagam Jakarta pada 22 Juni 1945.", isCorrect: true },
                  { kode: "C", teks: "Pancasila secara resmi disahkan sebagai dasar negara oleh PPKI pada tanggal 18 Agustus 1945.", isCorrect: true },
                  { kode: "D", teks: "Pancasila dirumuskan dan ditetapkan secara sepihak tanpa perdebatan oleh pemerintah pendudukan Jepang.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Pancasila dirumuskan melalui proses dialektika dan musyawarah mendalam oleh BPUPK, Panitia Sembilan, dan disahkan oleh PPKI pada 18 Agustus 1945.",
              },
              soalUraian: {
                level: "C4 (Analisis Nilai Kebangsaan)",
                pertanyaan: "Jelaskan 3 (tiga) nilai keteladanan dari para tokoh pendiri bangsa (the founding fathers) saat merumuskan dasar negara yang relevan untuk diterapkan oleh generasi muda saat ini!",
                kunci: "1. Jiwa patriotisme dan cinta tanah air yang menempatkan persatuan di atas kepentingan pribadi/golongan. 2. Sikap toleran, berjiwa besar, dan mengutamakan musyawarah mufakat dalam menerima perbedaan. 3. Komitmen teguh terhadap integritas moral, kejujuran, dan kemandirian bangsa.",
                pembahasan: "Refleksi nilai keteladanan pendiri bangsa dalam perumusan Pancasila.",
                rubrik: [
                  { kriteria: "Menyebutkan dan menjelaskan 3 nilai keteladanan secara komprehensif", skor: 15 },
                  { kriteria: "Mengaitkan dengan relevansi kehidupan generasi muda saat ini", skor: 5 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Undang-Undang Dasar Negara Republik Indonesia Tahun 1945",
        deskripsiCP:
          "Menganalisis periodisasi konstitusi Indonesia dan tata urutan peraturan perundang-undangan; memahami hak dan kewajiban warga negara sesuai UUD 1945; berpartisipasi aktif dalam mentaati norma dan peraturan di sekolah, masyarakat, dan negara.",
        kompetensiKKO: "Menganalisis Periodisasi Konstitusi, Mengklasifikasikan Tata Urutan UU, Mentaati Norma Hukum",
        lingkupMateri: "Hierarki Peraturan Perundang-undangan (UU No. 12/2011 jo UU No. 13/2022), Norma Hukum & Konstitusi",
        tpList: [
          {
            kodeTP: "TP.02",
            teksTP:
              "Menganalisis tata urutan peraturan perundang-undangan dalam sistem hukum nasional serta menegakkan ketaatan terhadap norma hukum dan konstitusi UUD NRI Tahun 1945.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Memahami norma kesopanan, kesusilaan, agama, dan hukum",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kewargaan", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Hukum & Keadilan", "PPRA: Berimbang (Tawazun)"],
            konteksPembelajaran: {
              stimulus: "Hierarki peraturan perundang-undangan diatur dalam UU No. 12 Tahun 2011 di mana peraturan yang lebih rendah tidak boleh bertentangan dengan peraturan yang lebih tinggi (Lex Superior Derogat Legi Inferiori).",
              stimulusKemenag: "Ketaatan kepada konstitusi dan hukum yang adil (Ulil Amri) adalah kewajiban warga negara demi terwujudnya ketertiban dan kedamaian sosial.",
              masalahNyata: "Apa yang terjadi jika suatu Peraturan Daerah (Perda) bertentangan dengan Undang-Undang atau UUD NRI Tahun 1945?",
              kegiatanEksplorasi: [
                "Menyusun diagram tangga tata urutan peraturan perundang-undangan Republik Indonesia.",
                "Simulasi uji materi (judicial review) di Mahkamah Konstitusi terhadap undang-undang yang diduga melanggar hak konstitusional.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Yuridis", teks: "Evaluasilah peran Mahkamah Konstitusi (MK) dan Mahkamah Agung (MA) dalam menguji peraturan perundang-undangan demi menjaga supremasi hukum di Indonesia!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menganalisis hierarki peraturan hukum",
                  baru: "Mengetahui istilah undang-undang tanpa memahami hierarki kekuatannya.",
                  layak: "Mampu menyebutkan urutan peraturan perundang-undangan dari UUD 1945 sampai Perda.",
                  cakap: "Mampu menganalisis asas hukum dan mekanisme pengujian perundang-undangan.",
                  mahir: "Mampu merancang draf peraturan kelas berbasis asas kepastian hukum dan keadilan sosial.",
                },
              ],
              soalPGK: {
                pertanyaan: "Berdasarkan Pasal 7 Ayat (1) UU No. 12 Tahun 2011, manakah jenis peraturan perundang-undangan yang posisinya LEBIH TINGGI dari Peraturan Pemerintah (PP)? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Undang-Undang Dasar Negara Republik Indonesia Tahun 1945.", isCorrect: true 
              },
                  { kode: "B", teks: "Ketetapan Majelis Permusyawaratan Rakyat (TAP MPR).", isCorrect: true },
                  { kode: "C", teks: "Undang-Undang / Peraturan Pemerintah Pengganti Undang-Undang (Perppu).", isCorrect: true },
                  { kode: "D", teks: "Peraturan Presiden (Perpres).", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Urutan dari tertinggi: 1. UUD 1945, 2. TAP MPR, 3. UU/Perppu, 4. PP, 5. Perpres, 6. Perda Provinsi, 7. Perda Kab/Kota.",
              },
              soalUraian: {
                level: "C4 (Analisis Asas Hukum)",
                pertanyaan: "Jelaskan arti dari asas hukum 'Lex Superior Derogat Legi Inferiori' dan berikan contoh penerapannya dalam penyusunan Peraturan Daerah (Perda)!",
                kunci: "Asas 'Lex Superior Derogat Legi Inferiori' bermakna bahwa peraturan perundang-undangan yang lebih tinggi tingkatannya mengesampingkan atau mengalahkan peraturan yang lebih rendah. Contoh: Sebuah Peraturan Daerah (Perda) Kabupaten/Kota tidak boleh memuat pasal yang melarang hak asasi atau bertentangan dengan Undang-Undang Nasional. Jika bertentangan, pasal Perda tersebut batal demi hukum.",
                pembahasan: "Penerapan asas hierarki hukum nasional.",
                rubrik: [
                  { kriteria: "Menjelaskan definisi asas hukum dengan tepat", skor: 10 },
                  { kriteria: "Memberikan contoh kasus pertentangan norma hukum yang valid", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Bhinneka Tunggal Ika",
        deskripsiCP:
          "Mengidentifikasi dan mengapresiasi kebebasan beragama, suku, ras, dan antargolongan; mengkritisi stereotip, prasangka, serta diskriminasi; menginisiasi kolaborasi budaya untuk memperkuat persatuan dan kesatuan nasional.",
        kompetensiKKO: "Mengidentifikasi Keragaman, Mengkritisi Stereotip & Diskriminasi, Menginisiasi Kolaborasi Budaya",
        lingkupMateri: "Harmonisasi Keberagaman SARA, Penolakan Diskriminasi/Stereotip, Kolaborasi Lintas Etnis",
        tpList: [
          {
            kodeTP: "TP.03",
            teksTP:
              "Mengkritisi bahaya stereotip, prasangka, etnosentrisme, dan diskriminasi serta merancang inisiatif kolaborasi lintas budaya demi memperkukuh integrasi nasional.",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "Mengenal bentuk keragaman budaya Indonesia",
            dimensiKarakterDinas: ["Kewargaan", "Penalaran Kritis", "Kolaborasi"],
            dimensiKarakterKemenag: ["Cinta Kemanusiaan", "PPRA: Toleransi (Tasamuh)", "PPRA: Musyawarah (Syura)"],
            konteksPembelajaran: {
              stimulus: "Studi kasus fenomena 'echo chamber' di media sosial yang sering kali memperbesar prasangka antar-kelompok dan melahirkan ujaran kebencian berbasis identitas.",
              stimulusKemenag: "Menolak stereotip dan memuliakan sesama manusia tanpa memandang latar belakang etnis/agama adalah manifestasi karamah insaniyyah (kemuliaan martabat manusia).",
              masalahNyata: "Bagaimana cara meredam prasangka dan membangun rasa saling percaya di antara kelompok remaja yang berasal dari latar belakang etnis berbeda?",
              kegiatanEksplorasi: [
                "Studi analisis konten media sosial mengenai bahaya generalisasi/stereotip negatif suatu suku bangsa.",
                "Perancangan proyek mini festival budaya kolaboratif 'Nusantara Harmoni'.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Sosiologis", teks: "Evaluasilah dampak psikologis dan sosial dari sikap etnosentrisme sempit terhadap keharmonisan masyarakat perkotaan yang multikultural!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Mengkritisi stereotip dan membangun toleransi",
                  baru: "Masih memandang kelompok lain dengan prasangka sepihak.",
                  layak: "Mampu menjelaskan pengertian stereotip dan etnosentrisme.",
                  cakap: "Mampu menganalisis akar penyebab konflik SARA dan menawarkan langkah mitigasi berbasis dialog.",
                  mahir: "Mampu menginisiasi forum kolaborasi remaja lintas agama dan suku dengan dampak nyata di lingkungan sekolah.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah sikap yang DAPAT MERUSAK persatuan dan kesatuan dalam masyarakat majemuk? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Etnosentrisme (menganggap kebudayaan sukunya sendiri lebih unggul daripada suku lain).", isCorrect: true 
              },
                  { kode: "B", teks: "Stereotip (penilaian negatif yang digeneralisasikan kepada seluruh anggota kelompok tertentu).", isCorrect: true },
                  { kode: "C", teks: "Primordialisme berlebihan yang menolak kerja sama dengan kelompok luar.", isCorrect: true },
                  { kode: "D", teks: "Inklusivisme (sikap terbuka dan menghargai perbedaan latar belakang).", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah faktor pemecah belah bangsa. D (inklusivisme) adalah sikap perekat kebhinekaan.",
              },
              soalUraian: {
                level: "C5 (Evaluasi dan Solusi Masalah)",
                pertanyaan: "Di sebuah sekolah baru, terjadi pengelompokan (geng) antarsiswa yang hanya mau bergaul dengan sesama teman satu daerah asal dan saling mengejek aksen bicara. Analisislah mengapa perilaku tersebut membahayakan iklim sekolah dan rancanglah 2 kegiatan solutif untuk menyatukan mereka!",
                kunci: "Perilaku tersebut membahayakan karena memicu polarisasi, merusak kesehatan mental siswa korban ejekan, serta melanggar prinsip kebhinekaan di sekolah. 2 Solusi: 1. Pembagian kelompok belajar/proyek secara acak dan heterogen lintas daerah asal. 2. Mengadakan gelar karya seni dan kuliner daerah bertajuk 'Pekan Budaya Bhinneka' di mana setiap siswa memperkenalkan keunikan tradisi budayanya secara apresiatif.",
                pembahasan: "Solusi terapan mengatasi prasangka sosial antarsiswa.",
                rubrik: [
                  { kriteria: "Menganalisis bahaya polarisasi dan dampak buruknya bagi iklim sekolah", skor: 10 },
                  { kriteria: "Merumuskan 2 solusi konkret dan terstruktur", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Negara Kesatuan Republik Indonesia",
        deskripsiCP:
          "Menganalisis bentuk negara, bentuk pemerintahan, dan sistem otonomi daerah; memahami potensi ancaman terhadap keutuhan NKRI; berpartisipasi aktif dalam kegiatan bela negara dan menjaga kedaulatan wilayah NKRI.",
        kompetensiKKO: "Menganalisis Bentuk Negara/Pemerintahan, Memetakan Ancaman Nir-Militer, Melakukan Bela Negara",
        lingkupMateri: "Pasal 1 Ayat (1) UUD 1945 (Negara Kesatuan), Ancaman Militer & Nir-militer (Cyber/Ideologi), Bela Negara",
        tpList: [
          {
            kodeTP: "TP.04",
            teksTP:
              "Menganalisis karakteristik kedaulatan NKRI, bentuk pemerintahan republik, serta memetakan ancaman siber dan disinformasi sebagai tantangan bela negara di era modern.",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "Memahami wilayah perbatasan dan konsep negara kepulauan",
            dimensiKarakterDinas: ["Kewargaan", "Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Tanah Air", "PPRA: Kewarganegaraan & Kebangsaan (Muwatanah)"],
            konteksPembelajaran: {
              stimulus: "Serangan siber terhadap pusat data nasional dan maraknya hoaks politik luar negeri merupakan bentuk ancaman nir-militer (non-militer) yang nyata terhadap kedaulatan bangsa.",
              stimulusKemenag: "Menjaga kedaulatan digital dan keamanan informasi bangsa adalah bagian tak terpisahkan dari ikhtiar menjaga kehormatan tanah air (bela negara).",
              masalahNyata: "Mengapa perang modern di abad ke-21 tidak lagi hanya menggunakan senjata fisik, melainkan perang informasi dan perang siber (cyber warfare)?",
              kegiatanEksplorasi: [
                "Pemetaan matriks ancaman terhadap NKRI: Ancaman Militer (Agresi, Sabotase) vs Ancaman Non-Militer (Radikalisme, Perang Siber, Krisis Pangan).",
                "Penyusunan kode etik literasi digital kelas sebagai wujud partisipasi bela negara di ruang siber.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Strategis", teks: "Evaluasilah keunggulan sistem pertahanan dan keamanan rakyat semesta (Sishankamrata) Indonesia dalam menghadapi ancaman asimetris dan perang hibrida modern!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Analisis bentuk negara dan bela negara digital",
                  baru: "Menganggap bela negara hanya mengangkat senjata saat perang.",
                  layak: "Mampu menjelaskan perbedaan ancaman militer dan non-militer.",
                  cakap: "Mampu menganalisis ancaman digital terhadap integritas bangsa dan merumuskan langkah mitigasi.",
                  mahir: "Mampu menyusun strategi kampanye literasi kebangsaan digital berbasis bukti empiris.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah yang merupakan bentuk ANCAMAN NON-MILITER terhadap kedaulatan dan keutuhan bangsa Indonesia? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Serangan peretasan (cyber attack) terhadap infrastruktur data strategis nasional.", isCorrect: true 
              },
                  { kode: "B", teks: "Penyebaran ideologi radikalisme dan intoleransi melalui media sosial.", isCorrect: true },
                  { kode: "C", teks: "Penyelundupan narkoba dalam skala besar yang merusak generasi muda bangsa.", isCorrect: true },
                  { kode: "D", teks: "Invasi militer tentara asing menduduki ibukota negara.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah ancaman non-militer (nir-militer). Pilihan D adalah bentuk ancaman militer terbuka.",
              },
              soalUraian: {
                level: "C4 (Analisis Bela Negara Generasi Muda)",
                pertanyaan: "Mengapa kemampuan literasi digital dan sikap kritis dalam menyaring informasi di media sosial dapat dikategorikan sebagai salah satu bentuk tindakan 'Bela Negara' bagi siswa SMP/MTs saat ini?",
                kunci: "Karena di era perang informasi (hybrid warfare), ancaman perpecahan bangsa sering disusupkan lewat hoaks, provokasi adu domba, dan manipulasi data. Siswa yang memiliki literasi digital tinggi dan kritis mampu membentengi diri serta masyarakat dari provokasi yang mengancam persatuan, menjaga ketahanan informasi bangsa, dan mencegah polarisasi sosial.",
                pembahasan: "Konsep bela negara non-fisik di era transformasi digital.",
                rubrik: [
                  { kriteria: "Menjelaskan ancaman polarisasi/hoaks di ruang digital", skor: 10 },
                  { kriteria: "Mengaitkan literasi digital dengan upaya menjaga persatuan bangsa", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 2. Bahasa Indonesia (Fase D - Kelas VII/VIII/IX)
  {
    fase: "Fase D",
    kelasDefault: "Kelas VII",
    mapel: "Bahasa Indonesia",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Menyimak",
        deskripsiCP:
          "Menganalisis, mengevaluasi, dan menyimpulkan gagasan, pikiran, perasaan, arahan, atau pesan dari berbagai jenis teks lisan, audio, atau visual (deskripsi, narasi, prosedur, eksposisi, eksplanasi, diskusi, dan ulasan).",
        kompetensiKKO: "Menganalisis Gagasan Teks Lisan, Mengevaluasi Akurasi Informasi, Menyimpulkan Pesan",
        lingkupMateri: "Teks Laporan Hasil Observasi (LHO) Lisan, Teks Diskusi/Debat Audio-Visual, Struktur & Akurasi Fakta",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menganalisis dan mengevaluasi gagasan pokok, struktur informasi, serta akurasi fakta dari teks laporan hasil observasi (LHO) dan teks diskusi lisan/audio-visual.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Mampu membedakan fakta dan opini pada teks lisan",
            dimensiKarakterDinas: ["Penalaran Kritis", "Komunikasi", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu & Tabayyun", "PPRA: Berkeadaban"],
            konteksPembelajaran: {
              stimulus: "Rekaman siniar dokumenter mengenai ekosistem mangrove di pesisir Jawa yang memaparkan data klasifikasi ilmiah, fungsi ekologis, dan ancaman abrasi laut.",
              stimulusKemenag: "Menyimak dengan cermat dan meneliti kebenaran berita sains adalah cerminan adab penuntut ilmu yang berorientasi pada kemanfaatan alam.",
              masalahNyata: "Bagaimana cara menyarikan definisi umum, deskripsi bagian, dan deskripsi manfaat dari paparan audio laporan observasi yang bergerak cepat?",
              kegiatanEksplorasi: [
                "Menyimak video observasi alam dan menyusun peta pikiran (mind map) klasifikasi objek yang diamati.",
                "Evaluasi validitas data statistik yang disampaikan pembicara dalam debat audio.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Kritis", teks: "Evaluasilah konsistensi antara data pengamatan lapangan yang disampaikan pembicara dengan kesimpulan rekomendasi yang ditariknya!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menyimak dan mengevaluasi teks LHO lisan",
                  baru: "Hanya menangkap kata-kata umum tanpa mencatat data spesifik objek observasi.",
                  layak: "Mampu menuliskan kembali 3 fakta penting dari rekaman observasi.",
                  cakap: "Mampu membedakan definisi umum, deskripsi bagian, dan deskripsi manfaat serta mengevaluasi kejelasan data.",
                  mahir: "Mampu menyimpulkan implikasi ilmiah dari wacana lisan dan mendeteksi inkonsistensi argumen secara tajam.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah ciri-ciri teks Laporan Hasil Observasi (LHO) yang disimak secara lisan? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Bersifat objektif, faktual, dan dapat dibuktikan secara ilmiah.", isCorrect: true 
              },
                  { kode: "B", teks: "Memuat klasifikasi objek berdasarkan kriteria tertentu (definisi umum dan deskripsi bagian).", isCorrect: true },
                  { kode: "C", teks: "Disusun berdasarkan imajinasi dan perasaan pribadi penutur semata.", isCorrect: false },
                  { kode: "D", teks: "Menjelaskan deskripsi manfaat dari objek yang diamati bagi kehidupan.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "LHO memuat fakta objektif, bukan rekaan imajinatif.",
              },
              soalUraian: {
                level: "C4 (Analisis Struktur LHO Lisan)",
                pertanyaan: "Dengarkan petikan wacana: 'Bunga Rafflesia arnoldii merupakan tumbuhan parasit obligat tanpa daun, akar, dan batang sejati. Bunga ini mengeluarkan aroma busuk untuk menarik serangga lalat bangkai guna membantu penyerbukannya.' Tentukan bagian struktur teks LHO dari petikan tersebut dan jelaskan fungsinya!",
                kunci: "Petikan tersebut memuat struktur 'Definisi Umum dan Deskripsi Bagian/Karakteristik Fisik'. Fungsinya memberikan gambaran ilmiah mengenai sifat biologi Rafflesia sebagai parasit serta mekanisme adaptasi reproduksinya menggunakan aroma pemikat serangga.",
                pembahasan: "Mengidentifikasi struktur dan fungsi deskriptif ilmiah dalam LHO.",
                rubrik: [
                  { kriteria: "Mengidentifikasi struktur definisi umum/deskripsi bagian", skor: 10 },
                  { kriteria: "Menjelaskan fungsi biologis dan konteks kalimat secara tepat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Membaca dan Memirsa",
        deskripsiCP:
          "Mengevaluasi informasi tersurat dan tersirat, gagasan utama, ide pendukung, serta bias tulisan dari teks fiksi dan nonfiksi; membandingkan struktur, kaidah kebahasaan, dan gaya bahasa dari beragam teks.",
        kompetensiKKO: "Mengevaluasi Informasi Tersirat, Mendeteksi Bias Penulis, Mengomparasi Struktur Teks",
        lingkupMateri: "Teks Cerpen Realis, Teks Berita Daring, Teks Tanggapan Kritis, Gaya Bahasa & Konotasi",
        tpList: [
          {
            kodeTP: "TP.02",
            teksTP:
              "Mengevaluasi gagasan tersirat, sudut pandang pengarang, pesan moral cerpen, serta membandingkan struktur dan kaidah kebahasaan pada teks berita daring dan teks tanggapan kritis.",
            alokasiJP: 10,
            semester: "GANJIL",
            prasyarat: "Mampu menentukan ide pokok dan ide penjelas paragraf",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Bahasa & Sastra", "PPRA: Dinamis & Terbuka"],
            konteksPembelajaran: {
              stimulus: "Dua artikel berita daring meliput peristiwa yang sama (kenaikan harga bahan pangan) dengan sudut pandang dan pemilihan diksi berita (frame) yang kontras.",
              stimulusKemenag: "Menganalisis teks dengan kacamata kritis melatih kecerdasan akal budi untuk membedakan kebenaran substantif dari framing opini sepihak.",
              masalahNyata: "Bagaimana cara mendeteksi keberpihakan (bias) seorang penulis dalam artikel berita opini?",
              kegiatanEksplorasi: [
                "Tabel komparasi unsur 5W+1H (Adiksimba) dan piramida terbalik dari 2 portal berita daring berbeda.",
                "Bedah unsur intrinsik cerpen (tokoh, latar, konflik batin, alur, dan sudut pandang pencerita).",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Teks", teks: "Bandingkan efektivitas penggunaan gaya bahasa sarkasme versus analogi logis dalam teks tanggapan kritis terhadap sebuah fenomena sosial!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Mengevaluasi teks berita dan cerpen",
                  baru: "Hanya membaca judul tanpa memahami isi berita.",
                  layak: "Mampu menemukan unsur Adiksimba dalam teks berita.",
                  cakap: "Mampu menganalisis pesan tersirat dan membandingkan sudut pandang dua media berita.",
                  mahir: "Mampu mengevaluasi gaya bahasa kepengarangan dan menulis kritik sastra analitis.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah pernyataan yang BENAR mengenai kaidah kebahasaan teks berita? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Menggunakan bahasa baku dan lugas (denotatif) untuk menghindari multi-interpretasi.", isCorrect: true 
              },
                  { kode: "B", teks: "Memuat verba pewarta (kata kerja seperti: mengatakan, menegaskan, memaparkan).", isCorrect: true },
                  { kode: "C", teks: "Menggunakan keterangan waktu dan tempat yang spesifik.", isCorrect: true },
                  { kode: "D", teks: "Selalu menggunakan majas hiperbola untuk mendramatisir berita.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Berita menggunakan bahasa denotatif faktual, verba pewarta, dan keterangan ruang-waktu yang jelas.",
              },
              soalUraian: {
                level: "C4 (Analisis Unsur Intrinsik Cerpen)",
                pertanyaan: "Bacalah kutipan cerpen: 'Di bawah temaram lampu minyak, kakek memandang cangkul tuanya di sudut gubuk. Tanah sawah warisan leluhur itu kini telah berubah menjadi deretan ruko beton. Hatinya perih, namun bibirnya tersenyum kelu melihat cucunya tertidur pulas berbekal buku tulis baru.' Analisislah konflik batin yang dialami tokoh Kakek dan tentukan tema dari kutipan tersebut!",
                kunci: "Konflik Batin: Kakek merasakan kepedihan mendalam karena harus kehilangan tanah sawah warisan leluhur akibat alih fungsi lahan pembangunan ruko, namun di sisi lain ia berusaha tabah dan rela karena uang penjualan tanah tersebut digunakan untuk membiayai masa depan dan pendidikan cucunya. Tema: Pengorbanan generasi tua demi masa depan pendidikan generasi penerus di tengah arus modernisasi.",
                pembahasan: "Menganalisis konflik psikologis tokoh dan menyimpulkan tema implisit.",
                rubrik: [
                  { kriteria: "Menganalisis konflik batin antara kehilangan tanah vs masa depan cucu", skor: 10 },
                  { kriteria: "Menyimpulkan tema cerpen secara tepat dan mendalam", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Berbicara dan Mempresentasikan",
        deskripsiCP:
          "Sampaikan gagasan, pandangan, atau argumen secara logis, kritis, dan santun dalam bentuk diskusi, presentasi, atau debat; menggunakan volume, intonasi, gestur, serta media presentasi secara efektif.",
        kompetensiKKO: "Menyampaikan Argumen Debat, Mempresentasikan Proyek, Menerapkan Retorika & Santun Berbahasa",
        lingkupMateri: "Debat Terstruktur Berbasis Mosi, Presentasi Ilmiah Remaja, Etika Berpendapat & Sangkalan",
        tpList: [
          {
            kodeTP: "TP.03",
            teksTP:
              "Menyampaikan argumen pro dan kontra secara logis, berbasis data faktual, dan santun dalam kegiatan debat formal atau diskusi panel mengenai isu-isu lingkungan dan teknologi.",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "Mampu berbicara di depan umum dengan artikulasi jelas",
            dimensiKarakterDinas: ["Komunikasi", "Penalaran Kritis", "Kolaborasi"],
            dimensiKarakterKemenag: ["Cinta Keadilan", "PPRA: Musyawarah (Syura)", "PPRA: Berkeadaban"],
            konteksPembelajaran: {
              stimulus: "Mosi Debat: 'Dewan ini akan melarang penggunaan kecerdasan buatan (AI) secara total dalam pengerjaan tugas akademik siswa sekolah menengah.'",
              stimulusKemenag: "Menyampaikan argumentasi dengan data yang sahih dan kalimat yang santun (qaulan layyina) adalah adab berdialog dalam Islam.",
              masalahNyata: "Bagaimana cara menyanggah argumen tim lawan dalam debat tanpa menyerang pribadi pembicara (ad hominem)?",
              kegiatanEksplorasi: [
                "Simulasi debat format Parlemen Asia/Australia (Tim Afirmatif, Oposisi, dan Juri Netral).",
                "Teknik konstruksi argumen A-R-E-L (Assertion, Reasoning, Evidence, Link back).",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Argumen Debat", teks: "Evaluasilah kekuatan argumen tim oposisi yang menggunakan data survei nasional dibanding argumen tim afirmatif yang berbasis studi kasus lokal!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Keterampilan berdebat dan argumentasi ilmiah",
                  baru: "Menyampaikan pendapat berdasarkan emosi tanpa dasar bukti.",
                  layak: "Mampu menyampaikan argumen yang relevan dengan mosi.",
                  cakap: "Mampu menyusun argumen lengkap berstruktur AREL dan menyanggah lawan dengan logis serta santun.",
                  mahir: "Mampu menguasai dinamika panggung, intonasi persuasif tinggi, dan mematahkan argumen sentral lawan dengan data komparatif presisi.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah struktur pembangun ARGUMEN YANG KUAT (Metode A-R-E-L) dalam sebuah debat ilmiah? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Assertion (Pernyataan pokok/klaim posisi yang jelas).", isCorrect: true 
              },
                  { kode: "B", teks: "Reasoning (Penjelasan logis mengapa klaim tersebut benar).", isCorrect: true },
                  { kode: "C", teks: "Evidence (Bukti data, fakta statistik, atau riset pendukung).", isCorrect: true },
                  { kode: "D", teks: "Ad Hominem (Menyerang kelemahan fisik atau karakter lawan debat).", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Metode AREL terdiri dari Assertion, Reasoning, Evidence, dan Link-back. Ad hominem adalah sesat pikir terlarang.",
              },
              soalUraian: {
                level: "C6 (Menyusun Argumen Debat)",
                pertanyaan: "Terkait mosi 'Pengurangan Sampah Plastik di Kantin Sekolah', susunlah 1 argumen tim Afirmatif (Pro) menggunakan pola AREL (Pernyataan, Alasan, dan Bukti data) yang meyakinkan!",
                kunci: "Assertion (Pernyataan): Kami mendukung pelarangan kemasan plastik sekali pakai di kantin sekolah. Reasoning (Alasan): Karena sampah plastik membutuhkan ratusan tahun untuk terurai dan pembakarannya menghasilkan gas dioksin beracun bagi siswa. Evidence (Bukti): Data KLHK menunjukkan bahwa 40% timbulan sampah harian di sekolah perkotaan didominasi oleh bungkus makanan dan botol plastik yang mencemari saluran drainase sekolah.",
                pembahasan: "Menyusun konstruksi argumen debat yang sistematis.",
                rubrik: [
                  { kriteria: "Memuat pernyataan posisi yang tegas dan logis", skor: 10 },
                  { kriteria: "Memuat penalaran ilmiah dan rujukan data faktual", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Menulis",
        deskripsiCP:
          "Menulis gagasan, pikiran, atau argumen secara terstruktur dalam bentuk teks deskripsi, narasi, prosedur, eksposisi, eksplanasi, laporan hasil observasi, diskusi, dan ulasan dengan menerapkan kaidah tata bahasa, ejaan, serta tanda baca baku.",
        kompetensiKKO: "Menulis Teks Beragam Genre, Menyusun Teks Eksplanasi Fenomena, Menulis Teks Diskusi Dua Sudut Pandang",
        lingkupMateri: "Teks Eksplanasi Kausalitas Fenomena Alam/Sosial, Teks Diskusi, Kalimat Efektif & Konjungsi Kausalitas",
        tpList: [
          {
            kodeTP: "TP.04",
            teksTP:
              "Menulis teks eksplanasi ilmiah tentang proses terjadinya fenomena alam/sosial dan teks diskusi (telaah pro-kontra) dengan struktur runtut, konjungsi kausalitas, dan ejaan baku.",
            alokasiJP: 10,
            semester: "GENAP",
            prasyarat: "Mampu menyusun paragraf padu dengan kalimat efektif",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "PPRA: Keteladanan (Qudwah)", "Cinta Kebenaran"],
            konteksPembelajaran: {
              stimulus: "Proses terjadinya likuefaksi tanah saat gempa bumi berkekuatan besar dan artikel diskusi mengenai pro-kontra pemberlakuan zonasi PPDB.",
              stimulusKemenag: "Menuliskan penjelasan ilmiah mengenai hukum alam (sunnatullah) memperluas wawasan keilmuan dan menuntun manusia pada mitigasi bencana.",
              masalahNyata: "Bagaimana cara menyusun deretan penjelas kausalitas (sebab-akibat bertingkat) yang logis tanpa ada mata rantai proses yang terputus?",
              kegiatanEksplorasi: [
                "Menyusun diagram alir (flowchart) proses pembentukan fenomena alam (misal: siklus hujan asam atau tsunami).",
                "Praktik menulis teks diskusi 4 paragraf: Isu, Argumen Mendukung, Argumen Menentang, dan Simpulan Rekomendatif.",
              ],
              pertanyaanHOTS: [
                { level: "C6 - Kreasi Teks", teks: "Susunlah sebuah teks eksplanasi mengenai proses terjadinya efek rumah kaca dan pemanasan global dengan mengintegrasikan istilah-istilah ilmiah baku!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menulis teks eksplanasi dan diskusi",
                  baru: "Menulis tanpa membedakan deretan sebab-akibat.",
                  layak: "Mampu menulis teks eksplanasi dengan struktur pernyataan umum dan sebab akibat.",
                  cakap: "Mampu menggunakan konjungsi kausalitas (karena, sebab, oleh karena itu, sehingga) dan istilah teknis dengan tepat.",
                  mahir: "Menghasilkan karya tulis ilmiah populer yang sangat komprehensif, orisinal, dan memenuhi standar publikasi buletin sekolah.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah konjungsi yang berfungsi menyatakan HUBUNGAN KAUSALITAS (SEBAB-AKIBAT) dalam teks eksplanasi? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Oleh karena itu", isCorrect: true 
              },
                  { kode: "B", teks: "Disebabkan oleh", isCorrect: true },
                  { kode: "C", teks: "Sehingga mengakibatkan", isCorrect: true },
                  { kode: "D", teks: "Selanjutnya kemudian", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah konjungsi kausalitas. D adalah konjungsi kronologis/urutan waktu.",
              },
              soalUraian: {
                level: "C6 (Menulis Teks Eksplanasi)",
                pertanyaan: "Tuliskan 1 paragraf deretan penjelas teks eksplanasi (minimal 4 kalimat) yang menjelaskan proses terjadinya 'Gerhana Bulan Total' dengan memuat konjungsi kausalitas!",
                kunci: "Contoh: Gerhana bulan total terjadi ketika posisi matahari, bumi, dan bulan berada pada satu garis lurus yang sejajar di ruang angkasa. Akibatnya, bayangan inti bumi (umbra) menutupi seluruh permukaan bulan sehingga cahaya matahari tidak dapat sampai ke bulan. Karena atmosfer bumi membiaskan cahaya merah matahari, bulan tampak berwarna merah tembaga saat puncak gerhana. Fenomena alam ini hanya dapat terjadi pada saat fase bulan purnama.",
                pembahasan: "Menulis teks eksplanasi astronomi dengan keterpaduan kalimat dan konjungsi kausalitas.",
                rubrik: [
                  { kriteria: "Menjelaskan urutan proses posisi matahari-bumi-bulan secara akurat", skor: 10 },
                  { kriteria: "Penggunaan konjungsi kausalitas dan istilah ilmiah yang tepat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 3. Matematika (Fase D - Kelas VII/VIII/IX)
  {
    fase: "Fase D",
    kelasDefault: "Kelas VII",
    mapel: "Matematika",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Bilangan",
        deskripsiCP:
          "Membaca, menulis, membandingkan, dan melakukan operasi aritmetika pada bilangan rasional dan irasional; menggunakan rasio, proporsi, persentase, serta bilangan berpangkat dan bentuk akar dalam penyelesaian masalah nyata.",
        kompetensiKKO: "Operasi Bilangan Rasional/Irasional, Menerapkan Rasio & Skala, Menyelesaikan Eksponen & Bentuk Akar",
        lingkupMateri: "Bilangan Bulat & Pecahan Rasional, Perbandingan Senilai & Berbalik Nilai, Eksponen (Pangkat Bulat & Akar)",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menyelesaikan operasi hitung aritmetika bilangan rasional, menerapkan konsep rasio dan proporsi (senilai dan berbalik nilai), serta menyelesaikan permasalahan eksponen dan bentuk akar dalam konteks sains dan keuangan.",
            alokasiJP: 10,
            semester: "GANJIL",
            prasyarat: "Operasi hitung bilangan bulat dan pecahan dasar",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Cinta Ketelitian", "PPRA: Berimbang (Tawazun)"],
            konteksPembelajaran: {
              stimulus: "Proyek pembangunan gedung ditargetkan selesai dalam 30 hari oleh 12 pekerja. Jika setelah 10 hari bekerja proyek terhenti 5 hari karena cuaca ekstrem, berapa tambahan pekerja yang dibutuhkan agar proyek selesai tepat waktu?",
              stimulusKemenag: "Menghitung rasio pembagian hak dan proporsi zakat/waris secara matematis menjamin tegaknya keadilan dan ketenteraman harta.",
              masalahNyata: "Bagaimana cara menentukan apakah suatu masalah sehari-hari termasuk ke dalam perbandingan senilai atau perbandingan berbalik nilai?",
              kegiatanEksplorasi: [
                "Eksplorasi tabel perbandingan waktu vs kecepatan tempuh (grafik hiperbola berbalik nilai).",
                "Sederhanakan bentuk akar dan operasi perpangkatan pada notasi ilmiah jarak planet ke matahari.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis Perbandingan", teks: "Analisis perubahan kebutuhan pekerja pada proyek yang mengalami penundaan waktu dengan model persamaan perbandingan berbalik nilai!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menyelesaikan perbandingan dan eksponen",
                  baru: "Keliru membedakan perbandingan senilai dan berbalik nilai.",
                  layak: "Mampu menyelesaikan perbandingan senilai sederhana.",
                  cakap: "Mampu memecahkan masalah perbandingan berbalik nilai multi-kondisi dan operasi bilangan berpangkat.",
                  mahir: "Mampu merumuskan model matematika abstrak dari data rasio kompleks di bidang sains dan ekonomi.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah situasi berikut yang merupakan penerapan PERBANDINGAN BERBALIK NILAI? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Kecepatan berkendara dengan waktu tempuh untuk jarak perjalanan yang sama.", isCorrect: true 
              },
                  { kode: "B", teks: "Jumlah pekerja bangunan dengan waktu penyelesaian proyek gedung.", isCorrect: true },
                  { kode: "C", teks: "Jumlah hewan ternak dengan waktu habisnya persediaan pakan ternak.", isCorrect: true },
                  { kode: "D", teks: "Jumlah liter bensin yang dibeli dengan total uang yang harus dibayarkan.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C berbalik nilai (jika variabel X naik, variabel Y turun). D adalah perbandingan senilai.",
              },
              soalUraian: {
                level: "C4 (Penyelesaian Perbandingan Berbalik Nilai)",
                pertanyaan: "Suatu pekerjaan dapat diselesaikan oleh 15 orang pekerja dalam waktu 24 hari. Setelah dikerjakan selama 8 hari, pekerjaan tersebut dihentikan selama 4 hari. Berapa banyak pekerja tambahan yang diperlukan agar pekerjaan dapat diselesaikan tepat waktu sesuai jadwal semula?",
                kunci: "Sisa waktu normal = 24 - 8 = 16 hari dengan 15 pekerja. Total beban kerja sisa = 16 x 15 = 240 hari-orang. Sisa hari yang tersedia = 16 - 4 = 12 hari. Jumlah pekerja yang dibutuhkan = 240 : 12 = 20 orang. Tambahan pekerja = 20 - 15 = 5 orang pekerja.",
                pembahasan: "Perhitungan perbandingan berbalik nilai pada sisa beban kerja.",
                rubrik: [
                  { kriteria: "Menghitung sisa beban kerja (240 hari-orang)", skor: 10 },
                  { kriteria: "Menghitung total pekerja baru (20) dan tambahan pekerja (5 orang)", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Aljabar",
        deskripsiCP:
          "Menyajikan dan memanipulasi bentuk aljabar; menyelesaikan persamaan dan pertidaksamaan linear satu variabel, sistem persamaan linear dua variabel (SPLDV), serta memahami konsep fungsi linear dan grafiknya.",
        kompetensiKKO: "Menyederhanakan Bentuk Aljabar, Menyelesaikan PLSV/PtLSV & SPLDV, Menggambar Grafik Fungsi Linear",
        lingkupMateri: "Operasi Bentuk Aljabar, Persamaan & Pertidaksamaan Linear Satu Variabel, SPLDV (Metode Eliminasi & Substitusi)",
        tpList: [
          {
            kodeTP: "TP.02",
            teksTP:
              "Menyelesaikan Sistem Persamaan Linear Dua Variabel (SPLDV) menggunakan metode grafik, eliminasi, dan substitusi dalam pemecahan masalah optimasi dan transaksi ekonomi.",
            alokasiJP: 12,
            semester: "GANJIL",
            prasyarat: "Memahami persamaan linear satu variabel (PLSV)",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Keadilan", "PPRA: Berimbang"],
            konteksPembelajaran: {
              stimulus: "Di toko koperasi sekolah, Andi membeli 3 buku tulis dan 2 pensil seharga Rp16.500,00. Di toko yang sama, Budi membeli 2 buku tulis dan 4 pensil seharga Rp15.000,00.",
              stimulusKemenag: "Persamaan aljabar menggambarkan asas keseimbangan neraca timbangan (mizan) di mana perlakuan di ruas kiri harus sama dengan ruas kanan.",
              masalahNyata: "Berapa harga satuan 1 buku tulis dan 1 pensil, serta berapa yang harus dibayar Cici jika ia membeli 5 buku tulis dan 3 pensil?",
              kegiatanEksplorasi: [
                "Eksplorasi perpotongan dua garis lurus pada bidang Kartesius menggunakan software GeoGebra.",
                "Penyelesaian SPLDV metode eliminasi bertahap untuk mencari nilai variabel x dan y.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis SPLDV", teks: "Tentukan himpunan penyelesaian dari sistem persamaan 2x + 3y = 8 dan 4x + 6y = 16 serta analisislah mengapa sistem tersebut memiliki tak terhingga banyaknya solusi!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menyelesaikan SPLDV dan pemodelan aljabar",
                  baru: "Keliru dalam operasi perkalian konstanta saat menyamakan koefisien eliminasi.",
                  layak: "Mampu memodelkan soal cerita ke dalam bentuk aljabar 2 variabel.",
                  cakap: "Mampu menyelesaikan SPLDV dengan metode eliminasi dan substitusi secara tepat.",
                  mahir: "Mampu menganalisis kondisi khusus SPLDV (solusi tunggal, tidak ada solusi, banyak solusi) secara grafis.",
                },
              ],
              soalPGK: {
                pertanyaan: "Diberikan sistem persamaan: 2x + y = 7 dan x - y = 2. Manakah pernyataan yang BENAR mengenai sistem tersebut? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Nilai x yang memenuhi adalah 3.", isCorrect: true 
              },
                  { kode: "B", teks: "Nilai y yang memenuhi adalah 1.", isCorrect: true },
                  { kode: "C", teks: "Nilai dari 2x + 3y adalah 9.", isCorrect: true },
                  { kode: "D", teks: "Titik potong kedua garis pada grafik Kartesius adalah (1, 3).", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Jumlahkan kedua persamaan: 3x = 9 -> x = 3. Maka y = 3 - 2 = 1. Titik potongnya adalah (3, 1).",
              },
              soalUraian: {
                level: "C4 (Pemodelan SPLDV)",
                pertanyaan: "Harga 3 kg apel dan 2 kg jeruk adalah Rp85.000,00, sedangkan harga 2 kg apel dan 3 kg jeruk adalah Rp75.000,00. Buatlah model matematikanya dan tentukan uang kembalian yang diterima Dani jika ia membayar dengan uang Rp100.000,00 untuk membeli 2 kg apel dan 2 kg jeruk!",
                kunci: "Model: Misal apel = x, jeruk = y. (1) 3x + 2y = 85.000, (2) 2x + 3y = 75.000. Jumlahkan (1)+(2): 5x + 5y = 160.000 -> x + y = 32.000. Harga 2x + 2y = 2(32.000) = Rp64.000,00. Uang kembalian = 100.000 - 64.000 = Rp36.000,00.",
                pembahasan: "Trik penyelesaian cepat SPLDV simetris melalui penjumlahan langsung.",
                rubrik: [
                  { kriteria: "Menyusun model matematika 2 variabel", skor: 8 },
                  { kriteria: "Menemukan harga 2 kg apel dan 2 kg jeruk (Rp64.000)", skor: 8 },
                  { kriteria: "Menghitung uang kembalian Rp36.000,00 secara tepat", skor: 4 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Pengukuran",
        deskripsiCP:
          "Menghitung dan mengestimasi luas permukaan serta volume bangun ruang sisi datar (kubus, balok, prisma, limas) dan bangun ruang sisi lengkung (tabung, kerucut, bola) serta menggunakan Teorema Pythagoras dalam perhitungan geometris.",
        kompetensiKKO: "Menerapkan Teorema Pythagoras, Menghitung Luas Permukaan & Volume Bangun Ruang Sisi Lengkung",
        lingkupMateri: "Teorema Pythagoras, Luas Permukaan & Volume Tabung, Kerucut, dan Bola",
        tpList: [
          {
            kodeTP: "TP.03",
            teksTP:
              "Menerapkan Teorema Pythagoras untuk menentukan panjang sisi segitiga siku-siku serta menghitung luas permukaan dan volume bangun ruang sisi lengkung (tabung, kerucut, bola).",
            alokasiJP: 10,
            semester: "GENAP",
            prasyarat: "Memahami luas lingkaran dan volume bangun ruang sisi datar",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "PPRA: Keteladanan"],
            konteksPembelajaran: {
              stimulus: "Kubah masjid berbentuk setengah bola dengan diameter 14 meter akan dicat ulang di bagian luarnya. Setiap 1 m² memerlukan biaya cat dan ongkos tukang sebesar Rp50.000,00.",
              stimulusKemenag: "Penerapan geometri lengkung dalam arsitektur peradaban Islam melahirkan mahakarya kubah masjid yang megah dan berdaya tahan ratusan tahun.",
              masalahNyata: "Berapa total estimasi anggaran biaya yang diperlukan untuk mengecat seluruh kubah setengah bola tersebut?",
              kegiatanEksplorasi: [
                "Pembuktian visual Teorema Pythagoras menggunakan puzzle luas persegi pada sisi miring.",
                "Eksperimen mengisi kerucut dengan pasir ke dalam tabung berdimensi jari-jari dan tinggi sama (V_kerucut = 1/3 V_tabung).",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis Geometri", teks: "Sebuah kerucut memiliki jari-jari alas 7 cm dan tinggi 24 cm. Tentukan panjang garis pelukis (s) menggunakan Teorema Pythagoras dan hitung luas seluruh permukaan kerucut tersebut!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Penerapan Pythagoras dan luas bangun ruang lengkung",
                  baru: "Menghitung volume kerucut tanpa membagi tiga.",
                  layak: "Mampu menerapkan rumus Pythagoras pada segitiga siku-siku sederhana.",
                  cakap: "Mampu menghitung garis pelukis kerucut dan luas permukaan tabung/kerucut/bola secara tepat.",
                  mahir: "Mampu menyelesaikan persoalan geometri ruang gabungan multi-komponen berorientasi arsitektur nyata.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah kelompok tiga bilangan berikut yang merupakan TRIPEL PYTHAGORAS (sisi-sisi segitiga siku-siku)? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "3, 4, 5", isCorrect: true 
              },
                  { kode: "B", teks: "5, 12, 13", isCorrect: true },
                  { kode: "C", teks: "7, 24, 25", isCorrect: true },
                  { kode: "D", teks: "6, 8, 12", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A (9+16=25), B (25+144=169), C (49+576=625) adalah tripel Pythagoras. D bukan (36+64=100 != 144).",
              },
              soalUraian: {
                level: "C4 (Luas Permukaan Kubah Setengah Bola)",
                pertanyaan: "Sebuah kubah masjid berbentuk setengah bola pejal (padat) memiliki jari-jari r = 7 cm. Hitunglah luas seluruh permukaan setengah bola pejal tersebut! (Gunakan pi = 22/7)",
                kunci: "Luas permukaan setengah bola pejal = Luas selimut setengah bola + Luas lingkaran alas = 2*pi*r^2 + pi*r^2 = 3*pi*r^2 = 3 x (22/7) x 7 x 7 = 3 x 22 x 7 = 462 cm².",
                pembahasan: "Memperhatikan kata 'pejal' yang berarti menyertakan bidang alas lingkaran datar.",
                rubrik: [
                  { kriteria: "Menuliskan formula luas setengah bola pejal (3*pi*r^2)", skor: 10 },
                  { kriteria: "Melakukan komputasi perhitungan 462 cm² secara tepat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Geometri",
        deskripsiCP:
          "Menganalisis kesebangunan dan kekongruenan antar bangun datar; mengaplikasikan transformasi geometri (translasi, refleksi, rotasi, dilatasi) dalam koordinat kartesius; memahami hubungan antar sudut yang terbentuk oleh garis sejajar yang dipotong garis transversal.",
        kompetensiKKO: "Menganalisis Kesebangunan & Kekongruenan, Transformasi Geometri Koordinat, Hubungan Antar Sudut",
        lingkupMateri: "Kekongruenan & Kesebangunan Segitiga, Transformasi (Translasi, Refleksi, Rotasi, Dilatasi), Sudut Garis Sejajar",
        tpList: [
          {
            kodeTP: "TP.04",
            teksTP:
              "Menganalisis syarat kekongruenan dan kesebangunan bangun datar serta menentukan bayangan koordinat titik/bangun akibat transformasi geometri (translasi, refleksi, rotasi, dilatasi).",
            alokasiJP: 10,
            semester: "GENAP",
            prasyarat: "Memahami sistem koordinat Kartesius",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "PPRA: Dinamis"],
            konteksPembelajaran: {
              stimulus: "Teknik estimasi tinggi tiang bendera menggunakan bayangan sinar matahari dan prinsip kesebangunan segitiga siku-siku.",
              stimulusKemenag: "Konsep simetri dan transformasi rotasi tercermin indah dalam pola ornamen geometris Islam (arabesque) yang harmonis.",
              masalahNyata: "Seorang siswa dengan tinggi 150 cm memiliki panjang bayangan 2 m. Pada saat yang sama, panjang bayangan pohon adalah 12 m. Berapa tinggi pohon sebenarnya?",
              kegiatanEksplorasi: [
                "Eksplorasi rumus matriks refleksi terhadap sumbu-X, sumbu-Y, garis y=x, dan titik asal (0,0).",
                "Praktik mengukur tinggi gedung sekolah menggunakan klinometer dan kesebangunan.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis Transformasi", teks: "Titik P(-3, 5) ditranslasikan oleh T(4, -2) kemudian dicerminkan terhadap sumbu-X. Tentukan koordinat bayangan akhir titik P!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Kesebangunan dan transformasi geometri",
                  baru: "Menukar koordinat x dan y saat proses translasi.",
                  layak: "Mampu menentukan bayangan titik oleh satu kali translasi.",
                  cakap: "Mampu menyelesaikan masalah kesebangunan segitiga dan transformasi geometri komposisi ganda.",
                  mahir: "Mampu merancang motif batik fraktal menggunakan kaidah transformasi rotasi dan dilatasi.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah syarat dua buah segitiga dikatakan KONGKRUEN (sama dan sebangun)? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Sisi - Sisi - Sisi (ketiga pasang sisi yang bersesuaian sama panjang).", isCorrect: true 
              },
                  { kode: "B", teks: "Sisi - Sudut - Sisi (dua sisi dan sudut yang diapitnya sama besar).", isCorrect: true },
                  { kode: "C", teks: "Sudut - Sisi - Sudut (dua sudut dan satu sisi di antaranya sama).", isCorrect: true },
                  { kode: "D", teks: "Sudut - Sudut - Sudut (ketiga sudut sama besar, tanpa memperhatikan panjang sisi).", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah syarat kongruen. Pilihan D hanya membuktikan kesebangunan, bukan kekongruenan.",
              },
              soalUraian: {
                level: "C4 (Aplikasi Kesebangunan)",
                pertanyaan: "Sebuah foto berukuran tinggi 40 cm dan lebar 30 cm ditempelkan pada selembar karton. Di sebelah kiri, kanan, dan atas foto masih terdapat sisa karton selebar 3 cm. Jika foto dan karton tersebut sebangun, hitunglah lebar sisa karton di bagian bawah foto!",
                kunci: "Lebar foto = 30 cm, tinggi foto = 40 cm. Lebar karton = 30 + 3 + 3 = 36 cm. Karena sebangun: Lebar Foto / Lebar Karton = Tinggi Foto / Tinggi Karton -> 30 / 36 = 40 / Tinggi Karton -> 5 / 6 = 40 / Tinggi Karton -> Tinggi Karton = (40 x 6) / 5 = 48 cm. Sisa karton bawah = Tinggi Karton - (Tinggi Foto + Sisa Atas) = 48 - (40 + 3) = 48 - 43 = 5 cm.",
                pembahasan: "Penerapan rasio kesebangunan pada bingkai foto dan karton.",
                rubrik: [
                  { kriteria: "Menghitung lebar karton (36 cm) dan rasio kesebangunan", skor: 8 },
                  { kriteria: "Menghitung tinggi total karton (48 cm)", skor: 8 },
                  { kriteria: "Menghitung sisa karton bagian bawah (5 cm)", skor: 4 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Analisis Data dan Peluang",
        deskripsiCP:
          "Merumuskan pertanyaan, mengumpulkan, menyajikan, dan menganalisis data tunggal atau kelompok (diagram batang, garis, lingkaran, histogram, boxplot); menentukan ukuran pemusatan (mean, median, modus) dan penyebaran data (jangkauan, kuartil); menentukan peluang teoretis dan empiris dari suatu kejadian tunggal.",
        kompetensiKKO: "Menganalisis Pemusatan & Penyebaran Data, Menghitung Kuartil & Boxplot, Menentukan Peluang Teoretis/Empiris",
        lingkupMateri: "Statistika (Mean, Median, Modus, Kuartil, Jangkauan Interkuartil), Peluang Kejadian Tunggal & Komplemen",
        tpList: [
          {
            kodeTP: "TP.05",
            teksTP:
              "Menganalisis ukuran pemusatan (mean, median, modus) dan penyebaran data (kuartil, jangkauan interkuartil) serta menentukan peluang teoretis dan empiris dalam pengambilan keputusan berbasis data.",
            alokasiJP: 10,
            semester: "GENAP",
            prasyarat: "Memahami cara membaca tabel dan diagram batang/garis",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Kebenaran Data", "PPRA: Berimbang"],
            konteksPembelajaran: {
              stimulus: "Data nilai asesmen matematika kelas VII: 6, 7, 7, 8, 8, 8, 9, 9, 10. Nilai rerata siswa perempuan adalah 8,2 dan siswa laki-laki 7,6.",
              stimulusKemenag: "Kejujuran dalam menyajikan data statistik dan tidak memanipulasi angka adalah amanah ilmiah yang wajib dijaga.",
              masalahNyata: "Bagaimana cara menentukan batas nilai kuartil bawah (Q1), median (Q2), dan kuartil atas (Q3) untuk mendeteksi sebaran data pencilan (outlier)?",
              kegiatanEksplorasi: [
                "Eksperimen pelemparan dua keping koin sebanyak 100 kali untuk membandingkan frekuensi relatif peluang empiris vs peluang teoretis 1/4.",
                "Menghitung rata-rata gabungan dari dua kelompok data yang berbeda ukuran sampelnya.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Data", teks: "Rata-rata nilai ulangan 29 siswa adalah 78. Jika nilai Budi digabungkan, nilai rata-rata kelas menjadi 78,4. Evaluasilah berapa nilai ulangan yang diperoleh Budi!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Ukuran pemusatan, kuartil, dan peluang",
                  baru: "Menghitung mean hanya dengan menjumlahkan angka tanpa membagi total frekuensi.",
                  layak: "Mampu menentukan mean, median, dan modus data tunggal.",
                  cakap: "Mampu menghitung rata-rata gabungan, jangkauan interkuartil, dan peluang teoretis pelemparan dadu/koin.",
                  mahir: "Mampu menginterpretasi diagram boxplot dan menganalisis resiko probabilitas dalam studi kelayakan.",
                },
              ],
              soalPGK: {
                pertanyaan: "Dalam pelemparan sebuah dadu bersisi 6 yang seimbang, manakah pernyataan peluang yang BENAR? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Peluang munculnya mata dadu bilangan prima (2, 3, 5) adalah 3/6 = 1/2.", isCorrect: true 
              },
                  { kode: "B", teks: "Peluang munculnya mata dadu faktor dari 6 (1, 2, 3, 6) adalah 4/6 = 2/3.", isCorrect: true },
                  { kode: "C", teks: "Peluang munculnya mata dadu lebih dari 4 (5, 6) adalah 2/6 = 1/3.", isCorrect: true },
                  { kode: "D", teks: "Peluang munculnya mata dadu bilangan genap lebih besar daripada bilangan ganjil.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C benar. D salah karena jumlah bilangan genap (2,4,6) dan ganjil (1,3,5) sama banyak sehingga peluangnya sama (1/2).",
              },
              soalUraian: {
                level: "C4 (Perhitungan Rata-rata Gabungan)",
                pertanyaan: "Nilai rata-rata ulangan matematika dari 18 siswa laki-laki adalah 74, sedangkan nilai rata-rata dari 12 siswa perempuan adalah 79. Tentukan nilai rata-rata gabungan seluruh siswa di kelas tersebut!",
                kunci: "Jumlah total nilai = (18 x 74) + (12 x 79) = 1.332 + 948 = 2.280. Total seluruh siswa = 18 + 12 = 30 siswa. Nilai rata-rata gabungan = 2.280 / 30 = 76.",
                pembahasan: "Formula rata-rata gabungan: x_gabungan = (n1*x1 + n2*x2) / (n1 + n2).",
                rubrik: [
                  { kriteria: "Menghitung total nilai laki-laki dan perempuan secara benar", skor: 10 },
                  { kriteria: "Menghitung rata-rata gabungan 76 secara tepat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 4. IPA (Ilmu Pengetahuan Alam) (Fase D - Kelas VII/VIII/IX)
  {
    fase: "Fase D",
    kelasDefault: "Kelas VII",
    mapel: "Ilmu Pengetahuan Alam (IPA)",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pemahaman IPA",
        deskripsiCP:
          "Menganalisis sel sebagai unit terkecil kehidupan; organ dan sistem organ manusia; klasifikasi makhluk hidup dan ekosistem; wujud zat dan perubahannya; atom, molekul, dan unsur; gaya, gerak, dan tekanan; energi dan perubahannya; getaran, gelombang, dan cahaya; listrik dan kemagnetan; sistem tata surya serta struktur bumi dan bencana alam.",
        kompetensiKKO: "Menganalisis Struktur Sel & Sistem Organ, Menjelaskan Gaya-Gerak-Tekanan, Menganalisis Listrik & Magnet",
        lingkupMateri: "Organisasi Kehidupan (Sel Hewan/Tumbuhan, Jaringan, Organ), Zat & Perubahannya, Hukum Newton & Tekanan Zat, Listrik Dinamis",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menganalisis struktur dan fungsi sel sebagai unit terkecil kehidupan, membandingkan sel hewan dan tumbuhan, serta keterkaitannya dalam membentuk jaringan dan sistem organ manusia.",
            alokasiJP: 10,
            semester: "GANJIL",
            prasyarat: "Memahami ciri-ciri makhluk hidup dan penggunaan mikroskop",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Keagungan Ciptaan Allah", "Cinta Ilmu Hayati", "PPRA: Keteladanan"],
            konteksPembelajaran: {
              stimulus: "Pengamatan mikroskopis sel bawang merah (sel tumbuhan dengan dinding sel kaku) dibandingkan dengan sel epitel pipi manusia (sel hewan tanpa dinding sel).",
              stimulusKemenag: "Keteraturan struktur organel sel yang sangat mikroskopis menunjukkan kesempurnaan ciptaan Sang Maha Pencipta (Al-Khaliq).",
              masalahNyata: "Mengapa sel tumbuhan memiliki bentuk yang tetap dan kaku sedangkan sel hewan memiliki bentuk yang fleksibel dan lentur?",
              kegiatanEksplorasi: [
                "Praktikum pembuatan preparat basah sel epidermis Allium cepa dan pengamatan di bawah mikroskop cahaya perbesaran 400x.",
                "Pembuatan model 3 dimensi sel hewan dan sel tumbuhan berbahan plastisin/bahan daur ulang.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Fisiologis", teks: "Evaluasilah apa yang akan terjadi pada metabolisme sel jika membran sel mengalami kerusakan permeabilitas akibat paparan racun kimia!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Struktur sel dan organisasi kehidupan",
                  baru: "Menyebutkan nama organel tanpa mengetahui fungsinya.",
                  layak: "Mampu membedakan 2 organel khas pada sel tumbuhan (dinding sel dan kloroplas).",
                  cakap: "Mampu menganalisis fungsi mitokondria, nukleus, ribosom, dan membran sel secara terpadu.",
                  mahir: "Mampu mengaitkan diferensiasi sel dengan fungsi spesifik jaringan tubuh dan patologi penyakit seluler.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah organel sel yang HANYA DIMILIKI OLEH SEL TUMBUHAN dan tidak ditemukan pada sel hewan normal? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Dinding sel (terbuat dari selulosa yang memberi kekuatan struktur).", isCorrect: true 
              },
                  { kode: "B", teks: "Kloroplas / Plastida (tempat berlangsungnya fotosintesis).", isCorrect: true },
                  { kode: "C", teks: "Vakuola sentral berukuran besar.", isCorrect: true },
                  { kode: "D", teks: "Mitokondria (tempat respirasi seluler penghasil energi).", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C khas tumbuhan. Mitokondria (D) dimiliki oleh sel hewan dan tumbuhan.",
              },
              soalUraian: {
                level: "C4 (Analisis Komparasi Organel)",
                pertanyaan: "Jelaskan mengapa keberadaan mitokondria sering dijuluki sebagai 'the powerhouse of cell' (pabrik tenaga sel) dan mengapa sel-sel otot jantung manusia memiliki jumlah mitokondria yang jauh lebih banyak dibandingkan sel-sel kulit!",
                kunci: "Mitokondria dijuluki pabrik tenaga sel karena menjadi tempat berlangsungnya respirasi seluler yang mengubah nutrisi glukosa dan oksigen menjadi energi dalam bentuk ATP. Sel-sel otot jantung memiliki jumlah mitokondria sangat banyak karena otot jantung bekerja memompa darah secara terus-menerus tanpa henti sepanjang hidup sehingga membutuhkan pasokan energi ATP yang sangat tinggi dan kontinu dibanding sel kulit.",
                pembahasan: "Korelasi antara densitas organel sel dengan intensitas fungsi biologis jaringan.",
                rubrik: [
                  { kriteria: "Menjelaskan fungsi mitokondria memproduksi energi ATP", skor: 10 },
                  { kriteria: "Mengaitkan aktivitas kerja pompa jantung dengan kebutuhan mitokondria tinggi", skor: 10 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.02",
            teksTP:
              "Menganalisis konsep gerak lurus (GLB dan GLBB), Hukum Newton tentang gerak (I, II, dan III), serta penerapannya pada prinsip tekanan zat (padat, cair/hidrostatis, gas) dalam teknologi sehari-hari.",
            alokasiJP: 12,
            semester: "GANJIL",
            prasyarat: "Memahami besaran pokok, turunan, dan satuan SI",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas"],
            dimensiKarakterKemenag: ["Cinta Hukum Alam (Sunnatullah)", "Cinta Ilmu Fisika"],
            konteksPembelajaran: {
              stimulus: "Prinsip kerja rem hidrolik mobil, kapal selam yang menyelam dan mengapung (Hukum Archimedes), dan roket air yang meluncur ke udara (Hukum III Newton Aksi-Reaksi).",
              stimulusKemenag: "Hukum gerak dan tekanan adalah bukti kepastian hukum fisika (sunnatullah) yang memungkinkan manusia menciptakan teknologi transportasi laut dan udara.",
              masalahNyata: "Mengapa kapal laut yang terbuat dari baja berat bermassa ribuan ton dapat terapung di lautan, sedangkan jarum jahit kecil yang terbuat dari besi langsung tenggelam?",
              kegiatanEksplorasi: [
                "Eksperimen Hukum Archimedes: mengukur massa semu benda di udara vs saat tercelup dalam air menggunakan neraca pegas dan gelas berpancuran.",
                "Analisis Hukum II Newton (F = m . a) pada troli bermassa variatif yang ditarik beban konstan.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Tekanan Zat", teks: "Evaluasilah desain ketebalan dinding bendungan air PLTA yang semakin ke dasar semakin tebal berdasarkan konsep tekanan hidrostatis (P = rho . g . h)!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Hukum Newton dan tekanan zat",
                  baru: "Menghafal rumus F = m.a tanpa dapat menerapkannya dalam soal.",
                  layak: "Mampu menghitung resultan gaya searah dan berlawanan arah.",
                  cakap: "Mampu menganalisis fenomena Hukum I, II, III Newton dan menghitung tekanan hidrostatis zat cair.",
                  mahir: "Mampu merancang purwarupa teknologi hidrolik sederhana (dongkrak hidrolik suntikan) dengan kalkulasi gaya presisi.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah fenomena berikut yang merupakan penerapan HUKUM III NEWTON (AKSI = - REAKSI)? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Semburan gas ke belakang pada roket mendorong badan roket meluncur ke depan.", isCorrect: true 
              },
                  { kode: "B", teks: "Dayung yang mendorong air ke belakang membuat perahu terdorong maju ke depan.", isCorrect: true },
                  { kode: "C", teks: "Perenang mendorong dinding kolam dengan kaki ke belakang sehingga meluncur ke depan.", isCorrect: true },
                  { kode: "D", teks: "Penumpang bus terdorong ke depan saat bus direm secara mendadak.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah Hukum III Newton (gaya aksi-reaksi). D adalah Hukum I Newton (kelembaman/inersia).",
              },
              soalUraian: {
                level: "C4 (Kalkulasi Tekanan Hidrostatis)",
                pertanyaan: "Seorang penyelam menyelam di laut pada kedalaman 15 meter di bawah permukaan air laut. Jika massa jenis air laut rho = 1.025 kg/m³ dan percepatan gravitasi g = 10 m/s², hitunglah besar tekanan hidrostatis yang dialami penyelam tersebut dan jelaskan mengapa telinga penyelam terasa sakit saat menyelam semakin dalam!",
                kunci: "Tekanan Hidrostatis P = rho x g x h = 1.025 kg/m³ x 10 m/s² x 15 m = 153.750 Pascal (N/m²). Telinga terasa sakit karena semakin dalam menyelam, volume dan berat air laut di atas tubuh semakin besar, menghasilkan tekanan hidrostatis yang semakin tinggi yang menekan selaput gendang telinga penyelam.",
                pembahasan: "Perhitungan tekanan hidrostatis dan penjelasan fisiologis pada penyelam.",
                rubrik: [
                  { kriteria: "Menghitung nilai tekanan hidrostatis 153.750 Pa secara tepat", skor: 10 },
                  { kriteria: "Menjelaskan faktor kedalaman air terhadap kenaikan tekanan pada telinga", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Keterampilan Proses",
        deskripsiCP:
          "Merencanakan dan melakukan penyelidikan ilmiah secara mandiri/kelompok, mengidentifikasi variabel bebas, terikat, dan kontrol, mengolah dan menganalisis data, menarik kesimpulan berbasis bukti, serta mengomunikasikan hasil investigasi ilmiah.",
        kompetensiKKO: "Merumuskan Variabel Eksperimen, Mengolah Data Pengamatan, Menarik Simpulan Ilmiah",
        lingkupMateri: "Metode Ilmiah (Variabel Bebas, Terikat, Kontrol), Grafik Data Sains, Pelaporan Laboratorium",
        tpList: [
          {
            kodeTP: "TP.03",
            teksTP:
              "Merancang dan melakukan eksperimen sains terstruktur dengan mengontrol variabel bebas, terikat, dan kontrol serta menyajikan laporan ilmiah berbasis bukti empiris.",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "Memahami langkah-langkah keselamatan kerja di laboratorium IPA",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kolaborasi", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Cinta Kebenaran Ilmiah", "PPRA: Dinamis"],
            konteksPembelajaran: {
              stimulus: "Eksperimen faktor-faktor yang mempengaruhi laju fotosintesis tanaman air Hydrilla (intensitas cahaya, konsentrasi NaHCO3/sumber CO2, dan suhu).",
              stimulusKemenag: "Meneliti dengan metode ilmiah yang jujur dan objektif adalah manifestasi tadabbur ayat-ayat kauniyyah Allah di alam semesta.",
              masalahNyata: "Bagaimana cara membuktikan bahwa gas yang dihasilkan dalam proses fotosintesis adalah gas oksigen (O2)?",
              kegiatanEksplorasi: [
                "Praktikum Ingenhousz menggunakan corong kaca dan tabung reaksi untuk menampung gelembung gas O2 lalu mengujinya dengan bara api.",
                "Pembuatan tabel matriks variabel bebas (jarak lampu), variabel terikat (jumlah gelembung per menit), dan variabel kontrol (jenis tanaman & volume air).",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Eksperimen", teks: "Evaluasilah keabsahan kesimpulan eksperimen jika peneliti lupa menambahkan variabel kontrol dalam uji pengaruh pupuk terhadap pertumbuhan tanaman!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Keterampilan merancang eksperimen ilmiah",
                  baru: "Menukar antara variabel bebas (penyebab) dan variabel terikat (akibat).",
                  layak: "Mampu menentukan alat dan bahan praktikum.",
                  cakap: "Mampu merumuskan hipotesis dan mengidentifikasi variabel bebas, terikat, serta kontrol secara tepat.",
                  mahir: "Mampu menyusun laporan praktikum berstandar saintifik dengan analisis galat (error analysis) yang tajam.",
                },
              ],
              soalPGK: {
                pertanyaan: "Dalam eksperimen menguji 'Pengaruh Intensitas Cahaya terhadap Jumlah Gelembung Oksigen pada Tanaman Hydrilla', manakah penentuan variabel yang BENAR? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Variabel Bebas: Jarak sumber lampu cahaya ke tanaman Hydrilla.", isCorrect: true 
              },
                  { kode: "B", teks: "Variabel Terikat: Jumlah gelembung oksigen yang dihasilkan per menit.", isCorrect: true },
                  { kode: "C", teks: "Variabel Kontrol: Jenis tanaman Hydrilla, volume air, dan suhu ruangan.", isCorrect: true },
                  { kode: "D", teks: "Variabel Bebas: Jumlah daun Hydrilla yang bertambah setiap hari.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A (Bebas/diubah), B (Terikat/diukur), C (Kontrol/dibuat konstan sama).",
              },
              soalUraian: {
                level: "C4 (Analisis Bukti Ilmiah)",
                pertanyaan: "Pada praktikum uji Ingenhousz, ketika tabung reaksi berisi gas didekatkan dengan bara lidi api, bara tersebut langsung menyala menjadi api yang berkobar terang. Jelaskan mengapa hal itu terjadi dan apa kesimpulan dari uji tersebut!",
                kunci: "Hal itu terjadi karena gas yang terkumpul di dalam tabung reaksi adalah gas Oksigen (O2). Sifat kimia gas oksigen adalah gas yang sangat mendukung terjadinya proses pembakaran. Kesimpulannya: Proses fotosintesis pada tumbuhan air Hydrilla terbukti menghasilkan gas oksigen (O2).",
                pembahasan: "Uji kimiawi gas oksigen menggunakan bara api.",
                rubrik: [
                  { kriteria: "Menjelaskan sifat oksigen sebagai gas pendukung pembakaran", skor: 10 },
                  { kriteria: "Menarik kesimpulan fotosintesis menghasilkan gas oksigen", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 5. IPS (Ilmu Pengetahuan Sosial) (Fase D - Kelas VII/VIII/IX)
  {
    fase: "Fase D",
    kelasDefault: "Kelas VII",
    mapel: "Ilmu Pengetahuan Sosial (IPS)",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pemahaman Konsep IPS",
        deskripsiCP:
          "Menganalisis interaksi antarwilayah dan keragaman kondisi geografis Indonesia; proses sosialisasi, pembentukan identitas, dan lembaga sosial; dinamika penduduk dan perubahan sosial budaya; sejarah lokal, nasional, hingga pengaruh masuknya agama dan kolonialisme di Indonesia; serta kegiatan ekonomi, kelangkaan, pasar, dan pemanfaatan teknologi keuangan.",
        kompetensiKKO: "Menganalisis Interaksi Antarwilayah, Memahami Dinamika Sosial & Sejarah Kolonialisme, Menganalisis Kegiatan Ekonomi & Pasar",
        lingkupMateri: "Letak Geografis & Potensi Maritim, Lembaga Sosial & Interaksi Sosial, Kolonialisme & Pergerakan Nasional, Pasar & Literasi Keuangan",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menganalisis pengaruh letak geografis dan potensi sumber daya alam maritim Indonesia terhadap interaksi keruangan antarwilayah dan kegiatan ekonomi masyarakat.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Mengenal peta wilayah Indonesia dan mata angin",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Tanah Air", "Cinta Lingkungan Maritim", "PPRA: Keteladanan"],
            konteksPembelajaran: {
              stimulus: "Indonesia terletak di antara dua benua (Asia dan Australia) dan dua samudra (Hindia dan Pasifik) yang menjadikannya jalur perdagangan internasional strategis (Alur Laut Kepulauan Indonesia / ALKI).",
              stimulusKemenag: "Kekayaan laut dan letak maritim Indonesia adalah berkah anugerah alam yang menuntut pengelolaan berkelanjutan demi kesejahteraan umat.",
              masalahNyata: "Bagaimana perbedaan potensi sumber daya alam antara wilayah pesisir dengan wilayah dataran tinggi mendorong terjadinya perdagangan antar-pulau?",
              kegiatanEksplorasi: [
                "Analisis peta jalur perdagangan ALKI I, II, dan III serta potensinya bagi perekonomian pelabuhan logistik nasional.",
                "Menghitung surplus dan defisit komoditas pangan antardaerah (konsep komplementaritas regional).",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Geostrategis", teks: "Evaluasilah peluang dan tantangan Indonesia sebagai poros maritim dunia dalam mengoptimalkan potensi ekonomi biru (blue economy)!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Pengaruh letak maritim dan perdagangan antarwilayah",
                  baru: "Menyebutkan batas negara tanpa mengaitkannya dengan potensi ekonomi.",
                  layak: "Mampu menjelaskan letak astronomis dan geografis Indonesia.",
                  cakap: "Mampu menganalisis terjadinya interaksi keruangan dan arus komoditas antardaerah.",
                  mahir: "Mampu merumuskan gagasan strategis pengembangan tol laut dan logistik maritim terpadu.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah keuntungan letak geografis Indonesia di posisi silang dunia? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Menjadi jalur transit perdagangan dan pelayaran internasional dunia.", isCorrect: true 
              },
                  { kode: "B", teks: "Memiliki kekayaan keanekaragaman hayati laut (biodiversitas maritim) yang melimpah.", isCorrect: true },
                  { kode: "C", teks: "Terjadinya akulturasi budaya yang memperkaya khazanah peradaban nusantara.", isCorrect: true },
                  { kode: "D", teks: "Mengalami empat musim subtropis dengan badai salju tahunan.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah dampak positif letak geografis tropis maritim Indonesia.",
              },
              soalUraian: {
                level: "C4 (Analisis Interaksi Keruangan)",
                pertanyaan: "Jelaskan 3 (tiga) syarat utama terjadinya interaksi keruangan antarwilayah (Regional Complementarity, Intervening Opportunity, dan Spatial Transferability) disertai contoh konkret antardaerah di Indonesia!",
                kunci: "1. Saling Melengkapi (Regional Complementarity): Daerah pegunungan surplus sayur minus ikan, sedangkan daerah pesisir surplus ikan minus sayur sehingga terjadi transaksi perdagangan. 2. Kesempatan Antara (Intervening Opportunity): Pembeli memilih membeli barang dari tempat yang lebih dekat dengan biaya transportasi lebih murah. 3. Kemudahan Transfer (Spatial Transferability): Tersedianya jalan raya, jembatan, dan transportasi kapal yang memadai untuk mengirim barang tanpa hambatan biaya logistik tinggi.",
                pembahasan: "Tiga kondisi interaksi keruangan dalam teori geografi sosial.",
                rubrik: [
                  { kriteria: "Menjelaskan dan memberi contoh konsep saling melengkapi", skor: 7 },
                  { kriteria: "Menjelaskan dan memberi contoh konsep kesempatan antara", skor: 7 },
                  { kriteria: "Menjelaskan dan memberi contoh konsep kemudahan transfer", skor: 6 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.02",
            teksTP:
              "Menganalisis motif, prinsip, dan tindakan ekonomi, peran lembaga keuangan dalam perekonomian, serta memanfaatkan teknologi keuangan (fintech) secara bijak dan aman.",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "Memahami konsep kebutuhan dan kelangkaan",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Kejujuran Transaksi", "PPRA: Berimbang (Tawazun)"],
            konteksPembelajaran: {
              stimulus: "Maraknya platform pinjaman daring ilegal (pinjol ilegal) dan penipuan investasi bodong di kalangan masyarakat akibat rendahnya literasi keuangan digital.",
              stimulusKemenag: "Muamalah ekonomi yang syar'i menuntut kejelasan akad, transparansi, keadilan, dan menjauhi unsur riba, gharar (ketidakjelasan), serta maysir (judi).",
              masalahNyata: "Bagaimana cara menyusun anggaran keuangan pribadi (skala prioritas kebutuhan vs keinginan) agar terhindar dari perilaku konsumtif?",
              kegiatanEksplorasi: [
                "Penyusunan tabel skala prioritas kebutuhan primer, sekunder, dan tersier bagi pelajar.",
                "Analisis perbedaan bank umum konvensional, bank syariah, dan dompet digital (e-wallet) beserta fitur keamanannya (PIN, OTP, 2FA).",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Finansial", teks: "Evaluasilah risiko finansial dan hukum dari penggunaan skema pembayaran 'PayLater' tanpa perencanaan anggaran kas yang matang!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Motif ekonomi dan literasi keuangan digital",
                  baru: "Membelanjakan uang tanpa membedakan kebutuhan dan keinginan.",
                  layak: "Mampu membedakan motif ekonomi untuk keuntungan vs motif sosial.",
                  cakap: "Mampu menyusun skala prioritas belanja dan mengidentifikasi ciri-ciri fintech resmi berizin OJK.",
                  mahir: "Mampu merancang portofolio rencana tabungan masa depan dan analisis mitigasi resiko kejahatan siber finansial.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah tindakan yang mencerminkan penerapan PRINSIP EKONOMI yang rasional? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Membuat daftar belanja berdasarkan skala prioritas kebutuhan sebelum pergi ke pasar.", isCorrect: true 
              },
                  { kode: "B", teks: "Membandingkan harga dan kualitas barang di beberapa toko sebelum memutuskan membeli.", isCorrect: true },
                  { kode: "C", teks: "Membeli barang diskon dalam jumlah sangat banyak meskipun tidak dibutuhkan.", isCorrect: false },
                  { kode: "D", teks: "Menyisihkan sebagian uang saku untuk ditabung sebelum menggunakan sisanya untuk jajan.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "A, B, D adalah tindakan ekonomi rasional. C adalah perilaku konsumtif irasional.",
              },
              soalUraian: {
                level: "C4 (Analisis Literasi Keuangan Digital)",
                pertanyaan: "Jelaskan peran Otoritas Jasa Keuangan (OJK) dalam melindungi konsumen jasa keuangan di Indonesia dan sebutkan 2 ciri utama platform pinjaman daring atau investasi ilegal yang harus diwaspadai masyarakat!",
                kunci: "Peran OJK adalah mengatur, mengawasi, dan melindungi sektor jasa keuangan (perbankan, pasar modal, industri keuangan non-bank) dari praktik penipuan serta menegakkan kepatuhan hukum. 2 Ciri platform ilegal: 1. Menawarkan imbal hasil keuntungan yang tidak masuk akal (sangat tinggi tanpa risiko) atau bunga pinjaman harian yang sangat mencekik. 2. Tidak terdaftar resmi di OJK dan sering meminta akses data pribadi sensitif di luar batas (seperti kontak HP, foto galeri pribadi).",
                pembahasan: "Pemahaman regulasi OJK dan kewaspadaan terhadap fintech ilegal.",
                rubrik: [
                  { kriteria: "Menjelaskan fungsi pengawasan dan perlindungan OJK", skor: 10 },
                  { kriteria: "Menyebutkan 2 ciri fintech/investasi ilegal secara tepat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 6. Informatika (Fase D - Kelas VII/VIII/IX)
  {
    fase: "Fase D",
    kelasDefault: "Kelas VII",
    mapel: "Informatika",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Berpikir Komputasional (BK)",
        deskripsiCP:
          "Menerapkan dekomposisi, pengenalan pola, abstraksi, dan perancangan algoritma untuk memecahkan masalah komputasi dan pemrosesan data.",
        kompetensiKKO: "Menerapkan 4 Fondasi BK, Merancang Algoritma Sorting/Searching, Mengoptimalkan Solusi",
        lingkupMateri: "Dekomposisi, Pengenalan Pola, Abstraksi, Algoritma Pengurutan (Bubble/Insertion Sort) & Pencarian (Linear/Binary Search)",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menerapkan 4 pilar berpikir komputasional (dekomposisi, pola, abstraksi, algoritma) dalam memecahkan masalah logika komputasi, struktur data antrean/tumpukan (queue/stack), dan algoritma pengurutan.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Memahami logika pemecahan masalah sederhana",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Logika Berpikir", "PPRA: Dinamis & Inovatif"],
            konteksPembelajaran: {
              stimulus: "Sistem antrean loket tiket kereta api (First In First Out / FIFO - Queue) versus tumpukan piring kotor di tempat cuci (Last In First Out / LIFO - Stack).",
              stimulusKemenag: "Keteraturan berpikir algoritmik melatih manusia hidup disiplin, tertib, dan mampu memilah perkara esensial dari hal yang sia-sia.",
              masalahNyata: "Bagaimana cara kerja algoritma Binary Search (Pencarian Biner) dalam menemukan nomor kontak di buku telepon yang sudah terurut secara alfabetis dengan waktu tercepat?",
              kegiatanEksplorasi: [
                "Simulasi permainan kartu pengurutan bilangan menggunakan algoritma Bubble Sort langkah demi langkah (swap trace).",
                "Studi kasus dekomposisi pengelolaan sampah sekolah menjadi subtugas terstruktur.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi Algoritma", teks: "Evaluasilah efisiensi jumlah langkah pencarian antara Linear Search versus Binary Search pada dataset 1.000 data terurut!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Penerapan 4 fondasi berpikir komputasional",
                  baru: "Mengacak data tanpa strategi algoritma.",
                  layak: "Mampu menjelaskan perbedaan FIFO (Queue) dan LIFO (Stack).",
                  cakap: "Mampu menerapkan 4 fondasi BK dan menelusuri alur algoritma pengurutan data.",
                  mahir: "Mampu menganalisis kompleksitas waktu langkah algoritma dan mengoptimalkan struktur data.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah pilar Berpikir Komputasional beserta contoh penerapannya yang BENAR? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Dekomposisi: Memecah proyek pembuatan aplikasi toko online menjadi modul login, katalog, keranjang, dan pembayaran.", isCorrect: true 
              },
                  { kode: "B", teks: "Pengenalan Pola: Menemukan kesamaan alur verifikasi data pada sistem registrasi akun.", isCorrect: true },
                  { kode: "C", teks: "Abstraksi: Mengabaikan warna rambut pengguna dan hanya menyimpan data nama serta NISN yang relevan.", isCorrect: true },
                  { kode: "D", teks: "Algoritma: Membeli komputer termahal agar komputer berjalan sangat cepat.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A (Dekomposisi), B (Pola), C (Abstraksi) benar. D bukan algoritma.",
              },
              soalUraian: {
                level: "C4 (Analisis Struktur Data Stack vs Queue)",
                pertanyaan: "Jelaskan perbedaan mendasar prinsip kerja struktur data 'Stack' (Tumpukan) dan 'Queue' (Antrean) serta berikan masing-masing 1 contoh penerapannya dalam fitur aplikasi komputer!",
                kunci: "1. Stack menggunakan prinsip LIFO (Last In First Out), di mana data yang terakhir masuk akan menjadi yang pertama dikeluarkan. Contoh di komputer: Fitur 'Undo' pada Microsoft Word atau tombol 'Back' di browser web. 2. Queue menggunakan prinsip FIFO (First In First Out), di mana data yang pertama masuk akan menjadi yang pertama diproses. Contoh di komputer: Antrean dokumen yang masuk ke mesin cetak (Print Spooler) atau antrean pemrosesan pesan chat.",
                pembahasan: "Komparasi LIFO vs FIFO dalam arsitektur perangkat lunak.",
                rubrik: [
                  { kriteria: "Menjelaskan prinsip Stack (LIFO) dan contoh aplikasi 'Undo'", skor: 10 },
                  { kriteria: "Menjelaskan prinsip Queue (FIFO) dan contoh 'Print Spooler'", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Algoritma dan Pemrograman (AP)",
        deskripsiCP:
          "Merancang dan mendokumentasikan algoritma blok/visual (seperti Scratch/Blockly) menggunakan variabel, kondisional, dan perulangan.",
        kompetensiKKO: "Merancang Algoritma Blok Visual, Menerapkan Variabel & Kondisional (IF-ELSE), Menerapkan Perulangan (LOOP)",
        lingkupMateri: "Pemrograman Visual Scratch/Blockly, Percabangan (IF-ELSE, Nested IF), Perulangan (Repeat, Forever, While)",
        tpList: [
          {
            kodeTP: "TP.02",
            teksTP:
              "Merancang, membuat, dan menguji program visual (Scratch/Blockly) yang memuat variabel, struktur percabangan (if-else), dan perulangan untuk memecahkan simulasi sains atau game edukasi.",
            alokasiJP: 10,
            semester: "GENAP",
            prasyarat: "TP.01 - Memahami alur logika algoritma",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Karya Inovasi", "PPRA: Dinamis"],
            konteksPembelajaran: {
              stimulus: "Pembuatan game edukasi sains 'Pilah Sampah Organik vs Anorganik' di mana sprite tempat sampah bergerak menangkap sampah jatuh dan menambah skor (variabel).",
              stimulusKemenag: "Membuat karya teknologi edukatif yang mengajak manusia menjaga kebersihan bumi adalah wujud amal kebaikan digital.",
              masalahNyata: "Bagaimana cara mengatur logika kondisional (IF skor >= 100 THEN broadcast 'Level Menang' ELSE lanjut bermain)?",
              kegiatanEksplorasi: [
                "Merancang diagram alir (flowchart) game menggunakan simbol terminator, proses, decision (belah ketupat), dan input/output.",
                "Pengkodean blok Scratch: event 'when green flag clicked', loop 'forever', sensing 'touching sprite', dan operasi variabel 'change score by 10'.",
              ],
              pertanyaanHOTS: [
                { level: "C6 - Kreasi Kode", teks: "Rancanglah susunan blok algoritma kondisional bersarang (Nested IF) untuk menentukan tingkatan nilai siswa (A, B, C, D) berdasarkan input variabel 'nilai'!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Pemrograman blok Scratch dan debugging",
                  baru: "Menyusun blok tanpa menghubungkan event pemicu.",
                  layak: "Mampu membuat sprite bergerak dengan perintah gerak sederhana.",
                  cakap: "Mampu memadukan variabel, perulangan, dan kondisional if-else secara fungsional tanpa bug.",
                  mahir: "Mampu mendesain game edukasi interaktif multi-level dengan logika scoring dan sound effect yang dinamis.",
                },
              ],
              soalPGK: {
                pertanyaan: "Dalam pemrograman Scratch, blok manakah yang digunakan untuk MENGEKSEKUSI PERCABANGAN KONDISIONAL? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "if <kondisi> then", isCorrect: true 
              },
                  { kode: "B", teks: "if <kondisi> then ... else ...", isCorrect: true },
                  { kode: "C", teks: "wait until <kondisi>", isCorrect: true },
                  { kode: "D", teks: "move (10) steps", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, C adalah blok kontrol berbasis kondisi logika boolean. D adalah blok gerak (motion).",
              },
              soalUraian: {
                level: "C4 (Analisis Alur Program)",
                pertanyaan: "Diberikan pseudocode Scratch: \n1. Set [Skor] to 0 \n2. Repeat (5) times: \n   Change [Skor] by 10 \n   If [Skor] > 25 then \n      Change [Skor] by 5 \nBerapakah nilai akhir variabel [Skor] setelah seluruh perulangan selesai dijalankan? Tuliskan langkah perulangannya!",
                kunci: "Langkah 1: Skor=0+10=10 (tidak >25). Langkah 2: Skor=10+10=20 (tidak >25). Langkah 3: Skor=20+10=30 (karena 30>25, Skor bertambah 5 menjadi 35). Langkah 4: Skor=35+10=45 (karena 45>25, bertambah 5 menjadi 50). Langkah 5: Skor=50+10=60 (karena 60>25, bertambah 5 menjadi 65). Nilai akhir Skor = 65.",
                pembahasan: "Tracing variabel dalam perulangan dan kondisional.",
                rubrik: [
                  { kriteria: "Menuliskan penelusuran (tracing) putaran 1 sampai 5", skor: 12 },
                  { kriteria: "Menemukan hasil akhir Skor = 65 secara akurat", skor: 8 },
                ],
              },
            },
          },
        ],
      },
    ],
  },
  // Ilmu Pengetahuan Sosial (IPS)
  {
    fase: "Fase D",
    kelasDefault: "Kelas VII",
    mapel: "Ilmu Pengetahuan Sosial (IPS)",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pemahaman Konsep & Keterampilan Proses",
        deskripsiCP: "Menjelaskan keberagaman kondisi geografis Indonesia, konektivitas antarruang, pemanfaatan dan pelestarian sumber daya alam, faktor aktivitas manusia terhadap perubahan iklim dan potensi bencana alam; mengidentifikasi kegiatan ekonomi, harga, pasar, lembaga keuangan, perdagangan internasional; menelaah peran masyarakat dan negara dalam pertumbuhan ekonomi era digital; mengelaborasi interaksi sosial, dinamika sosial dan perubahan sistem sosial budaya; menjelaskan konsep dasar sejarah dan keterhubungan masa lampau, kini, dan masa depan.",
        kompetensiKKO: "Menjelaskan, Menganalisis, Merefleksikan, Mengidentifikasi, Menelaah, Mengelaborasi",
        lingkupMateri: "Kondisi Geografis & Konektivitas, Perubahan Iklim & Bencana, Kegiatan Ekonomi & Pasar, Dinamika Sosial Budaya, Konsep Dasar Sejarah & Jalur Rempah",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP: "Menganalisis pengaruh keberagaman kondisi geografis Indonesia terhadap konektivitas antarruang dan mengidentifikasi potensi sumber daya alam untuk mendukung kehidupan sosial ekonomi secara berkelanjutan.",
            alokasiJP: 12,
            semester: "GANJIL",
            prasyarat: "Memahami letak geografis dan astronomis Indonesia",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kewargaan", "Kolaborasi"],
            dimensiKarakterKemenag: ["Cinta Tanah Air", "PPRA: Dinamis dan Inovatif (Tathawwur wa Ibtikar)"],
            konteksPembelajaran: {
              stimulus: "Siswa diajak mengamati peta persebaran komoditas unggulan antar pulau di Indonesia dan dampaknya terhadap jalur perdagangan.",
              stimulusKemenag: "Siswa mendiskusikan bahwa kekayaan alam Nusantara adalah karunia Allah yang menuntut kita untuk menjaga dan mendistribusikannya secara adil.",
              masalahNyata: "Bagaimana cara mendistribusikan bahan pangan dari daerah agraris ke wilayah kepulauan atau pesisir yang minim sumber pangan?",
              kegiatanEksplorasi: [
                "Melakukan analisis kasus mengenai kesenjangan harga barang di Pulau Jawa dan Papua akibat masalah konektivitas.",
                "Membuat rancangan (mind map) alur distribusi barang unggulan dari daerah tempat tinggal ke luar daerah."
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi", teks: "Evaluasilah dampak pembangunan infrastruktur seperti Jalan Tol Laut terhadap disparitas harga kebutuhan pokok antar wilayah di Indonesia!" }
              ],
              rubrikIndikator: [
                { kriteria: "Analisis Konektivitas", baru: "Hanya dapat menyebutkan contoh sumber daya alam di daerahnya.", layak: "Mampu menjelaskan hubungan antara kondisi geografis dan ketersediaan barang.", cakap: "Mampu menganalisis masalah distribusi akibat kondisi geografis.", mahir: "Mampu merumuskan solusi inovatif untuk mengatasi masalah konektivitas antarruang." }
              ],
              soalPGK: {
                pertanyaan: "Faktor utama yang menyebabkan terjadinya perbedaan harga komoditas pangan pokok antara Pulau Jawa dan Papua adalah... (Pilih 2 jawaban benar)",
                pilihan: [
                  { kode: "A", teks: "Konektivitas antarruang yang belum optimal dan biaya logistik transportasi antar pulau yang tinggi.", isCorrect: true 
              },
                  { kode: "B", teks: "Perbedaan nilai mata uang yang digunakan di kedua pulau.", isCorrect: false },
                  { kode: "C", teks: "Kondisi geografis Indonesia yang berupa kepulauan menyulitkan distribusi barang secara cepat.", isCorrect: true },
                  { kode: "D", teks: "Tingginya ekspor pangan ke luar negeri dari wilayah timur Indonesia.", isCorrect: false }
                ],
                kunci: "Sesuai opsi benar",
                pembahasan: "Pembahasan soal ini merujuk pada materi."
              },
              soalUraian: {
                level: "C4 HOTS",
                pertanyaan: "Jelaskan bagaimana konsep konektivitas antarruang dapat digunakan untuk memecahkan masalah kelangkaan bahan kebutuhan pokok di daerah terpencil atau kepulauan!",
                kunci: "Konektivitas antarruang adalah keterhubungan antara satu wilayah dengan wilayah lain akibat perbedaan potensi dan karakteristik. Untuk memecahkan masalah kelangkaan, wilayah terpencil yang kekurangan suatu barang dapat dipasok dari wilayah surplus dengan cara membangun jalur transportasi, mengoptimalkan pelayaran atau Tol Laut, dan memperkuat logistik agar distribusi merata.",
                pembahasan: "Skor 4: Penjelasan sangat logis, memuat konsep konektivitas dan solusi nyata transportasi. Skor 3: Menjelaskan konektivitas tapi solusi kurang rinci. Skor 2: Penjelasan terlalu umum. Skor 1: Jawaban tidak relevan.",
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
    fase: "Fase D",
    kelasDefault: "Kelas VII",
    mapel: "Ilmu Pengetahuan Sosial (IPS)",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pemahaman Konsep & Keterampilan Proses",
        deskripsiCP: "Menjelaskan keberagaman kondisi geografis Indonesia, konektivitas antarruang, pemanfaatan dan pelestarian sumber daya alam, faktor aktivitas manusia terhadap perubahan iklim dan potensi bencana alam; mengidentifikasi kegiatan ekonomi, harga, pasar, lembaga keuangan, perdagangan internasional; menelaah peran masyarakat dan negara dalam pertumbuhan ekonomi era digital; mengelaborasi interaksi sosial, dinamika sosial dan perubahan sistem sosial budaya; menjelaskan konsep dasar sejarah dan keterhubungan masa lampau, kini, dan masa depan.",
        kompetensiKKO: "Menjelaskan, Menganalisis, Merefleksikan, Mengidentifikasi, Menelaah, Mengelaborasi",
        lingkupMateri: "Kondisi Geografis & Konektivitas, Perubahan Iklim & Bencana, Kegiatan Ekonomi & Pasar, Dinamika Sosial Budaya, Konsep Dasar Sejarah & Jalur Rempah",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP: "Menganalisis pengaruh keberagaman kondisi geografis Indonesia terhadap konektivitas antarruang dan mengidentifikasi potensi sumber daya alam untuk mendukung kehidupan sosial ekonomi secara berkelanjutan.",
            alokasiJP: 12,
            semester: "GANJIL",
            prasyarat: "Memahami letak geografis dan astronomis Indonesia",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kewargaan", "Kolaborasi"],
            dimensiKarakterKemenag: ["Cinta Tanah Air", "PPRA: Dinamis dan Inovatif (Tathawwur wa Ibtikar)"],
            konteksPembelajaran: {
              stimulus: "Siswa diajak mengamati peta persebaran komoditas unggulan antar pulau di Indonesia dan dampaknya terhadap jalur perdagangan.",
              stimulusKemenag: "Siswa mendiskusikan bahwa kekayaan alam Nusantara adalah karunia Allah yang menuntut kita untuk menjaga dan mendistribusikannya secara adil.",
              masalahNyata: "Bagaimana cara mendistribusikan bahan pangan dari daerah agraris ke wilayah kepulauan atau pesisir yang minim sumber pangan?",
              kegiatanEksplorasi: [
                "Melakukan analisis kasus mengenai kesenjangan harga barang di Pulau Jawa dan Papua akibat masalah konektivitas.",
                "Membuat rancangan (mind map) alur distribusi barang unggulan dari daerah tempat tinggal ke luar daerah."
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi", teks: "Evaluasilah dampak pembangunan infrastruktur seperti Jalan Tol Laut terhadap disparitas harga kebutuhan pokok antar wilayah di Indonesia!" }
              ],
              rubrikIndikator: [
                { kriteria: "Analisis Konektivitas", baru: "Hanya dapat menyebutkan contoh sumber daya alam di daerahnya.", layak: "Mampu menjelaskan hubungan antara kondisi geografis dan ketersediaan barang.", cakap: "Mampu menganalisis masalah distribusi akibat kondisi geografis.", mahir: "Mampu merumuskan solusi inovatif untuk mengatasi masalah konektivitas antarruang." }
              ],
              soalPGK: {
                pertanyaan: "Faktor utama yang menyebabkan terjadinya perbedaan harga komoditas pangan pokok antara Pulau Jawa dan Papua adalah... (Pilih 2 jawaban benar)",
                pilihan: [
                  { kode: "A", teks: "Konektivitas antarruang yang belum optimal dan biaya logistik transportasi antar pulau yang tinggi.", isCorrect: true },
                  { kode: "B", teks: "Perbedaan nilai mata uang yang digunakan di kedua pulau.", isCorrect: false },
                  { kode: "C", teks: "Kondisi geografis Indonesia yang berupa kepulauan menyulitkan distribusi barang secara cepat.", isCorrect: true },
                  { kode: "D", teks: "Tingginya ekspor pangan ke luar negeri dari wilayah timur Indonesia.", isCorrect: false }
                ]
              },
              soalUraian: { level: "C4 HOTS", pertanyaan: "Jelaskan bagaimana konsep konektivitas antarruang dapat digunakan untuk memecahkan masalah kelangkaan bahan kebutuhan pokok di daerah terpencil atau kepulauan!",
                kunci: "Konektivitas antarruang adalah keterhubungan antara satu wilayah dengan wilayah lain akibat perbedaan potensi dan karakteristik. Untuk memecahkan masalah kelangkaan, wilayah terpencil yang kekurangan suatu barang dapat dipasok dari wilayah surplus dengan cara membangun jalur transportasi, mengoptimalkan pelayaran atau Tol Laut, dan memperkuat logistik agar distribusi merata.",
                pembahasan: "Skor 4: Penjelasan sangat logis, memuat konsep konektivitas dan solusi nyata transportasi. Skor 3: Menjelaskan konektivitas tapi solusi kurang rinci. Skor 2: Penjelasan terlalu umum. Skor 1: Jawaban tidak relevan."
              }
            }
          }
        ]
      }
    ]
  },
  {
    fase: "Fase D",
    kelasDefault: "Kelas VII",
    mapel: "Matematika",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Bilangan",
        deskripsiCP: "Bilangan bulat, rasional, desimal, berpangkat bulat dan akar, notasi ilmiah; operasi aritmatika bilangan real; estimasi/perkiraan termasuk literasi finansial; rasio meliputi skala, proporsi, laju perubahan.",
        kompetensiKKO: "Menganalisis, Menyelesaikan, Mengestimasi",
        lingkupMateri: "Bilangan Bulat, Rasional, Berpangkat, Akar, Literasi Finansial, Rasio dan Proporsi",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP: "Menyelesaikan masalah kontekstual yang berkaitan dengan operasi aritmatika bilangan real dan literasi finansial dalam kehidupan sehari-hari.",
            alokasiJP: 16,
            semester: "GANJIL",
            prasyarat: "Memahami operasi dasar bilangan cacah dan pecahan",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Amanah (Kejujuran Finansial)"],
            konteksPembelajaran: {
              stimulus: "Siswa diajak mengamati brosur diskon ganda di sebuah pusat perbelanjaan (misal: Diskon 50% + 20%).",
              stimulusKemenag: "Siswa mendiskusikan pengelolaan keuangan yang halal dan transparan, serta menghindari tabzir (pemborosan) melalui simulasi jual beli.",
              masalahNyata: "Bagaimana cara menghitung harga akhir dari suatu barang yang mendapat diskon bertingkat, dan apakah itu sama dengan diskon 70%?",
              kegiatanEksplorasi: [
                "Mensimulasikan perhitungan transaksi jual beli dengan berbagai skenario diskon.",
                "Membandingkan hasil perhitungan estimasi dengan perhitungan pasti."
              ],
              pertanyaanHOTS: [
                { level: "C5 - Mengevaluasi", teks: "Buktikan secara matematis mengapa diskon 50% + 20% tidak sama dengan diskon 70% pada harga barang Rp200.000!" }
              ],
              rubrikIndikator: [
                { kriteria: "Analisis Diskon", baru: "Belum mampu membedakan diskon tunggal dan bertingkat.", layak: "Mampu menghitung diskon tunggal dengan benar.", cakap: "Mampu menghitung diskon bertingkat secara akurat.", mahir: "Mampu membuktikan perbedaan persentase diskon bertingkat secara logis dan matematis." }
              ],
              soalPGK: {
                pertanyaan: "Sebuah toko pakaian memberikan diskon 50% + 20% untuk sepatu seharga Rp300.000. Pernyataan yang benar adalah... (Pilih 2)",
                pilihan: [
                  { kode: "A", teks: "Harga setelah diskon pertama (50%) adalah Rp150.000.", isCorrect: true },
                  { kode: "B", teks: "Total diskon yang didapatkan adalah 70%.", isCorrect: false },
                  { kode: "C", teks: "Harga akhir sepatu tersebut adalah Rp120.000.", isCorrect: true },
                  { kode: "D", teks: "Harga akhir sepatu tersebut adalah Rp90.000.", isCorrect: false }
                ]
              },
              soalUraian: {
                level: "C4 HOTS",
                pertanyaan: "Jelaskan dengan perhitungan matematis, manakah yang lebih menguntungkan bagi pembeli: Diskon langsung 60% atau Diskon bertingkat 40% + 30% untuk barang seharga Rp500.000?",
                kunci: "Diskon 60% = 40% x 500.000 = Rp200.000 (Harga bayar). Diskon 40% + 30%: Harga setelah 40% = 300.000. Harga setelah 30% lagi = 70% x 300.000 = Rp210.000. Lebih menguntungkan diskon langsung 60% karena harga yang dibayar lebih murah.",
                pembahasan: "Menganalisis dua skenario secara terpisah dan membandingkan hasil akhir.",
                rubrik: [{ kriteria: "Perhitungan komprehensif dua skenario dan kesimpulan", skor: 10 }]
              }
            }
          }
        ]
      },
      {
        namaElemen: "Aljabar",
        deskripsiCP: "Mengenali, memprediksi, menggeneralisasi pola susunan benda dan bilangan; menyatakan situasi dalam bentuk aljabar; sifat operasi komutatif, asosiatif, distributif untuk bentuk ekuivalen; relasi dan fungsi linear secara grafik; persamaan/pertidaksamaan linear satu variabel; sistem persamaan linear dua variabel.",
        kompetensiKKO: "Memprediksi, Menggeneralisasi, Menyatakan",
        lingkupMateri: "Pola Bilangan, Bentuk Aljabar, Persamaan Linear Satu Variabel (PLSV), Sistem Persamaan Linear Dua Variabel (SPLDV)",
        tpList: [
          {
            kodeTP: "TP.02",
            teksTP: "Memodelkan masalah dunia nyata ke dalam Sistem Persamaan Linear Dua Variabel (SPLDV) dan menyelesaikannya dengan berbagai metode.",
            alokasiJP: 14,
            semester: "GENAP",
            prasyarat: "Memahami operasi dasar bentuk aljabar dan persamaan linear satu variabel",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Tasamuh (Keadilan proporsional)"],
            konteksPembelajaran: {
              stimulus: "Struk pembelian di kantin: 2 mangkuk bakso dan 3 gelas es teh seharga Rp 35.000, sedangkan 1 mangkuk bakso dan 2 es teh seharga Rp 20.000.",
              stimulusKemenag: "Menghitung pembagian paket sembako amal (misal paket beras dan minyak) menggunakan pemodelan matematika untuk menjamin keadilan takaran.",
              masalahNyata: "Berapa harga masing-masing 1 mangkuk bakso dan 1 gelas es teh tanpa menanyakan langsung ke penjual?",
              kegiatanEksplorasi: [
                "Membuat model matematika dari struk belanja.",
                "Mencari solusi harga satuan menggunakan metode substitusi atau eliminasi."
              ],
              pertanyaanHOTS: [
                { level: "C4 - Menganalisis", teks: "Jika uangmu hanya Rp15.000, dapatkah kamu membeli 1 bakso dan 1 es teh berdasarkan harga yang telah ditemukan? Jelaskan!" }
              ],
              rubrikIndikator: [
                { kriteria: "Pemodelan Matematika", baru: "Hanya bisa menuliskan ulang soal.", layak: "Mampu memisalkan variabel (x dan y).", cakap: "Mampu menyusun SPLDV dengan benar.", mahir: "Mampu menyusun SPLDV dan menyelesaikannya secara akurat serta mengembalikan maknanya ke konteks awal." }
              ],
              soalPGK: {
                pertanyaan: "Diketahui model matematika: 2x + 3y = 35.000 dan x + 2y = 20.000. Pernyataan yang benar adalah... (Pilih 2)",
                pilihan: [
                  { kode: "A", teks: "Harga y (es teh) adalah Rp 5.000.", isCorrect: true },
                  { kode: "B", teks: "Harga x (bakso) adalah Rp 10.000.", isCorrect: true },
                  { kode: "C", teks: "Harga 1 bakso dan 1 es teh adalah Rp 20.000.", isCorrect: false },
                  { kode: "D", teks: "Harga 2 bakso dan 1 es teh adalah Rp 30.000.", isCorrect: false }
                ]
              },
              soalUraian: {
                level: "C5 HOTS",
                pertanyaan: "Budi membeli 3 buku dan 2 pensil seharga Rp 18.000. Ali membeli 1 buku dan 3 pensil seharga Rp 13.000. Susunlah model matematikanya dan tentukan harga 2 buku dan 1 pensil!",
                kunci: "Misal buku = b, pensil = p. 3b + 2p = 18.000 dan b + 3p = 13.000. Eliminasi/substitusi didapat p = 3.000, b = 4.000. Harga 2b + 1p = 2(4.000) + 3.000 = Rp 11.000.",
                pembahasan: "Siswa perlu konsisten dalam memisalkan dan menggunakan salah satu metode penyelesaian.",
                rubrik: [{ kriteria: "Pemodelan, Proses Eliminasi/Substitusi, dan Jawaban Akhir", skor: 10 }]
              }
            }
          }
        ]
      }
    ]
  },

  {
    fase: "Fase D",
    kelasDefault: "Kelas VII",
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
            prasyarat: "Memiliki pengetahuan dasar terkait fenomena.",
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
];
