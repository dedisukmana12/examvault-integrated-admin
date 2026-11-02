// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
const fs = require('fs');

let f = 'src/utils/engineGenerator.ts';
let content = fs.readFileSync(f, 'utf8');

// Replace the flattening logic and add the dynamic JP allocation
const findFlattening = `  // Flatten all TPs with their parent element information
  const allFlattenedTPs = matchedDataset.elemenList.flatMap((el) =>
    el.tpList.map((tp) => ({
      ...tp,
      namaElemen: el.namaElemen,
      deskripsiCP: el.deskripsiCP,
      kompetensiKKO: el.kompetensiKKO,
      lingkupMateri: el.lingkupMateri,
    }))
  );`;

const newFlattening = `  // Flatten all TPs with their parent element information
  const rawFlattened = matchedDataset.elemenList.flatMap((el) =>
    el.tpList.map((tp) => ({
      ...tp,
      namaElemen: el.namaElemen,
      deskripsiCP: el.deskripsiCP,
      kompetensiKKO: el.kompetensiKKO,
      lingkupMateri: el.lingkupMateri,
    }))
  );

  const mapelLower = input.mataPelajaran.toLowerCase();
  const is4JP = mapelLower.includes("matematika") || mapelLower.includes("bahasa indonesia") || mapelLower.includes("bahasa inggris");
  const jpPerWeek = is4JP ? 4 : 2;
  const WEEKS_PER_SEMESTER = 16;

  let ganjilTPs = rawFlattened.filter((tp) => tp.semester === "GANJIL");
  let genapTPs = rawFlattened.filter((tp) => tp.semester === "GENAP");

  if (ganjilTPs.length === 0 && genapTPs.length === 0) {
    const half = Math.ceil(rawFlattened.length / 2);
    ganjilTPs = rawFlattened.slice(0, half);
    ganjilTPs.forEach(t => t.semester = "GANJIL");
    genapTPs = rawFlattened.slice(half);
    genapTPs.forEach(t => t.semester = "GENAP");
  }

  const ganjilLen = Math.max(1, ganjilTPs.length);
  const genapLen = Math.max(1, genapTPs.length);
  const ganjilWeeks = ganjilTPs.map(() => Math.floor(WEEKS_PER_SEMESTER / ganjilLen));
  let ganjilRem = WEEKS_PER_SEMESTER % ganjilLen;
  for (let i = 0; i < ganjilRem; i++) if (ganjilWeeks[i] !== undefined) ganjilWeeks[i]++;

  const genapWeeks = genapTPs.map(() => Math.floor(WEEKS_PER_SEMESTER / genapLen));
  let genapRem = WEEKS_PER_SEMESTER % genapLen;
  for (let i = 0; i < genapRem; i++) if (genapWeeks[i] !== undefined) genapWeeks[i]++;

  ganjilTPs.forEach((tp, i) => {
    tp.weekCount = ganjilWeeks[i];
    tp.alokasiJP = ganjilWeeks[i] * jpPerWeek;
  });
  genapTPs.forEach((tp, i) => {
    tp.weekCount = genapWeeks[i];
    tp.alokasiJP = genapWeeks[i] * jpPerWeek;
  });

  const allFlattenedTPs = [...ganjilTPs, ...genapTPs];
`;

content = content.replace(findFlattening, newFlattening);

// Replace the ganjilTPs and genapTPs filtering since they are already separated?
// No, the original code filters them again using: 
// const ganjilTPs = tpList.filter((tp) => tp.semester === "GANJIL");
// which is perfectly fine.

