// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import { CPDataset } from "../curriculumDatabase";

export const FASE_A_UMUM_DATASETS: CPDataset[] = [
  // 1. Pendidikan Pancasila (Fase A - Kelas I/II)
  {
    fase: "Fase A",
    kelasDefault: "Kelas I",
    mapel: "Pendidikan Pancasila",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pancasila",
        deskripsiCP:
          "Mengenal simbol-simbol Pancasila dan Lambang Negara 'Garuda Pancasila', serta menceritakan hubungan simbol-simbol Pancasila dengan sila-sila Pancasila.",
        kompetensiKKO: "Mengenal, Menceritakan, Mengidentifikasi",
        lingkupMateri: "Simbol-Simbol Pancasila, Lambang Negara Garuda Pancasila, Sila 1-5",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Mengenal simbol-simbol sila Pancasila (Bintang, Rantai, Pohon Beringin, Kepala Banteng, Padi dan Kapas) pada lambang negara Garuda Pancasila secara visual dan konkret.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mengenal bendera Merah Putih dan lagu Indonesia Raya",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kewargaan", "Penalaran Kritis"],
            dimensiKarakterKemenag: ["Cinta Tanah Air", "Cinta Allah & Rasul-Nya", "PPRA: Berkeadaban (Ta'addub)"],
            konteksPembelajaran: {
              stimulus:
                "Di dinding depan ruang kelas terpasang perisai burung Garuda Pancasila yang memiliki lima ruang gambar lambang sila Pancasila dengan warna-warni yang indah.",
              stimulusKemenag:
                "Simbol-simbol Pancasila mengajarkan kita untuk selalu bersyukur kepada Tuhan, saling menyayangi sesama, rukun bersatu, dan adil dalam berbagi dengan teman.",
              masalahNyata:
                "Mengapa perisai pada dada burung Garuda memiliki lima lambang gambar yang berbeda-beda?",
              kegiatanEksplorasi: [
                "Mengamati kartu bergambar perisai lambang 5 sila Pancasila.",
                "Memasangkan kartu simbol sila dengan nomor silanya.",
                "Menempelkan gambar simbol sila pada poster burung Garuda kelompok.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C4 - Analisis",
                  teks: "Analisislah mengapa simbol Bintang emas diletakkan di bagian tengah perisai Garuda Pancasila!",
                },
                {
                  level: "C5 - Evaluasi",
                  teks: "Jika ada teman yang tidak mau berbagi pensil warna dengan teman sebangku, evaluasilah apakah sikap tersebut sesuai dengan simbol sila ke-5?",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menyebutkan dan mencocokkan simbol 5 sila Pancasila",
                  baru: "Menyebutkan 1-2 simbol dengan bantuan bimbingan guru.",
                  layak: "Mampu menyebutkan 3-4 simbol sila secara benar.",
                  cakap: "Mampu menyebutkan dan mencocokkan 5 simbol sila Pancasila dengan nomor sila secara tepat.",
                  mahir: "Mampu menjelaskan makna hubungan simbol sila dengan perilaku tolong-menolong sehari-hari.",
                },
              ],
              soalPGK: {
                pertanyaan:
                  "Manakah pasangan simbol dan nomor sila Pancasila yang BENAR? (Pilihlah semua jawaban yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Sila Pertama: Bintang Tunggal bercahaya emas.", isCorrect: true },
                  { kode: "B", teks: "Sila Kedua: Rantai baja gelang lingkaran dan persegi.", isCorrect: true },
                  { kode: "C", teks: "Sila Ketiga: Kepala Banteng dengan tanduk hitam.", isCorrect: false },
                  { kode: "D", teks: "Sila Kelima: Padi dan Kapas lambang kemakmuran.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan:
                  "Pilihan A, B, dan D benar. Kepala Banteng adalah simbol sila ke-4, sedangkan sila ke-3 adalah Pohon Beringin.",
              },
              soalUraian: {
                level: "C4 (Analisis Konkret)",
                pertanyaan:
                  "Siti melihat gambar burung Garuda Pancasila di kelas. Mengapa kita harus menghormati lambang negara Garuda Pancasila dan bagaimana cara kita menunjukkannya saat di sekolah?",
                kunci:
                  "Burung Garuda Pancasila adalah lambang negara Indonesia yang memuat dasar persatuan bangsa. Kita menunjukkannya dengan menjaga ketertiban kelas, menyanyikan lagu kebangsaan dengan khidmat, dan rukun bermain bersama semua teman.",
                pembahasan: "Menghormati lambang negara adalah wujud dimensi Kewargaan dan Cinta Tanah Air.",
                rubrik: [
                  { kriteria: "Menjelaskan Garuda Pancasila sebagai lambang pemersatu bangsa", skor: 10 },
                  { kriteria: "Memberikan contoh sikap tertib dan rukun di sekolah", skor: 10 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.02",
            teksTP:
              "Menceritakan hubungan antara simbol-simbol Pancasila dengan sila-sila Pancasila dan menerapkannya dalam perilaku tolong-menolong di rumah dan sekolah.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "TP.01 - Mengenal simbol-simbol Pancasila",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kolaborasi", "Komunikasi"],
            dimensiKarakterKemenag: ["Cinta Diri & Sesama Manusia", "Cinta Kebaikan", "PPRA: Kasih Sayang (Rahmah)"],
            konteksPembelajaran: {
              stimulus:
                "Edo terjatuh saat bermain bola di halaman sekolah. Budi dan Siti langsung berlari membantu Edo berdiri dan mengantarkannya ke ruang UKS.",
              stimulusKemenag:
                "Membantu sesama teman yang kesulitan adalah bukti rasa cinta kepada sesama makhluk ciptaan Allah dan pengamalan sila kemanusiaan.",
              masalahNyata:
                "Sila manakah yang mengajarkan kita untuk segera menolong teman yang terjatuh tanpa membeda-bedakan?",
              kegiatanEksplorasi: [
                "Bermain peran (role play) saling meminjamkan alat tulis dan menolong teman.",
                "Menceritakan pengalaman berbuat baik kepada anggota keluarga di rumah.",
              ],
              pertanyaanHOTS: [
                {
                  level: "C4 - Analisis",
                  teks: "Analisislah hubungan gambar Rantai pada sila kedua dengan perbuatan saling membantu antarteman!",
                },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menceritakan contoh penerapan sila Pancasila",
                  baru: "Meniru ucapan teman saat menceritakan contoh kebaikan.",
                  layak: "Mampu menceritakan 1 contoh tolong-menolong di rumah.",
                  cakap: "Mampu menceritakan penerapan nilai sila ke-1 sampai ke-5 di rumah dan sekolah.",
                  mahir: "Mampu menginisiasi tindakan peduli teman secara spontan dan berkesadaran.",
                },
              ],
              soalPGK: {
                pertanyaan:
                  "Manakah perilaku di sekolah yang sesuai dengan nilai-nilai Pancasila? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Berdoa bersama dengan tertib sebelum dan sesudah belajar.", isCorrect: true },
                  { kode: "B", teks: "Membagi bekal makanan dengan teman yang tidak membawa sarapan.", isCorrect: true },
                  { kode: "C", teks: "Mengejek teman yang warna kulit atau logat bicaranya berbeda.", isCorrect: false },
                  { kode: "D", teks: "Bekerja sama membersihkan ruang kelas saat jadwal piket.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "Berdoa (Sila 1), Berbagi (Sila 2 & 5), dan Gotong royong piket (Sila 3) adalah pengamalan Pancasila.",
              },
              soalUraian: {
                level: "C4 (Analisis)",
                pertanyaan:
                  "Tuliskan 2 contoh kegiatan di rumah yang menunjukkan pengamalan sila pertama (Ketuhanan Yang Maha Esa) dan sila kedua (Kemanusiaan yang Adil dan Beradab)!",
                kunci:
                  "1. Sila Pertama: Beribadah bersama keluarga, berdoa sebelum makan dan tidur. 2. Sila Kedua: Membantu ibu mencuci piring, menyayangi adik dan menghormati orang tua.",
                pembahasan: "Pengamalan Pancasila dimulai dari lingkungan terkecil yaitu keluarga.",
                rubrik: [
                  { kriteria: "Menuliskan contoh sila ke-1 dengan benar", skor: 10 },
                  { kriteria: "Menuliskan contoh sila ke-2 dengan benar", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Undang-Undang Dasar Negara Republik Indonesia Tahun 1945",
        deskripsiCP:
          "Menceritakan aturan di rumah dan di sekolah, serta menunjukkan sikap mematuhi aturan di rumah dan di sekolah.",
        kompetensiKKO: "Menceritakan, Menunjukkan, Mematuhi",
        lingkupMateri: "Aturan di Rumah, Aturan di Sekolah, Pembiasaan Tertib",
        tpList: [
          {
            kodeTP: "TP.03",
            teksTP:
              "Menceritakan aturan-aturan sederhana yang berlaku di rumah dan di sekolah (merapikan mainan, datang tepat waktu, mendengarkan guru) secara runtut.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mengenal rutinitas harian di rumah dan sekolah",
            dimensiKarakterDinas: ["Kemandirian", "Kewargaan", "Komunikasi"],
            dimensiKarakterKemenag: ["Cinta Disiplin", "Cinta Diri & Sesama", "PPRA: Berkeadaban (Ta'addub)"],
            konteksPembelajaran: {
              stimulus: "Jadwal harian di rumah memuat waktu bangun pagi pukul 05.00, merapikan tempat tidur, dan sarapan bersama keluarga.",
              stimulusKemenag: "Aturan dibuat sebagai wujud kasih sayang orang tua dan guru agar hidup kita tertib, aman, dan berkah.",
              masalahNyata: "Apa yang akan terjadi jika di sekolah tidak ada aturan antre saat mencuci tangan?",
              kegiatanEksplorasi: [
                "Menyusun kartu bergambar urutan aturan pagi hari di rumah.",
                "Simulasi antre mencuci tangan dan masuk kelas dengan tertib.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Bandingkan apa akibatnya jika kita menaati aturan kelas dengan jika kita melanggar aturan kelas!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menjelaskan aturan di rumah dan sekolah",
                  baru: "Mengetahui 1 aturan jika diingatkan.",
                  layak: "Mampu menceritakan aturan di rumah secara lisan.",
                  cakap: "Mampu menceritakan aturan di rumah dan sekolah serta manfaatnya.",
                  mahir: "Mampu mematuhi aturan secara mandiri tanpa perlu diawasi terus menerus.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah aturan yang WAJIB dipatuhi saat berada di dalam ruang kelas? (Pilih semua yang benar!)",
                pilihan: [
                  { kode: "A", teks: "Mendengarkan dengan tenang saat guru sedang menjelaskan pelajaran.", isCorrect: true },
                  { kode: "B", teks: "Mengacungkan tangan sebelum berbicara atau bertanya.", isCorrect: true },
                  { kode: "C", teks: "Berlari-lari dan berteriak saat pelajaran sedang berlangsung.", isCorrect: false },
                  { kode: "D", teks: "Membuang bungkus makanan ke tempat sampah.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "Mendengarkan, tunjuk tangan, dan buang sampah di tempatnya adalah aturan ketertiban kelas.",
              },
              soalUraian: {
                level: "C4 (Analisis)",
                pertanyaan: "Mengapa kita harus merapikan kembali mainan atau buku setelah selesai digunakan di rumah?",
                kunci: "Agar rumah tetap bersih, rapi, aman (tidak membuat orang lain tersandung), dan barang tidak mudah rusak atau hilang.",
                pembahasan: "Aturan merapikan barang melatih kemandirian dan tanggung jawab sejak dini.",
                rubrik: [
                  { kriteria: "Menjelaskan alasan kebersihan/kerapian", skor: 10 },
                  { kriteria: "Menjelaskan aspek keselamatan dan tanggung jawab", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Bhinneka Tunggal Ika",
        deskripsiCP:
          "Menyebutkan identitas diri, keluarga, dan teman-temannya sesuai budaya, minat, dan perilakunya, serta menunjukkan sikap menghargai perbedaan.",
        kompetensiKKO: "Menyebutkan, Mengidentifikasi, Menghargai",
        lingkupMateri: "Identitas Diri & Teman, Keragaman Budaya & Minat, Menghargai Perbedaan",
        tpList: [
          {
            kodeTP: "TP.04",
            teksTP:
              "Menyebutkan identitas diri, ciri fisik anggota keluarga, dan keragaman kesukaan teman-teman di kelas serta menunjukkan sikap menghargai perbedaan.",
            alokasiJP: 6,
            semester: "GENAP",
            prasyarat: "Mengenal nama diri dan anggota keluarga",
            dimensiKarakterDinas: ["Kewargaan", "Komunikasi", "Kolaborasi"],
            dimensiKarakterKemenag: ["Cinta Sesama Manusia", "PPRA: Toleransi (Tasamuh)", "PPRA: Dinamis & Terbuka"],
            konteksPembelajaran: {
              stimulus: "Di kelas 1 ada Made dari Bali yang suka menari, Dayu dari Sunda yang suka bernyanyi, dan Ujang yang gemar menggambar.",
              stimulusKemenag: "Tuhan menciptakan manusia beraneka ragam agar kita saling mengenal, menghargai, dan menyayangi.",
              masalahNyata: "Bagaimana cara kita tetap bisa bermain bersama dengan gembira meskipun hobi teman berbeda dengan kita?",
              kegiatanEksplorasi: [
                "Membuat kartu pohon pertemanan berisi foto dan hobi masing-masing siswa.",
                "Menceritakan makanan khas atau pakaian daerah yang pernah dipakai keluarga.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi", teks: "Bagaimana sikapmu jika ada teman baru yang cara bicaranya berbeda denganmu?" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menghargai keragaman identitas teman",
                  baru: "Masih memilih-milih teman hanya yang sama hobinya.",
                  layak: "Mampu menyebutkan perbedaan fisik/hobi teman.",
                  cakap: "Mampu menunjukkan sikap ramah dan mau berteman dengan siapa saja.",
                  mahir: "Mampu mengajak teman yang pemalu untuk ikut bermain bersama.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah sikap yang menunjukkan rasa MENGHARGAI PERBEDAAN antarteman? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Mendengarkan cerita teman tentang tradisi hari rayanya dengan senang hati.", isCorrect: true },
                  { kode: "B", teks: "Mau bermain bersama teman tanpa membeda-bedakan suku atau warna kulit.", isCorrect: true },
                  { kode: "C", teks: "Menertawakan teman yang membawa bekal makanan tradisional daerah.", isCorrect: false },
                  { kode: "D", teks: "Mengucapkan selamat saat teman merayakan hari ulang tahun atau hari besarnya.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "Sikap toleransi dan menghargai keragaman adalah A, B, dan D.",
              },
              soalUraian: {
                level: "C4 (Analisis)",
                pertanyaan: "Mengapa perbedaan minat dan kegemaran di antara teman-teman di kelas justru membuat suasana kelas menjadi lebih menyenangkan?",
                kunci: "Karena dengan perbedaan kita bisa saling belajar hal baru, saling melengkapi saat belajar kelompok, dan saling bertukar pengalaman yang menarik.",
                pembahasan: "Keragaman adalah kekayaan bersama yang mempererat persahabatan.",
                rubrik: [
                  { kriteria: "Menjelaskan saling belajar dan melengkapi", skor: 10 },
                  { kriteria: "Menjelaskan suasana kebersamaan yang hangat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Negara Kesatuan Republik Indonesia",
        deskripsiCP:
          "Mengenali bentuk lingkungan tempat tinggal dan sekolah sebagai bagian dari wilayah Negara Kesatuan Republik Indonesia.",
        kompetensiKKO: "Mengenali, Menceritakan, Menjaga",
        lingkupMateri: "Lingkungan Rumah dan Sekolah, Wilayah NKRI, Cinta Lingkungan",
        tpList: [
          {
            kodeTP: "TP.05",
            teksTP:
              "Mengenali denah sederhana lingkungan rumah dan sekolah serta menceritakan perannya dalam menjaga kebersihan lingkungan sebagai bagian dari wilayah NKRI.",
            alokasiJP: 6,
            semester: "GENAP",
            prasyarat: "Mengenal rute perjalanan dari rumah ke sekolah",
            dimensiKarakterDinas: ["Kewargaan", "Kemandirian", "Kesehatan"],
            dimensiKarakterKemenag: ["Cinta Tanah Air", "Cinta Lingkungan", "PPRA: Keteladanan (Qudwah)"],
            konteksPembelajaran: {
              stimulus: "Halaman sekolah yang bersih dengan tanaman bunga asri membuat semua murid nyaman dan bangga belajar di sekolah.",
              stimulusKemenag: "Menjaga kebersihan tanah air adalah wujud syukur atas karunia negeri Indonesia yang subur dan damai.",
              masalahNyata: "Bagaimana cara kita menjaga keindahan lingkungan sekolah kita agar tetap bersih dan harum?",
              kegiatanEksplorasi: [
                "Menggambar denah perjalanan dari pintu gerbang ke ruang kelas.",
                "Aksi operasi semut memungut daun kering dan memilah sampah plastik di taman sekolah.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Analisislah hubungan antara menjaga kebersihan lingkungan sekolah dengan rasa cinta kepada tanah air Indonesia!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Mengenal lingkungan dan menjaga kebersihan",
                  baru: "Mengenal ruang kelas sendiri.",
                  layak: "Mampu menunjukkan letak fasilitas umum sekolah (toilet, perpustakaan, UKS).",
                  cakap: "Mampu menceritakan batas lingkungan sekolah dan aktif menjaga kebersihannya.",
                  mahir: "Mampu menjadi teladan dalam memilah sampah dan merawat tanaman sekolah.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah cara menjaga kebersihan lingkungan rumah dan sekolah sebagai bukti cinta tanah air? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Menyiram tanaman di taman sekolah pada pagi atau sore hari.", isCorrect: true },
                  { kode: "B", teks: "Mencoret-coret dinding toilet dan meja belajar dengan spidol.", isCorrect: false },
                  { kode: "C", teks: "Membuang sampah daun dan plastik pada tempat sampah yang sesuai.", isCorrect: true },
                  { kode: "D", teks: "Merapikan kembali meja kursi setelah selesai belajar.", isCorrect: true },
                ],
                kunci: "A, C, dan D",
                pembahasan: "A, C, dan D adalah tindakan nyata merawat fasilitas lingkungan bersama.",
              },
              soalUraian: {
                level: "C4 (Penerapan)",
                pertanyaan: "Sebutkan 3 tempat penting di sekolahmu (misalnya: ruang UKS, kantin, perpustakaan) dan jelaskan kegunaannya masing-masing!",
                kunci: "1. Perpustakaan: tempat membaca dan meminjam buku cerita. 2. Ruang UKS: tempat beristirahat dan pertolongan pertama saat sakit. 3. Kantin: tempat membeli makanan dan minuman yang bersih dan bergizi.",
                pembahasan: "Mengenal fasilitas sekolah memperkuat orientasi spasial dan rasa kepemilikan lingkungan.",
                rubrik: [
                  { kriteria: "Menyebutkan 3 ruangan sekolah dengan tepat", skor: 10 },
                  { kriteria: "Menjelaskan fungsi masing-masing ruangan secara benar", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 2. Bahasa Indonesia (Fase A - Kelas I/II)
  {
    fase: "Fase A",
    kelasDefault: "Kelas I",
    mapel: "Bahasa Indonesia",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Menyimak",
        deskripsiCP:
          "Bersikap menjadi pendengar yang baik, memahami informasi dari wacana lisan, instruksi lisan sederhana, dan teks deskriptif yang dibacakan.",
        kompetensiKKO: "Menyimak, Memahami, Merespons",
        lingkupMateri: "Sikap Menyimak Santun, Instruksi Lisan 2-3 Langkah, Teks Deskriptif Lisan",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menunjukkan sikap menjadi pendengar yang baik dan santun saat guru/teman berbicara serta melaksanakan 2-3 instruksi lisan sederhana secara tepat.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Mampu memusatkan perhatian selama 10-15 menit",
            dimensiKarakterDinas: ["Komunikasi", "Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "PPRA: Berkeadaban (Ta'addub)", "Cinta Sesama"],
            konteksPembelajaran: {
              stimulus: "Ibu guru membacakan cerita tentang 'Kancil yang Menolong Burung Pipit' dengan suara yang merdu dan gambar yang menarik.",
              stimulusKemenag: "Mendengarkan dengan sungguh-sungguh adalah adab mulia dalam menuntut ilmu dan menghormati orang yang sedang berbicara.",
              masalahNyata: "Bagaimana cara kita mendengarkan agar instruksi guru saat mengerjakan tugas tidak ada yang terlewat?",
              kegiatanEksplorasi: [
                "Permainan instruksi 'Kata Guru' (contoh: 'Pegang hidung, lalu tepuk tangan dua kali').",
                "Menyimak pembacaan dongeng bergambar dan menirukan suara tokoh hewan.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Mengapa saat ada orang lain yang sedang berbicara di depan kelas kita tidak boleh memotong pembicaraannya?" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menyimak dan melaksanakan instruksi lisan",
                  baru: "Memerlukan pengulangan instruksi berkali-kali.",
                  layak: "Mampu melaksanakan 1 instruksi sederhana.",
                  cakap: "Mampu menyimak dengan fokus dan melaksanakan 2-3 instruksi berurutan.",
                  mahir: "Mampu menceritakan kembali inti pesan yang didengar dengan bahasa yang runut.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah sikap menyimak yang BAIK saat guru sedang membacakan cerita di kelas? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Duduk tenang dan memandang ke arah guru.", isCorrect: true },
                  { kode: "B", teks: "Mengobrol dengan teman sebangku tentang mainan di rumah.", isCorrect: false },
                  { kode: "C", teks: "Mendengarkan isi cerita tanpa memotong pembicaraan guru.", isCorrect: true },
                  { kode: "D", teks: "Mencatat atau mengingat nama tokoh-tokoh dalam cerita.", isCorrect: true },
                ],
                kunci: "A, C, dan D",
                pembahasan: "Fokus, memperhatikan, dan tidak mengobrol adalah etika menyimak yang baik.",
              },
              soalUraian: {
                level: "C4 (Pemahaman)",
                pertanyaan: "Guru memberikan instruksi: 'Buka buku halaman 5, siapkan pensil warna merah, lalu warnai gambar apel!'. Tuliskan urutan kegiatan apa saja yang harus kamu lakukan!",
                kunci: "1. Membuka buku halaman 5. 2. Mengambil pensil warna merah. 3. Mewarnai gambar apel dengan pensil merah.",
                pembahasan: "Melatih kemampuan mengingat urutan tahapan instruksi lisan.",
                rubrik: [
                  { kriteria: "Menyebutkan urutan ke-1 dan ke-2 dengan tepat", skor: 10 },
                  { kriteria: "Menyebutkan urutan ke-3 dengan tepat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Membaca dan Memirsa",
        deskripsiCP:
          "Mengeja suku kata dan kata-kata yang sering dijumpai, membaca kata-kata baru dengan pola kombinasi huruf tertentu, serta memahami pesan visual.",
        kompetensiKKO: "Mengeja, Membaca, Memahami Pesan Visual",
        lingkupMateri: "Pola Kombinasi Huruf (KV, KVK), Suku Kata, Pesan Gambar Buku Cerita",
        tpList: [
          {
            kodeTP: "TP.02",
            teksTP:
              "Mengeja suku kata dan membaca kata-kata baru berpola kombinasi huruf sederhana (KV, KVK) yang sering dijumpai serta memahami pesan visual pada buku cerita bergambar.",
            alokasiJP: 10,
            semester: "GANJIL",
            prasyarat: "Mengenal huruf alfabet A-Z bunyi fonem dasar",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian", "Komunikasi"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Cinta Membaca (Iqra')", "PPRA: Keteladanan"],
            konteksPembelajaran: {
              stimulus: "Buku cerita bergambar 'Budi dan Kucing Belang' memiliki teks huruf besar yang dipadukan dengan ilustrasi kucing yang sedang melompat gembira.",
              stimulusKemenag: "Membaca adalah kunci membuka khazanah pengetahuan dan karunia akal budi dari Tuhan.",
              masalahNyata: "Bagaimana cara kita membaca kata baru yang belum pernah kita dengar sebelumnya?",
              kegiatanEksplorasi: [
                "Permainan kartu suku kata bergambar (ba-tu, bu-ku, bo-la, ru-mah).",
                "Membaca bersama (shared reading) cerita berima dengan bimbingan guru.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Perhatikan gambar kucing yang sedang tersenyum memegang ikan, simpulkan apa perasaan kucing tersebut!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Membaca suku kata dan memahami pesan visual",
                  baru: "Mengeja huruf per huruf secara terbata-bata.",
                  layak: "Mampu membaca kata 2 suku kata berpola KV-KV (ba-ju, sa-pu).",
                  cakap: "Mampu membaca lancar kata pola KVK dan memahami alur pesan gambar cerita.",
                  mahir: "Mampu membaca nyaring dengan intonasi hidup dan menceritakan pesan moralnya.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah kata-kata berikut yang tersusun dari 2 suku kata berpola KV-KV? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "bu - ku", isCorrect: true },
                  { kode: "B", teks: "me - ja", isCorrect: true },
                  { kode: "C", teks: "se - ko - lah", isCorrect: false },
                  { kode: "D", teks: "bo - la", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "Buku (bu-ku), meja (me-ja), dan bola (bo-la) terdiri dari 2 suku kata KV. Sekolah terdiri dari 3 suku kata.",
              },
              soalUraian: {
                level: "C4 (Analisis Gambar)",
                pertanyaan: "Pada buku cerita tampak gambar seorang anak sedang memegang payung di bawah awan mendung dan air menetes dari langit. Menurut gambar tersebut, apa yang sedang terjadi dan mengapa anak itu memakai payung?",
                kunci: "Sedang terjadi hujan deras. Anak itu memakai payung agar badannya dan pakaiannya tidak basah terkena air hujan.",
                pembahasan: "Memirsa pesan visual dan menyimpulkan sebab-akibat secara logis.",
                rubrik: [
                  { kriteria: "Menjelaskan peristiwa hujan dari gambar", skor: 10 },
                  { kriteria: "Menjelaskan fungsi payung agar tidak basah", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Berbicara dan Mempresentasikan",
        deskripsiCP:
          "Berbicara dengan santun, menggunakan volume suara yang tepat, merespons pertanyaan, dan menceritakan kembali isi teks yang dibaca atau didengar.",
        kompetensiKKO: "Berbicara Santun, Menceritakan Kembali, Merespons",
        lingkupMateri: "Etika Berbicara, Intonasi Suara, Menceritakan Dongeng Fabel",
        tpList: [
          {
            kodeTP: "TP.03",
            teksTP:
              "Berbicara santun dengan volume suara yang jelas untuk merespons pertanyaan dan menceritakan kembali isi cerita fabel secara runtut menggunakan bahasa sendiri.",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "TP.01 & TP.02 - Menyimak cerita dan membaca kata",
            dimensiKarakterDinas: ["Komunikasi", "Kreativitas", "Kolaborasi"],
            dimensiKarakterKemenag: ["Cinta Sesama", "PPRA: Berkeadaban (Ta'addub)", "Cinta Kebaikan"],
            konteksPembelajaran: {
              stimulus: "Rani maju ke depan kelas dengan senyum ceria, menceritakan fabel 'Semut dan Belalang' menggunakan boneka jari mini.",
              stimulusKemenag: "Tutur kata yang baik dan santun adalah sedekah yang menyenangkan hati pendengarnya.",
              masalahNyata: "Mengapa kita perlu berbicara dengan suara yang tidak terlalu pelan dan tidak berteriak-teriak?",
              kegiatanEksplorasi: [
                "Panggung boneka jari bercerita fabel berpasangan.",
                "Latihan menggunakan kata ajaib: Tolong, Maaf, Terima Kasih, dan Permisi.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi", teks: "Evaluasilah perilaku tokoh Semut yang rajin menabung makanan dibandingkan Belalang yang hanya bermalas-malasan!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Bercerita dengan santun dan intonasi tepat",
                  baru: "Masih malu atau berbisik pelan saat berbicara di depan.",
                  layak: "Mampu menceritakan 1 bagian awal cerita.",
                  cakap: "Mampu menceritakan alur awal, tengah, dan akhir cerita dengan suara jelas.",
                  mahir: "Mampu menggunakan ekspresi wajah dan intonasi menarik serta mengaitkan pesan moral.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah kata-kata sopan ('kata ajaib') yang digunakan saat kita meminta bantuan atau melakukan kesalahan? (Pilih semua yang benar!)",
                pilihan: [
                  { kode: "A", teks: "'Tolong' saat kita membutuhkan bantuan orang lain.", isCorrect: true },
                  { kode: "B", teks: "'Maaf' saat kita tidak sengaja menumpahkan air minum teman.", isCorrect: true },
                  { kode: "C", teks: "'Terima kasih' setelah menerima pinjaman pensil dari teman.", isCorrect: true },
                  { kode: "D", teks: "'Cepat!' dengan berteriak membentak teman.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Tolong, Maaf, dan Terima Kasih adalah ungkapan santun dalam berkomunikasi.",
              },
              soalUraian: {
                level: "C4 (Menceritakan Kembali)",
                pertanyaan: "Ceritakan kembali dengan 2 kalimat sederhana: Apa yang dilakukan burung Merpati saat melihat Semut hanyut di sungai?",
                kunci: "Burung Merpati memetik sehelai daun lalu menjatuhkannya ke sungai dekat Semut. Semut naik ke atas daun sehingga selamat dari air.",
                pembahasan: "Menyusun kembali intisari dongeng fabel tolong-menolong.",
                rubrik: [
                  { kriteria: "Menyebutkan tindakan Merpati menjatuhkan daun", skor: 10 },
                  { kriteria: "Menyebutkan keselamatan Semut", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Menulis",
        deskripsiCP:
          "Menuliskan kata-kata yang sering dijumpai, menuliskan pikiran atau pengalaman secara sederhana dengan memperhatikan huruf kapital dan tanda titik.",
        kompetensiKKO: "Menuliskan, Menyusun Kalimat, Menggunakan Tanda Baca",
        lingkupMateri: "Penulisan Huruf Tegak/Lepas, Huruf Kapital Awal Kalimat, Tanda Titik, Kalimat Harian",
        tpList: [
          {
            kodeTP: "TP.04",
            teksTP:
              "Menuliskan kata-kata yang sering dijumpai dan menyusun kalimat sederhana tentang pengalaman diri dengan memperhatikan huruf kapital di awal kalimat dan tanda titik di akhir kalimat.",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "Mampu memegang pensil dengan benar dan menulis huruf lepas",
            dimensiKarakterDinas: ["Kemandirian", "Penalaran Kritis", "Kreativitas"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "PPRA: Keteladanan (Qudwah)", "Cinta Kebersihan & Kerapian"],
            konteksPembelajaran: {
              stimulus: "Siti menulis di buku hariannya: 'Hari Minggu saya menyiram bunga mawar di taman bersama ibu.' Tulisan Siti rapi dan bersih.",
              stimulusKemenag: "Tulisan yang rapi dan benar mencerminkan ketelitian hati dan rasa hormat kepada ilmu pengetahuan.",
              masalahNyata: "Mengapa di akhir setiap kalimat berita kita harus memberikan tanda titik (.)?",
              kegiatanEksplorasi: [
                "Latihan menebalkan dan menyalin kalimat berhuruf kapital awal.",
                "Menulis kartu ucapan terima kasih sederhana untuk orang tua di rumah.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Perbaiki kalimat berikut agar huruf kapital dan tanda titiknya benar: 'budi bermain bola di lapangan'!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menulis kalimat dengan huruf kapital dan tanda titik",
                  baru: "Menulis kata terbalik atau belum membedakan huruf besar dan kecil.",
                  layak: "Mampu menyalin kalimat dengan huruf kapital di awal.",
                  cakap: "Mampu menyusun kalimat sendiri dengan huruf kapital dan tanda titik yang tepat.",
                  mahir: "Mampu menulis paragraf mini 2-3 kalimat runtut dan rapi tanpa kesalahan tanda baca.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah kalimat yang ditulis dengan HURUF KAPITAL dan TANDA TITIK yang BENAR? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Saya suka makan buah apel.", isCorrect: true },
                  { kode: "B", teks: "ibu memasak sayur bayam", isCorrect: false },
                  { kode: "C", teks: "Beni membaca buku cerita di perpustakaan.", isCorrect: true },
                  { kode: "D", teks: "kucing itu tidur di bawah kursi.", isCorrect: false },
                ],
                kunci: "A dan C",
                pembahasan: "Kalimat A dan C diawali huruf kapital (S, B) dan diakhiri tanda titik. Kalimat B tidak ada titik dan huruf awal kecil, D huruf awal kecil.",
              },
              soalUraian: {
                level: "C4 (Perbaikan Kalimat)",
                pertanyaan: "Perbaikilah penulisan kalimat ini menjadi benar sesuai aturan huruf kapital dan tanda titik: 'kami belajar membaca bersama guru'!",
                kunci: "Kami belajar membaca bersama guru.",
                pembahasan: "Huruf 'k' diubah menjadi huruf kapital 'K' di awal kalimat, dan ditambahkan tanda titik '.' di akhir kalimat.",
                rubrik: [
                  { kriteria: "Mengubah huruf awal menjadi huruf kapital 'K'", skor: 10 },
                  { kriteria: "Memberikan tanda titik '.' di akhir kalimat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 3. Matematika (Fase A - Kelas I/II)
  {
    fase: "Fase A",
    kelasDefault: "Kelas I",
    mapel: "Matematika",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Bilangan",
        deskripsiCP:
          "Menunjukkan pemahaman dan intuisi bilangan (number sense) pada bilangan cacah sampai 100; membilang, membaca, menulis, membandingkan, mengurutkan, serta melakukan operasi penjumlahan dan pengurangan menggunakan benda konkret.",
        kompetensiKKO: "Membilang, Membandingkan, Mengurutkan, Menjumlahkan, Mengurangkan",
        lingkupMateri: "Bilangan Cacah 1-100, Nilai Tempat (Puluhan-Satuan), Penjumlahan & Pengurangan Konkret",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Menunjukkan pemahaman intuisi bilangan (number sense) dengan membilang banyak benda, membaca, menulis, membandingkan, dan mengurutkan bilangan cacah sampai 100.",
            alokasiJP: 10,
            semester: "GANJIL",
            prasyarat: "Mengenal bilangan 1 sampai 10 dan membilang jari",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian", "Kreativitas"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Cinta Kejujuran & Ketelitian", "PPRA: Berimbang (Tawazun)"],
            konteksPembelajaran: {
              stimulus: "Di atas meja terdapat 2 toples kelereng: Toples A berisi 24 butir kelereng merah dan Toples B berisi 37 butir kelereng biru.",
              stimulusKemenag: "Matematika melatih kita berhitung dengan jujur, teliti, dan adil dalam menakar atau membagi.",
              masalahNyata: "Bagaimana cara kita mengetahui dengan cepat toples mana yang berisi kelereng lebih banyak?",
              kegiatanEksplorasi: [
                "Menghitung stik es krim dengan mengikat tiap kelompok 10 stik (konsep puluhan dan satuan).",
                "Menyusun kartu angka 1 sampai 100 pada papan garis bilangan berpetak.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Jika sebuah bilangan memiliki 4 puluhan dan 7 satuan, bandingkan nilainya dengan bilangan yang memiliki 7 puluhan dan 4 satuan!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Membilang, menulis, dan membandingkan bilangan cacah",
                  baru: "Membilang urutan angka sering melompati bilangan puluhan.",
                  layak: "Mampu membilang dan menulis angka 1-20.",
                  cakap: "Mampu membilang, mengelompokkan puluhan-satuan, dan membandingkan bilangan sampai 100.",
                  mahir: "Mampu menganalisis pola bilangan loncat dan menyelesaikan soal penalaran mandiri.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah perbandingan bilangan berikut yang bernilai BENAR? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "45 lebih banyak dari 38", isCorrect: true },
                  { kode: "B", teks: "62 lebih sedikit dari 59", isCorrect: false },
                  { kode: "C", teks: "73 sama dengan 7 puluhan + 3 satuan", isCorrect: true },
                  { kode: "D", teks: "Urutan bilangan dari yang terkecil: 21, 25, 29, 32", isCorrect: true },
                ],
                kunci: "A, C, dan D",
                pembahasan: "A benar (45 > 38), C benar (73 = 70+3), D benar (urut naik). B salah karena 62 lebih banyak dari 59.",
              },
              soalUraian: {
                level: "C4 (Nilai Tempat & Perbandingan)",
                pertanyaan: "Dono memiliki 3 ikat pensil (tiap ikat berisi 10 pensil) dan 5 pensil lepas. Roni memiliki 4 ikat pensil (tiap ikat berisi 10 pensil) dan 2 pensil lepas. Berapa jumlah pensil Dono dan Roni masing-masing, dan pensil siapakah yang lebih banyak?",
                kunci: "Pensil Dono = 3 puluhan + 5 satuan = 35 pensil. Pensil Roni = 4 puluhan + 2 satuan = 42 pensil. Pensil Roni (42) lebih banyak daripada pensil Dono (35).",
                pembahasan: "Konsep dekomposisi nilai tempat puluhan dan satuan untuk membandingkan kuantitas.",
                rubrik: [
                  { kriteria: "Menghitung pensil Dono (35) dan Roni (42) dengan benar", skor: 10 },
                  { kriteria: "Menyimpulkan pensil Roni lebih banyak dengan tepat", skor: 10 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.02",
            teksTP:
              "Melakukan operasi penjumlahan dan pengurangan bilangan cacah sampai 100 dengan bantuan manipulasi benda konkret dan menyelesaikan masalah sehari-hari.",
            alokasiJP: 10,
            semester: "GANJIL",
            prasyarat: "TP.01 - Memahami nilai tempat bilangan sampai 100",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian", "Kreativitas"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Cinta Kebaikan", "PPRA: Kesetaraan (Musawah)"],
            konteksPembelajaran: {
              stimulus: "Ibu membeli 15 buah jeruk di pasar, kemudian ayah membawa pulang 12 buah jeruk lagi. Berapa jumlah seluruh jeruk di rumah sekarang?",
              stimulusKemenag: "Berbagi dan menghitung rezeki dengan benar melatih kita menjadi insan yang pandai bersyukur.",
              masalahNyata: "Bagaimana cara mudah menghitung sisa kue jika dari 28 kue yang ada sudah dimakan 13 kue oleh tamu?",
              kegiatanEksplorasi: [
                "Praktik penjumlahan bersusun menggunakan balok bilangan / kantong bilangan.",
                "Bermain pasar-pasaran di kelas menggunakan koin mainan untuk jual beli.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Siti memiliki 25 permen. Ia memberikan sebagian permennya kepada adiknya sehingga tersisa 11 permen. Hitunglah berapa banyak permen yang diberikan kepada adiknya!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menyelesaikan operasi penjumlahan dan pengurangan",
                  baru: "Menghitung penjumlahan dengan membilang jari satu per satu lambat.",
                  layak: "Mampu menjumlahkan dua bilangan 1 digit tanpa menyimpan.",
                  cakap: "Mampu melakukan penjumlahan dan pengurangan bersusun sampai 100 tanpa dan dengan teknik meminjam/menyimpan sederhana.",
                  mahir: "Mampu merumuskan kalimat matematika dari soal cerita kehidupan nyata secara mandiri.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah operasi hitung matematika berikut yang menghasilkan jawaban 35? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "20 + 15", isCorrect: true },
                  { kode: "B", teks: "50 - 15", isCorrect: true },
                  { kode: "C", teks: "18 + 17", isCorrect: true },
                  { kode: "D", teks: "40 - 10", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "20+15 = 35, 50-15 = 35, 18+17 = 35. 40-10 = 30.",
              },
              soalUraian: {
                level: "C4 (Soal Cerita Kontekstual)",
                pertanyaan: "Pak Tani memetik 46 buah mangga di kebun. Sebanyak 14 buah mangga dibagikan kepada tetangga dekat. Berapa buah mangga yang masih tersisa pada Pak Tani?",
                kunci: "Kalimat Matematika: 46 - 14. Perhitungan: Puluhan (4 - 1 = 3), Satuan (6 - 4 = 2). Jadi sisa mangga Pak Tani adalah 32 buah.",
                pembahasan: "Pengurangan bersusun dua angka tanpa teknik meminjam.",
                rubrik: [
                  { kriteria: "Menuliskan kalimat matematika 46 - 14", skor: 8 },
                  { kriteria: "Menghitung hasil akhir 32 buah dengan tepat", skor: 12 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Geometri dan Pengukuran",
        deskripsiCP:
          "Mengenal bangun datar (segitiga, segiempat, lingkaran) dan bangun ruang sederhana, serta membandingkan panjang dan berat benda menggunakan satuan tidak baku.",
        kompetensiKKO: "Mengenal, Mengelompokkan, Membandingkan, Mengukur",
        lingkupMateri: "Bangun Datar (Segitiga, Segiempat, Lingkaran), Pengukuran Panjang & Berat Satuan Tidak Baku",
        tpList: [
          {
            kodeTP: "TP.03",
            teksTP:
              "Mengenal dan mengelompokkan berbagai bangun datar (segitiga, segiempat, lingkaran) dan bangun ruang sederhana serta menyusunnya menjadi bentuk kreasi artistik.",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "Mengenal bentuk visual permukaan benda",
            dimensiKarakterDinas: ["Kreativitas", "Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "PPRA: Dinamis & Kreatif"],
            konteksPembelajaran: {
              stimulus: "Pintu kelas berbentuk persegi panjang, jam dinding berbentuk lingkaran, dan rambu lalu lintas penyeberangan berbentuk segitiga.",
              stimulusKemenag: "Keteraturan bentuk geometri di alam semesta mencerminkan kesempurnaan dan keindahan rancangan Sang Pencipta.",
              masalahNyata: "Bagaimana cara membedakan bentuk persegi dan bentuk persegi panjang?",
              kegiatanEksplorasi: [
                "Bermain tangram menyusun potongan bentuk bangun datar menjadi gambar rumah dan kucing.",
                "Mencari dan mendata benda-benda berbentuk lingkaran di sekitar sekolah.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Analisislah ciri-ciri yang membedakan bangun segitiga dengan bangun segiempat berdasarkan jumlah sisi dan titik sudutnya!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Mengenal dan mengelompokkan bangun datar",
                  baru: "Masih tertukar antara segitiga dan segiempat.",
                  layak: "Mampu menunjukkan bentuk lingkaran.",
                  cakap: "Mampu mengelompokkan segitiga, segiempat, dan lingkaran serta menghitung jumlah sisinya.",
                  mahir: "Mampu merangkai bangun datar menjadi pola mozaik dan tangram kreatif.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah benda-benda berikut yang memiliki permukaan berbentuk LINGKARAN? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Uang koin logam lima ratus rupiah.", isCorrect: true },
                  { kode: "B", teks: "Permukaan tutup botol air minum.", isCorrect: true },
                  { kode: "C", teks: "Buku tulis dan buku gambar.", isCorrect: false },
                  { kode: "D", teks: "Piring makan bulat.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "Koin, tutup botol, dan piring bulat adalah contoh lingkaran. Buku tulis umumnya berbentuk persegi panjang.",
              },
              soalUraian: {
                level: "C4 (Karakteristik Bangun)",
                pertanyaan: "Sebutkan jumlah sisi dan jumlah titik sudut pada bangun datar SEGITIGA dan PERSEGI!",
                kunci: "1. Segitiga: memiliki 3 sisi dan 3 titik sudut. 2. Persegi: memiliki 4 sisi yang sama panjang dan 4 titik sudut.",
                pembahasan: "Identifikasi atribut geometri dasar.",
                rubrik: [
                  { kriteria: "Menjelaskan sisi dan sudut segitiga (3)", skor: 10 },
                  { kriteria: "Menjelaskan sisi dan sudut persegi (4)", skor: 10 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.04",
            teksTP:
              "Membandingkan dan mengukur panjang dan berat benda menggunakan satuan tidak baku (jengkal, langkah, klip kertas, timbangan gantung sederhana) secara konkret.",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "Mengenal konsep lebih panjang/pendek dan lebih berat/ringan",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian", "Kolaborasi"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "Cinta Ketelitian & Keadilan Menakar"],
            konteksPembelajaran: {
              stimulus: "Dua orang siswa mengukur panjang meja guru: Ahmad mengukur mendapat 8 jengkal, sedangkan Rina mendapat 9 jengkal tangan.",
              stimulusKemenag: "Menakar dan mengukur dengan teliti dan jujur adalah ajaran moral luhur dalam muamalah.",
              masalahNyata: "Mengapa hasil pengukuran panjang meja guru dengan jengkal Ahmad dan Rina berbeda?",
              kegiatanEksplorasi: [
                "Mengukur panjang ruang kelas menggunakan langkah kaki bersama kelompok.",
                "Menimbang berat buku dan kotak pensil menggunakan gantungan baju dan kantong plastik.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Analisislah mengapa hasil pengukuran menggunakan jengkal tangan setiap orang bisa berbeda-beda!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Mengukur panjang dan berat satuan tidak baku",
                  baru: "Menempelkan jengkal dengan jarak renggang yang tidak konsisten.",
                  layak: "Mampu membandingkan benda mana yang lebih panjang secara visual.",
                  cakap: "Mampu mengukur panjang menggunakan jengkal/klip kertas secara rapat dan mencatat hasilnya.",
                  mahir: "Mampu menyimpulkan alasan perlunya satuan baku dan menjelaskan prinsip keseimbangan timbangan.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah yang merupakan alat ukur SATUAN TIDAK BAKU untuk mengukur panjang? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Jengkal telapak tangan.", isCorrect: true },
                  { kode: "B", teks: "Langkah kaki.", isCorrect: true },
                  { kode: "C", teks: "Mistar penggaris sentimeter.", isCorrect: false },
                  { kode: "D", teks: "Batang korek api atau klip kertas.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "Jengkal, langkah, dan klip kertas adalah satuan tidak baku. Penggaris sentimeter adalah satuan baku.",
              },
              soalUraian: {
                level: "C4 (Analisis Pengukuran)",
                pertanyaan: "Pada timbangan gantungan baju: Sisi kiri diletakkan 1 buah buku tulis dan sisi kanan diletakkan 4 buah penghapus karet, sehingga gantungan baju berada dalam posisi lurus seimbang. Berapakah berat 1 buku tulis jika diukur dengan satuan penghapus karet?",
                kunci: "Berat 1 buah buku tulis sama dengan (setara dengan) berat 4 buah penghapus karet karena kedua lengan gantungan baju berada dalam posisi seimbang sejajar.",
                pembahasan: "Konsep kesetaraan berat pada neraca lengan sederhana.",
                rubrik: [
                  { kriteria: "Menyebutkan kesetaraan berat 1 buku = 4 penghapus", skor: 10 },
                  { kriteria: "Menjelaskan posisi seimbang gantungan baju", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 4. PJOK (Fase A - Kelas I/II)
  {
    fase: "Fase A",
    kelasDefault: "Kelas I",
    mapel: "Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Keterampilan Gerak",
        deskripsiCP:
          "Mempraktikkan keterampilan gerak dasar lokomotor, non-lokomotor, dan manipulatif.",
        kompetensiKKO: "Mempraktikkan, Mendemonstrasikan",
        lingkupMateri: "Gerak Lokomotor (Jalan, Lari, Lompat), Non-Lokomotor (Meliuk, Menekuk), Manipulatif (Melempar, Menangkap)",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP:
              "Mempraktikkan pola gerak dasar lokomotor (berjalan, berlari, melompat ke berbagai arah) dan non-lokomotor (memutar, meliuk, membungkuk) melalui permainan tradisional yang aman dan menyenangkan.",
            alokasiJP: 10,
            semester: "GANJIL",
            prasyarat: "Mampu bergerak bebas dengan keseimbangan tubuh dasar",
            dimensiKarakterDinas: ["Kesehatan", "Kemandirian", "Kolaborasi"],
            dimensiKarakterKemenag: ["Cinta Diri & Kesehatan", "PPRA: Berkeadaban"],
            konteksPembelajaran: {
              stimulus: "Anak-anak bermain permainan tradisional 'Kucing dan Tikus' di lapangan sekolah dengan berlari lincah, berbelok, dan melompat rintangan tali.",
              stimulusKemenag: "Tubuh yang sehat dan bugar adalah karunia yang harus kita jaga dengan rajin berolahraga dan bergerak aktif.",
              masalahNyata: "Bagaimana cara mendarat yang benar saat melompat agar lutut dan kaki tidak cedera?",
              kegiatanEksplorasi: [
                "Latihan berjalan jinjit di atas garis lurus untuk melatih keseimbangan.",
                "Permainan estafet lari bolak-balik memindahkan bendera mini.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Analisislah posisi kedua kaki saat mendarat setelah melompat agar tubuh tetap seimbang dan tidak jatuh terjungkal!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Mempraktikkan gerak lokomotor dan non-lokomotor",
                  baru: "Sering kehilangan keseimbangan saat berlari cepat.",
                  layak: "Mampu berjalan dan berlari lurus.",
                  cakap: "Mampu melakukan variasi lari berkelok-kelok dan melompat mendarat dengan kedua kaki menekuk lentur (mengeper).",
                  mahir: "Mampu mengombinasikan gerak lokomotor dan non-lokomotor dalam permainan regu secara lincah.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah contoh gerakan tubuh yang termasuk GERAK DASAR LOKOMOTOR (gerak berpindah tempat)? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Berlari mengejar bola di lapangan.", isCorrect: true },
                  { kode: "B", teks: "Melompat melewati rintangan kardus.", isCorrect: true },
                  { kode: "C", teks: "Meliukkan badan ke kanan dan ke kiri di tempat.", isCorrect: false },
                  { kode: "D", teks: "Berjalan jinjit maju ke depan.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "Lari, lompat, dan jalan adalah gerak lokomotor (berpindah tempat). Meliuk di tempat adalah gerak non-lokomotor.",
              },
              soalUraian: {
                level: "C4 (Analisis Gerak)",
                pertanyaan: "Jelaskan perbedaan antara gerak lokomotor dan gerak non-lokomotor serta berikan 1 contoh gerakannya masing-masing!",
                kunci: "Gerak lokomotor adalah gerakan tubuh yang menyebabkan perpindahan tempat (contoh: berjalan/berlari). Gerak non-lokomotor adalah gerakan tubuh yang dilakukan di tempat tanpa berpindah posisi (contoh: memutar kepala/meliukkan pinggang).",
                pembahasan: "Konsep dasar klasifikasi gerak kinestetik manusia.",
                rubrik: [
                  { kriteria: "Menjelaskan pengertian dan contoh gerak lokomotor", skor: 10 },
                  { kriteria: "Menjelaskan pengertian dan contoh gerak non-lokomotor", skor: 10 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.02",
            teksTP:
              "Memahami dan mempraktikkan gerak dasar manipulatif melempar, menangkap, dan menendang bola plastik kecil/besar dengan koordinasi mata dan tangan yang baik.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "TP.01 - Gerak dasar lokomotor",
            dimensiKarakterDinas: ["Kesehatan", "Kemandirian", "Kolaborasi"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "PPRA: Berkeadaban"],
            konteksPembelajaran: {
              stimulus: "Siswa berpasangan melempar dan menangkap bola kasti lembut di lapangan dengan riang gembira.",
              stimulusKemenag: "Melatih ketangkasan dan fokus melalui olahraga memperkuat ketahanan fisik dan mental.",
              masalahNyata: "Bagaimana posisi telapak tangan saat menangkap bola yang melayang di udara?",
              kegiatanEksplorasi: [
                "Latihan menangkap bola berpasangan jarak 2 meter.",
                "Melempar bola masuk ke dalam keranjang sasaran.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Mengapa pandangan mata harus selalu fokus mengikuti arah datangnya bola saat hendak menangkap bola?" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Mempraktikkan gerak manipulatif melempar dan menangkap",
                  baru: "Bola sering terjatuh saat ditangkap.",
                  layak: "Mampu melempar bola ke arah sasaran.",
                  cakap: "Mampu menangkap bola dengan membuka kedua telapak tangan membentuk corong mangkuk secara sigap.",
                  mahir: "Mampu melempar dan menangkap bola dengan variasi jarak secara konsisten dan akurat.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah sikap yang BENAR saat menangkap bola yang dilempar teman? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Mata fokus melihat ke arah bola.", isCorrect: true },
                  { kode: "B", teks: "Membuka kedua telapak tangan membentuk mangkuk.", isCorrect: true },
                  { kode: "C", teks: "Menutup mata karena takut terkena bola.", isCorrect: false },
                  { kode: "D", teks: "Menarik tangan sedikit ke belakang saat bola mendarat di telapak tangan.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "Mata fokus, tangan mangkuk, dan menarik tangan saat meredam bola adalah teknik menangkap yang benar.",
              },
              soalUraian: {
                level: "C4 (Prosedur Gerak)",
                pertanyaan: "Sebutkan 3 macam arah lemparan bola dalam permainan kasti sederhana!",
                kunci: "1. Lemparan melambung (ke atas). 2. Lemparan mendatar (lurus setinggi dada). 3. Lemparan menyusur tanah (ke arah bawah).",
                pembahasan: "Arah lemparan dasar manipulatif.",
                rubrik: [
                  { kriteria: "Menyebutkan lemparan melambung dan mendatar", skor: 10 },
                  { kriteria: "Menyebutkan lemparan menyusur tanah", skor: 10 },
                ],
              },
            },
          },
        ],
      },
      {
        namaElemen: "Pemanfaatan Gerak dan Perilaku Hidup Sehat",
        deskripsiCP:
          "Mempraktikkan kebiasaan hidup sehat (kebersihan diri, mencuci tangan, menggosok gigi, konsumsi makanan bergizi, istirahat cukup) dan menunjukkan perilaku sportif serta kerja sama.",
        kompetensiKKO: "Mempraktikkan Pola Hidup Sehat, Sportif, Bekerja Sama",
        lingkupMateri: "Kebersihan Diri, Makanan Bergizi Seimbang, Istirahat Cukup, Sportivitas",
        tpList: [
          {
            kodeTP: "TP.03",
            teksTP:
              "Mempraktikkan kebiasaan pola hidup sehat sehari-hari (mencuci tangan pakai sabun, menggosok gigi teratur, memilih makanan bergizi seimbang, dan tidur tepat waktu).",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "Mengenal sarana kebersihan mandi dan cuci tangan",
            dimensiKarakterDinas: ["Kesehatan", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Kebersihan & Diri", "PPRA: Keteladanan (Qudwah)"],
            konteksPembelajaran: {
              stimulus: "Sebelum menyantap bekal makanan di sekolah, seluruh siswa antre mencuci tangan dengan air mengalir dan sabun selama 20 detik.",
              stimulusKemenag: "Kebersihan adalah bagian dari iman dan bukti syukur atas karunia raga yang sehat.",
              masalahNyata: "Mengapa mencuci tangan hanya dengan air saja tidak cukup untuk membunuh kuman penyakit?",
              kegiatanEksplorasi: [
                "Praktik 6 langkah mencuci tangan bersih berbusa sabun.",
                "Memilah gambar makanan sehat bergizi (4 sehat) dan makanan yang merusak gigi.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Analisislah apa yang akan terjadi pada tubuh kita jika kita tidur larut malam setiap hari!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Mempraktikkan pola hidup sehat",
                  baru: "Mencuci tangan hanya membasahi ujung jari tanpa sabun.",
                  layak: "Mampu menyebutkan contoh makanan sehat.",
                  cakap: "Mampu mempraktikkan 6 langkah cuci tangan pakai sabun dan memilih bekal sehat.",
                  mahir: "Mampu membiasakan hidup bersih dan mengajak teman menjaga kebersihan lingkungan.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah kebiasaan hidup sehat yang harus dilakukan setiap hari? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Mencuci tangan pakai sabun sebelum makan dan setelah dari toilet.", isCorrect: true },
                  { kode: "B", teks: "Menggosok gigi minimal dua kali sehari (pagi dan sebelum tidur).", isCorrect: true },
                  { kode: "C", teks: "Tidur malam tepat waktu dan tidak begadang.", isCorrect: true },
                  { kode: "D", teks: "Makan makanan yang banyak lalat dan tidak tertutup.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "A, B, dan C adalah pilar kesehatan pribadi.",
              },
              soalUraian: {
                level: "C4 (Analisis Kesehatan)",
                pertanyaan: "Mengapa kita harus rajin minum air putih yang cukup dan berolahraga secara teratur setiap minggu?",
                kunci: "Agar tubuh tidak dehidrasi, peredaran darah lancar, otot dan tulang kuat, serta daya tahan tubuh meningkat sehingga tidak mudah sakit.",
                pembahasan: "Manfaat hidrasi dan aktivitas fisik bagi kesehatan anak.",
                rubrik: [
                  { kriteria: "Menjelaskan fungsi air putih mencegah dehidrasi", skor: 10 },
                  { kriteria: "Menjelaskan fungsi olahraga membuat tubuh bugar dan kuat", skor: 10 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.04",
            teksTP:
              "Menunjukkan perilaku bertanggung jawab, disiplin mematuhi instruksi guru, bersikap sportif, dan mau bekerja sama dengan teman dalam setiap aktivitas jasmani.",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "Mampu bermain bersama kelompok",
            dimensiKarakterDinas: ["Kolaborasi", "Kemandirian", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Sesama", "PPRA: Berkeadaban (Ta'addub)", "PPRA: Kesetaraan (Musawah)"],
            konteksPembelajaran: {
              stimulus: "Saat tim regu kalah dalam permainan tarik tambang mini, siswa tetap tersenyum menyalami tim pemenang dan bertepuk tangan bersama.",
              stimulusKemenag: "Kemenangan sejati adalah saat kita bisa bersikap rendah hati saat menang dan berjiwa besar saat kalah.",
              masalahNyata: "Bagaimana sikap kita jika teman sekelompok kita melakukan kesalahan saat bermain bola estafet?",
              kegiatanEksplorasi: [
                "Simulasi saling bersalaman setelah pertandingan olahraga.",
                "Bergantian merapikan kembali bola dan kun kerucut ke dalam gudang olahraga.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi", teks: "Evaluasilah apakah sikap marah-marah saat kalah bertanding merupakan sikap yang baik?" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menunjukkan sportivitas dan kerja sama",
                  baru: "Masih menangis atau marah saat kalah dalam permainan.",
                  layak: "Mampu bermain tanpa mengganggu teman lain.",
                  cakap: "Mampu menunjukkan sikap sportif menerima hasil permainan dan menyemangati teman regu.",
                  mahir: "Mampu menjadi penengah yang mendamaikan teman saat terjadi perselisihan permainan.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah perilaku yang menunjukkan sikap SPORTIF saat berolahraga bersama teman? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Mengakui keunggulan teman yang menang dan memberikan ucapan selamat.", isCorrect: true },
                  { kode: "B", teks: "Bermain jujur sesuai aturan tanpa berbuat curang.", isCorrect: true },
                  { kode: "C", teks: "Mengejek tim lawan yang kalah sampai menangis.", isCorrect: false },
                  { kode: "D", teks: "Membantu membangunkan teman lawan yang terjatuh.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "Sportivitas mencakup jujur, menghargai lawan, dan menolong teman.",
              },
              soalUraian: {
                level: "C4 (Refleksi Karakter)",
                pertanyaan: "Apa yang sebaiknya kamu lakukan jika regu olahragamu belum berhasil memenangkan perlombaan lari estafet di sekolah?",
                kunci: "Tetap tersenyum, tidak menyalahkan teman sekelompok, mengucapkan selamat kepada regu pemenang, dan bersemangat untuk berlatih lebih giat lagi di kesempatan berikutnya.",
                pembahasan: "Karakter pantang menyerah dan lapang dada.",
                rubrik: [
                  { kriteria: "Menjelaskan sikap tidak menyalahkan teman dan bersalaman", skor: 10 },
                  { kriteria: "Menjelaskan tekad berlatih lebih giat", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },
];
