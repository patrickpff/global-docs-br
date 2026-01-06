import { DocumentValidator } from "../../index.js";
import { maskCRM } from "./mask.js";
import { validateCRM } from "./validate.js";

export const CRM: DocumentValidator = {
    type: "CRM",
    description: "Registro de médico no Conselho Regional de Medicina (CRM).",
    validate: validateCRM,
    mask: maskCRM
}