import { IEStateMask, IEStateValidator } from "../types.js";

export const SP_IE: IEStateValidator & IEStateMask = {
    validate(value: string): boolean {
        if (!value) return false;

        const digits = value.replace(/\D/g, "");

        // SP IE must have 12 digits
        if (digits.length !== 12) return false;

        // ========================
        // DV1 (9th digit)
        // ========================
        const base8 = digits.slice(0, 8);
        const dv1 = Number(digits[8]);

        const weightsDV1 = [1, 3, 4, 5, 6, 7, 8, 10];
        let sum1 = 0;

        for (let i = 0; i < 8; i++) {
            sum1 += Number(base8[i]) * weightsDV1[i];
        }

        let calcDV1 = 11 - (sum1 % 11);
        if (calcDV1 === 10 || calcDV1 === 11) calcDV1 = 0;

        if (calcDV1 !== dv1) return false;

        // ========================
        // DV2 (12th digit)
        // ========================
        const base11 = digits.slice(0, 11);
        const dv2 = Number(digits[11]);

        const weightsDV2 = [3, 2, 10, 9, 8, 7, 6, 5, 4, 3, 2];
        let sum2 = 0;

        for (let i = 0; i < 11; i++) {
            sum2 += Number(base11[i]) * weightsDV2[i];
        }

        let calcDV2 = 11 - (sum2 % 11);
        if (calcDV2 === 10 || calcDV2 === 11) calcDV2 = 0;

        return calcDV2 === dv2;
    },

    mask(value: string): string {
        const digits = value.replace(/\D/g, "");

        const part1 = digits.slice(0, 3);
        const part2 = digits.slice(3, 6);
        const part3 = digits.slice(6, 9);
        const part4 = digits.slice(9, 12);

        let masked = part1;
        if (part2) masked += "." + part2;
        if (part3) masked += "." + part3;
        if (part4) masked += "." + part4;
        return masked;
    }
};
