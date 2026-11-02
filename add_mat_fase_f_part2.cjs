// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
const fs = require('fs');

const newData = `,
      {
        namaElemen: "Geometri",
        deskripsiCP: "Menerapkan, mengidentifikasi, dan menjelaskan hubungan antara unsur-unsur lingkaran untuk menyelesaikan masalah.",
        kompetensiKKO: "Menerapkan, Mengidentifikasi, Menjelaskan",
        lingkupMateri: "Unsur-unsur Lingkaran, Busur, Juring, Tali Busur, Sudut Pusat dan Sudut Keliling",
        tpList: [
          {
            kodeTP: "TP.03",
            teksTP: "Menerapkan dan menjelaskan hubungan antara unsur-unsur lingkaran untuk menyelesaikan masalah konseptual dan aplikatif.",
            alokasiJP: 16,
            semester: "GENAP",
            prasyarat: "Memahami luas dan keliling lingkaran di Fase D",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas"],
            dimensiKarakterKemenag: ["Kreativitas", "Tafakur (Refleksi penciptaan)"],
            konteksPembelajaran: {
              stimulus: "Siswa mengamati desain arsitektur kubah masjid, roda gigi pada mesin, atau bianglala (ferris wheel).",
              stimulusKemenag: "Siswa menganalisis bentuk geometris pada desain kubah atau ornamen islami (arabesque) yang banyak memanfaatkan juring dan tali busur.",
              masalahNyata: "Bagaimana cara kita menghitung panjang besi yang melengkung pada kerangka bianglala atau kubah jika hanya diketahui sudut kemiringannya?",
              kegiatanEksplorasi: [
                "Mengeksplorasi juring, tembereng, sudut pusat, dan keliling menggunakan benda berbentuk lingkaran di sekitar.",
                "Membuat pembuktian empiris bahwa sudut keliling besarnya setengah dari sudut pusat jika menghadap busur yang sama."
              ],
              pertanyaanHOTS: [
                { level: "C5 - Mengevaluasi", teks: "Buktikan bahwa segi empat tali busur yang terbentuk dalam lingkaran selalu memiliki jumlah sudut berhadapan sebesar 180 derajat!" }
              ],
              rubrikIndikator: [
                { kriteria: "Geometri Lingkaran", baru: "Hanya mengenali jari-jari dan diameter.", layak: "Mampu mengidentifikasi tali busur, juring, dan sudut pusat.", cakap: "Mampu menghitung hubungan antara panjang busur dan luas juring.", mahir: "Mampu memecahkan masalah kompleks yang melibatkan segi empat tali busur dan garis singgung." }
              ],
              soalPGK: {
                pertanyaan: "Berdasarkan hubungan sudut dalam lingkaran, manakah pernyataan yang benar? (Pilih 2)",
                pilihan: [
                  { kode: "A", teks: "Besar sudut pusat adalah dua kali besar sudut keliling yang menghadap busur yang sama.", isCorrect: true },
                  { kode: "B", teks: "Semua sudut keliling yang menghadap busur yang sama besarnya sama.", isCorrect: true },
                  { kode: "C", teks: "Sudut keliling yang menghadap diameter besarnya 180 derajat.", isCorrect: false },
                  { kode: "D", teks: "Garis singgung selalu tegak lurus dengan sembarang tali busur.", isCorrect: false }
                ],
                kunci: "A dan B",
                pembahasan: "Sudut keliling menghadap diameter besarnya 90 derajat (C salah). Garis singgung tegak lurus dengan jari-jari, bukan sembarang tali busur (D salah)."
              },
              soalUraian: {
                level: "C4 HOTS",
                pertanyaan: "Dalam sebuah taman berbentuk lingkaran dengan jari-jari 14 m, dibuat sebuah area panggung berbentuk juring dengan sudut pusat 90 derajat. Area sisanya akan ditanami rumput. Hitunglah luas area yang ditanami rumput!",
                kunci: "Luas juring panggung = 90/360 * pi * r^2 = 1/4 * 22/7 * 196 = 154 m2. Luas taman = 22/7 * 196 = 616 m2. Sisa area = 616 - 154 = 462 m2.",
                pembahasan: "Skor 10: Langkah logis, menggunakan rasio juring yang tepat, hasil akhir benar.",
                rubrik: [{ kriteria: "Penerapan rumus juring lingkaran", skor: 10 }]
              }
            }
          }
        ]
      },
      {
        namaElemen: "Analisis Data dan Peluang",
        deskripsiCP: "Penyelidikan statistika untuk asosiasi dua variabel kategorikal dan numerikal; memperkirakan best fit linear; membedakan asosiasi dan sebab-akibat; peluang kejadian majemuk (saling bebas/lepas, bersyarat) dengan permutasi kombinasi.",
        kompetensiKKO: "Menyelidiki, Memperkirakan, Membedakan, Menentukan",
        lingkupMateri: "Statistika Bivariat, Regresi Linear, Peluang Majemuk, Permutasi, Kombinasi",
        tpList: [
          {
            kodeTP: "TP.04",
            teksTP: "Menyelidiki asosiasi dua variabel, memperkirakan garis regresi, serta menentukan peluang kejadian majemuk bersyarat menggunakan permutasi dan kombinasi.",
            alokasiJP: 30,            
            semester: "GENAP",
            prasyarat: "Memahami statistika univariat dan peluang empiris di Fase E",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian", "Kreativitas"],
            dimensiKarakterKemenag: ["Kemandirian", "Tawazun (Keseimbangan & Keadilan)"],
            konteksPembelajaran: {
              stimulus: "Siswa melihat data korelasi antara waktu bermain gadget dengan nilai ujian akhir, serta menganalisis peluang lolos seleksi perguruan tinggi.",
              stimulusKemenag: "Siswa mengevaluasi data korelasi antara rutinitas shalat/ibadah sunnah dengan tingkat kedisiplinan belajar menggunakan regresi linear.",
              masalahNyata: "Bagaimana cara membedakan apakah dua kejadian yang terjadi bersamaan itu murni karena sebab-akibat (causation) atau kebetulan saja (correlation)?",
              kegiatanEksplorasi: [
                "Mengumpulkan data bivariat (misal: tinggi badan vs ukuran sepatu) dan menggambar diagram pencar (scatter plot).",
                "Mensimulasikan permainan peluang bersyarat menggunakan kombinasi kartu."
              ],
              pertanyaanHOTS: [
                { level: "C5 - Mengevaluasi", teks: "Data menunjukkan bahwa saat penjualan es krim meningkat, kasus tenggelam di pantai juga meningkat. Evaluasilah apakah makan es krim menyebabkan tenggelam (sebab-akibat) atau adakah variabel perancu (lurking variable)?" }
              ],
              rubrikIndikator: [
                { kriteria: "Analisis Bivariat & Peluang", baru: "Hanya mampu membaca diagram batang.", layak: "Mampu membuat scatter plot namun belum bisa menarik kesimpulan korelasi.", cakap: "Mampu menarik garis best fit (regresi linear) secara manual dan membedakan kombinasi/permutasi.", mahir: "Mampu membuktikan kejadian saling lepas atau bersyarat menggunakan rumus peluang majemuk dan membedakan korelasi vs sebab-akibat." }
              ],
              soalPGK: {
                pertanyaan: "Dalam teori peluang, kejadian A dan B dikatakan saling lepas (mutually exclusive) jika... (Pilih 2 jawaban benar)",
                pilihan: [
                  { kode: "A", teks: "Peluang irisannya adalah nol: P(A ∩ B) = 0.", isCorrect: true },
                  { kode: "B", teks: "Kedua kejadian tidak dapat terjadi secara bersamaan.", isCorrect: true },
                  { kode: "C", teks: "Terjadinya A tidak mempengaruhi terjadinya B.", isCorrect: false },
                  { kode: "D", teks: "P(A ∪ B) = P(A) x P(B).", isCorrect: false }
                ],
                kunci: "A dan B",
                pembahasan: "Kejadian saling lepas berarti irisan nol dan tak bisa terjadi bersamaan. (C) mendefinisikan saling bebas (independent), sedangkan (D) adalah aturan perkalian bebas yang salah disamakan."
              },
              soalUraian: {
                level: "C4 HOTS",
                pertanyaan: "Sebuah panitia terdiri dari 5 orang akan dibentuk dari 7 pria dan 5 wanita. Jika syaratnya minimal harus ada 3 wanita, tentukan banyaknya cara susunan panitia tersebut menggunakan konsep Kombinasi!",
                kunci: "Kemungkinan: (3W, 2P), (4W, 1P), (5W, 0P). (3W,2P) = C(5,3) x C(7,2) = 10 x 21 = 210. (4W,1P) = C(5,4) x C(7,1) = 5 x 7 = 35. (5W,0P) = C(5,5) x C(7,0) = 1 x 1 = 1. Total = 210 + 35 + 1 = 246 cara.",
                pembahasan: "Siswa dinilai dari identifikasi kemungkinan skenario minimal 3 wanita dan penggunaan rumus kombinasi yang akurat.",
                rubrik: [{ kriteria: "Penyelesaian kasus kombinasi secara sistematis", skor: 10 }]
              }
            }
          }
        ]
      }`;

