export function maskProcessCNJ(cnj: string): string {
    const digits = cnj.replace(/\D/g, '');

    if (digits.length <= 7) return digits;

    let masked = '';

    for (let i = 0; i < digits.length && i < 20; i++) {
        if (i === 7) masked += '-';
        else if (i === 9 || i === 13 || i === 14 || i === 16) masked += '.';

        masked += digits[i];
    }

    return masked;
}