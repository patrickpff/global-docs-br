import { normalizeUppercase, removeSeparators } from "../../shared/normalize.js";
import { isValidUF } from "../../shared/ufs.js";

export function maskCRM(crm: string): string {
    if (!crm) return "";

    const cleaned = normalizeUppercase(removeSeparators(crm));

    // Allow incomplete numbers to mask
    const match = cleaned.match(/^([A-Z]{2})(\d{1,7})$/);
    if (!match) return crm;

    const uf = match[1];
    const number = match[2];

    if (!isValidUF(uf)) return crm;

    return `CRM-${uf} ${number}`;
}