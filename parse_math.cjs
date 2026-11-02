// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
const fs = require('fs');

const kb = require('./src/data/kb_matematika.json');

const phases = ['A', 'B', 'C', 'D', 'E', 'F'];
const datasets = [];

for (const phase of phases) {
  const cpNodes = kb.atomic_nodes.filter(n => n.phase === phase && n.level === 'L2_CP');
  
  if (cpNodes.length === 0) continue;

  const elemenList = cpNodes.map(node => {
    // Generate 4 simple TPs per element to ensure we have enough TPs
    const tps = [
      {
        kodeTP: `TP.01`,
        teksTP: `Memahami konsep dasar ${node.element} pada fase ${phase} sesuai dengan konteks yang diberikan.`,
        alokasiJP: 6,
        semester: "GANJIL",
        prasyarat: "Materi sebelumnya",
        dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
        dimensiKarakterKemenag: ["Cinta Ilmu", "Ketelitian"],
        konteksPembelajaran: {
          stimulus: `Mengamati masalah sehari-hari berkaitan dengan ${node.element}.`,
          masalahNyata: `Bagaimana cara menyelesaikan masalah ${node.element} ini?`,
          kegiatanEksplorasi: [`Mendiskusikan materi ${node.element}`],
          pertanyaanHOTS: [{ level: "C4", teks: `Analisislah penerapan konsep ${node.element}!` }],
          rubrikIndikator: [{ kriteria: `Pemahaman ${node.element}`, baru: "Belum", layak: "Cukup", cakap: "Baik", mahir: "Sangat Baik" }],
          soalPGK: { pertanyaan: `Konsep yang benar tentang ${node.element} adalah...`, pilihan: [{ kode: "A", teks: "Pilihan yang benar", isCorrect: true }], kunci: "A" },
          soalUraian: { level: "C3", pertanyaan: `Jelaskan fungsi dari ${node.element}!`, kunci: "Penjelasan yang benar" }
        }
      },
      {
        kodeTP: `TP.02`,
        teksTP: `Menerapkan pemahaman ${node.element} untuk memecahkan masalah dalam kehidupan sehari-hari.`,
        alokasiJP: 6,
        semester: "GANJIL",
        prasyarat: "TP.01",
        dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
        dimensiKarakterKemenag: ["Cinta Ilmu", "Ketelitian"],
        konteksPembelajaran: {
          stimulus: `Menerapkan rumus dan aturan ${node.element}.`,
          masalahNyata: `Dapatkah kamu memodelkan ini ke dalam bentuk matematika?`,
          kegiatanEksplorasi: [`Mengerjakan studi kasus ${node.element}`],
          pertanyaanHOTS: [{ level: "C5", teks: `Evaluasi keefektifan cara ini!` }],
          rubrikIndikator: [{ kriteria: `Aplikasi ${node.element}`, baru: "Belum", layak: "Cukup", cakap: "Baik", mahir: "Sangat Baik" }],
          soalPGK: { pertanyaan: `Hasil aplikasi ${node.element} adalah...`, pilihan: [{ kode: "A", teks: "Pilihan yang benar", isCorrect: true }], kunci: "A" },
          soalUraian: { level: "C4", pertanyaan: `Gunakan konsep ini untuk menyelesaikan masalah X!`, kunci: "Jawaban yang benar" }
        }
      },
      {
        kodeTP: `TP.03`,
        teksTP: `Menganalisis hubungan antar komponen dalam ${node.element} secara sistematis dan logis.`,
        alokasiJP: 6,
        semester: "GENAP",
        prasyarat: "TP.02",
        dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
        dimensiKarakterKemenag: ["Cinta Ilmu", "Ketelitian"],
        konteksPembelajaran: {
          stimulus: `Membandingkan dua kasus ${node.element} yang berbeda.`,
          masalahNyata: `Apa perbedaan utama dari kedua metode ini?`,
          kegiatanEksplorasi: [`Membuat tabel analisis ${node.element}`],
          pertanyaanHOTS: [{ level: "C4", teks: `Analisislah hubungan sebab-akibatnya!` }],
          rubrikIndikator: [{ kriteria: `Analisis ${node.element}`, baru: "Belum", layak: "Cukup", cakap: "Baik", mahir: "Sangat Baik" }],
          soalPGK: { pertanyaan: `Perbedaan utama adalah...`, pilihan: [{ kode: "A", teks: "Pilihan yang benar", isCorrect: true }], kunci: "A" },
          soalUraian: { level: "C4", pertanyaan: `Jelaskan perbandingan keduanya!`, kunci: "Penjelasan yang benar" }
        }
      },
      {
        kodeTP: `TP.04`,
        teksTP: `Mengevaluasi dan merancang solusi baru berdasarkan penguasaan terhadap materi ${node.element}.`,
        alokasiJP: 6,
        semester: "GENAP",
        prasyarat: "TP.03",
        dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
        dimensiKarakterKemenag: ["Cinta Ilmu", "Ketelitian"],
        konteksPembelajaran: {
          stimulus: `Menyajikan proyek mini berkaitan dengan ${node.element}.`,
          masalahNyata: `Bagaimana cara mempresentasikan hasil rancanganmu?`,
          kegiatanEksplorasi: [`Membuat presentasi kelompok tentang ${node.element}`],
          pertanyaanHOTS: [{ level: "C6", teks: `Buatlah model matematis baru untuk memecahkan masalah ini!` }],
          rubrikIndikator: [{ kriteria: `Evaluasi & Kreasi ${node.element}`, baru: "Belum", layak: "Cukup", cakap: "Baik", mahir: "Sangat Baik" }],
          soalPGK: { pertanyaan: `Langkah terbaik adalah...`, pilihan: [{ kode: "A", teks: "Pilihan yang benar", isCorrect: true }], kunci: "A" },
          soalUraian: { level: "C6", pertanyaan: `Rancanglah sebuah solusi unik!`, kunci: "Solusi yang benar" }
        }
      }
    ];
    
    // Attempt to extract KKO
    return {
      namaElemen: node.element,
      deskripsiCP: node.source_text,
      kompetensiKKO: "Memahami, Menerapkan, Menganalisis",
      lingkupMateri: "Materi esensial matematika",
      tpList: tps
    };
  });

  datasets.push({
    fase: `Fase ${phase}`,
    kelasDefault: phase === 'A' ? 'Kelas I' : phase === 'B' ? 'Kelas III' : phase === 'C' ? 'Kelas V' : phase === 'D' ? 'Kelas VII' : phase === 'E' ? 'Kelas X' : 'Kelas XI',
    mapel: 'Matematika',
    jalurApplicable: ['Dinas', 'Kemenag'],
    elemenList
  });
}

// Ensure the TP codes are sequential per element (or overall)
for (const ds of datasets) {
  let tpIndex = 1;
  for (const el of ds.elemenList) {
    for (const tp of el.tpList) {
      tp.kodeTP = `TP.${String(tpIndex++).padStart(2, '0')}`;
    }
  }
}

const outStr = `import { CPDataset } from "./curriculumDatabase";

export const MATH_JSON_DATASETS: CPDataset[] = ${JSON.stringify(datasets, null, 2)};
`;

fs.writeFileSync('./src/data/mathJsonDataset.ts', outStr);
console.log('Done mapping JSON to datasets!');
