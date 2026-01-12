export function makeValidMAIE(): string {
    // Fix prefix for MA
    const prefix = "12";

    // Generate 6 random digits for the base
    const randomDigits = Array.from({ length: 6 }, () =>
        Math.floor(Math.random() * 10)
    ).join("");

    const base = prefix + randomDigits; // 8 digits

    const weights = [9, 8, 7, 6, 5, 4, 3, 2];
    let sum = 0;

    for (let i = 0; i < 8; i++) {
        sum += Number(base[i]) * weights[i];
    }

    const mod = sum % 11;
    const dv = mod < 2 ? 0 : 11 - mod;

    return base + dv;
}
