import { IEStateMask, IEStateValidator } from "../types.js";

export const MG_IE: IEStateValidator & IEStateMask = {
    validate(value: string): boolean {
        if (!value) return false;

        const digits = value.replace(/\D/g, "");
        if (digits.length !== 13) return false; // IE MG tem 13 dígitos

        const base = digits.slice(0, 11);   // primeiros 11 dígitos
        const dv1 = Number(digits[11]);     // 12º dígito
        const dv2 = Number(digits[12]);     // 13º dígito

        // -------------------------
        // Calculate DV1
        // -------------------------
        const baseWithZero = base.slice(0, 3) + "0" + base.slice(3);
        let sum1 = 0;
        let weight = 1;

        for (const digit of baseWithZero) {
            const product = Number(digit) * weight;
            sum1 += Math.floor(product / 10) + (product % 10);
            weight = weight === 1 ? 2 : 1;
        }

        const nextTen = Math.ceil(sum1 / 10) * 10;
        const calculatedDV1 = nextTen - sum1;
        if (calculatedDV1 !== dv1) return false;

        // -------------------------
        // Calculate DV2
        // -------------------------
        const fullBase = digits.slice(0, 12);
        const weights = [3, 2, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
        let sum2 = 0;
        for (let i = 0; i < 12; i++) {
            sum2 += Number(fullBase[i]) * weights[i];
        }
        const mod = sum2 % 11;
        const calculatedDV2 = mod < 2 ? 0 : 11 - mod;
        return calculatedDV2 === dv2;
    },

    mask(value: string): string {
        const digits = value.replace(/\D/g, "");

        // Agrupa parcialmente enquanto digita
        const part1 = digits.slice(0, 2);
        const part2 = digits.slice(2, 5);
        const part3 = digits.slice(5, 8);
        const part4 = digits.slice(8, 12); // só até 12º dígito para máscara

        let masked = part1;
        if (part2) masked += "." + part2;
        if (part3) masked += "." + part3;
        if (part4) masked += "/" + part4;

        return masked;
    }
};
