import { describe, expect, it } from 'vitest';
import { validateCNPJ } from '../validate.js';

describe('validateCNPJ', () => {
    it('should validate a correct CNPJ', () => {
        const cnpj = '11.222.333/0001-81';
        expect(validateCNPJ(cnpj)).toBe(true);
    });

    it('should invalidate an incorrect CNPJ', () => {
        const cnpj = '11.222.333/0001-00';
        expect(validateCNPJ(cnpj)).toBe(false);
    });

    it('should invalidate a CNPJ with all identical digits', () => {
        const cnpj = '11.111.111/1111-11';
        expect(validateCNPJ(cnpj)).toBe(false);
    });

    it('should validate a CNPJ without formatting', () => {
        const cnpj = '11222333000181';
        expect(validateCNPJ(cnpj)).toBe(true);
    });
});