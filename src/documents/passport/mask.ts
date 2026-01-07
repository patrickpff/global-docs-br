import { normalizeUppercase, removeSeparators } from "../../shared/normalize.js";

export function maskPassport(passport: string): string {
    if (!passport) return "";

    const cleaned = normalizeUppercase(removeSeparators(passport));

    const match = cleaned.match(/^([A-Z]{2})(\d{1,6})$/);
    if (!match) return passport;

    const letters = match[1];
    const numbers = match[2];

    return `${letters}${numbers}`;
}
