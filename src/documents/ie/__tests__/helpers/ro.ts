export function makeValidROIE(): string {
    // RO IE must start with state code 24
    const prefix = "24";

    // Generate the remaining 11 digits of the base
    const randomDigits = Array.from({ length: 11 }, () =>
        Math.floor(Math.random() * 10)
    ).join("");

    const base = prefix + randomDigits; // 13 digits

    // Weights defined by SEFAZ-RO
    const weights = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    let sum = 0;
    for (let i = 0; i < 13; i++) {
        sum += Number(base[i]) * weights[i];
    }

    const mod = sum % 11;
    const dv = mod < 2 ? 0 : 11 - mod;

    return base + dv;
}
