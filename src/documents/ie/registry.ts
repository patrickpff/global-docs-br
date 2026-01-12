import { UF } from "../../shared/ufs.js";
import { AC_IE } from "./states/ac.js";
import { AL_IE } from "./states/al.js";
import { AM_IE } from "./states/am.js";
import { AP_IE } from "./states/ap.js";
import { BA_IE } from "./states/ba.js";
import { CE_IE } from "./states/ce.js";
import { DF_IE } from "./states/df.js";
import { ES_IE } from "./states/es.js";
import { GO_IE } from "./states/go.js";
import { MA_IE } from "./states/ma.js";
import { MG_IE } from "./states/mg.js";
import { IEStateMask, IEStateValidator } from "./types.js";

const stateInfo = { 
    AC: AC_IE,
    AL: AL_IE,
    AP: AP_IE,
    AM: AM_IE,
    BA: BA_IE,
    CE: CE_IE,
    DF: DF_IE,
    ES: ES_IE,
    GO: GO_IE,
    MA: MA_IE,
    MT: null,
    MS: null,
    MG: MG_IE,
    PA: null,
    PB: null,
    PR: null,
    PE: null,
    PI: null,
    RJ: null,
    RN: null,
    RS: null,
    RO: null,
    RR: null,
    SC: null,
    SP: null,
    SE: null,
    TO: null,
}
// remove null after finished
export const validatorsByUF: Record<UF, IEStateValidator | null> = stateInfo;

export const masksByUF: Record<UF, IEStateMask | null> = stateInfo;