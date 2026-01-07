import { describe, it, expect } from "vitest";
import { Passport } from "../passport.js";

describe("Passport DocumentValidator", () => {
    it("should have correct type", () => {
        expect(Passport.type).toBe("Passport");
    });

    it("should have a description", () => {
        expect(Passport.description).toBeTruthy();
    });

    it("should expose a validate function", () => {
        expect(typeof Passport.validate).toBe("function");
    });

    it("should expose a mask function", () => {
        expect(typeof Passport.mask).toBe("function");
    });

    it("should validate a masked Passport correctly", () => {
        const raw = 'PA-123456';
        const masked = Passport.mask!(raw);
        expect(Passport.validate!(masked)).toBe(true);
    });

    it("should invalidate an incorrect Passport through the validate function", () => {
        const invalidPassport = 'PA12X4S6';
        expect(Passport.validate!(invalidPassport)).toBe(false);
    });
});

