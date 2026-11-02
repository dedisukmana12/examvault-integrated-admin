// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import { PathwayType, FaseType } from "../types";
import { FASE_A_DATASETS } from "./faseADataset";
import { FASE_B_DATASETS } from "./faseBDataset";
import { FASE_C_DATASETS } from "./faseCDataset";
import { FASE_D_DATASETS } from "./faseDDataset";
import { FASE_E_DATASETS } from "./faseEDataset";
import { FASE_F_DATASETS } from "./faseFDataset";
import { MATH_JSON_DATASETS } from "./mathJsonDataset";
import kbMatematika from "./kb_matematika.json";

export const KB_MATEMATIKA = kbMatematika;

export interface CPDataset {
  fase: FaseType;
  kelasDefault: string;
  mapel: string;
  jalurApplicable: PathwayType[];
  elemenList: {
    namaElemen: string;
    deskripsiCP: string;
    kompetensiKKO: string;
    lingkupMateri: string;
    tpList: {
      kodeTP: string;
      teksTP: string;
      alokasiJP: number;
      semester: "GANJIL" | "GENAP";
      prasyarat: string;
      dimensiKarakterDinas: string[];
      dimensiKarakterKemenag: string[];
      lingkupMateri?: string;
      unitTitle?: string;
      // Detail for Modul Ajar, LKPD, and Soal
      konteksPembelajaran: {
        stimulus: string;
        stimulusKemenag?: string;
        masalahNyata: string;
        kegiatanEksplorasi: string[];
        pertanyaanHOTS: { level: string; teks: string }[];
        rubrikIndikator: { kriteria: string; baru: string; layak: string; cakap: string; mahir: string }[];
        soalPGK: {
          pertanyaan: string;
          pilihan: { kode: string; teks: string; isCorrect: boolean }[];
          kunci?: string;
          pembahasan?: string;
        };
        soalUraian: {
          level: string;
          pertanyaan: string;
          kunci?: string;
          pembahasan?: string;
          rubrik?: { kriteria: string; skor: number }[];
        };
      };
    }[];
  }[];
}

export const REGULASI_CONSTANTS = {
  DINAS: {
    title: "JALUR DINAS PENDIDIKAN (KEMENDIKDASMEN)",
    subtitle: "Murni Standar Nasional 2025/2026",
    hukum: [
      "Permendikdasmen No. 10 Tahun 2025 (Standar Kompetensi Lulusan)",
      "Permendikdasmen No. 13 Tahun 2025 (Struktur Kurikulum Nasional)",
      "Keputusan Kepala BSKAP No. 046/H/KR/2025 (Capaian Pembelajaran)",
      "Keputusan Kepala BSKAP No. 058/H/KR/2025 (8 Dimensi Profil Lulusan)",
    ],
    karakterTitle: "8 Dimensi Profil Lulusan SKL 2025",
    karakterItems: [
      "Keimanan & Ketakwaan thd Tuhan YME",
      "Kewargaan",
      "Penalaran Kritis",
      "Kreativitas",
      "Kolaborasi",
      "Kemandirian",
      "Kesehatan",
      "Komunikasi",
    ],
    pedagogis: "Pembelajaran Mendalam (Deep Learning)",
    prinsip: "Mindful (Berkesadaran), Meaningful (Bermakna), Joyful (Menggembirakan)",
    siklus: "Memahami, Mengaplikasikan, Merefleksikan (4 Olah: Pikir, Hati, Rasa, Raga)",
  },
  KEMENAG: {
    title: "JALUR KEMENTERIAN AGAMA (KEMENAG / MADRASAH)",
    subtitle: "Integrasi Fondasi Nasional & Kurikulum Berbasis Cinta (KBC)",
    hukum: [
      "Fondasi Nasional: Permendikdasmen No. 10 Tahun 2025 & BSKAP No. 046/H/KR/2025",
      "KMA No. 1503 Tahun 2025 (Kurikulum Madrasah MI, MTs, MA/MAK)",
      "Keputusan Dirjen Pendis No. 6077 Tahun 2025 (Panduan Kurikulum Berbasis Cinta / KBC)",
    ],
    karakterTitle: "8 Dimensi SKL + Nilai Panca Cinta KBC & PPRA",
    karakterItems: [
      "8 Dimensi SKL Nasional",
      "Panca Cinta: Cinta Allah & Rasul-Nya, Cinta Ilmu, Cinta Lingkungan, Cinta Diri & Sesama Manusia, Cinta Tanah Air",
      "Profil Pelajar Rahmatan lil Alamin (PPRA): Ta'addub, Tawassut, Tasamuh, Muwatanah",
    ],
    pedagogis: "Deep Learning Terintegrasi Kurikulum Berbasis Cinta (KBC)",
    prinsip: "Teologi Cinta (Jamaliyah / Eros-Oriented), Koneksi sebelum Koreksi",
    siklus: "Sintaks FIDS: Feel (Tadabbur Batin), Imagine (Kajian Ilmiah Cinta), Do (Aksi Nyata Kasih), Share (Inspirasi & Refleksi)",
  },
};

export function getSubjectsByFase(fase: FaseType, jalur?: PathwayType): string[] {
  const filtered = CURRICULUM_DATABASE.filter((ds) => {
    if (ds.fase !== fase) return false;
    if (jalur && ds.jalurApplicable && !ds.jalurApplicable.includes(jalur)) return false;
    return true;
  });

  const subjectSet = new Set<string>();
  filtered.forEach((ds) => {
    if (ds.mapel) {
      subjectSet.add(ds.mapel);
    }
  });

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


  return Array.from(subjectSet);
}

