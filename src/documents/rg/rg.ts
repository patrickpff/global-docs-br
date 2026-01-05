import { DocumentValidator } from "../../index.js";
import { maskRG } from "./mask.js";
import { validateRG } from "./validate.js";

export const RG: DocumentValidator = {
    type: "RG",
    description: "Registro Geral (RG) is the general registry identification number used in Brazil.",
    validate: validateRG,
    mask: maskRG
}