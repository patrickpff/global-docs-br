export function makeValidAPIE(): string {
    // Prefixo obrigatório do Amapá
    const prefix = "03";

    // Gera os 6 dígitos restantes da base (total base = 8)
    const randomDigits = Array.from({ length: 6 }, () =>
        Math.floor(Math.random() * 10)
    ).join("");

    const base = prefix + randomDigits; // 8 dígitos

    const weights = [9, 8, 7, 6, 5, 4, 3, 2];

    let sum = 0;
    for (let i = 0; i < 8; i++) {
        sum += Number(base[i]) * weights[i];
    }

    const mod = sum % 11;
    const dv = mod < 2 ? 0 : 11 - mod;

    return base + dv;
}
