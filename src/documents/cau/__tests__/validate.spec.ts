import { describe, it, expect } from "vitest";
import { validateCAU } from "../validate";

describe("validateCAU", () => {
    it("should validate a correct CAU number", () => {
        const cau = "ASP1234567";
        expect(validateCAU(cau)).toBe(true);
    });

    it("should invalidate an incorrect CAU number", () => {
        const cau = "A1234567";
        expect(validateCAU(cau)).toBe(false);
    });

    it("should invalidate a CAU number with wrong country code", () => {
        const cau = "123456/XX";
        expect(validateCAU(cau)).toBe(false);
    });

    it("should accept a CAU number with few digits", () => {
        const cau = "ASP123";
        expect(validateCAU(cau)).toBe(true);
    });

    it("should invalidate a CAU number without numeric part", () => {
        const cau = "ASP";
        expect(validateCAU(cau)).toBe(false);
    });

    it("should validate a CAU number with formatting characters", () => {
        const cau = "ASP-123.4567";
        expect(validateCAU(cau)).toBe(true);
    });
});