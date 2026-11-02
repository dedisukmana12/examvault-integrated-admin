// Copyright (c) 2026 Dedi Sukmana - ASF (Autonomous Solution Factory). Proprietary; all rights reserved.
/**
 * Helper formatter untuk Fase dan Kelas agar bersih, tidak redundan,
 * dan sesuai estetika naskah resmi 2025/2026.
 *
 * Contoh:
 * input: fase="Fase E", kelas="Kelas X" -> "E / X" atau "E/X"
 * input: fase="Fase A", kelas="Kelas I" -> "A / I"
 * input: fase="Fase B", kelas="Kelas 4" -> "B / IV"
 */

export function cleanFase(fase: string): string {
  if (!fase) return "";
  return fase.replace(/^fase\s*/i, "").trim();
}

export function cleanKelas(kelas: string): string {
  if (!kelas) return "";
  return kelas.replace(/^kelas\s*/i, "").trim();
}

export function formatFaseKelasClean(fase: string, kelas: string): string {
  const f = cleanFase(fase);
  const k = cleanKelas(kelas);
  if (!f && !k) return "";
  if (!f) return k;
  if (!k) return f;
  return `${f} / ${k}`;
}

export function formatFaseKelasCompact(fase: string, kelas: string): string {
  const f = cleanFase(fase);
  const k = cleanKelas(kelas);
  if (!f && !k) return "";
  if (!f) return k;
  if (!k) return f;
  return `${f}/${k}`;
}
