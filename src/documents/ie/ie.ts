import { DocumentValidator } from "../../index.js";
import { UF } from "../../shared/ufs.js";
import { maskIE } from "./mask.js";
import { validateIE } from "./validate.js";

export type IEContext = {
  uf: UF;
};

export const IE: DocumentValidator<IEContext> = {
    type: "IE",
    description: "“Brazilian State Registration (Inscrição Estadual). Identifies ICMS taxpayers registered with each state tax authority (SEFAZ). Validation rules vary by state.",
    validate (ie, context) {
        if(!context?.uf) return false;
        return validateIE(ie, context.uf);
    },
    mask (ie, context) {
        if(!context?.uf) return ie;
        return maskIE(ie, context.uf);
    }
}
