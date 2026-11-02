// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import { CPDataset } from "./curriculumDatabase";

export const FASE_F_BAHASA_INGGRIS_XI_DATASETS: CPDataset[] = [
  // ============================================================================
  // BAHASA INGGRIS KELAS XI SMA/MA (FASE F)
  // Berdasarkan Buku Resmi: "Bahasa Inggris: English for Change untuk SMA/MA Kelas XI"
  // Kemendikbudristek 2022 (ISBN: 978-602-427-944-8)
  // Single Source of Truth: KB_ATOMIC_ATP_PROSEM_PROTA_MODUL_AJAR_ENGLISH_XI
  // 5 Unit Pembelajaran:
  // - Unit 1: Digital Literacies and My Identities (Theme: Digital Safety)
  // - Unit 2: Love Your Environment (Theme: Environmental Awareness)
  // - Unit 3: Healthy Life for a Healthy Future (Theme: Nutrition and Wellness)
  // - Unit 4: Indonesian Environmental Figures (Theme: Environmental Awareness)
  // - Unit 5: Personal Money Management (Theme: Financial Literacy)
  // Total 12 TP Atomik (6 TP Semester Ganjil + 6 TP Semester Genap)
  // ============================================================================
  {
    fase: "Fase F",
    kelasDefault: "Kelas XI",
    mapel: "Bahasa Inggris",
    jalurApplicable: ["Dinas", "Kemenag"],
    elemenList: [
      // ------------------------------------------------------------------------
      // ELEMEN 1: MENYIMAK - BERBICARA (LISTENING - SPEAKING)
      // ------------------------------------------------------------------------
      {
        namaElemen: "Menyimak - Berbicara (Listening - Speaking)",
        deskripsiCP:
          "Peserta didik menggunakan bahasa Inggris untuk berkomunikasi dengan guru, teman sebaya dan orang lain dalam berbagai macam situasi dan tujuan; menggunakan dan merespons pertanyaan serta menggunakan strategi untuk memulai dan mempertahankan percakapan dan diskusi; memahami dan mengidentifikasi ide utama dan detail relevan dari diskusi atau presentasi mengenai berbagai macam topik; menggunakan bahasa Inggris untuk menyampaikan opini terhadap isu sosial dan untuk membahas minat; memberikan dan mempertahankan pendapatnya, membuat perbandingan dan mengevaluasi perspektifnya; menggunakan strategi koreksi dan negosiasi pemahaman.",
        kompetensiKKO:
          "Menganalisis Ungkapan Opini (C4), Mempraktikkan Percakapan Transaksional (C3), Mengevaluasi Penekanan Kalimat (C5), Menginisiasi dan Mempertahankan Dialog (C5)",
        lingkupMateri:
          "Digital Literacies Dialogues, Domestic Waste Talks, Healthy Living & Food Discussions, Eco-Hero Interviews, Financial Management Spoken Inquiries",
        tpList: [
          // Unit 1 - TP.01
          {
            kodeTP: "TP.01",
            unitTitle: "Unit 1: Digital Literacies and My Identities",
            lingkupMateri: "Unit 1: Digital Literacies - Stating Opinions, Agreement & Disagreement (Listening & Speaking)",
            teksTP:
              "Menganalisis dan mengidentifikasi ragam ungkapan menyatakan pendapat, persetujuan, dan ketidaksetujuan (stating opinion, agreeing, and disagreeing) serta pelafalan penekanan kata (word stress) dalam percakapan transaksional bertema literasi digital remaja melalui dialog berpasangan.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "Memahami percakapan transaksional dan interpersonal dasar setara CEFR A2/B1 (Fase E)",
            dimensiKarakterDinas: ["Penalaran Kritis", "Komunikasi", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "PPRA: Berkeadaban (Ta'addub)", "PPRA: Keteladanan (Qudwah)"],
            konteksPembelajaran: {
              stimulus:
                "Menyimak rekaman siniar (podcast) dua remaja yang mendiskusikan fenomena jejak digital (digital footprint) dan pembentukan identitas positif di media sosial.",
              stimulusKemenag:
                "Menyimak kajian etika komunikasi digital dalam Islam (Qaulan Sadida) sebagai cerminan muslim cerdas yang menjaga lisan dan ketikan di ruang siber.",
              masalahNyata:
                "How do adolescents construct their future professional identities on digital platforms while protecting their privacy and online integrity?",
              kegiatanEksplorasi: [
                "Building Knowledge of the Field (BKoF): Membedah glosarium istilah literasi digital: digital footprint, engagement, identity construction, and online netiquette.",
                "Modelling of the Text (MoT): Menyimak rekaman dialog transaksional, mencatat ekspresi opini ('In my view', 'I completely agree', 'I take a different stance'), dan melatih penekanan kata (word stress).",
                "Joint Construction (JCoT): Melakukan aktivitas RallyRobin dan Think-Pair-Share menyusun naskah percakapan tentang batasan curhat di media sosial.",
                "Independent Construction (ICoT): Mempraktikkan dialog berpasangan selama 2 menit di depan kelas menggunakan intonasi dan penekanan kata yang presisi."
              ],
              pertanyaanHOTS: [
                {
                  level: "C4 - Analisis Percakapan Transaksional",
                  teks: "Analyze how the speakers in the podcast navigate interpersonal disagreement without invalidating each other's perspectives on online privacy!"
                }
              ],
              rubrikIndikator: [
                {
                  kriteria: "Categorizing & Using Opinion Expressions with Word Stress",
                  baru: "Kesulitan membedakan ekspresi setuju dan tidak setuju serta salah dalam menempatkan word stress.",
                  layak: "Mampu mengidentifikasi ekspresi opini dasar namun intonasi dan pelafalan penekanan kata masih kaku.",
                  cakap: "Mampu menggunakan ragam ekspresi opini, persetujuan, dan sanggahan secara kontekstual dengan word stress yang jelas.",
                  mahir: "Sangat fasih menggunakan nuansa ekspresi opini tingkat lanjut, mempertahankan argumentasi persuasif, dan mendemonstrasikan pelafalan alami setara B1+."
                }
              ],
              soalPGK: {
                pertanyaan:
                  "Listen to the following dialogue statement: 'While viral trends offer immediate visibility, I firmly believe that maintaining digital privacy builds a more resilient professional identity in the long run.' Which statements accurately reflect the speaker's stance and language features? (Select all correct options!)",
                pilihan: [
                  { kode: "A", teks: "The speaker prioritizes long-term professional integrity over fleeting digital popularity.", isCorrect: true },
                  { kode: "B", teks: "The phrase 'I firmly believe' functions as a strong expression of stating personal conviction/opinion.", isCorrect: true },
                  { kode: "C", teks: "The speaker advocates for deleting all social media accounts immediately.", isCorrect: false },
                  { kode: "D", teks: "The word 'resilient' receives primary stress on the second syllable (/rɪˈzɪl.jənt/).", isCorrect: true }
                ],
                kunci: "A, B, dan D",
                pembahasan:
                  "Pernyataan A, B, dan D tepat. Pembicara menekankan integritas jangka panjang, menggunakan ungkapan opini kuat ('I firmly believe'), dan kata 'resilient' memiliki penekanan suku kata kedua."
              },
              soalUraian: {
                level: "C4 (Analisis Argumen Lisan)",
                pertanyaan:
                  "Your classmate asserts: 'High social media engagement is the only parameter of a teenager's success today.' Construct a polite 3-sentence transactional response expressing respectful disagreement and offering an alternative perspective based on digital safety!",
                kunci:
                  "I understand why high engagement seems appealing, but I respectfully disagree with equating follower metrics to personal success. In my perspective, digital literacy also involves cultivating critical discernment and safeguarding personal privacy. Therefore, creating meaningful offline accomplishments is far more fulfilling than chasing transient online validation.",
                pembahasan:
                  "Menunjukkan kemampuan menanggapi ketidaksetujuan secara santun (I understand... but I respectfully disagree), menyajikan opini alternatif berbasis data, dan menyimpulkan secara bijak.",
                rubrik: [
                  { kriteria: "Ketepatan penggunaan ekspresi sanggahan santun dan opini", skor: 5 },
                  { kriteria: "Koherensi logika argumen literasi digital dan tata bahasa", skor: 5 }
                ]
              }
            }
          },

          // Unit 2 - TP.03
          {
            kodeTP: "TP.03",
            unitTitle: "Unit 2: Love Your Environment",
            lingkupMateri: "Unit 2: Love Your Environment - Domestic Waste Issues & Five Senses Descriptions (Listening & Speaking)",
            teksTP:
              "Mengidentifikasi dan mempraktikkan ungkapan transaksional serta kosakata deskriptif berbasis panca indera (five senses) dalam merespons persoalan pengelolaan sampah domestik (domestic waste management) dan kebersihan lingkungan sekolah secara komunikatif.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "TP.01 Memahami percakapan transaksional bertema sosial",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kolaborasi", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Lingkungan", "PPRA: Berimbang (Tawazun)"],
            konteksPembelajaran: {
              stimulus:
                "Menyimak rekaman laporan audio reporter sekolah yang meninjau tempat penampungan sampah sementara (TPS) dan mendeskripsikan kondisi sampah organik dan anorganik yang belum terpilah.",
              stimulusKemenag:
                "Mendiskusikan amanah menjaga kebersihan alam sebagai separuh dari keimanan (An-Nadhāfatu minal-Imān) dan tanggung jawab ekologis generasi muda muslim.",
              masalahNyata:
                "Why do domestic waste sorting programs often fail in school canteens, and how can sensory-rich descriptive communication motivate behavioral change?",
              kegiatanEksplorasi: [
                "BKoF: Mengidentifikasi kosakata limbah rumah tangga: domestic waste, biodegradable, landfill runoff, sorting bins, and pungent odor.",
                "MoT: Menyimak audio investigasi lingkungan dan mengklasifikasikan kata sifat panca indera (sight, smell, sound, touch, taste).",
                "JCoT: Menggunakan teknik Talking Chip dalam kelompok kecil untuk mendiskusikan kondisi nyata sanitasi di lingkungan sekitar sekolah.",
                "ICoT: Melakukan role play wawancara antara pegiat bank sampah sekolah dengan pedagang kantin mengenai substitusi kemasan plastik sekali pakai."
              ],
              pertanyaanHOTS: [
                {
                  level: "C4 - Analisis Masalah Ekologis Lisan",
                  teks: "Differentiate between organized and unorganized domestic waste management based on the sensory details described by the environmental reporter!"
                }
              ],
              rubrikIndikator: [
                {
                  kriteria: "Sensory Descriptive Language & Environmental Dialogue",
                  baru: "Hanya menyebutkan kata benda sampah tanpa mampu mendeskripsikan secara sensorik.",
                  layak: "Mampu menggunakan kata sifat dasar penglihatan dan penciuman dalam mendeskripsikan limbah.",
                  cakap: "Mengintegrasikan frasa panca indera secara variatif dan aktif berinteraksi dalam dialog solusi sampah.",
                  mahir: "Sangat fasih mendeskripsikan detail lingkungan hidup dengan kekayaan bahasa figuratif dan memimpin advokasi lisan pengelolaan limbah."
                }
              ],
              soalPGK: {
                pertanyaan:
                  "An environmental activist states: 'The neglected landfill behind the market emits a pungent odor that irritates the eyes, while heaps of unsegregated plastics choke the drainage canals.' Which sensory appeals and environmental facts are present? (Select all correct options!)",
                pilihan: [
                  { kode: "A", teks: "Olfactory sensory appeal through 'pungent odor'.", isCorrect: true },
                  { kode: "B", teks: "Visual and physical sensory appeal through 'choke the drainage canals'.", isCorrect: true },
                  { kode: "C", teks: "A description of well-organized, circular waste composting.", isCorrect: false },
                  { kode: "D", teks: "Sensory appeal to sight and discomfort through 'irritates the eyes'.", isCorrect: true }
                ],
                kunci: "A, B, dan D",
                pembahasan:
                  "Pernyataan A (bau menyengat/penciuman), B (penyumbatan saluran/visual-taktil), dan D (mata perih/penglihatan-rasa) adalah deskripsi panca indera yang akurat. C salah karena mendeskripsikan sampah terlantar."
              },
              soalUraian: {
                level: "C5 (Evaluasi Komunikasi Lingkungan)",
                pertanyaan:
                  "Explain how incorporating vivid sensory adjectives (such as 'foul-smelling leachate' or 'cluttered plastic debris') enhances the persuasive impact of an oral presentation on campus waste segregation!",
                kunci:
                  "Using vivid sensory adjectives evokes an immediate cognitive and emotional response in the audience by transforming abstract statistical claims into tangible realities. Sensory descriptors like 'foul-smelling leachate' trigger natural aversion to pollution, thereby amplifying the perceived urgency for waste segregation and prompting listeners to adopt responsible disposal habits immediately.",
                pembahasan:
                  "Menghubungkan ketepatan diksi sensorik dengan dampak psikologis persuasi dan urgensi penanganan masalah sampah nyata.",
                rubrik: [
                  { kriteria: "Analisis fungsi psikologis dan retorika bahasa panca indera", skor: 5 },
                  { kriteria: "Penerapan contoh kosakata sensorik dalam advokasi lingkungan", skor: 5 }
                ]
              }
            }
          },

          // Unit 3 - TP.05
          {
            kodeTP: "TP.05",
            unitTitle: "Unit 3: Healthy Life for a Healthy Future",
            lingkupMateri: "Unit 3: Healthy Life - Giving & Defending Opinions with Sentence Stress (Listening & Speaking)",
            teksTP:
              "Mengidentifikasi serta menerapkan ungkapan memberi dan mempertahankan opini (giving and defending opinions) dengan intonasi dan penekanan kalimat (sentence stress) yang tepat dalam diskusi lisan mengenai pola makan sehat (healthy food) dan pencegahan obesitas.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "TP.01 dan TP.03 Menguasai interaksi transaksional dasar",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kesehatan", "Komunikasi"],
            dimensiKarakterKemenag: ["Cinta Diri & Sesama", "PPRA: Berkeadaban (Ta'addub)"],
            konteksPembelajaran: {
              stimulus:
                "Menyimak talkshow kesehatan remaja tentang bahaya konsumsi makanan cepat saji (ultra-processed food) yang memicu sindrom metabolik dan obesitas dini.",
              stimulusKemenag:
                "Mengkaji konsep Thayyiban (makanan halal dan bergizi) dalam menjaga kesehatan jasmani sebagai titipan ilahi untuk beribadah dan berkarya secara optimal.",
              masalahNyata:
                "Why do modern teenagers frequently prioritize instant culinary gratification over nutrient-dense diets, and how can they defend healthy lifestyle choices against peer pressure?",
              kegiatanEksplorasi: [
                "BKoF: Membahas kosakata gizi: raw food vs cooked food, dietary fiber, obesity, cardiovascular health, and sedentary lifestyle.",
                "MoT: Menganalisis rekaman dialog perdebatan menu kantin sehat; melatih penekanan kalimat (sentence stress) untuk menonjolkan kata kunci informasi.",
                "JCoT: Menjalankan simulasi 'Debate Preparation Clinic' berpasangan menyusun argumen pembelaan pembatasan minuman manis berpemanis buatan.",
                "ICoT: Menampilkan mini-debat lisan 3 menit antar-kelompok dengan menerapkan frasa mempertahankan opini ('Allow me to counter that point', 'The empirical evidence clearly indicates')."
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Argumen Lisan Gizi Remaja",
                  teks: "Evaluate the strength of the speaker's defense when countering the claim that healthy organic food is too expensive and impractical for high school students!"
                }
              ],
              rubrikIndikator: [
                {
                  kriteria: "Defending Opinions with Sentence Stress in Health Debate",
                  baru: "Pasif dalam berpendapat dan tidak mampu mempertahankan argumen saat disanggah kawan.",
                  layak: "Mampu memberikan opini namun intonasi datar tanpa penerapan sentence stress pada kata kunci.",
                  cakap: "Mampu memberikan dan mempertahankan opini secara logis dengan penekanan kalimat yang jelas pada kata-kata fokus.",
                  mahir: "Sangat piawai dalam menyanggah dan mempertahankan argumen debat secara elegan, santun, dan bertenaga menggunakan sentence stress tingkat tinggi."
                }
              ],
              soalPGK: {
                pertanyaan:
                  "Consider this spoken statement: 'We CANNOT ignore the surge in adolescent obesity when processed snacks are subsidized over fresh fruit.' Which words carry primary sentence stress to emphasize the speaker's argument? (Select all correct options!)",
                pilihan: [
                  { kode: "A", teks: "'CANNOT' - stressed to emphasize the impossibility/urgency of denial.", isCorrect: true },
                  { kode: "B", teks: "'the' and 'in' - stressed because they are grammatical function words.", isCorrect: false },
                  { kode: "C", teks: "'OBESITY' - stressed as the core content noun indicating the health crisis.", isCorrect: true },
                  { kode: "D", teks: "'FRESH FRUIT' - stressed to contrast against processed snacks.", isCorrect: true }
                ],
                kunci: "A, C, dan D",
                pembahasan:
                  "Dalam prosodi bahasa Inggris, kata isi (content words) seperti 'CANNOT' (negasi kuat), 'OBESITY', dan 'FRESH FRUIT' mendapatkan penekanan kalimat (sentence stress), sedangkan kata tugas ('the', 'in') tidak ditekan."
              },
              soalUraian: {
                level: "C5 (Pertahanan Opini Lisan)",
                pertanyaan:
                  "In a debate round, an opponent claims: 'Exercise alone compensates for any amount of junk food consumed.' Formulate a spoken rebuttal (4 sentences) defending the primacy of nutritional quality with proper contrastive transition markers!",
                kunci:
                  "While regular exercise is unquestionably vital for cardiovascular fitness, it is a scientific fallacy that physical activity can outrun a chronically poor diet. High intakes of refined sugars and trans fats induce cellular inflammation that aerobic workouts cannot neutralize. Furthermore, nutrient deficiencies impair the body's metabolic recovery and cognitive functioning during study hours. Therefore, rigorous physical training and mindful nutritional intake must function as interdependent pillars of adolescent wellness.",
                pembahasan:
                  "Menyusun sanggahan berbasis argumen saintifik, menggunakan transisi kontras (while, furthermore, therefore), dan mempertahankan posisi secara kokoh.",
                rubrik: [
                  { kriteria: "Kekuatan logika saintifik sanggahan dan pembelaan opini", skor: 5 },
                  { kriteria: "Kecanggihan konektor wacana lisan dan akurasi gramatikal", skor: 5 }
                ]
              }
            }
          },

          // Unit 4 - TP.07
          {
            kodeTP: "TP.07",
            unitTitle: "Unit 4: Indonesian Environmental Figures",
            lingkupMateri: "Unit 4: Indonesian Environmental Figures - Starting, Continuing & Ending Conversations (Listening & Speaking)",
            teksTP:
              "Menganalisis dan mempraktikkan struktur percakapan transaksional untuk memulai, melanjutkan, dan mengakhiri dialog (starting, continuing, and ending a conversation) dengan intonasi gramatikal yang tepat saat mewawancarai profil pejuang lingkungan Indonesia.",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "TP.05 Memahami interaksi lisan dengan penekanan dan intonasi",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kewargaan", "Kreativitas"],
            dimensiKarakterKemenag: ["Cinta Tanah Air", "PPRA: Dinamis dan Inovatif (Tathawwur wa Ibtikar)"],
            konteksPembelajaran: {
              stimulus:
                "Menyimak rekaman wawancara audio antara seorang jurnalis muda dan Butet Manurung (pendiri Sokola Rimba) mengenai advokasi literasi dan kelestarian hutan adat di Jambi.",
              stimulusKemenag:
                "Meneladani semangat juang para tokoh lokal Indonesia sebagai bentuk kecintaan kepada tanah air (Hubbul Wathan minal-Iman) dan amanah memakmurkan bumi nusantara.",
              masalahNyata:
                "How do professional interviewers initiate rapport, sustain meaningful conversational flow, and conclude interviews with inspiring grassroots conservation figures?",
              kegiatanEksplorasi: [
                "BKoF: Menelaah figur inspiratif lingkungan Indonesia: Butet Manurung, Swietenia Puspa Lestari (Divers Clean Action), dan I Gede Sugache (penjaga mangrove Bali).",
                "MoT: Menyimak audio wawancara dan memetakan struktur percakapan: Opening ('Good morning, it is a genuine pleasure to meet you'), Continuing ('That is fascinating, could you elaborate on...'), Closing ('Thank you wholeheartedly for dedicating your life to this cause').",
                "JCoT: Bermain peran simulasi wawancara jurnalis dan pegiat lingkungan menggunakan panduan intonasi rising-falling intonation.",
                "ICoT: Merekam wawancara audio berdurasi 3 menit bersama rekan sebaya yang memerankan tokoh konservasi laut lokal."
              ],
              pertanyaanHOTS: [
                {
                  level: "C4 - Analisis Wacana Wawancara Transaksional",
                  teks: "Analyze how the interviewer uses backchanneling expressions and open-ended follow-up questions to sustain in-depth discussion about rainforest conservation!"
                }
              ],
              rubrikIndikator: [
                {
                  kriteria: "Conversation Flow (Opening, Sustaining, Closing) & Intonation",
                  baru: "Memotong pembicaraan atau mengakhiri wawancara secara mendadak tanpa salam pembuka/penutup yang layak.",
                  layak: "Mampu membuka dan menutup percakapan namun mengalami jeda canggung saat melanjutkan pembicaraan.",
                  cakap: "Menguasai transisi pembuka, penerus topik, dan penutup percakapan dengan intonasi gramatikal yang wajar.",
                  mahir: "Sangat luwes dan natural dalam memandu alur percakapan wawancara mendalam, membangun kedekatan komunikasi, serta menerapkan intonasi profesional."
                }
              ],
              soalPGK: {
                pertanyaan:
                  "Which expressions demonstrate APPROPRIATE communicative strategies for maintaining and deepening a transactional interview about mangrove reforestation? (Select all correct options!)",
                pilihan: [
                  { kode: "A", teks: "'That is an extraordinary insight; could you share what initial obstacles your team encountered when replanting seedlings?'", isCorrect: true },
                  { kode: "B", teks: "'Stop talking about that, let us discuss something completely unrelated.'", isCorrect: false },
                  { kode: "C", teks: "'Building upon that point, how did the coastal community respond to your mangrove preservation initiative?'", isCorrect: true },
                  { kode: "D", teks: "'Before we conclude our conversation today, what key message would you impart to urban youth regarding coastal ecosystems?'", isCorrect: true }
                ],
                kunci: "A, C, dan D",
                pembahasan:
                  "A dan C berfungsi melanjutkan dan mendalami topik secara elegan (continuing), sedangkan D berfungsi mengarahkan ke penutupan wawancara (closing). B adalah pemotongan komunikasi yang tidak santun."
              },
              soalUraian: {
                level: "C4 (Desain Alur Wawancara Transaksional)",
                pertanyaan:
                  "Draft a cohesive 4-turn interview excerpt (Interviewer - Figure - Interviewer - Figure) illustrating how to transition smoothly from asking about the figure's past challenges to concluding the dialogue with a forward-looking message of hope!",
                kunci:
                  "Interviewer: 'Reflecting on your arduous journey rehabilitating arid hills into lush agroforestry, what maintained your perseverance when early harvests failed?'\nFigure: 'Seeing the dried springs gradually flow with clean water again reminded me that restoring nature requires patience and unwavering faith in community solidarity.'\nInterviewer: 'Your resilience is deeply moving; as we wrap up our inspiring session, what enduring commitment do you hope the younger generation embraces?'\nFigure: 'I urge young people to remember that small, consistent conservation acts in your immediate neighborhood create tidal waves of global ecological healing.'",
                pembahasan:
                  "Menampilkan transisi alami dari penelusuran tantangan masa lalu menuju penutupan sesi yang reflektif dan menginspirasi.",
                rubrik: [
                  { kriteria: "Struktur pembuka/penutup dan pertanyaan pendalaman transaksional", skor: 5 },
                  { kriteria: "Keselarasan konteks pelestarian lingkungan Indonesia dan diksi", skor: 5 }
                ]
              }
            }
          },

          // Unit 5 - TP.10
          {
            kodeTP: "TP.10",
            unitTitle: "Unit 5: Personal Money Management",
            lingkupMateri: "Unit 5: Personal Money Management - Comparative & Superlative Degrees in Financial Talks (Listening & Speaking)",
            teksTP:
              "Mengidentifikasi informasi lisan dan membandingkan alternatif pengelolaan keuangan pribadi (personal money management, saving vs spending) menggunakan tingkatan perbandingan (comparative and superlative degree) dalam percakapan transaksional perbankan dan transaksi digital.",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "TP.07 Memahami interaksi transaksional kompleks",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian", "Komunikasi"],
            dimensiKarakterKemenag: ["Cinta Keadilan", "PPRA: Berimbang (Tawazun)"],
            konteksPembelajaran: {
              stimulus:
                "Menyimak dialog audio konsultasi finansial antara seorang siswa SMA dan penasihat keuangan bank mengenai pemilihan produk tabungan pelajar (SimPel) vs dompet digital.",
              stimulusKemenag:
                "Mengkaji ajaran Islam tentang larangan bersikap boros (tabdzir) dan pelit (kikir), melainkan bersikap moderat dan bijaksana dalam membelanjakan rezeki.",
              masalahNyata:
                "Why are adolescents increasingly susceptible to impulsive online shopping via paylater features, and how can comparative financial analysis protect their savings?",
              kegiatanEksplorasi: [
                "BKoF: Membedah kosakata literasi keuangan: interest rate, administrative fees, liquidity, digital wallet, automated saving, and financial buffer.",
                "MoT: Menganalisis dialog audio perbandingan: 'Digital wallets are more convenient than cash, but automated student savings accounts are the safest option for long-term goals.'",
                "JCoT: Melakukan simulasi 'Financial Advisor Consultation' berpasangan untuk membandingkan 3 produk tabungan menggunakan bentuk komparatif dan superlatif.",
                "ICoT: Mempresentasikan rekomendasi alokasi uang saku mingguan (skema 50/30/20) di hadapan kelompok menggunakan ungkapan komparatif."
              ],
              pertanyaanHOTS: [
                {
                  level: "C4 - Analisis Keputusan Finansial Lisan",
                  teks: "Compare the fiscal risks and liquidity advantages of keeping pocket money in a digital wallet versus depositing it in a formal school bank account!"
                }
              ],
              rubrikIndikator: [
                {
                  kriteria: "Comparative & Superlative Forms in Financial Transactions",
                  baru: "Salah dalam membentuk degrees of comparison (misal 'more cheap' atau 'most good').",
                  layak: "Mampu membentuk kalimat komparatif reguler namun belum tepat pada bentuk irregular (better, best, worse, worst).",
                  cakap: "Mampu membandingkan produk finansial dengan akurasi tata bahasa komparatif dan superlatif yang konsisten.",
                  mahir: "Mampu menyusun analisis pertimbangan keuangan multi-kriteria yang tajam dan meyakinkan dengan ekspresi derajat perbandingan tingkat mahir."
                }
              ],
              soalPGK: {
                pertanyaan:
                  "Listen to the bank officer's advice: 'While high-yield mutual funds may look attractive, a student savings account is significantly safer and the most accessible instrument for high school novices.' Which statements accurately deduce the financial evaluation? (Select all correct options!)",
                pilihan: [
                  { kode: "A", teks: "'significantly safer' represents a comparative degree highlighting lower risk.", isCorrect: true },
                  { kode: "B", teks: "'the most accessible' represents a superlative degree indicating optimal ease of entry.", isCorrect: true },
                  { kode: "C", teks: "The officer recommends high school students put all their savings into high-risk mutual funds immediately.", isCorrect: false },
                  { kode: "D", teks: "Student savings accounts provide a safer harbor than mutual funds for beginner savers.", isCorrect: true }
                ],
                kunci: "A, B, dan D",
                pembahasan:
                  "Pernyataan A, B, dan D benar secara analisis kebahasaan komparatif-superlatif dan pesan literasi finansial. C bertolak belakang dengan nasihat bankir."
              },
              soalUraian: {
                level: "C4 (Perbandingan Finansial Lisan)",
                pertanyaan:
                  "Compare three methods of handling student monthly allowance (Cash in Wallet, E-Wallet Application, and Bank Savings Account) using at least two comparative sentences and one superlative sentence!",
                kunci:
                  "First, managing money through an E-Wallet application is considerably more convenient than carrying physical cash for daily canteen transactions. However, keeping funds in a formal Bank Savings Account is far safer against impulsive expenditure than storing them on a smartphone. Ultimately, setting up an automatic debit bank account is the most effective strategy for cultivating disciplined long-term wealth accumulation during secondary school.",
                pembahasan:
                  "Menggunakan 'more convenient than', 'far safer... than' (komparatif) dan 'the most effective strategy' (superlatif) dalam konteks manajemen uang saku.",
                rubrik: [
                  { kriteria: "Ketepatan pembentukan pola kalimat komparatif dan superlatif", skor: 5 },
                  { kriteria: "Kedalaman analisis logika literasi finansial pelajar", skor: 5 }
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
          "Peserta didik membaca dan merespons berbagai macam teks seperti narasi, deskripsi, eksposisi, prosedur, argumentasi, dan diskusi; memahami ide utama dan detail relevan dari teks fiksi dan non-fiksi; menggunakan petunjuk konteks untuk memahami makna kata, frasa, dan struktur gramatikal; mengidentifikasi tujuan penulis, membuat inferensi, membedakan fakta dan opini, serta mengevaluasi efektivitas teks multimodal (teks visual, digital, cetak).",
        kompetensiKKO:
          "Menyimpulkan Makna Tersirat (C4), Menganalisis Ide Pokok & Tujuan Penulis (C4), Mengevaluasi Struktur Teks Multimodal (C5), Mengidentifikasi Bukti Tekstual (C4)",
        lingkupMateri:
          "Multimodal Social Media Captions, Environmental Descriptive Articles, Analytical Exposition Texts on Nutrition, Linear Narratives of Eco-Activists, Financial Procedure Texts",
        tpList: [
          // Unit 1 - TP.02 (Part A: Reading-Viewing)
          {
            kodeTP: "TP.02",
            unitTitle: "Unit 1: Digital Literacies and My Identities",
            lingkupMateri: "Unit 1: Digital Literacies - Content Creator's Purpose, Implicit Inferences & Subject Questions (Reading, Viewing & Writing)",
            teksTP:
              "Mengevaluasi tujuan pembuat konten (content creator's purpose) dan menyimpulkan informasi tersirat (implicit inference) dari teks multimodal interaktif, serta merumuskan subject questions untuk menyusun takarir (social media caption/post) yang etis dan mempresentasikannya dengan kata transisi runtut (transitional words).",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "TP.01 Memahami isu literasi digital lisan",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas", "Komunikasi"],
            dimensiKarakterKemenag: ["Cinta Kebenaran", "PPRA: Berkeadaban (Ta'addub)"],
            konteksPembelajaran: {
              stimulus:
                "Menganalisis infografis multimodal dan postingan media sosial seorang kreator edukasi mengenai fenomena FOMO (Fear of Missing Out) dan cara menyaring konten bermanfaat.",
              stimulusKemenag:
                "Membedah pesan visual etika tabayyun (verifikasi informasi sebelum menyebarkan konten) sesuai QS. Al-Hujurat ayat 6 dalam platform jejaring sosial.",
              masalahNyata:
                "How can students read beyond glamorous algorithmic feeds to identify hidden persuasive agendas and formulate meaningful subject questions for their own audience?",
              kegiatanEksplorasi: [
                "BKoF: Mengidentifikasi fitur teks multimodal: visual layouts, typography, caption rhetoric, and authorial bias.",
                "MoT: Membaca postingan media sosial bertema identitas pemuda; menganalisis subject questions ('Who shapes your online habits?', 'What defines authentic influence?').",
                "JCoT: Bekerja dalam kelompok Team Jigsaw menyusun inferensi bukti tekstual (evidence-based inference) dari 3 tangkapan layar postingan viral.",
                "ICoT: Menyusun draf postingan media sosial edukatif lengkap dengan subject questions, takarir persuasif, dan kata transisi (first, subsequently, consequently)."
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Teks Multimodal",
                  teks: "Evaluate how the juxtaposition of visual imagery and emotive captions in the social media post influences the reader's subconscious perception of self-worth!"
                }
              ],
              rubrikIndikator: [
                {
                  kriteria: "Inferring Implicit Meaning & Formulating Subject Questions",
                  baru: "Hanya menangkap teks literal tanpa mampu menyimpulkan maksud tersirat pembuat konten.",
                  layak: "Mampu menarik simpulan umum namun rumus subject question masih sering tertukar dengan object question.",
                  cakap: "Mampu menganalisis pesan tersirat multimodal dengan bukti rujukan dan merumuskan subject question secara gramatikal.",
                  mahir: "Menghasilkan evaluasi kritis tajam terhadap retorika digital dan merumuskan takarir inovatif yang memikat keterlibatan pembaca."
                }
              ],
              soalPGK: {
                pertanyaan:
                  "An influencer posts an aesthetic photo of an expensive study setup captioned: 'Curating perfection is not an option; it is survival. Who dictates your standards?' Which analytical inferences are valid? (Select all correct options!)",
                pilihan: [
                  { kode: "A", teks: "The sentence 'Who dictates your standards?' is a grammatically correct subject question.", isCorrect: true },
                  { kode: "B", teks: "The creator subtly commercializes academic productivity to promote consumerism.", isCorrect: true },
                  { kode: "C", teks: "The post implies that students with modest study desks cannot achieve academic success.", isCorrect: true },
                  { kode: "D", teks: "The author explicitly forbids students from using social media.", isCorrect: false }
                ],
                kunci: "A, B, dan C",
                pembahasan:
                  "A benar ('Who' bertindak sebagai subjek kalimat pertanyaan). B dan C merupakan inferensi tersirat dari retorika visual kesempurnaan. D salah karena pengarang tidak melarang media sosial."
              },
              soalUraian: {
                level: "C6 (Perumusan Subject Question & Caption)",
                pertanyaan:
                  "Formulate two engaging subject questions regarding digital wellbeing, and draft a 50-word Instagram caption promoting positive self-identity using at least two sequence transition words!",
                kunci:
                  "Subject Questions:\n1. Who controls your attention in an algorithm-driven world?\n2. What inspires your authenticity when filters disguise reality?\n\nCaption:\n'First, pause before scrolling through curated perfection that distorts your peace of mind. Subsequently, remind yourself that real progress happens in quiet daily efforts, not virtual vanity metrics. Embrace your authentic journey because your genuine identity is your greatest superpower. #DigitalWellbeing #SelfWorth'",
                pembahasan:
                  "Menghasilkan subject questions yang benar secara struktur gramatikal dan menyusun takarir bermakna dengan konektor transisi (First, Subsequently).",
                rubrik: [
                  { kriteria: "Ketepatan rumus gramatikal subject questions", skor: 5 },
                  { kriteria: "Kualitas makna takarir literasi digital dan kata transisi", skor: 5 }
                ]
              }
            }
          },

          // Unit 2 - TP.04 (Part A: Reading-Viewing)
          {
            kodeTP: "TP.04",
            unitTitle: "Unit 2: Love Your Environment",
            lingkupMateri: "Unit 2: Love Your Environment - Descriptive Text Structure, Adjective Clauses & Environmental Posters (Reading, Viewing & Writing)",
            teksTP:
              "Menganalisis ide pokok dan tujuan penulis dalam teks deskriptif tempat ramah lingkungan, lalu merancang teks deskriptif tertulis menggunakan klausa kata benda (noun of place + that/where), frasa adjektiva, dan tanda baca akurat, serta mempresentasikannya melalui media poster visual.",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "TP.03 Menguasai kosakata deskripsi limbah domestik",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kreativitas", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Lingkungan", "PPRA: Keteladanan (Qudwah)"],
            konteksPembelajaran: {
              stimulus:
                "Membaca teks deskriptif tentang 'Kampung Edukasi Sampah Mandiri' di Jawa Tengah yang berhasil mengolah 100% sampah domestik menjadi biogas dan pupuk organik.",
              stimulusKemenag:
                "Menelaah ayat-ayat kauniyah tentang keseimbangan alam (Mizan) dan tanggung jawab manusia sebagai khalifah yang memakmurkan bumi tanpa membuat kerusakan (fasad).",
              masalahNyata:
                "How do exemplary zero-waste communities transform filthy public landfills into lush educational gardens through systematic local governance?",
              kegiatanEksplorasi: [
                "BKoF: Menganalisis teks deskriptif: Identification and Description sections.",
                "MoT: Membedah struktur kebahasaan: Noun of place + where ('A community where residents compost domestic waste') dan Noun of place + that ('A facility that converts methane into electricity').",
                "JCoT: Menjalankan aktivitas Give-One-Get-One bertukar frasa adjektiva panca indera untuk menyempurnakan draf deskripsi taman sekolah.",
                "ICoT: Menyusun teks deskripsi 150 kata tentang sudut sekolah ramah lingkungan dan mendesain poster visual infografis pendukung."
              ],
              pertanyaanHOTS: [
                {
                  level: "C4 - Analisis Struktur Teks Deskriptif",
                  teks: "Analyze how the author employs restrictive relative clauses ('place + where/that') to distinguish sustainable community spaces from ordinary municipal zones!"
                }
              ],
              rubrikIndikator: [
                {
                  kriteria: "Descriptive Writing with Adjective Clauses & Poster Presentation",
                  baru: "Paragraf deskripsi tidak terstruktur dan banyak kesalahan dalam klausa pengubah tempat.",
                  layak: "Mampu menyusun identifikasi dan deskripsi namun penggunaan where/that sering tertukar.",
                  cakap: "Menguasai struktur generik teks deskriptif, tanda baca, dan klausa tempat secara konsisten.",
                  mahir: "Menghasilkan esai deskriptif yang sangat hidup, kaya detail panca indera, tata bahasa presisi, dan poster digital yang memukau pembaca."
                }
              ],
              soalPGK: {
                pertanyaan:
                  "Read this excerpt: 'We visited an eco-village where every household segregates plastic meticulously, creating a sanctuary that inspires neighboring districts.' Which grammatical analyses are CORRECT? (Select all correct options!)",
                pilihan: [
                  { kode: "A", teks: "'where every household segregates plastic' is an adjective clause modifying 'an eco-village'.", isCorrect: true },
                  { kode: "B", teks: "'that inspires neighboring districts' is an adjective clause modifying 'a sanctuary'.", isCorrect: true },
                  { kode: "C", teks: "'where' functions as a time adverb in this context.", isCorrect: false },
                  { kode: "D", teks: "The sentence describes a tangible model of sustainable waste stewardship.", isCorrect: true }
                ],
                kunci: "A, B, dan D",
                pembahasan:
                  "A dan B benar menganalisis klausa kata sifat penjelas tempat ('where' untuk tempat keberlangsungan aksi, 'that' untuk subjek penjelas). D benar secara makna konteks. C salah karena 'where' merujuk ke lokasi, bukan waktu."
              },
              soalUraian: {
                level: "C6 (Penulisan Teks Deskripsi Lingkungan)",
                pertanyaan:
                  "Compose a descriptive paragraph (4-5 sentences) illustrating your school's green greenhouse. Ensure you integrate one 'place + where...' clause and one 'place + that...' clause with correct punctuation!",
                kunci:
                  "Nestled behind the science laboratory lies our lush school greenhouse, a sanctuary where passionate student volunteers cultivate hydroponic vegetables every afternoon. The transparent polycarbonate roof filters gentle morning sunlight onto vibrant emerald lettuce rows that flourish without chemical pesticides. In the center stands a modern composting facility that transforms canteen organic leftovers into rich soil conditioner. Walking through this fragrant haven instills deep environmental mindfulness in all who enter.",
                pembahasan:
                  "Paragraf memenuhi struktur deskripsi tempat, memuat klausa 'where...' dan 'that...', serta menggunakan diksi sensorik yang kaya.",
                rubrik: [
                  { kriteria: "Ketepatan penggunaan klausa penjelas tempat (where/that) dan tanda baca", skor: 5 },
                  { kriteria: "Kebermaknaan deskripsi tempat ramah lingkungan dan kekayaan indera", skor: 5 }
                ]
              }
            }
          },

          // Unit 3 - TP.06 (Part A: Reading-Viewing)
          {
            kodeTP: "TP.06",
            unitTitle: "Unit 3: Healthy Life for a Healthy Future",
            lingkupMateri: "Unit 3: Healthy Life - Analytical Exposition Structure, Internal Conjunctions & Group Debate (Reading, Viewing & Writing)",
            teksTP:
              "Menganalisis struktur skematik (thesis, arguments, reiteration) teks eksposisi analitis (analytical exposition) bertema kebugaran fisik dan gizi seimbang, lalu menyusun esai eksposisi analitis menggunakan konjungsi internal-kausal, serta mempertahankan gagasan secara persuasif dalam simulasi debat kelompok (group debate).",
            alokasiJP: 8,
            semester: "GANJIL",
            prasyarat: "TP.05 Memahami perdebatan lisan isu gizi remaja",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kesehatan", "Kolaborasi"],
            dimensiKarakterKemenag: ["Cinta Ilmu", "PPRA: Musyawarah (Syura)"],
            konteksPembelajaran: {
              stimulus:
                "Membaca artikel opini ilmiah dalam jurnal remaja tentang korelasi antara asupan mikronutrien sarapan pagi dengan konsentrasi kognitif saat ujian sekolah.",
              stimulusKemenag:
                "Menelaah hadis tentang pembagian perut: sepertiga untuk makanan, sepertiga untuk minuman, dan sepertiga untuk bernapas sebagai pedoman gaya hidup proporsional.",
              masalahNyata:
                "Why do busy high schoolers chronically skip morning breakfast despite overwhelming neurological evidence proving its role in academic stamina?",
              kegiatanEksplorasi: [
                "BKoF: Menelaah fungsi sosial analytical exposition: meyakinkan pembaca bahwa suatu isu membutuhkan perhatian serius.",
                "MoT: Membedah struktur teks: Thesis statement, Arguments (elaboration + evidence), and Reiteration. Menandai konjungsi internal (furthermore, in addition, conversely) dan kausal (because, consequently, therefore).",
                "JCoT: Menyusun peta konsep (graphic organizer) klaim-bukti untuk topik 'Mandatory Calorie Labeling in School Canteens'.",
                "ICoT: Menulis naskah teks eksposisi analitis 200 kata dan menyelenggarakan debat kelompok sistem parlemen terbuka di kelas."
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Argumen Eksposisi Analitis",
                  teks: "Evaluate whether the author's arguments in the analytical exposition sufficiently substantiate the thesis without committing hasty generalization fallacies!"
                }
              ],
              rubrikIndikator: [
                {
                  kriteria: "Analytical Exposition Essay & Group Debate Execution",
                  baru: "Teks tidak memuat argumen yang kohesif dan tidak memiliki reiteration.",
                  layak: "Mampu menyusun tesis dan argumen namun konjungsi internal masih minim.",
                  cakap: "Menulis eksposisi analitis dengan struktur tesis, argumen berlapis, konjungsi kausal tepat, dan aktif berdebat.",
                  mahir: "Menghasilkan esai argumentatif yang sangat persuasif, didukung data ilmiah solid, konjungsi wacana canggih, dan berdebat secara brilian."
                }
              ],
              soalPGK: {
                pertanyaan:
                  "An analytical exposition states: 'Firstly, prolonged sleep deprivation impairs glucose metabolism. Furthermore, cognitive retention declines significantly without adequate REM cycles. Consequently, maintaining eight hours of nightly sleep is indispensable for adolescent scholars.' Which structural elements are identified? (Select all correct options!)",
                pilihan: [
                  { kode: "A", teks: "'Furthermore' serves as an internal conjunction adding additive supporting evidence.", isCorrect: true },
                  { kode: "B", teks: "'Consequently' introduces a logical causal deduction leading to reiteration.", isCorrect: true },
                  { kode: "C", teks: "The paragraph represents a narrative orientation resolving a character conflict.", isCorrect: false },
                  { kode: "D", teks: "The excerpt demonstrates layered arguments reinforcing a health thesis.", isCorrect: true }
                ],
                kunci: "A, B, dan D",
                pembahasan:
                  "A, B, dan D akurat menganalisis konjungsi internal/kausal dan fungsi retorika argumen eksposisi analitis. C salah karena teks ini analitis persuasif, bukan naratif."
              },
              soalUraian: {
                level: "C6 (Penyusunan Analytical Exposition)",
                pertanyaan:
                  "Write a concise Analytical Exposition text (Thesis, 2 Arguments with internal conjunctions, and Reiteration) arguing why high school students must strictly limit daily screen time before bedtime!",
                kunci:
                  "Thesis: In today's digital era, high school students must strictly restrict electronic screen exposure before bedtime to preserve mental and physical vitality.\n\nArgument 1: Firstly, the blue light emitted by smartphones suppresses melatonin production, which severely disrupts natural circadian rhythms and prevents deep restorative sleep.\n\nArgument 2: Furthermore, absorbing stimulating social media content right before resting triggers nocturnal cognitive arousal, leaving adolescents exhausted and unable to concentrate during morning classes.\n\nReiteration: Therefore, unplugging from digital devices at least one hour before sleeping is an essential habit that safeguards academic productivity and adolescent emotional wellbeing.",
                pembahasan:
                  "Teks lengkap memenuhi syarat Thesis, Argument 1 (Firstly), Argument 2 (Furthermore), dan Reiteration (Therefore).",
                rubrik: [
                  { kriteria: "Kelengkapan struktur generik eksposisi analitis (Thesis-Arguments-Reiteration)", skor: 5 },
                  { kriteria: "Ketepatan konjungsi internal-kausal dan koherensi retorika", skor: 5 }
                ]
              }
            }
          },

          // Unit 4 - TP.08
          {
            kodeTP: "TP.08",
            unitTitle: "Unit 4: Indonesian Environmental Figures",
            lingkupMateri: "Unit 4: Indonesian Environmental Figures - Linear Narrative Structure & Author's Purpose (Reading & Viewing)",
            teksTP:
              "Mengidentifikasi gagasan utama, detail kronologis, dan pesan moral dalam teks naratif biografis linier tentang tokoh pelestari lingkungan hidup Indonesia (Indonesian environmental figures) melalui pembacaan kritis teks cetak dan digital.",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "TP.07 Memahami wacana wawancara pegiat konservasi",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kewargaan", "Kemandirian"],
            dimensiKarakterKemenag: ["Cinta Lingkungan", "Cinta Tanah Air", "PPRA: Keteladanan (Qudwah)"],
            konteksPembelajaran: {
              stimulus:
                "Membaca teks naratif biografis tentang kisah inspiratif Mbah Sadiman dari Wonogiri yang selama puluhan tahun menanami bukit gersang dengan pohon beringin hingga mata air kembali mengalir.",
              stimulusKemenag:
                "Menggali nilai keteladanan salafus shalih dalam menanam pohon; Rasulullah SAW bersabda: 'Tiada seorang muslim yang menanam pohon melainkan apa yang dimakan darinya menjadi sedekah baginya'.",
              masalahNyata:
                "How can the humble, non-violent perseverance of grassroots Indonesian figures like Mbah Sadiman challenge the modern culture of cynicism and immediate gratification?",
              kegiatanEksplorasi: [
                "BKoF: Menelaah elemen narasi linier: Orientation (setting the scene), Complication (the crisis/ridicule), Resolution (triumph of perseverance), and Coda/Moral value.",
                "MoT: Menandai kata kerja bentuk lampau (past verbs: planted, persevered, transformed, overcame) dan penanda urutan kronologis dalam teks biografi Mbah Sadiman.",
                "JCoT: Menggunakan grafik alur narasi (narrative mountain graphic organizer) memetakan titik balik perjuangan tokoh lingkungan.",
                "ICoT: Menganalisis tujuan komunikatif penulis dan mengekstrak pesan moral implisit untuk diterapkan di kehidupan siswa sehari-hari."
              ],
              pertanyaanHOTS: [
                {
                  level: "C4 - Analisis Karakter & Alur Narasi Linier",
                  teks: "Analyze how the narrative constructs the dramatic complication when villagers initially mocked Mbah Sadiman as insane, and how his resilience serves as the emotional pivot of the story!"
                }
              ],
              rubrikIndikator: [
                {
                  kriteria: "Analyzing Narrative Structure & Biographical Chronology",
                  baru: "Kesulitan mengurutkan alur peristiwa masa lalu dalam teks naratif.",
                  layak: "Mampu menemukan ide pokok dan komplikasi namun belum mampu merumuskan pesan moral tersirat.",
                  cakap: "Mampu membedah kronologi peristiwa, komplikasi, resolusi, dan tujuan pengarang dengan bukti tekstual.",
                  mahir: "Mampu menganalisis perkembangan penokohan secara mendalam, mengevaluasi gaya bahasa naratif, dan merefleksikan nilai teladan moral secara filosofis."
                }
              ],
              soalPGK: {
                pertanyaan:
                  "Read this narrative excerpt: 'For decades, Sadiman endured stinging mockery from neighbors who thought he was trading sanity for worthless banyan saplings. Yet, he quietly ascended the scorched slopes at dawn, planting life where desolation reigned.' Which literary and historical features are illustrated? (Select all correct options!)",
                pilihan: [
                  { kode: "A", teks: "The excerpt presents the complication stage where the protagonist encounters social rejection.", isCorrect: true },
                  { kode: "B", teks: "The past verbs 'endured', 'thought', and 'ascended' establish a linear past narrative recount.", isCorrect: true },
                  { kode: "C", teks: "Sadiman eventually gave up planting because of public ridicule.", isCorrect: false },
                  { kode: "D", teks: "The contrast between 'scorched slopes' and 'planting life' highlights thematic resilience.", isCorrect: true }
                ],
                kunci: "A, B, dan D",
                pembahasan:
                  "A, B, dan D akurat membedah struktur komplikasi narasi, unsur tata bahasa past tense, dan kontras tematik. C keliru karena Sadiman pantang menyerah."
              },
              soalUraian: {
                level: "C4 (Analisis Nilai Moral Narasi Linier)",
                pertanyaan:
                  "Based on the narrative of an Indonesian environmental figure, explain how the author resolves the central conflict (Resolution), and articulate the enduring moral lesson (Coda) for high school youth today!",
                kunci:
                  "The author resolves the central conflict when the matured banyan trees successfully store groundwater, causing long-dried communal springs to burst forth with clean water, which finally compels former skeptics to acknowledge the wisdom of Sadiman's sacrifice. The enduring moral lesson (Coda) is that genuine ecological transformation demands patient dedication without seeking instant applause; true leadership consists of serving the community long before the rewards become visible.",
                pembahasan:
                  "Menguraikan tahapan resolusi ketika pohon mengalirkan mata air dan mengartikulasikan pesan moral kepemimpinan tanpa pamrih.",
                rubrik: [
                  { kriteria: "Kejelasan analisis tahap resolusi berbasis bukti tekstual", skor: 5 },
                  { kriteria: "Kedalaman artikulasi pesan moral (coda) bagi generasi muda", skor: 5 }
                ]
              }
            }
          },

          // Unit 5 - TP.11
          {
            kodeTP: "TP.11",
            unitTitle: "Unit 5: Personal Money Management",
            lingkupMateri: "Unit 5: Personal Money Management - Procedure Text Structure, Imperatives & Financial Safety (Reading & Viewing)",
            teksTP:
              "Menganalisis struktur umum (goal, materials, steps) dan ciri kebahasaan teks prosedur (procedure text) mengenai transaksi perbankan cerdas, pembukaan rekening tabungan, serta keamanan bertransaksi online secara cermat.",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "TP.10 Memahami dialog perbankan dan derajat perbandingan",
            dimensiKarakterDinas: ["Penalaran Kritis", "Kemandirian", "Kewargaan"],
            dimensiKarakterKemenag: ["Cinta Kebenaran", "PPRA: Lurus dan Tegas (I'tidal)"],
            konteksPembelajaran: {
              stimulus:
                "Membaca manual infografis perbankan digital bertajuk 'How to Set Up a Secure Student Savings Account and Avoid Phishing Scams'.",
              stimulusKemenag:
                "Menelaah petunjuk syariat mengenai pencatatan transaksi utang-piutang dan akad keuangan yang transparan (QS. Al-Baqarah ayat 282).",
              masalahNyata:
                "Why do many young online shoppers fall victim to OTP credential theft, and how can mastering procedural instructions safeguard their hard-earned money?",
              kegiatanEksplorasi: [
                "BKoF: Menelaah teks prosedur perbankan: Goal/Aim, Materials/Prerequisites, and Step-by-step instructions.",
                "MoT: Menandai kalimat imperatif ('Do not share your PIN', 'Verify the SSL encryption padlock') dan penanda urutan temporal (initially, subsequently, simultaneously, ultimately).",
                "JCoT: Menganalisis studi kasus transaksi gagal; merekonstruksi langkah perbaikan keamanan akun menggunakan graphic organizer alur kerja (flowchart).",
                "ICoT: Menyimpulkan maksud penulis dan mengevaluasi efektivitas instruksi visual keamanan perbankan digital."
              ],
              pertanyaanHOTS: [
                {
                  level: "C5 - Evaluasi Teks Prosedur Keuangan",
                  teks: "Evaluate the clarity and risk-prevention efficacy of the procedural steps outlined for authenticating two-factor authentication (2FA) in digital banking apps!"
                }
              ],
              rubrikIndikator: [
                {
                  kriteria: "Analyzing Procedure Text Structure & Safety Instructions",
                  baru: "Melewatkan langkah-langkah krusial atau keliru mengidentifikasi kalimat perintah imperatif.",
                  layak: "Mampu menyebutkan tujuan dan langkah teks prosedur namun belum teliti pada istilah teknis perbankan.",
                  cakap: "Menganalisis struktur prosedur, kata kerja imperatif, dan penanda urutan kronologis secara akurat.",
                  mahir: "Mampu mengevaluasi celah keamanan dalam teks prosedur teknis dan merumuskan instruksi perbaikan yang kedap risiko penipuan siber."
                }
              ],
              soalPGK: {
                pertanyaan:
                  "Consider this step from a banking security procedure: 'Never disclose your One-Time Password (OTP) to anyone, including individuals claiming to represent the bank's customer helpline.' Which linguistic and procedural features are present? (Select all correct options!)",
                pilihan: [
                  { kode: "A", teks: "The sentence employs a negative imperative ('Never disclose') to enforce mandatory compliance.", isCorrect: true },
                  { kode: "B", teks: "It represents a non-negotiable security protocol within the procedure's action sequence.", isCorrect: true },
                  { kode: "C", teks: "It instructs bank customers to post their OTP codes on social media.", isCorrect: false },
                  { kode: "D", teks: "The clause 'including individuals claiming...' anticipates common social engineering deceit tactics.", isCorrect: true }
                ],
                kunci: "A, B, dan D",
                pembahasan:
                  "A, B, dan D tepat mengidentifikasi fungsi kalimat imperatif larangan keras dan mitigasi taktik manipulasi sosial (social engineering). C adalah tindakan berbahaya yang berlawanan."
              },
              soalUraian: {
                level: "C4 (Analisis Alur Teks Prosedur Perbankan)",
                pertanyaan:
                  "Analyze the procedural flow of setting up a monthly personal budget using the 50/30/20 rule. Outline the Goal, Materials needed, and three clear imperative steps with temporal sequence connectors!",
                kunci:
                  "Goal: How to Construct a Balanced Student Monthly Budget using the 50/30/20 Rule\nMaterials: Monthly allowance record, budget tracking app or notebook, calculator.\n\nSteps:\n1. First, calculate your total net monthly pocket money and allocate exactly 50% exclusively for unavoidable daily essentials such as transportation and school supplies.\n2. Next, apportion 30% for personal wants and social engagements, ensuring you never exceed this designated threshold.\n3. Finally, immediately deposit the remaining 20% into an inaccessible student bank account before initiating any discretionary spending.",
                pembahasan:
                  "Menyajikan Goal, Materials, dan 3 langkah terstruktur dengan penanda urutan (First, Next, Finally) serta kalimat imperatif (calculate, apportion, deposit).",
                rubrik: [
                  { kriteria: "Kelengkapan komponen Goal, Materials, dan Steps prosedural", skor: 5 },
                  { kriteria: "Akurasi kalimat imperatif dan logika rumus 50/30/20", skor: 5 }
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
          "Peserta didik menulis berbagai jenis teks fiksi dan non-fiksi seperti teks deskripsi, narasi, eksposisi analitis, prosedur, dan multimodal; menunjukkan kesadaran terhadap tujuan dan target pembaca; merencanakan, menulis, merevisi, dan menyunting teks dengan menggunakan struktur teks dan unsur kebahasaan yang sesuai; menggunakan strategi pengorganisasian ide dan konektor logis; mempresentasikan gagasan dan hasil karya dalam bentuk lisan, visual, poster, maupun digital secara interaktif dan percaya diri.",
        kompetensiKKO:
          "Menulis Narasi Linier (C6), Merancang Teks Prosedur Terstruktur (C6), Mendesain Poster Digital/Fisik (C6), Mempresentasikan Karya Interaktif (C5)",
        lingkupMateri:
          "Narrative Writing of Eco-Heroes, Procedural Writing on Budgeting, Visual Environmental Action Posters, Digital Financial Literacy Campaigns",
        tpList: [
          // Unit 4 - TP.09
          {
            kodeTP: "TP.09",
            unitTitle: "Unit 4: Indonesian Environmental Figures",
            lingkupMateri: "Unit 4: Indonesian Environmental Figures - Simple Past Linear Narrative & Environmental Action Poster (Writing & Presenting)",
            teksTP:
              "Mengonstruksi teks naratif linier tentang aksi inspiratif penyelamatan bumi dengan menerapkan bentuk lampau (simple past tense) dan penanda waktu runut, serta mempublikasikan infografis/poster tokoh lingkungan dalam pameran galeri kelas (gallery walk).",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "TP.08 Menguasai pemahaman narasi biografi lingkungan",
            dimensiKarakterDinas: ["Kreativitas", "Penalaran Kritis", "Kolaborasi"],
            dimensiKarakterKemenag: ["Cinta Lingkungan", "PPRA: Keteladanan (Qudwah)"],
            konteksPembelajaran: {
              stimulus:
                "Proyek kolaboratif kelas: Murid meneliti sosok pejuang lingkungan lokal di daerahnya (atau tokoh nasional seperti Laetania Belai Djandam) dan merangkai kisahnya menjadi naskah naratif 250 kata serta poster edukatif.",
              stimulusKemenag:
                "Menyebarkan kisah-kisah kebaikan dan pelestarian bumi nusantara sebagai wujud amar ma'ruf bil-ihsan dan dakwah bil-hal.",
              masalahNyata:
                "How can students transform dry biographical records into compelling linear narratives that spark real ecological activism among their peer groups?",
              kegiatanEksplorasi: [
                "Drafting: Menyusun draf narasi linier berurutan (Orientation, Complication, Resolution) menggunakan kata kerja lampau reguler dan ireguler.",
                "Peer-Editing: Menjalankan sesi koreksi silang meneliti ketepatan past tense, penanda waktu (in 2015, two years later, eventually), dan tanda baca.",
                "Poster Design: Merancang poster infografis digital/manual yang memadukan kutipan inspiratif tokoh, foto dokumentasi, dan ikhtisar perjuangan.",
                "Gallery Walk & Presentation: Memamerkan poster di dinding kelas; setiap kelompok bergantian menjaga stan dan mempresentasikan narasi tokoh selama 2 menit."
              ],
              pertanyaanHOTS: [
                {
                  level: "C6 - Kreasi Narasi Linier & Presentasi Publik",
                  teks: "Synthesize the historical facts of an Indonesian environmental figure into a poignant linear narrative that evokes empathy and motivates concrete recycling habits!"
                }
              ],
              rubrikIndikator: [
                {
                  kriteria: "Writing Linear Past Narrative & Gallery Walk Presentation",
                  baru: "Teks narasi mencampuradukkan present tense dan past tense secara rancu.",
                  layak: "Mampu menulis narasi linier sederhana namun transisi kronologis masih terbatas.",
                  cakap: "Menulis narasi masa lampau secara konsisten, alur komplikasi-resolusi jelas, dan poster tersaji apik.",
                  mahir: "Menulis narasi biografis yang menggugah emosi dengan diksi sastrawi elegan, akurasi gramatikal sempurna, dan presentasi lisan yang memukau audiens."
                }
              ],
              soalPGK: {
                pertanyaan:
                  "Which drafting choices DEMONSTRATE exemplary linear narrative writing about an environmental youth leader? (Select all correct options!)",
                pilihan: [
                  { kode: "A", teks: "Establishing the historical setting clearly in the orientation: 'In 2018, witnessing plastic-choked coral reefs in her hometown compelled Nina to act.'", isCorrect: true },
                  { kode: "B", teks: "Switching abruptly into future tense without narrative justification.", isCorrect: false },
                  { kode: "C", teks: "Employing vivid chronological action verbs: 'mobilized', 'petitioned', and 'rehabilitated'.", isCorrect: true },
                  { kode: "D", teks: "Concluding with an impactful coda highlighting how local stewardship inspired national legislation.", isCorrect: true }
                ],
                kunci: "A, C, dan D",
                pembahasan:
                  "A, C, dan D menunjukkan praktik terbaik penulisan narasi linier sejarah (orientasi waktu, kata kerja aksi lampau, dan koda bermakna). B merusak konsistensi narasi."
              },
              soalUraian: {
                level: "C6 (Penyusunan Narasi Linier & Poster Pitch)",
                pertanyaan:
                  "Write an Orientation and Complication paragraph (total 5-6 sentences) for a linear narrative about a young Indonesian activist fighting plastic pollution in rivers, using correct simple past tense forms!",
                kunci:
                  "Five years ago, a passionate high school student named Arya stood beside the Citarum River and wept at the floating carpet of industrial trash choking the currents. Rather than succumbing to despair, he founded a youth river patrol that recruited dozens of adolescent volunteers each weekend. Together, they gathered discarded plastics and installed homemade bio-filters along the tributary banks. However, intense opposition arose when irresponsible upstream factories secretly dumped toxic effluent at midnight, poisoning their newly planted water lilies and threatening the volunteers' health. Despite intimidating warnings from factory security personnel, Arya documented the violations on social media and refused to surrender his river restoration mission.",
                pembahasan:
                  "Memenuhi orientasi (latar waktu, tempat, tokoh) dan komplikasi dramatis dengan penggunaan kata kerja lampau yang tepat (stood, wept, founded, gathered, dumped, refused).",
                rubrik: [
                  { kriteria: "Ketepatan konsistensi kata kerja lampau (simple past tense)", skor: 5 },
                  { kriteria: "Kekuatan dramaturgi alur orientasi dan komplikasi narasi", skor: 5 }
                ]
              }
            }
          },

          // Unit 5 - TP.12
          {
            kodeTP: "TP.12",
            unitTitle: "Unit 5: Personal Money Management",
            lingkupMateri: "Unit 5: Personal Money Management - Multi-step Procedure Writing & Financial Literacy Poster (Writing & Presenting)",
            teksTP:
              "Merancang dan menyusun teks prosedur tertulis multi-langkah mengenai pengelolaan anggaran keuangan saku atau prosedur penggunaan aplikasi pembayaran digital dengan kalimat imperatif (imperatives) dan penanda urutan (sequence markers), serta menyajikan poster literasi finansial secara meyakinkan.",
            alokasiJP: 8,
            semester: "GENAP",
            prasyarat: "TP.11 Menguasai analisis manual prosedur keuangan",
            dimensiKarakterDinas: ["Kemandirian", "Penalaran Kritis", "Kreativitas"],
            dimensiKarakterKemenag: ["Cinta Keadilan", "PPRA: Berimbang (Tawazun)"],
            konteksPembelajaran: {
              stimulus:
                "Festival Literasi Finansial Sekolah: Murid merancang panduan prosedur praktis bertajuk 'Smart Student Money Hacks: From Pocket Money to Emergency Savings' yang dilengkapi poster infografis kreatif.",
              stimulusKemenag:
                "Mempromosikan budaya hidup hemat, jujur dalam transaksi, dan gemar bersedekah (infaq) sebagai investasi kebajikan dunia dan akhirat.",
              masalahNyata:
                "How can high school students author authoritative, visually engaging procedural guidelines that prevent their peers from falling into digital consumer debt?",
              kegiatanEksplorasi: [
                "Planning: Menentukan tujuan prosedur (misal: 'How to Build a Rp 1,000,000 Emergency Fund on a Student Allowance').",
                "Drafting: Menyusun langkah-langkah prosedural dengan kata kerja aksi imperatif (Track, Categorize, Automate, Review) dan penanda urutan waktu.",
                "Visual Packaging: Mendesain poster infografis digital menggunakan aplikasi desain grafis dengan hirarki tipografi yang jelas.",
                "Presentation & Peer Feedback: Mempresentasikan panduan prosedur di hadapan dewan juri kelas dan menerima masukan efektivitas instruksi."
              ],
              pertanyaanHOTS: [
                {
                  level: "C6 - Perancangan Prosedur Finansial Mandiri",
                  teks: "Design a comprehensive, fool-proof procedural guideline for students to audit their daily micro-expenses and redirect wasted funds into high-interest emergency deposits!"
                }
              ],
              rubrikIndikator: [
                {
                  kriteria: "Writing Procedural Financial Guidelines & Poster Campaign",
                  baru: "Instruksi tidak urut, tidak memuat kalimat imperatif, dan poster membingungkan pembaca.",
                  layak: "Mampu menyusun langkah-langkah dasar namun formula kalimat perintah masih belum seragam.",
                  cakap: "Menyusun teks prosedur lengkap dengan imperatif tegas, penanda urutan logis, dan tata letak poster informatif.",
                  mahir: "Menghasilkan panduan prosedur finansial profesional yang sangat aplikatif, estetika infografis memukau, dan dipresentasikan dengan kefasihan komunikasi prima."
                }
              ],
              soalPGK: {
                pertanyaan:
                  "Which instructions reflect EFFECTIVE procedural writing for establishing an adolescent emergency savings fund? (Select all correct options!)",
                pilihan: [
                  { kode: "A", teks: "'Immediately audit your daily transactions at the conclusion of each evening.'", isCorrect: true },
                  { kode: "B", teks: "'Borrow money indiscriminately without calculating repayment interest rates.'", isCorrect: false },
                  { kode: "C", teks: "'Transfer a fixed 20% portion into a locked digital vault prior to making casual purchases.'", isCorrect: true },
                  { kode: "D", teks: "'Review your fiscal progress fortnightly and recalibrate spending categories where deficits occur.'", isCorrect: true }
                ],
                kunci: "A, C, dan D",
                pembahasan:
                  "Instruksi A, C, dan D menggunakan kalimat imperatif aksi (Audit, Transfer, Review) yang membimbing kebiasaan disiplin finansial. B adalah resep kehancuran keuangan."
              },
              soalUraian: {
                level: "C6 (Penyusunan Teks Prosedur Finansial Lengkap)",
                pertanyaan:
                  "Draft a complete 4-step Procedure Text entitled 'How to Prevent Impulsive E-Commerce Purchases during Flash Sale Discounts' using imperative sentences, warnings, and sequence connectors!",
                kunci:
                  "Title: How to Prevent Impulsive E-Commerce Purchases during Flash Sale Discounts\n\nSteps:\n1. First, enforce a mandatory 48-hour cooling-off rule by placing desired sale items into your shopping cart without proceeding to checkout.\n2. Next, cross-check whether the item fulfills a genuine educational necessity or merely satisfies temporary peer vanity.\n3. Then, calculate how many hours of hard pocket-money budgeting the item truly costs, and consult a trusted guardian or mentor before confirming payment.\n4. Finally, remove linked digital payment cards from the e-commerce app to introduce physical friction that prevents one-click impulse purchasing.",
                pembahasan:
                  "Teks memiliki judul, 4 langkah urut (First, Next, Then, Finally), kalimat imperatif terarah (enforce, cross-check, calculate, remove), dan solusi pencegahan nyata.",
                rubrik: [
                  { kriteria: "Ketepatan struktur imperatif teks prosedur dan penanda sekuensi", skor: 5 },
                  { kriteria: "Kecerdasan solusi pencegahan belanja impulsif digital", skor: 5 }
                ]
              }
            }
          }
        ]
      }
    ]
  }
];
