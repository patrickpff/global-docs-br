export function makeValidSEIE(): string {
    // Generate 8 base digits
    const base = Array.from({ length: 8 }, () =>
        Math.floor(Math.random() * 10)
    ).join("");

    // Weights defined by SEFAZ-SE (Sintegra)
    const weights = [2, 7, 1, 2, 3, 4, 5, 6];

    let sum = 0;
    for (let i = 0; i < 8; i++) {
        sum += Number(base[i]) * weights[i];
    }

    const mod = sum % 11;
    let dv = 11 - mod;

    if (dv === 10 || dv === 11) {
        dv = 0;
    }

    return base + dv;
}
