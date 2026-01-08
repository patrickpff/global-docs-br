export function makeValidAMIE(): string {
    // Generate 8 random digits for the base
    const base = Array.from({ length: 8 }, () =>
        Math.floor(Math.random() * 10)
    ).join("");

    const weights = [9, 8, 7, 6, 5, 4, 3, 2];

    let sum = 0;
    for (let i = 0; i < 8; i++) {
        sum += Number(base[i]) * weights[i];
    }

    const mod = sum % 11;
    const dv = mod < 2 ? 0 : 11 - mod;

    return base + dv;
}
