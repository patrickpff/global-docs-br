import { describe, expect, it } from 'vitest';
import { RG } from '../rg.js';

describe('rg', () => {
    it("should expose the correct type", () => {
        expect(RG.type).toBe("RG");
    });

    it("should have a description", () => {
        expect(RG.description).toBeTruthy();
    });

    it("should expose a validate function", () => {
        expect(typeof RG.validate).toBe("function");
    });

    it("should expose a mask function", () => {
        expect(typeof RG.mask).toBe("function");
    });

    it("should validate a masked RG correctly", () => {
        const raw = '123456789';
        const masked = RG.mask!(raw);
        expect(RG.validate!(masked)).toBe(true);
    });

    it("should invalidate an incorrect RG through the validate function", () => {
        const invalidRG = '12.345.A78-0';
        expect(RG.validate!(invalidRG)).toBe(false);
    });
});