// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import { CPDataset } from "../curriculumDatabase";

export const FASE_A_SENI_MULOK_DATASETS: CPDataset[] = [
  // 1. Seni Rupa (Fase A - Kelas I/II)
  {
    fase: "Fase A",
    kelasDefault: "Kelas I",
    mapel: "Seni Rupa",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Mengalami dan Menciptakan",
        deskripsiCP:
          "Mengeksplorasi unsur rupa (titik, garis lurus/lengkung, bentuk geometris/organis, warna primer/sekunder) dan menciptakan karya seni 2D/3D sederhana dengan percaya diri.",
        kompetensiKKO: "Mengeksplorasi, Menggambar, Menciptakan Kolase",
        lingkupMateri: "Unsur Rupa (Garis, Bentuk, Warna Pokok), Gambar Ekspresi, Kolase Bahan Alam",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Mengenal dan mengeksplorasi unsur rupa garis dan warna pokok (merah, kuning, biru) untuk membuat gambar ekspresi imajinatif tentang keindahan alam sekitar.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mengenal pensil warna dan krayon",
            dimensiKarakterDinas: ["Kreativitas", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Alam & Keindahan", "PPRA: Dinamis & Kreatif"],
            konteksPembelajaran: {
              stimulus: "Pemandangan pelangi tujuh warna di langit setelah hujan menginspirasi siswa untuk memadukan warna primer menjadi warna baru yang indah.",
              stimulusKemenag: "Allah Maha Indah dan mencintai keindahan ciptaan-Nya yang penuh warna.",
              masalahNyata: "Warna baru apa yang akan terbentuk jika warna merah dicampur dengan warna kuning?",
              kegiatanEksplorasi: [
                "Praktik mencampur cat air warna merah dan kuning menjadi jingga/oranye.",
                "Menggambar pemandangan gunung dan pepohonan dengan garis lengkung dan zigzag.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Analisislah mengapa warna merah, kuning, dan biru disebut sebagai WARNA PRIMER (warna pokok)!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Mengeksplorasi garis dan warna primer",
                  baru: "Mewarnai masih sering keluar garis gambar.",
                  layak: "Mampu menyebutkan 3 warna primer.",
                  cakap: "Mampu memadukan aneka garis dan mencampur warna primer menjadi sekunder secara rapi.",
                  mahir: "Mampu menghasilkan karya gambar ekspresi yang penuh cerita dan komposisi seimbang.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah yang merupakan 3 WARNA PRIMER (warna dasar yang tidak berasal dari campuran warna lain)? (Pilih jawaban yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Warna Merah.", isCorrect: true },
                  { kode: "B", teks: "Warna Kuning.", isCorrect: true },
                  { kode: "C", teks: "Warna Biru.", isCorrect: true },
                  { kode: "D", teks: "Warna Hijau.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Warna primer terdiri dari Merah, Kuning, dan Biru. Hijau adalah warna sekunder hasil campuran biru dan kuning.",
              },
              soalUraian: {
                level: "C4 (Pencampuran Warna)",
                pertanyaan: "Jelaskan hasil pencampuran warna berikut:\n1. Merah dicampur Biru menghasilkan warna apa?\n2. Biru dicampur Kuning menghasilkan warna apa?",
                kunci: "1. Merah + Biru menghasilkan warna UNGU.\n2. Biru + Kuning menghasilkan warna HIJAU.",
                pembahasan: "Teori dasar pencampuran warna sekunder.",
                rubrik: [
                  { kriteria: "Menyebutkan warna ungu dengan tepat", skor: 10 },
                  { kriteria: "Menyebutkan warna hijau dengan tepat", skor: 10 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.02",
            teksTP:
              "Membuat karya kolase dan mozaik 2 dimensi memanfaatkan bahan alam sekitar (daun kering, biji-bijian, ranting) secara artistik dan ramah lingkungan.",
            alokasiJP: 6,
            semester: "GENAP",
            prasyarat: "TP.01 - Mengenal bentuk bangun datar dan garis",
            dimensiKarakterDinas: ["Kreativitas", "Kemandirian", "Kesehatan"],
            dimensiKarakterKemenag: ["Cinta Lingkungan", "PPRA: Berkeadaban"],
            konteksPembelajaran: {
              stimulus: "Daun-daun kering yang gugur di halaman sekolah dikumpulkan oleh siswa lalu ditempel membentuk pola burung merak yang indah.",
              stimulusKemenag: "Memanfaatkan benda alam yang tidak terpakai menjadi karya seni bernilai adalah bentuk rasa syukur dan peduli lingkungan.",
              masalahNyata: "Bagaimana cara menempel daun kering pada pola kertas agar tidak mudah lepas dan terlipat?",
              kegiatanEksplorasi: [
                "Mengumpulkan daun kering aneka bentuk di taman sekolah.",
                "Membuat karya kolase ikan mas menggunakan potongan daun kering dan lem.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi", teks: "Evaluasilah kelebihan menggunakan bahan alam (daun/biji) untuk karya seni dibandingkan menggunakan bahan plastik sekali pakai!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Membuat karya kolase bahan alam",
                  baru: "Menempel bahan belum merata dan pola gambar belum tertutup.",
                  layak: "Mampu menempelkan daun mengikuti pola sederhana.",
                  cakap: "Mampu menyusun kolase bahan alam secara rapi, bersih, dan komposisi proporsional.",
                  mahir: "Mampu memadukan gradasi tekstur biji-bijian dan daun secara unik dan bernilai estetis tinggi.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah bahan-bahan alam yang dapat digunakan untuk membuat karya kolase atau mozaik? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Biji jagung dan biji kacang hijau.", isCorrect: true },
                  { kode: "B", teks: "Daun-daun kering aneka warna dan bentuk.", isCorrect: true },
                  { kode: "C", teks: "Cangkang telur yang telah dibersihkan.", isCorrect: true },
                  { kode: "D", teks: "Pecahan kaca tajam yang berbahaya.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Biji, daun kering, dan cangkang telur adalah bahan alam ramah lingkungan dan aman untuk kolase.",
              },
              soalUraian: {
                level: "C4 (Teknik Kolase)",
                pertanyaan: "Sebutkan 3 langkah urut membuat karya seni kolase dari daun kering!",
                kunci: "1. Membuat sketsa gambar pola (misal pola ikan atau bunga) pada kertas tebal. 2. Memilih dan menggunting daun kering sesuai ukuran bagian pola. 3. Mengoleskan lem dan menempelkan daun kering secara rapi hingga menutupi seluruh pola.",
                pembahasan: "Prosedur pembuatan kolase 2 dimensi.",
                rubrik: [
                  { kriteria: "Menyebutkan sketsa dan pemilihan daun", skor: 10 },
                  { kriteria: "Menyebutkan pengolesan lem dan penempelan rapi", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 2. Seni Musik (Fase A - Kelas I/II)
  {
    fase: "Fase A",
    kelasDefault: "Kelas I",
    mapel: "Seni Musik",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Mengalami dan Mengekspresikan Bunyi",
        deskripsiCP:
          "Mengenal unsur musik (tinggi-rendah nada, tempo cepat-lambat, dinamika keras-lembut), menyanyikan lagu anak-anak nasional/daerah, dan memainkan instrumen musik ritmis sederhana.",
        kompetensiKKO: "Mengeksplorasi, Menyanyi, Memainkan Ritme",
        lingkupMateri: "Unsur Ritmis & Ketukan, Lagu Anak Nasional & Daerah, Alat Musik Perkusi Sederhana",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Mengenal pola ritme birama sederhana (ketukan stabil) dan menyanyikan lagu anak nasional/daerah dengan artikulasi jelas, nada tepat, dan ekspresi riang.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mampu bertepuk tangan berirama",
            dimensiKarakterDinas: ["Kreativitas", "Kewargaan", "Komunikasi"],
            dimensiKarakterKemenag: ["Cinta Tanah Air", "PPRA: Dinamis"],
            konteksPembelajaran: {
              stimulus: "Siswa bersama-sama menyanyikan lagu 'Garuda Pancasila' dan 'Lihat Kebunku' sambil bertepuk tangan mengikuti pola birama 2/4 dan 4/4.",
              stimulusKemenag: "Irama dan harmoni nada yang teratur membangkitkan semangat kebersamaan dan keceriaan hati.",
              masalahNyata: "Bagaimana cara kita menjaga tempo ketukan agar saat bernyanyi bersama suaranya tidak saling mendahului?",
              kegiatanEksplorasi: [
                "Latihan tepuk birama stabil (tepuk paha - tepuk tangan).",
                "Menyanyikan lagu daerah 'Gundhul-Gundhul Pacul' atau 'Ampar-Ampar Pisang' bersama.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Bandingkan suasana lagu yang bertempo cepat (allegro) dengan lagu yang bertempo lambat dan tenang (lento)!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menyanyi sesuai nada dan pola ritme",
                  baru: "Menyanyi dengan nada datar dan belum mengikuti ketukan.",
                  layak: "Mampu menyanyikan lirik lagu anak dengan hafal.",
                  cakap: "Mampu menyanyi dengan artikulasi jelas, tempo stabil, dan ekspresi gembira.",
                  mahir: "Mampu memimpin paduan suara mini kelas dan memadukan tepuk ritmis variatif.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah yang termasuk contoh LAGU WAJIB NASIONAL yang membangkitkan rasa cinta tanah air? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Garuda Pancasila.", isCorrect: true },
                  { kode: "B", teks: "Indonesia Pusaka.", isCorrect: true },
                  { kode: "C", teks: "Satu Nusa Satu Bangsa.", isCorrect: true },
                  { kode: "D", teks: "Balonku Ada Lima.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Garuda Pancasila, Indonesia Pusaka, dan Satu Nusa Satu Bangsa adalah lagu wajib nasional. Balonku adalah lagu anak tematik.",
              },
              soalUraian: {
                level: "C4 (Unsur Musik)",
                pertanyaan: "Apa yang dimaksud dengan 'Alat Musik Ritmis' dan sebutkan 2 contoh alat musik ritmis sederhana yang dapat dimainkan di kelas!",
                kunci: "Alat musik ritmis adalah alat musik yang tidak bernada (tidak memiliki tangga nada do-re-mi) tetapi berfungsi menghasilkan irama/ketukan ketukan lagu. Contoh: Marakas, Rebana, Tamborin, Triangel, atau tepukan tempurung kelapa.",
                pembahasan: "Konsep dasar klasifikasi instrumen musik perkusi.",
                rubrik: [
                  { kriteria: "Menjelaskan pengertian alat musik ritmis (penghasil ketukan)", skor: 10 },
                  { kriteria: "Menyebutkan 2 contoh alat musik ritmis", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 3. Seni Tari (Fase A - Kelas I/II)
  {
    fase: "Fase A",
    kelasDefault: "Kelas I",
    mapel: "Seni Tari",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Mengalami dan Meragakan Gerak",
        deskripsiCP:
          "Mengeksplorasi gerak tari menirukan gerak alam (hewan, tumbuhan, angin) dan meragakan gerak tari sederhana berirama dengan koordinasi tubuh yang selaras.",
        kompetensiKKO: "Mengeksplorasi, Menirukan, Meragakan Gerak Tari",
        lingkupMateri: "Gerak Imitatif Hewan & Tumbuhan, Gerak Tari Berirama Musik, Penghayatan Tari",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Mengeksplorasi dan memperagakan gerak tari imitatif (menirukan gerak kupu-kupu terbang, kelinci melompat, dan pohon tertiup angin) sesuai iringan ketukan musik.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mampu bergerak mengikuti alunan lagu",
            dimensiKarakterDinas: ["Kreativitas", "Kolaborasi", "Kesehatan"],
            dimensiKarakterKemenag: ["Cinta Keindahan Alam", "PPRA: Dinamis"],
            konteksPembelajaran: {
              stimulus: "Kupu-kupu dengan sayap warna-warni terbang mengayun di atas bunga taman, menginspirasi gerakan tari tangan berayun gemulai.",
              stimulusKemenag: "Gerak tari yang sopan dan harmonis mengekspresikan rasa syukur atas keindahan alam ciptaan Sang Maha Kuasa.",
              masalahNyata: "Bagaimana cara menggerakkan kedua tangan dan langkah kaki agar terlihat seperti gerak kupu-kupu yang melayang?",
              kegiatanEksplorasi: [
                "Eksplorasi gerak menirukan hewan kelinci melompat dan bebek berjalan.",
                "Menarikan tarian mini 'Kupu-Kupu yang Lucu' secara berkelompok.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Analisislah perbedaan gerakan tangan saat menirukan pohon tertiup angin sepoi-sepoi dengan angin badai yang kencang!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Meragakan gerak tari imitatif berirama",
                  baru: "Gerakan masih kaku dan tidak sinkron dengan musik.",
                  layak: "Mampu menirukan gerak hewan dasar.",
                  cakap: "Mampu meragakan rangkaian gerak tari dengan kelenturan tubuh dan selaras irama lagu.",
                  mahir: "Mampu mengekspresikan mimik wajah ceria dan percaya diri tampil di panggung kelas.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah contoh gerakan tari yang menirukan GERAK ALAM (gerak imitatif)? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Mengayunkan kedua tangan ke atas dan ke bawah menirukan sayap burung terbang.", isCorrect: true },
                  { kode: "B", teks: "Melompat-lompat kecil dengan kedua tangan di kepala menirukan telinga kelinci.", isCorrect: true },
                  { kode: "C", teks: "Meliukkan badan ke kiri dan kanan menirukan pohon tertiup angin.", isCorrect: true },
                  { kode: "D", teks: "Duduk diam tanpa menggerakkan anggota badan sama sekali.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Menirukan burung, kelinci, dan pohon tertiup angin adalah gerak imitatif dalam seni tari.",
              },
              soalUraian: {
                level: "C4 (Deskripsi Gerak Tari)",
                pertanyaan: "Jelaskan bagaimana cara memperagakan gerakan 'Bunga Mawar Mekar' dalam seni tari sederhana!",
                kunci: "Dimulai dari posisi jongkok atau merapatkan kedua telapak tangan di depan dada seperti kuncup bunga, lalu perlahan-lahan berdiri tegak sambil membuka kedua tangan dan jari-jemari melebar ke atas dengan senyuman wajah merekah.",
                pembahasan: "Eksplorasi gerak tari tema alam flora.",
                rubrik: [
                  { kriteria: "Menjelaskan posisi kuncup merapat", skor: 10 },
                  { kriteria: "Menjelaskan gerakan mekar membuka ke atas dan ekspresi senyum", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 4. Seni Teater (Fase A - Kelas I/II)
  {
    fase: "Fase A",
    kelasDefault: "Kelas I",
    mapel: "Seni Teater",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Mengalami dan Menciptakan Peran",
        deskripsiCP:
          "Mengeksplorasi mimik wajah, intonasi suara, dan gestur tubuh untuk mengekspresikan berbagai emosi dan memerankan tokoh dalam cerita fabel/dongeng anak.",
        kompetensiKKO: "Mengeksplorasi Mimik, Bermain Peran, Memerankan Tokoh",
        lingkupMateri: "Ekspresi Emosi (Senang, Sedih, Terkejut), Pantomim Sederhana, Bermain Peran Fabel",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Mengeksplorasi ekspresi emosi (senang, sedih, takut, marah, bangga) melalui mimik wajah dan gerak tubuh serta memerankan tokoh fabel sederhana bersama teman.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mampu menunjukkan ekspresi wajah",
            dimensiKarakterDinas: ["Kreativitas", "Komunikasi", "Kolaborasi"],
            dimensiKarakterKemenag: ["Cinta Diri & Sesama", "PPRA: Dinamis & Terbuka"],
            konteksPembelajaran: {
              stimulus: "Siswa bermain cermin ekspresi di depan kelas: satu anak membuat mimik tersenyum gembira, anak lain menirukan sebagai bayangan cermin.",
              stimulusKemenag: "Seni peran melatih kita memiliki rasa empati, merasakan apa yang dirasakan orang lain, dan bersikap jujur.",
              masalahNyata: "Bagaimana cara mengubah mimik wajah dari ekspresi terkejut menjadi ekspresi tertawa gembira?",
              kegiatanEksplorasi: [
                "Permainan tebak emosi lewat gerak pantomim tanpa suara.",
                "Drama mini fabel 'Kancil, Kerbau, dan Buaya' di panggung kelas.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Analisislah pentingnya tatapan mata dan posisi tubuh saat memerankan tokoh yang sedang merasa takut!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Mengekspresikan emosi dan bermain peran",
                  baru: "Masih malu atau tertawa sendiri saat diminta berekspresi sedih.",
                  layak: "Mampu memperagakan ekspresi senang dan marah.",
                  cakap: "Mampu memerankan tokoh fabel dengan perubahan suara dan mimik yang konsisten.",
                  mahir: "Mampu menghidupkan dialog peran secara ekspresif, percaya diri, dan berkolaborasi kompak.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah pasangan jenis emosi dan bentuk mimik wajah yang SESUAI? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Emosi Senang: Bibir tersenyum lebar dan mata berbinar ceria.", isCorrect: true },
                  { kode: "B", teks: "Emosi Terkejut: Mata membelalak bulat dan mulut terbuka membentuk huruf 'O'.", isCorrect: true },
                  { kode: "C", teks: "Emosi Sedih: Sudut bibir melengkung ke bawah dan tatapan mata sayu.", isCorrect: true },
                  { kode: "D", teks: "Emosi Marah: Wajah tersenyum manis dengan suara berbisik lembut.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, dan C adalah ciri mimik emosi yang benar. Marah ditandai alis menyatu dan rahang mengeras.",
              },
              soalUraian: {
                level: "C4 (Karakterisasi Tokoh)",
                pertanyaan: "Jika kamu diminta memerankan tokoh 'Kelinci yang Ceria dan Lincah', bagaimana suara dan gerakan tubuh yang akan kamu tampilkan?",
                kunci: "Suara bernada ceria, riang, dan bersemangat. Gerakan tubuh melompat-lompat lincah, kedua tangan ditekuk di depan dada seperti kaki kelinci, dan sering tersenyum ramah.",
                pembahasan: "Eksplorasi gestur dan vokal dalam seni peran teater anak.",
                rubrik: [
                  { kriteria: "Menjelaskan intonasi suara ceria dan bersemangat", skor: 10 },
                  { kriteria: "Menjelaskan gerakan gestur melompat dan posisi tangan", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 5. Muatan Lokal (Bahasa Daerah) (Fase A - Kelas I/II)
  {
    fase: "Fase A",
    kelasDefault: "Kelas I",
    mapel: "Muatan Lokal (Bahasa Daerah)",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Menyimak dan Bertutur Kata Santun Bahasa Daerah",
        deskripsiCP:
          "Menyimak dongeng daerah, mengenal kosa kata bahasa daerah sehari-hari (anggota tubuh, sapaan keluarga, nama hewan/benda), serta membiasakan tata krama (unggah-ungguh/santun) berbahasa daerah.",
        kompetensiKKO: "Menyimak, Melafalkan, Bertutur Santun",
        lingkupMateri: "Kosa Kata Bahasa Daerah, Unggah-Ungguh / Tata Krama Bicara, Tembang Dolanan Daerah",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Mengenal kosa kata bahasa daerah untuk nama anggota tubuh dan sapaan keluarga serta mempraktikkan tata krama bertutur kata santun kepada orang tua dan guru.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mengenal bahasa ibu yang digunakan di lingkungan sekitar",
            dimensiKarakterDinas: ["Kewargaan", "Komunikasi", "Penalaran Kritis"],
            dimensiKarakterKemenag: ["Cinta Budaya Bangsa", "PPRA: Berkeadaban (Ta'addub)"],
            konteksPembelajaran: {
              stimulus: "Siswa melantunkan tembang dolanan daerah sambil menyapa guru dengan kalimat salam santun bahasa daerah (contoh: 'Sugeng enjang Bapak/Ibu Guru' atau 'Wilujeng enjing').",
              stimulusKemenag: "Menjaga bahasa daerah adalah wujud melestarikan kearifan lokal luhur bangsa yang sarat nilai adab dan kesantunan.",
              masalahNyata: "Mengapa saat berbicara dengan orang tua kita harus menggunakan bahasa daerah yang lebih halus (krama/lemes)?",
              kegiatanEksplorasi: [
                "Menyanyikan tembang dolanan anak daerah bersama-sama.",
                "Memasangkan gambar anggota tubuh dengan nama bahasa daerahnya.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Analisislah manfaat melestarikan bahasa daerah agar tidak punah di tengah pergaulan modern!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Bertutur kata santun dalam bahasa daerah",
                  baru: "Hanya mengenal 1-2 kata bahasa daerah.",
                  layak: "Mampu menyebutkan nama anggota tubuh dalam bahasa daerah.",
                  cakap: "Mampu menyapa orang tua dan guru dengan bahasa daerah yang santun dan membungkukkan badan.",
                  mahir: "Mampu menyanyikan tembang dolanan daerah secara fasih dan menceritakan maknanya.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah sikap yang menunjukkan TATA KRAMA SANTUN saat berbicara menggunakan bahasa daerah kepada orang yang lebih tua? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Menggunakan tingkatan bahasa yang halus dan sopan.", isCorrect: true },
                  { kode: "B", teks: "Menatap dengan ramah dan merendahkan nada suara.", isCorrect: true },
                  { kode: "C", teks: "Berbicara sambil membentak-bentak dengan nada tinggi.", isCorrect: false },
                  { kode: "D", teks: "Membungkukkan sedikit badan saat berjalan di depan orang tua.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "Sopan santun bahasa daerah mencakup pilihan bahasa halus, nada rendah, dan gestur menghormati.",
              },
              soalUraian: {
                level: "C4 (Kearifan Lokal)",
                pertanyaan: "Sebutkan 3 nama anggota tubuh (Kepala, Mata, Tangan) dalam bahasa daerah yang kamu pelajari di sekolah beserta ragam bahasa halusnya!",
                kunci: "Contoh Bahasa Jawa: 1. Kepala (Mustaka/Sirah). 2. Mata (Soca/Mripat). 3. Tangan (Asta/Tangan). / Contoh Bahasa Sunda: 1. Mastaka (Kepala). 2. Soca (Mata). 3. Panangan (Tangan).",
                pembahasan: "Kosa kata ragam hormat bahasa daerah.",
                rubrik: [
                  { kriteria: "Menyebutkan nama kepala dan mata dalam bahasa daerah", skor: 10 },
                  { kriteria: "Menyebutkan nama tangan dalam bahasa daerah", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },
];
