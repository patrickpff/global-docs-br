export function makeValidMGIE(base11: string): string {
  // base has to be 11 digits long
  const base = base11.padStart(11, "0");

  // === DV1 ===
  const baseWithZero = base.slice(0, 3) + "0" + base.slice(3);
  let sum1 = 0;
  let weight = 1;

  for (const digit of baseWithZero) {
    const product = Number(digit) * weight;
    sum1 += Math.floor(product / 10) + (product % 10);
    weight = weight === 1 ? 2 : 1;
  }

  const dv1 = Math.ceil(sum1 / 10) * 10 - sum1;

  // === DV2 ===
  const fullBase = base + dv1;
  const weights = [3, 2, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  let sum2 = 0;

  for (let i = 0; i < 12; i++) {
    sum2 += Number(fullBase[i]) * weights[i];
  }

  const mod = sum2 % 11;
  const dv2 = mod < 2 ? 0 : 11 - mod;

  return base + dv1 + dv2;
}
