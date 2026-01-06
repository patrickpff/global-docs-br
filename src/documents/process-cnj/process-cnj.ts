import { DocumentValidator } from "../../index.js";
import { maskProcessCNJ } from "./mask.js";
import { validateProcessCNJ } from "./validate.js";

export const ProcessCNJ: DocumentValidator = {
    type: "ProcessCNJ",
    description: "Número Único de Processo (NUP) or Número Nacional de Processo (NNP) used by the Brazilian National Justice Council (CNJ) to identify legal processes.",
    validate: validateProcessCNJ,
    mask: maskProcessCNJ
}