// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import {
  TeacherInput,
  CompleteDocumentPackage,
  Doc1Item,
  Doc2Item,
  Doc3Item,
  Doc4Item,
  Doc5ModulAjar,
  Doc6LKPD,
  Doc7KKTP,
  Doc8KisiKisiItem,
  Doc9BankSoal,
  UnitPackage,
} from "../types";
import { CURRICULUM_DATABASE, REGULASI_CONSTANTS } from "../data/curriculumDatabase";
import { formatFaseKelasClean } from "./formatters";
import { extractSpecificKKO, extractSpecificMateri } from "./kkoExtractor";

// ============================================================================
// ENGLISH GRADE XI: "English for Change" (5 Units / 12 TPs)
// Single Source of Truth: KB_ATOMIC_ATP_PROSEM_PROTA_MODUL_AJAR_ENGLISH_XI
// ============================================================================
const ENGLISH_XI_METHOD_PRASYARAT_MAP: Record<string, string> = {
  "TP.01": "Genre-Based Approach (GBA) & Audio-Lingual: Mengidentifikasi ungkapan menyatakan opini, persetujuan, dan ketidaksetujuan serta pelafalan penekanan kata (word stress) dalam percakapan transaksional literasi digital remaja (Prasyarat: Percakapan interpersonal CEFR A2/B1 Fase E)",
  "TP.02": "Genre-Based Approach (GBA) & Multimodal Literacy: Evaluasi tujuan pembuat konten (content creator's purpose), inferensi makna tersirat pada wacana media sosial, formulasi subject questions, dan presentasi alur unggahan (Prasyarat: TP.01 Menguasai ekspresi opini dan word stress)",
  "TP.03": "Genre-Based Approach (GBA) & Communicative Language Teaching (CLT): Identifikasi ragam ungkapan isu sampah domestik (domestic waste), kosakata panca indra (five senses), dan simulasi dialog peduli kelestarian lingkungan (Prasyarat: Percakapan transaksional dasar Fase E)",
  "TP.04": "Genre-Based Approach (GBA) & Process-Genre Writing: Analisis gagasan utama dan tujuan komunikatif teks deskriptif tempat, pemanfaatan klausa ajektiva (adjective clauses: that/where), tanda baca, serta perancangan poster lingkungan (Prasyarat: TP.03 Menguasai kosakata panca indra dan isu sampah)",
  "TP.05": "Genre-Based Approach (GBA) & Task-Based Language Learning: Menganalisis dan menerapkan ungkapan memberi dan mempertahankan pendapat (giving & defending opinions), penekanan intonasi kalimat (sentence stress), dan diskusi isu gaya hidup sehat (Prasyarat: Ungkapan opini interpersonal CEFR B1)",
  "TP.06": "Genre-Based Approach (GBA) & Academic Debate: Membedah struktur skematik teks eksposisi analitis (thesis, arguments, reiteration), konjungsi internal/kausal, penulisan esai analitis kesehatan, dan demonstrasi debat kelompok (Prasyarat: TP.05 Menerapkan ungkapan memberi dan mempertahankan opini)",
  "TP.07": "Genre-Based Approach (GBA) & Role-Playing: Mengidentifikasi dan mempraktikkan struktur percakapan transaksional untuk memulai, melanjutkan, dan mengakhiri dialog wawancara profil pejuang lingkungan Indonesia dengan intonasi gramatikal (Prasyarat: Percakapan transaksional dasar)",
  "TP.08": "Genre-Based Approach (GBA) & Close Reading: Analisis gagasan utama, detail kronologis, dan pesan moral wacana naratif linier biografi tokoh inspiratif pelestari lingkungan Indonesia (Prasyarat: TP.07 Menguasai percakapan wawancara tokoh)",
  "TP.09": "Process-Genre Writing & Multimodal Action: Mengonstruksi draf teks naratif linier dengan Simple Past Tense dan mempresentasikan poster digital aksi penyelamatan lingkungan hidup (Prasyarat: TP.08 Menganalisis alur narasi linier tokoh lingkungan)",
  "TP.10": "Task-Based Language Learning & Real-life Inquiry: Menyimak informasi lisan transaksi keuangan pribadi dan menggunakan perbandingan tingkat komparatif & superlatif (comparative & superlative degree) dalam perencanaan anggaran pelajar (Prasyarat: Kosakata finansial dasar CEFR B1)",
  "TP.11": "Genre-Based Approach (GBA) & Textual Analysis: Membedah struktur umum teks prosedur (goal, materials, steps), kalimat imperatif, sequence markers, dan langkah mitigasi keamanan perbankan digital (Prasyarat: TP.10 Menguasai kosakata komparatif finansial)",
  "TP.12": "Process-Genre Writing & Financial Literacy Campaign: Merancang dan menyusun teks prosedur tertulis multi-langkah manajemen tabungan mandiri serta menyajikan kampanye literasi finansial bijak (Prasyarat: TP.11 Menguasai struktur dan ciri kebahasaan teks prosedur)",
};

// ============================================================================
// ENGLISH GRADE XII: "Life Today" (4 Units / 12 TPs)
// Single Source of Truth: KB_ATOMIC_ATP_PROSEM_PROTA_MODUL_AJAR_INGGRIS_XII
// ============================================================================
const ENGLISH_XII_METHOD_PRASYARAT_MAP: Record<string, string> = {
  "TP.01": "Genre-Based Approach (GBA) & Audio-Lingual: Mengidentifikasi alur narasi lisan, tujuan komunikatif, dan role play penghematan energi (Prasyarat: Percakapan transaksional CEFR B1)",
  "TP.02": "Genre-Based Approach (GBA) & Close Reading: Bedah teks 'The Story of a Friendly Future', past tenses, action verbs, dan inferensi implisit (Prasyarat: TP.01 Memahami narasi lisan energi terbarukan)",
  "TP.03": "Process-Genre Writing Approach (PGWA) & Story Retelling: Penulisan draf narasi fiksi energi bersih dan penceritaan kembali secara lisan (Prasyarat: TP.02 Menganalisis fitur kebahasaan narasi)",
  "TP.04": "Task-Based Language Learning (TBLL) & Communicative Language Teaching (CLT): Analisis podcast uang digital dan simulasi ungkapan asking/giving opinions (Prasyarat: Percakapan interpersonal dasar)",
  "TP.05": "Genre-Based Approach (GBA) & Analytical Reading: Pemetaan klaim, pembuktian data, dan makna tersirat teks argumentatif cashless society (Prasyarat: TP.04 Memahami wacana argumentatif lisan)",
  "TP.06": "Project-Based Learning (PjBL) & Digital Scriptwriting: Penulisan naskah esai argumentatif dan produksi rekaman podcast audio interaktif (Prasyarat: TP.05 Menganalisis teks argumentatif tertulis)",
  "TP.07": "Genre-Based Approach (GBA) & Multimodal Viewing: Identifikasi struktur tesis-argumen-rekomendasi dan interpretasi infografik etika siber (Prasyarat: Membaca teks non-fiksi Fase E)",
  "TP.08": "Critical Literacy & Language Feature Analysis: Pemilahan fakta vs opini, Simple Present Tense, dan emotive phrases pada teks netiket (Prasyarat: TP.07 Mengidentifikasi struktur teks eksposisi hortatori)",
  "TP.09": "Process-Genre Writing & Collaborative Presentation: Penyusunan naskah hortatori rekomendasi etika digital dan presentasi kelompok terpandu (Prasyarat: TP.08 Membedah fakta-opini teks hortatori)",
  "TP.10": "Task-Based Language Learning (TBLL) & Field Interviewing: Wawancara terstruktur dan evaluasi sudut pandang lisan seputar jejak karbon harian (Prasyarat: Berkomunikasi lisan setara CEFR B1+)",
  "TP.11": "Genre-Based Approach (GBA) & Multi-Perspective Reading: Analisis argumen berimbang pro-kontra, generic participants, modality, dan passive voice (Prasyarat: TP.10 Memahami isu lingkungan lisan)",
  "TP.12": "Cooperative Learning & Academic Symposium Defense: Penulisan teks diskusi multi-perspektif mitigasi emisi karbon dan presentasi simposium kelas (Prasyarat: TP.11 Menganalisis fitur teks diskusi)",
};

