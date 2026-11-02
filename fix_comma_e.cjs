// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
const fs = require('fs');
let content = fs.readFileSync('src/data/faseEDataset.ts', 'utf8');
content = content.replace(/}\s+{\s+fase: "Fase E",\s+kelasDefault: "Kelas X",\s+mapel: "Matematika",/, '},\n  {\n    fase: "Fase E",\n    kelasDefault: "Kelas X",\n    mapel: "Matematika",');
fs.writeFileSync('src/data/faseEDataset.ts', content, 'utf8');
