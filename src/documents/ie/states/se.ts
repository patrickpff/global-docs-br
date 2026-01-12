import { IEStateMask, IEStateValidator } from "../types.js";

export const SE_IE: IEStateValidator & IEStateMask = {
    validate(value: string): boolean {
        if (!value) return false;

        const digits = value.replace(/\D/g, "");

        // SE IE must have exactly 9 digits
        if (digits.length !== 9) return false;

        const base = digits.slice(0, 8);
        const dv = Number(digits[8]);

        // Weights defined by SEFAZ-SE (Sintegra)
        const weights = [2, 7, 1, 2, 3, 4, 5, 6];

        let sum = 0;
        for (let i = 0; i < 8; i++) {
            sum += Number(base[i]) * weights[i];
        }

        const mod = sum % 11;
        let calculatedDV = 11 - mod;

        if (calculatedDV === 10 || calculatedDV === 11) {
            calculatedDV = 0;
        }

        return calculatedDV === dv;
    },

    mask(value: string): string {
        const digits = value.replace(/\D/g, "");

        const part1 = digits.slice(0, 3);
        const part2 = digits.slice(3, 6);
        const part3 = digits.slice(6, 8);
        const part4 = digits.slice(8, 9);

        let masked = part1;
        if (part2) masked += "." + part2;
        if (part3) masked += "." + part3;
        if (part4) masked += "-" + part4;

        return masked;
    }
};
