// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import { CURRICULUM_DATABASE } from './src/data/curriculumDatabase';
let count = 0;
CURRICULUM_DATABASE.forEach((item, index) => {
  if (!item) {
    console.log('Undefined at index', index);
    count++;
  } else if (!item.fase) {
    console.log('No fase at index', index, item);
    count++;
  }
});
if (count === 0) console.log('All clear!');