// Now modify the Prosem mapping logic
const prosemGanjilFind = `  const doc4ProsemGanjil: Doc4Item[] = ganjilTPs.map((tp, idx) => {
    return {
      no: idx + 1,
      kodeTP: tp.kodeTP,
      tujuanPembelajaran: tp.teksTP,
      alokasiJP: tp.alokasiJP,
      distribusiBulan: bulanGanjil.map((bln, bIdx) => {
        if (bIdx === idx) {
          return {
            bulan: bln,
            minggu: [Math.floor(tp.alokasiJP / 2), Math.ceil(tp.alokasiJP / 2), "", "", ""],
          };
        } else if (bIdx === idx + 1 && tp.alokasiJP > 6) {
          return {
            bulan: bln,
            minggu: ["", "", 2, 2, ""],
          };
        }
        return {
          bulan: bln,
          minggu: ["", "", "", "", ""],
        };
      }),
      keterangan: "Tuntas pada semester ganjil",
    };
  });`;

const prosemGenapFind = `  const doc4ProsemGenap: Doc4Item[] = genapTPs.map((tp, idx) => {
    return {
      no: idx + 1,
      kodeTP: tp.kodeTP,
      tujuanPembelajaran: tp.teksTP,
      alokasiJP: tp.alokasiJP,
      distribusiBulan: bulanGenap.map((bln, bIdx) => {
        if (bIdx === idx) {
          return {
            bulan: bln,
            minggu: [Math.floor(tp.alokasiJP / 2), Math.ceil(tp.alokasiJP / 2), "", "", ""],
          };
        }
        return {
          bulan: bln,
          minggu: ["", "", "", "", ""],
        };
      }),
      keterangan: "Tuntas pada semester genap",
    };
  });`;

const prosemGanjilReplace = `  let currentMonthIdxGanjil = 0;
  let currentWeekIdxGanjil = 0;
  const doc4ProsemGanjil: Doc4Item[] = ganjilTPs.map((tp, idx) => {
    const distribusi = bulanGanjil.map(bln => ({
      bulan: bln,
      minggu: ["", "", "", "", ""] as [number | string, number | string, number | string, number | string, number | string]
    }));
    
    let wCount = (tp as any).weekCount || 2;
    for (let i = 0; i < wCount; i++) {
      if (currentMonthIdxGanjil > 5) break;
      distribusi[currentMonthIdxGanjil].minggu[currentWeekIdxGanjil] = jpPerWeek;
      currentWeekIdxGanjil++;
      if (currentWeekIdxGanjil > 3) {
        currentWeekIdxGanjil = 0;
        currentMonthIdxGanjil++;
      }
    }

    return {
      no: idx + 1,
      kodeTP: tp.kodeTP,
      tujuanPembelajaran: tp.teksTP,
      alokasiJP: tp.alokasiJP,
      distribusiBulan: distribusi,
      keterangan: "Tuntas pada semester ganjil",
    };
  });`;

const prosemGenapReplace = `  let currentMonthIdxGenap = 0;
  let currentWeekIdxGenap = 0;
  const doc4ProsemGenap: Doc4Item[] = genapTPs.map((tp, idx) => {
    const distribusi = bulanGenap.map(bln => ({
      bulan: bln,
      minggu: ["", "", "", "", ""] as [number | string, number | string, number | string, number | string, number | string]
    }));
    
    let wCount = (tp as any).weekCount || 2;
    for (let i = 0; i < wCount; i++) {
      if (currentMonthIdxGenap > 5) break;
      distribusi[currentMonthIdxGenap].minggu[currentWeekIdxGenap] = jpPerWeek;
      currentWeekIdxGenap++;
      if (currentWeekIdxGenap > 3) {
        currentWeekIdxGenap = 0;
        currentMonthIdxGenap++;
      }
    }

    return {
      no: idx + 1,
      kodeTP: tp.kodeTP,
      tujuanPembelajaran: tp.teksTP,
      alokasiJP: tp.alokasiJP,
      distribusiBulan: distribusi,
      keterangan: "Tuntas pada semester genap",
    };
  });`;

content = content.replace(prosemGanjilFind, prosemGanjilReplace);
content = content.replace(prosemGenapFind, prosemGenapReplace);

fs.writeFileSync(f, content);
console.log('Patched engineGenerator.ts');
