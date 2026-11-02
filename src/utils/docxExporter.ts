// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
import {
  Document,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  AlignmentType,
  WidthType,
  BorderStyle,
  PageOrientation,
  TableLayoutType,
  ImageRun,
  PageBreak,
} from "docx";
import { CompleteDocumentPackage, TeacherInput } from "../types";
import { dataUrlToUint8Array } from "./imageHelpers";
import { formatFaseKelasClean } from "./formatters";

// Page specifications for A4 Portrait with 30mm binding margin
// 1 mm ≈ 56.7 twips (dxa)
const PAGE_MARGINS = {
  top: 1134, // 20 mm
  bottom: 1134, // 20 mm
  left: 1701, // 30 mm (ruang jilid sebelah kiri)
  right: 850, // 15 mm
};

// Net printable width in dxa: A4 width (11906 dxa) - left (1701 dxa) - right (850 dxa) = 9355 dxa
const TOTAL_TABLE_WIDTH_DXA = 9355;

const standardBorder = {
  top: { style: BorderStyle.SINGLE, size: 4, color: "333333" },
  bottom: { style: BorderStyle.SINGLE, size: 4, color: "333333" },
  left: { style: BorderStyle.SINGLE, size: 4, color: "333333" },
  right: { style: BorderStyle.SINGLE, size: 4, color: "333333" },
  insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: "E2E8F0" },
  insideVertical: { style: BorderStyle.SINGLE, size: 4, color: "E2E8F0" },
};

const borderless = {
  top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  insideVertical: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
};

const cellMargins = {
  top: 60,
  bottom: 60,
  left: 60,
  right: 60,
};

function createHeaderCell(text: string, widthDxa: number): TableCell {
  return new TableCell({
    width: { size: widthDxa, type: WidthType.DXA },
    margins: cellMargins,
    shading: { fill: "F1F5F9" },
    children: [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 40, after: 40, line: 240 },
        children: [
          new TextRun({
            text,
            bold: true,
            size: 18, // 9pt
            font: "Arial",
            color: "0F172A",
          }),
        ],
      }),
    ],
  });
}

function createCell(
  text: string,
  widthDxa: number,
  align: (typeof AlignmentType)[keyof typeof AlignmentType] = AlignmentType.LEFT,
  isBold = false,
  fillColor?: string
): TableCell {
  return new TableCell({
    width: { size: widthDxa, type: WidthType.DXA },
    margins: cellMargins,
    ...(fillColor ? { shading: { fill: fillColor } } : {}),
    children: [
      new Paragraph({
        alignment: align,
        spacing: { before: 30, after: 30, line: 240 },
        children: [
          new TextRun({
            text,
            bold: isBold,
            size: 17, // 8.5pt
            font: "Arial",
            color: "1E293B",
          }),
        ],
      }),
    ],
  });
}

function createMultiParagraphCell(
  paragraphs: Paragraph[],
  widthDxa: number,
  fillColor?: string
): TableCell {
  return new TableCell({
    width: { size: widthDxa, type: WidthType.DXA },
    margins: cellMargins,
    ...(fillColor ? { shading: { fill: fillColor } } : {}),
    children: paragraphs.length > 0 ? paragraphs : [new Paragraph({ text: "" })],
  });
}

function createBoldParagraph(text: string, before = 60, after = 40): Paragraph {
  return new Paragraph({
    spacing: { before, after },
    children: [
      new TextRun({
        text,
        bold: true,
        size: 18,
        font: "Arial",
        color: "0F172A",
      }),
    ],
  });
}

function createItalicParagraph(text: string, before = 20, after = 40): Paragraph {
  return new Paragraph({
    spacing: { before, after },
    children: [
      new TextRun({
        text,
        italics: true,
        size: 17,
        font: "Arial",
        color: "334155",
      }),
    ],
  });
}

// Generate Official Kop Surat Header Elements
function createKopSuratDocx(
  input: TeacherInput,
  documentTitle: string,
  documentSubtitle?: string,
  logoBytes?: Uint8Array | null,
  logoKananBytes?: Uint8Array | null
): (Paragraph | Table)[] {
  const isKemenag = input.jalur === "Kemenag";
  const instansiInduk =
    input.instansiInduk ??
    (isKemenag
      ? "KEMENTERIAN AGAMA REPUBLIK INDONESIA"
      : "PEMERINTAH DAERAH PROVINSI / KABUPATEN / KOTA");
  const kantorWilayah =
    input.kantorWilayah ??
    (isKemenag
      ? `KANTOR KEMENTERIAN AGAMA ${input.kotaSatuan ? input.kotaSatuan.toUpperCase() : "KABUPATEN / KOTA"}`
      : "DINAS PENDIDIKAN DAN KEBUDAYAAN");
  const alamatSatuan =
    input.alamatSatuan ??
    `Jl. Raya Pendidikan No. 01, ${input.kotaSatuan || "Kabupaten/Kota"}`;
  const kontakSatuan =
    input.kontakSatuan ??
    `Telp. (021) 87654321 | Pos: 42274 | Email: info@${input.namaSatuan.toLowerCase().replace(/[^a-z0-9]/g, "") || "sekolah"}.sch.id`;

  let headerElements: (Paragraph | Table)[] = [];

  const textParagraphs = [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 0, after: 15 },
      children: [
        new TextRun({
          text: instansiInduk.toUpperCase(),
          bold: true,
          size: 19,
          font: "Arial",
          color: "0F172A",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 0, after: 15 },
      children: [
        new TextRun({
          text: kantorWilayah.toUpperCase(),
          bold: true,
          size: 19,
          font: "Arial",
          color: "0F172A",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 0, after: 20 },
      children: [
        new TextRun({
          text: input.namaSatuan.toUpperCase(),
          bold: true,
          size: 23,
          font: "Arial",
          color: "000000",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 0, after: 15 },
      children: [
        new TextRun({
          text: alamatSatuan,
          size: 15,
          font: "Arial",
          color: "334155",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 0, after: 30 },
      children: [
        new TextRun({
          text: kontakSatuan,
          italics: true,
          size: 14,
          font: "Arial",
          color: "475569",
        }),
      ],
    }),
  ];

  if (logoBytes && logoKananBytes) {
    // 3-Column Layout: Left Logo, Center Text, Right Logo
    const logoColWidth = 1250;
    const textColWidth = TOTAL_TABLE_WIDTH_DXA - (logoColWidth * 2);
    headerElements.push(
      new Table({
        width: { size: TOTAL_TABLE_WIDTH_DXA, type: WidthType.DXA },
        layout: TableLayoutType.FIXED,
        columnWidths: [logoColWidth, textColWidth, logoColWidth],
        borders: borderless,
        rows: [
          new TableRow({
            cantSplit: true,
            children: [
              new TableCell({
                width: { size: logoColWidth, type: WidthType.DXA },
                margins: cellMargins,
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 0, after: 0 },
                    children: [
                      new ImageRun({
                        data: logoBytes,
                        transformation: { width: 55, height: 55 },
                        type: "png",
                      }),
                    ],
                  }),
                ],
              }),
              new TableCell({
                width: { size: textColWidth, type: WidthType.DXA },
                margins: cellMargins,
                children: textParagraphs,
              }),
              new TableCell({
                width: { size: logoColWidth, type: WidthType.DXA },
                margins: cellMargins,
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 0, after: 0 },
                    children: [
                      new ImageRun({
                        data: logoKananBytes,
                        transformation: { width: 55, height: 55 },
                        type: "png",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  } else if (logoBytes) {
    // 2-Column Layout: Left Logo, Text
    const logoColWidth = 1400;
    const textColWidth = TOTAL_TABLE_WIDTH_DXA - logoColWidth;
    headerElements.push(
      new Table({
        width: { size: TOTAL_TABLE_WIDTH_DXA, type: WidthType.DXA },
        layout: TableLayoutType.FIXED,
        columnWidths: [logoColWidth, textColWidth],
        borders: borderless,
        rows: [
          new TableRow({
            cantSplit: true,
            children: [
              new TableCell({
                width: { size: logoColWidth, type: WidthType.DXA },
                margins: cellMargins,
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 0, after: 0 },
                    children: [
                      new ImageRun({
                        data: logoBytes,
                        transformation: { width: 65, height: 65 },
                        type: "png",
                      }),
                    ],
                  }),
                ],
              }),
              new TableCell({
                width: { size: textColWidth, type: WidthType.DXA },
                margins: cellMargins,
                children: textParagraphs,
              }),
            ],
          }),
        ],
      })
    );
  } else if (logoKananBytes) {
    // 2-Column Layout: Text, Right Logo
    const logoColWidth = 1400;
    const textColWidth = TOTAL_TABLE_WIDTH_DXA - logoColWidth;
    headerElements.push(
      new Table({
        width: { size: TOTAL_TABLE_WIDTH_DXA, type: WidthType.DXA },
        layout: TableLayoutType.FIXED,
        columnWidths: [textColWidth, logoColWidth],
        borders: borderless,
        rows: [
          new TableRow({
            cantSplit: true,
            children: [
              new TableCell({
                width: { size: textColWidth, type: WidthType.DXA },
                margins: cellMargins,
                children: textParagraphs,
              }),
              new TableCell({
                width: { size: logoColWidth, type: WidthType.DXA },
                margins: cellMargins,
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 0, after: 0 },
                    children: [
                      new ImageRun({
                        data: logoKananBytes,
                        transformation: { width: 65, height: 65 },
                        type: "png",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  } else {
    headerElements.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 20 },
        children: [
          new TextRun({
            text: instansiInduk.toUpperCase(),
            bold: true,
            size: 20, // 10pt
            font: "Arial",
            color: "0F172A",
          }),
        ],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 20 },
        children: [
          new TextRun({
            text: kantorWilayah.toUpperCase(),
            bold: true,
            size: 20, // 10pt
            font: "Arial",
            color: "0F172A",
          }),
        ],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 30 },
        children: [
          new TextRun({
            text: input.namaSatuan.toUpperCase(),
            bold: true,
            size: 24, // 12pt
            font: "Arial",
            color: "000000",
          }),
        ],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 20 },
        children: [
          new TextRun({
            text: alamatSatuan,
            size: 16, // 8pt
            font: "Arial",
            color: "334155",
          }),
        ],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 60 },
        children: [
          new TextRun({
            text: kontakSatuan,
            italics: true,
            size: 15, // 7.5pt
            font: "Arial",
            color: "475569",
          }),
        ],
      })
    );
  }

  return [
    ...headerElements,
    // Double Border Line simulation via border bottom on paragraph
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 0, after: 140 },
      border: {
        bottom: { style: BorderStyle.DOUBLE, size: 12, color: "000000" },
      },
      children: [],
    }),
    // Document Title
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 80, after: 40 },
      children: [
        new TextRun({
          text: documentTitle.toUpperCase(),
          bold: true,
          size: 22, // 11pt
          font: "Arial",
          color: "000000",
        }),
      ],
    }),
    ...(documentSubtitle
      ? [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 80 },
            children: [
              new TextRun({
                text: documentSubtitle,
                size: 17, // 8.5pt
                font: "Arial",
                color: "475569",
              }),
            ],
          }),
        ]
      : []),
    // Metadata Strip
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 40, after: 140 },
      children: [
        new TextRun({
          text: `Mata Pelajaran: ${input.mataPelajaran}   |   Fase / Kelas: ${formatFaseKelasClean(input.fase, input.kelas)}   |   Tahun Ajaran: ${input.tahunAjaran}`,
          bold: true,
          size: 17,
          font: "Arial",
          color: "1E293B",
        }),
      ],
    }),
  ];
}

