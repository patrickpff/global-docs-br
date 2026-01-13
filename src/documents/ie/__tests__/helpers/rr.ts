export function makeValidRRIE(): string {
    // Generate 8 base digits
    const base = Array.from({ length: 8 }, () =>
        Math.floor(Math.random() * 10)
    ).join("");

    let sum = 0;
    for (let i = 0; i < 8; i++) {
        sum += Number(base[i]) * (i + 1);
    }

    const dv = sum % 9;
    return base + dv;
}