const ENGLISH_XI_QUESTIONS_MAP: Record<string, { pgk: any; uraian: any }> = {
  "TP.01": {
    pgk: {
      pertanyaan: "Listen to the dialogue statement: 'While viral trends offer immediate visibility, I firmly believe that maintaining digital privacy builds a more resilient professional identity in the long run.' Which statements accurately reflect the speaker's stance and language features? (Select all correct options!)",
      pilihan: [
        { kode: "A", teks: "The speaker prioritizes long-term professional integrity over fleeting digital popularity.", isCorrect: true },
        { kode: "B", teks: "The phrase 'I firmly believe' functions as a strong expression of stating personal conviction/opinion.", isCorrect: true },
        { kode: "C", teks: "The speaker advocates for deleting all social media accounts immediately.", isCorrect: false },
        { kode: "D", teks: "The word 'resilient' receives primary stress on the second syllable (/rɪˈzɪl.jənt/).", isCorrect: true },
      ],
      kunci: "A, B, dan D",
      pembahasan: "Statements A, B, and D are accurate. The speaker emphasizes long-term integrity, uses strong opinion markers, and correctly places word stress on the second syllable of 'resilient'.",
    },
    uraian: {
      level: "C4 (Analisis Argumen Lisan)",
      pertanyaan: "Your classmate asserts: 'High social media engagement is the only parameter of a teenager's success today.' Construct a polite 3-sentence transactional response expressing respectful disagreement and offering an alternative perspective based on digital safety!",
      kunci: "I understand why high engagement seems appealing, but I respectfully disagree with equating follower metrics to personal success. In my perspective, digital literacy also involves cultivating critical discernment and safeguarding personal privacy. Therefore, creating meaningful offline accomplishments is far more fulfilling than chasing transient online validation.",
      pembahasan: "Demonstrates respectful disagreement (I understand... but I respectfully disagree) and balanced counter-argumentation.",
      rubrik: [
        { kriteria: "Polite disagreement expressions and opinion defense", skor: 30 },
        { kriteria: "Grammatical accuracy and coherence", skor: 30 },
      ],
    },
  },
  "TP.02": {
    pgk: {
      pertanyaan: "An influencer posts an aesthetic photo of an expensive study setup captioned: 'Curating perfection is not an option; it is survival. Who dictates your standards?' Which analytical inferences are valid? (Select all correct options!)",
      pilihan: [
        { kode: "A", teks: "The sentence 'Who dictates your standards?' is a grammatically correct subject question.", isCorrect: true },
        { kode: "B", teks: "The creator subtly commercializes academic productivity to promote consumerism.", isCorrect: true },
        { kode: "C", teks: "The post implies that students with modest study desks cannot achieve academic success.", isCorrect: true },
        { kode: "D", teks: "The author explicitly forbids students from using social media.", isCorrect: false },
      ],
      kunci: "A, B, dan C",
      pembahasan: "Options A, B, and C are valid analytical deductions. 'Who dictates your standards?' is a subject question (question word as subject).",
    },
    uraian: {
      level: "C6 (Perumusan Subject Question & Caption)",
      pertanyaan: "Formulate two engaging subject questions regarding digital wellbeing, and draft a 50-word Instagram caption promoting positive self-identity using at least two sequence transition words!",
      kunci: "Subject Questions:\n1. Who controls your daily screen time habits?\n2. What defines your authentic value beyond viral metrics?\n\nCaption:\nFirst, remember that your worth cannot be measured by algorithm-driven metrics. Subsequently, invest your energy into genuine human connections and offline passions. Ultimately, true empowerment flourishes when you embrace authenticity over curated online perfection.",
      pembahasan: "Accurate subject questions (Who controls... What defines...) and sequential transitions (First, Subsequently, Ultimately).",
      rubrik: [
        { kriteria: "Correct formulation of subject questions", skor: 30 },
        { kriteria: "Effective caption writing with sequential transitional markers", skor: 30 },
      ],
    },
  },
  "TP.03": {
    pgk: {
      pertanyaan: "An environmental activist states: 'The neglected landfill behind the market releases pungent vapors that suffocate nearby households.' Which sensory descriptors and grammatical features are present? (Select all correct options!)",
      pilihan: [
        { kode: "A", teks: "'Pungent vapors' employs olfactory sensory imagery (smell) to convey pollution severity.", isCorrect: true },
        { kode: "B", teks: "The adjective 'neglected' functions as a modifier highlighting lack of municipal management.", isCorrect: true },
        { kode: "C", teks: "The verb 'suffocate' provides vivid kinesthetic/tactile impact.", isCorrect: true },
        { kode: "D", teks: "The sentence is composed entirely in the future continuous tense.", isCorrect: false },
      ],
      kunci: "A, B, dan C",
      pembahasan: "Options A, B, and C accurately evaluate sensory descriptors (pungent = smell, suffocate = kinesthetic, neglected = adjective).",
    },
    uraian: {
      level: "C4 (Deskripsi Panca Indra)",
      pertanyaan: "Explain how incorporating vivid sensory adjectives (such as 'foul-smelling', 'rusty', 'clattering') enhances a speaker's persuasiveness when discussing community waste sorting in a school campaign!",
      kunci: "Sensory adjectives evoke vivid mental imagery that triggers visceral emotional responses from listeners. Rather than processing abstract statistics, the audience directly envisions the unhygienic reality of unorganized waste, thereby fostering urgency and empathetic engagement to take concrete recycling action.",
      pembahasan: "Sensory language transforms passive conceptual understanding into empathetic motivation.",
      rubrik: [
        { kriteria: "Connecting sensory vocabulary to persuasive effectiveness", skor: 30 },
        { kriteria: "Clarity of communicative reasoning", skor: 30 },
      ],
    },
  },
  "TP.04": {
    pgk: {
      pertanyaan: "Read this excerpt: 'We visited an eco-village where every household separates organic scraps that feed communal biogas digesters.' Which structural and grammatical analyses are correct? (Select all correct options!)",
      pilihan: [
        { kode: "A", teks: "'Where every household separates organic scraps' functions as an adjective clause modifying 'eco-village'.", isCorrect: true },
        { kode: "B", teks: "'That feed communal biogas digesters' is an adjective clause modifying 'organic scraps'.", isCorrect: true },
        { kode: "C", teks: "The excerpt demonstrates descriptive text structure focusing on environmental features.", isCorrect: true },
        { kode: "D", teks: "The text functions as a fictional myth without real-world environmental relevance.", isCorrect: false },
      ],
      kunci: "A, B, dan C",
      pembahasan: "A, B, and C are verified grammatical and genre analyses (relative clauses with 'where' for place and 'that' for things).",
    },
    uraian: {
      level: "C6 (Penyusunan Paragraf Deskriptif & Klausa Ajektiva)",
      pertanyaan: "Compose a descriptive paragraph (4-5 sentences) illustrating your school's green corner, incorporating at least one adjective clause with 'where' and one with 'which/that'!",
      kunci: "Tucked behind the science laboratory lies our beloved green sanctuary where students congregate during recess. The garden features shaded bamboo pergolas that shield young fern seedlings from scorching tropical heat. Towering mahogany trees provide crisp, oxygenated breezes that invigorate tired learners. In this serene space, dedicated green ambassadors nurture compost beds which transform canteen food waste into nutrient-rich black soil.",
      pembahasan: "Evocative descriptive paragraph containing required adjective clauses ('where students congregate...', 'that shield young...', 'which transform canteen...').",
      rubrik: [
        { kriteria: "Accurate syntactic use of adjective clauses (where, that/which)", skor: 30 },
        { kriteria: "Descriptive coherence and rich sensory imagery", skor: 30 },
      ],
    },
  },
  "TP.05": {
    pgk: {
      pertanyaan: "Consider this spoken statement: 'We CANNOT ignore the surge in adolescent obesity when processed snacks are subsidized over fresh fruit.' Which words carry primary sentence stress to emphasize the speaker's argument? (Select all correct options!)",
      pilihan: [
        { kode: "A", teks: "'CANNOT' - stressed to emphasize the urgency and impossibility of denial.", isCorrect: true },
        { kode: "B", teks: "'the' and 'in' - stressed because they are grammatical function words.", isCorrect: false },
        { kode: "C", teks: "'OBESITY' - stressed as the core content noun indicating the health crisis.", isCorrect: true },
        { kode: "D", teks: "'FRESH FRUIT' - stressed to contrast directly against processed snacks.", isCorrect: true },
      ],
      kunci: "A, C, dan D",
      pembahasan: "Content words carrying focal communicative weight receive sentence stress, while function words ('the', 'in') remain unstressed.",
    },
    uraian: {
      level: "C5 (Pertahanan Opini Lisan)",
      pertanyaan: "In a debate round, an opponent claims: 'Exercise alone compensates for any amount of junk food consumed.' Formulate a spoken rebuttal (4 sentences) defending the primacy of nutritional quality with proper contrastive transition markers!",
      kunci: "While regular exercise is unquestionably vital for cardiovascular fitness, it is a scientific fallacy that physical activity can outrun a chronically poor diet. High intakes of refined sugars and trans fats induce cellular inflammation that aerobic workouts cannot neutralize. Furthermore, nutrient deficiencies impair the body's metabolic recovery and cognitive functioning during study hours. Therefore, rigorous physical training and mindful nutritional intake must function as interdependent pillars of adolescent wellness.",
      pembahasan: "Constructs evidence-based rebuttal with contrastive signposting (While, Furthermore, Therefore).",
      rubrik: [
        { kriteria: "Logical strength of rebuttal and nutritional defense", skor: 30 },
        { kriteria: "Command of spoken discourse connectors and lexical range", skor: 30 },
      ],
    },
  },
  "TP.06": {
    pgk: {
      pertanyaan: "An analytical exposition states: 'Firstly, prolonged sleep deprivation impairs glucose metabolism. Furthermore, lack of rest triggers cortisol production.' Which linguistic features are present? (Select all correct options!)",
      pilihan: [
        { kode: "A", teks: "'Firstly' and 'Furthermore' function as internal conjunctions organizing arguments sequentially.", isCorrect: true },
        { kode: "B", teks: "The simple present tense is employed to convey scientific facts and enduring health truths.", isCorrect: true },
        { kode: "C", teks: "The text belongs to the narrative genre because it tells a magical bedtime fairy tale.", isCorrect: false },
        { kode: "D", teks: "The argument links biological causal mechanisms directly to overall student health.", isCorrect: true },
      ],
      kunci: "A, B, dan D",
      pembahasan: "Options A, B, and D are characteristic of analytical exposition (internal conjunctions, present tense, causal arguments).",
    },
    uraian: {
      level: "C6 (Penyusunan Teks Eksposisi Analitis)",
      pertanyaan: "Write a concise Analytical Exposition text (Thesis, 2 Arguments with internal conjunctions, and Reiteration) advocating for a school ban on high-sugar energy drinks!",
      kunci: "Thesis: High-sugar energy drinks should be strictly prohibited on school premises to protect adolescent cardiovascular and cognitive health.\n\nArgument 1: Firstly, the exorbitant caffeine and sugar concentrations in energy drinks trigger rapid spikes in blood pressure followed by debilitating energy crashes during afternoon lessons.\n\nArgument 2: Furthermore, habitual consumption during teenage developmental stages disrupts circadian sleep rhythms and fosters chronic dependency on chemical stimulants.\n\nReiteration: In conclusion, eliminating energy drinks from campus vending machines is an indispensable institutional measure to cultivate lifelong healthy lifestyle habits.",
      pembahasan: "Includes all 3 structural components (Thesis, Arguments with 'Firstly'/'Furthermore', Reiteration) with academic register.",
      rubrik: [
        { kriteria: "Complete generic structure (Thesis, Arguments, Reiteration)", skor: 30 },
        { kriteria: "Effective internal conjunctions and present tense accuracy", skor: 30 },
      ],
    },
  },
  "TP.07": {
    pgk: {
      pertanyaan: "Which expressions demonstrate APPROPRIATE communicative strategies for maintaining and deepening a transactional interview about mangrove reforestation? (Select all correct options!)",
      pilihan: [
        { kode: "A", teks: "'That is an extraordinary insight; could you share what initial obstacles your team encountered when replanting seedlings?'", isCorrect: true },
        { kode: "B", teks: "'Stop talking about that, let us discuss something completely unrelated.'", isCorrect: false },
        { kode: "C", teks: "'Building upon that point, how did the coastal community respond to your mangrove preservation initiative?'", isCorrect: true },
        { kode: "D", teks: "'Before we conclude our conversation today, what key message would you impart to urban youth regarding coastal ecosystems?'", isCorrect: true },
      ],
      kunci: "A, C, dan D",
      pembahasan: "Options A and C effectively continue dialogue, and D transitions to closing. Option B is disruptive and impolite.",
    },
    uraian: {
      level: "C4 (Desain Alur Wawancara Transaksional)",
      pertanyaan: "Draft a cohesive 4-turn interview excerpt (Interviewer - Figure - Interviewer - Figure) illustrating how to transition smoothly from asking about the figure's past challenges to concluding the dialogue with a forward-looking message of hope!",
      kunci: "Interviewer: 'Reflecting on your arduous journey rehabilitating arid hills into lush agroforestry, what maintained your perseverance when early harvests failed?'\nFigure: 'Seeing the dried springs gradually flow with clean water again reminded me that restoring nature requires patience and unwavering faith in community solidarity.'\nInterviewer: 'Your resilience is deeply moving; as we wrap up our inspiring session, what enduring commitment do you hope the younger generation embraces?'\nFigure: 'I urge young people to remember that small, consistent conservation acts in your immediate neighborhood create tidal waves of global ecological healing.'",
      pembahasan: "Demonstrates seamless conversational flow: respectful inquiry, insightful response, smooth closing cue, and inspiring coda.",
      rubrik: [
        { kriteria: "Natural turn-taking and transactional interview structure", skor: 30 },
        { kriteria: "Intonation markers and communicative etiquette", skor: 30 },
      ],
    },
  },
  "TP.08": {
    pgk: {
      pertanyaan: "Read this narrative excerpt: 'For decades, Sadiman endured stinging mockery from villagers who deemed him insane for planting banyan trees on barren limestone hills. Yet, he persevered silently until subterranean springs bubbled to the surface.' Which narrative elements are highlighted? (Select all correct options!)",
      pilihan: [
        { kode: "A", teks: "The complication centers on social ridicule and harsh environmental adversity.", isCorrect: true },
        { kode: "B", teks: "The action verbs 'endured', 'deemed', and 'persevered' represent consistent simple past tense usage.", isCorrect: true },
        { kode: "C", teks: "The protagonist abandoned his tree-planting mission due to village criticism.", isCorrect: false },
        { kode: "D", teks: "The emergence of freshwater springs represents a triumphant narrative resolution.", isCorrect: true },
      ],
      kunci: "A, B, dan D",
      pembahasan: "A, B, and D capture key narrative milestones (complication, past tense morphology, resolution). C contradicts the text.",
    },
    uraian: {
      level: "C4 (Analisis Kronologis Narasi Biografis)",
      pertanyaan: "Based on the narrative of an Indonesian environmental figure, explain how the author employs chronological sequence markers (such as 'initially', 'decade later', 'eventually') to emphasize the figure's enduring perseverance!",
      kunci: "Chronological sequence markers establish the immense temporal span required for ecological restoration. By contrasting initial hardships ('initially') against triumphant fruition ('a decade later', 'eventually'), the author underscores that meaningful environmental change requires unwavering patience, dedication, and lifelong resilience against skepticism.",
      pembahasan: "Explains how chronological signposting highlights perseverance across long temporal horizons.",
      rubrik: [
        { kriteria: "Understanding the narrative function of chronological connectors", skor: 30 },
        { kriteria: "Depth of moral and character interpretation", skor: 30 },
      ],
    },
  },
  "TP.09": {
    pgk: {
      pertanyaan: "Which drafting choices DEMONSTRATE exemplary linear narrative writing about an environmental youth leader? (Select all correct options!)",
      pilihan: [
        { kode: "A", teks: "Establishing the historical setting clearly in the orientation: 'In 2018, witnessing plastic-choked coral reefs in her hometown compelled Nina to act.'", isCorrect: true },
        { kode: "B", teks: "Switching abruptly into future tense without narrative justification.", isCorrect: false },
        { kode: "C", teks: "Employing vivid chronological action verbs: 'mobilized', 'petitioned', and 'rehabilitated'.", isCorrect: true },
        { kode: "D", teks: "Concluding with an impactful coda highlighting how local stewardship inspired national legislation.", isCorrect: true },
      ],
      kunci: "A, C, dan D",
      pembahasan: "A, C, and D reflect narrative best practices (orientation, vivid past action verbs, reflective coda). B disrupts temporal consistency.",
    },
    uraian: {
      level: "C6 (Penyusunan Narasi Linier & Poster Pitch)",
      pertanyaan: "Write an Orientation and Complication paragraph (total 5-6 sentences) for a linear narrative about a young Indonesian activist fighting plastic pollution in rivers, using correct simple past tense forms!",
      kunci: "Five years ago, a passionate high school student named Arya stood beside the Citarum River and wept at the floating carpet of industrial trash choking the currents. Rather than succumbing to despair, he founded a youth river patrol that recruited dozens of adolescent volunteers each weekend. Together, they gathered discarded plastics and installed homemade bio-filters along the tributary banks. However, intense opposition arose when irresponsible upstream factories secretly dumped toxic effluent at midnight, poisoning their newly planted water lilies and threatening the volunteers' health. Despite intimidating warnings from factory security personnel, Arya documented the violations on social media and refused to surrender his river restoration mission.",
      pembahasan: "Complete orientation and dramatic complication with consistent past tense forms (stood, wept, founded, gathered, dumped, refused).",
      rubrik: [
        { kriteria: "Simple past tense consistency and grammatical precision", skor: 30 },
        { kriteria: "Compelling narrative tension and realistic character agency", skor: 30 },
      ],
    },
  },
  "TP.10": {
    pgk: {
      pertanyaan: "Listen to the bank officer's advice: 'While high-yield mutual funds may generate higher returns, an emergency deposit account is the safest vehicle for high school students.' Which statements accurately interpret the comparative forms? (Select all correct options!)",
      pilihan: [
        { kode: "A", teks: "'Higher' is a comparative adjective contrasting returns between mutual funds and standard savings.", isCorrect: true },
        { kode: "B", teks: "'Safest' is a superlative adjective indicating the absolute pinnacle of security among all student options.", isCorrect: true },
        { kode: "C", teks: "The speaker advises students to gamble their entire monthly allowance on volatile cryptocurrency.", isCorrect: false },
        { kode: "D", teks: "Comparative degrees assist listeners in evaluating financial trade-offs between risk and capital security.", isCorrect: true },
      ],
      kunci: "A, B, dan D",
      pembahasan: "Options A, B, and D correctly analyze comparative/superlative morphology and financial trade-off evaluation.",
    },
    uraian: {
      level: "C5 (Perbandingan Finansial Terapan)",
      pertanyaan: "Compare three methods of handling student monthly allowance (Cash in Wallet, Standard Debit Account, and Locked High-Yield Deposit) using comparative and superlative degree expressions to recommend the best option for curbing impulsive spending!",
      kunci: "Holding physical cash in a wallet is the most convenient method for instant canteen transactions; however, it is far easier to spend thoughtlessly because banknotes are physically accessible. A standard debit card is more practical than carrying bulky cash, but digital one-click payments make online impulsive purchases faster. Therefore, a locked high-yield deposit is the most effective and disciplined vehicle because it introduces strict barriers to instant withdrawals while yielding a better interest rate than conventional checking accounts.",
      pembahasan: "Accurate comparative and superlative adjectives (most convenient, easier, more practical, most effective, better) with financial reasoning.",
      rubrik: [
        { kriteria: "Correct syntactic usage of comparative and superlative degrees", skor: 30 },
        { kriteria: "Logical comparison of financial liquidity and impulse prevention", skor: 30 },
      ],
    },
  },
  "TP.11": {
    pgk: {
      pertanyaan: "Consider this step from a banking security procedure: 'Never disclose your One-Time Password (OTP) to anyone, including individuals claiming to represent your bank.' Which analyses are accurate? (Select all correct options!)",
      pilihan: [
        { kode: "A", teks: "'Never disclose' functions as a negative imperative conveying an absolute prohibition.", isCorrect: true },
        { kode: "B", teks: "The instruction protects users against social engineering and digital identity theft.", isCorrect: true },
        { kode: "C", teks: "The instruction implies that OTPs should be shared freely on social media profiles.", isCorrect: false },
        { kode: "D", teks: "Imperatives are essential language features in procedural safety guidelines.", isCorrect: true },
      ],
      kunci: "A, B, dan D",
      pembahasan: "Negative imperatives ('Never disclose') enforce security protocols against social engineering. C is dangerous misinformation.",
    },
    uraian: {
      level: "C4 (Analisis Alur Teks Prosedur Perbankan)",
      pertanyaan: "Analyze the procedural flow of setting up a monthly personal budget using the 50/30/20 rule. Outline the Goal, Materials needed, and three clear imperative steps with temporal sequence connectors!",
      kunci: "Goal: How to Construct a Balanced Student Monthly Budget using the 50/30/20 Rule\nMaterials: Monthly allowance record, budget tracking app or notebook, calculator.\n\nSteps:\n1. First, calculate your total net monthly pocket money and allocate exactly 50% exclusively for unavoidable daily essentials such as transportation and school supplies.\n2. Next, apportion 30% for personal wants and social engagements, ensuring you never exceed this designated threshold.\n3. Finally, immediately deposit the remaining 20% into an inaccessible student bank account before initiating any discretionary spending.",
      pembahasan: "Comprehensive procedure structure: Goal, Materials, sequential steps with imperatives (calculate, apportion, deposit) and temporal connectors (First, Next, Finally).",
      rubrik: [
        { kriteria: "Completeness of Goal, Materials, and Steps in procedural format", skor: 30 },
        { kriteria: "Precise imperative verbs and 50/30/20 mathematical consistency", skor: 30 },
      ],
    },
  },
  "TP.12": {
    pgk: {
      pertanyaan: "Which instructions reflect EFFECTIVE procedural writing for establishing an adolescent emergency savings fund? (Select all correct options!)",
      pilihan: [
        { kode: "A", teks: "'Immediately audit your daily transactions at the conclusion of each evening.'", isCorrect: true },
        { kode: "B", teks: "'Borrow money indiscriminately without calculating repayment interest rates.'", isCorrect: false },
        { kode: "C", teks: "'Transfer a fixed 20% portion into a locked digital vault prior to making casual purchases.'", isCorrect: true },
        { kode: "D", teks: "'Review your fiscal progress fortnightly and recalibrate spending categories where deficits occur.'", isCorrect: true },
      ],
      kunci: "A, C, dan D",
      pembahasan: "Action imperatives (Audit, Transfer, Review) establish rigorous financial discipline. Option B is financially destructive.",
    },
    uraian: {
      level: "C6 (Penyusunan Teks Prosedur Finansial Lengkap)",
      pertanyaan: "Draft a complete 4-step Procedure Text entitled 'How to Prevent Impulsive E-Commerce Purchases during Flash Sale Discounts' using imperative sentences, warnings, and sequence connectors!",
      kunci: "Title: How to Prevent Impulsive E-Commerce Purchases during Flash Sale Discounts\n\nSteps:\n1. First, enforce a mandatory 48-hour cooling-off rule by placing desired sale items into your shopping cart without proceeding to checkout.\n2. Next, cross-check whether the item fulfills a genuine educational necessity or merely satisfies temporary peer vanity.\n3. Then, calculate how many hours of hard pocket-money budgeting the item truly costs, and consult a trusted guardian or mentor before confirming payment.\n4. Finally, remove linked digital payment cards from the e-commerce app to introduce physical friction that prevents one-click impulse purchasing.",
      pembahasan: "Clear title, 4 sequential steps with strong imperatives (enforce, cross-check, calculate, remove) and sequence connectors.",
      rubrik: [
        { kriteria: "Imperative mood syntax and sequential transition coherence", skor: 30 },
        { kriteria: "Real-world efficacy of impulse-buying prevention steps", skor: 30 },
      ],
    },
  },
};

