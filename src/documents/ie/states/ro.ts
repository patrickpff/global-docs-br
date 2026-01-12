import { IEStateMask, IEStateValidator } from "../types.js";

export const RO_IE: IEStateValidator & IEStateMask = {
    validate(value: string): boolean {
        if (!value) return false;

        const digits = value.replace(/\D/g, "");

        // RO IE must have exactly 14 digits
        if (digits.length !== 14) return false;

        // Must start with state code 24
        if (!digits.startsWith("24")) return false;

        const base = digits.slice(0, 13);
        const dv = Number(digits[13]);

        // Weights defined by SEFAZ-RO
        const weights = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

        let sum = 0;
        for (let i = 0; i < 13; i++) {
            sum += Number(base[i]) * weights[i];
        }

        const mod = sum % 11;
        const calculatedDV = mod < 2 ? 0 : 11 - mod;

        return calculatedDV === dv;
    },

    mask(value: string): string {
        const digits = value.replace(/\D/g, "");

        const part1 = digits.slice(0, 2);
        const part2 = digits.slice(2, 10);
        const part3 = digits.slice(10, 13);
        const part4 = digits.slice(13, 14);

        let masked = part1;
        if (part2) masked += "." + part2;
        if (part3) masked += "/" + part3;
        if (part4) masked += "-" + part4;

        return masked;
    }
};
