export function makeValidMTIE(): string {
    // Generate 9 digits for base
    const base = Array.from({ length: 9 }, () =>
        Math.floor(Math.random() * 10)
    ).join("");

    const weights = [3, 4, 5, 6, 7, 8, 9, 10, 11];

    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += Number(base[i]) * weights[i];
    }

    const mod = sum % 11;
    const dv = mod === 0 || mod === 1 ? 0 : 11 - mod;

    return base + dv;
}
