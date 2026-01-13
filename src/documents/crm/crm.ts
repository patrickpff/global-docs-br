import { DocumentValidator } from "global-docs";
import { maskCRM } from "./mask.js";
import { validateCRM } from "./validate.js";

export const CRM: DocumentValidator = {
    type: "CRM",
    description: "Council of Regional Medicine Registration (CRM) in Brazil.",
    validate: validateCRM,
    mask: maskCRM
}