// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
const fs = require('fs');

const userPhaseFJSON = {
  "phase": "F",
  "jenjang": "Kelas XI–XII SMA/MA/SMK/MAK/Program Paket C",
  "elements": {
    "Bilangan": "Barisan dan deret aritmetika/geometri; aplikasi pada bunga tunggal/majemuk; memodelkan pinjaman dan investasi dengan bunga majemuk dan anuitas; menyelidiki secara numerik/grafis pengaruh suku bunga dan periode pembayaran.",
    "Aljabar dan Fungsi": "Menentukan fungsi invers, komposisi fungsi, dan transformasi fungsi untuk memodelkan situasi dunia nyata menggunakan fungsi yang sesuai (linear, kuadrat, eksponensial).",
    "Geometri": "Menerapkan, mengidentifikasi, dan menjelaskan hubungan antara unsur-unsur lingkaran untuk menyelesaikan masalah.",
    "Analisis Data dan Peluang": "Penyelidikan statistika untuk asosiasi dua variabel kategorikal dan numerikal; memperkirakan best fit linear; membedakan asosiasi dan sebab-akibat; peluang/frekuensi harapan kejadian majemuk; kejadian saling bebas dan saling lepas; peluang bersyarat dan kejadian saling bebas menggunakan permutasi dan kombinasi."
  }
};

const userAtomicNodes = [
  {
    "id_node": "MAT-CP-F-BILANGAN",
    "level": "L2_CP",
    "topic": "CP Fase F – Bilangan",
    "phase": "F",
    "element": "Bilangan",
    "source_page": "18",
    "source_section": null,
    "source_text": "Barisan dan deret aritmetika/geometri; aplikasi pada bunga tunggal/majemuk; memodelkan pinjaman dan investasi dengan bunga majemuk dan anuitas; menyelidiki secara numerik/grafis pengaruh suku bunga dan periode pembayaran.",
    "dependencies": [],
    "retrieval_tags": ["F", "Bilangan", "CP", "kompetensi"]
  },
  {
    "id_node": "MAT-CP-F-ALJABARDANFU",
    "level": "L2_CP",
    "topic": "CP Fase F – Aljabar dan Fungsi",
    "phase": "F",
    "element": "Aljabar dan Fungsi",
    "source_page": "18",
    "source_section": null,
    "source_text": "Menentukan fungsi invers, komposisi fungsi, dan transformasi fungsi untuk memodelkan situasi dunia nyata menggunakan fungsi yang sesuai (linear, kuadrat, eksponensial).",
    "dependencies": [],
    "retrieval_tags": ["F", "Aljabar dan Fungsi", "CP", "kompetensi"]
  },
  {
    "id_node": "MAT-CP-F-GEOMETRI",
    "level": "L2_CP",
    "topic": "CP Fase F – Geometri",
    "phase": "F",
    "element": "Geometri",
    "source_page": "18",
    "source_section": null,
    "source_text": "Menerapkan, mengidentifikasi, dan menjelaskan hubungan antara unsur-unsur lingkaran untuk menyelesaikan masalah.",
    "dependencies": [],
    "retrieval_tags": ["F", "Geometri", "CP", "kompetensi"]
  },
  {
    "id_node": "MAT-CP-F-ANALISISDATA",
    "level": "L2_CP",
    "topic": "CP Fase F – Analisis Data dan Peluang",
    "phase": "F",
    "element": "Analisis Data dan Peluang",
    "source_page": "18",
    "source_section": null,
    "source_text": "Penyelidikan statistika untuk asosiasi dua variabel kategorikal dan numerikal; memperkirakan best fit linear; membedakan asosiasi dan sebab-akibat; peluang/frekuensi harapan kejadian majemuk; kejadian saling bebas dan saling lepas; peluang bersyarat dan kejadian saling bebas menggunakan permutasi dan kombinasi.",
    "dependencies": [],
    "retrieval_tags": ["F", "Analisis Data dan Peluang", "CP", "kompetensi"]
  },
  {
    "id_node": "MAT-ME-F-ALJABARDAN",
    "level": "L2_MATERI_ESENSIAL",
    "topic": "Materi esensial Aljabar dan Fungsi Fase F",
    "phase": "F",
    "element": "Aljabar dan Fungsi",
    "source_page": "21–29",
    "source_section": null,
    "source_text": "Penyelesaian masalah fungsi invers, komposisi fungsi, dan transformasi fungsi.",
    "dependencies": [],
    "retrieval_tags": ["F", "Aljabar dan Fungsi", "materi esensial", "pemetaan"]
  },
  {
    "id_node": "MAT-ME-F-BILANGAN",
    "level": "L2_MATERI_ESENSIAL",
    "topic": "Materi esensial Bilangan Fase F",
    "phase": "F",
    "element": "Bilangan",
    "source_page": "21–29",
    "source_section": null,
    "source_text": "Barisan dan deret aritmetika/geometri; bunga tunggal/majemuk; anuitas; model pinjaman/investasi.",
    "dependencies": [],
    "retrieval_tags": ["F", "Bilangan", "materi esensial", "pemetaan"]
  },
  {
    "id_node": "MAT-ME-F-PENGUKURAN",
    "level": "L2_MATERI_ESENSIAL",
    "topic": "Materi esensial Pengukuran Fase F",
    "phase": "F",
    "element": "Pengukuran",
    "source_page": "21–29",
    "source_section": null,
    "source_text": "[Data Tidak Tersedia sebagai item pemetaan terpisah pada tabel ringkas].",
    "dependencies": [],
    "retrieval_tags": ["F", "Pengukuran", "materi esensial", "pemetaan"]
  },
  {
    "id_node": "MAT-ME-F-GEOMETRI",
    "level": "L2_MATERI_ESENSIAL",
    "topic": "Materi esensial Geometri Fase F",
    "phase": "F",
    "element": "Geometri",
    "source_page": "21–29",
    "source_section": null,
    "source_text": "Hubungan unsur-unsur lingkaran.",
    "dependencies": [],
    "retrieval_tags": ["F", "Geometri", "materi esensial", "pemetaan"]
  },
  {
    "id_node": "MAT-ME-F-ANALISISDA",
    "level": "L2_MATERI_ESENSIAL",
    "topic": "Materi esensial Analisis Data dan Peluang Fase F",
    "phase": "F",
    "element": "Analisis Data dan Peluang",
    "source_page": "21–29",
    "source_section": null,
    "source_text": "Asosiasi dua variabel; best-fit line; asosiasi vs sebab-akibat; peluang majemuk; permutasi/kombinasi; peluang bersyarat; kejadian bebas/saling lepas.",
    "dependencies": [],
    "retrieval_tags": ["F", "Analisis Data dan Peluang", "materi esensial", "pemetaan"]
  },
  {
    "id_node": "MAT-CASE-001",
    "level": "L4_CONTOH_KASUS",
    "topic": "Mesin Input-Output: Fungsi Invers dan Komposisi",
    "phase": "F",
    "element": null,
    "source_page": "210–211",
    "source_section": null,
    "source_text": "Memahami fungsi invers/komposisi melalui simulasi input-output dan mengaitkannya dengan konteks produksi, ekonomi, ilmu komputer, dan teknik. | Gunakan fungsi contoh f(x)=3x−5. | Berikan input dan output untuk ditebak murid. | Murid mendiskusikan cara kerja mesin. | Murid mencoba membalik proses untuk membangun konsep invers. | Pendidik melakukan observasi sebagai asesmen. | Model/pemahaman hubungan input-output, fungsi invers dan komposisi.",
    "dependencies": [],
    "retrieval_tags": ["Mesin Input-Output: Fungsi Invers dan Komposisi", "aktivitas", "asesmen"]
  },
  {
    "id_node": "MAT-CASE-002",
    "level": "L4_CONTOH_KASUS",
    "topic": "Transformasi Fungsi dan Pemodelan Dunia Nyata",
    "phase": "F",
    "element": null,
    "source_page": "211–213",
    "source_section": null,
    "source_text": "Memilih transformasi fungsi yang tepat untuk memodifikasi model agar sesuai data/situasi nyata. | Eksplorasi grafik fungsi asal. | Bandingkan translasi, refleksi, dilatasi, rotasi, atau kombinasi. | Gunakan konteks optimasi biaya, jarak tempuh projektil, robotika, keuangan, astronomi, animasi/game. | Gunakan teknologi seperti GeoGebra untuk visualisasi. | Model fungsi termodifikasi dan interpretasi kontekstual.",
    "dependencies": [],
    "retrieval_tags": ["Transformasi Fungsi dan Pemodelan Dunia Nyata", "aktivitas", "asesmen"]
  }
];

