import { describe, expect, it } from 'vitest';
import { validateCNH } from '../validate.js';

describe('validateCNH', () => {
    it('should validate a correct CNH', () => {
        const cnh = '02650306461';
        expect(validateCNH(cnh)).toBe(true);
    });

    it('should invalidate an incorrect CNH', () => {
        const cnh = '98765432100';
        expect(validateCNH(cnh)).toBe(false);
    });

    it('should invalidate a CNH with all identical digits', () => {
        const cnh = '11111111111';
        expect(validateCNH(cnh)).toBe(false);
    });

    it('should validate a CNH without formatting', () => {
        const cnh = '02650306461';
        expect(validateCNH(cnh)).toBe(true);
    });
});