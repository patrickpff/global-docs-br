import { IEStateMask, IEStateValidator } from "../types.js";

export const PE_IE: IEStateMask & IEStateValidator = {
    validate(value: string): boolean {
        if (!value) return false;

        const digits = value.replace(/\D/g, "");

        // PE IE must have exactly 8 digits
        if (digits.length !== 8) return false;

        const base = digits.slice(0, 7);
        const dv = Number(digits[7]);

        // Weidhts for PE IE validation
        const weights = [8, 7, 6, 5, 4, 3, 2];

        let sum = 0;
        for (let i = 0; i < 7; i++) {
            sum += Number(base[i]) * weights[i];
        }

        const mod = sum % 11;
        const calculateDV = mod < 2 ? 0 : 11 - mod;

        return calculateDV === dv;
    },

    mask(value: string): string {
        const digits = value.replace(/\D/g, "");

        const base = digits.slice(0, 7);
        const dv = digits.slice(7, 8);

        let masked = base;
        if (dv) masked += "-" + dv;

        return masked;
    }
}