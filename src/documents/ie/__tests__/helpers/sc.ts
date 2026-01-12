export function makeValidSCIE(): string {
    // Generate 8 base digits
    const base = Array.from({ length: 8 }, () =>
        Math.floor(Math.random() * 10)
    ).join("");

    // Weights defined by Sintegra-SC
    const weights = [9, 8, 7, 6, 5, 4, 3, 2];

    let sum = 0;
    for (let i = 0; i < 8; i++) {
        sum += Number(base[i]) * weights[i];
    }

    const mod = sum % 11;
    const dv = mod < 2 ? 0 : 11 - mod;

    return base + dv;
}
