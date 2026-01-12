import { IEStateMask, IEStateValidator } from "../types.js";

export const RS_IE: IEStateValidator & IEStateMask = {
    validate(value: string): boolean {
        if (!value) return false;

        const digits = value.replace(/\D/g, "");

        // RS IE must have exactly 10 digits
        if (digits.length !== 10) return false;

        const base = digits.slice(0, 9);
        const dv = Number(digits[9]);

        // Weights defined by SEFAZ-RS
        const weights = [3, 2, 9, 8, 7, 6, 5, 4, 3];

        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += Number(base[i]) * weights[i];
        }

        const mod = sum % 11;
        const calculatedDV = mod < 2 ? 0 : 11 - mod;

        return calculatedDV === dv;
    },

    mask(value: string): string {
        const digits = value.replace(/\D/g, "");

        const part1 = digits.slice(0, 3);
        const part2 = digits.slice(3, 10);

        let masked = part1;
        if (part2) masked += "/" + part2;

        return masked;
    }
};
