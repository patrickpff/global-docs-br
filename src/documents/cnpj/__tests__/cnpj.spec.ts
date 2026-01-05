import { describe, expect, it } from 'vitest';
import { CNPJ } from '../cnpj.js';

describe('cnpj', () => {
    it("should expose the correct type", () => {
        expect(CNPJ.type).toBe("CNPJ");
    });

    it("should have a description", () => {
        expect(CNPJ.description).toBeTruthy();
    });

    it("should expose a validate function", () => {
        expect(typeof CNPJ.validate).toBe("function");
    });

    it("should expose a mask function", () => {
        expect(typeof CNPJ.mask).toBe("function");
    });

    it("should validate a masked CNPJ correctly", () => {
        const raw = '11222333000181';
        const masked = CNPJ.mask!(raw);
        expect(CNPJ.validate!(masked)).toBe(true);
    });

    it("should invalidate an incorrect CNPJ through the validate function", () => {
        const invalidCNPJ = '11.222.333/0001-00';
        expect(CNPJ.validate!(invalidCNPJ)).toBe(false);
    });
});