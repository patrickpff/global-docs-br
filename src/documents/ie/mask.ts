import { normalizeUppercase } from "../../shared/normalize.js";
import { UF } from "../../shared/ufs.js";
import { masksByUF } from "./registry.js";

export function maskIE(value: string, uf: UF): string {
    if (!value) return "";

    const normalized = normalizeUppercase(value);
    const masker = masksByUF[uf];

    if (!masker) return normalized;

    return masker.mask(normalized);
}
