import { describe, expect, it } from 'vitest';
import { validateRG } from '../validate.js';

describe('validateRG', () => {
    it('should validate a correct RG', () => {
        const rg = '12.345.678-9';
        expect(validateRG(rg)).toBe(true);
    });

    it('should validate an RG without formatting', () => {
        const rg = '123456789';
        expect(validateRG(rg)).toBe(true);
    });

    it('should invalidate an RG with letters', () => {
        const rg = '12.345.A78-9';
        expect(validateRG(rg)).toBe(false);
    });

    it('should invalidate an RG with insufficient digits', () => {
        const rg = '123';
        expect(validateRG(rg)).toBe(false);
    });
});