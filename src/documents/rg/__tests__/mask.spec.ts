import { describe, expect, it } from 'vitest';
import { maskRG } from '../mask.js';

describe('maskRG', () => {
    it('should mask an unformatted RG', () => {
        const rg = '123456789';
        const masked = '12.345.678-9';
        expect(maskRG(rg)).toBe(masked);
    })
    
    it('should return the same RG if already formatted', () => {
        const rg = '12.345.678-9';
        expect(maskRG(rg)).toBe(rg);
    });

    it('should handle RGs with missing digits gracefully', () => {
        const rg = '123456';
        const masked = '12.345.6';
        expect(maskRG(rg)).toBe(masked);
    });

    it('should return an empty string for an empty input', () => {
        const rg = '';
        expect(maskRG(rg)).toBe('');
    });
});