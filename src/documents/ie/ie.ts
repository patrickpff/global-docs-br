import { DocumentValidator } from "../../index.js";
import { UF } from "../../shared/ufs.js";
import { maskIE } from "./mask.js";
import { validateIE } from "./validate.js";

export type IEContext = {
  uf: UF;
};

export const IE: DocumentValidator<IEContext> = {
    type: "IE",
    description: "Brazilian state registration. Identify ICMS taxpayers along the department of finance (SEFAZ) from each brazilian state. Validation depends on the state.",
    validate (ie, context) {
        if(!context?.uf) return false;
        return validateIE(ie, context.uf);
    },
    mask (ie, context) {
        if(!context?.uf) return ie;
        return maskIE(ie, context.uf);
    }
}