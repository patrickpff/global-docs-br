export function makeValidGOIE(): string {
    // Valid prefixes
    const prefixes = ["10", "11", "15"];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];

    // Generate the 5 random digits for the base (total base size = 7)
    const randomDigits = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * 10)
    ).join("");

    const base = prefix + randomDigits;

    // ========================
    // DV1
    // ========================
    const weightsDV1 = [9, 8, 7, 6, 5, 4, 3];
    let sum1 = 0;

    for (let i = 0; i < 7; i++) {
        sum1 += Number(base[i]) * weightsDV1[i];
    }

    const mod1 = sum1 % 11;

    let dv1: number;

    if (mod1 === 0) {
        dv1 = 0;
    } else if (mod1 === 1) {
        const baseNumber = Number(base);
        dv1 = baseNumber >= 10103105 && baseNumber <= 10119997 ? 1 : 0;
    } else {
        dv1 = 11 - mod1;
    }

    // ========================
    // DV2
    // ========================
    const baseWithDV1 = base + dv1;
    const weightsDV2 = [10, 9, 8, 7, 6, 5, 4, 3];
    let sum2 = 0;

    for (let i = 0; i < 8; i++) {
        sum2 += Number(baseWithDV1[i]) * weightsDV2[i];
    }

    const mod2 = sum2 % 11;
    const dv2 = mod2 < 2 ? 0 : 11 - mod2;

    return base + dv1 + dv2;
}
