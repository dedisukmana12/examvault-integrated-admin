// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
const fs = require('fs');

let f = 'src/utils/engineGenerator.ts';
let content = fs.readFileSync(f, 'utf8');

// Replace the redundant const declarations
content = content.replace(
  /const ganjilTPs = tpList\.filter\(\(tp\) => tp\.semester === "GANJIL"\);\s*const genapTPs = tpList\.filter\(\(tp\) => tp\.semester === "GENAP"\);/,
  `// Used existing ganjilTPs and genapTPs`
);

fs.writeFileSync(f, content);
console.log('Fixed redeclaration.');
