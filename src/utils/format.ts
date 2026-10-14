/** 未入力（null / undefined / NaN）は '-' にして、「NaN」「null」を画面に出さない */
export function formatWeight(weight: number | null | undefined): string {
  return weight == null || Number.isNaN(weight) ? '-' : `${weight}kg`;
}

export function formatReps(reps: number | null | undefined): string {
  return reps == null || Number.isNaN(reps) ? '-' : `${reps}回`;
}

/** セット1つを「60kg×10回」の形にする。片方が未入力なら「-×10回」「60kg×-」 */
export function formatSet(set: { weight: number | null; reps: number | null }): string {
  return `${formatWeight(set.weight)}×${formatReps(set.reps)}`;
}

/** フォームの入力文字列を数値にする。空欄・数値でない文字列は null（未入力）として扱う */
export function parseOptionalNumber(text: string, integer = false): number | null {
  const trimmed = text.trim();
  if (trimmed === '') return null;
  const n = Number(trimmed);
  if (!Number.isFinite(n) || n < 0) return null;
  return integer ? Math.trunc(n) : n;
}

/** DB の値をフォームの入力欄の文字列にする。未入力は空欄 */
export function numberToInput(value: number | null | undefined): string {
  return value == null || Number.isNaN(value) ? '' : String(value);
}
