import { normalizeUppercase, removeSeparators } from "../../shared/normalize.js";
import { isValidUF } from "../../shared/ufs.js";

export function maskCRO(cro: string): string {
    if (!cro) return "";

    const cleaned = normalizeUppercase(removeSeparators(cro))
        .replace(/^CRO/, "");
    
    const match = cleaned.match(/^([A-Z]{2})(\d{1,6})(\d?)$/);
    if (!match) return cro;

    const uf = match[1];
    const number = match[2];
    const dv = match[3] ?? "";

    if (!isValidUF(uf)) return cro;

    if (!dv) {
        return `CRO-${uf} ${number}`;
    }

    return `CRO-${uf} ${number}/${dv}`
}