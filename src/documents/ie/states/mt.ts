import { IEStateMask, IEStateValidator } from "../types.js";

export const MT_IE: IEStateValidator & IEStateMask = {
    validate(value: string): boolean {
        if (!value) return false;

        const digits = value.replace(/\D/g, "");

        // MT IE has to be 10 digits long (9 base + 1 DV)
        if (digits.length !== 10) return false;

        const base = digits.slice(0, 9);
        const dv = Number(digits[9]);

        const weights = [3, 4, 5, 6, 7, 8, 9, 10, 11];

        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += Number(base[i]) * weights[i];
        }

        const mod = sum % 11;
        const calculatedDV = mod === 0 || mod === 1 ? 0 : 11 - mod;

        return calculatedDV === dv;
    },

    mask(value: string): string {
        const digits = value.replace(/\D/g, "");

        const base = digits.slice(0, 9);
        const dv = digits.slice(9, 10);

        let masked = base;
        if (dv) masked += "-" + dv;

        return masked;
    }
};