// Generate Official Cover Page for the Complete Portfolio
function createCoverSectionDocx(
  pkg: CompleteDocumentPackage,
  logoBytes?: Uint8Array | null,
  logoKananBytes?: Uint8Array | null
): (Paragraph | Table)[] {
  const { input } = pkg;
  const isKemenag = input.jalur === "Kemenag";
  const instansiInduk =
    input.instansiInduk ??
    (isKemenag
      ? "KEMENTERIAN AGAMA REPUBLIK INDONESIA"
      : "PEMERINTAH DAERAH PROVINSI / KABUPATEN / KOTA");
  const kantorWilayah =
    input.kantorWilayah ??
    (isKemenag
      ? `KANTOR KEMENTERIAN AGAMA ${input.kotaSatuan ? input.kotaSatuan.toUpperCase() : "KABUPATEN / KOTA"}`
      : "DINAS PENDIDIKAN DAN KEBUDAYAAN");
  const alamatSatuan =
    input.alamatSatuan ??
    `Jl. Raya Pendidikan No. 01, ${input.kotaSatuan || "Kabupaten/Kota"}`;
  const kontakSatuan =
    input.kontakSatuan ??
    `Telp. (021) 87654321 | Email: info@${input.namaSatuan.toLowerCase().replace(/[^a-z0-9]/g, "") || "sekolah"}.sch.id`;

  const coverWidths = [4677, 4678];

  const elements: (Paragraph | Table)[] = [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 60, after: 20 },
      children: [
        new TextRun({
          text: instansiInduk.toUpperCase(),
          bold: true,
          size: 20,
          font: "Arial",
          color: "1E293B",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 0, after: 100 },
      children: [
        new TextRun({
          text: kantorWilayah.toUpperCase(),
          bold: true,
          size: 19,
          font: "Arial",
          color: "334155",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 0, after: 180 },
      border: {
        bottom: { style: BorderStyle.SINGLE, size: 8, color: "000000" },
      },
      children: [],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 80, after: 60 },
      children: [
        new TextRun({
          text: "PERANGKAT ADMINISTRASI GURU & PERENCANAAN PEMBELAJARAN",
          bold: true,
          size: 26, // 13pt
          font: "Arial",
          color: "000000",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 0, after: 160 },
      children: [
        new TextRun({
          text: isKemenag
            ? "KURIKULUM MADRASAH BERBASIS CINTA (KBC) & DEEP LEARNING"
            : "KURIKULUM NASIONAL 2025 • PENDEKATAN DEEP LEARNING",
          bold: true,
          size: 19,
          font: "Arial",
          color: "1E40AF",
        }),
      ],
    }),
  ];

  // Insert Logo(s) in Cover
  if (logoBytes && logoKananBytes) {
    const dualWidths = [4677, 4678];
    elements.push(
      new Table({
        width: { size: TOTAL_TABLE_WIDTH_DXA, type: WidthType.DXA },
        layout: TableLayoutType.FIXED,
        columnWidths: dualWidths,
        borders: borderless,
        rows: [
          new TableRow({
            cantSplit: true,
            children: [
              new TableCell({
                width: { size: dualWidths[0], type: WidthType.DXA },
                margins: cellMargins,
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    spacing: { before: 60, after: 120 },
                    children: [
                      new ImageRun({
                        data: logoBytes,
                        transformation: { width: 85, height: 85 },
                        type: "png",
                      }),
                    ],
                  }),
                ],
              }),
              new TableCell({
                width: { size: dualWidths[1], type: WidthType.DXA },
                margins: cellMargins,
                children: [
                  new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { before: 60, after: 120 },
                    children: [
                      new ImageRun({
                        data: logoKananBytes,
                        transformation: { width: 85, height: 85 },
                        type: "png",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  } else if (logoBytes) {
    elements.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 80, after: 160 },
        children: [
          new ImageRun({
            data: logoBytes,
            transformation: { width: 100, height: 100 },
            type: "png",
          }),
        ],
      })
    );
  } else if (logoKananBytes) {
    elements.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 80, after: 160 },
        children: [
          new ImageRun({
            data: logoKananBytes,
            transformation: { width: 100, height: 100 },
            type: "png",
          }),
        ],
      })
    );
  } else {
    elements.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 60, after: 120 },
        children: [
          new TextRun({
            text: isKemenag ? "★ EMBLEM RESMI KEMENTERIAN AGAMA RI ★" : "★ EMBLEM RESMI TUT WURI HANDAYANI ★",
            bold: true,
            size: 18,
            font: "Arial",
            color: "059669",
          }),
        ],
      })
    );
  }

  // Specifications table
  const specWidths = [3000, 6355];
  elements.push(
    new Table({
      width: { size: TOTAL_TABLE_WIDTH_DXA, type: WidthType.DXA },
      layout: TableLayoutType.FIXED,
      columnWidths: specWidths,
      borders: standardBorder,
      rows: [
        new TableRow({
          children: [
            createCell("Mata Pelajaran", specWidths[0], AlignmentType.LEFT, true, "F8FAFC"),
            createCell(input.mataPelajaran, specWidths[1], AlignmentType.LEFT, true),
          ],
        }),
        new TableRow({
          children: [
            createCell("Fase / Kelas", specWidths[0], AlignmentType.LEFT, true, "F8FAFC"),
            createCell(formatFaseKelasClean(input.fase, input.kelas), specWidths[1]),
          ],
        }),
        new TableRow({
          children: [
            createCell("Semester", specWidths[0], AlignmentType.LEFT, true, "F8FAFC"),
            createCell("Ganjil & Genap", specWidths[1]),
          ],
        }),
        new TableRow({
          children: [
            createCell("Tahun Ajaran", specWidths[0], AlignmentType.LEFT, true, "F8FAFC"),
            createCell(input.tahunAjaran, specWidths[1], AlignmentType.LEFT, true),
          ],
        }),
      ],
    }),
    new Paragraph({ text: "", spacing: { before: 140, after: 60 } }),
    // Teacher & Principal Box
    new Table({
      width: { size: TOTAL_TABLE_WIDTH_DXA, type: WidthType.DXA },
      layout: TableLayoutType.FIXED,
      columnWidths: coverWidths,
      borders: standardBorder,
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: { size: coverWidths[0], type: WidthType.DXA },
              margins: cellMargins,
              shading: { fill: "F8FAFC" },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "DISUSUN OLEH:\n",
                      bold: true,
                      size: 16,
                      font: "Arial",
                      color: "64748B",
                    }),
                    new TextRun({
                      text: `${input.namaGuru}\n`,
                      bold: true,
                      size: 18,
                      font: "Arial",
                      color: "0F172A",
                    }),
                    new TextRun({
                      text: `NIP. ${input.nipGuru || "-"}`,
                      size: 16,
                      font: "Arial",
                      color: "334155",
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: { size: coverWidths[1], type: WidthType.DXA },
              margins: cellMargins,
              shading: { fill: "F8FAFC" },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "MENGETAHUI KEPALA:\n",
                      bold: true,
                      size: 16,
                      font: "Arial",
                      color: "64748B",
                    }),
                    new TextRun({
                      text: `${input.namaKepala}\n`,
                      bold: true,
                      size: 18,
                      font: "Arial",
                      color: "0F172A",
                    }),
                    new TextRun({
                      text: `NIP. ${input.nipKepala || "-"}`,
                      size: 16,
                      font: "Arial",
                      color: "334155",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    new Paragraph({ text: "", spacing: { before: 160, after: 40 } }),
    // School Details
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 0, after: 20 },
      children: [
        new TextRun({
          text: input.namaSatuan.toUpperCase(),
          bold: true,
          size: 24,
          font: "Arial",
          color: "000000",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 0, after: 15 },
      children: [
        new TextRun({
          text: alamatSatuan,
          size: 16,
          font: "Arial",
          color: "334155",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 0, after: 20 },
      children: [
        new TextRun({
          text: kontakSatuan,
          italics: true,
          size: 15,
          font: "Arial",
          color: "475569",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 0, after: 80 },
      children: [
        new TextRun({
          text: `${input.kotaSatuan || "Jakarta"}, ${input.tahunAjaran.split("/")[0] || "2025"}`,
          bold: true,
          size: 17,
          font: "Arial",
          color: "0F172A",
        }),
      ],
    })
  );

  return elements;
}

// Generate Dedicated Chapter Divider Page (Bab Cover) in DOCX
function createBabCoverDocx(
  input: TeacherInput,
  babNumber: string,
  docTitle: string,
  docSubtitle?: string,
  logoBytes?: Uint8Array | null,
  logoKananBytes?: Uint8Array | null
): (Paragraph | Table)[] {
  const isKemenag = input.jalur === "Kemenag";
  const instansiInduk =
    input.instansiInduk ??
    (isKemenag
      ? "KEMENTERIAN AGAMA REPUBLIK INDONESIA"
      : "PEMERINTAH DAERAH PROVINSI / KABUPATEN / KOTA");
  const kantorWilayah =
    input.kantorWilayah ??
    (isKemenag
      ? `KANTOR KEMENTERIAN AGAMA ${input.kotaSatuan ? input.kotaSatuan.toUpperCase() : "KABUPATEN / KOTA"}`
      : "DINAS PENDIDIKAN DAN KEBUDAYAAN");
  const alamatSatuan =
    input.alamatSatuan ??
    `Jl. Raya Pendidikan No. 01, ${input.kotaSatuan || "Kabupaten/Kota"}`;

  const elements: (Paragraph | Table)[] = [
    // Top Institution Headers
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 80, after: 20 },
      children: [
        new TextRun({
          text: instansiInduk.toUpperCase(),
          bold: true,
          size: 20,
          font: "Arial",
          color: "1E293B",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 0, after: 40 },
      children: [
        new TextRun({
          text: kantorWilayah.toUpperCase(),
          bold: true,
          size: 19,
          font: "Arial",
          color: "334155",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 0, after: 60 },
      children: [
        new TextRun({
          text: input.namaSatuan.toUpperCase(),
          bold: true,
          size: 23,
          font: "Arial",
          color: "000000",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 0, after: 160 },
      border: {
        bottom: { style: BorderStyle.SINGLE, size: 8, color: "000000" },
      },
      children: [],
    }),
  ];

  // Logos in Center
  if (logoBytes && logoKananBytes) {
    const dualWidths = [4677, 4678];
    elements.push(
      new Table({
        width: { size: TOTAL_TABLE_WIDTH_DXA, type: WidthType.DXA },
        layout: TableLayoutType.FIXED,
        columnWidths: dualWidths,
        borders: borderless,
        rows: [
          new TableRow({
            cantSplit: true,
            children: [
              new TableCell({
                width: { size: dualWidths[0], type: WidthType.DXA },
                margins: cellMargins,
                children: [
                  new Paragraph({
                    alignment: AlignmentType.RIGHT,
                    spacing: { before: 40, after: 80 },
                    children: [
                      new ImageRun({
                        data: logoBytes,
                        transformation: { width: 75, height: 75 },
                        type: "png",
                      }),
                    ],
                  }),
                ],
              }),
              new TableCell({
                width: { size: dualWidths[1], type: WidthType.DXA },
                margins: cellMargins,
                children: [
                  new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { before: 40, after: 80 },
                    children: [
                      new ImageRun({
                        data: logoKananBytes,
                        transformation: { width: 75, height: 75 },
                        type: "png",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  } else if (logoBytes) {
    elements.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 60, after: 120 },
        children: [
          new ImageRun({
            data: logoBytes,
            transformation: { width: 85, height: 85 },
            type: "png",
          }),
        ],
      })
    );
  } else if (logoKananBytes) {
    elements.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 60, after: 120 },
        children: [
          new ImageRun({
            data: logoKananBytes,
            transformation: { width: 85, height: 85 },
            type: "png",
          }),
        ],
      })
    );
  } else {
    elements.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 40, after: 80 },
        children: [
          new TextRun({
            text: isKemenag ? "★ EMBLEM RESMI KEMENTERIAN AGAMA RI ★" : "★ EMBLEM RESMI TUT WURI HANDAYANI ★",
            bold: true,
            size: 18,
            font: "Arial",
            color: "059669",
          }),
        ],
      })
    );
  }

  // Bab Number Pill & Title (Clean Divider Without Content Table)
  elements.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 100, after: 40 },
      children: [
        new TextRun({
          text: `[ ${babNumber} ]`,
          bold: true,
          size: 26,
          font: "Arial",
          color: "0F172A",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 20, after: 40 },
      children: [
        new TextRun({
          text: docTitle.toUpperCase(),
          bold: true,
          size: 24,
          font: "Arial",
          color: "000000",
        }),
      ],
    })
  );

  if (docSubtitle) {
    elements.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 120 },
        children: [
          new TextRun({
            text: docSubtitle,
            size: 17,
            font: "Arial",
            color: "475569",
          }),
        ],
      })
    );
  }

  // Specifications Box (Without tables of content)
  const specWidths = [3000, 6355];
  elements.push(
    new Paragraph({ text: "", spacing: { before: 60, after: 30 } }),
    new Table({
      width: { size: TOTAL_TABLE_WIDTH_DXA, type: WidthType.DXA },
      layout: TableLayoutType.FIXED,
      columnWidths: specWidths,
      borders: standardBorder,
      rows: [
        new TableRow({
          children: [
            createCell("Mata Pelajaran", specWidths[0], AlignmentType.LEFT, true, "F8FAFC"),
            createCell(input.mataPelajaran, specWidths[1], AlignmentType.LEFT, true),
          ],
        }),
        new TableRow({
          children: [
            createCell("Fase / Kelas", specWidths[0], AlignmentType.LEFT, true, "F8FAFC"),
            createCell(formatFaseKelasClean(input.fase, input.kelas), specWidths[1]),
          ],
        }),
        new TableRow({
          children: [
            createCell("Tahun Ajaran", specWidths[0], AlignmentType.LEFT, true, "F8FAFC"),
            createCell(input.tahunAjaran, specWidths[1], AlignmentType.LEFT, true),
          ],
        }),
      ],
    }),
    new Paragraph({ text: "", spacing: { before: 140, after: 60 } }),
    createSignatureBlockDocx(input),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 160, after: 0 },
      children: [
        new TextRun({
          text: `${alamatSatuan} — ${input.kotaSatuan || "Jakarta"}, ${input.tahunAjaran.split("/")[0] || "2025"}`,
          size: 15,
          font: "Arial",
          color: "64748B",
        }),
      ],
    })
  );

  return elements;
}

