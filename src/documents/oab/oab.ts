import { DocumentValidator } from "global-docs";
import { maskOAB } from "./mask.js";
import { validateOAB } from "./validate.js";

export const OAB: DocumentValidator = {
    type: "OAB",
    description: "Ordem dos Advogados do Brasil (OAB) registration number.",
    validate: validateOAB,
    mask: maskOAB
}