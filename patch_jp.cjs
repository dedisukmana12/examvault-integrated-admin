// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
const fs = require('fs');

let f = 'src/utils/engineGenerator.ts';
let content = fs.readFileSync(f, 'utf8');

// Fix weeks calculation to respect mingguEfektif
const oldWeeksLogic = `  const WEEKS_PER_SEMESTER = 16;`;
const newWeeksLogic = `  const isFinalGrade = input.kelas === "Kelas VI" || input.kelas === "Kelas IX" || input.kelas === "Kelas XII";
  const totalWeeksPerYear = input.mingguEfektif || (isFinalGrade ? 32 : 36);
  const weeksPerSemester = Math.floor(totalWeeksPerYear / 2);
  const WEEKS_PER_SEMESTER = Math.max(1, weeksPerSemester - 2); // subtract 2 weeks for Sumatif and Cadangan
`;
content = content.replace(oldWeeksLogic, newWeeksLogic);

// Fix hardcoded 2 JP for Sumatif & Cadangan in Prota
content = content.replace(
  /tujuanPembelajaran: "Asesmen Sumatif Lingkup Materi & Tengah Semester",\s*alokasiJP: 2,/g,
  `tujuanPembelajaran: "Asesmen Sumatif Lingkup Materi & Tengah Semester",
    alokasiJP: jpPerWeek,`
);
content = content.replace(
  /tujuanPembelajaran: "Cadangan Jam Pelajaran & Pendampingan Remedial",\s*alokasiJP: 2,/g,
  `tujuanPembelajaran: "Cadangan Jam Pelajaran & Pendampingan Remedial",
    alokasiJP: jpPerWeek,`
);
content = content.replace(
  /tujuanPembelajaran: "Asesmen Sumatif Akhir Jenjang \/ Akhir Semester",\s*alokasiJP: 2,/g,
  `tujuanPembelajaran: "Asesmen Sumatif Akhir Jenjang / Akhir Semester",
    alokasiJP: jpPerWeek,`
);
content = content.replace(
  /tujuanPembelajaran: "Cadangan Jam Pelajaran & Remedial Terarah",\s*alokasiJP: 2,/g,
  `tujuanPembelajaran: "Cadangan Jam Pelajaran & Remedial Terarah",
    alokasiJP: jpPerWeek,`
);

fs.writeFileSync(f, content);
console.log('Patched JP logic in engineGenerator.ts');
