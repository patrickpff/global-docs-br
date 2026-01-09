import { IEStateMask, IEStateValidator } from "../types.js";

export const DF_IE: IEStateValidator & IEStateMask = {
    validate(value: string): boolean {
        if (!value) return false;

        const digits = value.replace(/\D/g, "");

        // DF IE has to be 13 digits long
        if (digits.length !== 13) return false;

        // It must start with 07
        if (!digits.startsWith("07")) return false;

        const base = digits.slice(0, 11);
        const dv1 = Number(digits[11]);
        const dv2 = Number(digits[12]);

        // ==========================
        // DV1
        // ==========================
        const weightsDV1 = [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        let sum1 = 0;

        for (let i = 0; i < 11; i++) {
            sum1 += Number(base[i]) * weightsDV1[i];
        }

        const mod1 = sum1 % 11;
        const calculatedDV1 = mod1 < 2 ? 0 : 11 - mod1;

        if (calculatedDV1 !== dv1) return false;

        // ========================
        // DV2
        // ========================
        const baseWithDV1 = base + dv1;
        const weightsDV2 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        let sum2 = 0;

        for (let i = 0; i < 12; i++) {
            sum2 += Number(baseWithDV1[i]) * weightsDV2[i];
        }

        const mod2 = sum2 % 11;
        const calculatedDV2 = mod2 < 2 ? 0 : 11 - mod2;

        return calculatedDV2 === dv2;
    },

    mask(value: string): string {
        const digits = value.replace(/\D/g, "");

        const part1 = digits.slice(0, 3);
        const part2 = digits.slice(3, 8);
        const part3 = digits.slice(8, 11);
        const dv = digits.slice(11, 13);

        let masked = part1;
        if (part2) masked += "." + part2;
        if (part3) masked += "." + part3;
        if (dv) masked += "-" + dv;

        return masked;
    }
};
