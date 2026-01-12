import { IEStateMask, IEStateValidator } from "../types.js";

export const PR_IE: IEStateValidator & IEStateMask = {
    validate(value: string): boolean {
        if (!value) return false;

        const digits = value.replace(/\D/g, "");

        // PR IE must have exactly 10 digits
        if (digits.length !== 10) return false;

        const base = digits.slice(0, 8);
        const dv1 = Number(digits[8]);
        const dv2 = Number(digits[9]);

        // -------------------------
        // Calculate DV1
        // -------------------------
        const weightsDV1 = [3, 2, 7, 6, 5, 4, 3, 2];
        let sum1 = 0;

        for (let i = 0; i < 8; i++) {
            sum1 += Number(base[i]) * weightsDV1[i];
        }

        const mod1 = sum1 % 11;
        const calculatedDV1 = mod1 < 2 ? 0 : 11 - mod1;

        if (calculatedDV1 !== dv1) return false;

        // -------------------------
        // Calculate DV2
        // -------------------------
        const baseWithDV1 = base + dv1;
        const weightsDV2 = [4, 3, 2, 7, 6, 5, 4, 3, 2];
        let sum2 = 0;

        for (let i = 0; i < 9; i++) {
            sum2 += Number(baseWithDV1[i]) * weightsDV2[i];
        }

        const mod2 = sum2 % 11;
        const calculatedDV2 = mod2 < 2 ? 0 : 11 - mod2;

        return calculatedDV2 === dv2;
    },

    mask(value: string): string {
        const digits = value.replace(/\D/g, "");

        const part1 = digits.slice(0, 3);
        const part2 = digits.slice(3, 8);
        const dv1 = digits.slice(8, 9);
        const dv2 = digits.slice(9, 10);

        let masked = part1;
        if (part2) masked += "." + part2;
        if (dv1) masked += "-" + dv1;
        if (dv2) masked += dv2;

        return masked;
    }, 
}