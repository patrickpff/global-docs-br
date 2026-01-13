import { IEStateMask, IEStateValidator } from "../types.js";

export const GO_IE: IEStateValidator & IEStateMask = {
    validate(value: string): boolean {
        if (!value) return false;

        const digits = value.replace(/\D/g, "");

        // GO IE must have exactly 9 digits
        if (digits.length !== 9) return false;

        // Valid prefixes
        if (
            !digits.startsWith("10") &&
            !digits.startsWith("11") &&
            !digits.startsWith("15")
        ) {
            return false;
        }

        const base = digits.slice(0, 8);
        const dv = Number(digits[8]);

        const weights = [9, 8, 7, 6, 5, 4, 3, 2];
        let sum = 0;

        for (let i = 0; i < 8; i++) {
            sum += Number(base[i]) * weights[i];
        }

        const mod = sum % 11;

        let calculatedDV: number;

        if (mod === 0) {
            calculatedDV = 0;
        } else if (mod === 1) {
            const baseNumber = Number(base);
            calculatedDV =
                baseNumber >= 10103105 && baseNumber <= 10119997 ? 1 : 0;
        } else {
            calculatedDV = 11 - mod;
        }

        return calculatedDV === dv;
    },

    mask(value: string): string {
        const digits = value.replace(/\D/g, "");

        const part1 = digits.slice(0, 2);
        const part2 = digits.slice(2, 5);
        const part3 = digits.slice(5, 8);
        const part4 = digits.slice(8, 9);

        let masked = part1;
        if (part2) masked += "." + part2;
        if (part3) masked += "." + part3;
        if (part4) masked += "-" + part4;

        return masked;
    }
};
