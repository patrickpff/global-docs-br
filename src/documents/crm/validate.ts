import { normalizeUppercase, removeSeparators } from "../../shared/normalize.js";
import { isValidUF } from "../../shared/ufs.js";

export function validateCRM(crm: string): boolean {
    if (!crm) return false;

    const cleaned = normalizeUppercase(removeSeparators(crm))

    /**
     * UF + number (4 to 7 digits)
     * EX: SP1234567
     */
    const match = cleaned.match(/^([A-Z]{2})(\d{4,7})$/);

    const uf = match?.[1];

    if (uf && !isValidUF(uf)) return false;

    return match !== null;
}