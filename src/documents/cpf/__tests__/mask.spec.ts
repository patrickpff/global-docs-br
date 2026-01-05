import { describe, expect, it } from 'vitest';
import { maskCPF } from '../mask.js';

describe('maskCPF', () => {
    it('should mask an unformatted CPF', () => {
        const cpf = '52998224725';
        const masked = '529.982.247-25';
        expect(maskCPF(cpf)).toBe(masked);
    })
    
    it('should return the same CPF if already formatted', () => {
        const cpf = '529.982.247-25';
        expect(maskCPF(cpf)).toBe(cpf);
    });

    it('should handle CPFs with missing digits gracefully', () => {
        const cpf = '5299822';
        const masked = '529.982.2';
        expect(maskCPF(cpf)).toBe(masked);
    });

    it('should return an empty string for an empty input', () => {
        const cpf = '';
        expect(maskCPF(cpf)).toBe('');
    });
});