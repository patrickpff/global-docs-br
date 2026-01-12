import { IEStateMask, IEStateValidator } from "../types.js";

export const SC_IE: IEStateValidator & IEStateMask = {
    validate(value: string): boolean {
        if (!value) return false;

        const digits = value.replace(/\D/g, "");

        // SC IE must have exactly 9 digits
        if (digits.length !== 9) return false;

        // Split the base and the DV
        const base = digits.slice(0, 8);
        const dv = Number(digits[8]);

        // Weights defined by Sintegra-SC
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
        const part1 = digits.slice(0, 3);
        const part2 = digits.slice(3, 6);
        const part3 = digits.slice(6, 9);
        let masked = part1;
        if (part2) masked += "." + part2;
        if (part3) masked += "." + part3;
        return masked;
    }

};
