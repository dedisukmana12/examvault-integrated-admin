// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
const fs = require('fs');
const content = fs.readFileSync('src/data/curriculumDatabase.ts', 'utf8');
const match = content.match(/export function getSubjectsByFase.*?\{[\s\S]*?\}/);
console.log(match ? match[0] : "Not found");
