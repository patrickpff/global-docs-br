import { normalizeUppercase, removeSeparators } from "../../shared/normalize.js";
import { isValidUF } from "../../shared/ufs.js";

export function validateCREA(crea: string): boolean {
    if (!crea) return false;

    const cleaned = normalizeUppercase(removeSeparators(crea))
        .replace(/^CREA/, "");

    /**
     * UF (2 letters) + number (4 to 8 digits) + optional check digit
     * EX: 
     */
    const match = cleaned.match(/^([A-Z]{2})(\d{4,8})([A-Z]?)$/);
    if (!match) return false;

    const uf = match[1];

    return isValidUF(uf);
}