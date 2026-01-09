export function makeValidBAIE(): string {
    // Decide o primeiro dígito (define o módulo)
    const firstDigitOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const firstDigit =
        firstDigitOptions[Math.floor(Math.random() * firstDigitOptions.length)];

    // Gera os outros 5 dígitos da base
    const rest = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * 10)
    ).join("");

    // Base sem DVs (6 dígitos)
    const base = firstDigit + rest;

    const useModulo10 = ["0", "1", "2", "3", "4", "5", "8"].includes(firstDigit);

    // ========================
    // Calcula DV2
    // ========================
    const weightsDV2 = [7, 6, 5, 4, 3, 2];
    let sumDV2 = 0;

    for (let i = 0; i < 6; i++) {
        sumDV2 += Number(base[i]) * weightsDV2[i];
    }

    let dv2: number;

    if (useModulo10) {
        dv2 = sumDV2 % 10;
    } else {
        const mod = sumDV2 % 11;
        dv2 = mod < 2 ? 0 : 11 - mod;
    }

    // ========================
    // Calcula DV1
    // ========================
    const baseWithDV2 = base + dv2;
    const weightsDV1 = [8, 7, 6, 5, 4, 3, 2];
    let sumDV1 = 0;

    for (let i = 0; i < 7; i++) {
        sumDV1 += Number(baseWithDV2[i]) * weightsDV1[i];
    }

    let dv1: number;

    if (useModulo10) {
        dv1 = sumDV1 % 10;
    } else {
        const mod = sumDV1 % 11;
        dv1 = mod < 2 ? 0 : 11 - mod;
    }

    return base + dv2 + dv1;
}
