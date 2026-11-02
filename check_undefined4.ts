// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import { CURRICULUM_DATABASE } from './src/data/curriculumDatabase';
CURRICULUM_DATABASE.forEach((item, index) => {
  if (!item) {
    console.log('Undefined at index', index);
  } else if (!item.fase) {
    console.log('No fase at index', index, item);
  }
});
