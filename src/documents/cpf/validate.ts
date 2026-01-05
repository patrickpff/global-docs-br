export function validateCPF(cpf: string): boolean {
    const cleaned = cpf.replace(/\D/g, "");
    // CPF must be 11 digits and not all identical digits
    if (cleaned.length !== 11 || /^(\d)\1{10}$/.test(cleaned)) {
        return false;
    }
    
    // Validate first check digit
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cleaned.charAt(i)) * (10 - i);
    }

    let digit = (sum * 10) % 11;
    if (digit === 10) digit = 0;
    if (digit !== parseInt(cleaned.charAt(9))) return false;

    // Validate second check digit
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cleaned.charAt(i)) * (11 - i);
    }

    digit = (sum * 10) % 11;
    if (digit === 10) digit = 0;

    return digit === parseInt(cleaned.charAt(10));
}