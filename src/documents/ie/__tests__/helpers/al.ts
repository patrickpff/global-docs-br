export function makeValidALIE(): string {
    // Required prefix from Alagoas
    const prefix = "24";

    // Third digit (taxpayer type: 0-3)
    const validTypes = ["0", "3", "5", "7"];
    const typeDigit = validTypes[Math.floor(Math.random() * validTypes.length)];

    // Generate 5 digits from the base
    const randomDigits = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * 10)
    ).join("");

    const base = prefix + typeDigit + randomDigits;

    const weights = [9, 8, 7, 6, 5, 4, 3, 2];

    let sum = 0;
    for (let i = 0; i < 8; i++) {
        sum += Number(base[i]) * weights[i];
    }

    const mod = sum % 11;
    
    // Get the DV from the numbers known
    const dv = mod < 2 ? 0 : 11 - mod;
    
    return base + dv;
}
