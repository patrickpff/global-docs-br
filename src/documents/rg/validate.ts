export function validateRG(rg: string): boolean {
    if (!rg) return false;

    // Remove formatting characters and whitespace
    const cleaned = rg
        .replace(/\s+/g, "")
        .replace(/[.\-]/g, "")
        .toUpperCase();

    // RG must be between 5 and 14 characters long
    if (cleaned.length < 5 || cleaned.length > 14) return false;

    // RG can only contain digits and possibly an 'X' at the end
    if (!/^[0-9X]+$/.test(cleaned)) return false;

    return true;
}