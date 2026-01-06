import { normalizeUppercase, removeSeparators } from "../../shared/normalize.js";
import { isValidUF } from "../../shared/ufs.js";

export function maskCAU(cau: string): string {
    if (!cau) return "";

    const cleaned = normalizeUppercase(removeSeparators(cau))
        .replace(/^CAU/, "");

    // A + UF + number (1 to 7 digits) + DV (optional)
    const match = cleaned.match(/^(A)([A-Z]{2})(\d{1,7})(\d?)$/);
    if (!match) return cau;

    const uf = match[2];
    const number = match[3];
    const dv = match[4] || "";

    if (!isValidUF(uf)) return cau;

    return dv
        ? `CAU-${uf} A${number}${dv}`
        : `CAU-${uf} A${number}`;
}