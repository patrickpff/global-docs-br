import { DocumentValidator } from "../../index.js";
import { maskCREA } from "./mask.js";
import { validateCREA } from "./validate.js";

export const CREA: DocumentValidator = {
    type: "CREA",
    description: "Council of Engineering and Agronomy Registration (CREA) in Brazil.",
    validate: validateCREA,
    mask: maskCREA
}