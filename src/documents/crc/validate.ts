import { normalizeUppercase, removeSeparators } from "../../shared/normalize.js";
import { isValidUF } from "../../shared/ufs.js";

export function validateCRC(crc: string): boolean {
    if (!crc) return false;

    const cleaned = normalizeUppercase(removeSeparators(crc))
        .replace(/^CRC/, "");

    /**
     * UF + number (1 to 6 digits) + O or P + check digit
     * EX: SP1234567O
     */
    const match = cleaned.match(/^([A-Z]{2})(\d{1,6})([OP])(\d)$/);
    if (!match) return false;

    const uf = match[1];

    return isValidUF(uf);
}