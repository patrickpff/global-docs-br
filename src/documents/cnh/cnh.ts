import { DocumentValidator } from "../../index.js";
import { maskCNH } from "./mask.js";
import { validateCNH } from "./validate.js";

export const CNH: DocumentValidator = {
    type: "CNH",
    description: "Carteira Nacional de Habilitação (CNH) is the Brazilian driver's license.",
    validate: validateCNH,
    mask: maskCNH
}