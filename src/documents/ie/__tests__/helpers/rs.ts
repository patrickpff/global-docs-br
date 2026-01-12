export function makeValidRSIE(): string {
    // Generate the first 9 digits of the base
    const base = Array.from({ length: 9 }, () =>
        Math.floor(Math.random() * 10)
    ).join("");

    // Weights defined by SEFAZ-RS
    const weights = [3, 2, 9, 8, 7, 6, 5, 4, 3];

    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += Number(base[i]) * weights[i];
    }

    const mod = sum % 11;
    const dv = mod < 2 ? 0 : 11 - mod;

    return base + dv;
}
