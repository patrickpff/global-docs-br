export function makeValidACIE(): string {
    // Prefixo obrigatório do Acre
    const prefix = "01";

    // Gera os 10 dígitos seguintes
    const randomDigits = Array.from({ length: 10 }, () =>
        Math.floor(Math.random() * 10)
    ).join("");

    const base = prefix + randomDigits; // 12 dígitos

    const weights = [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    let sum = 0;
    for (let i = 1; i <= 11; i++) {
        sum += Number(base[i]) * weights[i - 1];
    }

    const mod = sum % 11;
    const dv = mod < 2 ? 0 : 11 - mod;

    return base + dv;
}