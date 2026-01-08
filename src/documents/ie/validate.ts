import { normalizeUppercase } from "../../shared/normalize.js";
import { isValidUF, UF } from "../../shared/ufs.js";
import { validatorsByUF } from "./registry.js";

export function validateIE(ie: string, uf: UF): boolean {
    if (!ie) return false;

    const normalized = normalizeUppercase(ie);

    if (normalized === "ISENTO") return true;

    const validator = validatorsByUF[uf];
    if (!validator) return false;

    return validator.validate(normalized);
}