// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
const fs = require('fs');

const newData = `  {
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
`;

const filePath = 'src/data/faseEDataset.ts';
let content = fs.readFileSync(filePath, 'utf8');

const insertPos = content.lastIndexOf('];');
if (insertPos !== -1) {
  content = content.slice(0, insertPos) + newData + content.slice(insertPos);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully injected Matematika Fase E into faseEDataset.ts');
} else {
  console.log('Could not find ]; in faseEDataset.ts');
}