// Generate Official Triangular Signature Block in Word (Waka Kurikulum Kiri, Guru Kanan, Kepala Madrasah Tengah Bawah)
function createSignatureBlockDocx(input: TeacherInput): Table {
  const leftWidth = Math.floor(TOTAL_TABLE_WIDTH_DXA * 0.45);
  const midWidth = Math.floor(TOTAL_TABLE_WIDTH_DXA * 0.10);
  const rightWidth = TOTAL_TABLE_WIDTH_DXA - leftWidth - midWidth;
  const colWidths = [leftWidth, midWidth, rightWidth];
  const kota = input.kotaSatuan || "Jakarta";
  const tanggal = input.tanggalPengesahan || "15 Juli 2025";
  const isKemenag = input.jalur === "Kemenag";
  const wakaTitle = isKemenag ? "Wakil Kepala Madrasah" : "Wakil Kepala Sekolah";
  const kepalaTitle = isKemenag ? "Kepala Madrasah" : "Kepala Sekolah";
  const namaWakil = input.namaWakil?.trim() || "Edi Wahyu, S. Pd.";
  const nipWakil = input.nipWakil?.trim() || "-";

  return new Table({
    width: { size: TOTAL_TABLE_WIDTH_DXA, type: WidthType.DXA },
    layout: TableLayoutType.FIXED,
    columnWidths: colWidths,
    borders: borderless,
    rows: [
      // Baris 1: Jabatan & Tanggal (Waka Kurikulum Kiri, Guru Mapel Kanan)
      new TableRow({
        cantSplit: true,
        children: [
          new TableCell({
            width: { size: colWidths[0], type: WidthType.DXA },
            margins: cellMargins,
            children: [
              new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Mengesahkan,", size: 18, font: "Arial" })] }),
              new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: wakaTitle, bold: true, size: 18, font: "Arial" })] }),
              new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Bidang Kurikulum", bold: true, size: 18, font: "Arial" })] }),
            ],
          }),
          new TableCell({
            width: { size: colWidths[1], type: WidthType.DXA },
            margins: cellMargins,
            children: [new Paragraph({ text: "" })],
          }),
          new TableCell({
            width: { size: colWidths[2], type: WidthType.DXA },
            margins: cellMargins,
            children: [
              new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `${kota}, ${tanggal}`, size: 18, font: "Arial" })] }),
              new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Guru Mata Pelajaran", bold: true, size: 18, font: "Arial" })] }),
            ],
          }),
        ],
      }),

      // Baris 2: Ruang Tanda Tangan (Sama Tinggi Presisi)
      new TableRow({
        cantSplit: true,
        children: [
          new TableCell({
            width: { size: colWidths[0], type: WidthType.DXA },
            margins: cellMargins,
            children: [new Paragraph({ text: "", spacing: { before: 500, after: 500 } })],
          }),
          new TableCell({
            width: { size: colWidths[1], type: WidthType.DXA },
            margins: cellMargins,
            children: [new Paragraph({ text: "" })],
          }),
          new TableCell({
            width: { size: colWidths[2], type: WidthType.DXA },
            margins: cellMargins,
            children: [new Paragraph({ text: "", spacing: { before: 500, after: 500 } })],
          }),
        ],
      }),

      // Baris 3: Nama Lengkap & NIP (Terkunci 100% Sejajar Satu Baris Horizontal)
      new TableRow({
        cantSplit: true,
        children: [
          new TableCell({
            width: { size: colWidths[0], type: WidthType.DXA },
            margins: cellMargins,
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: namaWakil,
                    bold: true,
                    underline: {},
                    size: 18,
                    font: "Arial",
                  }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: `NIP. ${nipWakil}`,
                    size: 17,
                    font: "Arial",
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            width: { size: colWidths[1], type: WidthType.DXA },
            margins: cellMargins,
            children: [new Paragraph({ text: "" })],
          }),
          new TableCell({
            width: { size: colWidths[2], type: WidthType.DXA },
            margins: cellMargins,
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: input.namaGuru || "Nama Guru Mata Pelajaran",
                    bold: true,
                    underline: {},
                    size: 18,
                    font: "Arial",
                  }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: `NIP. ${input.nipGuru || "-"}`,
                    size: 17,
                    font: "Arial",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),

      // Baris 4: Spacer Vertikal Antar Tingkat
      new TableRow({
        cantSplit: true,
        children: [
          new TableCell({
            columnSpan: 3,
            width: { size: TOTAL_TABLE_WIDTH_DXA, type: WidthType.DXA },
            margins: cellMargins,
            children: [new Paragraph({ text: "", spacing: { before: 140, after: 140 } })],
          }),
        ],
      }),

      // Baris 5: Jabatan Mengetahui Kepala Madrasah / Sekolah (Tengah)
      new TableRow({
        cantSplit: true,
        children: [
          new TableCell({
            columnSpan: 3,
            width: { size: TOTAL_TABLE_WIDTH_DXA, type: WidthType.DXA },
            margins: cellMargins,
            children: [
              new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Mengetahui,", size: 18, font: "Arial" })] }),
              new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: kepalaTitle, bold: true, size: 18, font: "Arial" })] }),
            ],
          }),
        ],
      }),

      // Baris 6: Ruang Tanda Tangan & Stempel Dinas Kepala
      new TableRow({
        cantSplit: true,
        children: [
          new TableCell({
            columnSpan: 3,
            width: { size: TOTAL_TABLE_WIDTH_DXA, type: WidthType.DXA },
            margins: cellMargins,
            children: [new Paragraph({ text: "", spacing: { before: 500, after: 500 } })],
          }),
        ],
      }),

      // Baris 7: Nama & NIP Kepala Madrasah / Sekolah
      new TableRow({
        cantSplit: true,
        children: [
          new TableCell({
            columnSpan: 3,
            width: { size: TOTAL_TABLE_WIDTH_DXA, type: WidthType.DXA },
            margins: cellMargins,
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: input.namaKepala || "Nama Kepala Sekolah/Madrasah",
                    bold: true,
                    underline: {},
                    size: 18,
                    font: "Arial",
                  }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: `NIP. ${input.nipKepala || "-"}`,
                    size: 17,
                    font: "Arial",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

export async function exportPackageToDocx(pkg: CompleteDocumentPackage): Promise<Blob> {
  const {
    input,
    doc1AnalisisCP,
    doc2ATP,
    doc3Prota,
    doc4ProsemGanjil,
    doc4ProsemGenap,
    doc5ModulAjar,
    doc6LKPD,
    doc7KKTP,
    doc8KisiKisi,
    doc9BankSoal,
  } = pkg;
  const isKemenag = input.jalur === "Kemenag";

  // Convert Logo Data URLs to Uint8Array for DOCX Embedding
  let logoBytes: Uint8Array | null = null;
  if (input.logoUrl) {
    try {
      logoBytes = dataUrlToUint8Array(input.logoUrl);
    } catch (err) {
      console.error("Gagal memproses logo kiri image bytes untuk DOCX:", err);
    }
  }

  let logoKananBytes: Uint8Array | null = null;
  if (input.logoKananUrl) {
    try {
      logoKananBytes = dataUrlToUint8Array(input.logoKananUrl);
    } catch (err) {
      console.error("Gagal memproses logo kanan image bytes untuk DOCX:", err);
    }
  }

  const defaultSectionProps = {
    page: {
      size: {
        orientation: PageOrientation.PORTRAIT,
      },
      margin: PAGE_MARGINS,
    },
  };

  // -------------------------------------------------------------
  // SECTION 0: COVER / SAMPUL PORTOFOLIO ADMINISTRASI
  // -------------------------------------------------------------
  const section0CoverChildren = createCoverSectionDocx(pkg, logoBytes, logoKananBytes);

  // -------------------------------------------------------------
  // SECTION 1: ANALISIS CP & PERUMUSAN TP
  // -------------------------------------------------------------
  const doc1Widths = [1400, 2755, 1200, 1500, 2500];
  const section1Children = [
    ...createKopSuratDocx(
      input,
      "ANALISIS CAPAIAN PEMBELAJARAN (CP) DAN PERUMUSAN TUJUAN PEMBELAJARAN (TP)",
      `Berdasarkan ${isKemenag ? "Keputusan Kepala BSKAP No. 046/H/KR/2025 & KMA No. 1503 Tahun 2025" : "Keputusan Kepala BSKAP No. 046/H/KR/2025"} (Dekonstruksi KKO Bloom C1-C6 & Konten Esensial)`,
      logoBytes,
      logoKananBytes
    ),
    new Table({
      width: { size: TOTAL_TABLE_WIDTH_DXA, type: WidthType.DXA },
      layout: TableLayoutType.FIXED,
      columnWidths: doc1Widths,
      borders: standardBorder,
      rows: [
        new TableRow({
          tableHeader: true,
          cantSplit: true,
          children: [
            createHeaderCell("Elemen", doc1Widths[0]),
            createHeaderCell("Capaian Pembelajaran (CP)", doc1Widths[1]),
            createHeaderCell("Kompetensi (KKO)", doc1Widths[2]),
            createHeaderCell("Lingkup Materi", doc1Widths[3]),
            createHeaderCell("Rencana Rumusan TP", doc1Widths[4]),
          ],
        }),
        ...doc1AnalisisCP.map(
          (d) =>
            new TableRow({
              cantSplit: true,
              children: [
                createCell(d.elemen, doc1Widths[0], AlignmentType.LEFT, true),
                createCell(d.capaianPembelajaran, doc1Widths[1]),
                createCell(d.kompetensiKKO, doc1Widths[2]),
                createCell(d.lingkupMateri, doc1Widths[3]),
                createCell(d.rencanaRumusanTP, doc1Widths[4], AlignmentType.LEFT, true),
              ],
            })
        ),
      ],
    }),
    new Paragraph({ text: "", spacing: { before: 180, after: 120 } }),
    createSignatureBlockDocx(input),
  ];

  // -------------------------------------------------------------
  // SECTION 2: ALUR TUJUAN PEMBELAJARAN (ATP)
  // -------------------------------------------------------------
  // No. is tightly constrained to 420 dxa (~7.4 mm)
  const doc2Widths = [420, 800, 3885, 450, 1900, 1900];
  const section2Children = [
    ...createKopSuratDocx(
      input,
      "ALUR TUJUAN PEMBELAJARAN (ATP)",
      "Distribusi Sekuensial Berkelanjutan & Pemetaan Target Karakter Resmi 2025/2026",
      logoBytes,
      logoKananBytes
    ),
    new Table({
      width: { size: TOTAL_TABLE_WIDTH_DXA, type: WidthType.DXA },
      layout: TableLayoutType.FIXED,
      columnWidths: doc2Widths,
      borders: standardBorder,
      rows: [
        new TableRow({
          tableHeader: true,
          cantSplit: true,
          children: [
            createHeaderCell("No.", doc2Widths[0]),
            createHeaderCell("Kode TP", doc2Widths[1]),
            createHeaderCell("Tujuan Pembelajaran (TP)", doc2Widths[2]),
            createHeaderCell("JP", doc2Widths[3]),
            createHeaderCell("Metode & Hubungan Prasyarat", doc2Widths[4]),
            createHeaderCell(
              isKemenag
                ? "Target Karakter (8 Dimensi + Panca Cinta KBC)"
                : "Target Karakter (8 Dimensi Profil Lulusan)",
              doc2Widths[5]
            ),
          ],
        }),
        ...doc2ATP.map(
          (d) =>
            new TableRow({
              cantSplit: true,
              children: [
                createCell(String(d.no), doc2Widths[0], AlignmentType.CENTER, true),
                createCell(d.kodeTP, doc2Widths[1], AlignmentType.CENTER, true),
                createCell(d.tujuanPembelajaran, doc2Widths[2]),
                createCell(String(d.alokasiJP), doc2Widths[3], AlignmentType.CENTER, true),
                createCell(d.metodePengurutan, doc2Widths[4]),
                createCell(d.targetKarakter, doc2Widths[5]),
              ],
            })
        ),
        new TableRow({
          cantSplit: true,
          children: [
            createCell(
              "TOTAL ALOKASI WAKTU INTRAKURIKULER:",
              doc2Widths[0] + doc2Widths[1] + doc2Widths[2],
              AlignmentType.RIGHT,
              true,
              "F8FAFC"
            ),
            createCell(
              `${doc2ATP.reduce((s, it) => s + it.alokasiJP, 0)} JP`,
              doc2Widths[3],
              AlignmentType.CENTER,
              true,
              "F8FAFC"
            ),
            createCell(
              "+ 16 JP Asesmen & Cadangan = 144 JP per Tahun (72 JP Ganjil + 72 JP Genap, Sesuai Regulasi Resmi 2025/2026)",
              doc2Widths[4] + doc2Widths[5],
              AlignmentType.LEFT,
              false,
              "F8FAFC"
            ),
          ],
        }),
      ],
    }),
    new Paragraph({ text: "", spacing: { before: 180, after: 120 } }),
    createSignatureBlockDocx(input),
  ];

  // -------------------------------------------------------------
  // SECTION 3: PROGRAM TAHUNAN (PROTA)
  // -------------------------------------------------------------
  // No. is tightly constrained to 420 dxa
  const doc3Widths = [900, 420, 4935, 600, 2500];
  const section3Children = [
    ...createKopSuratDocx(
      input,
      "PROGRAM TAHUNAN (PROTA)",
      "Distribusi Alokasi Jam Pelajaran Resmi (36 Minggu Efektif Standar Sesuai Struktur Kurikulum)",
      logoBytes,
      logoKananBytes
    ),
    new Table({
      width: { size: TOTAL_TABLE_WIDTH_DXA, type: WidthType.DXA },
      layout: TableLayoutType.FIXED,
      columnWidths: doc3Widths,
      borders: standardBorder,
      rows: [
        new TableRow({
          tableHeader: true,
          cantSplit: true,
          children: [
            createHeaderCell("Semester", doc3Widths[0]),
            createHeaderCell("No.", doc3Widths[1]),
            createHeaderCell("Tujuan Pembelajaran (TP) / Lingkup Materi", doc3Widths[2]),
            createHeaderCell("Alokasi", doc3Widths[3]),
            createHeaderCell("Keterangan Tambahan", doc3Widths[4]),
          ],
        }),
        ...doc3Prota.items.map(
          (d) =>
            new TableRow({
              cantSplit: true,
              children: [
                createCell(d.semester, doc3Widths[0], AlignmentType.CENTER, true),
                createCell(String(d.no), doc3Widths[1], AlignmentType.CENTER, true),
                createCell(d.tujuanPembelajaran, doc3Widths[2]),
                createCell(String(d.alokasiJP) + " JP", doc3Widths[3], AlignmentType.CENTER, true),
                createCell(d.keterangan, doc3Widths[4]),
              ],
            })
        ),
        new TableRow({
          cantSplit: true,
          children: [
            createCell(
              "TOTAL JAM PELAJARAN SETAHUN:",
              doc3Widths[0] + doc3Widths[1] + doc3Widths[2],
              AlignmentType.RIGHT,
              true,
              "F8FAFC"
            ),
            createCell(
              `${doc3Prota.totalTahun} JP`,
              doc3Widths[3],
              AlignmentType.CENTER,
              true,
              "F8FAFC"
            ),
            createCell(
              "Terkunci Resmi Regulasi 2025/2026",
              doc3Widths[4],
              AlignmentType.LEFT,
              false,
              "F8FAFC"
            ),
          ],
        }),
      ],
    }),
    new Paragraph({ text: "", spacing: { before: 180, after: 120 } }),
    createSignatureBlockDocx(input),
  ];

  // -------------------------------------------------------------
  // SECTION 4: PROGRAM SEMESTER (PROSEM) - GANJIL & GENAP
  // -------------------------------------------------------------
  // No. is tightly constrained to 420 dxa
  const doc4Widths = [420, 4635, 700, 3600];

  const totalJPGanjil = doc4ProsemGanjil.reduce((acc, curr) => acc + (Number(curr.alokasiJP) || 0), 0) + 8;
  const totalJPGenap = doc4ProsemGenap.reduce((acc, curr) => acc + (Number(curr.alokasiJP) || 0), 0) + 8;

  const section4Children = [
    // --- SEMESTER GANJIL ---
    ...createKopSuratDocx(
      input,
      "PROGRAM SEMESTER (PROSEM) - SEMESTER GANJIL",
      `Distribusi Matriks Jam Pelajaran Mingguan per Bulan (Juli - Desember) • Tahun Ajaran ${input.tahunAjaran}`,
      logoBytes,
      logoKananBytes
    ),
    createBoldParagraph("TABEL DISTRIBUSI PROGRAM SEMESTER GANJIL (JULI - DESEMBER):", 60, 40),
    new Table({
      width: { size: TOTAL_TABLE_WIDTH_DXA, type: WidthType.DXA },
      layout: TableLayoutType.FIXED,
      columnWidths: doc4Widths,
      borders: standardBorder,
      rows: [
        new TableRow({
          tableHeader: true,
          cantSplit: true,
          children: [
            createHeaderCell("No.", doc4Widths[0]),
            createHeaderCell("Tujuan Pembelajaran (TP) / Lingkup Materi", doc4Widths[1]),
            createHeaderCell("Alokasi", doc4Widths[2]),
            createHeaderCell("Distribusi Bulan Ganjil (Juli - Des)", doc4Widths[3]),
          ],
        }),
        ...doc4ProsemGanjil.map(
          (item) =>
            new TableRow({
              cantSplit: true,
              children: [
                createCell(String(item.no), doc4Widths[0], AlignmentType.CENTER, true),
                createCell(`[${item.kodeTP}] ${item.tujuanPembelajaran}`, doc4Widths[1]),
                createCell(String(item.alokasiJP) + " JP", doc4Widths[2], AlignmentType.CENTER, true),
                createCell(item.keterangan || "Distribusi Sesuai Roster Efektif", doc4Widths[3]),
              ],
            })
        ),
        new TableRow({
          cantSplit: true,
          children: [
            createCell(String(doc4ProsemGanjil.length + 1), doc4Widths[0], AlignmentType.CENTER, true),
            createCell("Asesmen Sumatif Lingkup Materi & Tengah Semester (STS)", doc4Widths[1]),
            createCell("4 JP", doc4Widths[2], AlignmentType.CENTER, true),
            createCell("Bulan September - Evaluasi Berkala", doc4Widths[3]),
          ],
        }),
        new TableRow({
          cantSplit: true,
          children: [
            createCell(String(doc4ProsemGanjil.length + 2), doc4Widths[0], AlignmentType.CENTER, true),
            createCell("Asesmen Sumatif Akhir Semester (SAS)", doc4Widths[1]),
            createCell("2 JP", doc4Widths[2], AlignmentType.CENTER, true),
            createCell("Bulan Desember - Penilaian Akhir Semester", doc4Widths[3]),
          ],
        }),
        new TableRow({
          cantSplit: true,
          children: [
            createCell(String(doc4ProsemGanjil.length + 3), doc4Widths[0], AlignmentType.CENTER, true),
            createCell("Cadangan Jam Pelajaran & Pendampingan Remedial", doc4Widths[1]),
            createCell("2 JP", doc4Widths[2], AlignmentType.CENTER, true),
            createCell("Program Remedial & Pengayaan Mandiri", doc4Widths[3]),
          ],
        }),
        new TableRow({
          cantSplit: true,
          children: [
            createCell("", doc4Widths[0], AlignmentType.CENTER, true),
            createCell("TOTAL ALOKASI JAM PELAJARAN SEMESTER GANJIL", doc4Widths[1], AlignmentType.LEFT, true),
            createCell(`${totalJPGanjil} JP`, doc4Widths[2], AlignmentType.CENTER, true),
            createCell("18 Minggu Efektif Semester Ganjil", doc4Widths[3], AlignmentType.LEFT, true),
          ],
        }),
      ],
    }),
    new Paragraph({ text: "", spacing: { before: 180, after: 120 } }),
    createSignatureBlockDocx(input),

    // --- PAGE BREAK BETWEEN SEMESTERS ---
    new Paragraph({ children: [new PageBreak()] }),

    // --- SEMESTER GENAP ---
    ...createKopSuratDocx(
      input,
      "PROGRAM SEMESTER (PROSEM) - SEMESTER GENAP",
      `Distribusi Matriks Jam Pelajaran Mingguan per Bulan (Januari - Juni) • Tahun Ajaran ${input.tahunAjaran}`,
      logoBytes,
      logoKananBytes
    ),
    createBoldParagraph("TABEL DISTRIBUSI PROGRAM SEMESTER GENAP (JANUARI - JUNI):", 60, 40),
    new Table({
      width: { size: TOTAL_TABLE_WIDTH_DXA, type: WidthType.DXA },
      layout: TableLayoutType.FIXED,
      columnWidths: doc4Widths,
      borders: standardBorder,
      rows: [
        new TableRow({
          tableHeader: true,
          cantSplit: true,
          children: [
            createHeaderCell("No.", doc4Widths[0]),
            createHeaderCell("Tujuan Pembelajaran (TP) / Lingkup Materi", doc4Widths[1]),
            createHeaderCell("Alokasi", doc4Widths[2]),
            createHeaderCell("Distribusi Bulan Genap (Jan - Jun)", doc4Widths[3]),
          ],
        }),
        ...doc4ProsemGenap.map(
          (item) =>
            new TableRow({
              cantSplit: true,
              children: [
                createCell(String(item.no), doc4Widths[0], AlignmentType.CENTER, true),
                createCell(`[${item.kodeTP}] ${item.tujuanPembelajaran}`, doc4Widths[1]),
                createCell(String(item.alokasiJP) + " JP", doc4Widths[2], AlignmentType.CENTER, true),
                createCell(item.keterangan || "Distribusi Sesuai Roster Efektif", doc4Widths[3]),
              ],
            })
        ),
        new TableRow({
          cantSplit: true,
          children: [
            createCell(String(doc4ProsemGenap.length + 1), doc4Widths[0], AlignmentType.CENTER, true),
            createCell("Asesmen Sumatif Lingkup Materi & Tengah Semester (STS)", doc4Widths[1]),
            createCell("4 JP", doc4Widths[2], AlignmentType.CENTER, true),
            createCell("Bulan Maret - Evaluasi Berkala", doc4Widths[3]),
          ],
        }),
        new TableRow({
          cantSplit: true,
          children: [
            createCell(String(doc4ProsemGenap.length + 2), doc4Widths[0], AlignmentType.CENTER, true),
            createCell("Asesmen Sumatif Akhir Tahun (SAT) / Akhir Jenjang", doc4Widths[1]),
            createCell("2 JP", doc4Widths[2], AlignmentType.CENTER, true),
            createCell("Bulan Juni - Evaluasi Komprehensif Ketercapaian TP", doc4Widths[3]),
          ],
        }),
        new TableRow({
          cantSplit: true,
          children: [
            createCell(String(doc4ProsemGenap.length + 3), doc4Widths[0], AlignmentType.CENTER, true),
            createCell("Cadangan Jam Pelajaran & Penguatan Karakter", doc4Widths[1]),
            createCell("2 JP", doc4Widths[2], AlignmentType.CENTER, true),
            createCell("Refleksi Akhir Tahun & Remedial Terarah", doc4Widths[3]),
          ],
        }),
        new TableRow({
          cantSplit: true,
          children: [
            createCell("", doc4Widths[0], AlignmentType.CENTER, true),
            createCell("TOTAL ALOKASI JAM PELAJARAN SEMESTER GENAP", doc4Widths[1], AlignmentType.LEFT, true),
            createCell(`${totalJPGenap} JP`, doc4Widths[2], AlignmentType.CENTER, true),
            createCell("18 Minggu Efektif Semester Genap", doc4Widths[3], AlignmentType.LEFT, true),
          ],
        }),
      ],
    }),
    new Paragraph({ text: "", spacing: { before: 180, after: 120 } }),
    createSignatureBlockDocx(input),
  ];

  const units = pkg.units && pkg.units.length > 0 ? pkg.units : [
    {
      unitNumber: 1,
      unitTitle: doc5ModulAjar.ruangLingkup.tpTerpilih,
      kodeTP: doc5ModulAjar.ruangLingkup.kodeTP,
      tujuanPembelajaran: doc5ModulAjar.ruangLingkup.tpTerpilih,
      elemenCP: doc5ModulAjar.ruangLingkup.elemenCP,
      alokasiJP: 6,
      semester: "GANJIL" as const,
      doc5ModulAjar: doc5ModulAjar,
      doc6LKPD: doc6LKPD,
      doc7KKTP: doc7KKTP,
      doc8KisiKisi: doc8KisiKisi,
      doc9BankSoal: doc9BankSoal,
    },
  ];

  // -------------------------------------------------------------
  // SECTION 5: MODUL AJAR (DEEP LEARNING / KBC FIDS) - ALL UNITS
  // -------------------------------------------------------------
  const doc5Widths2Col = [2500, 6855];
  const doc5Widths3Col = [2300, 4855, 2200];
  const doc5SiklusWidths = [2300, 1100, 5955];

  const createSingleModulAjarDocx = (unitModul: typeof doc5ModulAjar, uNum: number, semester?: "GANJIL" | "GENAP") => {
    const semText = (semester || unitModul.identitas.semester) === "GENAP" ? "Genap" : "Ganjil";
    return [
      ...createKopSuratDocx(
        input,
        `MODUL AJAR UNIT ${uNum} / RPP PEMBELAJARAN MENDALAM (SEMESTER ${semText.toUpperCase()})`,
        isKemenag
          ? "Pendekatan Pembelajaran Mendalam Terintegrasi Kurikulum Berbasis Cinta (KBC Sintaks FIDS)"
          : "Pendekatan Pembelajaran Mendalam (Deep Learning - Mindful, Meaningful, Joyful & 4 Olah)",
        logoBytes,
        logoKananBytes
      ),
      createBoldParagraph(`UNIT ${uNum}: ${unitModul.ruangLingkup.tpTerpilih} (${unitModul.ruangLingkup.kodeTP})`, 40, 20),
      createBoldParagraph(`I. INFORMASI IDENTITAS UMUM (SEMESTER ${semText.toUpperCase()})`, 60, 40),
      new Table({
        width: { size: TOTAL_TABLE_WIDTH_DXA, type: WidthType.DXA },
        layout: TableLayoutType.FIXED,
        columnWidths: doc5Widths2Col,
        borders: standardBorder,
        rows: [
          new TableRow({
            cantSplit: true,
            children: [
              createCell("Nama Penyusun", doc5Widths2Col[0], AlignmentType.LEFT, true),
              createCell(unitModul.identitas.namaPenyusun, doc5Widths2Col[1]),
            ],
          }),
          new TableRow({
            cantSplit: true,
            children: [
              createCell("Satuan Pendidikan", doc5Widths2Col[0], AlignmentType.LEFT, true),
              createCell(unitModul.identitas.satuanPendidikan, doc5Widths2Col[1]),
            ],
          }),
          new TableRow({
            cantSplit: true,
            children: [
              createCell("Fase / Kelas / Semester", doc5Widths2Col[0], AlignmentType.LEFT, true),
              createCell(`${unitModul.identitas.faseKelas} / Semester ${semText}`, doc5Widths2Col[1]),
            ],
          }),
          new TableRow({
            cantSplit: true,
            children: [
              createCell("Mata Pelajaran", doc5Widths2Col[0], AlignmentType.LEFT, true),
              createCell(unitModul.identitas.mataPelajaran, doc5Widths2Col[1]),
            ],
          }),
          new TableRow({
            cantSplit: true,
            children: [
              createCell("Alokasi Waktu Resmi", doc5Widths2Col[0], AlignmentType.LEFT, true),
              createCell(unitModul.identitas.alokasiWaktu, doc5Widths2Col[1]),
            ],
          }),
        ],
      }),

      createBoldParagraph("II. RUANG LINGKUP & TARGET CAPAIAN", 120, 40),
      new Table({
        width: { size: TOTAL_TABLE_WIDTH_DXA, type: WidthType.DXA },
        layout: TableLayoutType.FIXED,
        columnWidths: doc5Widths2Col,
        borders: standardBorder,
        rows: [
          new TableRow({
            cantSplit: true,
            children: [
              createCell("Elemen CP", doc5Widths2Col[0], AlignmentType.LEFT, true),
              createCell(unitModul.ruangLingkup.elemenCP, doc5Widths2Col[1]),
            ],
          }),
          new TableRow({
            cantSplit: true,
            children: [
              createCell("Tujuan Pembelajaran Terpilih", doc5Widths2Col[0], AlignmentType.LEFT, true),
              createCell(unitModul.ruangLingkup.tpTerpilih, doc5Widths2Col[1], AlignmentType.LEFT, true),
            ],
          }),
          new TableRow({
            cantSplit: true,
            children: [
              createCell("Target Karakter Lulusan", doc5Widths2Col[0], AlignmentType.LEFT, true),
              createCell(unitModul.ruangLingkup.targetKarakter, doc5Widths2Col[1]),
            ],
          }),
        ],
      }),

      createBoldParagraph("III. TABEL DESAIN PENGALAMAN & DIGITAL", 120, 40),
      new Table({
        width: { size: TOTAL_TABLE_WIDTH_DXA, type: WidthType.DXA },
        layout: TableLayoutType.FIXED,
        columnWidths: doc5Widths3Col,
        borders: standardBorder,
        rows: [
          new TableRow({
            tableHeader: true,
            cantSplit: true,
            children: [
              createHeaderCell("Komponen Desain", doc5Widths3Col[0]),
              createHeaderCell("Keterangan Operasional", doc5Widths3Col[1]),
              createHeaderCell("Sumber & Media", doc5Widths3Col[2]),
            ],
          }),
          new TableRow({
            cantSplit: true,
            children: [
              createCell(
                "1. Praktik Pedagogis",
                doc5Widths3Col[0],
                AlignmentType.LEFT,
                true
              ),
              createCell(
                unitModul.desainPengalaman.praktikPedagogis.keterangan,
                doc5Widths3Col[1]
              ),
              createCell(
                unitModul.desainPengalaman.praktikPedagogis.sumberAlat,
                doc5Widths3Col[2]
              ),
            ],
          }),
          new TableRow({
            cantSplit: true,
            children: [
              createCell(
                "2. Kemitraan Pembelajaran",
                doc5Widths3Col[0],
                AlignmentType.LEFT,
                true
              ),
              createCell(
                unitModul.desainPengalaman.kemitraan.keterangan,
                doc5Widths3Col[1]
              ),
              createCell(unitModul.desainPengalaman.kemitraan.sumberAlat, doc5Widths3Col[2]),
            ],
          }),
          new TableRow({
            cantSplit: true,
            children: [
              createCell(
                "3. Lingkungan Pembelajaran",
                doc5Widths3Col[0],
                AlignmentType.LEFT,
                true
              ),
              createCell(
                unitModul.desainPengalaman.lingkungan.keterangan,
                doc5Widths3Col[1]
              ),
              createCell(unitModul.desainPengalaman.lingkungan.sumberAlat, doc5Widths3Col[2]),
            ],
          }),
          new TableRow({
            cantSplit: true,
            children: [
              createCell(
                "4. Pemanfaatan Digital",
                doc5Widths3Col[0],
                AlignmentType.LEFT,
                true
              ),
              createCell(
                unitModul.desainPengalaman.digital.keterangan,
                doc5Widths3Col[1]
              ),
              createCell(unitModul.desainPengalaman.digital.sumberAlat, doc5Widths3Col[2]),
            ],
          }),
        ],
      }),

      createBoldParagraph(
        `IV. SIKLUS LANGKAH OPERASIONAL PEMBELAJARAN (${isKemenag ? "SINTAKS FIDS KURIKULUM BERBASIS CINTA" : "3 PENGALAMAN DEEP LEARNING"})`,
        120,
        40
      ),
      new Table({
        width: { size: TOTAL_TABLE_WIDTH_DXA, type: WidthType.DXA },
        layout: TableLayoutType.FIXED,
        columnWidths: doc5SiklusWidths,
        borders: standardBorder,
        rows: [
          new TableRow({
            tableHeader: true,
            cantSplit: true,
            children: [
              createHeaderCell("Tahapan & Sintaks", doc5SiklusWidths[0]),
              createHeaderCell("Alokasi Waktu", doc5SiklusWidths[1]),
              createHeaderCell("Deskripsi Aktivitas Pembelajaran & Diferensiasi", doc5SiklusWidths[2]),
            ],
          }),
          new TableRow({
            children: [
              createCell(unitModul.siklusLangkah.tahap1.nama, doc5SiklusWidths[0], AlignmentType.LEFT, true),
              createCell(unitModul.siklusLangkah.tahap1.durasi || "15 Menit", doc5SiklusWidths[1], AlignmentType.CENTER, true),
              createMultiParagraphCell(
                unitModul.siklusLangkah.tahap1.kegiatan.map(
                  (k) =>
                    new Paragraph({
                      spacing: { before: 15, after: 15, line: 240 },
                      children: [
                        new TextRun({
                          text: `• ${k}`,
                          size: 17,
                          font: "Arial",
                          color: "1E293B",
                        }),
                      ],
                    })
                ),
                doc5SiklusWidths[2]
              ),
            ],
          }),
          new TableRow({
            children: [
              createCell(unitModul.siklusLangkah.tahap2.nama, doc5SiklusWidths[0], AlignmentType.LEFT, true),
              createCell(unitModul.siklusLangkah.tahap2.durasi || "50 Menit", doc5SiklusWidths[1], AlignmentType.CENTER, true),
              createMultiParagraphCell(
                [
                  new Paragraph({
                    spacing: { before: 15, after: 10, line: 240 },
                    children: [
                      new TextRun({
                        text: "Implementasi 3 Aspek Pembelajaran Berdiferensiasi:",
                        bold: true,
                        size: 16,
                        font: "Arial",
                        color: "0F172A",
                      }),
                    ],
                  }),
                  new Paragraph({
                    spacing: { before: 5, after: 5, line: 240 },
                    children: [
                      new TextRun({ text: "• Diferensiasi Konten: ", bold: true, size: 16, font: "Arial", color: "1E293B" }),
                      new TextRun({ text: unitModul.siklusLangkah.tahap2.diferensiasiKonten, size: 16, font: "Arial", color: "334155" }),
                    ],
                  }),
                  new Paragraph({
                    spacing: { before: 5, after: 5, line: 240 },
                    children: [
                      new TextRun({ text: "• Diferensiasi Proses: ", bold: true, size: 16, font: "Arial", color: "1E293B" }),
                      new TextRun({ text: unitModul.siklusLangkah.tahap2.diferensiasiProses, size: 16, font: "Arial", color: "334155" }),
                    ],
                  }),
                  new Paragraph({
                    spacing: { before: 5, after: 20, line: 240 },
                    children: [
                      new TextRun({ text: "• Diferensiasi Produk: ", bold: true, size: 16, font: "Arial", color: "1E293B" }),
                      new TextRun({ text: unitModul.siklusLangkah.tahap2.diferensiasiProduk, size: 16, font: "Arial", color: "334155" }),
                    ],
                  }),
                  new Paragraph({
                    spacing: { before: 15, after: 10, line: 240 },
                    children: [
                      new TextRun({
                        text: "Aktivitas Inti Pembelajaran:",
                        bold: true,
                        size: 16,
                        font: "Arial",
                        color: "0F172A",
                      }),
                    ],
                  }),
                  ...unitModul.siklusLangkah.tahap2.kegiatan.map(
                    (k) =>
                      new Paragraph({
                        spacing: { before: 15, after: 15, line: 240 },
                        children: [
                          new TextRun({
                            text: `• ${k}`,
                            size: 17,
                            font: "Arial",
                            color: "1E293B",
                          }),
                        ],
                      })
                  ),
                ],
                doc5SiklusWidths[2]
              ),
            ],
          }),
          new TableRow({
            children: [
              createCell(unitModul.siklusLangkah.tahap3.nama, doc5SiklusWidths[0], AlignmentType.LEFT, true),
              createCell(unitModul.siklusLangkah.tahap3.durasi || "15 Menit", doc5SiklusWidths[1], AlignmentType.CENTER, true),
              createMultiParagraphCell(
                unitModul.siklusLangkah.tahap3.kegiatan.map(
                  (k) =>
                    new Paragraph({
                      spacing: { before: 15, after: 15, line: 240 },
                      children: [
                        new TextRun({
                          text: `• ${k}`,
                          size: 17,
                          font: "Arial",
                          color: "1E293B",
                        }),
                      ],
                    })
                ),
                doc5SiklusWidths[2]
              ),
            ],
          }),
          ...(unitModul.siklusLangkah.tahap4
            ? [
                new TableRow({
                  children: [
                    createCell(unitModul.siklusLangkah.tahap4.nama, doc5SiklusWidths[0], AlignmentType.LEFT, true),
                    createCell(unitModul.siklusLangkah.tahap4.durasi || "15 Menit", doc5SiklusWidths[1], AlignmentType.CENTER, true),
                    createMultiParagraphCell(
                      unitModul.siklusLangkah.tahap4.kegiatan.map(
                        (k) =>
                          new Paragraph({
                            spacing: { before: 15, after: 15, line: 240 },
                            children: [
                              new TextRun({
                                text: `• ${k}`,
                                size: 17,
                                font: "Arial",
                                color: "1E293B",
                              }),
                            ],
                          })
                      ),
                      doc5SiklusWidths[2]
                    ),
                  ],
                }),
              ]
            : []),
        ],
      }),
      new Paragraph({ text: "", spacing: { before: 180, after: 120 } }),
      createSignatureBlockDocx(input),
    ];
  };

  const section5Children = units.flatMap((u, idx) => [
    ...createSingleModulAjarDocx(u.doc5ModulAjar, u.unitNumber, u.semester),
    ...(idx < units.length - 1 ? [new Paragraph({ pageBreakBefore: true, text: "" })] : []),
  ]);

  // -------------------------------------------------------------
  // SECTION 6: LEMBAR KERJA PESERTA DIDIK (LKPD) - ALL UNITS
  // -------------------------------------------------------------
  // No. is tightly constrained to 420 dxa
  const doc6Widths = [420, 2880, 3055, 3000];

  const createSingleLKPDDocx = (unitLKPD: typeof doc6LKPD, uNum: number) => {
    return [
      ...createKopSuratDocx(
        input,
        `LEMBAR KERJA PESERTA DIDIK (LKPD) - UNIT ${uNum}`,
        "Penyelidikan Kontekstual & Penalaran Kritis Berbasis Masalah Nyata",
        logoBytes,
        logoKananBytes
      ),
      new Paragraph({
        spacing: { before: 40, after: 40 },
        children: [
          new TextRun({
            text: `Mata Pelajaran: ${unitLKPD.mataPelajaran}   |   Fase / Kelas: ${formatFaseKelasClean(input.fase, unitLKPD.kelas)}`,
            bold: true,
            size: 18,
            font: "Arial",
          }),
        ],
      }),
      new Paragraph({
        spacing: { before: 20, after: 40 },
        children: [
          new TextRun({
            text: `Tujuan Pembelajaran (${unitLKPD.kodeTP}): ${unitLKPD.tujuanPembelajaran}`,
            size: 17,
            font: "Arial",
          }),
        ],
      }),
      createItalicParagraph(
        "Nama Anggota Kelompok: 1. ....................  2. ....................  3. ....................  4. ....................",
        20,
        80
      ),
      createBoldParagraph("A. STIMULUS KASUS NYATA / KONTEKSTUAL:", 40, 20),
      createItalicParagraph(`"${unitLKPD.stimulusKontekstual}"`, 20, 80),
      createBoldParagraph("B. TABEL PENGAMATAN EKSPLORASI MANDIRI:", 40, 40),
      new Table({
        width: { size: TOTAL_TABLE_WIDTH_DXA, type: WidthType.DXA },
        layout: TableLayoutType.FIXED,
        columnWidths: doc6Widths,
        borders: standardBorder,
        rows: [
          new TableRow({
            tableHeader: true,
            cantSplit: true,
            children: [
              createHeaderCell("No.", doc6Widths[0]),
              createHeaderCell("Variabel / Aspek yang Diamati", doc6Widths[1]),
              createHeaderCell("Hasil Pengamatan / Bukti Fisik", doc6Widths[2]),
              createHeaderCell("Catatan Analisis Mandiri Siswa", doc6Widths[3]),
            ],
          }),
          ...unitLKPD.tabelPengamatan.map(
            (row) =>
              new TableRow({
                cantSplit: true,
                children: [
                  createCell(String(row.no), doc6Widths[0], AlignmentType.CENTER, true),
                  createCell(row.variabel, doc6Widths[1]),
                  createCell(row.panduanFisik || "..................................................", doc6Widths[2]),
                  createCell("..................................................", doc6Widths[3]),
                ],
              })
          ),
        ],
      }),
      createBoldParagraph("C. PERTANYAAN REFLEKTIF TINGKAT TINGGI (HOTS):", 120, 40),
      ...unitLKPD.pertanyaanHOTS.map(
        (p) =>
          new Paragraph({
            spacing: { before: 30, after: 30 },
            children: [
              new TextRun({
                text: `${p.no}. (${p.level}) ${p.pertanyaan}\nJawab: \n................................................................................................................................................\n`,
                size: 17,
                font: "Arial",
              }),
            ],
          })
      ),
    ];
  };

  const section6Children = units.flatMap((u, idx) => [
    ...createSingleLKPDDocx(u.doc6LKPD, u.unitNumber),
    ...(idx < units.length - 1 ? [new Paragraph({ pageBreakBefore: true, text: "" })] : []),
  ]);

  // -------------------------------------------------------------
  // SECTION 7: KKTP (RUBRIK INTERVAL KUALITATIF) - ALL UNITS
  // -------------------------------------------------------------
  const doc7Widths = [2155, 1800, 1800, 1800, 1800];

  const createSingleKKTPDocx = (unitKKTP: typeof doc7KKTP, uNum: number) => {
    return [
      ...createKopSuratDocx(
        input,
        `KRITERIA KETERCAPAIAN TUJUAN PEMBELAJARAN (KKTP) - UNIT ${uNum}`,
        "Standar Asesmen PPA Revisi 2025: Rubrik Interval Kualitatif (Tanpa KKM Angka Tunggal Mati)",
        logoBytes,
        logoKananBytes
      ),
      new Paragraph({
        spacing: { before: 40, after: 60 },
        children: [
          new TextRun({
            text: `Tujuan Pembelajaran (${unitKKTP.kodeTP}): ${unitKKTP.tujuanPembelajaran}`,
            bold: true,
            size: 18,
            font: "Arial",
          }),
        ],
      }),
      new Table({
        width: { size: TOTAL_TABLE_WIDTH_DXA, type: WidthType.DXA },
        layout: TableLayoutType.FIXED,
        columnWidths: doc7Widths,
        borders: standardBorder,
        rows: [
          new TableRow({
            tableHeader: true,
            cantSplit: true,
            children: [
              createHeaderCell("Kriteria Ketercapaian Kompetensi", doc7Widths[0]),
              createHeaderCell("Baru Berkembang\n(0% - 40%)", doc7Widths[1]),
              createHeaderCell("Layak / Cukup\n(41% - 65%)", doc7Widths[2]),
              createHeaderCell("Cakap / Memenuhi\n(66% - 85%)", doc7Widths[3]),
              createHeaderCell("Mahir\n(86% - 100%)", doc7Widths[4]),
            ],
          }),
          ...unitKKTP.indikatorRubrik.map(
            (rb) =>
              new TableRow({
                cantSplit: true,
                children: [
                  createCell(rb.kriteria, doc7Widths[0], AlignmentType.LEFT, true),
                  createCell(rb.baruBerkembang, doc7Widths[1]),
                  createCell(rb.layakCukup, doc7Widths[2]),
                  createCell(rb.cakapMemenuhi, doc7Widths[3]),
                  createCell(rb.mahir, doc7Widths[4]),
                ],
              })
          ),
        ],
      }),
      createBoldParagraph("PEDOMAN TINDAK LANJUT ASESMEN FORMATIF / SUMATIF:", 120, 40),
      new Paragraph({
        children: [
          new TextRun({
            text: "• 0% - 40% (Baru Berkembang): Remedial Total — bimbingan ulang intensif secara individual.",
            size: 17,
            font: "Arial",
          }),
        ],
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "• 41% - 65% (Layak/Cukup): Remedial Terarah — tutor sebaya pada indikator yang belum tuntas.",
            size: 17,
            font: "Arial",
          }),
        ],
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "• 66% - 85% (Cakap/Memenuhi): Tuntas — mencapai target SKL dan melanjutkan ke TP berikutnya.",
            size: 17,
            font: "Arial",
          }),
        ],
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "• 86% - 100% (Mahir): Tuntas dengan Pengayaan — tantangan pemecahan masalah dan proyek lanjutan.",
            size: 17,
            font: "Arial",
          }),
        ],
      }),
      new Paragraph({ text: "", spacing: { before: 180, after: 120 } }),
      createSignatureBlockDocx(input),
    ];
  };

  const section7Children = units.flatMap((u, idx) => [
    ...createSingleKKTPDocx(u.doc7KKTP, u.unitNumber),
    ...(idx < units.length - 1 ? [new Paragraph({ pageBreakBefore: true, text: "" })] : []),
  ]);

  // -------------------------------------------------------------
  // SECTION 8: KISI-KISI PENULISAN SOAL ASESMEN (ALL UNITS)
  // -------------------------------------------------------------
  // No. is tightly constrained to 420 dxa
  const doc8Widths = [420, 2435, 1500, 2700, 700, 800, 800];
  const allKisiKisiRows = units.flatMap((u, uIdx) =>
    u.doc8KisiKisi.map((k, kIdx) => ({
      ...k,
      no: uIdx * 2 + kIdx + 1,
    }))
  );

  const section8Children = [
    ...createKopSuratDocx(
      input,
      "KISI-KISI PENULISAN SOAL ASESMEN (TEST BLUEPRINT MATRIX)",
      "Matriks Penjamin Mutu Soal Asesmen (Distribusi Level Kognitif Bloom & Indikator IKTP Seluruh Unit)",
      logoBytes,
      logoKananBytes
    ),
    new Table({
      width: { size: TOTAL_TABLE_WIDTH_DXA, type: WidthType.DXA },
      layout: TableLayoutType.FIXED,
      columnWidths: doc8Widths,
      borders: standardBorder,
      rows: [
        new TableRow({
          tableHeader: true,
          cantSplit: true,
          children: [
            createHeaderCell("No.", doc8Widths[0]),
            createHeaderCell("Elemen & TP", doc8Widths[1]),
            createHeaderCell("Materi Pokok", doc8Widths[2]),
            createHeaderCell("Indikator Soal (IKTP)", doc8Widths[3]),
            createHeaderCell("Level", doc8Widths[4]),
            createHeaderCell("Bentuk", doc8Widths[5]),
            createHeaderCell("Skor", doc8Widths[6]),
          ],
        }),
        ...allKisiKisiRows.map(
          (k) =>
            new TableRow({
              cantSplit: true,
              children: [
                createCell(String(k.no), doc8Widths[0], AlignmentType.CENTER, true),
                createCell(`${k.elemenCP}\n[${k.kodeTP}]`, doc8Widths[1]),
                createCell(k.materiPokok, doc8Widths[2]),
                createCell(k.indikatorSoal, doc8Widths[3]),
                createCell(k.levelKognitif, doc8Widths[4], AlignmentType.CENTER, true),
                createCell(k.bentukSoal, doc8Widths[5], AlignmentType.CENTER),
                createCell(String(k.bobotSkor), doc8Widths[6], AlignmentType.CENTER, true),
              ],
            })
        ),
      ],
    }),
    new Paragraph({ text: "", spacing: { before: 180, after: 120 } }),
    createSignatureBlockDocx(input),
  ];

  // -------------------------------------------------------------
  // SECTION 9: NASKAH BANK SOAL & PEDOMAN PENSKORAN - ALL UNITS
  // -------------------------------------------------------------
  const doc9RubrikWidths = [7355, 2000];

  const createSingleBankSoalDocx = (unitBankSoal: typeof doc9BankSoal, uNum: number, uTitle: string) => {
    return [
      ...createKopSuratDocx(
        input,
        `NASKAH BANK SOAL DAN PEDOMAN PENSKORAN - UNIT ${uNum}`,
        "Instrumen Evaluasi Hasil Belajar Model Asesmen Nasional (PGK & Studi Kasus HOTS)",
        logoBytes,
        logoKananBytes
      ),
      createBoldParagraph(`UNIT ${uNum}: ${uTitle}`, 40, 20),
      createBoldParagraph("STIMULUS BACAAN / KASUS KONTEKSTUAL:", 40, 20),
      createItalicParagraph(`"${unitBankSoal.stimulusUtama}"`, 10, 80),
      createBoldParagraph("BAGIAN I: SOAL PILIHAN GANDA KOMPLEKS (PGK)", 80, 40),
      ...unitBankSoal.soalPGK.map((soal) => [
        createBoldParagraph(
          `Soal No. ${soal.noSoal} - Bobot Poin Asesmen`,
          40,
          20
        ),
        new Paragraph({
          spacing: { before: 10, after: 20 },
          children: [new TextRun({ text: soal.pertanyaan, size: 17, font: "Arial" })],
        }),
        ...soal.pilihan.map(
          (p) =>
            new Paragraph({
              spacing: { before: 5, after: 5 },
              children: [
                new TextRun({
                  text: `   [ ${p.isCorrect ? "✓" : " "} ] ${p.kode}. ${p.teks}`,
                  size: 17,
                  font: "Arial",
                }),
              ],
            })
        ),
        createBoldParagraph(`Kunci Jawaban: ${soal.kunciJawaban}`, 20, 10),
        createItalicParagraph(`Pembahasan: ${soal.pembahasan}`, 5, 40),
      ]).flat(),
      createBoldParagraph("BAGIAN II: SOAL URAIAN STUDI KASUS PENALARAN TINGGI (HOTS)", 80, 40),
      ...unitBankSoal.soalUraian.map((uraian) => [
        createBoldParagraph(
          `Soal No. ${uraian.noSoal} (${uraian.level})`,
          40,
          20
        ),
        new Paragraph({
          spacing: { before: 10, after: 20 },
          children: [new TextRun({ text: uraian.pertanyaan, size: 17, font: "Arial" })],
        }),
        createBoldParagraph(`Kunci Jawaban Model: ${uraian.kunciJawaban}`, 20, 10),
        createItalicParagraph(`Pembahasan Analitis: ${uraian.pembahasan}`, 5, 20),
        new Table({
          width: { size: TOTAL_TABLE_WIDTH_DXA, type: WidthType.DXA },
          layout: TableLayoutType.FIXED,
          columnWidths: doc9RubrikWidths,
          borders: standardBorder,
          rows: [
            new TableRow({
              tableHeader: true,
              cantSplit: true,
              children: [
                createHeaderCell("Kriteria Jawaban Murid", doc9RubrikWidths[0]),
                createHeaderCell("Skor", doc9RubrikWidths[1]),
              ],
            }),
            ...uraian.rubrikPenskoran.map(
              (p) =>
                new TableRow({
                  cantSplit: true,
                  children: [
                    createCell(p.kriteria, doc9RubrikWidths[0]),
                    createCell(String(p.skor), doc9RubrikWidths[1], AlignmentType.CENTER, true),
                  ],
                })
            ),
          ],
        }),
        new Paragraph({ text: "", spacing: { before: 60, after: 60 } }),
      ]).flat(),
      new Paragraph({ text: "", spacing: { before: 180, after: 120 } }),
      createSignatureBlockDocx(input),
    ];
  };

  const section9Children = units.flatMap((u, idx) => [
    ...createSingleBankSoalDocx(u.doc9BankSoal, u.unitNumber, u.unitTitle),
    ...(idx < units.length - 1 ? [new Paragraph({ pageBreakBefore: true, text: "" })] : []),
  ]);

  // Optional Chapter Divider Covers (Bab I s.d. Bab IX)
  const shouldIncludeBabCovers = input.showBabCover !== false;

  const bab1CoverChildren = createBabCoverDocx(
    input,
    "BAB I",
    "ANALISIS CAPAIAN PEMBELAJARAN (CP) DAN PERUMUSAN TUJUAN PEMBELAJARAN (TP)",
    "Dekonstruksi Kata Kerja Operasional (KKO Bloom C1-C6) & Konten Esensial BSKAP 046/2025",
    logoBytes,
    logoKananBytes
  );
  const bab2CoverChildren = createBabCoverDocx(
    input,
    "BAB II",
    "ALUR TUJUAN PEMBELAJARAN (ATP)",
    "Distribusi Sekuensial Berkelanjutan & Pemetaan Target Karakter Resmi 2025/2026",
    logoBytes,
    logoKananBytes
  );
  const bab3CoverChildren = createBabCoverDocx(
    input,
    "BAB III",
    "PROGRAM TAHUNAN (PROTA)",
    "Distribusi Alokasi Jam Pelajaran Resmi (36 Minggu Efektif Standar Sesuai Struktur Kurikulum)",
    logoBytes,
    logoKananBytes
  );
  const bab4CoverChildren = createBabCoverDocx(
    input,
    "BAB IV",
    "PROGRAM SEMESTER (PROSEM)",
    "Matriks Distribusi Jam Pelajaran Mingguan per Bulan (Semester Ganjil & Genap)",
    logoBytes,
    logoKananBytes
  );
  const bab5CoverChildren = createBabCoverDocx(
    input,
    "BAB V",
    "MODUL AJAR LENGKAP (DEEP LEARNING)",
    isKemenag
      ? "Pendekatan Pembelajaran Mendalam Terintegrasi Kurikulum Berbasis Cinta (KBC Sintaks FIDS)"
      : "Pendekatan Pembelajaran Mendalam (Mindful, Meaningful, Joyful & 4 Olah)",
    logoBytes,
    logoKananBytes
  );
  const bab6CoverChildren = createBabCoverDocx(
    input,
    "BAB VI",
    "LEMBAR KERJA PESERTA DIDIK (LKPD)",
    "Penyelidikan Kontekstual & Penalaran Kritis Berbasis Masalah Nyata",
    logoBytes,
    logoKananBytes
  );
  const bab7CoverChildren = createBabCoverDocx(
    input,
    "BAB VII",
    "KRITERIA KETERCAPAIAN TUJUAN PEMBELAJARAN (KKTP)",
    "Standar Asesmen PPA Revisi 2025: Rubrik Interval Kualitatif (Tanpa KKM Angka Tunggal Mati)",
    logoBytes,
    logoKananBytes
  );
  const bab8CoverChildren = createBabCoverDocx(
    input,
    "BAB VIII",
    "KISI-KISI PENULISAN SOAL ASESMEN",
    "Matriks Penjamin Mutu Soal Asesmen (Distribusi Level Kognitif Bloom & Indikator IKTP)",
    logoBytes,
    logoKananBytes
  );
  const bab9CoverChildren = createBabCoverDocx(
    input,
    "BAB IX",
    "NASKAH BANK SOAL DAN PEDOMAN PENSKORAN",
    "Instrumen Evaluasi Hasil Belajar Model Asesmen Nasional (PGK & Studi Kasus HOTS)",
    logoBytes,
    logoKananBytes
  );

  const sections: { properties: typeof defaultSectionProps; children: (Paragraph | Table)[] }[] = [
    { properties: defaultSectionProps, children: section0CoverChildren },
  ];

  if (shouldIncludeBabCovers) {
    sections.push(
      { properties: defaultSectionProps, children: bab1CoverChildren },
      { properties: defaultSectionProps, children: section1Children },
      { properties: defaultSectionProps, children: bab2CoverChildren },
      { properties: defaultSectionProps, children: section2Children },
      { properties: defaultSectionProps, children: bab3CoverChildren },
      { properties: defaultSectionProps, children: section3Children },
      { properties: defaultSectionProps, children: bab4CoverChildren },
      { properties: defaultSectionProps, children: section4Children },
      { properties: defaultSectionProps, children: bab5CoverChildren },
      { properties: defaultSectionProps, children: section5Children },
      { properties: defaultSectionProps, children: bab6CoverChildren },
      { properties: defaultSectionProps, children: section6Children },
      { properties: defaultSectionProps, children: bab7CoverChildren },
      { properties: defaultSectionProps, children: section7Children },
      { properties: defaultSectionProps, children: bab8CoverChildren },
      { properties: defaultSectionProps, children: section8Children },
      { properties: defaultSectionProps, children: bab9CoverChildren },
      { properties: defaultSectionProps, children: section9Children }
    );
  } else {
    sections.push(
      { properties: defaultSectionProps, children: section1Children },
      { properties: defaultSectionProps, children: section2Children },
      { properties: defaultSectionProps, children: section3Children },
      { properties: defaultSectionProps, children: section4Children },
      { properties: defaultSectionProps, children: section5Children },
      { properties: defaultSectionProps, children: section6Children },
      { properties: defaultSectionProps, children: section7Children },
      { properties: defaultSectionProps, children: section8Children },
      { properties: defaultSectionProps, children: section9Children }
    );
  }

  // Construct Document with Cover (Section 0) and sections
  const doc = new Document({
    sections,
  });

  return await Packer.toBlob(doc);
}
