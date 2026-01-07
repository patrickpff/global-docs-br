export function validatePassport(passport: string): boolean {
    if (!passport) return false;

    const cleaned = passport
        .replace(/\s+/g, "")
        .replace(/[-./]/g, "")
        .toUpperCase();

    // Brazilian passport: 2 letters + 6 digits
    return /^[A-Z]{2}\d{6}$/.test(cleaned);
}
