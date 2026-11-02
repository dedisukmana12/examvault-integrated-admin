// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import * as htmlToImage from "html-to-image";

export interface PdfExportOptions {
  elementId: string;
  fileName: string;
  onProgress?: (percent: number, statusText: string) => void;
}

/**
 * Capture an HTML element to an image data URL with dual-engine support:
 * 1. html2canvas with onclone computedStyle RGB conversion and CORS protection
 * 2. htmlToImage fallback with skipFonts for guaranteed rendering
 */
async function captureElementToImage(element: HTMLElement): Promise<string> {
  try {
    // Attempt html2canvas capture with color conversion and CORS safety
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: false,
      logging: false,
      backgroundColor: "#ffffff",
      windowWidth: element.scrollWidth || 1024,
      onclone: (clonedDoc) => {
        // Memaksa elemen target dan turunannya menggunakan warna aman (mengonversi oklch ke rgb via computedStyle)
        const elements = clonedDoc.querySelectorAll("*");
        elements.forEach((el) => {
          if (el instanceof HTMLElement) {
            const computedStyle = window.getComputedStyle(el);
            el.style.color = computedStyle.color;
            el.style.backgroundColor = computedStyle.backgroundColor;
            el.style.borderColor = computedStyle.borderColor;
          }
        });
      },
      ignoreElements: (node) => {
        if (
          node instanceof HTMLElement &&
          (node.classList.contains("print:hidden") ||
            node.classList.contains("no-print"))
        ) {
          return true;
        }
        return false;
      },
    });
    return canvas.toDataURL("image/png");
  } catch (error) {
    // Fallback to SVG foreignObject rasterization via htmlToImage.toPng with skipFonts & font link filter
    console.warn("html2canvas fallback to htmlToImage.toPng:", error);
    return await htmlToImage.toPng(element, {
      quality: 0.95,
      pixelRatio: 2,
      backgroundColor: "#ffffff",
      cacheBust: true,
      skipFonts: true, // Lewati pengecekan font eksternal agar tidak bentrok CORS
      fontEmbedCSS: "",
      filter: (node) => {
        // Abaikan tag link font eksternal
        if (
          node instanceof HTMLLinkElement &&
          node.tagName === "LINK" &&
          node.href &&
          node.href.includes("fonts.googleapis.com")
        ) {
          return false;
        }
        if (
          node instanceof HTMLElement &&
          (node.classList.contains("print:hidden") ||
            node.classList.contains("no-print"))
        ) {
          return false;
        }
        return true;
      },
    });
  }
}

/**
 * Direct PNG Exporter for specific sections or modules
 */
export async function exportToPng(
  element: HTMLElement,
  downloadName = "modul-ajar.png"
): Promise<void> {
  try {
    const dataUrl = await htmlToImage.toPng(element, {
      quality: 0.95,
      skipFonts: true, // Lewati pengecekan font eksternal agar tidak bentrok CORS
      backgroundColor: "#ffffff",
    });

    const link = document.createElement("a");
    link.download = downloadName.endsWith(".png") ? downloadName : `${downloadName}.png`;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error("Export PNG failed:", error);
  }
}

/**
 * Direct PDF Exporter using jsPDF, html2canvas, and html-to-image.
 * Creates clean, professional-grade A4 PDF documents with standardized margins.
 */
