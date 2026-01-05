import { describe, expect, it } from 'vitest';
import { CPF } from '../cpf.js';

describe('cpf', () => {
    it("should expose the correct type", () => {
        expect(CPF.type).toBe("CPF");
    });

    it("should have a description", () => {
        expect(CPF.description).toBeTruthy();
    });

    it("should expose a validate function", () => {
        expect(typeof CPF.validate).toBe("function");
    });

    it("should expose a mask function", () => {
        expect(typeof CPF.mask).toBe("function");
    });

    it("should validate a masked CPF correctly", () => {
        const raw = '52998224725';
        const masked = CPF.mask!(raw);

        expect(CPF.validate!(masked)).toBe(true);
    });

    it("should invalidate an incorrect CPF through the validate function", () => {
        const invalidCPF = '123.456.789-00';
        expect(CPF.validate!(invalidCPF)).toBe(false);
    });
});