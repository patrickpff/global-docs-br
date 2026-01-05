import { describe, expect, it } from 'vitest';
import { validateCPF } from '../validate.js';

describe('validateCPF', () => {
    it('should validate a correct CPF', () => {
        const cpf = '529.982.247-25';
        expect(validateCPF(cpf)).toBe(true);
    });
  
    it('should invalidate an incorrect CPF', () => {
        const cpf = '123.456.789-00';
        expect(validateCPF(cpf)).toBe(false);
    });

    it('should invalidate a CPF with all identical digits', () => {
        const cpf = '111.111.111-11';
        expect(validateCPF(cpf)).toBe(false);
    });

    it('should validate a CPF without formatting', () => {
        const cpf = '52998224725';
        expect(validateCPF(cpf)).toBe(true);
    });
});