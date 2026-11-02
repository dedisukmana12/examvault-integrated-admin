// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
const fs = require('fs');

function patchSignatureBlock() {
  let f = 'src/components/SignatureBlock.tsx';
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/className="w-5\/12 text-left"/g, 'className="w-5/12 text-center flex flex-col items-center"');
  content = content.replace(/className="h-20 print:h-16 flex items-end"/g, 'className="h-24 print:h-20 flex items-end justify-center w-full"');
  content = content.replace(/<div>\s*<p className="font-bold underline text-slate-900 print:text-black">/g, '<div className="w-full">\n              <p className="font-bold underline text-slate-900 print:text-black">');
  fs.writeFileSync(f, content);
  console.log('Patched SignatureBlock.tsx');
}

function patchCovers() {
  const covers = ['src/components/documents/Doc0Cover.tsx', 'src/components/documents/BabCover.tsx'];
  covers.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    
    // Change Penyusun: to "Mengetahui \n Kepala Madrasah/Sekolah"
    
    // 1. Replace the Penyusun part
    content = content.replace(
      /<p className="text-\[11px\] text-slate-500 print:text-black font-bold uppercase tracking-wider">Penyusun:<\/p>/g,
      `<div className="text-[11px] text-slate-500 print:text-black font-bold uppercase tracking-wider leading-relaxed">
                  <p>Disusun Oleh</p>
                  <p>Guru Mata Pelajaran</p>
                </div>`
    );

    // 2. Replace the Mengetahui Kepala part
    content = content.replace(
      /<p className="text-\[11px\] text-slate-500 print:text-black font-bold uppercase tracking-wider">Mengetahui Kepala:<\/p>/g,
      `<div className="text-[11px] text-slate-500 print:text-black font-bold uppercase tracking-wider leading-relaxed">
                  <p>Mengetahui</p>
                  <p>Kepala {input.jalur === "Kemenag" ? "Madrasah" : "Sekolah"}</p>
                </div>`
    );

    fs.writeFileSync(f, content);
    console.log(`Patched ${f}`);
  });
}

patchSignatureBlock();
patchCovers();

