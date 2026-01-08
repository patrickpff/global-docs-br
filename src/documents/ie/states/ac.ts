import { IEStateMask, IEStateValidator } from "../types.js";

export const AC_IE: IEStateValidator & IEStateMask = {
    validate(value: string): boolean {
        if (!value) return false;

        const digits = value.replace(/\D/g, "");

        // IE do AC tem 13 dígitos
        if (digits.length !== 13) return false;

        // Deve começar com 01
        if (!digits.startsWith("01")) return false;

        const base = digits.slice(0, 12);
        const dv = Number(digits[12]);

        const weights = [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

        let sum = 0;
        for (let i = 1; i <= 11; i++) {
            sum += Number(base[i]) * weights[i - 1];
        }

        const mod = sum % 11;
        const calculatedDV = mod < 2 ? 0 : 11 - mod;

        return calculatedDV === dv;
    },

    mask(value: string): string {
        const digits = value.replace(/\D/g, "");

        const part1 = digits.slice(0, 2);
        const part2 = digits.slice(2, 5);
        const part3 = digits.slice(5, 8);
        const part4 = digits.slice(8, 11); 
        const part5 = digits.slice(11, 13);

        let masked = part1;
        if (part2) masked += "." + part2;
        if (part3) masked += "." + part3;
        if (part4) masked += "/" + part4;
        if (part5) masked += "-" + part5;

        return masked;
    }
};
