import { describe, it, expect } from "vitest";
import { validatePassport } from "../validate.js";

describe("validatePassport", () => {
    it("should validate a correct Passport number", () => {
        const oab = "PA123456";
        expect(validatePassport(oab)).toBe(true);
    });

    it("should invalidate an incorrect Passport number", () => {
        const oab = "PA12X4S6";
        expect(validatePassport(oab)).toBe(false);
    });

    it("should invalidate Passport with a number diferent from letters", () => {
        const oab = "P123456";
        expect(validatePassport(oab)).toBe(false);
    });

    it("should invalidate an Passport number with few digits", () => {
        const oab = "PA12345";
        expect(validatePassport(oab)).toBe(false);
    });

    it("should invalidate an Passport number without numeric part", () => {
        const oab = "PA";
        expect(validatePassport(oab)).toBe(false);
    });

    it("should validate an Passport number with formatting characters", () => {
        const oab = "MG-123456";
        expect(validatePassport(oab)).toBe(true);
    });
});