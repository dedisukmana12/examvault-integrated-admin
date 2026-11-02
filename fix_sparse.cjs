// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
const fs = require('fs');

function fixSparse(filename) {
  let content = fs.readFileSync(filename, 'utf-8');
  const initialLength = content.length;
  // replace ,\n, or ,\r\n, or any whitespace between commas
  content = content.replace(/,\s*,/g, ',');
  if (content.length !== initialLength) {
    fs.writeFileSync(filename, content);
    console.log('Fixed', filename);
  }
}

fixSparse('src/data/faseDDataset.ts');
fixSparse('src/data/faseEDataset.ts');
fixSparse('src/data/faseFDataset.ts');
