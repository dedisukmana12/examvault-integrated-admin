// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import { CPDataset } from "./curriculumDatabase";

export const FASE_F_BAHASA_INGGRIS_DATASETS: CPDataset[] = [
  // ============================================================================
  // BAHASA INGGRIS KELAS XII SMA/MA (FASE F)
  // Berdasarkan Buku Resmi: "Bahasa Inggris: Life Today untuk SMA/MA Kelas XII"
  // Kemendikbudristek 2022 (ISBN: 978-602-427-945-5)
  // Single Source of Truth: KB_ATOMIC_ATP_PROSEM_PROTA_MODUL_AJAR_INGGRIS_XII
  // 4 Unit Pembelajaran:
  // - Unit 1: Narrative Text: The Story of a Friendly Future (Theme: Renewable Energy)
  // - Unit 2: Argumentative Text: E-Money (Theme: Digital Money)
  // - Unit 3: Hortatory Exposition: Netiquette (Theme: Netiquette)
  // - Unit 4: Discussion Text: Carbon Footprints (Theme: Carbon Footprints)
  // Total 12 TP Atomik (6 TP Semester Ganjil + 6 TP Semester Genap)
  // ============================================================================
  {
    fase: "Fase F",
    kelasDefault: "Kelas XII",
    mapel: "Bahasa Inggris",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      // ------------------------------------------------------------------------
      // ELEMEN 1: MENYIMAK - BERBICARA (LISTENING - SPEAKING)
      // ------------------------------------------------------------------------
      {
        namaElemen: "Menyimak - Berbicara (Listening - Speaking)",
        deskripsiCP:
          "Memahami alur informasi secara keseluruhan dari teks lisan fiksi dan non fiksi tentang isu terkini atau topik terkait mata pelajaran lain; menggunakan bahasa Inggris untuk mengungkapkan pendapat dan mempertahankan argumen tentang topik yang dibahas. (Understand the entire flow of information in fiction and nonfiction spoken texts about current issues or topics related to other subjects; students use English to express their opinions and defend their arguments about the topics discussed).",
        kompetensiKKO: "Memahami Alur Informasi Lisan (C2), Menerapkan Ungkapan Opini (C3), Melakukan Wawancara Investigasi (C4), Mempertahankan Argumen Terstruktur (C5)",
        lingkupMateri: "Spoken Narratives, Energy Saving Dialogues, E-Money Podcasts, Expressions of Asking & Giving Opinions, Netiquette Conversations, Carbon Footprint Interviews",
        tpList: [
          // Unit 1 - TP.01
          {
            kodeTP: "TP.01",
            unitTitle: "Unit 1: Narrative Text: The Story of a Friendly Future",
            lingkupMateri: "Unit 1: Narrative Text - The Story of a Friendly Future (Listening & Speaking)",
            teksTP:
              "Memahami dan mengidentifikasi tujuan komunikatif, gagasan pokok, serta struktur skematik teks naratif lisan mengenai pemadaman listrik dan energi ramah lingkungan (renewable energy) melalui dialog interaktif dan role play penghematan energi.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Memahami percakapan transaksional dan interpersonal setara CEFR B1 (Fase E)",
            dimensiKarakterDinas: ["Penalaran Kritis", "Komunikasi", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Lingkungan", "PPRA: Dinamis dan Inovatif (Tathawwur wa Ibtikar)"],
            konteksPembelajaran: {
              stimulus: "Menyimak percakapan audio seorang remaja dan keluarganya saat menghadapi pemadaman listrik mendadak (power outage) dan mengeksplorasi solusi panel surya mini.",
              stimulusKemenag: "Menyimak dialog berbahasa Inggris tentang konservasi energi listrik sebagai wujud syukur atas nikmat cahaya dan amanah khalifah menjaga bumi (la tusrifu fil-hayat).",
              masalahNyata: "How can households reduce dependence on fossil fuel power grids and initiate practical renewable energy conservation during blackouts?",
              kegiatanEksplorasi: [
                "Building Knowledge of the Field (BKoF): Membedah glosarium kosakata tematik: renewable energy, power outage, electricity grid, solar panel, and energy conservation.",
                "Modelling of the Text (MoT): Menyimak rekaman dialog percakapan keluarga saat listrik padam dan menandai struktur narasi (Orientation, Complication, Resolution).",
                "Joint Construction (JCoT): Melakukan role play berpasangan mendiskusikan 3 langkah konkret penghematan energi listrik di lingkungan sekolah.",
                "Independent Construction (ICoT): Merangkum alur masalah dan solusi narasi lisan dalam 3 kalimat ringkas dengan kalimat sendiri."
              ],
              pertanyaanHOTS: [
                {
                  level: "C4 - Analisis Alur Narasi Lisan",
                  teks: "Analyze how the characters in the dialogue shift their perspective from panic over a blackout to realizing the urgency of household solar energy transition!"
                }
              ],
              rubrikIndikator: [
                {
                  kriteria: "Comprehension of Spoken Energy Narrative & Role Play",
                  baru: "Hanya menangkap beberapa kosakata acak tanpa memahami alur pokok percakapan hemat energi.",
                  layak: "Mampu mengidentifikasi penyebab listrik padam dan langkah solusi eksplisit dalam dialog.",
                  cakap: "Mampu menjelaskan struktur narasi lisan dan mendemonstrasikan role play percakapan hemat energi secara lancar.",
                  mahir: "Mampu menyintesis implikasi ketergantungan energi fosil dan memimpin simulasi advokasi energi bersih dengan diksi yang fasih."
                }
              ],
              soalPGK: {
                pertanyaan: "Based on the listened dialogue regarding energy conservation during a blackout, which statements ACCURATELY describe the characters' actions and conclusions? (Choose all correct answers!)",
                pilihan: [
                  { kode: "A", teks: "The family realizes that continuous reliance on non-renewable grid electricity is vulnerable to peak-load disruptions.", isCorrect: true },
                  { kode: "B", teks: "Installing a rooftop photovoltaic panel is discussed as an environmentally sound alternative for emergency lighting.", isCorrect: true },
                  { kode: "C", teks: "The father insists on buying a diesel-powered generator because fossil fuel emissions are completely harmless.", isCorrect: false },
                  { kode: "D", teks: "Unplugging phantom electronics when not in use significantly cuts baseline household power wastage.", isCorrect: true }
                ],
                kunci: "A, B, dan D",
                pembahasan: "Pilihan A, B, dan D didukung langsung oleh dialog tentang penghematan dan transisi energi terbarukan, sedangkan opsi C bertentangan dengan prinsip ramah lingkungan."
              },
              soalUraian: {
                level: "L3 (C5 - Evaluasi & Solusi)",
                pertanyaan: "Explain why community-level energy conservation requires both technological shifts (such as solar lamps) and behavioral habits (such as turning off standby electronics), based on the spoken dialogue!",
                kunci: "Technological shifts provide clean alternative supply channels, but without conscious daily conservation habits, total energy consumption remains excessive and strains both household finance and ecological balance.",
                rubrik: [
                  { kriteria: "Ketepatan mengaitkan aspek teknologi dan kebiasaan manusia", skor: 5 },
                  { kriteria: "Koherensi penjelasan dan akurasi tata bahasa Inggris", skor: 5 }
                ]
              }
            }
          },
          // Unit 2 - TP.04
          {
            kodeTP: "TP.04",
            unitTitle: "Unit 2: Argumentative Text: E-Money",
            lingkupMateri: "Unit 2: Argumentative Text - E-Money & Opinions (Listening & Speaking)",
            teksTP:
              "Menganalisis tujuan komunikatif teks argumentatif lisan dan mempraktikkan ungkapan meminta dan memberi pendapat (expressions of asking and giving opinions) mengenai transformasi uang elektronik (e-money) dan masyarakat nontunai (cashless society).",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "TP.01 Memahami teks lisan dan interaksi interpersonal",
            dimensiKarakterDinas: ["Penalaran Kritis", "Komunikasi", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "PPRA: Berimbang (Tawazun)"],
            konteksPembelajaran: {
              stimulus: "Menyimak podcast wicara remaja 'Digital Wallets vs Paper Money: Are We Ready for a 100% Cashless Society?' mengenai tren pembayaran digital QRIS dan dompet elektronik.",
              stimulusKemenag: "Menyimak diskusi ekonomi syariah berbahasa Inggris tentang transaksi nontunai yang mempermudah sedekah digital namun harus terhindar dari perilaku boros (israf) dan jebakan pinjaman online.",
              masalahNyata: "Does digital money genuinely enhance financial discipline among high school students, or does it trigger impulsive consumerism due to abstract spending?",
              kegiatanEksplorasi: [
                "BKoF: Mengidentifikasi istilah finansial digital: digital wallet, QR-code payment, transaction fee, contactless transaction, cyber fraud, and cashless society.",
                "MoT: Menyimak podcast dan memetakan penggunaan ungkapan: 'In my opinion...', 'What are your thoughts on...?', 'I see your point, but...', and 'Would you agree that...?'",
                "JCoT: Berpasangan melakukan simulasi debat mini 3 menit: satu siswa membela transaksi uang tunai, satu siswa membela uang elektronik.",
                "ICoT: Merekam opini lisan berdurasi 1 menit tentang kebiasaan mengelola uang saku digital secara bijak."
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Opini Finansial",
                  teks: "Evaluate whether the psychological detachment from physical banknotes in e-money transactions increases impulsive purchasing habits among adolescents!"
                }
              ],
              rubrikIndikator: [
                {
                  kriteria: "Expressing Opinions on E-Money in Spoken Context",
                  baru: "Ragu-ragu menyampaikan opini dan belum menguasai frasa asking/giving opinions.",
                  layak: "Mampu menyampaikan pendapat setuju/tidak setuju dengan frasa dasar.",
                  cakap: "Mampu menggunakan variasi frasa opini secara wajar dan memberikan alasan logis berbasis data transaksi.",
                  mahir: "Mampu mempertahankan argumen secara persuasif dan merespons sanggahan lawan bicara secara kritis dan santun."
                }
              ],
              soalPGK: {
                pertanyaan: "Which of the following phrases are APPROPRIATE for politely challenging someone's opinion during a spoken discussion on digital money? (Select all correct options!)",
                pilihan: [
                  { kode: "A", teks: "'I appreciate your viewpoint on convenience; however, have you considered the cybersecurity risks of server downtime?'", isCorrect: true },
                  { kode: "B", teks: "'Your argument makes no sense at all and everyone knows cash is obsolete.'", isCorrect: false },
                  { kode: "C", teks: "'While digital payments offer seamless speed, one could argue that they disadvantage unbanked rural communities.'", isCorrect: true },
                  { kode: "D", teks: "'From my perspective, data privacy remains a critical issue that digital wallet providers have yet to fully guarantee.'", isCorrect: true }
                ],
                kunci: "A, C, dan D",
                pembahasan: "Pilihan A, C, dan D menggunakan etika kesantunan diskusi akademis (polite hedging & counter-argument), sedangkan B merupakan ungkapan agresif non-akademik."
              },
              soalUraian: {
                level: "L3 (C5 - Argumentasi Lisan)",
                pertanyaan: "Formulate a balanced 3-sentence spoken response answering: 'Should school cafeterias completely ban physical banknotes and enforce digital payments only?'",
                kunci: "While mandating digital transactions accelerates queue efficiency and minimizes cash-handling hygiene risks, schools must accommodate students who do not own smartphones or bank accounts. Therefore, a hybrid transaction system remains the most inclusive policy to prevent socio-economic marginalization.",
                rubrik: [
                  { kriteria: "Keseimbangan sudut pandang efisiensi vs inklusivitas", skor: 5 },
                  { kriteria: "Kecakapan diksi opini dan transisi logis", skor: 5 }
                ]
              }
            }
          },
          // Unit 3 - TP.07
          {
            kodeTP: "TP.07",
            unitTitle: "Unit 3: Hortatory Exposition: Netiquette",
            lingkupMateri: "Unit 3: Hortatory Exposition - Netiquette & Cyber Civility (Listening & Speaking)",
            teksTP:
              "Mengidentifikasi tujuan komunikatif, argumen utama, dan rekomendasi persuasif dari teks eksposisi hortatori lisan serta menafsirkan etika kesantunan berinternet (netiquette) dalam interaksi komunikasi digital.",
            alokasiJP: 6,
            semester: "GENAP",
            prasyarat: "TP.04 Menganalisis wacana argumentatif lisan",
            dimensiKarakterDinas: ["Kewargaan", "Komunikasi", "Penalaran Kritis"],
            dimensiKarakterKemenag: ["Cinta Sesama Manusia", "PPRA: Berkeadaban (Ta'addub)"],
            konteksPembelajaran: {
              stimulus: "Menyimak rekaman siniar edukasi 'The Unwritten Rules of the Internet: Netiquette, Digital Footprint, and Online Civility' yang membahas pencegahan cyberbullying.",
              stimulusKemenag: "Menyimak ceramah berbahasa Inggris mengenai adab berkomunikasi di ruang publik digital: menjauhi ghibah online, memverifikasi berita hoaks (tabayyun), dan bertutur kata yang santun (qaulan layyina).",
              masalahNyata: "Why do otherwise courteous individuals often exhibit toxic aggression and cyber hostility when protected by online anonymity?",
              kegiatanEksplorasi: [
                "BKoF: Menyimak klip situasi pertengkaran di kolom komentar media sosial dan mengidentifikasi pelanggaran netiket.",
                "MoT: Menganalisis struktur eksposisi hortatori lisan: Thesis (urgensi netiket), Arguments (dampak kesehatan mental), Recommendation (anjuran aksi 3 langkah).",
                "JCoT: Berpasangan menyusun daftar 5 etika emas bermedia sosial (Golden Rules of Online Communication).",
                "ICoT: Menyampaikan pidato mini 2 menit berisi seruan (call-to-action) agar generasi muda menjaga kesantunan digital."
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Etika Siber",
                  teks: "How does the online disinhibition effect contribute to the erosion of digital civility, and what spoken recommendations can restore mutual respect?"
                }
              ],
              rubrikIndikator: [
                {
                  kriteria: "Comprehending Spoken Hortatory Text on Netiquette",
                  baru: "Mengetahui istilah netiket namun belum mampu membedakan argumen dan rekomendasi.",
                  layak: "Mampu menemukan bahaya cyberbullying yang disebutkan dalam dialog.",
                  cakap: "Mampu menguraikan struktur tesis-argumen-rekomendasi dan menyampaikan himbauan lisan secara runtut.",
                  mahir: "Mampu menganalisis akar psikologis disinhibisi online dan merumuskan solusi etika komunikasi siber secara berbobot."
                }
              ],
              soalPGK: {
                pertanyaan: "Based on the listened podcast about netiquette, which practices demonstrate RESPONSIBLE online communication? (Select all correct options!)",
                pilihan: [
                  { kode: "A", teks: "Fact-checking information with reliable independent sources before reposting or sharing widely.", isCorrect: true },
                  { kode: "B", teks: "Using ALL-CAPS font in chat rooms because shouting conveys authority.", isCorrect: false },
                  { kode: "C", teks: "Respecting other users' privacy by never sharing screenshots of private messages without consent.", isCorrect: true },
                  { kode: "D", teks: "Refraining from posting defamatory remarks or engaging in flame wars on public social threads.", isCorrect: true }
                ],
                kunci: "A, C, dan D",
                pembahasan: "A, C, dan D mencerminkan adab netiket (verifikasi, privasi, dan kesantunan), sedangkan B melanggar aturan etika internet karena HURUF KAPITAL dianggap berteriak kasar."
              },
              soalUraian: {
                level: "L3 (C5 - Rekomendasi Hortatori)",
                pertanyaan: "In hortatory exposition, how does the speaker formulate the 'Recommendation' section to move the listener from mere awareness to concrete behavioral action regarding netiquette?",
                kunci: "The speaker employs direct imperative modal verbs (e.g., 'we ought to pause before typing', 'users must report hate speech') combined with conditional outcome clauses, demonstrating that individual civility collectively transforms digital spaces into safe educational forums.",
                rubrik: [
                  { kriteria: "Penjelasan penggunaan modal verbs dan formulasi rekomendasi", skor: 5 },
                  { kriteria: "Kesesuaian dengan tujuan komunikatif teks hortatori", skor: 5 }
                ]
              }
            }
          },
          // Unit 4 - TP.10
          {
            kodeTP: "TP.10",
            unitTitle: "Unit 4: Discussion Text: Carbon Footprints",
            lingkupMateri: "Unit 4: Discussion Text - Carbon Footprints Interview (Listening & Speaking)",
            teksTP:
              "Mengevaluasi berbagai sudut pandang lisan mengenai isu pengurangan jejak karbon (carbon footprints) dan melakukan wawancara investigatif terstruktur dengan teman sebaya mengenai kebiasaan konsumsi ramah lingkungan.",
            alokasiJP: 6,
            semester: "GENAP",
            prasyarat: "TP.07 Memahami wacana eksposisi lisan",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kolaborasi", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Lingkungan", "PPRA: Keteladanan (Qudwah)"],
            konteksPembelajaran: {
              stimulus: "Menyimak rekaman wawancara antara jurnalis lingkungan dan dua aktivis pemuda yang memperdebatkan apakah jejak karbon individu lebih menentukan dibanding regulasi emisi korporasi raksasa.",
              stimulusKemenag: "Menyimak dialog berbahasa Inggris tentang tanggung jawab ekologis manusia sebagai penjaga keseimbangan kosmis (mizan) ciptaan Allah dari kerusakan akibat hawa nafsu eksploitatif.",
              masalahNyata: "Is calculating personal carbon footprints an empowering climate action for individuals, or merely an oil industry public relations deflection from corporate accountability?",
              kegiatanEksplorasi: [
                "BKoF: Mempelajari terminologi jejak karbon: greenhouse gases, transport emissions, diet carbon footprint, lifecycle assessment, and offset credits.",
                "MoT: Menyimak wawancara terstruktur dan mencatat strategi pewawancara dalam menggali data tanpa memotong jawaban secara kasar.",
                "JCoT: Menyusun kuesioner wawancara berpasangan berisi 5 pertanyaan seputar kebiasaan transportasi dan konsumsi makanan.",
                "ICoT: Melakukan wawancara langsung dengan rekan sebangku, mencatat temuan kuantitatif, dan menyajikan laporan ringkas hasil wawancara."
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Argumen Wawancara",
                  teks: "Critique the balance between individual lifestyle changes (like reducing beef intake) and systemic policy reform in combating global greenhouse gas accumulation!"
                }
              ],
              rubrikIndikator: [
                {
                  kriteria: "Conducting and Evaluating Spoken Carbon Footprint Interviews",
                  baru: "Menanyakan pertanyaan tanpa mencatat data tanggapan teman secara teratur.",
                  layak: "Mampu melakukan wawancara dasar dan menyalin data eksplisit.",
                  cakap: "Mampu mengajukan pertanyaan mendalam, menggali klarifikasi, dan merangkum temuan jejak karbon teman.",
                  mahir: "Mampu menyintesis kontradiksi antara kesadaran lingkungan dan kebiasaan nyata teman serta mempresentasikan analisis kritis."
                }
              ],
              soalPGK: {
                pertanyaan: "Based on the listened interview regarding carbon footprints, which habits are cited as generating the LARGEST per-capita greenhouse gas emissions? (Select all correct options!)",
                pilihan: [
                  { kode: "A", teks: "Frequent long-haul commercial aviation and single-occupancy private vehicle commutes.", isCorrect: true },
                  { kode: "B", teks: "High consumption of industrial feedlot red meat compared to locally sourced plant-based proteins.", isCorrect: true },
                  { kode: "C", teks: "Using public electric commuter rails for daily transit.", isCorrect: false },
                  { kode: "D", teks: "High household consumption of coal-powered electricity for continuous unmonitored climate cooling.", isCorrect: true }
                ],
                kunci: "A, B, dan D",
                pembahasan: "A, B, dan D terbukti secara empiris menghasilkan jejak karbon tertinggi, sedangkan C (kereta listrik massal) justru merupakan moda transportasi rendah karbon."
              },
              soalUraian: {
                level: "L3 (C5 - Wawancara & Evaluasi)",
                pertanyaan: "Draft two open-ended interview questions in English designed to assess a high school student's awareness of their daily transportation carbon footprint!",
                kunci: "Question 1: 'How do you typically commute to school each day, and what alternative low-emission transport options have you considered?' Question 2: 'In what ways do you think local municipal governments could make public transit more accessible and attractive for students?'",
                rubrik: [
                  { kriteria: "Format pertanyaan terbuka (open-ended) yang mendalam", skor: 5 },
                  { kriteria: "Ketepatan tata bahasa dan leksikon lingkungan", skor: 5 }
                ]
              }
            }
          }
        ]
      },

      // ------------------------------------------------------------------------
      // ELEMEN 2: MEMBACA - MEMIRSA (READING - VIEWING)
      // ------------------------------------------------------------------------
      {
        namaElemen: "Membaca - Memirsa (Reading - Viewing)",
        deskripsiCP:
          "Mengevaluasi informasi tersurat dan tersirat dari berbagai jenis teks fiksi dan non fiksi tertulis atau teks multimodal tentang isu terkini atau topik yang terkait mata pelajaran lain. (Evaluate explicit and implicit information in fiction and nonfiction from written and multimodal texts about current issues or topics related to other subjects).",
        kompetensiKKO: "Menganalisis Struktur Teks (C4), Membedah Fitur Kebahasaan (C4), Mengevaluasi Fakta vs Opini (C5), Menginterpretasi Pesan Multimodal (C5)",
        lingkupMateri: "Narrative Texts ('The Story of a Friendly Future'), Argumentative Essays on E-Money, Hortatory Expositions on Netiquette, Discussion Texts on Carbon Footprints",
        tpList: [
          // Unit 1 - TP.02
          {
            kodeTP: "TP.02",
            unitTitle: "Unit 1: Narrative Text: The Story of a Friendly Future",
            lingkupMateri: "Unit 1: Narrative Text - Renewable Energy & Action Verbs (Reading & Viewing)",
            teksTP:
              "Menganalisis fitur kebahasaan (past tenses dan action verbs) serta menyimpulkan informasi eksplisit dan implisit dalam teks naratif tertulis 'The Story of a Friendly Future' dan tayangan video mengenai energi terbarukan.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "Mampu membaca dan memahami gagasan pokok teks naratif fiksi/non-fiksi (Fase E)",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "PPRA: Dinamis dan Inovatif (Tathawwur)"],
            konteksPembelajaran: {
              stimulus: "Membaca teks cerita inspiratif 'The Story of a Friendly Future' dari Buku Bahasa Inggris Kelas XII Bab 1 yang mengisahkan perjuangan komunitas pedesaan membangun kincir angin dan panel surya.",
              stimulusKemenag: "Mengkaji teks bahasa Inggris tentang perjuangan para pemuda muslim di desa terpencil yang berikhtiar menerangi desa dengan memanfaatkan aliran sungai (mikrohidro).",
              masalahNyata: "How did the characters overcome technical failures and communal skepticism when constructing their first community-based renewable energy generator?",
              kegiatanEksplorasi: [
                "Skimming & Scanning: Menemukan setting waktu/tempat dan karakter utama dalam bagian Orientation.",
                "Grammar in Context: Mengidentifikasi kalimat past tense (Simple Past & Past Continuous) dan menandai action verbs yang menunjukkan perjuangan fisik tokoh (e.g., assembled, climbed, harnessed, repaired).",
                "Text Structure Mapping: Menyusun bagan alur komplikasi (Complication), evaluasi krisis (Evaluation), penyelesaian (Resolution), dan pesan moral (Coda).",
                "Inferential Reading: Menganalisis pesan tersirat tentang pentingnya persistensi sains di balik keberhasilan teknologi hijau."
              ],
              pertanyaanHOTS: [
                {
                  level: "C4 - Analisis Karakter & Fitur Bahasa",
                  teks: "Examine how the author's deliberate choice of dynamic action verbs in the complication section conveys the physical resilience required to build renewable energy infrastructure!"
                }
              ],
              rubrikIndikator: [
                {
                  kriteria: "Reading Comprehension & Language Feature Analysis (Narrative)",
                  baru: "Kesulitan membedakan past tenses dan kata kerja aksi dalam teks naratif.",
                  layak: "Mampu menemukan fakta eksplisit mengenai nama tokoh dan rintangan yang dihadapi.",
                  cakap: "Mampu membedah struktur komplikasi-resolusi serta menganalisis penggunaan past tenses secara akurat.",
                  mahir: "Mampu menyimpulkan makna filosofis coda cerita dan mengkritisi efektivitas teknik penulisan naratif pengarang."
                }
              ],
              soalPGK: {
                pertanyaan: "Read the excerpt from 'The Story of a Friendly Future' where the protagonist repairs the wind turbine during a storm. Which conclusions are supported by textual evidence? (Choose all correct options!)",
                pilihan: [
                  { kode: "A", teks: "The author uses action verbs such as 'tightened', 'struggled', and 'hoisted' to depict intense physical exertion.", isCorrect: true },
                  { kode: "B", teks: "The villagers abandoned the renewable energy project immediately after the first mechanical failure.", isCorrect: false },
                  { kode: "C", teks: "The past continuous tense 'winds were howling' sets the dramatic atmospheric background for the complication.", isCorrect: true },
                  { kode: "D", teks: "The resolution demonstrates that collective technological collaboration overcomes environmental adversity.", isCorrect: true }
                ],
                kunci: "A, C, dan D",
                pembahasan: "A, C, dan D sesuai dengan bukti tekstual analisis kebahasaan dan plot cerita, sedangkan B bertentangan dengan alur resolusi di mana warga justru berhasil."
              },
              soalUraian: {
                level: "L3 (C4 - Analisis Implisit)",
                pertanyaan: "Infer what the author implies by ending the story with the phrase: 'The wind had always blown across our hills, but only now did we learn to listen to its power'!",
                kunci: "The author implies that clean natural forces have always been bountifully present in our environment, but human progress depends upon scientific wisdom, technological curiosity, and harmonious alignment with nature rather than wasteful exploitation.",
                rubrik: [
                  { kriteria: "Ketepatan interpretasi metafora angin dan kearifan sains", skor: 5 },
                  { kriteria: "Kedalaman analisis makna tersirat", skor: 5 }
                ]
              }
            }
          },
          // Unit 2 - TP.05
          {
            kodeTP: "TP.05",
            unitTitle: "Unit 2: Argumentative Text: E-Money",
            lingkupMateri: "Unit 2: Argumentative Text - Claims, Evidence & Cashless Society (Reading & Viewing)",
            teksTP:
              "Menganalisis gagasan utama, keterkaitan klaim dan data pembuktian, serta informasi tersirat dalam teks argumentatif tertulis dan materi infografik perbankan mengenai pro-kontra uang elektronik (e-money).",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "TP.02 Menganalisis teks naratif dan struktur wacana tertulis",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas"],
            dimensiKarakterKemenag: ["Cinta Kebenaran", "PPRA: Berimbang (Tawazun)"],
            konteksPembelajaran: {
              stimulus: "Membaca teks esai argumentatif 'The Double-Edged Sword of E-Money: Financial Inclusion versus Digital Vulnerability' dari Buku Bahasa Inggris Kelas XII Bab 2.",
              stimulusKemenag: "Kajian teks bahasa Inggris tentang keadilan ekonomi syariah dalam ekosistem dompet digital untuk mencegah monopoli konglomerasi finansial dan melindungi UMKM kecil.",
              masalahNyata: "How do authors organize claims, counterclaims, and statistical data to convince readers of the economic trade-offs in digital transactions?",
              kegiatanEksplorasi: [
                "Skimming teks untuk menemukan tesis utama penulis mengenai transformasi uang nontunai.",
                "Menguraikan argumen pendukung: efisiensi transaksi, pencatatan keuangan otomatis, risiko peretasan siber, dan eksklusi warga lansia.",
                "Memeriksa kata penghubung penalaran (connectors of cause, concession, and contrast: however, consequently, albeit, on the contrary).",
                "Membuat matriks perbandingan pro-kontra uang tunai vs uang elektronik."
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Argumen Finansial",
                  teks: "Evaluate whether the author's counterclaim regarding elderly digital disenfranchisement weakens or strengthens the overall thesis advocating for cashless adoption!"
                }
              ],
              rubrikIndikator: [
                {
                  kriteria: "Analyzing Written Argumentative Text on E-Money",
                  baru: "Kesulitan memisahkan klaim penulis dari data statistik pendukung.",
                  layak: "Mampu menemukan kelebihan dan kekurangan uang elektronik yang tertulis jelas.",
                  cakap: "Mampu memetakan struktur klaim, bukti, dan sanggahan tandingan dengan teliti.",
                  mahir: "Mampu mengevaluasi reliabilitas bukti ekonomi yang dikutip serta menyintesis implikasi makroekonominya."
                }
              ],
              soalPGK: {
                pertanyaan: "Based on the argumentative text on e-money, which arguments VALIDLY support the transition toward cashless transactions while recognizing systemic limits? (Choose all correct options!)",
                pilihan: [
                  { kode: "A", teks: "Digital ledgers minimize underground shadow economies and curtail cash-based tax evasion.", isCorrect: true },
                  { kode: "B", teks: "Digital money eliminates 100% of all financial fraud and identity theft worldwide.", isCorrect: false },
                  { kode: "C", teks: "Micro-merchants benefit from instant contactless settlements without carrying bulky cash change.", isCorrect: true },
                  { kode: "D", teks: "A resilient economy still requires fallback offline payment channels during regional telecommunication blackouts.", isCorrect: true }
                ],
                kunci: "A, C, dan D",
                pembahasan: "A, C, dan D merupakan deduksi logis dari teks argumentatif berimbang, sedangkan B adalah klaim mutlak (absolutist claim) yang keliru karena kejahatan siber tetap ada."
              },
              soalUraian: {
                level: "L3 (C5 - Analisis Kohesi Teks)",
                pertanyaan: "Explain how the author utilizes concessive connectors such as 'Notwithstanding' and 'While it is true that...' to maintain scholarly objectivity in an argumentative text on cashless banking!",
                kunci: "Concessive connectors acknowledge opposing realities without derailing the central thesis; they show that the author has rigorously considered potential drawbacks before arriving at a balanced, credible recommendation.",
                rubrik: [
                  { kriteria: "Pemahaman fungsi konektor konsesif dalam wacana akademik", skor: 5 },
                  { kriteria: "Penerapan analisis pada konteks uang elektronik", skor: 5 }
                ]
              }
            }
          },
          // Unit 3 - TP.08
          {
            kodeTP: "TP.08",
            unitTitle: "Unit 3: Hortatory Exposition: Netiquette",
            lingkupMateri: "Unit 3: Hortatory Exposition - Fact vs Opinion & Present Tense (Reading & Viewing)",
            teksTP:
              "Mengkategorikan fakta dan opini, membedah fitur kebahasaan present tense dan emotive phrases, serta menganalisis struktur skematik (thesis, arguments, recommendation) pada teks eksposisi hortatori bertema netiket dan kesantunan digital.",
            alokasiJP: 6,
            semester: "GENAP",
            prasyarat: "TP.05 Menganalisis teks argumentatif tertulis",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Keadilan", "PPRA: Keteladanan (Qudwah)"],
            konteksPembelajaran: {
              stimulus: "Membaca teks eksposisi hortatori 'Netiquette: Why Online Civility Is Not Optional in the Algorithmic Age' dari Buku Bahasa Inggris Kelas XII Bab 3.",
              stimulusKemenag: "Kajian teks bahasa Inggris tentang etika amar ma'ruf nahi munkar di jagat maya dengan menjunjung martabat kemanusiaan dan menolak ujaran kebencian.",
              masalahNyata: "How can readers rigorously distinguish between verifiable factual data (e.g., cybercrime statistics) and emotionally charged subjective opinions in online editorials?",
              kegiatanEksplorasi: [
                "Membedah kalimat-kalimat teks ke dalam tabel pemilahan dua kolom: Factual Statements vs Subjective Opinions.",
                "Menandai penggunaan Simple Present Tense untuk menyatakan kebenaran umum (general truths) dan fakta siber.",
                "Mengidentifikasi emotive words & phrases yang dirancang untuk menggugah nurani pembaca (e.g., toxic vitriol, devastating impact, digital empathy, collective responsibility).",
                "Menganalisis koherensi antara bagian Arguments dan bagian Recommendation (apakah rekomendasi menjawab masalah yang dipaparkan)."
              ],
              pertanyaanHOTS: [
                {
                  level: "C4 - Klasifikasi Fakta vs Opini & Emotive Language",
                  teks: "Classify three sentences from the text into facts or opinions, and evaluate how the author's emotive vocabulary influences reader empathy toward victims of cyberbullying!"
                }
              ],
              rubrikIndikator: [
                {
                  kriteria: "Distinguishing Fact vs Opinion & Analyzing Hortatory Features",
                  baru: "Sering tertukar antara pernyataan fakta objektif dan klaim opini subjektif.",
                  layak: "Mampu membedakan fakta statistik sederhana dari opini penulis.",
                  cakap: "Mampu mengklasifikasikan fakta-opini secara akurat dan menganalisis peran emotive phrases serta present tense.",
                  mahir: "Mampu membongkar bias retorika teks dan mengevaluasi validitas logis rekomendasi penulis secara komprehensif."
                }
              ],
              soalPGK: {
                pertanyaan: "Examine the following sentences from the netiquette hortatory article. Which of them qualify as VERIFIABLE FACTS rather than SUBJECTIVE OPINIONS? (Select all correct options!)",
                pilihan: [
                  { kode: "A", teks: "'According to a 2023 UNESCO report, over 40% of surveyed adolescents reported experiencing online harassment.'", isCorrect: true },
                  { kode: "B", teks: "'Internet trolls are the most despicable and irredeemable individuals in modern society.'", isCorrect: false },
                  { kode: "C", teks: "'Section 27 of Indonesia's Electronic Information and Transactions (ITE) Law regulates defamatory digital speech.'", isCorrect: true },
                  { kode: "D", teks: "'Social media platforms utilize algorithmic feeds designed to maximize user session duration through engagement metrics.'", isCorrect: true }
                ],
                kunci: "A, C, dan D",
                pembahasan: "A, C, dan D merupakan fakta empiris/yuridis yang dapat diverifikasi datanya. Opsi B murni opini emosional subjektif (emotive opinion)."
              },
              soalUraian: {
                level: "L3 (C4 - Analisis Fitur Kebahasaan)",
                pertanyaan: "Identify two emotive phrases in the hortatory text and explain how the author employs them to persuade readers to adopt stricter self-regulation on social media!",
                kunci: "Phrases such as 'irreversible psychological scarring' and 'toxic digital cesspool' evoke visceral alarm, prompting readers to recognize that casual online cruelty inflicts tangible emotional devastation, thereby motivating proactive adoption of civil netiquette.",
                rubrik: [
                  { kriteria: "Ketepatan identifikasi dua frasa emotif", skor: 5 },
                  { kriteria: "Penjelasan fungsi persuasif terhadap empati pembaca", skor: 5 }
                ]
              }
            }
          },
          // Unit 4 - TP.11
          {
            kodeTP: "TP.11",
            unitTitle: "Unit 4: Discussion Text: Carbon Footprints",
            lingkupMateri: "Unit 4: Discussion Text - Multi-Perspective Analysis & Passive Voice (Reading & Viewing)",
            teksTP:
              "Menganalisis multi-perspektif (pro dan kontra), membedakan fakta dan opini, serta mengidentifikasi fitur kebahasaan (generic participants, thinking verbs, modality, contrastive conjunctions, passive voice) dalam teks diskusi tertulis mengenai jejak karbon (carbon footprints).",
            alokasiJP: 6,
            semester: "GENAP",
            prasyarat: "TP.08 Menganalisis teks eksposisi dan fakta vs opini",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Lingkungan", "PPRA: Berimbang (Tawazun)"],
            konteksPembelajaran: {
              stimulus: "Membaca teks diskusi 'Dietary Choices and Planetary Health: Should Meat Consumption Be Taxed to Curtail Carbon Footprints?' dari Buku Bahasa Inggris Kelas XII Bab 4.",
              stimulusKemenag: "Kajian teks bahasa Inggris tentang konsumsi pangan yang halalan thayyiban, seimbang, dan tidak berlebih-lebihan (israf) untuk menjaga kelestarian ekosistem bumi ciptaan Allah.",
              masalahNyata: "Does imposing carbon taxes on red meat unfairly burden low-income families or is it an essential policy instrument to prevent catastrophic planetary warming?",
              kegiatanEksplorasi: [
                "Issue Identification: Menemukan pernyataan isu kontroversial yang dibahas di bagian pendahuluan teks diskusi.",
                "Arguments Mapping: Mengelompokkan paragraf ke dalam kubu pendukung pajak daging (Arguments For) dan kubu penentang (Arguments Against).",
                "Language Feature Hunting: Menemukan contoh: Generic participants (consumers, governments, livestock farmers), Thinking verbs (believe, argue, contemplate), Modality (may, could, would), Contrastive conjunctions (on the other hand, conversely, nevertheless), and Passive voice (are emitted, was calculated).",
                "Synthesis & Conclusion: Menelaah bagaimana penulis merumuskan kesimpulan berimbang yang mengakomodasi kedua belah pihak."
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Keseimbangan Teks Diskusi",
                  teks: "Evaluate whether the author maintains equal rhetorical weight between economic arguments against meat taxation and environmental evidence supporting emission cuts!"
                }
              ],
              rubrikIndikator: [
                {
                  kriteria: "Dissecting Discussion Text Features & Multi-Perspectives",
                  baru: "Menilai teks diskusi memihak salah satu kubu tanpa melihat struktur berimbang.",
                  layak: "Mampu menemukan argumen setuju dan argumen menolak secara eksplisit.",
                  cakap: "Mampu mengidentifikasi 5 fitur kebahasaan diskusi (generic participants, modality, passive voice, dsb.) dan membedakan fakta dari opini.",
                  mahir: "Mampu menyintesis kedua perspektif yang berlawanan dan merumuskan kompromi kebijakan lingkungan yang etis dan realistis."
                }
              ],
              soalPGK: {
                pertanyaan: "Which linguistic features in the excerpt from the discussion text on carbon footprints reflect standard conventions of the DISCUSSION genre? (Select all correct options!)",
                pilihan: [
                  { kode: "A", teks: "Use of generic participants such as 'agricultural economists' and 'environmental advocates' rather than individualized proper nouns.", isCorrect: true },
                  { kode: "B", teks: "Use of contrastive conjunctions such as 'On the other hand' and 'Conversely' to signal shifts between opposing viewpoints.", isCorrect: true },
                  { kode: "C", teks: "Use of subjective angry exclamations such as 'Shut down all cattle farms immediately!'", isCorrect: false },
                  { kode: "D", teks: "Use of epistemic modal verbs such as 'could potentially mitigate' and 'might inadvertently trigger' to indicate nuanced probability.", isCorrect: true }
                ],
                kunci: "A, B, dan D",
                pembahasan: "A, B, dan D merupakan fitur kebahasaan genre diskusi akademik (generic participants, contrastive transitions, and hedging modality). C adalah bahasa emosional non-diskusi."
              },
              soalUraian: {
                level: "L3 (C4 - Analisis Kalimat Pasif & Modalitas)",
                pertanyaan: "Explain why authors of discussion texts frequently deploy the passive voice (e.g., 'Methane is generated during enteric fermentation') instead of active voice, and how modality tempers definitive claims!",
                kunci: "The passive voice shifts objective focus to the scientific phenomenon rather than personal actors, establishing academic distance. Meanwhile, modality (e.g., 'could reduce emissions by 15%') prevents unwarranted dogmatism by acknowledging empirical variations in agricultural modeling.",
                rubrik: [
                  { kriteria: "Penjelasan fungsi objektivitas kalimat pasif", skor: 5 },
                  { kriteria: "Penjelasan fungsi modalitas dalam penalaran ilmiah", skor: 5 }
                ]
              }
            }
          }
        ]
      },

      // ------------------------------------------------------------------------
      // ELEMEN 3: MENULIS - MEMPRESENTASIKAN (WRITING - PRESENTING)
      // ------------------------------------------------------------------------
      {
        namaElemen: "Menulis - Mempresentasikan (Writing - Presenting)",
        deskripsiCP:
          "Menulis berbagai jenis teks fiksi dan non fiksi, merencanakan, menulis, mengulas dan merevisi teks dengan memperhatikan tujuan, struktur, dan unsur kebahasaan; mempresentasikan gagasan secara lisan dan multimodal dengan percaya diri dan efektif. (Write fiction and nonfiction texts, plan, draft, review, and revise texts taking into account purpose, structure, and language features; present ideas orally and multimodally with confidence and effectiveness).",
        kompetensiKKO: "Merancang Draf Teks (C6), Merevisi & Menyunting (C5), Memproduksi Teks Genre Khusus (C6), Mempresentasikan Gagasan Multimodal (C6)",
        lingkupMateri: "Writing Renewable Energy Narratives, Retelling Stories, Writing Argumentative Podcast Scripts, Composing Hortatory Texts on Netiquette, Writing Discussion Texts on Carbon Footprints",
        tpList: [
          // Unit 1 - TP.03
          {
            kodeTP: "TP.03",
            teksTP:
              "Menulis teks naratif orisinal bertema transisi energi terbarukan dengan menerapkan struktur skematik (orientation, complication, resolution, coda) dan fitur kebahasaan yang sesuai, serta menceritakan kembali (retelling) alur cerita secara lisan di depan kelas.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "TP.02 Menganalisis teks naratif dan unsur kebahasaannya",
            dimensiKarakterDinas: ["Kreativitas", "Penalaran Kritis", "Komunikasi"],
            dimensiKarakterKemenag: ["Cinta Karya Nyata", "PPRA: Dinamis dan Inovatif (Tathawwur)"],
            konteksPembelajaran: {
              stimulus: "Proyek penulisan fiksi lingkungan: Murid merancang cerita fiksi ilmiah pendek (250-300 kata) tentang penemuan teknologi energi bersih di desa masa depan Indonesia.",
              stimulusKemenag: "Menulis kisah inspiratif tentang ikhtiar pemuda madrasah menghidupkan kembali lahan kritis menjadi pembangkit listrik tenaga angin ramah lingkungan.",
              masalahNyata: "How can creative storytelling bridge the gap between abstract scientific data on green energy and emotional human inspiration?",
              kegiatanEksplorasi: [
                "Pre-Writing: Menyusun peta plot narasi (Story Mountain: Opening setting, Rising action, Climax conflict, Falling action, Resolution).",
                "Drafting: Menulis draf cerita naratif menggunakan past tenses dan action verbs yang kaya.",
                "Reviewing & Editing: Memeriksa kesesuaian tanda baca dialog langsung, past tense concord, dan kekuatan coda.",
                "Oral Retelling: Mempraktikkan teknik retelling lisan menggunakan intonasi dramatik, gesture, dan media gambar visual sederhana."
              ],
              pertanyaanHOTS: [
                {
                  level: "C6 - Penulisan Kreatif & Retelling",
                  teks: "Compose an original narrative climax depicting the sudden breakdown of a solar battery during a village storm, and describe how your characters collaboratively restore power!"
                }
              ],
              rubrikIndikator: [
                {
                  kriteria: "Writing Renewable Energy Narrative & Story Retelling",
                  baru: "Teks belum memuat resolusi yang jelas dan masih banyak kesalahan simple past tense.",
                  layak: "Mampu menyusun cerita dengan alur awal-tengah-akhir yang runtut.",
                  cakap: "Menulis narasi menarik dengan past tenses yang konsisten, action verbs variatif, dan retelling lisan yang lancar.",
                  mahir: "Menghasilkan karya sastra naratif memikat dengan penokohan kuat, resolusi cerdas, dan retelling ekspresif yang menginspirasi audiens."
                }
              ],
              soalPGK: {
                pertanyaan: "Which narrative writing techniques will EFFECTIVELY heighten reader suspense during the complication stage of an energy crisis story? (Choose all correct options!)",
                pilihan: [
                  { kode: "A", teks: "Employing sensory imagery describing the oppressive darkness and sudden silence as power lines collapse.", isCorrect: true },
                  { kode: "B", teks: "Interrupting the story with a dry 10-page encyclopedia manual on electrical engineering without any character dialogue.", isCorrect: false },
                  { kode: "C", teks: "Using short, urgent sentences and vivid action verbs to depict characters racing against failing backup batteries.", isCorrect: true },
                  { kode: "D", teks: "Creating an internal dilemma where characters must decide between rationing power for medical refrigerators or heating.", isCorrect: true }
                ],
                kunci: "A, C, dan D",
                pembahasan: "A, C, dan D merupakan teknik penulisan kreatif (imagery, pacing, moral conflict) yang membangun suspensi naratif, sedangkan B merusak alur cerita."
              },
              soalUraian: {
                level: "C6 (Kreasi Narasi Orisinal)",
                pertanyaan: "Draft an opening orientation paragraph (4-5 sentences) for a narrative story set in 2045 where a teenager invents a seaweed-based biofuel generator for coastal fishing boats!",
                kunci: "The salt-crusted docks of Pulau Harapan were blanketed in thick dawn mist when seventeen-year-old Rian first poured his fermented green algae mixture into the boat's vintage motor. For decades, the local fishermen had struggled under skyrocketing diesel tariffs, leaving many wooden vessels anchored and abandoned along the bay. But this morning, as Rian tightened the copper fuel line, a gentle hum echoed across the shoreline. With a single pull of the starter cord, the engine purred to life, breathing clean, vaporous exhaust into the crisp ocean air.",
                rubrik: [
                  { kriteria: "Kelengkapan elemen orientasi (karakter, waktu, tempat, latar masalah)", skor: 5 },
                  { kriteria: "Akurasi past tense dan kekayaan diksi naratif", skor: 5 }
                ]
              }
            }
          },
          // Unit 2 - TP.06
          {
            kodeTP: "TP.06",
            teksTP:
              "Menyusun draf naskah teks argumentatif tertulis bertema uang elektronik dan transformasi finansial digital, serta menampilkannya dalam bentuk rekaman siniar (podcast) audio atau presentasi media pilihan.",
            alokasiJP: 6,
            semester: "GANJIL",
            prasyarat: "TP.05 Menganalisis teks argumentatif tertulis",
            dimensiKarakterDinas: ["Kreativitas", "Penalaran Kritis", "Kolaborasi"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "PPRA: Dinamis dan Inovatif (Tathawwur)"],
            konteksPembelajaran: {
              stimulus: "Proyek produksi siniar (podcast production): Murid menulis naskah esai argumentatif (scriptwriting) 300 kata tentang etika dan kehati-hatian menggunakan paylater dan e-money.",
              stimulusKemenag: "Menyusun skrip podcast dakwah finansial cerdas: bagaimana generasi muda madrasah mengelola dompet digital untuk tabungan haji muda dan zakat produktif.",
              masalahNyata: "How do scriptwriters transform formal argumentative academic claims into engaging, lively conversational podcast scripts without losing argumentative rigor?",
              kegiatanEksplorasi: [
                "Planning: Menentukan target audiens dan menyusun garis besar argumen (Hook, Host Introduction, Core Claim, Counterclaim Rebuttal, Outro).",
                "Writing the Script: Menuliskan dialog siniar interaktif dengan menyisipkan rhetorical questions dan ungkapan asking/giving opinions.",
                "Peer Feedback: Saling mendengarkan draf dan menyunting alur transisi agar terdengar natural saat diucapkan.",
                "Recording & Presenting: Merekam naskah siniar berdurasi 3-4 menit menggunakan gawai dan mengunggahnya ke platform kelas digital."
              ],
              pertanyaanHOTS: [
                {
                  level: "C6 - Penulisan Skrip & Produksi Podcast",
                  teks: "Convert a formal academic claim on digital transaction fees into an engaging, conversational podcast dialogue that challenges young listeners to audit their e-money subscriptions!"
                }
              ],
              rubrikIndikator: [
                {
                  kriteria: "Writing Argumentative Script & Podcast Presentation",
                  baru: "Membaca teks secara kaku tanpa intonasi percakapan dan alur argumen belum tertata.",
                  layak: "Mampu menyusun skrip dengan argumen sederhana dan merekam audio terdengar jelas.",
                  cakap: "Menyusun skrip argumentatif terstruktur dengan transisi luwes dan performa podcast yang persuasif.",
                  mahir: "Menghasilkan siniar profesional dengan dinamika audio memikat, sintesis argumen bernas, dan penguasaan ekspresi opini yang prima."
                }
              ],
              soalPGK: {
                pertanyaan: "Which scriptwriting elements are CRITICAL when transforming a written argumentative essay on e-money into an audio podcast format? (Select all correct options!)",
                pilihan: [
                  { kode: "A", teks: "Incorporating conversational signposting (e.g., 'Now, here is the kicker you need to know...') to guide listeners' ears.", isCorrect: true },
                  { kode: "B", teks: "Inserting long, unbroken lists of raw decimal statistics without any interpretive context.", isCorrect: false },
                  { kode: "C", teks: "Using rhetorical questions that provoke active listener self-reflection on their spending habits.", isCorrect: true },
                  { kode: "D", teks: "Ensuring natural turn-taking dialogues between co-hosts that examine both benefits and security vulnerabilities.", isCorrect: true }
                ],
                kunci: "A, C, dan D",
                pembahasan: "A, C, dan D merupakan konvensi baku penulisan siniar audio (auditory signposting, rhetorical engagement, natural dialogic flow), sedangkan B membuat pendengar bosan."
              },
              soalUraian: {
                level: "C6 (Skrip Podcast Argumentatif)",
                pertanyaan: "Draft an opening podcast monologue excerpt (4 sentences) addressing teenage listeners regarding the hidden psychological trap of 'one-click' digital payments!",
                kunci: "'Hey everyone, welcome back to Teen Finance Talk! Have you ever looked at your digital wallet balance at the end of the week and wondered where all your money vanished? That single, effortless screen tap makes spending feel completely painless—until the zero balance hits your screen. Today, we're diving into the psychology behind cashless shopping and why convenience might be costing you your future savings.'",
                rubrik: [
                  { kriteria: "Daya pikat pembuka (conversational hook) dan relevansi tema", skor: 5 },
                  { kriteria: "Akurasi struktur kalimat bahasa Inggris lisan", skor: 5 }
                ]
              }
            }
          },
          // Unit 3 - TP.09
          {
            kodeTP: "TP.09",
            teksTP:
              "Menyusun teks eksposisi hortatori tertulis mengenai etika bermedia sosial dan kesantunan siber dengan struktur skematik (thesis, arguments, recommendation) yang valid, serta menyajikannya dalam presentasi kelompok kolaboratif.",
            alokasiJP: 6,
            semester: "GENAP",
            prasyarat: "TP.08 Menganalisis teks eksposisi hortatori tertulis",
            dimensiKarakterDinas: ["Kreativitas", "Kolaborasi", "Komunikasi"],
            dimensiKarakterKemenag: ["Cinta Kebenaran", "PPRA: Berkeadaban (Ta'addub)"],
            konteksPembelajaran: {
              stimulus: "Kampanye literasi sekolah: Murid menyusun naskah eksposisi hortatori bertajuk 'Pause Before You Post: Restoring Digital Civility in Youth Communities' untuk dimuat di mading digital sekolah.",
              stimulusKemenag: "Menyusun teks seruan moral tentang pentingnya memfilter konten provokatif dan hoaks agar terhindar dari dosa jariyah dan fitnah digital.",
              masalahNyata: "How can students write hortatory arguments that persuade defensive peers to admit online mistakes and adopt constructive digital etiquette?",
              kegiatanEksplorasi: [
                "Thesis Formulation: Menuliskan pernyataan tesis yang tegas mengenai pentingnya regulasi diri di media sosial.",
                "Developing Arguments: Mengembangkan 2-3 argumen pendukung disertai bukti empiris dan analogi logis.",
                "Crafting Actionable Recommendations: Merumuskan anjuran aksi konkret 3 langkah (Think, Verify, Empathize).",
                "Group Presentation: Menampilkan hasil penulisan dalam presentasi kelompok dengan bantuan slide infografis digital."
              ],
              pertanyaanHOTS: [
                {
                  level: "C6 - Penulisan Teks Hortatori & Presentasi",
                  teks: "Compose the concluding recommendation section of a hortatory text urging adolescents to establish healthy boundaries against toxic social media comparison!"
                }
              ],
              rubrikIndikator: [
                {
                  kriteria: "Composing Hortatory Text on Netiquette & Presentation",
                  baru: "Menulis saran yang terlalu umum tanpa didahului argumen logis yang memadai.",
                  layak: "Mampu menyusun 3 bagian teks hortatori secara lengkap.",
                  cakap: "Menulis esai hortatori koheren dengan argumen berbasis bukti dan rekomendasi yang terukur.",
                  mahir: "Menyusun karya tulis hortatori yang sangat persuasif dengan gaya bahasa yang elegan dan mempresentasikannya dengan percaya diri di hadapan audiens."
                }
              ],
              soalPGK: {
                pertanyaan: "Which modal verb formulations in the RECOMMENDATION section of a hortatory text convey urgent yet professional persuasion? (Select all correct options!)",
                pilihan: [
                  { kode: "A", teks: "'School administrations ought to implement comprehensive digital citizenship seminars.'", isCorrect: true },
                  { kode: "B", teks: "'Individual smartphone users must rigorously verify the credibility of viral headlines prior to retweeting.'", isCorrect: true },
                  { kode: "C", teks: "'You could maybe think about behaving nicely if you don't have anything better to do.'", isCorrect: false },
                  { kode: "D", teks: "'We strongly urge online community moderators to enforce strict zero-tolerance policies against hate speech.'", isCorrect: true }
                ],
                kunci: "A, B, dan D",
                pembahasan: "A, B, dan D menggunakan formulasi modal rekomendasi yang tegas dan baku (ought to, must, strongly urge), sedangkan C terlalu lemah dan non-akademik."
              },
              soalUraian: {
                level: "C6 (Penulisan Rekomendasi Hortatori)",
                pertanyaan: "Draft a concluding recommendation paragraph (4 sentences) for an essay advocating for respectful online discourse in school community chat groups!",
                kunci: "In conclusion, maintaining courteous netiquette in school digital forums is not merely a formality, but a fundamental pillar of our collective learning environment. School leadership must establish clear communication charters that define constructive disagreement versus destructive harassment. Furthermore, students ought to adopt the 'twenty-second pause rule' before publishing emotional replies on class channels. Let us resolve today to transform our virtual chats into spaces of mutual encouragement, dignity, and shared academic growth.",
                rubrik: [
                  { kriteria: "Kejelasan formulasi rekomendasi dengan modal verbs yang tepat", skor: 5 },
                  { kriteria: "Kohesi paragraf dan kekuatan seruan persuasif", skor: 5 }
                ]
              }
            }
          },
          // Unit 4 - TP.12
          {
            kodeTP: "TP.12",
            teksTP:
              "Menyusun teks diskusi tertulis multi-perspektif mengenai dilema pengurangan jejak karbon (carbon footprints) dengan struktur logis dan unsur kebahasaan berimbang, serta mempresentasikannya secara kolaboratif dalam simposium kelas.",
            alokasiJP: 6,
            semester: "GENAP",
            prasyarat: "TP.11 Menganalisis teks diskusi tertulis",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kolaborasi", "Komunikasi"],
            dimensiKarakterKemenag: ["Cinta Lingkungan", "PPRA: Musyawarah (Syura)"],
            konteksPembelajaran: {
              stimulus: "Simposium iklim kelas: Murid menyusun makalah diskusi 350 kata bertajuk 'Individual Responsibility vs Corporate Accountability in Climate Action' dan menyajikan pandangan berimbang di hadapan panelis guru.",
              stimulusKemenag: "Menyusun naskah musyawarah lingkungan: menyeimbangkan kebutuhan industrialisasi ekonomi umat dengan kewajiban syariat menjaga kelestarian alam bagi generasi mendatang.",
              masalahNyata: "How can writers present polarized opposing arguments with equal scholarly empathy without artificially trivializing either perspective?",
              kegiatanEksplorasi: [
                "Issue Framing: Menulis pengantar yang memetakan kontroversi emisi karbon tanpa memihak.",
                "Balancing Points: Menyusun paragraf pendukung aksi individual dan paragraf penentang yang menekankan regulasi struktural korporasi.",
                "Using Contrastive Connectors: Menautkan kedua kubu dengan kata penghubung transisi berimbang (on the one hand, on the other hand, conversely, nonetheless).",
                "Conclusion & Symposium Defense: Menyajikan simpulan kompromistis dan mempertahankan analisis dalam sesi tanya jawab interaktif."
              ],
              pertanyaanHOTS: [
                {
                  level: "C6 - Penulisan Teks Diskusi & Simposium",
                  teks: "Synthesize two conflicting viewpoints into a nuanced concluding paragraph that outlines a hybrid climate roadmap incorporating both consumer footprint audits and corporate emission caps!"
                }
              ],
              rubrikIndikator: [
                {
                  kriteria: "Writing Balanced Discussion Text & Symposium Presentation",
                  baru: "Menulis teks yang berat sebelah tanpa menyertakan sanggahan yang memadai.",
                  layak: "Mampu menyusun teks diskusi dengan argumen pro dan kontra terpisah.",
                  cakap: "Menulis teks diskusi dengan keseimbangan retorika yang matang, konektor kontras yang tepat, dan mempresentasikannya dengan baik.",
                  mahir: "Menghasilkan telaah wacana diskusi berkelas akademik dengan pisau analisis tajam, bahasa objektif elegan, dan tangkas dalam sesi tanya jawab simposium."
                }
              ],
              soalPGK: {
                pertanyaan: "Which concluding strategies demonstrate EXEMPLARY discussion writing when closing an essay on carbon footprint regulations? (Select all correct options!)",
                pilihan: [
                  { kode: "A", teks: "Weighing the merits of both individual behavioral changes and systemic industrial regulations before recommending an integrated multi-tiered approach.", isCorrect: true },
                  { kode: "B", teks: "Completely dismissing the corporate accountability arguments and insulting clean energy researchers.", isCorrect: false },
                  { kode: "C", teks: "Proposing a phased policy compromise that safeguards low-income consumers while holding heavy polluters accountable.", isCorrect: true },
                  { kode: "D", teks: "Acknowledging that sustainable decarbonization requires simultaneous cultural lifestyle shifts and enforceable legislative mandates.", isCorrect: true }
                ],
                kunci: "A, C, dan D",
                pembahasan: "A, C, dan D mencerminkan kualitas penulisan teks diskusi tingkat tinggi (weighing merits, proposing phased compromises, integrative solutions), sedangkan B adalah kekeliruan argumen non-ilmiah."
              },
              soalUraian: {
                level: "C6 (Sintesis Teks Diskusi)",
                pertanyaan: "Draft a concluding synthesis paragraph (4 sentences) for a discussion text evaluating whether high school campuses should mandate meatless Mondays to curb their institutional carbon footprint!",
                kunci: "To conclude, the debate surrounding meatless Mondays on campus encapsulates the tension between individual dietary autonomy and collective ecological responsibility. While proponents present irrefutable evidence regarding the reduced carbon intensity of plant-based meals, opponents legitimately raise concerns regarding culinary inclusivity, student nutritional diversity, and personal choice. A prudent compromise would involve offering enticing, affordable plant-based alternatives alongside conventional options, accompanied by engaging environmental signage rather than rigid coercion. In doing so, schools can cultivate voluntary ecological awareness while honoring the diverse dietary preferences of their student body.",
                rubrik: [
                  { kriteria: "Keseimbangan sintesis pro dan kontra tanpa memaksakan kehendak", skor: 5 },
                  { kriteria: "Kecanggihan tata bahasa dan konektivitas wacana", skor: 5 }
                ]
              }
            }
          }
        ]
      }
    ]
  }
];
