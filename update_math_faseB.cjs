// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
const fs = require('fs');

const f = 'src/data/faseB/faseB_umum.ts';
let content = fs.readFileSync(f, 'utf8');

// We need to replace the Matematika mapel in Fase B.
// This is a bit tricky with regex, so let's just do a string replacement.
// Let's find the start of Matematika and the end.
const mathStartStr = `    mapel: "Matematika",`;
const nextMapelStr = `    mapel: "Ilmu Pengetahuan Alam dan Sosial (IPAS)",`;

const startIndex = content.indexOf(mathStartStr);
const endIndex = content.indexOf(nextMapelStr);

if (startIndex === -1 || endIndex === -1) {
  console.log("Could not find Matematika or IPAS bounds");
  process.exit(1);
}

// We need to back up to the { before mapel: "Matematika"
const blockStart = content.lastIndexOf('{', startIndex);
// We need to back up to the { before mapel: "IPAS"
const blockEnd = content.lastIndexOf('{', endIndex);

const head = content.substring(0, blockStart);
const tail = content.substring(blockEnd);

const newMath = `{
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
`;

const finalContent = head + newMath + tail;
fs.writeFileSync(f, finalContent);
console.log('Math Phase B dataset updated with 12 dynamic TPs!');
