export function validateCNPJ(cnpj: string): boolean {
    if (!cnpj) return false;

    const cleaned = cnpj.replace(/\D/g, "");
    if (cleaned.length !== 14 || /^(\d)\1{13}$/.test(cleaned)) return false;

    if(/^(\d)\1{13}$/.test(cleaned)) return false;

    const digits = cleaned.split("").map(Number);

    // Validate first check digit
    const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const sum1 = digits.slice(0, 12).reduce(
        (sum, digit, index) => sum + digit * weights1[index], 
        0
    );
    const remainder1 = sum1 % 11;
    const checkDigit1 = remainder1 < 2 ? 0 : 11 - remainder1;
    if (checkDigit1 !== digits[12]) return false;

    // Validate second check digit
    const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const sum2 = digits.slice(0, 13).reduce(
        (sum, digit, index) => sum + digit * weights2[index], 
        0
    );
    const remainder2 = sum2 % 11;
    const checkDigit2 = remainder2 < 2 ? 0 : 11 - remainder2;
    return checkDigit2 === digits[13];
}