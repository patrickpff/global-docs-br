import { isValidUF } from "../../shared/ufs.js";

export function maskCREA(crea: string): string {
    if (!crea) return "";

    const cleaned = crea
        .replace(/\s+/g, "")
        .replace(/[-./]/g, "")
        .toUpperCase()
        .replace(/^CREA/, "");
    
    const match = cleaned.match(/^([A-Z]{2})(\d+)([A-Z]?)$/);
    if (!match) return crea;

    const uf = match[1];
    const number = match[2];
    const suffix = match[3] ?? "";

    if (!isValidUF(uf)) return crea;

    return `CREA-${uf} ${number}${suffix}`;
}