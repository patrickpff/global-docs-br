export function maskCNH(cnh: string): string {
    const cleaned = cnh.replace(/\D/g, "");
    let masked = "";
    for (let i = 0; i < cleaned.length && i < 11; i++) {
        if (i === 2 || i === 5) {
            masked += ".";
        } else if (i === 8) {
            masked += "-";
        }
        masked += cleaned.charAt(i);
    }
    return masked;
}