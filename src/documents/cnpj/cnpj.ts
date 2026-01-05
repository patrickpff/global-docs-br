import { DocumentValidator } from "../../index.js";
import { maskCNPJ } from "./mask.js";
import { validateCNPJ } from "./validate.js";

export const CNPJ: DocumentValidator = {
    type: "CNPJ",
    description: "Cadastro Nacional de Pessoas Jurídicas (CNPJ) is the Brazilian national registry of legal entities.",
    validate: validateCNPJ,
    mask: maskCNPJ
}