export function maskVoterRegistration(voterRegisration: string): string {
    if (!voterRegisration) return "";

    const digits = voterRegisration.replace(/\D/g, '');

    let masked = "";

    for (let i=0; i < digits.length && i < 12; i++) {
        if (i === 4 || i === 8) {
            masked += " ";
        }
        masked += digits[i];
    }

    return masked;
}