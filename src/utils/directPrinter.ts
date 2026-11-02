// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
/**
 * Direct Printer Utility
 * Solves iframe sandbox limitations (missing 'allow-modals' in iframe)
 * and provides 100% reliable direct printing without requiring file downloads.
 */

export interface DirectPrintOptions {
  elementId: string;
  title: string;
  targetWindow?: Window | null;
  orientation?: "portrait" | "landscape";
  onStart?: () => void;
  onSuccess?: () => void;
  onError?: (err: any) => void;
}

export function executeDirectPrint({
  elementId,
  title,
  targetWindow,
  orientation = "portrait",
  onStart,
  onSuccess,
  onError,
}: DirectPrintOptions): { success: boolean; blobUrl?: string; blocked?: boolean } {
  onStart?.();

  const element = document.getElementById(elementId);
  if (!element) {
    const err = new Error(`Elemen cetak #${elementId} tidak ditemukan.`);
    onError?.(err);
    return { success: false };
  }

  // 1. Kumpulkan seluruh stylesheet (Tailwind, Google Fonts, dan style tag)
  const stylesList: string[] = [];

  // Ambil semua style tag
  const styleTags = document.querySelectorAll("style");
  styleTags.forEach((tag) => {
    stylesList.push(tag.outerHTML);
  });

  // Ambil semua link stylesheet
  const linkTags = document.querySelectorAll("link[rel='stylesheet']");
  linkTags.forEach((link) => {
    stylesList.push(link.outerHTML);
  });

  // Ekstrak SEMUA CSS rules dari document.styleSheets untuk inlining sempurna ke print window
  let inlinedCss = "";
  try {
    for (let i = 0; i < document.styleSheets.length; i++) {
      const sheet = document.styleSheets[i];
      try {
        if (sheet.cssRules) {
          for (let j = 0; j < sheet.cssRules.length; j++) {
            inlinedCss += sheet.cssRules[j].cssText + "\n";
          }
        }
      } catch {
        // Cross-origin stylesheet, dihandle via linkTags
      }
    }
  } catch (e) {
    console.warn("Could not read stylesheet rules:", e);
  }

  // Ambil konten HTML dokumen
  const contentHtml = element.innerHTML;

  // 2. Susun dokumen HTML A4 lengkap siap cetak langsung
  const fullHtml = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8" />
  <base href="${window.location.origin}/" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  ${stylesList.join("\n")}
  <style>
    ${inlinedCss}
  </style>
  <style>
    /* RESET & DASAR CETAK RESMI A4 */
    @page {
      size: ${orientation === "landscape" ? "A4 landscape" : "A4 portrait"};
      margin-top: ${orientation === "landscape" ? "12mm" : "20mm"};
      margin-bottom: ${orientation === "landscape" ? "12mm" : "20mm"};
      margin-left: ${orientation === "landscape" ? "20mm" : "30mm"};
      margin-right: 15mm;
    }

    @page landscape-section {
      size: A4 landscape;
      margin-top: 12mm;
      margin-bottom: 12mm;
      margin-left: 20mm;
      margin-right: 15mm;
    }

    .print-landscape-page {
      page: landscape-section;
    }
    
    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    html, body {
      margin: 0;
      padding: 0;
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      color: #0f172a;
      background-color: #f8fafc;
      font-size: 9.5pt;
      line-height: 1.35;
    }

    /* TAMPILAN LAYAR */
    @media screen {
      body {
        padding-top: 64px;
        padding-bottom: 40px;
        background: #f1f5f9;
      }
      .direct-print-navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 56px;
        background: #0f172a;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        z-index: 999999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      }
      .print-container-frame {
        max-width: ${orientation === "landscape" ? "297mm" : "210mm"};
        margin: 20px auto;
        background: #ffffff;
        padding: ${orientation === "landscape" ? "15mm 20mm" : "20mm 15mm 20mm 25mm"};
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        border-radius: 4px;
      }
    }

    /* TAMPILAN CETAK FISIK / PDF */
    @media print {
      .direct-print-navbar,
      .no-print,
      .print\\:hidden,
      button,
      nav,
      footer {
        display: none !important;
      }
      body {
        background: #ffffff !important;
        padding: 0 !important;
        margin: 0 !important;
        width: 100% !important;
        height: auto !important;
      }
      .print-container-frame {
        box-shadow: none !important;
        border: none !important;
        margin: 0 !important;
        padding: 0 !important;
        max-width: 100% !important;
        width: 100% !important;
      }
      table {
        page-break-inside: auto !important;
        width: 100% !important;
        border-collapse: collapse !important;
        font-size: 8.5pt !important;
      }
      tr {
        break-inside: avoid !important;
        page-break-inside: avoid !important;
        page-break-after: auto !important;
      }
      thead {
        display: table-header-group !important;
      }
      tfoot {
        display: table-footer-group !important;
      }
      .ttd-table, .ttd-table tr, .ttd-table td, .ttd-block, .card-modul, .lkpd-box, .avoid-break {
        break-inside: avoid !important;
        page-break-inside: avoid !important;
        -webkit-column-break-inside: avoid !important;
      }
      .print\\:break-after-page, .page-break-after {
        page-break-after: always !important;
        break-after: page !important;
      }
      .print\\:break-before-page, .page-break-before {
        page-break-before: always !important;
        break-before: page !important;
      }
      .print-page-document {
        background: transparent !important;
        box-shadow: none !important;
        border: none !important;
        padding: 0 !important;
        margin: 0 !important;
        width: 100% !important;
      }
    }
  </style>
</head>
<body>
  <!-- Action Bar Layar Atas -->
  <div class="direct-print-navbar no-print">
    <div style="display: flex; align-items: center; gap: 12px;">
      <span style="font-size: 20px;">🖨️</span>
      <div>
        <div style="font-weight: 700; font-size: 13px; letter-spacing: -0.01em;">
          Mode Cetak Langsung (Standar A4 Resmi 2025/2026)
        </div>
        <div style="font-size: 11px; color: #94a3b8;">
          Dialog cetak browser terbuka otomatis. Jika belum muncul, klik tombol biru di kanan atau tekan Ctrl+P.
        </div>
      </div>
    </div>
    <div style="display: flex; align-items: center; gap: 10px;">
      <button
        onclick="window.focus(); window.print();"
        style="background: #2563eb; color: #ffffff; border: none; padding: 8px 18px; border-radius: 6px; font-weight: 700; font-size: 12px; cursor: pointer; display: flex; align-items: center; gap: 6px; box-shadow: 0 1px 2px rgba(0,0,0,0.1);"
      >
        <span>🖨️</span> Cetak Sekarang (Ctrl+P)
      </button>
      <button
        onclick="window.close();"
        style="background: #334155; color: #cbd5e1; border: none; padding: 8px 14px; border-radius: 6px; font-weight: 600; font-size: 12px; cursor: pointer;"
      >
        ✕ Tutup
      </button>
    </div>
  </div>

  <!-- Konten Dokumen yang Dicetak -->
  <div class="print-container-frame">
    ${contentHtml}
  </div>

  <script>
    function triggerPrint() {
      try {
        window.focus();
        window.print();
      } catch (e) {
        console.error("Auto print error:", e);
      }
    }
    window.addEventListener('load', function() {
      setTimeout(triggerPrint, 350);
    });
    if (document.readyState === 'complete') {
      setTimeout(triggerPrint, 350);
    }
  </script>
</body>
</html>`;

  // 3. Buat URL Blob sebagai fallback
  const blob = new Blob([fullHtml], { type: "text/html;charset=utf-8" });
  const blobUrl = URL.createObjectURL(blob);

  // 4. Jika ada targetWindow yang telah dibuka sebelumnya, tulis langsung dokumennya
  if (targetWindow && !targetWindow.closed) {
    try {
      targetWindow.document.open();
      targetWindow.document.write(fullHtml);
      targetWindow.document.close();
      onSuccess?.();
      return { success: true, blobUrl };
    } catch (e) {
      console.warn("Could not document.write into targetWindow, trying location fallback:", e);
      try {
        targetWindow.location.href = blobUrl;
        onSuccess?.();
        return { success: true, blobUrl };
      } catch (e2) {
        console.warn("Could not set location on targetWindow:", e2);
      }
    }
  }

  // 5. Deteksi apakah berada dalam iframe
  const isInIframe = window.self !== window.top;

  // Jika bukan di dalam iframe (misal tab browser normal), langsung gunakan window.print()
  if (!isInIframe) {
    try {
      window.focus();
      window.print();
      onSuccess?.();
      return { success: true, blobUrl };
    } catch (printErr) {
      console.warn("Direct window.print() failed in top window, fallback to new window:", printErr);
    }
  }

  // Jika di dalam iframe dan targetWindow belum ada, buka window baru lalu tulis
  try {
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.open();
      printWindow.document.write(fullHtml);
      printWindow.document.close();
      onSuccess?.();
      return { success: true, blobUrl };
    } else {
      // Fallback ke blob URL jika popup kosong diblokir
      const fallbackWin = window.open(blobUrl, "_blank");
      if (fallbackWin) {
        onSuccess?.();
        return { success: true, blobUrl };
      }
      console.warn("Popup blocked by browser");
      return { success: false, blobUrl, blocked: true };
    }
  } catch (openErr) {
    console.error("window.open failed:", openErr);
    onError?.(openErr);
    return { success: false, blobUrl, blocked: true };
  }
}