export const CURRICULUM_DATABASE: CPDataset[] = [
  // Dataset Matematika dari file kb_matematika.json (Injeksi Dinamis)
  ...MATH_JSON_DATASETS,

  // 0. Capaian Pembelajaran Fase A (Kelas I - II SD/MI) - BSKAP No. 046/H/KR/2025
  ...FASE_A_DATASETS,

  // 1. Capaian Pembelajaran Fase B (Kelas III - IV SD/MI) - BSKAP No. 046/H/KR/2025
  ...FASE_B_DATASETS,

  // 2. Capaian Pembelajaran Fase C (Kelas V - VI SD/MI) - BSKAP No. 046/H/KR/2025
  ...FASE_C_DATASETS,

  // 3. Capaian Pembelajaran Fase D (Kelas VII - IX SMP/MTs) - BSKAP No. 046/H/KR/2025
  ...FASE_D_DATASETS,

  // 4. Capaian Pembelajaran Fase E (Kelas X SMA/MA/SMK) - BSKAP No. 046/H/KR/2025
  ...FASE_E_DATASETS,

  // 5. Capaian Pembelajaran Fase F (Kelas XI - XII SMA/MA/SMK) - BSKAP No. 046/H/KR/2025
  ...FASE_F_DATASETS,

  // 1. IPAS Fase B (Kelas IV) - SD/MI
  {
    fase: "Fase B",
    kelasDefault: "Kelas IV",
    mapel: "IPAS",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Pemahaman IPAS (Sains dan Sosial)",
        deskripsiCP:
          "Peserta didik memahami bentuk dan fungsi bagian tubuh tumbuhan, proses fotosintesis serta kaitannya dengan makhluk hidup lain; menganalisis perubahan wujud zat dan energi dalam kehidupan sehari-hari; mendeskripsikan keragaman hayati, kearifan lokal, dan interaksi sosial masyarakat.",
        kompetensiKKO: "Mengidentifikasi, Menganalisis, Membuktikan, Mendemonstrasikan",
        lingkupMateri: "Bagian Tubuh Tumbuhan, Fotosintesis, Wujud Zat & Energi, Ekosistem Lokal",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP: "Mengidentifikasi bagian-bagian tubuh tumbuhan (akar, batang, daun, bunga) dan mengaitkan fungsinya dengan proses kelangsungan hidup tumbuhan secara komprehensif.",
            alokasiJP: 10,
            semester: "GANJIL",
            prasyarat: "Mengenal jenis-jenis tumbuhan di lingkungan sekitar",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian", "Keimanan & Ketakwaan thd Tuhan YME"],
            dimensiKarakterKemenag: ["Penalaran Kritis", "Cinta Ilmu", "Cinta Lingkungan & Ciptaan Allah"],
            konteksPembelajaran: {
              stimulus: "Di halaman sekolah, ditemukan beberapa tanaman cabai yang layu dan mengering meskipun disiram setiap hari di bagian daunnya saja. Setelah dicermati, bagian tanahnya mengeras dan perakarannya membusuk karena kekurangan aerasi.",
              stimulusKemenag: "Merenungi firman Allah dalam QS. Al-An'am: 99 tentang penciptaan tumbuh-tumbuhan hijau yang menumbuhkan butir yang banyak. Tumbuhan adalah amanah ciptaan Tuhan yang memerlukan kasih sayang manusia dalam merawat akar, batang, dan daunnya.",
              masalahNyata: "Mengapa pemberian air hanya pada daun tidak menyelamatkan tanaman cabai yang akarnya terganggu?",
              kegiatanEksplorasi: [
                "Mengamati sampel akar serabut dan tunggang menggunakan kaca pembesar.",
                "Melakukan eksperimen perendaman batang seledri pada air berwarna untuk membuktikan fungsi xilem.",
                "Mencatat laju penyerapan cairan dan perubahan warna daun selama 30 menit.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Berdasarkan hasil uji batang seledri dengan air berwarna, analisislah bagaimana gangguan pada sistem pembuluh xilem dapat mempengaruhi proses fotosintesis pada daun!" },
                { level: "C5 - Evaluasi", teks: "Jika seorang petani memotong seluruh daun dari tanaman buah yang sedang berbunga lebat, evaluasilah dampak yang akan terjadi pada pembentukan buah serta kelangsungan hidup tanaman tersebut!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menjelaskan fungsi masing-masing bagian organ tumbuhan secara terpadu",
                  baru: "Menyebutkan nama bagian tubuh tumbuhan namun belum dapat menguraikan fungsi biologisnya.",
                  layak: "Mampu menjelaskan fungsi akar dan daun secara terpisah namun belum menghubungkannya dengan sistem vaskular.",
                  cakap: "Mampu menguraikan fungsi akar, batang, daun, dan bunga secara akurat sesuai standar Capaian Pembelajaran Fase B.",
                  mahir: "Mampu menganalisis keterkaitan struktural antar-organ dan memprediksi dampak kerusakan organ terhadap fisiologi tumbuhan secara ilmiah.",
                },
                {
                  kriteria: "Melakukan penyelidikan eksperimen daya serap pembuluh batang",
                  baru: "Mengamati demonstrasi tanpa mencatat data perubahan fisik pada sampel tumbuhan.",
                  layak: "Mencatat perubahan warna pada batang namun kurang tepat dalam menarik kesimpulan fungsional.",
                  cakap: "Melaksanakan prosedur eksperimen dengan cermat, mencatat bukti fisik, dan menyimpulkan fungsi pembuluh angkut.",
                  mahir: "Menyajikan data eksperimen terperinci serta merekomendasikan solusi aplikatif untuk teknik penyiraman tanaman efisien.",
                },
              ],
              soalPGK: {
                pertanyaan: "Perhatikan fungsi organ tumbuhan berikut! Manakah pernyataan yang BENAR mengenai hubungan struktur dan fungsi organ tumbuhan? (Pilihlah semua jawaban yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Xilem pada batang berfungsi mengangkut air dan mineral dari tanah menuju ke daun.", isCorrect: true },
                  { kode: "B", teks: "Stomata pada permukaan daun berfungsi sebagai tempat pertukaran gas oksigen dan karbon dioksida.", isCorrect: true },
                  { kode: "C", teks: "Akar tunggang hanya berfungsi menyimpan cadangan makanan dan tidak dapat menyerap air.", isCorrect: false },
                  { kode: "D", teks: "Floem mengedarkan hasil fotosintesis dari daun ke seluruh bagian tubuh tumbuhan.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "Pilihan A, B, dan D adalah benar. Xilem mengangkut air/unsur hara ke daun, stomata melakukan pertukaran gas pernapasan & fotosintesis, dan floem mengedarkan fotosintat. Pilihan C salah karena semua akar berfungsi menyerap air.",
              },
              soalUraian: {
                level: "C4 (Analisis)",
                pertanyaan: "Sekelompok siswa melakukan eksperimen dengan menempatkan dua pot tanaman sejenis: Pot A diletakkan di tempat terbuka yang terkena sinar matahari cukup dan disiram teratur, sedangkan Pot B diletakkan di dalam kardus gelap tertutup tanpa cahaya selama 7 hari. Analisislah perubahan fisik yang akan terjadi pada Pot B dan jelaskan penyebab ilmiahnya!",
                kunci: "Tanaman pada Pot B akan mengalami etiolasi: batangnya tumbuh memanjang lemah dan pucat (kekurangan klorofil), daun berwarna kekuningan/kering, dan tidak dapat melakukan fotosintesis karena ketiadaan foton cahaya matahari sebagai aktivator klorofil. Akibatnya, tanaman kehabisan energi glukosa dan berpotensi mati.",
                pembahasan: "Fotosintesis membutuhkan cahaya matahari untuk merombak air dan CO2 menjadi glukosa dan O2. Tanpa cahaya, klorofil tidak berfungsi dan tanaman akan layu mengalami krisis energi.",
                rubrik: [
                  { kriteria: "Menjelaskan gejala fisik (batang pucat/panjang/daun kuning)", skor: 5 },
                  { kriteria: "Mengaitkan ketiadaan cahaya dengan terhentinya reaksi fotosintesis", skor: 10 },
                  { kriteria: "Menyimpulkan dampak krisis energi glukosa pada kelangsungan tanaman", skor: 5 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.02",
            teksTP: "Menganalisis kebutuhan tumbuhan dalam proses fotosintesis (cahaya, air, klorofil, karbon dioksida) serta membuktikan hasil fotosintesis menghasilkan glukosa dan oksigen.",
            alokasiJP: 10,
            semester: "GANJIL",
            prasyarat: "TP.01 - Memahami bagian organ tumbuhan dan fungsinya",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kolaborasi", "Kreativitas"],
            dimensiKarakterKemenag: ["Penalaran Kritis", "Cinta Ilmu", "Cinta Lingkungan & Kebaikan Semesta"],
            konteksPembelajaran: {
              stimulus: "Pohon-pohon besar di taman kota yang rimbun memberikan udara sejuk dan segar di siang hari bagi warga yang berteduh di bawahnya.",
              stimulusKemenag: "Fotosintesis adalah wujud rahmat Ilahi yang menyuplai oksigen bagi seluruh kehidupan di muka bumi tanpa menuntut bayaran, sebuah teladan kepedulian tulus (cinta tanpa pamrih).",
              masalahNyata: "Mengapa udara di bawah pohon terasa lebih segar di siang hari dibandingkan di dalam ruangan tertutup?",
              kegiatanEksplorasi: [
                "Uji Ingenhousz sederhana menggunakan tanaman air Hydrilla dalam corong kaca di bawah sinar matahari.",
                "Mengamati dan menghitung pembentukan gelembung oksigen tiap 5 menit.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Bagaimana laju pembentukan gelembung oksigen pada uji Ingenhousz jika ditambahkan natrium bikarbonat (sumber CO2) ke dalam air?" },
                { level: "C6 - Kreasi", teks: "Rancanglah sebuah model penghijauan ruang kelas terpadu untuk memaksimalkan penyerapan CO2 dan produksi oksigen alami!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menganalisis reaksi pembentukan oksigen dalam fotosintesis",
                  baru: "Mengetahui istilah fotosintesis namun belum memahami faktor reaktan dan produknya.",
                  layak: "Mampu menyebutkan bahan fotosintesis namun belum dapat membuktikan hasil oksigen.",
                  cakap: "Mampu menganalisis proses fotosintesis dan membuktikan dihasilkannya oksigen melalui data eksperimen.",
                  mahir: "Mampu memformulasi faktor-faktor pembatas fotosintesis dan dampaknya terhadap daur karbon global.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah faktor-faktor yang secara langsung mempengaruhi kecepatan laju fotosintesis pada tumbuhan hijau? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Intensitas cahaya matahari yang mengenai kloroplas daun.", isCorrect: true },
                  { kode: "B", teks: "Konsentrasi gas karbon dioksida di udara sekitar.", isCorrect: true },
                  { kode: "C", teks: "Ketersediaan air yang diserap melalui jaringan perakaran.", isCorrect: true },
                  { kode: "D", teks: "Tingkat kebisingan suara kendaraan bermotor di jalan raya.", isCorrect: false },
                ],
                kunci: "A, B, dan C",
                pembahasan: "Faktor utama fotosintesis adalah cahaya, CO2, air, dan suhu optimal. Kebisingan suara tidak mempengaruhi reaksi fotokimia.",
              },
              soalUraian: {
                level: "C5 (Evaluasi)",
                pertanyaan: "Evaluasilah dampak deforestasi (penebangan hutan secara liar) terhadap keseimbangan siklus oksigen dan kenaikan suhu bumi (pemanasan global) berdasarkan konsep fotosintesis!",
                kunci: "Hutan merupakan paru-paru dunia yang menyerap miliaran ton gas karbon dioksida (CO2) melalui fotosintesis dan melepaskan oksigen (O2). Penebangan hutan menyebabkan akumulasi gas rumah kaca CO2 di atmosfer meningkat drastis, memerangkap panas matahari sehingga memicu pemanasan global, sekaligus menurunkan pasokan oksigen alami bagi biosfer.",
                pembahasan: "Berkurangnya populasi pohon merusak daur karbon alami sehingga meningkatkan efek rumah kaca.",
                rubrik: [
                  { kriteria: "Menjelaskan peran pohon sebagai penyerap CO2 dan produsen O2", skor: 8 },
                  { kriteria: "Mengaitkan penumpukan CO2 dengan efek rumah kaca dan kenaikan suhu bumi", skor: 12 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.03",
            teksTP: "Menganalisis wujud zat (padat, cair, gas) serta mendemonstrasikan perubahan wujud zat yang dapat kembali (reversibel) dan tidak dapat kembali dalam kehidupan sehari-hari.",
            alokasiJP: 10,
            semester: "GANJIL",
            prasyarat: "Mengenal berbagai benda di sekitar rumah dan sekolah",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas", "Kolaborasi"],
            dimensiKarakterKemenag: ["Penalaran Kritis", "Cinta Ilmu", "Kemandirian"],
            konteksPembelajaran: {
              stimulus: "Es batu yang diletakkan di ruang terbuka mencair menjadi air, namun ketika dimasukkan ke dalam freezer kembali membeku menjadi es padat.",
              stimulusKemenag: "Keteraturan perubahan zat di alam semesta mencerminkan sunnatullah yang penuh hikmah dan keseimbangan luar biasa.",
              masalahNyata: "Mengapa lilin yang meleleh saat dibakar dapat membeku kembali, sedangkan sumbu lilin yang terbakar menjadi abu tidak dapat kembali?",
              kegiatanEksplorasi: [
                "Eksperimen pelelehan lilin dan pemanasan cokelat batangan.",
                "Pembakaran kertas menjadi abu dan perbandingan sifat kimianya.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Klasifikasikan perubahan fisika dan perubahan kimia pada peristiwa memasak telur dan merebus air hingga menguap!" },
                { level: "C5 - Evaluasi", teks: "Bagaimana penerapan perubahan wujud zat dalam pembuatan garam tradisional oleh masyarakat pesisir?" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Mengidentifikasi sifat partikel dan perubahan wujud zat",
                  baru: "Hanya dapat menyebutkan 3 wujud benda tanpa memahami konsep kalor.",
                  layak: "Mampu menjelaskan peristiwa mencair dan membeku.",
                  cakap: "Mampu membedakan perubahan wujud yang menyerap kalor dan melepaskan kalor secara akurat.",
                  mahir: "Mampu merekayasa solusi teknologi sederhana berbasis siklus perubahan wujud zat.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah peristiwa perubahan wujud zat yang terjadi akibat pelepasan kalor (pendinginan)? (Pilihlah semua yang benar!)",
                pilihan: [
                  { kode: "A", teks: "Air di dalam cetakan membeku menjadi es di dalam freezer.", isCorrect: true },
                  { kode: "B", teks: "Titik-titik embun yang terbentuk di dedaunan pada pagi hari (mengembun).", isCorrect: true },
                  { kode: "C", teks: "Mentega yang meleleh saat dipanaskan di atas wajan penggorengan.", isCorrect: false },
                  { kode: "D", teks: "Uap air yang berubah menjadi butiran salju di awan (mengkristal).", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "Membeku, mengembun, dan mengkristal adalah peristiwa eksotermik (melepaskan kalor). Sedangkan meleleh membutuhkan kalor.",
              },
              soalUraian: {
                level: "C4 (Analisis)",
                pertanyaan: "Jelaskan perbedaan mendasar antara perubahan fisika pada es batu yang mencair dengan perubahan kimia pada kertas yang dibakar menjadi abu!",
                kunci: "Perubahan es mencair adalah perubahan fisika karena tidak menghasilkan zat baru (tetap senyawa H2O) dan bersifat reversibel (dapat dibekukan kembali). Sedangkan kertas yang dibakar adalah perubahan kimia karena menghasilkan zat baru (karbon/abu, gas CO2, dan uap air) serta bersifat ireversibel (tidak dapat diubah kembali menjadi kertas).",
                pembahasan: "Perubahan fisika hanya mengubah wujud tanpa mengubah susunan partikel molekul, sedangkan perubahan kimia menghasilkan senyawa baru.",
                rubrik: [
                  { kriteria: "Menyebutkan ada/tidaknya zat baru yang dihasilkan", skor: 10 },
                  { kriteria: "Menyebutkan sifat reversibilitas (dapat/tidak kembali ke bentuk semula)", skor: 10 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.04",
            teksTP: "Mengidentifikasi ragam bentuk energi (kinetik, potensial, listrik, panas, cahaya) serta mendemonstrasikan proses transformasi energi dalam teknologi ramah lingkungan.",
            alokasiJP: 10,
            semester: "GENAP",
            prasyarat: "TP.03 - Memahami wujud zat dan pengaruh kalor",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas", "Kemandirian"],
            dimensiKarakterKemenag: ["Penalaran Kritis", "Cinta Lingkungan", "Cinta Ilmu"],
            konteksPembelajaran: {
              stimulus: "Panel surya di atap gedung sekolah mengubah sinar matahari langsung menjadi energi listrik untuk menyalakan lampu kelas.",
              stimulusKemenag: "Pemanfaatan energi matahari yang bersih merupakan wujud nyata menjaga bumi (khilafah fil ardh) dari polusi dan kerusakan lingkungan.",
              masalahNyata: "Bagaimana energi cahaya matahari yang tidak berwujud dapat menyalakan kipas angin di ruang kelas?",
              kegiatanEksplorasi: [
                "Merangkai miniatur kincir angin dan mobil tenaga pegas.",
                "Mengukur tegangan mini solar cell menggunakan multimeter saat terkena sinar lampu.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Analisislah rantai perubahan bentuk energi yang terjadi pada Pembangkit Listrik Tenaga Air (PLTA) mulai dari air di waduk hingga lampu di rumah menyala!" },
                { level: "C6 - Kreasi", teks: "Rancanglah alat sederhana yang memanfaatkan energi angin atau panas matahari untuk mengeringkan hasil panen padi!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menjelaskan hukum kekekalan dan transformasi energi",
                  baru: "Mengenal nama energi tanpa mampu menunjukkan contoh perubahannya.",
                  layak: "Mampu menjelaskan perubahan energi listrik menjadi panas.",
                  cakap: "Mampu menganalisis transformasi energi bertingkat pada perangkat teknologi sehari-hari.",
                  mahir: "Mampu merancang purwarupa pemanen energi terbarukan ramah lingkungan.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah contoh perubahan energi listrik menjadi energi kinetik (gerak) pada peralatan rumah tangga? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Baling-baling kipas angin yang berputar saat sakelar dinyalakan.", isCorrect: true },
                  { kode: "B", teks: "Mesin blender yang memutar pisau penghalus buah.", isCorrect: true },
                  { kode: "C", teks: "Setrika listrik yang menghasilkan panas untuk merapikan pakaian.", isCorrect: false },
                  { kode: "D", teks: "Motor mesin cuci yang memutar tabung pencucian pakaian.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "Kipas angin, blender, dan mesin cuci mengubah energi listrik menjadi gerak mekanik. Setrika mengubah energi listrik menjadi energi termal (panas).",
              },
              soalUraian: {
                level: "C4 (Analisis)",
                pertanyaan: "Uraikan transformasi energi yang terjadi saat seseorang menyalakan senter bertenaga baterai hingga menghasilkan cahaya yang menerangi ruangan gelap!",
                kunci: "Energi kimia yang tersimpan di dalam baterai -> diubah menjadi energi listrik saat sakelar tertutup mengalirkan elektron -> energi listrik mengalir ke filamen/lampu LED -> diubah menjadi energi cahaya (dan sedikit energi panas/termal).",
                pembahasan: "Alur transformasi: Kimia -> Listrik -> Cahaya + Kalor.",
                rubrik: [
                  { kriteria: "Menyebutkan energi awal kimia pada baterai", skor: 5 },
                  { kriteria: "Menyebutkan energi listrik sebagai perantara", skor: 8 },
                  { kriteria: "Menyebutkan energi akhir cahaya dan kalor", skor: 7 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.05",
            teksTP: "Menganalisis interaksi antar-makhluk hidup dalam jaring-jaring makanan serta mengevaluasi dampak ketidakseimbangan ekosistem akibat aktivitas perburuan liar.",
            alokasiJP: 10,
            semester: "GENAP",
            prasyarat: "TP.02 & TP.04 - Memahami aliran energi dan fotosintesis",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kewargaan", "Kolaborasi"],
            dimensiKarakterKemenag: ["Cinta Lingkungan & Sesama Makhluk", "Cinta Tanah Air", "PPRA: Berimbang (Tawazun)"],
            konteksPembelajaran: {
              stimulus: "Peningkatan populasi hama tikus di area persawahan desa terjadi setelah maraknya perburuan burung hantu dan ular sawah oleh oknum tidak bertanggung jawab.",
              stimulusKemenag: "Menjaga keseimbangan ekosistem adalah amanah suci agar alam tidak rusak (fasad fil ardh), sesuai prinsip keharmonisan cinta lingkungan.",
              masalahNyata: "Mengapa pembasmian ular sawah justru mengakibatkan petani gagal panen padi?",
              kegiatanEksplorasi: [
                "Menyusun diagram jaring-jaring makanan ekosistem sawah dan hutan.",
                "Simulasi piramida makanan dan simulasi kepunahan predator puncak.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Prediksikan dampak berantai pada populasi elang dan tanaman padi jika populasi katak di sawah menurun drastis akibat pestisida!" },
                { level: "C5 - Evaluasi", teks: "Evaluasilah keefektifan pengendalian hama hayati menggunakan burung hantu (Tyto alba) dibandingkan penyemprotan racun kimia sintetik!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menganalisis rantai makanan dan dinamika populasi",
                  baru: "Mengetahui istilah rantai makanan tanpa memahami peran dekomposer.",
                  layak: "Mampu menyusun rantai makanan sederhana 3 tingkatan.",
                  cakap: "Mampu menganalisis jaring-jaring makanan kompleks dan memprediksi dampak gangguan ekologis.",
                  mahir: "Mampu merancang strategi restorasi ekosistem berbasis konservasi kearifan lokal.",
                },
              ],
              soalPGK: {
                pertanyaan: "Dalam ekosistem padang rumput: Rumput -> Belalang -> Katak -> Ular -> Burung Elang. Jika populasi ular diburu hingga habis, apa dampak ekologis yang akan terjadi? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Populasi katak akan mengalami lonjakan peningkatan karena tidak ada pemangsa langsung.", isCorrect: true },
                  { kode: "B", teks: "Populasi burung elang berpotensi menurun karena kekurangan salah satu sumber mangsa utamanya.", isCorrect: true },
                  { kode: "C", teks: "Populasi belalang akan meningkat drastis melebihi batas daya dukung lingkungan.", isCorrect: false },
                  { kode: "D", teks: "Populasi belalang justru akan tertekan dan berkurang karena dimangsa oleh populasi katak yang bertambah banyak.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "Tanpa ular, katak meningkat pesat (A). Banyaknya katak memangsa lebih banyak belalang sehingga belalang turun (D). Elang kehilangan mangsa ular sehingga populasinya terancam (B).",
              },
              soalUraian: {
                level: "C5 (Evaluasi)",
                pertanyaan: "Di sebuah danau terjadi pencemaran limbah detergen yang menyebabkan ledakan alga (eutrofikasi) hingga menutupi seluruh permukaan air. Evaluasilah apa yang akan terjadi pada populasi ikan di dasar danau dan jelaskan alasan biologisnya!",
                kunci: "Populasi ikan di dasar danau akan mati massal akibat kekurangan oksigen (anoksia). Lapisan alga tebal menghalangi sinar matahari masuk ke dalam air sehingga tumbuhan bawah air tidak bisa berfotosintesis. Ketika alga mati, bakteri pengurai (dekomposer) mengonsumsi oksigen terlarut dalam air dalam jumlah masif untuk proses pembusukan, membuat kadar DO (Dissolved Oxygen) anjlok drastis.",
                pembahasan: "Eutrofikasi memicu hipoksia/anoksia air yang membunuh biota perairan aerobik.",
                rubrik: [
                  { kriteria: "Menyebutkan terhalangnya cahaya matahari bagi fotosintesis dasar air", skor: 7 },
                  { kriteria: "Menjelaskan konsumsi oksigen terlarut oleh dekomposer", skor: 8 },
                  { kriteria: "Menyimpulkan kematian biota ikan akibat kekurangan oksigen", skor: 5 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.06",
            teksTP: "Mendeskripsikan keanekaragaman hayati dan kearifan lokal masyarakat Indonesia dalam menjaga kelestarian lingkungan hidup dan sumber daya alam hayati.",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "TP.05 - Memahami jaring-jaring makanan dan ekosistem",
            dimensiKarakterDinas: ["Kewargaan", "Kreativitas", "Kolaborasi", "Komunikasi"],
            dimensiKarakterKemenag: ["Cinta Tanah Air", "Cinta Lingkungan", "PPRA: Keteladanan (Qudwah)"],
            konteksPembelajaran: {
              stimulus: "Masyarakat adat suku Baduy dan tradisi Lubuk Larangan di Sumatera menjaga sungai dan hutan lindung dengan aturan adat yang ketat.",
              stimulusKemenag: "Kearifan lokal bangsa Indonesia merupakan cerminan luhur rasa cinta tanah air dan pengamalan nilai-nilai keagamaan yang melarang perusakan bumi.",
              masalahNyata: "Bagaimana tradisi lokal nenek moyang mampu mencegah banjir dan kekeringan lebih efektif daripada aturan formal?",
              kegiatanEksplorasi: [
                "Studi kasus dokumenter tradisi konservasi hutan adat Indonesia.",
                "Penyusunan poster aksi kampanye pelestarian satwa endemik lokal.",
              ],
              pertanyaanHOTS: [
                { level: "C5 - Evaluasi", teks: "Evaluasilah peranan sistem Subak di Bali dalam menjaga kedaulatan air dan harmoni ekologis pertanian!" },
                { level: "C6 - Kreasi", teks: "Buatlah usulan program kearifan lokal sekolah untuk mengurangi sampah plastik sekali pakai!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menjelaskan kearifan lokal dan konservasi hayati",
                  baru: "Menyebutkan nama flora/fauna endemik tanpa mengerti nilai konservasinya.",
                  layak: "Mampu menjelaskan satu contoh tradisi adat perlindungan hutan.",
                  cakap: "Mampu mengevaluasi kearifan lokal Indonesia dalam pelestarian biodiversitas.",
                  mahir: "Mampu memprakarsai proyek aksi nyata cinta lingkungan di lingkungan sekolah.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah contoh tradisi kearifan lokal masyarakat Indonesia yang bertujuan menjaga kelestarian sumber daya perairan dan hutan? (Pilih semua yang benar!)",
                pilihan: [
                  { kode: "A", teks: "Tradisi 'Sasi' di Maluku dan Papua yang melarang pengambilan hasil laut tertentu dalam jangka waktu tertentu.", isCorrect: true },
                  { kode: "B", teks: "Tradisi 'Lubuk Larangan' di Sumatera yang menjaga zona sungai tertentu agar ikan dapat berkembang biak alami.", isCorrect: true },
                  { kode: "C", teks: "Penggunaan pukat harimau dan racun potasium untuk menangkap ikan dalam jumlah besar di terumbu karang.", isCorrect: false },
                  { kode: "D", teks: "Sistem zonasi hutan larangan oleh masyarakat adat Kajang dan Baduy.", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "Sasi, Lubuk Larangan, dan Hutan Larangan adalah kearifan konservasi. Pukat harimau dan racun potas justru merusak terumbu karang.",
              },
              soalUraian: {
                level: "C6 (Kreasi & Evaluasi)",
                pertanyaan: "Bagaimana prinsip tradisi 'Sasi' di Maluku dapat diadaptasi ke dalam lingkungan sekolah untuk menjaga kebersihan dan kelestarian kantin serta taman sekolah?",
                kunci: "Prinsip 'Sasi' dapat diadaptasi menjadi 'Zona Waktu Bebas Sampah' atau 'Sasi Taman Sekolah': dibuat kesepakatan bersama seluruh warga sekolah untuk tidak menggunakan kemasan plastik sekali pakai pada hari-hari tertentu, dan melakukan masa jeda (pemulihan) taman di mana taman tidak boleh diinjak atau dipetik selama 1 bulan agar vegetasi dapat tumbuh subur kembali secara alami.",
                pembahasan: "Konsep Sasi adalah jeda eksploitasi terencana untuk memberi waktu pemulihan alami bagi ekosistem.",
                rubrik: [
                  { kriteria: "Menjelaskan prinsip jeda pemulihan pada tradisi Sasi", skor: 8 },
                  { kriteria: "Mengusulkan program aplikatif di lingkungan sekolah secara konkret", skor: 12 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 2. Fikih Fase D (Kelas VII) - MTs (Kemenag)
  {
    fase: "Fase D",
    kelasDefault: "Kelas VII",
    mapel: "Fikih",
    jalurApplicable: ["Kemenag"],
    elemenList: [
      {
        namaElemen: "Fikih Ibadah",
        deskripsiCP:
          "Peserta didik menganalisis ketentuan bersuci dari hadas besar dan kecil berdasarkan dalil syar'i, ketentuan salat fardhu lima waktu, salat berjamaah, salat sunnah, serta sujud sahwi, sujud tilawah, dan sujud syukur sebagai manifestasi ketundukan batin dan cinta kepada Allah SWT.",
        kompetensiKKO: "Menganalisis, Mempraktikkan, Mengevaluasi, Menginternalisasi",
        lingkupMateri: "Thaharah (Bersuci), Salat Fardhu & Jamaah, Salat Sunnah, Macam-macam Sujud",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP: "Menganalisis konsep thaharah (bersuci dari hadas dan najis) menggunakan air mutlak maupun sarana tayamum sesuai ketentuan syariat Islam berlandaskan dalil Al-Qur'an dan Hadis.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Mengenal tata cara wudhu dasar",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kemandirian", "Kesehatan"],
            dimensiKarakterKemenag: ["Cinta Allah & Rasul-Nya", "Cinta Kebersihan & Diri", "PPRA: Berkeadaban (Ta'addub)"],
            konteksPembelajaran: {
              stimulus: "Seseorang sedang dalam perjalanan kereta api jarak jauh saat waktu salat tiba, dan air di toilet kereta habis total sehingga harus melakukan tayamum menggunakan debu dinding kereta yang bersih.",
              stimulusKemenag: "Thaharah bukan sekadar ritual mekanis pembersihan fisik, melainkan jembatan kesucian kalbu (tazkiyatun nafs) untuk menghadap Sang Maha Indah dengan cinta dan adab terbaik.",
              masalahNyata: "Bagaimana hukum dan tata cara bersuci yang sah ketika seseorang sakit parah dan dilarang dokter menyentuh air dingin?",
              kegiatanEksplorasi: [
                "Demonstrasi praktik tayamum menggunakan media debu suci sesuai sunnah Nabi SAW.",
                "Analisis studi kasus jenis-jenis najis (Mukhaffafah, Mutawassithah, Mughalladhah) dan prosedur pensuciannya.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Bandingkan syarat keabsahan bersuci menggunakan air musta'mal dengan air mutlaq dalam mazhab Syafi'i!" },
                { level: "C5 - Evaluasi", teks: "Evaluasilah keabsahan tayamum seseorang yang mengusap seluruh anggota wudhu termasuk kaki layaknya wudhu air!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Membedakan jenis najis dan tata cara pensuciannya",
                  baru: "Mengetahui istilah najis tetapi belum bisa membedakan tingkatannya.",
                  layak: "Mampu menjelaskan najis mutawassithah.",
                  cakap: "Mampu menganalisis ketiga tingkatan najis dan mempraktikkan cara pensucian yang tepat sesuai dalil fikih.",
                  mahir: "Mampu memecahkan problematika kontemporer najis industri dan medis dengan argumentasi fikih perbandingan.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah pernyataan yang BENAR mengenai rukun dan ketentuan tayamum dalam syariat Islam? (Pilihlah semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Rukun tayamum hanya mengusap wajah dan kedua tangan sampai siku dengan debu yang suci.", isCorrect: true },
                  { kode: "B", teks: "Tayamum wajib mengusap kaki dan membasuh telinga sebagaimana wudhu air.", isCorrect: false },
                  { kode: "C", teks: "Tayamum hanya boleh dilakukan setelah masuk waktu salat fardhu.", isCorrect: true },
                  { kode: "D", teks: "Satu kali tayamum dapat digunakan untuk salat fardhu berulang-ulang tanpa batas.", isCorrect: false },
                ],
                kunci: "A dan C",
                pembahasan: "Rukun tayamum adalah niat, mengusap wajah, dan mengusap tangan hingga siku dengan debu suci (A), dan harus setelah masuk waktu salat (C). Tayamum tidak mengusap kaki dan 1 tayamum hanya untuk 1 salat fardhu menurut jumhur ulama.",
              },
              soalUraian: {
                level: "C4 (Analisis Kasus)",
                pertanyaan: "Seorang pasien di rumah sakit tangannya dibalut perban kedap air karena luka operasi. Bagaimanakah tata cara bersuci yang benar bagi pasien tersebut ketika hendak menunaikan salat fardhu?",
                kunci: "Pasien tersebut berwudhu dengan membasuh anggota tubuh yang sehat. Ketika sampai pada anggota tubuh yang diperban, ia cukup mengusap bagian atas perban dengan air basah (jika aman), kemudian melakukan tayamum sebagai pengganti anggota tubuh yang tidak terkena air, lalu menyempurnakan sisa anggota wudhunya.",
                pembahasan: "Prinsip mas-hu 'alal jaba-ir (mengusap perban) dan menggabungkan wudhu serta tayamum untuk menjaga keabsahan bersuci dalam kondisi dharurat medis.",
                rubrik: [
                  { kriteria: "Menyebutkan pembasuhan anggota wudhu yang sehat", skor: 6 },
                  { kriteria: "Menjelaskan pengusapan perban dan tayamum pengganti", skor: 14 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.02",
            teksTP: "Menganalisis ketentuan salat fardhu lima waktu, syarat sah, rukun, serta hikmah salat berjamaah dalam menumbuhkan solidaritas sosial dan ukhuwah islamiyah.",
            alokasiJP: 10,
            semester: "GANJIL",
            prasyarat: "TP.01 - Memahami ketentuan thaharah",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Kolaborasi", "Komunikasi"],
            dimensiKarakterKemenag: ["Cinta Allah & Rasul-Nya", "Cinta Sesama Manusia", "PPRA: Kesetaraan (Musawah)"],
            konteksPembelajaran: {
              stimulus: "Saf salat berjamaah di masjid yang lurus dan rapat menyatukan seluruh kalangan masyarakat tanpa memandang status sosial dan kekayaan.",
              stimulusKemenag: "Salat berjamaah adalah madrasah cinta dan persaudaraan sejati di mana pundak saling bersentuhan dalam ketundukan bersama kepada Sang Khalik.",
              masalahNyata: "Bagaimana hukum makmum masbuq yang mendapati imam sedang ruku' pada rakaat kedua?",
              kegiatanEksplorasi: [
                "Praktik simulasi makmum masbuq dan pergantian posisi imam jika imam batal.",
                "Kajian video perbedaan rukun fi'li, qauli, dan qalbi dalam salat.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Analisislah kriteria syarat sah seorang makmum dapat dihitung mendapatkan satu rakaat sempurna bersama imam!" },
                { level: "C5 - Evaluasi", teks: "Evaluasilah implikasi etika sosial dari keteraturan saf salat berjamaah terhadap kedisiplinan hidup bermasyarakat!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menganalisis rukun dan syarat sah salat berjamaah",
                  baru: "Mengetahui bacaan salat namun belum tertib rukunnya.",
                  layak: "Mampu menjelaskan perbedaan imam dan makmum.",
                  cakap: "Mampu menganalisis ketentuan makmum masbuq dan rukun salat secara mendalam.",
                  mahir: "Mampu mendesain modul pembiasaan salat berjamaah dan tata tertib masjid madrasah.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah kondisi berikut yang menyebabkan seorang makmum DIANGGAP MENDAPATKAN 1 rakaat bersama imam? (Pilihlah yang benar!)",
                pilihan: [
                  { kode: "A", teks: "Makmum bertakbiratul ihram dan sempat ruku' thuma'ninah bersama imam sebelum imam bangkit ke i'tidal.", isCorrect: true },
                  { kode: "B", teks: "Makmum baru bertakbiratul ihram saat imam sudah mulai bangkit dari ruku' menuju i'tidal.", isCorrect: false },
                  { kode: "C", teks: "Makmum mendapati imam sedang sujud pertama pada rakaat tersebut.", isCorrect: false },
                  { kode: "D", teks: "Makmum sempat membaca surah Al-Fatihah sempurna saat imam masih berdiri tegak.", isCorrect: true },
                ],
                kunci: "A dan D",
                pembahasan: "Batas minimal mendapat satu rakaat adalah mendapati ruku' yang thuma'ninah bersama imam. Jika imam sudah bangkit, rakaat tersebut tidak terhitung.",
              },
              soalUraian: {
                level: "C4 (Analisis)",
                pertanyaan: "Jelaskan perbedaan antara rukun salat, syarat wajib salat, dan syarat sah salat beserta contoh konkretnya masing-masing!",
                kunci: "Syarat wajib adalah hal yang mewajibkan seseorang salat (contoh: baligh, berakal, Islam). Syarat sah adalah hal yang harus terpenuhi sebelum salat dimulai agar salatnya sah (contoh: suci dari hadas, menutup aurat, masuk waktu, menghadap kiblat). Rukun salat adalah bagian internal yang wajib dilakukan di dalam salat itu sendiri (contoh: niat, takbiratul ihram, membaca Al-Fatihah, ruku', sujud).",
                pembahasan: "Ketiganya merupakan pilar keabsahan ibadah salat dalam ilmu fikih.",
                rubrik: [
                  { kriteria: "Menjelaskan syarat wajib dan contohnya", skor: 6 },
                  { kriteria: "Menjelaskan syarat sah dan contohnya", skor: 7 },
                  { kriteria: "Menjelaskan rukun salat dan contohnya", skor: 7 },
                ],
              },
            },
          },
          {
            kodeTP: "TP.03",
            teksTP: "Menganalisis sebab-sebab pelaksanaan sujud sahwi, sujud tilawah, dan sujud syukur serta mempraktikkannya dengan tata cara yang benar sesuai sunnah Nabi SAW.",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "TP.02 - Memahami rukun dan sunnah salat fardhu",
            dimensiKarakterDinas: ["Keimanan & Ketakwaan thd Tuhan YME", "Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Allah & Rasul-Nya", "Cinta Kebaikan", "PPRA: Keteladanan (Qudwah)"],
            konteksPembelajaran: {
              stimulus: "Ketika salat Ashar, seorang imam lupa tasyahhud awal dan langsung berdiri tegak pada rakaat ketiga, lalu melakukan sujud sahwi sebelum salam.",
              stimulusKemenag: "Sujud syukur dan sujud sahwi adalah wujud kerendahan hati manusia yang penuh kekhilafan di hadapan kesempurnaan Allah SWT.",
              masalahNyata: "Kapan sujud sahwi dilakukan sebelum salam dan kapan dilakukan setelah salam?",
              kegiatanEksplorasi: [
                "Praktik membaca ayat sajdah dan melakukan sujud tilawah baik di dalam maupun di luar salat.",
                "Simulasi kasus keraguan jumlah rakaat antara rakaat ke-3 atau ke-4.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Analisislah prinsip pengambilan keputusan fikih saat seseorang ragu-ragu apakah sudah melakukan 3 atau 4 rakaat salat Dzuhur!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menjelaskan tata cara dan sebab macam-macam sujud",
                  baru: "Mengetahui nama sujud tetapi tertukar bacaannya.",
                  layak: "Mampu menjelaskan sujud syukur.",
                  cakap: "Mampu membedakan sebab sujud sahwi, sujud tilawah, dan sujud syukur secara tepat.",
                  mahir: "Mampu membimbing praktik simulasi ketiga jenis sujud secara fasih dan beradab.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah kondisi yang DISYARIATKAN untuk melakukan SUJUD TILAWAH? (Pilih semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "Mendengar atau membaca ayat-ayat sajdah di dalam Al-Qur'an baik saat salat maupun di luar salat.", isCorrect: true },
                  { kode: "B", teks: "Mendapatkan kabar gembira kelulusan ujian madrasah dengan nilai terbaik.", isCorrect: false },
                  { kode: "C", teks: "Membaca surah Al-Alaq ayat ke-19 (ayat sajdah) saat tadarrus di madrasah.", isCorrect: true },
                  { kode: "D", teks: "Ragu-ragu terhadap jumlah rakaat salat yang sedang dikerjakan.", isCorrect: false },
                ],
                kunci: "A dan C",
                pembahasan: "Sujud tilawah dilakukan saat membaca/mendengar ayat sajdah (A & C). Kabar gembira disyariatkan sujud syukur (B), dan ragu rakaat disyariatkan sujud sahwi (D).",
              },
              soalUraian: {
                level: "C4 (Analisis)",
                pertanyaan: "Jika seseorang sedang salat Isya dan merasa ragu apakah ia sedang berada di rakaat ke-3 atau rakaat ke-4, jelaskan langkah kaidah fikih yang harus ia ambil beserta tata cara penyelesaiannya!",
                kunci: "Berdasarkan hadis Nabi SAW dan kaidah 'Al-Yaqinu la yuzalu bisy-syakk' (Keyakinan tidak dihilangkan oleh keraguan), ia harus membuang keraguannya dan menetapkan jumlah rakaat yang paling sedikit dan meyakinkan, yaitu rakaat ke-3. Ia kemudian menambah 1 rakaat lagi hingga genap 4 rakaat, lalu melakukan 2 kali sujud sahwi sebelum mengucapkan salam.",
                pembahasan: "Mengambil bilangan rakaat terkecil adalah prinsip kehati-hatian dalam ibadah salat.",
                rubrik: [
                  { kriteria: "Menyebutkan kaidah mengambil jumlah rakaat terkecil (rakaat ke-3)", skor: 10 },
                  { kriteria: "Menjelaskan penambahan 1 rakaat dan sujud sahwi 2 kali sebelum salam", skor: 10 },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  // 3. Matematika Fase D (Kelas VII / SMP/MTs)
  {
    fase: "Fase D",
    kelasDefault: "Kelas VII",
    mapel: "Matematika",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      {
        namaElemen: "Bilangan dan Aljabar",
        deskripsiCP:
          "Peserta didik dapat membaca, menulis, dan membandingkan bilangan bulat, bilangan rasional, dan pecahan; menerapkan operasi aritmetika pada bilangan real; serta menggunakan konsep aljabar, persamaan linear satu variabel, dan perbandingan senilai/berbalik nilai untuk menyelesaikan masalah kontekstual.",
        kompetensiKKO: "Menghitung, Memodelkan, Menganalisis, Menyelesaikan Masalah",
        lingkupMateri: "Bilangan Bulat & Pecahan, Aljabar Linear, Perbandingan Skala",
        tpList: [
          {
            kodeTP: "TP.01",
            teksTP: "Menganalisis operasi hitung campuran bilangan bulat (positif dan negatif) serta menerapkannya dalam memecahkan masalah kontekstual kenaikan suhu dan kedalaman laut.",
            alokasiJP: 12,
            semester: "GANJIL",
            prasyarat: "Mengenal bilangan asli dan garis bilangan dasar",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian", "Kreativitas"],
            dimensiKarakterKemenag: ["Penalaran Kritis", "Cinta Ilmu", "Kemandirian"],
            konteksPembelajaran: {
              stimulus: "Suhu udara di kota Tokyo pada musim dingin tercatat -4°C pada malam hari, dan naik 9°C pada siang hari.",
              stimulusKemenag: "Matematika adalah bahasa keteraturan alam semesta ciptaan Allah yang menuntut kejujuran dan ketelitian berpikir objektif.",
              masalahNyata: "Seorang penyelam berada pada kedalaman 15 meter di bawah permukaan laut (-15 m), lalu naik 8 meter. Berapakah posisi penyelam sekarang?",
              kegiatanEksplorasi: [
                "Eksplorasi garis bilangan interaktif dengan koin positif-negatif.",
                "Pemodelan suhu freezer laboratorium dan kedalaman kapal selam.",
              ],
              pertanyaanHOTS: [
                { level: "C4 - Analisis", teks: "Sebuah ruangan pendingin mula-mula bersuhu 2°C. Suhu tersebut diturunkan 3°C setiap 10 menit. Hitunglah suhu ruangan setelah 40 menit!" },
              ],
              rubrikIndikator: [
                {
                  kriteria: "Menyelesaikan operasi bilangan bulat bertingkat",
                  baru: "Sering keliru dalam perkalian tanda minus.",
                  layak: "Mampu menjumlahkan dua bilangan bulat bertanda sama.",
                  cakap: "Mampu memecahkan soal cerita multi-tahap operasi bilangan bulat.",
                  mahir: "Mampu merumuskan algoritma efisien dan membuktikan sifat komutatif, asosiatif, distributif.",
                },
              ],
              soalPGK: {
                pertanyaan: "Manakah pernyataan matematika berikut yang bernilai BENAR? (Pilihlah semua yang tepat!)",
                pilihan: [
                  { kode: "A", teks: "-12 + (-8) = -20", isCorrect: true },
                  { kode: "B", teks: "-15 - (-20) = 5", isCorrect: true },
                  { kode: "C", teks: "(-6) × (-7) = -42", isCorrect: false },
                  { kode: "D", teks: "(-36) ÷ (-4) = 9", isCorrect: true },
                ],
                kunci: "A, B, dan D",
                pembahasan: "A benar (-12-8=-20), B benar (-15+20=5), D benar (negatif dibagi negatif = positif 9). C salah karena negatif kali negatif menghasilkan positif 42.",
              },
              soalUraian: {
                level: "C4 (Pemecahan Masalah)",
                pertanyaan: "Dalam sebuah kompetisi cerdas cermat matematika yang terdiri dari 30 butir soal: setiap jawaban benar diberi skor +4, jawaban salah diberi skor -2, dan soal tidak dijawab diberi skor -1. Ahmad menjawab 24 soal dengan 20 soal benar. Hitunglah total skor akhir yang diperoleh Ahmad!",
                kunci: "Diketahui: Benar = 20 soal (Skor: 20 × 4 = 80). Salah = 24 - 20 = 4 soal (Skor: 4 × (-2) = -8). Tidak dijawab = 30 - 24 = 6 soal (Skor: 6 × (-1) = -6). Total Skor = 80 + (-8) + (-6) = 80 - 14 = 66.",
                pembahasan: "Operasi hitung campuran bilangan bulat berbobot positif dan negatif.",
                rubrik: [
                  { kriteria: "Menghitung skor jawaban benar (20 × 4 = 80)", skor: 5 },
                  { kriteria: "Menghitung skor salah (4 × -2 = -8) dan tidak dijawab (6 × -1 = -6)", skor: 10 },
                  { kriteria: "Menghitung total akhir 66", skor: 5 },
                ],
              },
            },
          },
        ],
      },
    ],
  },
];

export const PRESETS = [
  {
    id: "sd-pancasila-1",
    title: "SD - Pendidikan Pancasila (Fase A, Kelas I) [Dinas]",
    data: {
      jalur: "Dinas" as const,
      namaSatuan: "SDN 01 Menteng",
      namaGuru: "Siti Rahmawati, S.Pd., Gr.",
      nipGuru: "199008122016022004",
      namaKepala: "Drs. H. Bambang Sutrisno, M.Pd.",
      nipKepala: "196805141993031002",
      fase: "Fase A" as const,
      kelas: "Kelas I",
      mataPelajaran: "Pendidikan Pancasila",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Jakarta Pusat",
      tanggalPengesahan: "14 Juli 2025",
      durasiMenitJP: 35,
      instansiInduk: "PEMERINTAH PROVINSI DKI JAKARTA",
      kantorWilayah: "DINAS PENDIDIKAN KOTA ADMINISTRASI JAKARTA PUSAT",
      alamatSatuan: "Jl. Besuki No. 1, Menteng, Jakarta Pusat 10310",
      kontakSatuan: "Telp. (021) 31925567 | Email: sdn01menteng@jakarta.go.id",
    },
  },
  {
    id: "sd-matematika-1",
    title: "SD - Matematika (Fase A, Kelas I) [Dinas]",
    data: {
      jalur: "Dinas" as const,
      namaSatuan: "SD Negeri Percobaan 2",
      namaGuru: "Dewi Lestari, S.Pd.",
      nipGuru: "199304192019022007",
      namaKepala: "H. Supriyadi, M.Pd.",
      nipKepala: "197103251996021001",
      fase: "Fase A" as const,
      kelas: "Kelas I",
      mataPelajaran: "Matematika",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Yogyakarta",
      tanggalPengesahan: "14 Juli 2025",
      durasiMenitJP: 35,
      instansiInduk: "PEMERINTAH KOTA YOGYAKARTA",
      kantorWilayah: "DINAS PENDIDIKAN, PEMUDA DAN OLAHRAGA",
      alamatSatuan: "Jl. Kaliurang Km. 5, Sleman, D.I. Yogyakarta 55281",
      kontakSatuan: "Telp. (0274) 589211 | Email: sdnpercobaan2@jogjakota.go.id",
    },
  },
  {
    id: "mi-pjok-1",
    title: "MI - PJOK (Fase A, Kelas I) [Kemenag KBC]",
    data: {
      jalur: "Kemenag" as const,
      namaSatuan: "MIN 1 Kebumen",
      namaGuru: "Arif Kurniawan, S.Pd.Jas.",
      nipGuru: "199109052018011003",
      namaKepala: "H. Wahid Hasyim, S.Ag., M.Pd.I.",
      nipKepala: "197302181999031002",
      fase: "Fase A" as const,
      kelas: "Kelas I",
      mataPelajaran: "Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Kebumen",
      tanggalPengesahan: "14 Juli 2025",
      durasiMenitJP: 35,
      instansiInduk: "KEMENTERIAN AGAMA REPUBLIK INDONESIA",
      kantorWilayah: "KANTOR KEMENTERIAN AGAMA KABUPATEN KEBUMEN",
      alamatSatuan: "Jl. Pahlawan No. 45, Kebumen, Jawa Tengah 54311",
      kontakSatuan: "Telp. (0287) 381209 | Email: min1kebumen@kemenag.go.id",
    },
  },
  {
    id: "ma-bojongjati-fikih-10",
    title: "MA Bojongjati - Fikih (Fase E, Kelas X) [Kemenag KBC]",
    data: {
      jalur: "Kemenag" as const,
      namaSatuan: "MAS BOJONGJATI",
      namaGuru: "Ahmad Fauzi, S.Pd.I., M.Pd.",
      nipGuru: "198904122015031004",
      namaKepala: "Drs. H. Mulyadi, M.Pd.I.",
      nipKepala: "197208151998031003",
      fase: "Fase E" as const,
      kelas: "Kelas X",
      mataPelajaran: "Fikih",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Pandeglang",
      tanggalPengesahan: "15 Juli 2025",
      durasiMenitJP: 45,
      instansiInduk: "KEMENTERIAN AGAMA REPUBLIK INDONESIA",
      kantorWilayah: "KANTOR KEMENTERIAN AGAMA KABUPATEN PANDEGLANG",
      alamatSatuan: "Jl. Raya Bojongjati - Saketi Km. 03, Kec. Bojong, Kab. Pandeglang, Banten 42274",
      kontakSatuan: "Telp. (0253) 802145 | Pos: 42274 | Email: kurikulum.ma.bojongjati@gmail.com",
    },
  },
  {
    id: "sd-ipas-4",
    title: "SD - IPAS (Fase B, Kelas IV) [Dinas]",
    data: {
      jalur: "Dinas" as const,
      namaSatuan: "SDN 01 Rawamangun",
      namaGuru: "Budi Santoso, S.Pd., M.Pd.",
      nipGuru: "198507142010011005",
      namaKepala: "Dra. Hj. Siti Aminah, M.Pd.",
      nipKepala: "197403121998022001",
      fase: "Fase B" as const,
      kelas: "Kelas IV",
      mataPelajaran: "Ilmu Pengetahuan Alam dan Sosial (IPAS)",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Jakarta Timur",
      tanggalPengesahan: "15 Juli 2025",
      durasiMenitJP: 35,
      instansiInduk: "PEMERINTAH PROVINSI DAERAH KHUSUS IBUKOTA JAKARTA",
      kantorWilayah: "DINAS PENDIDIKAN DAN KEBUDAYAAN",
      alamatSatuan: "Jl. Pemuda No. 10, Rawamangun, Pulo Gadung, Jakarta Timur 13220",
      kontakSatuan: "Telp. (021) 47862211 | Email: sdn01rawamangun@jakarta.go.id",
    },
  },
  {
    id: "mi-ipas-4",
    title: "MI - IPAS (Fase B, Kelas IV) [Kemenag KBC]",
    data: {
      jalur: "Kemenag" as const,
      namaSatuan: "MIN 1 Kebumen",
      namaGuru: "Nurul Hidayah, S.Pd.I., M.Pd.",
      nipGuru: "198806242014032003",
      namaKepala: "H. Wahid Hasyim, S.Ag., M.Pd.I.",
      nipKepala: "197302181999031002",
      fase: "Fase B" as const,
      kelas: "Kelas IV",
      mataPelajaran: "Ilmu Pengetahuan Alam dan Sosial (IPAS)",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Kebumen",
      tanggalPengesahan: "14 Juli 2025",
      durasiMenitJP: 35,
      instansiInduk: "KEMENTERIAN AGAMA REPUBLIK INDONESIA",
      kantorWilayah: "KANTOR KEMENTERIAN AGAMA KABUPATEN KEBUMEN",
      alamatSatuan: "Jl. Pahlawan No. 45, Kebumen, Jawa Tengah 54311",
      kontakSatuan: "Telp. (0287) 381209 | Email: min1kebumen@kemenag.go.id",
    },
  },
  {
    id: "sd-matematika-4",
    title: "SD - Matematika (Fase B, Kelas IV) [Dinas]",
    data: {
      jalur: "Dinas" as const,
      namaSatuan: "SD Negeri Percobaan 2",
      namaGuru: "Dewi Lestari, S.Pd., M.Pd.",
      nipGuru: "199304192019022007",
      namaKepala: "H. Supriyadi, M.Pd.",
      nipKepala: "197103251996021001",
      fase: "Fase B" as const,
      kelas: "Kelas IV",
      mataPelajaran: "Matematika",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Yogyakarta",
      tanggalPengesahan: "14 Juli 2025",
      durasiMenitJP: 35,
      instansiInduk: "PEMERINTAH KOTA YOGYAKARTA",
      kantorWilayah: "DINAS PENDIDIKAN, PEMUDA DAN OLAHRAGA",
      alamatSatuan: "Jl. Kaliurang Km. 5, Sleman, D.I. Yogyakarta 55281",
      kontakSatuan: "Telp. (0274) 589211 | Email: sdnpercobaan2@jogjakota.go.id",
    },
  },
  {
    id: "sd-bahasa-indonesia-4",
    title: "SD - Bahasa Indonesia (Fase B, Kelas IV) [Dinas]",
    data: {
      jalur: "Dinas" as const,
      namaSatuan: "SDN 01 Menteng",
      namaGuru: "Siti Rahmawati, S.Pd., Gr.",
      nipGuru: "199008122016022004",
      namaKepala: "Drs. H. Bambang Sutrisno, M.Pd.",
      nipKepala: "196805141993031002",
      fase: "Fase B" as const,
      kelas: "Kelas IV",
      mataPelajaran: "Bahasa Indonesia",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Jakarta Pusat",
      tanggalPengesahan: "14 Juli 2025",
      durasiMenitJP: 35,
      instansiInduk: "PEMERINTAH PROVINSI DKI JAKARTA",
      kantorWilayah: "DINAS PENDIDIKAN KOTA ADMINISTRASI JAKARTA PUSAT",
      alamatSatuan: "Jl. Besuki No. 1, Menteng, Jakarta Pusat 10310",
      kontakSatuan: "Telp. (021) 31925567 | Email: sdn01menteng@jakarta.go.id",
    },
  },
  {
    id: "sd-bahasa-inggris-4",
    title: "SD - Bahasa Inggris (Fase B, Kelas IV) [Dinas]",
    data: {
      jalur: "Dinas" as const,
      namaSatuan: "SD Negeri Menteng 01",
      namaGuru: "Sarah Wijaya, S.Pd., M.Ed.",
      nipGuru: "199405182019032009",
      namaKepala: "Drs. H. Bambang Sutrisno, M.Pd.",
      nipKepala: "196805141993031002",
      fase: "Fase B" as const,
      kelas: "Kelas IV",
      mataPelajaran: "Bahasa Inggris",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Jakarta Pusat",
      tanggalPengesahan: "14 Juli 2025",
      durasiMenitJP: 35,
      instansiInduk: "PEMERINTAH PROVINSI DKI JAKARTA",
      kantorWilayah: "DINAS PENDIDIKAN KOTA ADMINISTRASI JAKARTA PUSAT",
      alamatSatuan: "Jl. Besuki No. 1, Menteng, Jakarta Pusat 10310",
      kontakSatuan: "Telp. (021) 31925567 | Email: sdn01menteng@jakarta.go.id",
    },
  },
  {
    id: "mi-alquran-hadis-4",
    title: "MI - Al-Qur'an Hadis (Fase B, Kelas IV) [Kemenag KBC]",
    data: {
      jalur: "Kemenag" as const,
      namaSatuan: "MIN 1 Kota Malang",
      namaGuru: "H. Abdul Wahab, S.Pd.I., M.Pd.",
      nipGuru: "198711092011011008",
      namaKepala: "Drs. H. Suyanto, M.Ag.",
      nipKepala: "197003151996031001",
      fase: "Fase B" as const,
      kelas: "Kelas IV",
      mataPelajaran: "Al-Qur'an Hadis",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Malang",
      tanggalPengesahan: "14 Juli 2025",
      durasiMenitJP: 35,
      instansiInduk: "KEMENTERIAN AGAMA REPUBLIK INDONESIA",
      kantorWilayah: "KANTOR KEMENTERIAN AGAMA KOTA MALANG",
      alamatSatuan: "Jl. Bandung No. 7, Penanggungan, Klojen, Kota Malang 65113",
      kontakSatuan: "Telp. (0341) 551842 | Email: min1kotamalang@kemenag.go.id",
    },
  },
  {
    id: "sd-seni-rupa-4",
    title: "SD - Seni Rupa (Fase B, Kelas IV) [Dinas]",
    data: {
      jalur: "Dinas" as const,
      namaSatuan: "SDN Percobaan 2",
      namaGuru: "Anisa Kartika, S.Sn., Gr.",
      nipGuru: "199208222019022011",
      namaKepala: "H. Supriyadi, M.Pd.",
      nipKepala: "197103251996021001",
      fase: "Fase B" as const,
      kelas: "Kelas IV",
      mataPelajaran: "Seni Rupa",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Yogyakarta",
      tanggalPengesahan: "14 Juli 2025",
      durasiMenitJP: 35,
      instansiInduk: "PEMERINTAH KOTA YOGYAKARTA",
      kantorWilayah: "DINAS PENDIDIKAN, PEMUDA DAN OLAHRAGA",
      alamatSatuan: "Jl. Kaliurang Km. 5, Sleman, D.I. Yogyakarta 55281",
      kontakSatuan: "Telp. (0274) 589211 | Email: sdnpercobaan2@jogjakota.go.id",
    },
  },
  {
    id: "mts-fikih-7",
    title: "MTs - Fikih (Fase D, Kelas VII) [Kemenag KBC]",
    data: {
      jalur: "Kemenag" as const,
      namaSatuan: "MTsN 2 Surabaya",
      namaGuru: "Ahmad Fauzi, S.Ag., M.Pd.I.",
      nipGuru: "198205192009011012",
      namaKepala: "Drs. H. Syamsul Huda, M.Ag.",
      nipKepala: "197108251997031003",
      fase: "Fase D" as const,
      kelas: "Kelas VII",
      mataPelajaran: "Fikih",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Surabaya",
      tanggalPengesahan: "15 Juli 2025",
      durasiMenitJP: 40,
      instansiInduk: "KEMENTERIAN AGAMA REPUBLIK INDONESIA",
      kantorWilayah: "KANTOR KEMENTERIAN AGAMA KOTA SURABAYA",
      alamatSatuan: "Jl. Jemur Sari No. 25, Wonocolo, Surabaya, Jawa Timur 60237",
      kontakSatuan: "Telp. (031) 8439922 | Email: info@mtsn2surabaya.sch.id",
    },
  },
  {
    id: "smp-matematika-7",
    title: "SMP - Matematika (Fase D, Kelas VII) [Dinas]",
    data: {
      jalur: "Dinas" as const,
      namaSatuan: "SMP Negeri 5 Bandung",
      namaGuru: "Rina Wijayanti, M.Pd.",
      nipGuru: "198811032014022003",
      namaKepala: "Dr. Hendra Gunawan, M.Si.",
      nipKepala: "196904151994121001",
      fase: "Fase D" as const,
      kelas: "Kelas VII",
      mataPelajaran: "Matematika",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Bandung",
      tanggalPengesahan: "15 Juli 2025",
      durasiMenitJP: 40,
      instansiInduk: "PEMERINTAH DAERAH KOTA BANDUNG",
      kantorWilayah: "DINAS PENDIDIKAN KOTA BANDUNG",
      alamatSatuan: "Jl. Belitung No. 8, Merdeka, Sumur Bandung, Kota Bandung 40113",
      kontakSatuan: "Telp. (022) 4203652 | Email: smpn5bdg@bandung.go.id",
    },
  },
  {
    id: "sd-ipas-5",
    title: "SD - IPAS (Fase C, Kelas V) [Dinas]",
    data: {
      jalur: "Dinas" as const,
      namaSatuan: "SD Negeri 05 Pagi Cempaka Putih",
      namaGuru: "Ahmad Hidayat, S.Pd., Gr.",
      nipGuru: "199105152018021004",
      namaKepala: "Dra. Hj. Sri Wahyuni, M.Pd.",
      nipKepala: "196912041994032001",
      fase: "Fase C" as const,
      kelas: "Kelas V",
      mataPelajaran: "Ilmu Pengetahuan Alam dan Sosial (IPAS)",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Jakarta Pusat",
      tanggalPengesahan: "14 Juli 2025",
      durasiMenitJP: 35,
      instansiInduk: "PEMERINTAH PROVINSI DKI JAKARTA",
      kantorWilayah: "DINAS PENDIDIKAN KOTA ADMINISTRASI JAKARTA PUSAT",
      alamatSatuan: "Jl. Cempaka Putih Tengah No. 28, Jakarta Pusat 10510",
      kontakSatuan: "Telp. (021) 4245678 | Email: sdn05cempakaputih@jakarta.go.id",
    },
  },
  {
    id: "sd-matematika-5",
    title: "SD - Matematika (Fase C, Kelas V) [Dinas]",
    data: {
      jalur: "Dinas" as const,
      namaSatuan: "SD Negeri Menteng 01",
      namaGuru: "Bambang Trianto, S.Pd., M.Si.",
      nipGuru: "198904122015031005",
      namaKepala: "Drs. H. Mulyono, M.Pd.",
      nipKepala: "196708191992031003",
      fase: "Fase C" as const,
      kelas: "Kelas V",
      mataPelajaran: "Matematika",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Jakarta Pusat",
      tanggalPengesahan: "14 Juli 2025",
      durasiMenitJP: 35,
      instansiInduk: "PEMERINTAH PROVINSI DKI JAKARTA",
      kantorWilayah: "DINAS PENDIDIKAN KOTA ADMINISTRASI JAKARTA PUSAT",
      alamatSatuan: "Jl. Besuki No. 1, Menteng, Jakarta Pusat 10310",
      kontakSatuan: "Telp. (021) 31925567 | Email: menteng01@jakarta.go.id",
    },
  },
  {
    id: "mi-pancasila-5",
    title: "MI - Pendidikan Pancasila (Fase C, Kelas V) [Kemenag KBC]",
    data: {
      jalur: "Kemenag" as const,
      namaSatuan: "MIN 2 Kota Malang",
      namaGuru: "Miftahul Jannah, S.Pd.I., M.Pd.",
      nipGuru: "199003212016032002",
      namaKepala: "Drs. H. Supandi, M.Ag.",
      nipKepala: "197204111998031001",
      fase: "Fase C" as const,
      kelas: "Kelas V",
      mataPelajaran: "Pendidikan Pancasila",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Malang",
      tanggalPengesahan: "14 Juli 2025",
      durasiMenitJP: 35,
      instansiInduk: "KEMENTERIAN AGAMA REPUBLIK INDONESIA",
      kantorWilayah: "KANTOR KEMENTERIAN AGAMA KOTA MALANG",
      alamatSatuan: "Jl. Bandung No. 7, Penanggungan, Klojen, Kota Malang 65113",
      kontakSatuan: "Telp. (0341) 551842 | Email: min2malang@kemenag.go.id",
    },
  },
  {
    id: "sd-koding-5",
    title: "SD - Koding & Kecerdasan Artifisial (Fase C, Kelas V) [Dinas]",
    data: {
      jalur: "Dinas" as const,
      namaSatuan: "SDN Teladan Nusantara",
      namaGuru: "Dian Pratama, S.Kom., Gr.",
      nipGuru: "199203112019031008",
      namaKepala: "Hj. Ratna Sari, M.Pd.",
      nipKepala: "197509181999032002",
      fase: "Fase C" as const,
      kelas: "Kelas V",
      mataPelajaran: "Koding dan Kecerdasan Artifisial (KA)",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Jakarta Pusat",
      tanggalPengesahan: "15 Juli 2025",
      durasiMenitJP: 35,
      instansiInduk: "PEMERINTAH PROVINSI DKI JAKARTA",
      kantorWilayah: "DINAS PENDIDIKAN DAN KEBUDAYAAN",
      alamatSatuan: "Jl. Medan Merdeka Timur No. 12, Gambir, Jakarta Pusat",
      kontakSatuan: "Telp. (021) 3456789 | Email: info@sdnteladan.sch.id",
    },
  },
  {
    id: "smp-ipa-7",
    title: "SMP - Ilmu Pengetahuan Alam (IPA) (Fase D, Kelas VII) [Dinas]",
    data: {
      jalur: "Dinas" as const,
      namaSatuan: "SMP Negeri 1 Surabaya",
      namaGuru: "Dr. Hendra Kusuma, M.Si.",
      nipGuru: "198305142008011012",
      namaKepala: "Dra. Titik Suryani, M.Pd.",
      nipKepala: "196811201993032004",
      fase: "Fase D" as const,
      kelas: "Kelas VII",
      mataPelajaran: "Ilmu Pengetahuan Alam (IPA)",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Surabaya",
      tanggalPengesahan: "14 Juli 2025",
      durasiMenitJP: 40,
      instansiInduk: "PEMERINTAH KOTA SURABAYA",
      kantorWilayah: "DINAS PENDIDIKAN KOTA SURABAYA",
      alamatSatuan: "Jl. Pacar No. 4, Ketabang, Genteng, Kota Surabaya 60272",
      kontakSatuan: "Telp. (031) 5342378 | Email: smpn1surabaya@surabaya.go.id",
    },
  },
  {
    id: "mts-pancasila-7",
    title: "MTs - Pendidikan Pancasila (Fase D, Kelas VII) [Kemenag KBC]",
    data: {
      jalur: "Kemenag" as const,
      namaSatuan: "MTsN 1 Kota Bandung",
      namaGuru: "Ahmad Fauzi, S.Pd., M.Ag.",
      nipGuru: "198710122011011007",
      namaKepala: "Drs. H. Dedi Junaedi, M.M.Pd.",
      nipKepala: "196903151995031002",
      fase: "Fase D" as const,
      kelas: "Kelas VII",
      mataPelajaran: "Pendidikan Pancasila",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Bandung",
      tanggalPengesahan: "14 Juli 2025",
      durasiMenitJP: 40,
      instansiInduk: "KEMENTERIAN AGAMA REPUBLIK INDONESIA",
      kantorWilayah: "KANTOR KEMENTERIAN AGAMA KOTA BANDUNG",
      alamatSatuan: "Jl. Terusan Cibaduyut No. 36, Bojongloa Kidul, Kota Bandung 40239",
      kontakSatuan: "Telp. (022) 5403214 | Email: mtsn1bandung@kemenag.go.id",
    },
  },
  {
    id: "smp-informatika-7",
    title: "SMP - Informatika (Fase D, Kelas VII) [Dinas]",
    data: {
      jalur: "Dinas" as const,
      namaSatuan: "SMP Negeri 2 Semarang",
      namaGuru: "Rina Wijayanti, S.Kom., M.Kom.",
      nipGuru: "199104082019032014",
      namaKepala: "Drs. Joko Suwito, M.Pd.",
      nipKepala: "197108251997021003",
      fase: "Fase D" as const,
      kelas: "Kelas VII",
      mataPelajaran: "Informatika",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Semarang",
      tanggalPengesahan: "15 Juli 2025",
      durasiMenitJP: 40,
      instansiInduk: "PEMERINTAH KOTA SEMARANG",
      kantorWilayah: "DINAS PENDIDIKAN KOTA SEMARANG",
      alamatSatuan: "Jl. Brigjen Katamso No. 14, Peterongan, Semarang Selatan 50242",
      kontakSatuan: "Telp. (024) 8412345 | Email: info@smpn2semarang.sch.id",
    },
  },
  {
    id: "ma-akidah-10",
    title: "MA - Akidah Akhlak (Fase E, Kelas X) [Kemenag KBC]",
    data: {
      jalur: "Kemenag" as const,
      namaSatuan: "MAN 1 Yogyakarta",
      namaGuru: "Muhammad Rizki, Lc., M.Hum.",
      nipGuru: "198706242011011009",
      namaKepala: "Drs. H. Wiranto, M.Pd.I.",
      nipKepala: "197002141996031002",
      fase: "Fase E" as const,
      kelas: "Kelas X",
      mataPelajaran: "Akidah Akhlak",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Yogyakarta",
      tanggalPengesahan: "15 Juli 2025",
      durasiMenitJP: 45,
      instansiInduk: "KEMENTERIAN AGAMA REPUBLIK INDONESIA",
      kantorWilayah: "KANTOR KEMENTERIAN AGAMA DAERAH ISTIMEWA YOGYAKARTA",
      alamatSatuan: "Jl. C. Simanjuntak No. 60, Terban, Gondokusuman, Kota Yogyakarta 55223",
      kontakSatuan: "Telp. (0274) 513364 | Email: man1jogja@kemenag.go.id",
    },
  },
  {
    id: "sma-fisika-10",
    title: "SMA - Fisika (Fase E, Kelas X) [Dinas]",
    data: {
      jalur: "Dinas" as const,
      namaSatuan: "SMA Negeri 3 Bandung",
      namaGuru: "Bambang Sudarmono, M.Pd., M.Sc.",
      nipGuru: "198203112006041008",
      namaKepala: "Dra. Hj. Yeni Rohaeni, M.M.Pd.",
      nipKepala: "196705191992032003",
      fase: "Fase E" as const,
      kelas: "Kelas X",
      mataPelajaran: "Fisika",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Bandung",
      tanggalPengesahan: "14 Juli 2025",
      durasiMenitJP: 45,
      instansiInduk: "PEMERINTAH PROVINSI JAWA BARAT",
      kantorWilayah: "DINAS PENDIDIKAN PROVINSI JAWA BARAT",
      alamatSatuan: "Jl. Belitung No. 8, Merdeka, Sumur Bandung, Kota Bandung 40113",
      kontakSatuan: "Telp. (022) 4235154 | Email: sman3bandung@disdik.jabarprov.go.id",
    },
  },
  {
    id: "sma-matematika-10",
    title: "SMA - Matematika (Fase E, Kelas X) [Dinas]",
    data: {
      jalur: "Dinas" as const,
      namaSatuan: "SMA Negeri 8 Jakarta",
      namaGuru: "Dewi Puspitasari, S.Pd., M.Si.",
      nipGuru: "198909182014022005",
      namaKepala: "Drs. H. Mukhlis, M.Pd.",
      nipKepala: "196804121994121001",
      fase: "Fase E" as const,
      kelas: "Kelas X",
      mataPelajaran: "Matematika",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Jakarta Selatan",
      tanggalPengesahan: "14 Juli 2025",
      durasiMenitJP: 45,
      instansiInduk: "PEMERINTAH PROVINSI DKI JAKARTA",
      kantorWilayah: "DINAS PENDIDIKAN PROVINSI DKI JAKARTA",
      alamatSatuan: "Jl. Taman Bukit Duri No. 2, Tebet, Jakarta Selatan 12840",
      kontakSatuan: "Telp. (021) 8295455 | Email: tu@sman8jkt.sch.id",
    },
  },
  {
    id: "sma-biologi-11",
    title: "SMA - Biologi (Fase F, Kelas XI) [Dinas]",
    data: {
      jalur: "Dinas" as const,
      namaSatuan: "SMA Negeri 1 Surakarta",
      namaGuru: "Dr. Retno Wulandari, M.Biotech.",
      nipGuru: "198407222008012011",
      namaKepala: "Drs. H. Slamet Raharjo, M.Pd.",
      nipKepala: "196510141990031006",
      fase: "Fase F" as const,
      kelas: "Kelas XI",
      mataPelajaran: "Biologi",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Surakarta",
      tanggalPengesahan: "14 Juli 2025",
      durasiMenitJP: 45,
      instansiInduk: "PEMERINTAH PROVINSI JAWA TENGAH",
      kantorWilayah: "DINAS PENDIDIKAN DAN KEBUDAYAAN PROVINSI JAWA TENGAH",
      alamatSatuan: "Jl. Monginsidi No. 40, Margoyudan, Banjarsari, Surakarta 57128",
      kontakSatuan: "Telp. (0271) 652975 | Email: info@sman1surakarta.sch.id",
    },
  },
  {
    id: "ma-kimia-11",
    title: "MA - Kimia (Fase F, Kelas XI) [Kemenag]",
    data: {
      jalur: "Kemenag" as const,
      namaSatuan: "MAN 2 Kota Kediri",
      namaGuru: "M. Farhan Al-Habsyi, M.Pd., M.Si.",
      nipGuru: "198711052011011009",
      namaKepala: "Drs. H. Nursalim, M.Pd.I.",
      nipKepala: "196903171997031002",
      fase: "Fase F" as const,
      kelas: "Kelas XI",
      mataPelajaran: "Kimia",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Kota Kediri",
      tanggalPengesahan: "14 Juli 2025",
      durasiMenitJP: 45,
      instansiInduk: "KEMENTERIAN AGAMA REPUBLIK INDONESIA",
      kantorWilayah: "KANTOR KEMENTERIAN AGAMA KOTA KEDIRI",
      alamatSatuan: "Jl. Letjend Suprapto No. 58, Burengan, Pesantren, Kota Kediri 64131",
      kontakSatuan: "Telp. (0354) 682855 | Email: humas@man2kotakediri.sch.id",
    },
  },
  {
    id: "sma-bahasa-inggris-12",
    title: "SMA - Bahasa Inggris: Life Today (Fase F, Kelas XII) [Dinas]",
    data: {
      jalur: "Dinas" as const,
      namaSatuan: "SMA Negeri 1 Surakarta",
      namaGuru: "Dewi Anggraini, S.Pd., M.Ed.",
      nipGuru: "198807152014022004",
      namaKepala: "Drs. H. Sri Wibowo, M.Pd.",
      nipKepala: "196602111991031005",
      namaWakil: "Edi Wahyu, S.Pd.",
      nipWakil: "198503122010011015",
      fase: "Fase F" as const,
      kelas: "Kelas XII",
      mataPelajaran: "Bahasa Inggris",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Kota Surakarta",
      tanggalPengesahan: "14 Juli 2025",
      durasiMenitJP: 45,
      instansiInduk: "PEMERINTAH PROVINSI JAWA TENGAH",
      kantorWilayah: "DINAS PENDIDIKAN DAN KEBUDAYAAN PROVINSI JAWA TENGAH",
      alamatSatuan: "Jl. Monginsidi No. 40, Margoyudan, Banjarsari, Surakarta 57128",
      kontakSatuan: "Telp. (0271) 652975 | Email: info@sman1surakarta.sch.id",
    },
  },
  {
    id: "ma-bahasa-inggris-12",
    title: "MA - Bahasa Inggris: Life Today (Fase F, Kelas XII) [Kemenag KBC]",
    data: {
      jalur: "Kemenag" as const,
      namaSatuan: "MAN 2 Kota Kediri",
      namaGuru: "Nurul Hidayati, S.Pd., M.A.",
      nipGuru: "199104232018012003",
      namaKepala: "Drs. H. Nursalim, M.Pd.I.",
      nipKepala: "196903171997031002",
      namaWakil: "Edi Wahyu, S.Pd.",
      nipWakil: "198503122010011015",
      fase: "Fase F" as const,
      kelas: "Kelas XII",
      mataPelajaran: "Bahasa Inggris",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Kota Kediri",
      tanggalPengesahan: "14 Juli 2025",
      durasiMenitJP: 45,
      instansiInduk: "KEMENTERIAN AGAMA REPUBLIK INDONESIA",
      kantorWilayah: "KANTOR KEMENTERIAN AGAMA KOTA KEDIRI",
      alamatSatuan: "Jl. Letjend Suprapto No. 58, Burengan, Pesantren, Kota Kediri 64131",
      kontakSatuan: "Telp. (0354) 682855 | Email: humas@man2kotakediri.sch.id",
    },
  },
  {
    id: "sma-bahasa-inggris-11",
    title: "SMA - Bahasa Inggris: English for Change (Fase F, Kelas XI) [Dinas]",
    data: {
      jalur: "Dinas" as const,
      namaSatuan: "SMA Negeri 1 Surakarta",
      namaGuru: "Dewi Anggraini, S.Pd., M.Ed.",
      nipGuru: "198807152014022004",
      namaKepala: "Drs. H. Sri Wibowo, M.Pd.",
      nipKepala: "196602111991031005",
      namaWakil: "Edi Wahyu, S.Pd.",
      nipWakil: "198503122010011015",
      fase: "Fase F" as const,
      kelas: "Kelas XI",
      mataPelajaran: "Bahasa Inggris",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Kota Surakarta",
      tanggalPengesahan: "14 Juli 2025",
      durasiMenitJP: 45,
      instansiInduk: "PEMERINTAH PROVINSI JAWA TENGAH",
      kantorWilayah: "DINAS PENDIDIKAN DAN KEBUDAYAAN PROVINSI JAWA TENGAH",
      alamatSatuan: "Jl. Monginsidi No. 40, Margoyudan, Banjarsari, Surakarta 57128",
      kontakSatuan: "Telp. (0271) 652975 | Email: info@sman1surakarta.sch.id",
    },
  },
  {
    id: "ma-bahasa-inggris-11",
    title: "MA - Bahasa Inggris: English for Change (Fase F, Kelas XI) [Kemenag KBC]",
    data: {
      jalur: "Kemenag" as const,
      namaSatuan: "MAN 2 Kota Kediri",
      namaGuru: "Nurul Hidayati, S.Pd., M.A.",
      nipGuru: "199104232018012003",
      namaKepala: "Drs. H. Nursalim, M.Pd.I.",
      nipKepala: "196903171997031002",
      namaWakil: "Edi Wahyu, S.Pd.",
      nipWakil: "198503122010011015",
      fase: "Fase F" as const,
      kelas: "Kelas XI",
      mataPelajaran: "Bahasa Inggris",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Kota Kediri",
      tanggalPengesahan: "14 Juli 2025",
      durasiMenitJP: 45,
      instansiInduk: "KEMENTERIAN AGAMA REPUBLIK INDONESIA",
      kantorWilayah: "KANTOR KEMENTERIAN AGAMA KOTA KEDIRI",
      alamatSatuan: "Jl. Letjend Suprapto No. 58, Burengan, Pesantren, Kota Kediri 64131",
      kontakSatuan: "Telp. (0354) 682855 | Email: humas@man2kotakediri.sch.id",
    },
  },
  {
    id: "ma-bahasa-inggris-tingkat-lanjut-11",
    title: "MA - Bahasa Inggris Tingkat Lanjut (Fase F, Kelas XI) [Kemenag KBC]",
    data: {
      jalur: "Kemenag" as const,
      namaSatuan: "MAN 2 Kota Kediri",
      namaGuru: "Nurul Hidayati, S.Pd., M.A.",
      nipGuru: "199104232018012003",
      namaKepala: "Drs. H. Nursalim, M.Pd.I.",
      nipKepala: "196903171997031002",
      fase: "Fase F" as const,
      kelas: "Kelas XI",
      mataPelajaran: "Bahasa Inggris Tingkat Lanjut",
      tahunAjaran: "2025/2026",
      kotaSatuan: "Kota Kediri",
      tanggalPengesahan: "14 Juli 2025",
      durasiMenitJP: 45,
      instansiInduk: "KEMENTERIAN AGAMA REPUBLIK INDONESIA",
      kantorWilayah: "KANTOR KEMENTERIAN AGAMA KOTA KEDIRI",
      alamatSatuan: "Jl. Letjend Suprapto No. 58, Burengan, Pesantren, Kota Kediri 64131",
      kontakSatuan: "Telp. (0354) 682855 | Email: humas@man2kotakediri.sch.id",
    },
  },
];

