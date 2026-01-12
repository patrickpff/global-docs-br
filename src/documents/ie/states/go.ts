import { IEStateMask, IEStateValidator } from "../types.js";

export const GO_IE: IEStateValidator & IEStateMask = {
    validate(value: string): boolean {
        if (!value) return false;

        const digits = value.replace(/\D/g, "");

        // GO IE has to be 9 digits long
        if (digits.length !== 9) return false;

        // Valid prefixes
        if (
            !digits.startsWith("10") &&
            !digits.startsWith("11") &&
            !digits.startsWith("15")
        ) {
            return false;
        }

        const base = digits.slice(0, 7);
        const dv1 = Number(digits[7]);
        const dv2 = Number(digits[8]);

        // ========================
        // DV1
        // ========================
        const weightsDV1 = [9, 8, 7, 6, 5, 4, 3];
        let sum1 = 0;

        for (let i = 0; i < 7; i++) {
            sum1 += Number(base[i]) * weightsDV1[i];
        }

        const mod1 = sum1 % 11;

        let calculatedDV1: number;

        if (mod1 === 0) {
            calculatedDV1 = 0;
        } else if (mod1 === 1) {
            const baseNumber = Number(base);
            calculatedDV1 =
                baseNumber >= 10103105 && baseNumber <= 10119997 ? 1 : 0;
        } else {
            calculatedDV1 = 11 - mod1;
        }

        if (calculatedDV1 !== dv1) return false;

        // ========================
        // DV2
        // ========================
        const baseWithDV1 = base + dv1;
        const weightsDV2 = [10, 9, 8, 7, 6, 5, 4, 3];
        let sum2 = 0;

        for (let i = 0; i < 8; i++) {
            sum2 += Number(baseWithDV1[i]) * weightsDV2[i];
        }

        const mod2 = sum2 % 11;
        const calculatedDV2 = mod2 < 2 ? 0 : 11 - mod2;

        return calculatedDV2 === dv2;
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
