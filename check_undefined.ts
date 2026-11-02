// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import { CURRICULUM_DATABASE } from './src/data/curriculumDatabase';

const undefs = CURRICULUM_DATABASE.filter(item => !item || !item.fase);
if (undefs.length > 0) {
  console.log('Found', undefs.length, 'invalid items!');
  console.log(undefs);
} else {
  console.log('All items valid.');
}

const d = require('./src/data/faseDDataset.ts');
console.log(d.FASE_D_DATASETS.filter((x: any) => !x || !x.fase));
const e = require('./src/data/faseEDataset.ts');
console.log(e.FASE_E_DATASETS.filter((x: any) => !x || !x.fase));
