import { describe, it, expect } from "vitest";
import { IE } from "../ie"

describe("IE DocumentValidator", () => {
    it("should have correct type", () => {
        expect(IE.type).toBe("IE");
    });

    it("should have a description", () => {
        expect(IE.description).toBeTruthy();
    });

    it("should expose a validate function", () => {
        expect(typeof IE.validate).toBe("function");
    });

    it("should expose a mask function", () => {
        expect(typeof IE.mask).toBe("function");
    });

    // it("should validate a masked IE correctly", () => {
    //     const raw = '1345678900013';
    //     const masked = IE.mask!(raw);
    //     expect(IE.validate!(masked)).toBe(true);
    // });

    // it("should invalidate an incorrect OAB through the validate function", () => {
    //     const invalidOAB = 'MG12X45X';
    //     expect(OAB.validate!(invalidOAB)).toBe(false);
    // });
});