const ENGLISH_XII_QUESTIONS_MAP: Record<string, { pgk: any; uraian: any }> = {
  "TP.01": {
    pgk: {
      pertanyaan: "Based on the listened dialogue regarding household energy conservation during a blackout, which statements ACCURATELY describe the characters' conclusions? (Choose all correct answers!)",
      pilihan: [
        { kode: "A", teks: "The family realizes that continuous reliance on non-renewable grid electricity is vulnerable to peak-load disruptions.", isCorrect: true },
        { kode: "B", teks: "Installing a rooftop photovoltaic solar panel is discussed as an environmentally sound alternative for emergency lighting.", isCorrect: true },
        { kode: "C", teks: "The father insists on buying a diesel-powered generator because fossil fuel emissions are completely harmless.", isCorrect: false },
        { kode: "D", teks: "Unplugging phantom electronics when not in use significantly cuts baseline household power wastage.", isCorrect: true },
      ],
      kunci: "A, B, dan D",
      pembahasan: "Options A, B, and D are directly supported by the dialogue on energy conservation and renewable transition, while option C contradicts eco-friendly practices.",
    },
    uraian: {
      level: "L3 (C5 - Evaluasi & Solusi)",
      pertanyaan: "Explain why community-level energy conservation requires both technological shifts (such as solar lamps) and behavioral habits (such as turning off standby electronics), based on the spoken dialogue!",
      kunci: "Technological shifts provide clean alternative supply channels, but without conscious daily conservation habits, total energy consumption remains excessive and strains both household finance and ecological balance.",
      pembahasan: "Comprehensive energy sustainability demands dual intervention: technological innovation and responsible human stewardship.",
      rubrik: [
        { kriteria: "Connecting technological innovation with behavioral habits", skor: 30 },
        { kriteria: "Clarity of logical explanation and grammatical accuracy", skor: 30 },
      ],
    },
  },
  "TP.02": {
    pgk: {
      pertanyaan: "Read the excerpt from 'The Story of a Friendly Future' where the protagonist repairs the wind turbine during a storm. Which conclusions are supported by textual evidence? (Choose all correct options!)",
      pilihan: [
        { kode: "A", teks: "The author uses action verbs such as 'tightened', 'struggled', and 'hoisted' to depict intense physical exertion.", isCorrect: true },
        { kode: "B", teks: "The villagers abandoned the renewable energy project immediately after the first mechanical failure.", isCorrect: false },
        { kode: "C", teks: "The past continuous tense 'winds were howling' sets the dramatic atmospheric background for the complication.", isCorrect: true },
        { kode: "D", teks: "The resolution demonstrates that collective technological collaboration overcomes environmental adversity.", isCorrect: true },
      ],
      kunci: "A, C, dan D",
      pembahasan: "Options A, C, and D are verified by narrative text analysis and plot development, while B is factually incorrect as the villagers succeeded.",
    },
    uraian: {
      level: "L3 (C4 - Analisis Implisit)",
      pertanyaan: "Infer what the author implies by ending the story with the phrase: 'The wind had always blown across our hills, but only now did we learn to listen to its power'!",
      kunci: "The author implies that clean natural forces have always been bountifully present in our environment, but human progress depends upon scientific wisdom, technological curiosity, and harmonious alignment with nature rather than wasteful exploitation.",
      pembahasan: "The closing coda reinforces the moral theme of embracing renewable resources through ecological mindfulness.",
      rubrik: [
        { kriteria: "Accurate interpretation of the wind metaphor and scientific curiosity", skor: 30 },
        { kriteria: "Depth of implicit thematic analysis", skor: 30 },
      ],
    },
  },
  "TP.03": {
    pgk: {
      pertanyaan: "Which narrative writing techniques will EFFECTIVELY heighten reader suspense during the complication stage of an energy crisis story? (Choose all correct options!)",
      pilihan: [
        { kode: "A", teks: "Employing sensory imagery describing the oppressive darkness and sudden silence as power lines collapse.", isCorrect: true },
        { kode: "B", teks: "Interrupting the story with a dry 10-page encyclopedia manual on electrical engineering without any character dialogue.", isCorrect: false },
        { kode: "C", teks: "Using short, urgent sentences and vivid action verbs to depict characters racing against failing backup batteries.", isCorrect: true },
        { kode: "D", teks: "Creating an internal dilemma where characters must decide between rationing power for medical refrigerators or heating.", isCorrect: true },
      ],
      kunci: "A, C, dan D",
      pembahasan: "Options A, C, and D are recognized creative writing techniques that heighten narrative tension, whereas B derails narrative pacing.",
    },
    uraian: {
      level: "C6 (Kreasi Narasi Orisinal)",
      pertanyaan: "Draft an opening orientation paragraph (4-5 sentences) for a narrative story set in 2045 where a teenager invents a seaweed-based biofuel generator for coastal fishing boats!",
      kunci: "The salt-crusted docks of Pulau Harapan were blanketed in thick dawn mist when seventeen-year-old Rian first poured his fermented green algae mixture into the boat's vintage motor. For decades, the local fishermen had struggled under skyrocketing diesel tariffs, leaving many wooden vessels anchored and abandoned along the bay. But this morning, as Rian tightened the copper fuel line, a gentle hum echoed across the shoreline. With a single pull of the starter cord, the engine purred to life, breathing clean, vaporous exhaust into the crisp ocean air.",
      pembahasan: "Effective orientation establishes character, temporal and spatial setting, and core thematic conflict.",
      rubrik: [
        { kriteria: "Completeness of orientation elements (character, setting, conflict)", skor: 30 },
        { kriteria: "Past tense precision and evocative lexical selection", skor: 30 },
      ],
    },
  },
  "TP.04": {
    pgk: {
      pertanyaan: "Which of the following phrases are APPROPRIATE for politely challenging someone's opinion during a spoken discussion on digital money? (Select all correct options!)",
      pilihan: [
        { kode: "A", teks: "'I appreciate your viewpoint on convenience; however, have you considered the cybersecurity risks of server downtime?'", isCorrect: true },
        { kode: "B", teks: "'Your argument makes no sense at all and everyone knows cash is obsolete.'", isCorrect: false },
        { kode: "C", teks: "'While digital payments offer seamless speed, one could argue that they disadvantage unbanked rural communities.'", isCorrect: true },
        { kode: "D", teks: "'From my perspective, data privacy remains a critical issue that digital wallet providers have yet to fully guarantee.'", isCorrect: true },
      ],
      kunci: "A, C, dan D",
      pembahasan: "Options A, C, and D demonstrate academic discussion protocols and diplomatic counter-arguing, whereas B is aggressive and unprofessional.",
    },
    uraian: {
      level: "L3 (C5 - Argumentasi Lisan)",
      pertanyaan: "Formulate a balanced 3-sentence spoken response answering: 'Should school cafeterias completely ban physical banknotes and enforce digital payments only?'",
      kunci: "While mandating digital transactions accelerates queue efficiency and minimizes cash-handling hygiene risks, schools must accommodate students who do not own smartphones or bank accounts. Therefore, a hybrid transaction system remains the most inclusive policy to prevent socio-economic marginalization.",
      pembahasan: "A balanced stance weighs practical operational efficiency against socio-economic inclusivity.",
      rubrik: [
        { kriteria: "Balance between operational efficiency and inclusivity", skor: 30 },
        { kriteria: "Expressive vocabulary of opinion and logical transition", skor: 30 },
      ],
    },
  },
  "TP.05": {
    pgk: {
      pertanyaan: "Based on the argumentative text on e-money, which arguments VALIDLY support the transition toward cashless transactions while recognizing systemic limits? (Choose all correct options!)",
      pilihan: [
        { kode: "A", teks: "Digital ledgers minimize underground shadow economies and curtail cash-based tax evasion.", isCorrect: true },
        { kode: "B", teks: "Digital money eliminates 100% of all financial fraud and identity theft worldwide.", isCorrect: false },
        { kode: "C", teks: "Micro-merchants benefit from instant contactless settlements without carrying bulky cash change.", isCorrect: true },
        { kode: "D", teks: "A resilient economy still requires fallback offline payment channels during regional telecommunication blackouts.", isCorrect: true },
      ],
      kunci: "A, C, dan D",
      pembahasan: "Options A, C, and D represent balanced economic deductions, whereas B is an inaccurate absolutist claim.",
    },
    uraian: {
      level: "L3 (C5 - Analisis Kohesi Teks)",
      pertanyaan: "Explain how the author utilizes concessive connectors such as 'Notwithstanding' and 'While it is true that...' to maintain scholarly objectivity in an argumentative text on cashless banking!",
      kunci: "Concessive connectors acknowledge opposing realities without derailing the central thesis; they show that the author has rigorously considered potential drawbacks before arriving at a balanced, credible recommendation.",
      pembahasan: "Concession builds rhetorical credibility (ethos) by demonstrating balanced analytical appraisal.",
      rubrik: [
        { kriteria: "Understanding the function of concessive connectors in academic discourse", skor: 30 },
        { kriteria: "Application of analytical reasoning to digital financial systems", skor: 30 },
      ],
    },
  },
  "TP.06": {
    pgk: {
      pertanyaan: "Which scriptwriting elements are CRITICAL when transforming a written argumentative essay on e-money into an audio podcast format? (Select all correct options!)",
      pilihan: [
        { kode: "A", teks: "Incorporating conversational signposting (e.g., 'Now, here is the kicker you need to know...') to guide listeners' ears.", isCorrect: true },
        { kode: "B", teks: "Inserting long, unbroken lists of raw decimal statistics without any interpretive context.", isCorrect: false },
        { kode: "C", teks: "Using rhetorical questions that provoke active listener self-reflection on their spending habits.", isCorrect: true },
        { kode: "D", teks: "Ensuring natural turn-taking dialogues between co-hosts that examine both benefits and security vulnerabilities.", isCorrect: true },
      ],
      kunci: "A, C, dan D",
      pembahasan: "Options A, C, and D represent established auditory engagement strategies in spoken media, while B causes cognitive overload.",
    },
    uraian: {
      level: "C6 (Skrip Podcast Argumentatif)",
      pertanyaan: "Draft an opening podcast monologue excerpt (4 sentences) addressing teenage listeners regarding the hidden psychological trap of 'one-click' digital payments!",
      kunci: "'Hey everyone, welcome back to Teen Finance Talk! Have you ever looked at your digital wallet balance at the end of the week and wondered where all your money vanished? That single, effortless screen tap makes spending feel completely painless—until the zero balance hits your screen. Today, we're diving into the psychology behind cashless shopping and why convenience might be costing you your future savings.'",
      pembahasan: "An effective podcast hook bridges relatable personal experience with critical economic examination.",
      rubrik: [
        { kriteria: "Conversational hook and audience engagement register", skor: 30 },
        { kriteria: "Grammatical fluidity in spoken script format", skor: 30 },
      ],
    },
  },
  "TP.07": {
    pgk: {
      pertanyaan: "Based on the listened podcast about netiquette, which practices demonstrate RESPONSIBLE online communication? (Select all correct options!)",
      pilihan: [
        { kode: "A", teks: "Fact-checking information with reliable independent sources before reposting or sharing widely.", isCorrect: true },
        { kode: "B", teks: "Using ALL-CAPS font in chat rooms because shouting conveys authority.", isCorrect: false },
        { kode: "C", teks: "Respecting other users' privacy by never sharing screenshots of private messages without consent.", isCorrect: true },
        { kode: "D", teks: "Refraining from posting defamatory remarks or engaging in flame wars on public social threads.", isCorrect: true },
      ],
      kunci: "A, C, dan D",
      pembahasan: "Options A, C, and D embody established cyber civility principles, while B violates standard netiquette conventions.",
    },
    uraian: {
      level: "L3 (C5 - Rekomendasi Hortatori)",
      pertanyaan: "In hortatory exposition, how does the speaker formulate the 'Recommendation' section to move the listener from mere awareness to concrete behavioral action regarding netiquette?",
      kunci: "The speaker employs direct imperative modal verbs (e.g., 'we ought to pause before typing', 'users must report hate speech') combined with conditional outcome clauses, demonstrating that individual civility collectively transforms digital spaces into safe educational forums.",
      pembahasan: "Hortatory recommendations derive persuasive efficacy from purposeful modal verbs and actionable guidance.",
      rubrik: [
        { kriteria: "Explanation of modal verbs and actionable recommendation design", skor: 30 },
        { kriteria: "Alignment with hortatory communicative purpose", skor: 30 },
      ],
    },
  },
  "TP.08": {
    pgk: {
      pertanyaan: "Examine the following sentences from the netiquette hortatory article. Which of them qualify as VERIFIABLE FACTS rather than SUBJECTIVE OPINIONS? (Select all correct options!)",
      pilihan: [
        { kode: "A", teks: "'According to a 2023 UNESCO report, over 40% of surveyed adolescents reported experiencing online harassment.'", isCorrect: true },
        { kode: "B", teks: "'Internet trolls are the most despicable and irredeemable individuals in modern society.'", isCorrect: false },
        { kode: "C", teks: "'Section 27 of Indonesia's Electronic Information and Transactions (ITE) Law regulates defamatory digital speech.'", isCorrect: true },
        { kode: "D", teks: "'Social media platforms utilize algorithmic feeds designed to maximize user session duration through engagement metrics.'", isCorrect: true },
      ],
      kunci: "A, C, dan D",
      pembahasan: "Options A, C, and D are verifiable empirical and statutory facts, whereas B is an emotionally charged subjective value judgment.",
    },
    uraian: {
      level: "L3 (C4 - Analisis Fitur Kebahasaan)",
      pertanyaan: "Identify two emotive phrases in the hortatory text and explain how the author employs them to persuade readers to adopt stricter self-regulation on social media!",
      kunci: "Phrases such as 'irreversible psychological scarring' and 'toxic digital cesspool' evoke visceral alarm, prompting readers to recognize that casual online cruelty inflicts tangible emotional devastation, thereby motivating proactive adoption of civil netiquette.",
      pembahasan: "Emotive language engages reader empathy, linking ethical self-restraint directly to human harm prevention.",
      rubrik: [
        { kriteria: "Accurate identification of two emotive phrases", skor: 30 },
        { kriteria: "Analysis of persuasive impact on reader empathy", skor: 30 },
      ],
    },
  },
  "TP.09": {
    pgk: {
      pertanyaan: "Which modal verb formulations in the RECOMMENDATION section of a hortatory text convey urgent yet professional persuasion? (Select all correct options!)",
      pilihan: [
        { kode: "A", teks: "'School administrations ought to implement comprehensive digital citizenship seminars.'", isCorrect: true },
        { kode: "B", teks: "'Individual smartphone users must rigorously verify the credibility of viral headlines prior to retweeting.'", isCorrect: true },
        { kode: "C", teks: "'You could maybe think about behaving nicely if you don't have anything better to do.'", isCorrect: false },
        { kode: "D", teks: "'We strongly urge online community moderators to enforce strict zero-tolerance policies against hate speech.'", isCorrect: true },
      ],
      kunci: "A, B, dan D",
      pembahasan: "Options A, B, and D represent authoritative, professional modal persuasion (ought to, must, strongly urge), whereas C is colloquially lax.",
    },
    uraian: {
      level: "C6 (Penulisan Rekomendasi Hortatori)",
      pertanyaan: "Draft a concluding recommendation paragraph (4 sentences) for an essay advocating for respectful online discourse in school community chat groups!",
      kunci: "In conclusion, maintaining courteous netiquette in school digital forums is not merely a formality, but a fundamental pillar of our collective learning environment. School leadership must establish clear communication charters that define constructive disagreement versus destructive harassment. Furthermore, students ought to adopt the 'twenty-second pause rule' before publishing emotional replies on class channels. Let us resolve today to transform our virtual chats into spaces of mutual encouragement, dignity, and shared academic growth.",
      pembahasan: "A potent hortatory conclusion synthesizes ethical principle, institutional policy, and personal habit formation.",
      rubrik: [
        { kriteria: "Clarity of actionable recommendation with appropriate modal verbs", skor: 30 },
        { kriteria: "Paragraph coherence and persuasive closing rhetoric", skor: 30 },
      ],
    },
  },
  "TP.10": {
    pgk: {
      pertanyaan: "Based on the listened interview regarding carbon footprints, which habits are cited as generating the LARGEST per-capita greenhouse gas emissions? (Select all correct options!)",
      pilihan: [
        { kode: "A", teks: "Frequent long-haul commercial aviation and single-occupancy private vehicle commutes.", isCorrect: true },
        { kode: "B", teks: "High consumption of industrial feedlot red meat compared to locally sourced plant-based proteins.", isCorrect: true },
        { kode: "C", teks: "Using public electric commuter rails for daily transit.", isCorrect: false },
        { kode: "D", teks: "High household consumption of coal-powered electricity for continuous unmonitored climate cooling.", isCorrect: true },
      ],
      kunci: "A, B, dan D",
      pembahasan: "Options A, B, and D are empirically documented drivers of personal carbon footprints, whereas C is a low-carbon transport mode.",
    },
    uraian: {
      level: "L3 (C5 - Wawancara & Evaluasi)",
      pertanyaan: "Draft two open-ended interview questions in English designed to assess a high school student's awareness of their daily transportation carbon footprint!",
      kunci: "Question 1: 'How do you typically commute to school each day, and what alternative low-emission transport options have you considered?' Question 2: 'In what ways do you think local municipal governments could make public transit more accessible and attractive for students?'",
      pembahasan: "Open-ended inquiry elicits qualitative reasoning and reflective problem-solving.",
      rubrik: [
        { kriteria: "Quality of open-ended exploratory question design", skor: 30 },
        { kriteria: "Precision of environmental terminology and grammar", skor: 30 },
      ],
    },
  },
  "TP.11": {
    pgk: {
      pertanyaan: "Which linguistic features in the excerpt from the discussion text on carbon footprints reflect standard conventions of the DISCUSSION genre? (Select all correct options!)",
      pilihan: [
        { kode: "A", teks: "Use of generic participants such as 'agricultural economists' and 'environmental advocates' rather than individualized proper nouns.", isCorrect: true },
        { kode: "B", teks: "Use of contrastive conjunctions such as 'On the other hand' and 'Conversely' to signal shifts between opposing viewpoints.", isCorrect: true },
        { kode: "C", teks: "Use of subjective angry exclamations such as 'Shut down all cattle farms immediately!'", isCorrect: false },
        { kode: "D", teks: "Use of epistemic modal verbs such as 'could potentially mitigate' and 'might inadvertently trigger' to indicate nuanced probability.", isCorrect: true },
      ],
      kunci: "A, B, dan D",
      pembahasan: "Options A, B, and D reflect the structural and lexical markers of academic discussion texts (generic actors, balanced transitions, and probabilistic hedging).",
    },
    uraian: {
      level: "L3 (C4 - Analisis Kalimat Pasif & Modalitas)",
      pertanyaan: "Explain why authors of discussion texts frequently deploy the passive voice (e.g., 'Methane is generated during enteric fermentation') instead of active voice, and how modality tempers definitive claims!",
      kunci: "The passive voice shifts objective focus to the scientific phenomenon rather than personal actors, establishing academic distance. Meanwhile, modality (e.g., 'could reduce emissions by 15%') prevents unwarranted dogmatism by acknowledging empirical variations in agricultural modeling.",
      pembahasan: "Passive syntax and modality establish scholarly impartiality in controversial scientific discourse.",
      rubrik: [
        { kriteria: "Explanation of passive voice in scholarly detachment", skor: 30 },
        { kriteria: "Function of modality in avoiding scientific overgeneralization", skor: 30 },
      ],
    },
  },
  "TP.12": {
    pgk: {
      pertanyaan: "Which concluding strategies demonstrate EXEMPLARY discussion writing when closing an essay on carbon footprint regulations? (Select all correct options!)",
      pilihan: [
        { kode: "A", teks: "Weighing the merits of both individual behavioral changes and systemic industrial regulations before recommending an integrated multi-tiered approach.", isCorrect: true },
        { kode: "B", teks: "Completely dismissing the corporate accountability arguments and insulting clean energy researchers.", isCorrect: false },
        { kode: "C", teks: "Proposing a phased policy compromise that safeguards low-income consumers while holding heavy polluters accountable.", isCorrect: true },
        { kode: "D", teks: "Acknowledging that sustainable decarbonization requires simultaneous cultural lifestyle shifts and enforceable legislative mandates.", isCorrect: true },
      ],
      kunci: "A, C, dan D",
      pembahasan: "Options A, C, and D characterize high-level discussion synthesis (weighing evidence, phased compromise, multi-stakeholder integration), while B is non-academic bias.",
    },
    uraian: {
      level: "C6 (Sintesis Teks Diskusi)",
      pertanyaan: "Draft a concluding synthesis paragraph (4 sentences) for a discussion text evaluating whether high school campuses should mandate meatless Mondays to curb their institutional carbon footprint!",
      kunci: "To conclude, the debate surrounding meatless Mondays on campus encapsulates the tension between individual dietary autonomy and collective ecological responsibility. While proponents present irrefutable evidence regarding the reduced carbon intensity of plant-based meals, opponents legitimately raise concerns regarding culinary inclusivity, student nutritional diversity, and personal choice. A prudent compromise would involve offering enticing, affordable plant-based alternatives alongside conventional options, accompanied by engaging environmental signage rather than rigid coercion. In doing so, schools can cultivate voluntary ecological awareness while honoring the diverse dietary preferences of their student body.",
      pembahasan: "A balanced discussion synthesis reconciles competing ethical imperatives without dogmatism.",
      rubrik: [
        { kriteria: "Objective synthesis of pro and contra perspectives", skor: 30 },
        { kriteria: "Sophistication of discourse connectors and academic register", skor: 30 },
      ],
    },
  },
};

