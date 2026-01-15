import { CountryModule, registerCountry } from "global-docs";
import { CPF } from "./documents/cpf/cpf.js";
import { CAU } from "./documents/cau/cau.js";
import { CNH } from "./documents/cnh/cnh.js";
import { CNPJ } from "./documents/cnpj/cnpj.js";
import { CRC } from "./documents/crc/crc.js";
import { CREA } from "./documents/crea/crea.js";
import { CRM } from "./documents/crm/crm.js";
import { CRO } from "./documents/cro/cro.js";
import { IE } from "./documents/ie/ie.js";
import { OAB } from "./documents/oab/oab.js";
import { Passport } from "./documents/passport/passport.js";
import { ProcessCNJ } from "./documents/process-cnj/process-cnj.js";
import { RG } from "./documents/rg/rg.js";
import { VoterRegistration } from "./documents/voter-registration/voter-registration.js";

const brazilModule: CountryModule = {
  country: "BR",
  documents: {
    CAU,
    CNH,
    CNPJ,
    CPF,
    CRC,
    CREA,
    CRM,
    CRO,
    IE,
    OAB,
    Passport,
    ProcessCNJ,
    RG,
    VoterRegistration
  }
};

export function registerBrazilDocuments() {
  registerCountry(brazilModule);
}