# DOKUMEN MASTER ARSITEKTUR SISTEM, PRD, DAD, DFD & ERD
## Engine Otomatisasi Administrasi Guru & Bank Soal Terpadu 2025/2026
**Full-Batch National Curriculum Compiler (Tuntas Seluruh CP 100% Tanpa Terpotong)**  
*Berdasarkan Permendikdasmen No. 10 & 13 Tahun 2025, BSKAP No. 046 & 058/2025, KMA No. 1503 Tahun 2025, dan Kepdirjen Pendis No. 6077 Tahun 2025*

---

## DAFTAR ISI
1. [BAB I: MASTER CONTEXT & OVERVIEW REPOSITORY](#bab-i-master-context--overview-repository)
2. [BAB II: PRODUCT REQUIREMENTS DOCUMENT (PRD)](#bab-ii-product-requirements-document-prd)
3. [BAB III: DETAILED ARCHITECTURAL DESIGN (DAD)](#bab-iii-detailed-architectural-design-dad)
4. [BAB IV: DATA FLOW DIAGRAM (DFD)](#bab-iv-data-flow-diagram-dfd)
   - 4.1 DFD Level 0 (Context Diagram)
   - 4.2 DFD Level 1 (Sistem Terdekomposisi)
   - 4.3 DFD Level 2 (Sub-Sistem Asesmen & Bank Soal)
5. [BAB V: ENTITY RELATIONSHIP DIAGRAM (ERD) & DATA DICTIONARY](#bab-v-entity-relationship-diagram-erd--data-dictionary)
6. [BAB VI: SPESIFIKASI API & LOGIKA DUAL-ENGINE ROUTING](#bab-vi-spesifikasi-api--logika-dual-engine-routing)
7. [BAB VII: PANDUAN PENGEMBANGAN & PEMELIHARAAN SISTEM](#bab-vii-panduan-pengembangan--pemeliharaan-sistem)

---

# BAB I: MASTER CONTEXT & OVERVIEW REPOSITORY

### 1.1 Latar Belakang & Identitas Platform
Platform ini dibangun untuk menyelesaikan krisis fragmentasi administrasi guru dan disparitas regulasi kurikulum pendidikan nasional Indonesia tahun ajaran 2025/2026. Seringkali, guru menghabiskan ratusan jam menyusun dokumen silabus yang terpotong-potong, menggunakan format KKM tunggal yang sudah usang, atau terjebak dalam template generik yang penuh placeholder `[...]` tanpa stimulus kontekstual.

Aplikasi ini berfungsi sebagai **Full-Batch National Curriculum Compiler**:
1. Mengambil data mentah Capaian Pembelajaran (CP) resmi dari database lokal / input AI.
2. Mendekonstruksi CP menjadi 8 hingga 16 Tujuan Pembelajaran (TP) atomik berbasis Taksonomi Bloom (C1 s.d. C6).
3. Mengeksekusi secara simultan seluruh 9 Dokumen Kurikulum Nasional untuk **SEMUA UNIT (Unit 1 s.d. Terakhir)** dalam satu aliran kerja deterministik.
4. Menyediakan **Pembuat Asesmen Terpadu** yang secara otomatis menghubungkan Bank Soal (Dokumen 9) dengan Matriks Kisi-Kisi (Dokumen 8).
5. Menyediakan **Ruang Kolaborasi Guru Berbagi** untuk saling menyalin (fork/clone), mengadaptasi, memberi rating bintang, dan mendiskusikan praktik baik.

### 1.2 Landasan Hukum Resmi (Regulasi 2025/2026)
Sistem memiliki validasi ketat yang mematuhi payung hukum resmi Republik Indonesia:
- **Standar Kompetensi Lulusan (SKL):** Permendikdasmen No. 10 Tahun 2025 & BSKAP No. 058/H/KR/2025 (8 Dimensi Profil Lulusan: Keimanan & Ketakwaan, Kewargaan, Penalaran Kritis, Kreativitas, Kolaborasi, Kemandirian, Kesehatan, Komunikasi).
- **Struktur Kurikulum & Beban Jam Pelajaran (JP):**
  - Jalur Dinas: Permendikdasmen No. 13 Tahun 2025.
  - Jalur Kemenag Madrasah: KMA No. 1503 Tahun 2025 & Kepdirjen Pendis No. 6077 Tahun 2025 (Pedoman KBC).
  - Standar Minggu Efektif: 36 Minggu/Tahun (Kelas Akhir VI, IX, XII, XIII = 32 Minggu).
  - Durasi JP: SD/MI = 35 Menit, SMP/MTs = 40 Menit, SMA/SMK/MA = 45 Menit.
- **Standar Asesmen (PPA Revisi 2025):** Mengharamkan KKM angka tunggal mati; mewajibkan Rubrik Interval KKTP Kualitatif (4 kategori: Baru Berkembang 0-40%, Layak 41-65%, Cakap 66-85%, Mahir 86-100%).

### 1.3 Struktur File Repository
```text
├── server.ts                   # Backend Express (Vite dev middleware & Gemini API proxy)
├── package.json                # Dependensi React 19, Tailwind v4, docx, jspdf, lucide-react
├── metadata.json               # Metadata applet AI Studio
├── src/
│   ├── main.tsx                # Entry point client
│   ├── App.tsx                 # Root component & state orchestration (Mode Switcher)
│   ├── types.ts                # TypeScript domain models (TeacherInput, Units, Documents, Asesmen, Shared)
│   ├── index.css               # Styling Tailwind CSS v4 & standard print A4 rules
│   ├── components/
│   │   ├── Navbar.tsx          # Navigasi utama (9 Dokumen, Pembuat Asesmen, Ruang Kolaborasi)
│   │   ├── RegulationBanner.tsx# Selektor jalur regulasi (Dinas vs Kemenag)
│   │   ├── InputForm.tsx       # Formulir identitas guru, sekolah, dan kurikulum
│   │   ├── DocumentViewer.tsx  # Viewer 9 dokumen lengkap dengan tab unit & cover bab
│   │   ├── AssessmentGenerator.tsx # Sistem integrasi Bank Soal & Kisi-Kisi Asesmen
│   │   ├── CollaborationHub.tsx    # Ruang kolaborasi, sharing, 1-click clone, rating & komentar
│   │   ├── KopSurat.tsx        # Kop dinas resmi 2 logo (Kemdikbud/Kemenag/Kustom)
│   │   ├── SignatureBlock.tsx  # Tanda tangan pengesahan asli Guru & Kepala Satuan
│   │   ├── LogoEmblem.tsx      # Vektor lambang resmi Tut Wuri Handayani & Ikhlas Beramal
│   │   ├── LogoUploader.tsx    # Komponen pengunggah logo kustom
│   │   └── documents/          # Komponen tampilan 9 Dokumen Resmi
│   │       ├── Doc0Cover.tsx   # Cover Sampul Utama Administrasi
│   │       ├── BabCover.tsx    # Cover Pembatas Bab (Interleaf)
│   │       ├── Doc1AnalisisCP.tsx # Dokumen 1: Analisis CP ke TP
│   │       ├── Doc2ATP.tsx     # Dokumen 2: Alur Tujuan Pembelajaran
│   │       ├── Doc3Prota.tsx   # Dokumen 3: Program Tahunan
│   │       ├── Doc4Prosem.tsx  # Dokumen 4: Program Semester (Ganjil & Genap)
│   │       ├── Doc5ModulAjar.tsx # Dokumen 5: Modul Ajar (Deep Learning / FIDS KBC)
│   │       ├── Doc6LKPD.tsx    # Dokumen 6: LKPD Penyelidikan Kontekstual
│   │       ├── Doc7KKTP.tsx    # Dokumen 7: Rubrik Interval Kualitatif
│   │       ├── Doc8KisiKisi.tsx# Dokumen 8: Matriks Kisi-Kisi Penulisan Soal
│   │       └── Doc9BankSoal.tsx# Dokumen 9: Bank Soal PGK & Uraian HOTS
│   ├── data/                   # Database Kurikulum Nasional In-Memory
│   │   ├── curriculumDatabase.ts   # Registry agregat CP dari Fase A s.d. Fase F
│   │   ├── faseADataset.ts     # Fase A (SD/MI Kelas 1-2)
│   │   ├── faseBDataset.ts     # Fase B (SD/MI Kelas 3-4)
│   │   ├── faseCDataset.ts     # Fase C (SD/MI Kelas 5-6)
│   │   ├── faseDDataset.ts     # Fase D (SMP/MTs Kelas 7-9)
│   │   ├── faseEDataset.ts     # Fase E (SMA/MA Kelas 10)
│   │   ├── faseFDataset.ts     # Fase F (SMA/MA Kelas 11-12)
│   │   ├── faseF_bahasa_inggris_xi.ts # English for Change Kelas XI (5 Units / 12 TPs)
│   │   ├── faseF_bahasa_inggris.ts    # Life Today Kelas XII (4 Units / 12 TPs)
│   │   └── *.json              # Basis pengetahuan per mata pelajaran
│   └── utils/
│       ├── engineGenerator.ts  # Kompiler deterministik utama 9 dokumen & 100% unit
│       ├── kkoExtractor.ts     # Parser KKO Taksonomi Bloom (C1-C6) & lingkup materi
│       ├── formatters.ts       # Format string fase, kelas, dan tanggal Indonesia
│       ├── docxExporter.ts     # Pengekspor berkas Microsoft Word (.docx) terstandar
│       ├── pdfExporter.ts      # Pengekspor PDF resolusi tinggi via jsPDF & html2canvas
│       ├── directPrinter.ts    # Engine cetak langsung A4 Portrait / Landscape
│       └── imageHelpers.ts     # Pengolah data URI logo dan grafis
```

---

# BAB II: PRODUCT REQUIREMENTS DOCUMENT (PRD)

### 2.1 Persona Pengguna & Masalah
1. **Guru Pengampu Mata Pelajaran (Dinas & Kemenag):** Membutuhkan silabus dan perangkat ajar tuntas tanpa template kosong, siap cetak untuk supervisi pengawas dan akreditasi sekolah.
2. **Kepala Satuan Pendidikan & Tim Kurikulum:** Menjamin seluruh administrasi guru di institusinya seragam, mematuhi regulasi 2025/2026, dan memiliki matriks penilaian mutu yang terukur.
3. **Siswa:** Menerima lembar tugas (LKPD) yang kontekstual dan asesmen yang bermakna (menghindari hafalan mati, berorientasi nalar kritis).

### 2.2 Ruang Lingkup Fitur (Feature Scope)

#### Fitur Utama 1: Master Document Pipeline Compiler (Dokumen 1 s.d. 9)
- **Mandat Total CP Exhaustion:** Sistem memproses seluruh elemen CP tanpa terpotong di Unit 1.
- **Keluaran 9 Dokumen Sekaligus:**
  - Dokumen 1: Analisis CP ke TP (KKO Bloom terukur + Konten Esensial).
  - Dokumen 2: ATP Lengkap 1 Tahun (Alokasi JP, Metode Pengurutan, Prasyarat, Target SKL).
  - Dokumen 3: Prota (Perhitungan JP semester ganjil/genap 100% tuntas).
  - Dokumen 4: Prosem (Distribusi beban JP mingguan Juli s.d. Juni).
  - Dokumen 5: Modul Ajar (Deep Learning [Mindful, Meaningful, Joyful] untuk Dinas ATAU FIDS [Feel, Imagine, Do, Share] untuk Kemenag).
  - Dokumen 6: LKPD Penyelidikan Kontekstual (Tabel observasi & pertanyaan C4-C6).
  - Dokumen 7: KKTP (Rubrik interval kualitatif 4 level tanpa KKM mati).
  - Dokumen 8: Kisi-Kisi Soal (Matriks distribusi level kognitif).
  - Dokumen 9: Bank Soal (PGK Model Asesmen Nasional + Uraian Kasus HOTS).
- **Aturan Zero-Placeholder:** Nama guru, NIP, nama kepala satuan, dan tahun ajaran tercetak asli di blok tanda tangan pengesahan dan lembar identitas tanpa tanda kurung `[...]`.

#### Fitur Utama 2: Generator Pembuat Asesmen Terpadu
- Mengintegrasikan Bank Soal (Dokumen 9) dengan Kisi-Kisi Asesmen (Dokumen 8).
- Guru dapat memilih TP tertentu atau Elemen CP tertentu.
- Opsi penentuan jumlah soal (5, 10, 15, 20 butir), tingkat kesulitan (Mudah, Sedang, HOTS, Proporsional), dan bentuk soal (PGK, Uraian Kasus HOTS, Campuran).
- Menghasilkan: Lembar Soal Siswa (Print Ready A4), Matriks Kisi-Kisi Soal terpilih, dan Kunci Jawaban & Rubrik Penskoran Guru.

#### Fitur Utama 3: Ruang Kolaborasi Guru Berbagi
- Guru dapat membagikan modul ajar atau paket lengkap yang telah dibuat ke repositori komunitas.
- Opsi **Salin & Adaptasi (1-Click Clone / Fork)**: Menyalin seluruh rancangan ajar dari guru lain ke lembar kerja pribadi, sehingga guru tinggal mengganti nama sekolah, NIP, dan pengesahan.
- Sistem Rating Bintang (1–5 Bintang) dan Ulasan Praktik Baik.
- Sistem Diskusi & Komentar Pedagogik antar guru.
- Filter pencarian berbasis mata pelajaran, fase/kelas, jalur, dan jenis dokumen.

#### Fitur Utama 4: Multi-Channel Exporter
- Cetak langsung ramah cetak browser (CSS `@media print` A4 Portrait 3cm gutter margin; Dokumen 4 A4 Landscape).
- Ekspor PDF resolusi tinggi via `html2canvas` dan `jsPDF`.
- Ekspor Microsoft Word (`.docx`) menggunakan pustaka `docx`.

---

# BAB III: DETAILED ARCHITECTURAL DESIGN (DAD)

### 3.1 Arsitektur Tingkat Tinggi (High-Level Architecture)
Sistem menggunakan pola **Client-Centric Hybrid Architecture** dengan backend Express sebagai proxy ringan:
```text
+------------------------------------------------------------------------------------+
|                               CLIENT LAYER (Browser)                              |
|  +--------------------+  +--------------------+  +-------------------------------+ |
|  |     Navbar &       |  |  InputForm &       |  |       DocumentViewer          | |
|  |  RegulationBanner  |  |  LogoUploader      |  |  (Render Dok 0 s.d. Dok 9)    | |
|  +--------------------+  +--------------------+  +-------------------------------+ |
|  +--------------------------------+  +-------------------------------------------+ |
|  |    AssessmentGenerator         |  |         CollaborationHub                  | |
|  | (Integrasi Bank Soal & Kisi-2) |  | (Sharing, Forking, Rating, Diskusi Komentar)| |
|  +--------------------------------+  +-------------------------------------------+ |
|                                                                                    |
|  +-------------------------------------------------------------------------------+ |
|  |                            CORE DOMAIN ENGINES                                | |
|  |  - engineGenerator.ts (100% CP Compiler & Unit Builder)                       | |
|  |  - kkoExtractor.ts (Bloom Taxonomy Parser C1 - C6)                            | |
|  |  - directPrinter.ts / pdfExporter.ts / docxExporter.ts                        | |
|  +-------------------------------------------------------------------------------+ |
|                                                                                    |
|  +------------------------------------+  +---------------------------------------+ |
|  | LOCAL KNOWLEDGE BASE (In-Memory)   |  | LOCAL STORAGE PERSISTENCE             | |
|  | - CURRICULUM_DATABASE (Fase A - F) |  | - kurikulum_app_input_v1 (Input State) | |
|  | - Fase F English for Change & XII  |  | - kurikulum_shared_community_docs_v1  | |
|  +------------------------------------+  +---------------------------------------+ |
+------------------------------------------------------------------------------------+
                                     │ (HTTP POST)
                                     ▼
+------------------------------------------------------------------------------------+
|                         SERVER LAYER (Node.js / Express)                          |
|  - GET  /api/health                                                                |
|  - POST /api/gemini/generate-curriculum (Gemini 3.1 Flash Lite / 3.8 Flash)        |
|  - Fallback Otomatis ke Local Compiler jika API Key Kosong / Rate Limit            |
+------------------------------------------------------------------------------------+
```

### 3.2 Dual-Engine Routing Matrix
Sistem menerapkan pemisahan terminologi dan sintaks pembelajaran yang sangat ketat:

| Aspek Regulasi | Jalur Dinas (Kemendikdasmen) | Jalur Kemenag (Madrasah) |
| :--- | :--- | :--- |
| **Dasar Hukum** | Permendikdasmen No. 10 & 13 Tahun 2025 | KMA No. 1503/2025 & Kepdirjen Pendis 6077/2025 |
| **Pendekatan Utama** | Pembelajaran Mendalam (*Deep Learning*) | Kurikulum Berbasis Cinta (*KBC*) |
| **Dimensi Pembelajaran**| 4 Olah: Olah Pikir, Hati, Rasa, dan Raga | Panca Cinta: Cinta Allah/Rasul, Diri/Sesama, Ilmu, Lingkungan, Bangsa |
| **Sintaks Modul Ajar** | 3 Tahap: Mindful, Meaningful, Joyful | 4 Tahap: Feel, Imagine, Do, Share (*FIDS*) |
| **Dimensi Karakter** | 8 Dimensi SKL BSKAP No. 058/2025 | 8 Dimensi SKL + 10 Nilai PPRA (*Ta'addub, Tawassut, Syura, dll.*) |
| **Terminologi Lembaga** | Sekolah, Kepala Sekolah, Wakasek Kurikulum | Madrasah, Kepala Madrasah, Wakamad Kurikulum |

---

# BAB IV: DATA FLOW DIAGRAM (DFD)

### 4.1 DFD Level 0 (Context Diagram)
Diagram konteks menggambarkan batasan sistem dan entitas eksternal yang berinteraksi dengannya:
```
               +---------------------------------------------+
               |                                             |
               |           GURU / PENGGUNA RESMI             |
               |                                             |
               +---------------------------------------------+
                     │                                   ▲
  1. Input Identitas │                                   │ 4. Dokumen 1 s.d. 9
  & Pilihan CP Mapel │                                   │    Naskah Asesmen Siswa
  2. Kriteria Soal   │                                   │    Kisi-kisi & Kunci Guru
  3. Dokumen Sharing │                                   │    Feedback Komunitas
                     ▼                                   │
               +─────────────────────────────────────────────+
               │                                             │
               │        SISTEM AUTOMATION ENGINE             │
               │       ADMINISTRASI GURU & ASESMEN           │
               │                                             │
               +─────────────────────────────────────────────+
                     │                                   ▲
  Req Dekonstruksi   │                                   │ JSON Structured
  Prompt CP (Opsional│                                   │ Atomic TPs (Bloom C1-C6)
                     ▼                                   │
               +---------------------------------------------+
               |        GOOGLE GEMINI LLM API SERVICE        |
               +---------------------------------------------+
```

### 4.2 DFD Level 1 (Sistem Terdekomposisi)
```
[GURU INPUT]
     │
     ▼
+──────────────────────────+
│ 1.0 PARSING & SELEKSI CP │ ◄─── [CURRICULUM_DATABASE (Fase A-F)]
+──────────────────────────+
     │
     │ Dataset CP Terpilih
     ▼
+──────────────────────────+       Fallback / Offline
│ 2.0 DEKONSTRUKSI ATOMIK  │ ───────────────────────────────┐
│     TUJUAN PEMBELAJARAN  │ ◄── [GEMINI AI PROXY / LOCAL]  │
+──────────────────────────+                                │
     │                                                      │
     │ Array Atomic TPs (8-16 TPs)                          │
     ▼                                                      │
+──────────────────────────+                                │
│ 3.0 MASTER PIPELINE      │ ◄──────────────────────────────┘
│     COMPILER (DOC 1 - 9) │
+──────────────────────────+
     │
     ├──────────────┬──────────────┬──────────────┐
     ▼              ▼              ▼              ▼
 [Doc 1-4]      [Doc 5-7]      [Doc 8 Kisi]   [Doc 9 Bank Soal]
 (CP,ATP,       (Modul, LKPD,  (Matriks Soal) (PGK & HOTS)
  Prota,Prosem)  KKTP Interval)       │              │
                                      ▼              ▼
                               +──────────────────────────+
                               │ 4.0 INTEGRASI ASESMEN    │
                               │     & KISI-KISI OTOMATIS │ ◄── [Kriteria Guru:
                               +──────────────────────────+      Jumlah, Bentuk,
                                     │                           Tingkat Kesulitan]
                                     ▼
                               [Naskah Asesmen Siswa + Kunci Guru]
```

### 4.3 DFD Level 2 (Sub-Sistem Asesmen & Bank Soal)
```
[Bank Soal (Doc 9)]                [Kisi-Kisi (Doc 8)]
        │                                  │
        └─────────────────┬────────────────┘
                          ▼
             +──────────────────────────+
             │ 4.1 Filter Soal by:      │ ◄─── [Pilihan TP / Elemen CP]
             │     - Kode TP            │
             │     - Elemen CP          │
             +──────────────────────────+
                          │
                          ▼
             +──────────────────────────+
             │ 4.2 Filter Format &      │ ◄─── [Bentuk: PGK / Uraian / Campuran]
             │     Tingkat Kesulitan    │ ◄─── [Level: Mudah / Sedang / HOTS]
             +──────────────────────────+
                          │
                          ▼
             +──────────────────────────+
             │ 4.3 Perakitan Naskah &   │ ◄─── [Header Satuan, Alokasi Waktu,
             │     Kop Ujian Resmi      │      Petunjuk Pengerjaan]
             +──────────────────────────+
                          │
        ┌─────────────────┴─────────────────┐
        ▼                                   ▼
 [Lembar Ujian Siswa]               [Pedoman Kunci & Rubrik Guru]
 (Kop, Identitas, Wacana,           (Kunci PGK, Pembahasan,
  Checkbox PGK, Garis Uraian)        Rubrik Skor & Rumus Nilai)
```

---

# BAB V: ENTITY RELATIONSHIP DIAGRAM (ERD) & DATA DICTIONARY

### 5.1 Diagram Relasi Entitas Konseptual
```text
 +---------------------+           1:N           +---------------------+
 |    TEACHER_INPUT    | ----------------------> |     UNIT_PACKAGE    |
 |---------------------|                         |---------------------|
 | PK  inputId         |                         | PK  unitId          |
 |     jalur (D/K)     |                         | FK  kodeTP          |
 |     namaSatuan      |                         |     unitNumber      |
 |     namaGuru        |                         |     unitTitle       |
 |     nipGuru         |                         |     chapterTitle    |
 |     namaKepala      |                         |     alokasiJP       |
 |     fase, kelas     |                         |     semester (G/G)  |
 |     mataPelajaran   |                         +---------------------+
 +---------------------+                                    │
            │                                               │
            │ 1:1                                           ├─ 1:1 ──> [DOC5_MODUL_AJAR]
            ▼                                               ├─ 1:1 ──> [DOC6_LKPD]
 +---------------------+                                    ├─ 1:1 ──> [DOC7_KKTP]
 | COMPLETE_DOC_PACKAGE|                                    ├─ 1:N ──> [DOC8_KISI_KISI]
 |---------------------|                                    └─ 1:1 ──> [DOC9_BANK_SOAL]
 | PK  packageId       |                                                    │
 |     doc1AnalisisCP  |                                                    │
 |     doc2ATP         |                                                    │
 |     doc3Prota       |                                                    ▼
 |     doc4Prosem      |                                         +---------------------+
 +---------------------+                                         |  ASSESSMENT_PAPER   |
                                                                 |---------------------|
                                                                 | PK  assessmentId    |
                                                                 |     judulAsesmen    |
                                                                 |     alokasiWaktu    |
                                                                 |     soalList (PGK,  |
                                                                 |       Uraian HOTS)  |
                                                                 |     totalSkorMax    |
                                                                 +---------------------+

 +-----------------------+         1:N           +---------------------+
 |  SHARED_DOCUMENT_ITEM | --------------------> |    SHARED_RATING    |
 |-----------------------|                       |---------------------|
 | PK  docId             |                       | PK  ratingId        |
 |     title, authorName |                       |     userId, score   |
 |     jalur, fase, kelas|                       +---------------------+
 |     avgRating         |         1:N           +---------------------+
 |     copyCount         | --------------------> |   SHARED_COMMENT    |
 |     payload (Input)   |                       |---------------------|
 +-----------------------+                       | PK  commentId       |
                                                 |     author, content |
                                                 +---------------------+
```

### 5.2 Kamus Data Utama (Data Dictionary)
1. **`TeacherInput`**
   - `jalur`: Enum `"Dinas" | "Kemenag"` (Wajib). Menentukan jalur regulasi.
   - `namaSatuan`, `namaGuru`, `nipGuru`, `namaKepala`, `nipKepala`: String (Wajib). Identitas legalitas.
   - `fase`: Enum `"Fase A" | "Fase B" | "Fase C" | "Fase D" | "Fase E" | "Fase F"`.
   - `kelas`: String (contoh: `"Kelas XI"`, `"Kelas XII"`).
   - `mataPelajaran`: String (contoh: `"Bahasa Inggris"`, `"Matematika"`).
   - `tahunAjaran`: String (contoh: `"2025/2026"`).
   - `durasiMenitJP`: Number (SD: 35, SMP: 40, SMA: 45).
2. **`UnitPackage`**
   - `unitNumber`: Number (Urutan unit 1..N).
   - `unitTitle`: String (Topik materi esensial unit).
   - `chapterTitle`: String (Nama Bab Buku Teks Resmi, misal: *Unit 1: Digital Literacies*).
   - `kodeTP`: String (Kunci relasi unik, misal: `"TP.01"`).
   - `doc5ModulAjar`: Object struktur modul (*Identitas, Ruang Lingkup, Desain, Siklus Langkah*).
   - `doc6LKPD`: Object struktur lembar kerja (*Stimulus, Tabel Investigasi, Pertanyaan HOTS*).
   - `doc7KKTP`: Object kriteria ketercapaian (*Indikator 4 interval kualitatif & tindak lanjut*).
   - `doc8KisiKisi`: Array matriks kisi-kisi penulisan soal.
   - `doc9BankSoal`: Object instrumen soal (*PGK stimulus multi-jawaban + Uraian HOTS C4-C6*).
3. **`GeneratedAssessmentPaper`**
   - `id`: String unik identifikasi instrumen ujian.
   - `judulAsesmen`: String (*Sumatif Harian / PTS / PAS*).
   - `waktuPengerjaan`: String (contoh: `"60 Menit"`).
   - `soalList`: Array butir soal terformat lengkap dengan stimulus, pilihan A-D, kunci, dan bobot.
   - `kisiKisi`: Array kisi-kisi Dokumen 8 yang tersaring sinkron dengan nomor butir soal.

---

# BAB VI: SPESIFIKASI API & LOGIKA DUAL-ENGINE ROUTING

### 6.1 Endpoint Health Check
- **URL:** `GET /api/health`
- **Tujuan:** Verifikasi kesiapan server dan deteksi keberadaan konfigurasi AI Gemini.
- **Response Success (200 OK):**
```json
{
  "status": "ok",
  "hasApiKey": true,
  "timestamp": "2026-10-20T12:00:00.000Z"
}
```

### 6.2 Endpoint AI Synthesis Proxy
- **URL:** `POST /api/gemini/generate-curriculum`
- **Request Body:**
```json
{
  "prompt": "Bedah Capaian Pembelajaran (CP) berikut untuk Mata Pelajaran Bahasa Inggris, Fase F, Kelas XI...",
  "systemInstruction": "Anda adalah Full-Batch National Curriculum Compiler..."
}
```
- **Karakteristik Ketahanan (Resilience):**
  1. Menggunakan SDK resmi modern `@google/genai`.
  2. Model Fallback Chain: Mencoba model `gemini-3.1-flash-lite`, jika sibuk/limit beralih ke `gemini-3.8-flash`.
  3. Strict Schema Enforcement: `responseSchema` mengunci struktur JSON keluaran berupa array TP atomik lengkap.
  4. Auto-Degradation to Local Compiler: Jika terjadi HTTP 429 atau kuota API habis, server secara mulus mengembalikan `fallbackToLocal: true` sehingga sistem beralih menggunakan database kompilasi nasional lokal tanpa pernah terjadi *crash* atau layar kosong.

---

# BAB VII: PANDUAN PENGEMBANGAN & PEMELIHARAAN SISTEM

### 7.1 Menambah Mata Pelajaran Baru pada Basis Pengetahuan
Untuk menambahkan silabus mata pelajaran baru ke dalam `CURRICULUM_DATABASE`:
1. Buat berkas data di `src/data/` (contoh: `faseX_mapel_baru.ts`).
2. Terapkan interface `CPDataset` dengan mendefinisikan seluruh `elemenList` dan `tpList`.
3. Cantumkan rincian `konteksPembelajaran` yang memuat:
   - `stimulus` (Dinas) dan `stimulusKemenag` (Madrasah).
   - `masalahNyata` (Pertanyaan pemantik).
   - `kegiatanEksplorasi` (Langkah eksperimen/penyelidikan).
   - `pertanyaanHOTS` (Level kognitif C4/C5/C6).
   - `rubrikIndikator` (Interval 4 kategori KKTP).
   - `soalPGK` dan `soalUraian` lengkap dengan pedoman penskoran.
4. Daftarkan pada berkas agregat `src/data/curriculumDatabase.ts`.

### 7.2 Standar Kualitas Cetak & Antarmuka
- **Anti-AI Slop:** Seluruh wacana dan soal wajib mengangkat fenomena nyata, tokoh inspiratif nyata (misal: Sadiman, Butet Manurung, Swietenia Puspa Lestari), atau kasus kontekstual otentik.
- **Standar Cetak:** Dokumen 1 s.d. Dokumen 9 wajib mempertahankan pagination page-break (`print:break-after-page` dan `print:break-inside-avoid`).
- **Penyimpanan Lokal:** Tidak ada dependensi server database eksternal untuk menyimpan draf guru; semua data input, dokumen tersalin, rating, dan komentar tersimpan aman di `localStorage` peramban guru.
