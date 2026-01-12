import { IEStateMask, IEStateValidator } from "../types.js";

export const PA_IE: IEStateValidator & IEStateMask = {
    validate(value: string): boolean {
        if (!value) return false;

        const digits = value.replace(/\D/g, "");

        // PA IE must have exactly 9 digits
        if (digits.length !== 9) return false;

        // PA IE must start with "15"
        if (!digits.startsWith("15")) return false;

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

        const part1 = digits.slice(0, 2);   // "15"
        const part2 = digits.slice(2, 7);   // 5 digits
        const dv = digits.slice(7, 8);      // check digit

        let masked = part1;
        if (part2) masked += "." + part2;
        if (dv) masked += "-" + dv;

        return masked;
    }


};
