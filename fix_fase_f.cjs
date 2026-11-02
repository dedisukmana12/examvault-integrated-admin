// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
const fs = require('fs');

const filePath = 'src/data/faseFDataset.ts';
let content = fs.readFileSync(filePath, 'utf8');

// The line is: export const FASE_F_DATASETS: CPDataset[] = [...FASE_F_DATASETS_BASE, ...B_INDO_DATASETS, ...MATEMATIKA_F_DATASETS
// We want to replace it.
const splitStr = "export const FASE_F_DATASETS: CPDataset[] = [...FASE_F_DATASETS_BASE, ...B_INDO_DATASETS, ...MATEMATIKA_F_DATASETS";
if (content.includes(splitStr)) {
  const parts = content.split(splitStr);
  
  let newContent = parts[0] + "export const FASE_F_NEW: CPDataset[] = [" + parts[1] + "\nexport const FASE_F_DATASETS: CPDataset[] = [...FASE_F_DATASETS_BASE, ...B_INDO_DATASETS, ...MATEMATIKA_F_DATASETS, ...FASE_F_NEW];\n";
  
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log("Fixed faseFDataset.ts");
} else {
  console.log("Could not find the target string.");
}
