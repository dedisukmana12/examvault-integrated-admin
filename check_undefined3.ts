// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import { CURRICULUM_DATABASE } from './src/data/curriculumDatabase';
import { FASE_A_DATASETS } from './src/data/faseADataset';
import { FASE_B_DATASETS } from './src/data/faseBDataset';
import { FASE_C_DATASETS } from './src/data/faseCDataset';
import { FASE_D_DATASETS } from './src/data/faseDDataset';
import { FASE_E_DATASETS } from './src/data/faseEDataset';
import { FASE_F_DATASETS } from './src/data/faseFDataset';

console.log('CURRICULUM_DATABASE has', CURRICULUM_DATABASE.length, 'items');
console.log('undefs:', CURRICULUM_DATABASE.filter(x => !x || !x.fase).length);
console.log('FASE D:', FASE_D_DATASETS.length, 'undefs:', FASE_D_DATASETS.filter(x => !x || !x.fase).length);
console.log('FASE E:', FASE_E_DATASETS.length, 'undefs:', FASE_E_DATASETS.filter(x => !x || !x.fase).length);
