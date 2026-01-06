import { describe, expect, it } from 'vitest';
import { maskCNH } from '../mask.js';

describe('maskCNH', () => {
    it('should mask an unformatted CNH', () => {
        const cnh = '02650306461';
        const masked = '02650306461';
        expect(maskCNH(cnh)).toBe(masked);
    });
    
    it('should return the same CNH if already formatted', () => {
        const cnh = '02650306461';
        expect(maskCNH(cnh)).toBe(cnh);
    });

    it('should handle CNHs with missing digits gracefully', () => {
        const cnh = '0265030';
        const masked = '0265030';
        expect(maskCNH(cnh)).toBe(masked);
    });

    it('should return an empty string for an empty input', () => {
        const cnh = '';
        expect(maskCNH(cnh)).toBe('');
    });
});