import { DocumentValidator } from "global-docs";
import { maskCRO } from "./mask.js";
import { validateCRO } from "./validate.js";

export const CRO: DocumentValidator = {
    type: "CRO",
    description: "Council of Regional Odontology (CRO) in Brazil.",
    validate: validateCRO,
    mask: maskCRO
}