import { describe, expect, it } from 'vitest';
import { CNH } from '../cnh.js';

describe('cnh', () => {
    it("should expose the correct type", () => {
        expect(CNH.type).toBe("CNH");
    });

    it("should have a description", () => {
        expect(CNH.description).toBeTruthy();
    });

    it("should expose a validate function", () => {
        expect(typeof CNH.validate).toBe("function");
    });

    it("should expose a mask function", () => {
        expect(typeof CNH.mask).toBe("function");
    });

    it("should validate a masked CNH correctly", () => {
        const raw = '02650306461';
        const masked = CNH.mask!(raw);
        expect(CNH.validate!(masked)).toBe(true);
    });

    it("should invalidate an incorrect CNH through the validate function", () => {
        const invalidCNH = '98765432100';
        expect(CNH.validate!(invalidCNH)).toBe(false);
    });
});