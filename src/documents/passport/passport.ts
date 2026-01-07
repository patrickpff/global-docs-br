import { DocumentValidator } from "../../index.js";
import { maskPassport } from "./mask.js";
import { validatePassport } from "./validate.js";

export const Passport: DocumentValidator = {
    type: "Passport",
    description: "Brazilian Passport number",
    validate: validatePassport,
    mask: maskPassport
}