const kbPath = 'src/data/kb_matematika.json';
let kb = JSON.parse(fs.readFileSync(kbPath, 'utf8'));

if (!kb.level_2_taksonomi_materi) kb.level_2_taksonomi_materi = {};
if (!kb.level_2_taksonomi_materi.cp_per_fase) kb.level_2_taksonomi_materi.cp_per_fase = [];

kb.level_2_taksonomi_materi.cp_per_fase = kb.level_2_taksonomi_materi.cp_per_fase.filter(cp => cp.phase !== "F");
kb.level_2_taksonomi_materi.cp_per_fase.push(userPhaseFJSON);

if (!kb.level_2_taksonomi_materi.pemetaan_materi_esensial) kb.level_2_taksonomi_materi.pemetaan_materi_esensial = {};
const pme = {
  "Aljabar dan Fungsi": { "F": "Penyelesaian masalah fungsi invers, komposisi fungsi, dan transformasi fungsi." },
  "Bilangan": { "F": "Barisan dan deret aritmetika/geometri; bunga tunggal/majemuk; anuitas; model pinjaman/investasi." },
  "Pengukuran": { "F": "[Data Tidak Tersedia sebagai item pemetaan terpisah pada tabel ringkas]." },
  "Geometri": { "F": "Hubungan unsur-unsur lingkaran." },
  "Analisis Data dan Peluang": { "F": "Asosiasi dua variabel; best-fit line; asosiasi vs sebab-akibat; peluang majemuk; permutasi/kombinasi; peluang bersyarat; kejadian bebas/saling lepas." }
};
for (const [k, v] of Object.entries(pme)) {
  if (!kb.level_2_taksonomi_materi.pemetaan_materi_esensial[k]) kb.level_2_taksonomi_materi.pemetaan_materi_esensial[k] = {};
  kb.level_2_taksonomi_materi.pemetaan_materi_esensial[k]["F"] = v["F"];
}

if (!kb.atomic_nodes) kb.atomic_nodes = [];
kb.atomic_nodes = kb.atomic_nodes.filter(n => n.phase !== "F");
kb.atomic_nodes.push(...userAtomicNodes);

fs.writeFileSync(kbPath, JSON.stringify(kb, null, 2), 'utf8');
console.log('Successfully updated kb_matematika.json with Phase F');
