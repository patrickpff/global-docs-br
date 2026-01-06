import { DocumentValidator } from "../../index.js";
import { maskCRC } from "./mask.js";
import { validateCRC } from "./validate.js";

export const CRC: DocumentValidator = {
    type: "CRC",
    description: "Council of Regional Medicine Registration (CRM) in Brazil.",
    validate: validateCRC,
    mask: maskCRC
}