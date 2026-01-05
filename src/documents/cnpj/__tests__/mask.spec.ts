import { describe, expect, it } from 'vitest';
import { maskCNPJ } from '../mask.js';

describe('maskCNPJ', () => {
    it('should mask an unformatted CNPJ', () => {
        const cnpj = '11222333000181';
        const masked = '11.222.333/0001-81';
        expect(maskCNPJ(cnpj)).toBe(masked);
    })
    
    it('should return the same CNPJ if already formatted', () => {
        const cnpj = '11.222.333/0001-81';
        expect(maskCNPJ(cnpj)).toBe(cnpj);
    });

    it('should handle CNPJs with missing digits gracefully', () => {
        const cnpj = '11222333';
        const masked = '11.222.333';
        expect(maskCNPJ(cnpj)).toBe(masked);
    });

    it('should return an empty string for an empty input', () => {
        const cnpj = '';
        expect(maskCNPJ(cnpj)).toBe('');
    });
});