function getTahap3DoClosingAction(
  tp: any,
  unitNumber: number,
  topicTitle: string,
  isEnglish: boolean,
  isKelasXI?: boolean
): string {
  if (isEnglish) {
    if (isKelasXI) {
      const englishXIActions: Record<string, string> = {
        "TP.01":
          "Murid menyimak rekaman siniar jejak digital, mengidentifikasi ungkapan opini dan word stress, serta mempraktikkan dialog berpasangan selama 2 menit.",
        "TP.02":
          "Murid membedah pesan tersirat teks multimodal media sosial, merumuskan 2 subject questions orisinal, dan mempresentasikan draf takarir etis dengan transitional words.",
        "TP.03":
          "Murid mengklasifikasikan kosakata panca indra dan jenis limbah domestik, serta melakukan simulasi percakapan solusi pengelolaan sampah sekolah.",
        "TP.04":
          "Murid menganalisis ide pokok dan klausa ajektiva pada teks deskriptif tempat ramah lingkungan, lalu merancang poster lingkungan digital/manual.",
        "TP.05":
          "Murid menyimak rekaman perdebatan gizi remaja, melatih sentence stress pada kata-kata fokus, dan mempraktikkan sanggahan santun dalam interaksi lisan.",
        "TP.06":
          "Murid memetakan struktur tesis-argumen-reiterasi teks eksposisi analitis gizi seimbang, menyusun draf esai singkat, dan berpartisipasi dalam debat kelompok.",
        "TP.07":
          "Murid mempraktikkan ungkapan pembuka, penerus, dan penutup percakapan wawancara tokoh konservasi lingkungan dengan intonasi gramatikal rising-falling.",
        "TP.08":
          "Murid membaca intensif kisah biografi pejuang lingkungan Indonesia (Sadiman/Butet Manurung) dan menyusun diagram garis waktu peristiwa kronologis.",
        "TP.09":
          "Murid menulis draf narasi linier berorientasi masa lampau (Simple Past Tense), menyunting draf bersama rekan sebaya, dan menggelar gallery walk poster aksi lingkungan.",
        "TP.10":
          "Murid menyimak panduan transaksi perbankan, membandingkan 3 alternatif alokasi uang saku menggunakan degree of comparison, dan menyajikan perencanaan anggaran lisan.",
        "TP.11":
          "Murid menganalisis teks prosedur keamanan dompet digital, mengidentifikasi kalimat imperatif dan sequence markers, serta memetakan alur mitigasi penipuan daring.",
        "TP.12":
          "Murid merancang draf teks prosedur multi-langkah manajemen tabungan mandiri berbasis aturan 50/30/20 dan mempublikasikan poster infografis literasi keuangan bijak.",
      };
      if (englishXIActions[tp.kodeTP]) {
        return englishXIActions[tp.kodeTP];
      }
    } else {
      const englishXIIActions: Record<string, string> = {
        "TP.01":
          "Murid mencatat data penting dari percakapan pemadaman listrik dan mempraktikkan role play dialog penghematan energi di lingkungan rumah/sekolah.",
        "TP.02":
          "Murid membedah penggunaan past tenses dan action verbs pada teks 'The Story of a Friendly Future' serta menyusun peta alur komplikasi-resolusi cerita.",
        "TP.03":
          "Murid menulis naskah draf narasi fiksi energi bersih dan menceritakan kembali (retelling) alur cerita secara lisan dengan intonasi yang ekspresif.",
        "TP.04":
          "Murid menganalisis podcast uang digital dan melakukan simulasi dialog terpandu menggunakan ragam ungkapan asking and giving opinions secara santun.",
        "TP.05":
          "Murid mengidentifikasi klaim, bukti data, dan makna tersirat dalam artikel analitis pro-kontra uang elektronik dan masyarakat nontunai.",
        "TP.06":
          "Murid menulis naskah esai argumentatif dan merekam siniar (podcast) audio interaktif bertema literasi keuangan dan dompet digital.",
        "TP.07":
          "Murid menelaah infografik DO's and DON'Ts di dunia maya dan mengidentifikasi struktur teks eksposisi hortatori lisan bertema netiket.",
        "TP.08":
          "Murid mengklasifikasikan fakta dan opini, menganalisis Simple Present Tense, dan memetakan dampak emotive phrases pada teks etika siber.",
        "TP.09":
          "Murid menyusun naskah eksposisi hortatori rekomendasi etika bermedia sosial dan menyajikannya dalam presentasi kelompok kolaboratif.",
        "TP.10":
          "Murid melakukan wawancara langsung dengan teman sebaya mengenai kebiasaan konsumsi harian dan menghitung estimasi jejak karbon pribadi.",
        "TP.11":
          "Murid menganalisis sudut pandang berimbang, kalimat pasif, dan modalitas pada teks diskusi mengenai dilema jejak karbon pangan dan energi.",
        "TP.12":
          "Murid menyusun naskah teks diskusi multi-perspektif mengenai emisi karbon dan mempertahankan argumen dalam simposium iklim kelas.",
      };
      if (englishXIIActions[tp.kodeTP]) {
        return englishXIIActions[tp.kodeTP];
      }
    }
  }

  const combined = ((tp.teksTP || "") + " " + (tp.lingkupMateri || "") + " " + topicTitle).toLowerCase();
  if (
    combined.includes("lingkungan") ||
    combined.includes("ekosistem") ||
    combined.includes("hutan") ||
    combined.includes("alam") ||
    combined.includes("iklim")
  ) {
    return "Murid mencatat data objektif dan mendiskusikan solusi nyata untuk menjaga kelestarian alam dan lingkungan madrasah/sekolah.";
  }
  if (
    combined.includes("kesehatan") ||
    combined.includes("gizi") ||
    combined.includes("mental") ||
    combined.includes("medis")
  ) {
    return "Murid merumuskan rencana aksi konkret penerapan pola hidup sehat dan advokasi kesejahteraan fisik-psikologis di lingkungan belajar.";
  }
  if (
    combined.includes("debat") ||
    combined.includes("musyawarah") ||
    combined.includes("sosial") ||
    combined.includes("hukum") ||
    combined.includes("politik") ||
    combined.includes("pancasila")
  ) {
    return "Murid merumuskan kesepakatan resolusi etis dan rekomendasi solutif untuk memperkuat kerukunan serta keadilan sosial.";
  }
  if (
    combined.includes("tulis") ||
    combined.includes("baca") ||
    combined.includes("esai") ||
    combined.includes("bahasa") ||
    combined.includes("teks") ||
    combined.includes("presentasi")
  ) {
    return "Murid menerapkan struktur teks dan kaidah kebahasaan secara terpadu dalam memproduksi karya komunikasi yang runtut, kritis, dan bermakna.";
  }
  return `Murid mencatat data objektif, memverifikasi hasil investigasi, dan merumuskan tindak lanjut kontekstual terkait materi ${topicTitle}.`;
}

