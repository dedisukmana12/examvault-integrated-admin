// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
const fs = require('fs');
const path = require('path');

function appendToDataset(filePath, phase, defaultClass, subjects) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  const insertPos = content.lastIndexOf('];');
  if (insertPos === -1) {
    console.error(`Could not find '];' in ${filePath}`);
    return;
  }
  
  let newEntries = "";
  for (const subject of subjects) {
    if (content.includes(`mapel: "${subject}"`)) {
      console.log(`${subject} already exists in ${filePath}`);
      continue;
    }
    
    console.log(`Adding ${subject} to ${filePath}`);
    
    newEntries += `
  {
    fase: "${phase}",
    kelasDefault: "${defaultClass}",
    mapel: "${subject}",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pemahaman Konsep",
        deskripsiCP: "Memahami konsep ${subject} secara komprehensif.",
        kompetensiKKO: "Memahami, Menganalisis",
        lingkupMateri: "Materi Esensial ${subject}",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP: "Memahami konsep dasar ${subject} dalam kehidupan sehari-hari.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Memiliki pengetahuan dasar terkait fenomena sosial/alam.",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Kewargaan", "Tasamuh"],
            konteksPembelajaran: {
              stimulus: "Menampilkan kasus atau gambar relevan dengan ${subject}.",
              masalahNyata: "Bagaimana penerapan ${subject} menyelesaikan masalah tersebut?",
              kegiatanEksplorasi: ["Observasi lingkungan", "Diskusi kelompok"],
              pertanyaanHOTS: [{ level: "C4", teks: "Analisis dampak fenomena tersebut!" }],
              rubrikIndikator: [{ kriteria: "Pemahaman Konsep", baru: "Belum", layak: "Cukup", cakap: "Baik", mahir: "Sangat Baik" }],
              soalPGK: {
                pertanyaan: "Pernyataan yang benar tentang ${subject} adalah...",
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
  },`;
  }
  
  if (newEntries) {
    const updatedContent = content.slice(0, insertPos) + newEntries + '\n' + content.slice(insertPos);
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

const faseEPath = path.join(__dirname, 'src', 'data', 'faseEDataset.ts');
const faseFPath = path.join(__dirname, 'src', 'data', 'faseFDataset.ts');

appendToDataset(faseEPath, "Fase E", "Kelas X", [
  "Sejarah",
  "Sosiologi",
  "Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)",
  "Geografi",
  "Informatika",
  "Antropologi"
]);

appendToDataset(faseFPath, "Fase F", "Kelas XI", [
  "Sejarah",
  "Sejarah Tingkat Lanjut",
  "Sosiologi",
  "Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)",
  "Antropologi"
]);
