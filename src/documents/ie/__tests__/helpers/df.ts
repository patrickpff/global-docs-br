export function makeValidDFIE(): string {
    // Prefixo obrigatório do DF
    const prefix = "07";

    // Gera os 9 dígitos seguintes (total base = 11)
    const randomDigits = Array.from({ length: 9 }, () =>
        Math.floor(Math.random() * 10)
    ).join("");

    const base = prefix + randomDigits; // 11 dígitos

    // ========================
    // DV1
    // ========================
    const weightsDV1 = [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let sum1 = 0;

    for (let i = 0; i < 11; i++) {
        sum1 += Number(base[i]) * weightsDV1[i];
    }

    const mod1 = sum1 % 11;
    const dv1 = mod1 < 2 ? 0 : 11 - mod1;

    // ========================
    // DV2
    // ========================
    const baseWithDV1 = base + dv1;
    const weightsDV2 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let sum2 = 0;

    for (let i = 0; i < 12; i++) {
        sum2 += Number(baseWithDV1[i]) * weightsDV2[i];
    }

    const mod2 = sum2 % 11;
    const dv2 = mod2 < 2 ? 0 : 11 - mod2;

    return base + dv1 + dv2;
}
