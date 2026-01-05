import { DocumentValidator } from "../../index.js";
import { maskCPF } from "./mask.js";
import { validateCPF } from "./validate.js";

export const CPF: DocumentValidator = {
    type: "CPF",
    description: "Cadastro de Pessoas Físicas (CPF) is the Brazilian individual taxpayer registry identification.",
    validate: validateCPF,
    mask: maskCPF
}