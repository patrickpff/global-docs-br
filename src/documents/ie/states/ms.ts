import { IEStateMask, IEStateValidator } from "../types.js";

export const MS_IE: IEStateValidator & IEStateMask = {
    validate(value: string): boolean {
        if (!value) return false;

        const digits = value.replace(/\D/g, "");

        // IE MS has to be 9 digits long
        if (digits.length !== 9) return false;

        // It must start with 28
        if (!digits.startsWith("28")) return false;

        const base = digits.slice(0, 8);
        const dv = Number(digits[8]);

        const weights = [9, 8, 7, 6, 5, 4, 3, 2];

        let sum = 0;
        for (let i = 0; i < 8; i++) {
            sum += Number(base[i]) * weights[i];
        }

        const mod = sum % 11;
        const calculatedDV = mod < 2 ? 0 : 11 - mod;

        return calculatedDV === dv;
    },

    mask(value: string): string {
        const digits = value.replace(/\D/g, "");

        const base = digits.slice(0, 8);
        const dv = digits.slice(8, 9);

        let masked = base;
        if (dv) masked += "-" + dv;

        return masked;
    }
};
