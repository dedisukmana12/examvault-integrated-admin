// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import { CURRICULUM_DATABASE } from "./src/data/curriculumDatabase.js";
import { generateCompleteDocuments } from "./src/utils/engineGenerator.js";

const input = {
  fase: "Fase A",
  mataPelajaran: "Matematika",
  kelas: "Kelas I",
  jalur: "Dinas"
};

const matchedDataset = CURRICULUM_DATABASE.find(
  (ds) =>
    ds.fase === input.fase &&
    (ds.mapel.toLowerCase().includes(input.mataPelajaran.toLowerCase().trim()) ||
      input.mataPelajaran.toLowerCase().includes(ds.mapel.toLowerCase().trim()))
) || CURRICULUM_DATABASE[0];

try {
  const cpText = matchedDataset.elemenList.map((el: any) => `Elemen: ${el.namaElemen}\nCapaian: ${el.deskripsiCP}`).join("\n\n");
  console.log("cpText success", cpText.slice(0, 50));
} catch (e: any) {
  console.error("cpText map failed:", e.message);
}

try {
    generateCompleteDocuments(input as any);
    console.log("Fallback generator success");
} catch(e: any) {
    console.error("generator failed:", e.stack);
}
