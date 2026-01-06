import { describe, it, expect } from "vitest";
import { OAB } from "../oab.js";

describe("OAB DocumentValidator", () => {
    it("should have correct type", () => {
        expect(OAB.type).toBe("OAB");
    });

    it("should have a description", () => {
        expect(OAB.description).toBeTruthy();
    });

    it("should expose a validate function", () => {
        expect(typeof OAB.validate).toBe("function");
    });

    it("should expose a mask function", () => {
        expect(typeof OAB.mask).toBe("function");
    });

    it("should validate a masked OAB correctly", () => {
        const raw = 'MG-123456';
        const masked = OAB.mask!(raw);
        expect(OAB.validate!(masked)).toBe(true);
    });

    it("should invalidate an incorrect OAB through the validate function", () => {
        const invalidOAB = 'MG12X45X';
        expect(OAB.validate!(invalidOAB)).toBe(false);
    });
});

