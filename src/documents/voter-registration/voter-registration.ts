import { DocumentValidator } from "global-docs";
import { maskVoterRegistration } from "./mask.js";
import { validateVoterRegistration } from "./validate.js";

export const VoterRegistration: DocumentValidator = {
    type: "VoterRegistration",
    description: "Brazilian Voter Registration",
    validate: validateVoterRegistration,
    mask: maskVoterRegistration
}