export function makeValidSPIE(): string {
    // Generate first 8 base digits
    const base8 = Array.from({ length: 8 }, () =>
        Math.floor(Math.random() * 10)
    ).join("");

    // ========================
    // Calculate DV1 (9th digit)
    // ========================
    const weightsDV1 = [1, 3, 4, 5, 6, 7, 8, 10];
    let sum1 = 0;

    for (let i = 0; i < 8; i++) {
        sum1 += Number(base8[i]) * weightsDV1[i];
    }

    let dv1 = 11 - (sum1 % 11);
    if (dv1 === 10 || dv1 === 11) dv1 = 0;

    // Generate digits 10 and 11
    const extraDigits = Array.from({ length: 2 }, () =>
        Math.floor(Math.random() * 10)
    ).join("");

    const base11 = base8 + dv1 + extraDigits;

    // ========================
    // Calculate DV2 (12th digit)
    // ========================
    const weightsDV2 = [3, 2, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    let sum2 = 0;

    for (let i = 0; i < 11; i++) {
        sum2 += Number(base11[i]) * weightsDV2[i];
    }

    let dv2 = 11 - (sum2 % 11);
    if (dv2 === 10 || dv2 === 11) dv2 = 0;

    return base11 + dv2;
}
