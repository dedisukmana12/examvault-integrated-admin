// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import { FASE_A_DATASETS } from './src/data/faseADataset';
import { FASE_B_DATASETS } from './src/data/faseBDataset';
import { FASE_C_DATASETS } from './src/data/faseCDataset';
import { FASE_D_DATASETS } from './src/data/faseDDataset';
import { FASE_E_DATASETS } from './src/data/faseEDataset';
import { FASE_F_DATASETS } from './src/data/faseFDataset';

function check(name: string, arr: any[]) {
  const undefs = arr.filter(x => !x || !x.fase);
  if (undefs.length > 0) {
    console.log(name, 'has', undefs.length, 'invalid items!');
    console.log(undefs);
  }
}

check('FASE_A_DATASETS', FASE_A_DATASETS);
check('FASE_B_DATASETS', FASE_B_DATASETS);
check('FASE_C_DATASETS', FASE_C_DATASETS);
check('FASE_D_DATASETS', FASE_D_DATASETS);
check('FASE_E_DATASETS', FASE_E_DATASETS);
check('FASE_F_DATASETS', FASE_F_DATASETS);
