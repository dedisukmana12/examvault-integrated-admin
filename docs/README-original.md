# Engine Otomatisasi Administrasi Guru & Bank Soal Terpadu 2025/2026

Compiler dokumen kurikulum yang menghubungkan analisis CP, ATP, program tahunan/semester, modul ajar, LKPD, rubrik, kisi-kisi, dan bank soal.

## Modul antarmuka

Tabel ini menghubungkan komponen UI dengan berkas implementasinya dan tanggung jawab umumnya:

| Modul | Tanggung jawab |
|---|---|
| [`AssessmentGenerator`](./src/components/AssessmentGenerator.tsx) | Menyusun atau menghasilkan keluaran. |
| [`CollaborationHub`](./src/components/CollaborationHub.tsx) | Mengelola dan menelusuri data. |
| [`BabCover`](./src/components/documents/BabCover.tsx) | Menyediakan area antarmuka untuk alur terkait. |
| [`Doc0Cover`](./src/components/documents/Doc0Cover.tsx) | Menyediakan area antarmuka untuk alur terkait. |
| [`Doc1AnalisisCP`](./src/components/documents/Doc1AnalisisCP.tsx) | Menyediakan area antarmuka untuk alur terkait. |
| [`Doc2ATP`](./src/components/documents/Doc2ATP.tsx) | Menyediakan area antarmuka untuk alur terkait. |
| [`Doc3Prota`](./src/components/documents/Doc3Prota.tsx) | Menyediakan area antarmuka untuk alur terkait. |
| [`Doc4Prosem`](./src/components/documents/Doc4Prosem.tsx) | Menyediakan area antarmuka untuk alur terkait. |
| [`Doc5ModulAjar`](./src/components/documents/Doc5ModulAjar.tsx) | Menyediakan area antarmuka untuk alur terkait. |
| [`Doc6LKPD`](./src/components/documents/Doc6LKPD.tsx) | Menyediakan area antarmuka untuk alur terkait. |
| [`Doc7KKTP`](./src/components/documents/Doc7KKTP.tsx) | Menyediakan area antarmuka untuk alur terkait. |
| [`Doc8KisiKisi`](./src/components/documents/Doc8KisiKisi.tsx) | Menyediakan area antarmuka untuk alur terkait. |
| [`Doc9BankSoal`](./src/components/documents/Doc9BankSoal.tsx) | Menyediakan area antarmuka untuk alur terkait. |
| [`DocumentViewer`](./src/components/DocumentViewer.tsx) | Meninjau data atau dokumen. |
| [`InputForm`](./src/components/InputForm.tsx) | Mengumpulkan atau mengunggah informasi. |
| [`KopSurat`](./src/components/KopSurat.tsx) | Menyediakan area antarmuka untuk alur terkait. |
| [`LogoEmblem`](./src/components/LogoEmblem.tsx) | Menyediakan area antarmuka untuk alur terkait. |
| [`LogoUploader`](./src/components/LogoUploader.tsx) | Mengumpulkan atau mengunggah informasi. |
| [`RegulationBanner`](./src/components/RegulationBanner.tsx) | Menyediakan area antarmuka untuk alur terkait. |
| [`SignatureBlock`](./src/components/SignatureBlock.tsx) | Menyediakan area antarmuka untuk alur terkait. |

## Teknologi

- **Frontend:** React, TypeScript, dan Vite.
- **Antarmuka:** Tailwind CSS, Lucide React, Motion.
- **Backend:** Node.js dan Express.
- **AI:** Google GenAI SDK.
- **Dokumen dan berkas:** jsPDF, docx.

## Menjalankan secara lokal

### Prasyarat

- Node.js dan npm.

### Instalasi dan pengembangan

Jalankan perintah berikut dari folder proyek:

```powershell
npm install
npm run dev
```

Bila fitur memerlukan variabel lingkungan, gunakan nama variabel pada tabel berikut dan isi nilainya hanya di lingkungan lokal atau secret manager deployment. Jangan commit file `.env`.

| Variabel | Kegunaan |
|---|---|
| `GEMINI_API_KEY` | API key untuk fitur Gemini yang dipanggil server. Simpan sebagai environment variable atau secret deployment dan jangan commit nilainya. |

Template `.env.example` mendokumentasikan nama konfigurasi yang dikenali proyek. Isi konfigurasi melalui lingkungan runtime yang sesuai; jangan menaruh secret di kode frontend atau repository.

## Backend dan API

Proyek menyertakan server Node.js. Rute API berikut terdaftar pada implementasi server:

| Metode | Rute |
|---|---|
| `POST` | `/api/gemini/generate-curriculum` |
| `GET` | `/api/health` |

## Build dan pemeriksaan

- Build: `npm run build` (`vite build && esbuild server.ts --bundle --platform=node --format=cjs --packages=external --sourcemap --outfile=dist/server.cjs`).
- Pemeriksaan TypeScript: `npm run lint` (`tsc --noEmit`).
- Menjalankan script start: `npm start` (`node dist/server.cjs`).
- Preview hasil build: `npm run preview` (`vite preview`).

## Dokumentasi terkait

- [MASTER_CONTEXT_ARCHITECTURE_PRD.md](./docs/MASTER_CONTEXT_ARCHITECTURE_PRD.md)

## Lisensi

Lisensi repositori belum ditetapkan. Tambahkan berkas `LICENSE` sebelum memberikan izin penggunaan ulang.

---

Dokumentasi ini menjelaskan implementasi yang ditemukan pada kode sumber proyek. Periksa kembali konfigurasi dan perilaku aplikasi sebelum deployment.
