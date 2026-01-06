import { describe, it, expect } from "vitest";
import { validateCREA } from "../validate";

describe("validateCREA", () => {
    it("should validate a correct CREA number", () => {
        const crea = "SP1234567";
        expect(validateCREA(crea)).toBe(true);
    });

    it("should invalidate an incorrect CREA number", () => {
        const crea = "SP12X45X7";
        expect(validateCREA(crea)).toBe(false);
    });

    it("should invalidate a CREA number with wrong state code", () => {
        const crea = "XX1234567";
        expect(validateCREA(crea)).toBe(false);
    });

    it("should accept a CREA number with few digits", () => {
        const crea = "SP1234";
        expect(validateCREA(crea)).toBe(true);
    });

    it("should invalidate a CREA number without numeric part", () => {
        const crea = "SP";
        expect(validateCREA(crea)).toBe(false);
    });

    it("should validate a CREA number with formatting characters", () => {
        const crea = "SP-1234567";
        expect(validateCREA(crea)).toBe(true);
    });
});