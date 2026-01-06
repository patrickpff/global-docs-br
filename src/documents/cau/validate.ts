import { normalizeUppercase, removeSeparators } from "../../shared/normalize.js";
import { isValidUF } from "../../shared/ufs.js";

export function validateCAU(cau: string): boolean {
    if (!cau) return false;

    const cleaned = normalizeUppercase(removeSeparators(cau))
        .replace(/^CAU/, "");
    
    const match = cleaned.match(/^A([A-Z]{2})(\d{1,7})(\d?)$/);
    if (!match) return false;

    const uf = match[1];

    return isValidUF(uf);
}