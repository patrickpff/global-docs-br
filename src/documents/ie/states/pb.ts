import { IEStateMask, IEStateValidator } from "../types.js";

export const PB_IE: IEStateValidator & IEStateMask = {
    validate(value: string): boolean {
        if (!value) return false;

        const digits = value.replace(/\D/g, "");

        // PB IE must have exactly 9 digits
        if (digits.length !== 9) return false;

        // PB IE must start with "16"
        if (!digits.startsWith("16")) return false;

        const base = digits.slice(0, 8);
        const dv = Number(digits[8]);

        // Weights for PB IE validation
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

        const part1 = digits.slice(0, 2); // "16"
        const part2 = digits.slice(2, 5);
        const part3 = digits.slice(5, 8);
        const dv = digits.slice(8, 9);
        let masked = part1;
        if (part2) masked += "." + part2;
        if (part3) masked += "." + part3;
        if (dv) masked += "-" + dv;

        return masked;
    },
}