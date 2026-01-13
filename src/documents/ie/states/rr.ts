import { IEStateMask, IEStateValidator } from "../types.js";

export const RR_IE: IEStateValidator & IEStateMask = {
    validate(value: string): boolean {
        if (!value) return false;

        const digits = value.replace(/\D/g, "");

        // RR IE must be exactly 9 digits
        if (digits.length !== 9) return false;

        // Extract base and check digit
        const base = digits.slice(0, 8);
        const dv = Number(digits[8]);

        // Calculate sum for modulo 9
        let sum = 0;
        for (let i = 0; i < 8; i++) {
            const digit = Number(base[i]);
            if (isNaN(digit)) return false;
            // Position index (1-based) times digit
            sum += digit * (i + 1);
        }

        const calculatedDV = sum % 9;
        return calculatedDV === dv;
    },

    mask(value: string): string {
        const digits = value.replace(/\D/g, "");

        const part1 = digits.slice(0, 2);
        const part2 = digits.slice(2, 5);
        const part3 = digits.slice(5, 8);
        const dv = digits.slice(8, 9);

        let masked = part1;
        if (part2) masked += "." + part2;
        if (part3) masked += "." + part3;
        if (dv) masked += "-" + dv;

        return masked;
    }
};