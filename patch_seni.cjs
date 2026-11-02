// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
const fs = require('fs');

let f = 'src/data/curriculumDatabase.ts';
let content = fs.readFileSync(f, 'utf8');

const injection = `
  const seniSubjects = [
    "Seni Musik",
    "Seni Rupa",
    "Seni Tari",
    "Seni Teater"
  ];
  seniSubjects.forEach(s => subjectSet.add(s));

  const prakaryaSubjects = [
    "Prakarya (Budi Daya)",
    "Prakarya (Kerajinan)",
    "Prakarya (Rekayasa)",
    "Prakarya (Pengolahan)",
    "Prakarya dan Kewirausahaan (Budi Daya)",
    "Prakarya dan Kewirausahaan (Kerajinan)",
    "Prakarya dan Kewirausahaan (Rekayasa)",
    "Prakarya dan Kewirausahaan (Pengolahan)"
  ];
  prakaryaSubjects.forEach(s => subjectSet.add(s));

  subjectSet.add("Muatan Lokal");
`;

content = content.replace(
  /agamaSubjects\.forEach\(s => subjectSet\.add\(s\)\);/,
  `agamaSubjects.forEach(s => subjectSet.add(s));
${injection}`
);

fs.writeFileSync(f, content);
console.log('Patched curriculumDatabase.ts for Seni and Prakarya');
