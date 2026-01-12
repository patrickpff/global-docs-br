import { IEStateMask, IEStateValidator } from "../types.js";

export const PI_IE: IEStateMask & IEStateValidator = {
    validate(value: string): boolean {
        if (!value) return false;

        const digits = value.replace(/\D/g, "");

        // PI IE must have exactly 9 digits
        if (digits.length !== 9) return false;

        // PI IE must start with "19"
        if (!digits.startsWith("19")) return false;

        const base = digits.slice(0, 8);
        const dv = Number(digits[8]);

        // Weights for PI IE validation
        const weights = [9, 8, 7, 6, 5, 4, 3, 2];

        let sum = 0;
        for (let i = 0; i < 8; i++) {
            sum += Number(base[i]) * weights[i];
        }

        const mod = sum % 11;
        const calculateDV = mod < 2 ? 0 : 11 - mod;

        return calculateDV === dv;
    },

    mask(value: string): string {
        const digits = value.replace(/\D/g, "");

        const base = digits.slice(0, 8);
        const dv = digits.slice(8, 9);

        let masked = base;
        if (dv) masked += "-" + dv;

        return masked;
    }
}