import { DocumentValidator } from "../../index.js";
import { maskCAU } from "./mask.js";
import { validateCAU } from "./validate.js";

export const CAU: DocumentValidator = {
    type: "CAU",
    description: "Council of Architecture and Urbanism Registration (CAU) in Brazil.",
    validate: validateCAU,
    mask: maskCAU
}