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
import { MS_IE } from "./states/ms.js";
import { MT_IE } from "./states/mt.js";
import { PA_IE } from "./states/pa.js";
import { PB_IE } from "./states/pb.js";
import { PE_IE } from "./states/pe.js";
import { PI_IE } from "./states/pi.js";
import { PR_IE } from "./states/pr.js";
import { RJ_IE } from "./states/rj.js";
import { RN_IE } from "./states/rn.js";
import { RO_IE } from "./states/ro.js";
import { RS_IE } from "./states/rs.js";
import { SC_IE } from "./states/sc.js";
import { SE_IE } from "./states/se.js";
import { SP_IE } from "./states/sp.js";
import { TO_IE } from "./states/to.js";
import { RR_IE } from "./states/rr.js";
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
    MT: MT_IE,
    MS: MS_IE,
    MG: MG_IE,
    PA: PA_IE,
    PB: PB_IE,
    PR: PR_IE,
    PE: PE_IE,
    PI: PI_IE,
    RJ: RJ_IE,
    RN: RN_IE,
    RS: RS_IE,
    RO: RO_IE,
    RR: RR_IE,
    SC: SC_IE,
    SP: SP_IE,
    SE: SE_IE,
    TO: TO_IE,
} satisfies Record<UF, IEStateValidator & IEStateMask>

export const validatorsByUF: Record<UF, IEStateValidator> = stateInfo;
export const masksByUF: Record<UF, IEStateMask> = stateInfo;