function buildSingleUnitPackage(
  tp: any,
  unitNumber: number,
  input: TeacherInput,
  isKemenag: boolean,
  durasiMenit: number
): UnitPackage {
  const kp = tp.konteksPembelajaran || {};
  const stimulusText = isKemenag
    ? (kp.stimulusKemenag || kp.stimulus || `Mengkaji fenomena ciptaan Allah SWT yang teratur dan penuh hikmah terkait ${tp.teksTP}.`)
    : (kp.stimulus || `Penyajian fenomena nyata kontekstual sehari-hari terkait ${tp.teksTP}.`);
  const masalahNyata = kp.masalahNyata || `Bagaimana prinsip ${tp.teksTP.slice(0, 50)} dapat diterapkan untuk memecahkan permasalahan nyata di sekitar kita?`;

  const kegiatanList: string[] = (kp.kegiatanEksplorasi && kp.kegiatanEksplorasi.length > 0)
    ? kp.kegiatanEksplorasi
    : [
        `Mengidentifikasi dan mengumpulkan data terkait fakta esensial ${tp.teksTP.slice(0, 40)}.`,
        `Melakukan analisis komparatif dan penyelidikan terbimbing pada variabel masalah kontekstual.`,
        `Merumuskan simpulan ilmiah objektif dan menyusun rekomendasi solusi aplikatif.`,
      ];

  const pertanyaanHOTSList = (kp.pertanyaanHOTS && kp.pertanyaanHOTS.length > 0)
    ? kp.pertanyaanHOTS
    : [
        { level: "C4 - Analisis", teks: `Berdasarkan pengamatan dan literatur ilmiah, analisislah keterkaitan konsep ${tp.teksTP.slice(0, 45)} terhadap dampaknya dalam konteks nyata!` },
        { level: "C5 - Evaluasi", teks: `Evaluasilah efektivitas dan solusi yang dapat dikembangkan untuk mengoptimalkan pemecahan masalah terkait materi ${tp.kodeTP}!` },
      ];

  const rubrikIndikatorList = (kp.rubrikIndikator && kp.rubrikIndikator.length > 0)
    ? kp.rubrikIndikator.map((rb: any) => ({
        kriteria: rb.kriteria || `Penguasaan kompetensi ${tp.kodeTP}`,
        baruBerkembang: rb.baru || "Mampu mengenali konsep dasar dengan bimbingan intensif guru/fasilitator.",
        layakCukup: rb.layak || "Mampu menjelaskan konsep dasar secara mandiri namun belum menyeluruh.",
        cakapMemenuhi: rb.cakap || `Mampu menganalisis dan menerapkan konsep sesuai kriteria standar kelulusan (SKL).`,
        mahir: rb.mahir || "Mampu mengevaluasi, menciptakan gagasan baru, dan mentransfer pemahaman pada konteks baru.",
      }))
    : [
        {
          kriteria: `Penguasaan dan pemahaman mendalam kompetensi ${tp.kodeTP}`,
          baruBerkembang: "Mengenal istilah dasar namun belum mampu menjelaskan konsep secara terpadu.",
          layakCukup: "Menjelaskan konsep dasar secara benar namun belum mengaitkan antarvariabel.",
          cakapMemenuhi: `Menguasai dan menganalisis ${tp.teksTP.slice(0, 60)} sesuai standar SKL.`,
          mahir: "Mampu memecahkan kasus kompleks dan memberikan solusi kreatif orisinal.",
        },
      ];

  const isEnglish = input.mataPelajaran?.toLowerCase().includes("inggris") || false;
  const isKelasXI = input.kelas?.includes("XI") && !input.kelas?.includes("XII");
  const isKelasXII = input.kelas?.includes("XII");
  const englishQ = isEnglish
    ? (isKelasXI ? ENGLISH_XI_QUESTIONS_MAP[tp.kodeTP] : ENGLISH_XII_QUESTIONS_MAP[tp.kodeTP])
    : null;

  const soalPGKData = kp.soalPGK || englishQ?.pgk || {
    pertanyaan: `Perhatikan pernyataan terkait ${tp.teksTP.slice(0, 50)} berikut! Manakah pernyataan yang BENAR? (Pilihlah semua jawaban yang tepat!)`,
    pilihan: [
      { kode: "A", teks: `Konsep ${tp.teksTP.slice(0, 30)} berperan penting dalam menjaga keteraturan sistem.`, isCorrect: true },
      { kode: "B", teks: "Prinsip ilmiah dapat diverifikasi melalui pengujian empiris dan bukti nyata di lapangan.", isCorrect: true },
      { kode: "C", teks: "Fenomena tersebut terjadi secara acak tanpa adanya keterikatan hukum sebab-akibat.", isCorrect: false },
      { kode: "D", teks: "Penerapan konsep ini memberikan dampak positif bagi kemaslahatan masyarakat dan lingkungan.", isCorrect: true },
    ],
    kunci: "A, B, dan D",
    pembahasan: "Pilihan A, B, dan D bernilai benar berdasarkan analisis prinsip keilmuan, sedangkan opsi C salah karena setiap fenomena terikat oleh hubungan sebab-akibat yang pasti.",
  };

  const soalUraianData = kp.soalUraian || englishQ?.uraian || {
    level: "C4 (Analisis)",
    pertanyaan: `Jelaskan bagaimana prinsip ${tp.teksTP.slice(0, 60)} bekerja dalam situasi nyata dan berikan argumentasi logis Anda!`,
    kunci: `Prinsip ini bekerja melalui interaksi sistematis antar-elemen yang saling mempengaruhi sehingga menghasilkan keseimbangan dan luaran yang terukur secara saintifik.`,
    pembahasan: `Analisis mendalam diperlukan untuk mengurai keterkaitan sebab-akibat pada materi pokok yang bersangkutan.`,
    rubrik: [
      { kriteria: "Mengidentifikasi faktor penyebab dan prinsip inti secara tepat", skor: 8 },
      { kriteria: "Memberikan argumentasi analitis berbasis data logis", skor: 12 },
    ],
  };

  const topicTitle = tp.lingkupMateri || (tp.teksTP.length > 55 ? tp.teksTP.slice(0, 52) + "..." : tp.teksTP);
  const closingAction = getTahap3DoClosingAction(tp, unitNumber, topicTitle, isEnglish, isKelasXI);

  // 1. Modul Ajar (Dokumen 5)
  const modulAjar: Doc5ModulAjar = {
    identitas: {
      namaPenyusun: input.namaGuru,
      satuanPendidikan: input.namaSatuan,
      faseKelas: formatFaseKelasClean(input.fase, input.kelas),
      semester: tp.semester || "GANJIL",
      mataPelajaran: input.mataPelajaran,
      alokasiWaktu: `${tp.alokasiJP || 6} JP (${(tp.alokasiJP || 6) * durasiMenit} Menit)`,
      tahunAjaran: input.tahunAjaran,
    },
    ruangLingkup: {
      elemenCP: tp.namaElemen || input.mataPelajaran,
      tpTerpilih: tp.teksTP,
      kodeTP: tp.kodeTP,
      targetKarakter: isKemenag
        ? (tp.dimensiKarakterKemenag?.join(", ") || "8 Dimensi SKL BSKAP 058/2025 Terintegrasi Nilai Panca Cinta (Cinta Allah & Rasul-Nya, Cinta Ilmu, Cinta Lingkungan) & PPRA: Ta'addub & Tawassut")
        : (tp.dimensiKarakterDinas?.join(", ") || "8 Dimensi Profil Lulusan SKL BSKAP 058/2025: Penalaran Kritis, Kolaborasi, Kemandirian, dan Keimanan & Ketakwaan thd Tuhan YME"),
    },
    desainPengalaman: {
      praktikPedagogis: {
        keterangan: isKemenag
          ? "Pendekatan Deep Learning terintegrasi Kurikulum Berbasis Cinta (KBC) dengan Sintaks FIDS (Feel, Imagine, Do, Share) berlandaskan Teologi Cinta (Jamaliyah)."
          : "Pendekatan Pembelajaran Mendalam (Deep Learning) dengan 3 Prinsip (Mindful, Meaningful, Joyful) berbasis Model Problem Based Learning (PBL) dan Inkuiri Terbimbing.",
        sumberAlat: isKemenag
          ? "Sintaks FIDS (Feel, Imagine, Do, Share), Buku Panduan KBC Kemenag 2025, Al-Qur'an & Terjemah Kemenag"
          : "Sintaks PBL (Orientasi, Organisasi, Penyelidikan, Penyajian, Evaluasi), Panduan Pembelajaran & Asesmen 2025",
      },
      kemitraan: {
        keterangan:
          "Kolaborasi aktif antarmurid dalam kelompok heterogen, pendampingan fasilitator guru secara dialogis nonjudgmental, dan pelibatan orang tua dalam pengamatan lingkungan rumah.",
        sumberAlat: "Lembar Observasi Kolaboratif, Grup Diskusi Kelas, Jurnal Refleksi Keluarga",
      },
      lingkungan: {
        keterangan:
          "Setting ruang kelas yang aman, bersih, inklusif, dan ramah psikologis (koneksi sebelum koreksi) dipadukan dengan eksplorasi lingkungan nyata sekolah.",
        sumberAlat: "Lingkungan Sekolah, Pojok Eksplorasi Sains & Literasi Kelas, Meja Kerja Kelompok Ergonomis",
      },
      digital: {
        keterangan:
          "Pemanfaatan media presentasi interaktif, video fenomena nyata resolusi tinggi, dan aplikasi simulasi pembelajaran digital.",
        sumberAlat: "Platform Simulasi Interaktif, LCD Proyektor, Google Workspace for Education",
      },
    },
    siklusLangkah: isKemenag
      ? {
          tahap1: {
            nama: "Tahap 1: Feel (Merasakan - Menata Empati Batin)",
            durasi: "20 Menit",
            kegiatan: [
              `Guru membuka pembelajaran dengan salam penuh kasih sayang, doa bersama, dan tadabbur ayat Al-Qur'an kontekstual terkait materi ${tp.kodeTP}.`,
              "Guru membangun koneksi emosional dengan menanyakan kabar murid dan perasaan mereka hari ini (Prinsip Cinta Diri & Sesama).",
              `Penyajian stimulus kontekstual kasih: "${stimulusText}".`,
              `Guru mengajukan pertanyaan pemantik: "${masalahNyata}". Murid diajak merenungkan kebesaran dan kasih sayang Allah melalui ciptaan-Nya.`,
            ],
          },
          tahap2: {
            nama: "Tahap 2: Imagine (Membayangkan - Kajian Ilmiah Mendalam)",
            durasi: "45 Menit",
            diferensiasiKonten:
              "Menyediakan modul bergambar untuk pembelajar visual, video animasi interaktif untuk auditori, dan spesimen objek nyata untuk kinestetik.",
            diferensiasiProses:
              "Kelompok dengan pemahaman awal cepat diberikan tantangan analisis studi kasus lanjutan, sedangkan kelompok berkembang didampingi secara intensif melalui scaffolding terarah.",
            diferensiasiProduk:
              "Murid dapat memilih menyajikan hasil kajian berupa infografis, rekaman audio penjelasan, atau peta pikiran konseptual.",
            kegiatan: [
              "Murid dalam kelompok kecil mengkaji materi konsep inti melalui literasi saintifik dan diskusi bermakna.",
              "Murid menghubungkan keteraturan hukum alam (sunnatullah) dengan prinsip Teologi Cinta Jamaliyah.",
              "Guru berkeliling memberikan bimbingan dengan pendekatan apresiatif tanpa menghakimi kesalahan (Koneksi sebelum Koreksi).",
            ],
          },
          tahap3: {
            nama: "Tahap 3: Do (Melakukan - Aksi Nyata Berbasis Kasih)",
            durasi: "35 Menit",
            kegiatan: [
              "Murid melaksanakan kegiatan penyelidikan dan pengamatan nyata pada LKPD Terpadu.",
              ...kegiatanList.map((k) => `Melakukan: ${k}`),
              closingAction,
            ],
          },
          tahap4: {
            nama: "Tahap 4: Share (Membagikan - Berbagi Inspirasi & Refleksi Batin)",
            durasi: "20 Menit",
            kegiatan: [
              "Perwakilan kelompok mempresentasikan hasil temuan dan komitmen aksi nyata di depan kelas.",
              "Kelompok lain memberikan tanggapan apresiatif dengan bahasa yang santun dan membangun (Adab Islam).",
              "Guru dan murid melakukan refleksi metakognisi: 'Apa hikmah kebaikan yang kita peroleh hari ini?'",
              "Guru memberikan peneguhan karakter dan menutup kelas dengan doa syukur kafaratul majelis.",
            ],
          },
        }
      : {
          tahap1: {
            nama: "Tahap 1: Memahami (Mindful - Berkesadaran)",
            durasi: "20 Menit",
            kegiatan: [
              "Guru membuka kelas dengan salam hangat, doa bersama, dan presensi kehadiran berkesadaran.",
              "Melakukan ice breaking relaksasi fokus (Teknik STOP - Stop, Take a breath, Observe, Proceed) untuk menata kesiapan mental belajar murid.",
              `Menyajikan stimulus fenomena nyata: "${stimulusText}".`,
              `Guru menyampaikan pertanyaan pemantik esensial: "${masalahNyata}" serta menyampaikan tujuan pembelajaran (${tp.kodeTP}).`,
            ],
          },
          tahap2: {
            nama: "Tahap 2: Mengaplikasikan (Meaningful - Bermakna)",
            durasi: "50 Menit",
            diferensiasiKonten:
              "Penyediaan bahan ajar berjenjang: ringkasan infografik visual, video narasi konsep, dan teks eksplanasi ilmiah terstruktur.",
            diferensiasiProses:
              "Pengelompokan fleksibel berdasarkan kesiapan belajar murid dengan tingkat pendampingan bervariasi (scaffolding graduil).",
            diferensiasiProduk:
              "Murid diberikan kebebasan mengekspresikan laporan hasil analisis dalam bentuk poster mini, laporan tertulis sistematis, atau presentasi digital.",
            kegiatan: [
              "Murid berkolaborasi dalam kelompok kerja untuk mengumpulkan bukti ilmiah melalui LKPD.",
              ...kegiatanList.map((k) => `Kegiatan: ${k}`),
              closingAction,
            ],
          },
          tahap3: {
            nama: "Tahap 3: Merefleksikan (Joyful - Menggembirakan)",
            durasi: "20 Menit",
            kegiatan: [
              "Setiap kelompok mempresentasikan temuan utamanya dalam sesi pameran karya mini (Gallery Walk).",
              "Guru memfasilitasi umpan balik konstruktif nonjudgmental antarmurid.",
              "Murid mengisi lembar refleksi 3-2-1 (3 hal baru yang dipahami, 2 hal yang paling menarik, 1 komitmen aplikasi nyata).",
              "Guru memberikan apresiasi atas proses berpikir kritis murid dan merangkum kesimpulan akhir bersama.",
            ],
          },
        },
  };

  // 2. LKPD (Dokumen 6)
  const doc6LKPD: Doc6LKPD = {
    mataPelajaran: input.mataPelajaran,
    kelas: input.kelas,
    tujuanPembelajaran: tp.teksTP,
    kodeTP: tp.kodeTP,
    stimulusKontekstual: stimulusText,
    tabelPengamatan: kegiatanList.map((kg, i) => ({
      no: i + 1,
      variabel: kg,
      panduanFisik: "Tuliskan hasil pengamatan kuantitatif/kualitatif dan bukti fisik yang teramati",
    })),
    pertanyaanHOTS: pertanyaanHOTSList.map((p: any, i: number) => ({
      no: i + 1,
      level: p.level || "C4 - Analisis",
      pertanyaan: p.teks || p.pertanyaan,
    })),
  };

  // 3. KKTP (Dokumen 7)
  const doc7KKTP: Doc7KKTP = {
    tujuanPembelajaran: tp.teksTP,
    kodeTP: tp.kodeTP,
    indikatorRubrik: rubrikIndikatorList,
    tindakLanjut: [
      {
        range: "0% - 40%",
        predikat: "Baru Berkembang",
        tindakan: "Remedial Total: Murid diberikan bimbingan ulang secara individual atau kelompok kecil pada seluruh kompetensi dasar.",
      },
      {
        range: "41% - 65%",
        predikat: "Layak / Cukup",
        tindakan: "Remedial Terarah: Murid diberikan pendampingan tutorial sebaya khusus pada indikator yang belum tuntas.",
      },
      {
        range: "66% - 85%",
        predikat: "Cakap / Memenuhi",
        tindakan: "Tuntas SKL: Murid dinyatakan mencapai standar kompetensi lulusan dan siap melanjutkan ke Tujuan Pembelajaran berikutnya.",
      },
      {
        range: "86% - 100%",
        predikat: "Mahir",
        tindakan: "Pengayaan: Murid diberikan tantangan proyek terapan atau studi kasus analitis lanjutan untuk memperdalam wawasan.",
      },
    ],
  };

  // 4. Kisi-Kisi (Dokumen 8)
  const doc8KisiKisi: Doc8KisiKisiItem[] = [
    {
      no: 1,
      elemenCP: tp.namaElemen || input.mataPelajaran,
      tujuanPembelajaran: tp.teksTP,
      kodeTP: tp.kodeTP,
      materiPokok: tp.lingkupMateri || tp.teksTP.slice(0, 45),
      indikatorSoal: `Disajikan stimulus masalah kontekstual, peserta didik dapat menganalisis dan menentukan opsi-opsi pernyataan yang benar secara komprehensif terkait ${tp.kodeTP}.`,
      levelKognitif: "L2 / L3 (C4 - Analisis)",
      bentukSoal: "Pilihan Ganda Kompleks",
      noSoal: 1,
      bobotSkor: 40,
    },
    {
      no: 2,
      elemenCP: tp.namaElemen || input.mataPelajaran,
      tujuanPembelajaran: tp.teksTP,
      kodeTP: tp.kodeTP,
      materiPokok: tp.lingkupMateri || tp.teksTP.slice(0, 45),
      indikatorSoal: `Disajikan kasus permasalahan nyata, peserta didik dapat memecahkan masalah, memberikan argumentasi logis ilmiah, dan mengevaluasi solusinya secara sistematis.`,
      levelKognitif: "L3 (C5/C6 - Evaluasi & Kreasi)",
      bentukSoal: "Uraian Kasus HOTS",
      noSoal: 2,
      bobotSkor: 60,
    },
  ];

  // 5. Bank Soal (Dokumen 9)
  const doc9BankSoal: Doc9BankSoal = {
    stimulusUtama: stimulusText,
    soalPGK: [
      {
        noSoal: 1,
        pertanyaan: soalPGKData.pertanyaan,
        pilihan: soalPGKData.pilihan,
        kunciJawaban: soalPGKData.kunci || soalPGKData.kunciJawaban,
        pembahasan: soalPGKData.pembahasan || `Kunci jawaban yang tepat adalah opsi ${soalPGKData.kunci || soalPGKData.kunciJawaban}. Pemahaman mendalam terkait konsep esensial pada indikator kompetensi sangat diperlukan untuk menghindari miskonsepsi.`,
        pedomanPenskoran: {
          kriteriaMaksimal: "Memilih SEMUA opsi benar secara lengkap dan tepat tanpa memilih opsi yang salah.",
          skorMaksimal: 40,
          kriteriaParsial: "Memilih sebagian opsi benar dan tidak memilih opsi yang salah (skor proporsional per opsi).",
          skorParsial: 20,
          kriteriaNol: "Memilih opsi salah atau tidak menjawab sama sekali.",
          skorNol: 0,
        },
      },
    ],
    soalUraian: [
      {
        noSoal: 2,
        level: soalUraianData.level,
        pertanyaan: soalUraianData.pertanyaan,
        kunciJawaban: soalUraianData.kunci || soalUraianData.kunciJawaban,
        pembahasan: soalUraianData.pembahasan || `Analisis komprehensif atas masalah yang disajikan sangat menentukan keutuhan jawaban.`,
        rubrikPenskoran: soalUraianData.rubrik || soalUraianData.rubrikPenskoran || [
          { skor: 60, kriteria: "Menjawab dengan lengkap, logis, dan argumentasi saintifik tepat sasaran." },
          { skor: 40, kriteria: "Menjawab sebagian benar namun analisis belum mendalam." },
          { skor: 20, kriteria: "Menjawab kurang tepat atau sekadar menyalin informasi stimulus." },
          { skor: 0, kriteria: "Tidak menjawab atau jawaban sepenuhnya salah." },
        ],
      },
    ],
  };

  const chapterTitle = tp.unitTitle || (topicTitle.toLowerCase().startsWith("unit ") ? topicTitle.split(":")[0] : `Unit ${unitNumber}`);
  const unitLabel = tp.unitTitle
    ? `${tp.unitTitle} - ${topicTitle.replace(/^Unit \d+:\s*/i, "")} (${tp.kodeTP})`
    : `Unit ${unitNumber}: ${topicTitle} (${tp.kodeTP})`;

  return {
    unitNumber,
    unitTitle: topicTitle,
    chapterTitle,
    unitLabel,
    kodeTP: tp.kodeTP,
    tujuanPembelajaran: tp.teksTP,
    elemenCP: tp.namaElemen || input.mataPelajaran,
    alokasiJP: tp.alokasiJP || 6,
    semester: tp.semester || "GANJIL",
    doc5ModulAjar: modulAjar,
    doc6LKPD,
    doc7KKTP,
    doc8KisiKisi,
    doc9BankSoal,
  };
}

