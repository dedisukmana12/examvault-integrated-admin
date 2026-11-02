// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
// Helper functions for image processing and logo handling

export async function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    // Check if file is SVG or standard image
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (!result) {
        reject(new Error("Gagal membaca berkas gambar"));
        return;
      }

      // If SVG or small image, return directly
      if (file.type === "image/svg+xml" || file.size < 500 * 1024) {
        resolve(result);
        return;
      }

      // If large raster image (PNG/JPG), optimize/resize via canvas to keep docx fast
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxDimension = 800;
        let { width, height } = img;

        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL("image/png", 0.92));
        } else {
          resolve(result);
        }
      };
      img.onerror = () => resolve(result);
      img.src = result;
    };
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}

export function dataUrlToUint8Array(dataUrl: string): Uint8Array | null {
  try {
    const parts = dataUrl.split(",");
    if (parts.length < 2) return null;
    const base64 = parts[1];
    if (typeof window !== "undefined" && window.atob) {
      const binaryString = window.atob(base64);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      return bytes;
    }
  } catch (e) {
    console.warn("Failed converting dataUrl to Uint8Array:", e);
  }
  return null;
}
