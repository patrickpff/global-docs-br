import { normalizeUppercase, removeSeparators } from "../../shared/normalize.js";
import { isValidUF } from "../../shared/ufs.js";

export function maskCRC(crc: string): string {
    if (!crc) return "";

    const cleaned = normalizeUppercase(removeSeparators(crc))
        .replace(/^CRC/, "");

    // Allow incomplete numbers to mask
    const match = cleaned.match(/^([A-Z]{2})(\d{1,6})([OP])?(\d?)$/);
    if (!match) return crc;

    const uf = match[1];
    const number = match[2];
    const category = match[3] || "";
    const dv = match[4] || "";

    if (!isValidUF(uf)) return crc;

    return `CRC-${uf} ${number}/${category}-${dv}`;
}