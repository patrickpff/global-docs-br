export function makeValidRJIE(): string {
    // Generate the first 7 digits
    const base = Array.from({ length: 7 }, () =>
        Math.floor(Math.random() * 10)
    ).join("");

    // Weights defined by SEFAZ-RJ
    const weights = [2, 7, 6, 5, 4, 3, 2];

    let sum = 0;
    for (let i = 0; i < 7; i++) {
        sum += Number(base[i]) * weights[i];
    }

    const mod = sum % 11;
    const dv = mod < 2 ? 0 : 11 - mod;

    return base + dv;
}
