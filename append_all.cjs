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
            prasyarat: "Memiliki pengetahuan dasar terkait fenomena.",
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

// Do it for faseFDataset.ts specially because of my previous fix!
function appendToFaseF(subjects) {
  const filePath = path.join(__dirname, 'src', 'data', 'faseFDataset.ts');
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  
  const insertPos = content.lastIndexOf('];'); // The end of the whole file
  let newEntries = "";
  for (const subject of subjects) {
    if (content.includes(`mapel: "${subject}"`)) continue;
    console.log(`Adding ${subject} to ${filePath}`);
    
    newEntries += `
  ,{
    fase: "Fase F",
    kelasDefault: "Kelas XI",
    mapel: "${subject}",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [ { namaElemen: "Pemahaman", deskripsiCP: "Memahami", kompetensiKKO: "Memahami", lingkupMateri: "Materi", tpList: [] } ]
  }`;
  }
  if (newEntries) {
    const updatedContent = content.slice(0, insertPos) + newEntries + '\n' + content.slice(insertPos);
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

appendToDataset(path.join(__dirname, 'src', 'data', 'faseADataset.ts'), "Fase A", "Kelas I", ["Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)"]);
appendToDataset(path.join(__dirname, 'src', 'data', 'faseBDataset.ts'), "Fase B", "Kelas III", ["Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)"]);
appendToDataset(path.join(__dirname, 'src', 'data', 'faseCDataset.ts'), "Fase C", "Kelas V", ["Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)"]);
appendToDataset(path.join(__dirname, 'src', 'data', 'faseDDataset.ts'), "Fase D", "Kelas VII", ["Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)"]);
