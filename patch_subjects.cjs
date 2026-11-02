// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
const fs = require('fs');

let f = 'src/data/curriculumDatabase.ts';
let content = fs.readFileSync(f, 'utf8');

const injection = `
  const agamaSubjects = [
    "Pendidikan Agama Islam dan Budi Pekerti",
    "Pendidikan Agama Kristen dan Budi Pekerti",
    "Pendidikan Agama Katolik dan Budi Pekerti",
    "Pendidikan Agama Hindu dan Budi Pekerti",
    "Pendidikan Agama Buddha dan Budi Pekerti",
    "Pendidikan Agama Khonghucu dan Budi Pekerti",
    "Al-Qur'an Hadis",
    "Akidah Akhlak",
    "Fikih",
    "Sejarah Kebudayaan Islam (SKI)",
    "Bahasa Arab"
  ];
  agamaSubjects.forEach(s => subjectSet.add(s));
`;

content = content.replace(
  /subjectSet\.add\(ds\.mapel\);\s*\}\s*\}\);\s*return Array\.from\(subjectSet\);/,
  `subjectSet.add(ds.mapel);
    }
  });
${injection}
  return Array.from(subjectSet);`
);

fs.writeFileSync(f, content);
console.log('Patched curriculumDatabase.ts');
