export function makeValidPRIE(): string {
    // Generate 8 base digits
    const base = Array.from({ length: 8 }, () =>
        Math.floor(Math.random() * 10)
    ).join("");

    // -------------------------
    // Generate DV1
    // -------------------------
    const weightsDV1 = [3, 2, 7, 6, 5, 4, 3, 2];
    let sum1 = 0;

    for (let i = 0; i < 8; i++) {
        sum1 += Number(base[i]) * weightsDV1[i];
    }

    const mod1 = sum1 % 11;
    const dv1 = mod1 < 2 ? 0 : 11 - mod1;

    // -------------------------
    // Generate DV2
    // -------------------------
    const baseWithDV1 = base + dv1;
    const weightsDV2 = [4, 3, 2, 7, 6, 5, 4, 3, 2];
    let sum2 = 0;

    for (let i = 0; i < 9; i++) {
        sum2 += Number(baseWithDV1[i]) * weightsDV2[i];
    }

    const mod2 = sum2 % 11;
    const dv2 = mod2 < 2 ? 0 : 11 - mod2;

    return base + dv1 + dv2;
}