export function generateCompleteDocuments(input: TeacherInput, dynamicTPs?: any[]): CompleteDocumentPackage {
  const isKemenag = input.jalur === "Kemenag";
  const regulasi = isKemenag ? REGULASI_CONSTANTS.KEMENAG : REGULASI_CONSTANTS.DINAS;

  // Determine standard JP duration based on grade level
  const durasiMenit = input.durasiMenitJP || (
    input.fase === "Fase A" || input.fase === "Fase B" || input.fase === "Fase C"
      ? 35
      : input.fase === "Fase D"
      ? 40
      : 45
  );

  let rawFlattened = dynamicTPs || [];
  
  if (!dynamicTPs || dynamicTPs.length === 0) {
    // Check matching in database (prioritize exact phase + class + subject match)
    const matchedDataset =
      CURRICULUM_DATABASE.find(
        (ds) =>
          ds.fase === input.fase &&
          (input.kelas ? ds.kelasDefault === input.kelas : true) &&
          (ds.mapel.toLowerCase().includes(input.mataPelajaran.toLowerCase().trim()) ||
            input.mataPelajaran.toLowerCase().includes(ds.mapel.toLowerCase().trim()))
      ) ||
      CURRICULUM_DATABASE.find(
        (ds) =>
          ds.fase === input.fase &&
          (ds.mapel.toLowerCase().includes(input.mataPelajaran.toLowerCase().trim()) ||
            input.mataPelajaran.toLowerCase().includes(ds.mapel.toLowerCase().trim()))
      ) ||
      CURRICULUM_DATABASE.find((ds) => ds.fase === input.fase) ||
      CURRICULUM_DATABASE[0];

    // Flatten all TPs with their parent element information
    rawFlattened = matchedDataset.elemenList.flatMap((el) =>
      el.tpList.map((tp) => {
        const specificKKO = extractSpecificKKO(tp.teksTP, el.kompetensiKKO);
        const specificMateri = extractSpecificMateri(tp.teksTP, el.lingkupMateri, el.namaElemen);
        return {
          ...tp,
          namaElemen: el.namaElemen,
          deskripsiCP: el.deskripsiCP,
          kompetensiKKO: specificKKO,
          lingkupMateri: tp.lingkupMateri || (tp as any).unitTitle || specificMateri,
        };
      })
    );
  } else {
    // Fill missing properties in dynamicTPs
    rawFlattened = rawFlattened.map((tp, idx) => ({
        ...tp,
        kodeTP: tp.kodeTP || `TP.${String(idx+1).padStart(2, '0')}`,
        kompetensiKKO: extractSpecificKKO(tp.teksTP, tp.kompetensiKKO),
        lingkupMateri: extractSpecificMateri(tp.teksTP, tp.lingkupMateri, tp.namaElemen),
        semester: tp.semester || (idx < rawFlattened.length / 2 ? "GANJIL" : "GENAP"),
        alokasiJP: tp.alokasiJP || 6,
        dimensiKarakterKemenag: ["Berkeadaban (Ta'addub)", "Keteladanan (Qudwah)", "Toleransi (Tasamuh)"],
        dimensiKarakterDinas: ["Beriman, bertakwa kepada Tuhan YME, dan berakhlak mulia", "Bergotong royong", "Bernalar kritis"],
    }));
  }

  const mapelLower = input.mataPelajaran.toLowerCase();
  const is4JP = mapelLower.includes("matematika") || mapelLower.includes("bahasa indonesia") || mapelLower.includes("bahasa inggris");
  const jpPerWeek = is4JP ? 4 : 2;
  const isFinalGrade = input.kelas === "Kelas VI" || input.kelas === "Kelas IX" || input.kelas === "Kelas XII";
  const totalWeeksPerYear = input.mingguEfektif || (isFinalGrade ? 32 : 36);
  const weeksPerSemester = Math.floor(totalWeeksPerYear / 2);
  const WEEKS_PER_SEMESTER = Math.max(1, weeksPerSemester - 2); // subtract 2 weeks for Sumatif and Cadangan


  let ganjilTPs = rawFlattened.filter((tp) => tp.semester === "GANJIL");
  let genapTPs = rawFlattened.filter((tp) => tp.semester === "GENAP");

  ganjilTPs.sort((a, b) => a.kodeTP.localeCompare(b.kodeTP, undefined, { numeric: true }));
  genapTPs.sort((a, b) => a.kodeTP.localeCompare(b.kodeTP, undefined, { numeric: true }));

  if (ganjilTPs.length === 0 || genapTPs.length === 0) {
    if (rawFlattened.length >= 2) {
      const half = Math.ceil(rawFlattened.length / 2);
      ganjilTPs = rawFlattened.slice(0, half).map((t, idx) => ({
        ...t,
        kodeTP: `TP.${String(idx + 1).padStart(2, "0")}`,
        semester: "GANJIL" as const,
      }));
      genapTPs = rawFlattened.slice(half).map((t, idx) => ({
        ...t,
        kodeTP: `TP.${String(half + idx + 1).padStart(2, "0")}`,
        semester: "GENAP" as const,
      }));
    } else if (rawFlattened.length === 1) {
      const baseTP = rawFlattened[0];
      const materi = baseTP.lingkupMateri || baseTP.namaElemen || "Materi Pembelajaran Esensial";
      const tp1 = {
        ...baseTP,
        kodeTP: "TP.01",
        teksTP: `Memahami, mendeskripsikan, dan menganalisis konsep esensial ${materi} secara mendalam berbasis fenomena kontekstual.`,
        semester: "GANJIL" as const,
      };
      const tp2 = {
        ...baseTP,
        kodeTP: "TP.02",
        teksTP: `Mengevaluasi, merefleksikan, dan menyajikan solusi terapan kontekstual terkait ${materi} secara kreatif dan kolaboratif.`,
        semester: "GENAP" as const,
      };
      ganjilTPs = [tp1];
      genapTPs = [tp2];
    } else {
      const tp1 = {
        kodeTP: "TP.01",
        teksTP: `Memahami dan menganalisis materi esensial ${input.mataPelajaran} secara mendalam.`,
        namaElemen: input.mataPelajaran,
        deskripsiCP: `Peserta didik menguasai kompetensi esensial ${input.mataPelajaran} pada ${input.fase}.`,
        kompetensiKKO: "Memahami, Menganalisis",
        lingkupMateri: input.mataPelajaran,
        semester: "GANJIL" as const,
        alokasiJP: 6,
        prasyarat: "Kompetensi dasar fase sebelumnya",
        dimensiKarakterKemenag: ["Cinta Allah & Rasul-Nya", "Cinta Ilmu"],
        dimensiKarakterDinas: ["Bernalar Kritis", "Kemandirian"],
      };
      const tp2 = {
        kodeTP: "TP.02",
        teksTP: `Mengaplikasikan dan mempresentasikan pemecahan masalah ${input.mataPelajaran} dalam konteks nyata.`,
        namaElemen: input.mataPelajaran,
        deskripsiCP: `Peserta didik menguasai kompetensi esensial ${input.mataPelajaran} pada ${input.fase}.`,
        kompetensiKKO: "Mengaplikasikan, Mempresentasikan",
        lingkupMateri: input.mataPelajaran,
        semester: "GENAP" as const,
        alokasiJP: 6,
        prasyarat: "Menguasai materi semester ganjil",
        dimensiKarakterKemenag: ["Cinta Lingkungan", "PPRA: Keteladanan (Qudwah)"],
        dimensiKarakterDinas: ["Kreativitas", "Kolaborasi"],
      };
      ganjilTPs = [tp1];
      genapTPs = [tp2];
    }
  }

  const ganjilLen = Math.max(1, ganjilTPs.length);
  const genapLen = Math.max(1, genapTPs.length);
  const ganjilWeeks = ganjilTPs.map(() => Math.floor(WEEKS_PER_SEMESTER / ganjilLen));
  let ganjilRem = WEEKS_PER_SEMESTER % ganjilLen;
  for (let i = 0; i < ganjilRem; i++) if (ganjilWeeks[i] !== undefined) ganjilWeeks[i]++;

  const genapWeeks = genapTPs.map(() => Math.floor(WEEKS_PER_SEMESTER / genapLen));
  let genapRem = WEEKS_PER_SEMESTER % genapLen;
  for (let i = 0; i < genapRem; i++) if (genapWeeks[i] !== undefined) genapWeeks[i]++;

  ganjilTPs.forEach((tp: any, i) => {
    if (tp.alokasiJP && tp.alokasiJP > 0) {
      tp.weekCount = Math.max(1, Math.round(tp.alokasiJP / jpPerWeek));
    } else {
      tp.weekCount = ganjilWeeks[i];
      tp.alokasiJP = ganjilWeeks[i] * jpPerWeek;
    }
  });
  genapTPs.forEach((tp: any, i) => {
    if (tp.alokasiJP && tp.alokasiJP > 0) {
      tp.weekCount = Math.max(1, Math.round(tp.alokasiJP / jpPerWeek));
    } else {
      tp.weekCount = genapWeeks[i];
      tp.alokasiJP = genapWeeks[i] * jpPerWeek;
    }
  });

  const allFlattenedTPs = [...ganjilTPs, ...genapTPs];


  const tpList = allFlattenedTPs;

  // 1. DOKUMEN 1: Analisis CP & Perumusan TP
  const doc1AnalisisCP: Doc1Item[] = allFlattenedTPs.map((tp) => ({
    elemen: tp.namaElemen,
    capaianPembelajaran: tp.deskripsiCP,
    kompetensiKKO: tp.kompetensiKKO || extractSpecificKKO(tp.teksTP),
    lingkupMateri: tp.lingkupMateri || extractSpecificMateri(tp.teksTP, "", tp.namaElemen),
    rencanaRumusanTP: tp.teksTP,
  }));

  // 2. DOKUMEN 2: Alur Tujuan Pembelajaran (ATP)
  const isEnglishSubject = input.mataPelajaran?.toLowerCase().includes("inggris") || false;
  const isKelasXI = input.kelas?.includes("XI") && !input.kelas?.includes("XII");
  const isKelasXII = input.kelas?.includes("XII");

  let englishMethodMap: Record<string, string> | undefined = undefined;
  if (isEnglishSubject) {
    if (isKelasXI) {
      englishMethodMap = ENGLISH_XI_METHOD_PRASYARAT_MAP;
    } else if (isKelasXII) {
      englishMethodMap = ENGLISH_XII_METHOD_PRASYARAT_MAP;
    }
  }

  const doc2ATP: Doc2Item[] = tpList.map((tp, idx) => ({
    no: idx + 1,
    kodeTP: tp.kodeTP,
    tujuanPembelajaran: tp.teksTP,
    alokasiJP: tp.alokasiJP,
    metodePengurutan: (englishMethodMap && englishMethodMap[tp.kodeTP])
      ? englishMethodMap[tp.kodeTP]
      : tp.prasyarat
      ? `Pengurutan Hierarkis Konseptual: ${tp.prasyarat}`
      : `Metode Pembelajaran Kontekstual & Pengurutan Bertahap (Prasyarat: Penguasaan kompetensi dasar prasyarat)`,
    targetKarakter: isKemenag
      ? tp.dimensiKarakterKemenag.join(", ")
      : tp.dimensiKarakterDinas.join(", "),
  }));

  // 3. DOKUMEN 3: Program Tahunan (PROTA)
  // Used existing ganjilTPs and genapTPs

  const doc3Items: Doc3Item[] = [];
  let noCounter = 1;

  // Ganjil items
  ganjilTPs.forEach((tp) => {
    doc3Items.push({
      semester: "GANJIL",
      no: noCounter++,
      tujuanPembelajaran: `${tp.kodeTP}: ${tp.teksTP}`,
      alokasiJP: tp.alokasiJP,
      keterangan: "Termasuk asesmen formatif awal dan proses berkala",
    });
  });
  doc3Items.push({
    semester: "GANJIL",
    no: noCounter++,
    tujuanPembelajaran: "Asesmen Sumatif Lingkup Materi & Tengah Semester",
    alokasiJP: jpPerWeek,
    keterangan: "Evaluasi Sumatif Berkala Penilaian Hasil Belajar",
  });
  doc3Items.push({
    semester: "GANJIL",
    no: noCounter++,
    tujuanPembelajaran: "Cadangan Jam Pelajaran & Pendampingan Remedial",
    alokasiJP: jpPerWeek,
    keterangan: "Program Remedial Terarah & Pengayaan Mandiri",
  });

  const subtotalGanjil = doc3Items
    .filter((it) => it.semester === "GANJIL")
    .reduce((acc, curr) => acc + curr.alokasiJP, 0);

  // Genap items
  genapTPs.forEach((tp) => {
    doc3Items.push({
      semester: "GENAP",
      no: noCounter++,
      tujuanPembelajaran: `${tp.kodeTP}: ${tp.teksTP}`,
      alokasiJP: tp.alokasiJP,
      keterangan: "Termasuk asesmen formatif awal dan proses berkala",
    });
  });
  doc3Items.push({
    semester: "GENAP",
    no: noCounter++,
    tujuanPembelajaran: "Asesmen Sumatif Akhir Jenjang / Akhir Semester",
    alokasiJP: jpPerWeek,
    keterangan: "Evaluasi Komprehensif Ketercapaian TP",
  });
  doc3Items.push({
    semester: "GENAP",
    no: noCounter++,
    tujuanPembelajaran: "Cadangan Jam Pelajaran & Remedial Terarah",
    alokasiJP: jpPerWeek,
    keterangan: "Refleksi Akhir Tahun & Penguatan Karakter",
  });

  const subtotalGenap = doc3Items
    .filter((it) => it.semester === "GENAP")
    .reduce((acc, curr) => acc + curr.alokasiJP, 0);

  const totalTahun = subtotalGanjil + subtotalGenap;

  // 4. DOKUMEN 4: Program Semester (PROSEM)
  const bulanGanjil = ["Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const bulanGenap = ["Januari", "Februari", "Maret", "April", "Mei", "Juni"];

  let currentMonthIdxGanjil = 0;
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
  });

  let currentMonthIdxGenap = 0;
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
  });

  // 5. GENERATE ALL UNITS (100% Seluruh TP Dari Awal Sampai Akhir)
  const units: UnitPackage[] = allFlattenedTPs.map((tp, idx) =>
    buildSingleUnitPackage(tp, idx + 1, input, isKemenag, durasiMenit)
  );

  const primaryUnit = units[0];

  return {
    input,
    doc1AnalisisCP,
    doc2ATP,
    doc3Prota: {
      items: doc3Items,
      subtotalGanjil,
      subtotalGenap,
      totalTahun,
    },
    doc4ProsemGanjil,
    doc4ProsemGenap,
    units,
    doc5ModulAjar: primaryUnit.doc5ModulAjar,
    doc6LKPD: primaryUnit.doc6LKPD,
    doc7KKTP: primaryUnit.doc7KKTP,
    doc8KisiKisi: primaryUnit.doc8KisiKisi,
    doc9BankSoal: primaryUnit.doc9BankSoal,
    meta: {
      waktuGenerate: new Date().toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      versiRegulasi: regulasi.subtitle,
      generatorEngine: `Full-Batch National Curriculum Compiler (${units.length} Unit / TP Tuntas 100%)`,
      totalUnit: units.length,
      totalTP: allFlattenedTPs.length,
    },
  };
}
