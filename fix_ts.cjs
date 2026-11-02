// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
const fs = require('fs');

let f = 'src/utils/engineGenerator.ts';
let content = fs.readFileSync(f, 'utf8');

content = content.replace(
  /ganjilTPs\.forEach\(\(tp, i\) => {/g,
  `ganjilTPs.forEach((tp: any, i) => {`
);

content = content.replace(
  /genapTPs\.forEach\(\(tp, i\) => {/g,
  `genapTPs.forEach((tp: any, i) => {`
);

fs.writeFileSync(f, content);
console.log('Fixed TS.');
