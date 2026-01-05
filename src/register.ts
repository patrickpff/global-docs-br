import { CountryModule, registerCountry } from "global-docs";
import { CPF } from "./documents/cpf/cpf.js";

const brazilModule: CountryModule = {
  country: "BR",
  documents: {
    CPF,
  }
};

export function registerBrazilDocuments() {
  registerCountry(brazilModule);
}