let content = fs.readFileSync('src/data/faseFDataset.ts', 'utf8');
// Find the exact location to inject. 
// Right before: }    ]  }];export const FASE_F_DATASETS
const searchString = `        ]\n      }\n    ]\n  }\n];`;
// Actually, it's minified in my previous grep. Let me use Regex to replace the closing bracket.
const pattern = /\]\n\s*\}\n\s*\]\n\s*\}\n\];/;
const replacement = newData + `\n    ]\n  }\n];`;

if (pattern.test(content)) {
  content = content.replace(pattern, replacement);
  fs.writeFileSync('src/data/faseFDataset.ts', content, 'utf8');
  console.log("Successfully injected Phase F Geometri and Analisis Data");
} else {
  console.log("Regex not found. Searching alternative...");
  // Let's just find the last "  }    ]  }];" or similar.
  const idx = content.lastIndexOf(']      }    ]  }];');
  if (idx !== -1) {
    const p1 = content.slice(0, idx);
    const p2 = content.slice(idx);
    fs.writeFileSync('src/data/faseFDataset.ts', p1 + newData + p2, 'utf8');
    console.log("Successfully injected alternative");
  } else {
    // try removing spaces 
    let stripped = content.replace(/\s+/g, '');
    if (stripped.includes('}]}];exportconstFASE_F_DATASETS')) {
       console.log("Content exists, using simple replace");
       content = content.replace(/\n\s*\]\n\s*\}\n\s*\]\n\s*\}\n\];/, newData + `\n    ]\n  }\n];`);
       fs.writeFileSync('src/data/faseFDataset.ts', content, 'utf8');
    }
  }
}
