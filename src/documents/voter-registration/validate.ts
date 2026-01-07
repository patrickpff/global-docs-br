export function validateVoterRegistration(voterRegisration: string): boolean {
    if (!voterRegisration) return false;

    const digits = voterRegisration.replace(/\D/g, "");

    // Check if the voter registration has 12 digits
    if (digits.length !== 12) return false;

    const base = digits.slice(0, 8);
    const uf = digits.slice(8, 10);
    const dv = digits.slice(10, 12);

    const ufNumber = Number(uf);

    // UF valid goes from 1 to 28
    if (ufNumber < 1 || ufNumber > 28) return false;

    // Validate first check digit
    let sum1 = 0;
    const base1 = base + uf;

    for (let i = 0, weight = 2; i < 10; i++, weight++) {
        sum1 += Number(base1[i]) * weight;
    }

    let dv1 = normalizeDV(sum1 % 11, ufNumber);

    // Validate second check digit
    let sum2 = 0;
    const base2 = uf + dv1.toString();

    for (let i = 0, weight = 7; i < 3; i++, weight++) {
        sum2 += Number(base2[i]) * weight;
    }

    let dv2 = normalizeDV(sum2 % 11, ufNumber);

    return dv === `${dv1}${dv2}`;
}

function normalizeDV(rest: number, ufNumber: number): number {
    if ((ufNumber === 1 || ufNumber === 2) && rest === 10) return 0;
    if ((ufNumber === 1 || ufNumber === 2) && rest === 0) return 1;

    return rest;
}