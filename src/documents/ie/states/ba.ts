import { IEStateMask, IEStateValidator } from "../types.js";

export const BA_IE: IEStateValidator & IEStateMask = {
    validate(value: string): boolean {
        if (!value) return false;

        const digits = value.replace(/\D/g, "");

        // BA IE has to be 9 digits long
        if (digits.length !== 8) return false;

        const base = digits.slice(0, 6);
        const dv2 = Number(digits[6]);
        const dv1 = Number(digits[7]);

        const firstDigit = base[0];

        const useModulo10 = ["0", "1", "2", "3", "4", "5", "8"].includes(firstDigit);

        // ========================
        // Calculate DV2
        // ========================
        const weightsDV2 = [7, 6, 5, 4, 3, 2];
        let sumDV2 = 0;

        for (let i = 0; i < 6; i++) {
            sumDV2 += Number(base[i]) * weightsDV2[i];
        }

        let calculatedDV2: number;

        if (useModulo10) {
            calculatedDV2 = sumDV2 % 10;
        } else {
            const mod = sumDV2 % 11;
            calculatedDV2 = mod < 2 ? 0 : 11 - mod;
        }

        if (calculatedDV2 !== dv2) return false;

        // ========================
        // Calculate DV1
        // ========================
        const baseWithDV2 = base + dv2;
        const weightsDV1 = [8, 7, 6, 5, 4, 3, 2];
        let sumDV1 = 0;

        for (let i = 0; i < 7; i++) {
            sumDV1 += Number(baseWithDV2[i]) * weightsDV1[i];
        }

        let calculatedDV1: number;

        if (useModulo10) {
            calculatedDV1 = sumDV1 % 10;
        } else {
            const mod = sumDV1 % 11;
            calculatedDV1 = mod < 2 ? 0 : 11 - mod;
        }

        return calculatedDV1 === dv1;
    },

    mask(value: string): string {
        const digits = value.replace(/\D/g, "");

        const base = digits.slice(0, 6);
        const dv2 = digits.slice(6, 7);
        const dv1 = digits.slice(7, 8);

        let masked = base;

        if (dv2) masked += "-" + dv2;
        if (dv1) masked += dv1;

        return masked;
    }
};
