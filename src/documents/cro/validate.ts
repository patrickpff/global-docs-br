import { normalizeUppercase, removeSeparators } from "../../shared/normalize.js";
import { isValidUF } from "../../shared/ufs.js";

export function validateCRO(cro: string): boolean {
    if (!cro) return false;

    const cleaned = normalizeUppercase(removeSeparators(cro))
        .replace(/^CRO/, "");

    const match = cleaned.match(/^([A-Z]{2})(\d{1,6})(\d?)$/)
    if (!match) return false;

    const uf = match[1];
    
    return isValidUF(uf);
}