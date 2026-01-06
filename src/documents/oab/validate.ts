import { isValidUF } from "../../shared/ufs.js";

export function validateOAB(oab: string): boolean {
    if (!oab) return false;

    const cleaned = oab
        .replace(/[\s\-\/]/g, '')
        .toUpperCase();
    
    const match = cleaned.match(/^([A-Z]{2})(\d{1,10})([A-Z]?)$/);
    if (!match) return false;

    const uf = match[1];

    if (!isValidUF(uf)) return false;

    return true;
}