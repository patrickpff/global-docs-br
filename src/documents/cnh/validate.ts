export function validateCNH(input: string): boolean {
    if (!input) return false;

    const cnh = input.replace(/\D/g, '');

    // CNH must be exactly 11 digits
    if (cnh.length !== 11) return false;

    // Reject known invalid patterns
    if (/^(\d)\1{10}$/.test(cnh)) return false;

    const digits = cnh.split('').map(Number);
    const base = digits.slice(0, 9);

    // First check digit
    let sum1 = 0;
    for (let i = 0, weight = 9; i < 9; i++, weight--) {
        sum1 += base[i] * weight;
    }

    let dv1 = sum1 % 11;
    let adjustment = 0;

    if (dv1 === 10) {
        dv1 = 0;
        adjustment = 2;
    }

    if (digits[9] !== dv1) return false;

    // Second check digit
    let sum2 = 0;
    for (let i = 0, weight = 1; i < 9; i++, weight++) {
        sum2 += base[i] * weight;
    }

    let dv2 = (sum2 - adjustment) % 11;
    if (dv2 < 0) dv2 += 11;

    if (dv2 === 10) dv2 = 0;

    if (digits[10] !== dv2) return false;

    return true;
}
