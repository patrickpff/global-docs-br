import { describe, it, expect } from "vitest";
import { validateCRO } from "../validate.js";

describe("validateCRO", () => {
    it("should validate a correct CRO number", () => {
        const cro = "SP1234567";
        expect(validateCRO(cro)).toBe(true);
    });

    it("should invalidate an incorrect CRO number", () => {
        const cro = "SP12X45X7";
        expect(validateCRO(cro)).toBe(false);
    });

    it("should invalidate a CRO number with wrong state code", () => {
        const cro = "XX1234567";
        expect(validateCRO(cro)).toBe(false);
    });

    it("should accept a CRO number with few digits", () => {
        const cro = "SP1234";
        expect(validateCRO(cro)).toBe(true);
    });

    it("should invalidate a CRO number without numeric part", () => {
        const cro = "SP";
        expect(validateCRO(cro)).toBe(false);
    });

    it("should validate a CRO number with formatting characters", () => {
        const cro = "SP-1234567";
        expect(validateCRO(cro)).toBe(true);
    });
});