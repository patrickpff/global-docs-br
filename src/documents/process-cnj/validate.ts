export function validateProcessCNJ(processCNJ: string): boolean {
    if (!processCNJ) return false;

    const digits = processCNJ.replace(/\D/g, '');

    // CNJ process number must have exactly 20 digits
    if (digits.length !== 20) return false;

    const sequence = digits.slice(0, 7);
    const dv = digits.slice(7, 9);
    const year = digits.slice(9, 13);
    const judiciary = digits.slice(13, 14);
    const tribunal = digits.slice(14, 16);
    const origin = digits.slice(16, 20);

    // Basic structural checks
    if (/^0{7}$/.test(sequence)) return false;
    if (Number(year) < 1900 || Number(year) > new Date().getFullYear()) return false;

    // Calculate check digits using MOD 97
    const base = sequence + year + judiciary + tribunal + origin + '00';

    const mod = mod97(base);
    const calculatedDV = (98 - mod).toString().padStart(2, '0');

    return dv === calculatedDV;
}

function mod97(numberString: string): number {
    let remainder = 0;

    for (const digit of numberString) {
        remainder = (remainder * 10 + parseInt(digit, 10)) % 97;
    }

    return remainder;
}