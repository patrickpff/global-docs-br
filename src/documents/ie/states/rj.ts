import { IEStateMask, IEStateValidator } from "../types.js";

export const RJ_IE: IEStateValidator & IEStateMask = {
    validate(value: string): boolean {
        if (!value) return false;

        const digits = value.replace(/\D/g, "");

        // RJ IE must have exactly 8 digits
        if (digits.length !== 8) return false;

        const base = digits.slice(0, 7);
        const dv = Number(digits[7]);

        // Weights defined by SEFAZ-RJ
        const weights = [2, 7, 6, 5, 4, 3, 2];

        let sum = 0;
        for (let i = 0; i < 7; i++) {
            sum += Number(base[i]) * weights[i];
        }

        const mod = sum % 11;
        const calculatedDV = mod < 2 ? 0 : 11 - mod;

        return calculatedDV === dv;
    },

    mask(value: string): string {
        const digits = value.replace(/\D/g, "");

        const part1 = digits.slice(0, 2);
        const part2 = digits.slice(2, 5);
        const part3 = digits.slice(5, 7);
        const part4 = digits.slice(7, 8);

        let masked = part1;
        if (part2) masked += "." + part2;
        if (part3) masked += "." + part3;
        if (part4) masked += "-" + part4;

        return masked;
    }
};