export async function exportElementToPdfDirect({
  elementId,
  fileName,
  onProgress,
}: PdfExportOptions): Promise<void> {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error(`Elemen dokumen dengan ID #${elementId} tidak ditemukan.`);
  }

  onProgress?.(10, "Menyiapkan tata letak dokumen A4...");

  // Select all individual document sections or printable pages
  const pageNodes = Array.from(
    element.querySelectorAll<HTMLElement>(
      "section[id*='-section'], .print-page-document, .print-page-cover"
    )
  );

  const targets = pageNodes.length > 0 ? pageNodes : [element];
  const total = targets.length;

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
    compress: true,
  });

  const pdfWidth = 210; // A4 width in mm
  const pdfHeight = 297; // A4 height in mm

  for (let i = 0; i < total; i++) {
    const target = targets[i];
    const progressPercent = Math.round(15 + ((i + 1) / total) * 75);
    onProgress?.(
      progressPercent,
      `Memproses halaman dokumen ${i + 1} dari ${total}...`
    );

    const dataUrl = await captureElementToImage(target);
    const imgProps = pdf.getImageProperties(dataUrl);
    const renderHeight = (imgProps.height * pdfWidth) / imgProps.width;

    if (i > 0) {
      pdf.addPage("a4", "portrait");
    }

    if (renderHeight <= pdfHeight) {
      pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, renderHeight);
    } else {
      // For content longer than a single A4 page, slice across pages
      let heightLeft = renderHeight;
      let position = 0;

      pdf.addImage(dataUrl, "PNG", 0, position, pdfWidth, renderHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > 5) {
        position = position - pdfHeight;
        pdf.addPage("a4", "portrait");
        pdf.addImage(dataUrl, "PNG", 0, position, pdfWidth, renderHeight);
        heightLeft -= pdfHeight;
      }
    }
  }

  onProgress?.(95, "Mengunduh file PDF...");
  pdf.save(fileName.endsWith(".pdf") ? fileName : `${fileName}.pdf`);
  onProgress?.(100, "Selesai!");
}

/**
 * Clean Print Viewer Window / Iframe
 * Opens a dedicated clean document view or triggers print reliably across iframes
 */
export function printDocumentViaDedicatedWindow(elementId: string, title: string) {
  const sourceElement = document.getElementById(elementId);
  if (!sourceElement) {
    window.print();
    return;
  }

  // Extract all stylesheets and style rules
  const styles = Array.from(
    document.querySelectorAll("style, link[rel='stylesheet']")
  )
    .map((el) => el.outerHTML)
    .join("\n");

  const printContent = sourceElement.innerHTML;

  let printIframe = document.getElementById(
    "hidden-print-frame"
  ) as HTMLIFrameElement | null;
  if (!printIframe) {
    printIframe = document.createElement("iframe");
    printIframe.id = "hidden-print-frame";
    printIframe.style.position = "fixed";
    printIframe.style.right = "0";
    printIframe.style.bottom = "0";
    printIframe.style.width = "0";
    printIframe.style.height = "0";
    printIframe.style.border = "none";
    printIframe.style.zIndex = "-9999";
    document.body.appendChild(printIframe);
  }

  const iframeDoc =
    printIframe.contentDocument || printIframe.contentWindow?.document;
  if (iframeDoc) {
    iframeDoc.open();
    iframeDoc.write(`
      <!DOCTYPE html>
      <html lang="id">
        <head>
          <meta charset="utf-8" />
          <title>${title}</title>
          ${styles}
          <style>
            @page {
              size: A4 portrait;
              margin: 20mm 20mm 20mm 30mm;
            }
            body {
              background: #ffffff !important;
              color: #000000 !important;
              font-family: Arial, sans-serif !important;
              margin: 0 !important;
              padding: 0 !important;
            }
            .print\\:hidden, .no-print {
              display: none !important;
            }
            table {
              border-collapse: collapse !important;
              width: 100% !important;
              page-break-inside: auto !important;
            }
            .tabel-dokumen {
              width: 100% !important;
              max-width: 100% !important;
              table-layout: fixed !important;
              border-collapse: collapse !important;
              word-wrap: break-word !important;
              overflow-wrap: break-word !important;
              font-size: 11px !important;
            }
            .tabel-dokumen th,
            .tabel-dokumen td {
              padding: 4px 6px !important;
              word-break: break-word !important;
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
            .ttd-block, .card-modul, .lkpd-box, .avoid-break, .page-break-inside-avoid {
              break-inside: avoid !important;
              page-break-inside: avoid !important;
            }
            th, td {
              border-color: #000000 !important;
            }
          </style>
        </head>
        <body>
          <div id="print-root">
            ${printContent}
          </div>
        </body>
      </html>
    `);
    iframeDoc.close();

    setTimeout(() => {
      try {
        if (printIframe?.contentWindow) {
          printIframe.contentWindow.focus();
          printIframe.contentWindow.print();
        }
      } catch (err) {
        console.warn("Iframe print fallback to window.print()", err);
        window.focus();
        window.print();
      }
    }, 400);
  } else {
    window.focus();
    window.print();
  }
}
