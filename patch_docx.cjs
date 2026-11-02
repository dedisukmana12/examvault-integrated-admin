// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
const fs = require('fs');

let f = 'src/utils/docxExporter.ts';
let content = fs.readFileSync(f, 'utf8');

// Replace the Table layout in createSignatureBlockDocx
content = content.replace(
  /new Paragraph\({\s*children: \[\s*new TextRun\(\{ text: "Mengetahui,", size: 18, font: "Arial" \}\),\s*\],\s*}\),\s*new Paragraph\({\s*children: \[\s*new TextRun\({\s*text: \`Kepala \$\{input\.namaSatuan\}\`,\s*bold: true,\s*size: 18,\s*font: "Arial",\s*}\),\s*\],\s*}\),/g,
  `new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Mengetahui,", size: 18, font: "Arial" })] }),
              new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: \`Kepala \${input.jalur === "Kemenag" ? "Madrasah" : "Sekolah"}\`, bold: true, size: 18, font: "Arial" })] }),`
);

content = content.replace(
  /new Paragraph\({\s*children: \[\s*new TextRun\({\s*text: \`\$\{kota\}, \$\{tanggal\}\`,\s*size: 18,\s*font: "Arial",\s*}\),\s*\],\s*}\),\s*new Paragraph\({\s*children: \[\s*new TextRun\({\s*text: "Guru Mata Pelajaran",\s*bold: true,\s*size: 18,\s*font: "Arial",\s*}\),\s*\],\s*}\),/g,
  `new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: \`\${kota}, \${tanggal}\`, size: 18, font: "Arial" })] }),
              new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Guru Mata Pelajaran", bold: true, size: 18, font: "Arial" })] }),`
);

content = content.replace(
  /new Paragraph\({\s*children: \[\s*new TextRun\({\s*text: input\.namaKepala \|\| "Nama Kepala Sekolah\/Madrasah",\s*bold: true,\s*underline: \{\s*type: UnderlineType\.SINGLE,\s*color: "000000",\s*\},\s*size: 18,\s*font: "Arial",\s*}\),\s*\],\s*}\),/g,
  `new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: input.namaKepala || "Nama Kepala Sekolah/Madrasah", bold: true, underline: { type: UnderlineType.SINGLE, color: "000000" }, size: 18, font: "Arial" })] }),`
);

content = content.replace(
  /new Paragraph\({\s*children: \[\s*new TextRun\({\s*text: \`NIP\. \$\{input\.nipKepala \|\| "-"\}\`,\s*size: 18,\s*font: "Courier New",\s*}\),\s*\],\s*}\),/g,
  `new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: \`NIP. \${input.nipKepala || "-"}\`, size: 18, font: "Courier New" })] }),`
);

content = content.replace(
  /new Paragraph\({\s*children: \[\s*new TextRun\({\s*text: input\.namaGuru \|\| "Nama Guru Mata Pelajaran",\s*bold: true,\s*underline: \{\s*type: UnderlineType\.SINGLE,\s*color: "000000",\s*\},\s*size: 18,\s*font: "Arial",\s*}\),\s*\],\s*}\),/g,
  `new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: input.namaGuru || "Nama Guru Mata Pelajaran", bold: true, underline: { type: UnderlineType.SINGLE, color: "000000" }, size: 18, font: "Arial" })] }),`
);

content = content.replace(
  /new Paragraph\({\s*children: \[\s*new TextRun\({\s*text: \`NIP\. \$\{input\.nipGuru \|\| "-"\}\`,\s*size: 18,\s*font: "Courier New",\s*}\),\s*\],\s*}\),/g,
  `new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: \`NIP. \${input.nipGuru || "-"}\`, size: 18, font: "Courier New" })] }),`
);


// Ensure AlignmentType is imported
if (!content.includes('AlignmentType')) {
  content = content.replace(/Paragraph,/g, 'Paragraph, AlignmentType,');
}

fs.writeFileSync(f, content);
console.log('Patched docxExporter.ts');
