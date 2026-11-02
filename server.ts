// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "15mb" }));

// Lazy GoogleGenAI client
let aiClient: GoogleGenAI | null = null;
function getAI(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    hasApiKey: Boolean(process.env.GEMINI_API_KEY),
    timestamp: new Date().toISOString(),
  });
});

// Gemini synthesis endpoint for custom / deep curriculum requests
app.post("/api/gemini/generate-curriculum", async (req, res) => {
  try {
    const ai = getAI();
    if (!ai) {
      return res.status(200).json({
        success: false,
        fallbackToLocal: true,
        message: "GEMINI_API_KEY belum terkonfigurasi. Menggunakan compiler standar kurikulum nasional BSKAP 046/2025.",
      });
    }

    const { prompt, systemInstruction } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    // Use high-availability modern models per Gemini API guidelines:
    // 'gemini-3.1-flash-lite' (fast & resilient) and 'gemini-3.8-flash' (standard text)
    const candidateModels = [
      "gemini-3.1-flash-lite",
      "gemini-3.8-flash",
    ];

    let lastError: any = null;
    let responseText: string | null = null;
    let successfulModel: string | null = null;

    for (const modelName of candidateModels) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: prompt,
          config: {
            systemInstruction:
              systemInstruction ||
              "Anda adalah Full-Batch National Curriculum Compiler. Bedah CP menjadi 8-16 TP yang mengacu pada Taksonomi Bloom (C1-C6).",
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  namaElemen: { type: Type.STRING, description: "Nama elemen CP" },
                  deskripsiCP: { type: Type.STRING, description: "Teks Capaian Pembelajaran untuk elemen ini" },
                  kodeTP: { type: Type.STRING, description: "Kode TP, misal TP.01" },
                  teksTP: { type: Type.STRING, description: "Tujuan Pembelajaran lengkap (KKO + Materi + Konteks)" },
                  kompetensiKKO: { type: Type.STRING, description: "KKO yang digunakan, misal Menganalisis (C4)" },
                  lingkupMateri: { type: Type.STRING, description: "Materi inti" },
                  semester: { type: Type.STRING, description: "GANJIL atau GENAP" },
                  alokasiJP: { type: Type.NUMBER, description: "Alokasi jam pelajaran (kelipatan 2 atau 4)" },
                  konteksPembelajaran: {
                    type: Type.OBJECT,
                    properties: {
                      stimulus: { type: Type.STRING, description: "Stimulus kontekstual masalah (Dinas)" },
                      stimulusKemenag: { type: Type.STRING, description: "Stimulus ayat/KBC (Kemenag)" },
                      masalahNyata: { type: Type.STRING, description: "Pertanyaan pemantik" },
                      kegiatanEksplorasi: { type: Type.ARRAY, items: { type: Type.STRING } },
                      pertanyaanHOTS: {
                        type: Type.ARRAY,
                        items: {
                          type: Type.OBJECT,
                          properties: { level: { type: Type.STRING }, teks: { type: Type.STRING } },
                        },
                      },
                    },
                  },
                },
                required: [
                  "namaElemen",
                  "deskripsiCP",
                  "kodeTP",
                  "teksTP",
                  "kompetensiKKO",
                  "lingkupMateri",
                  "semester",
                  "alokasiJP",
                ],
              },
            },
            temperature: 0.2,
          },
        });

        if (response.text) {
          responseText = response.text;
          successfulModel = modelName;
          break;
        }
      } catch (err: any) {
        lastError = err;
        // Continue smoothly to next available candidate
      }
    }

    if (responseText) {
      return res.json({
        success: true,
        modelUsed: successfulModel,
        text: responseText,
      });
    }

    // If all candidate models failed (e.g. rate limit 429 or high demand)
    return res.status(200).json({
      success: false,
      fallbackToLocal: true,
      error: lastError?.message || "Layanan AI sedang padat atau batas kuota tercapai.",
      message: "Mengalihkan ke Compiler Nasional Terverifikasi BSKAP No. 046/2025 (100% Deterministik & Lengkap).",
    });
  } catch (error: any) {
    console.error("Gemini Route Error:", error);
    res.status(200).json({
      success: false,
      fallbackToLocal: true,
      error: error?.message || "Terjadi kesalahan saat memproses AI.",
      message: "Mengalihkan ke Compiler Nasional Terverifikasi BSKAP No. 046/2025.",
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
