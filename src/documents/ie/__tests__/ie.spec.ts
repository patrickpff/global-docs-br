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

    // ========================
    // validate
    // ========================

    it("should return false if context is missing", () => {
        expect(IE.validate("123", undefined as any)).toBe(false);
    });

    it("should return false if uf is missing in context", () => {
        expect(IE.validate("123", {} as any)).toBe(false);
    });

    it("should validate IE when uf is provided", () => {
        // valid MG IE (generated or known-valid)
        const ie = "0623079040081";
        const result = IE.validate(ie, { uf: "MG" });
        expect(result).toBe(true);
    });

    // ========================
    // maks
    // ========================
    it("should return raw value if context is missing", () => {
        expect(IE.mask!("123456", undefined as any)).toBe("123456");
    });

    it("should return raw value if uf is missing in context", () => {
        expect(IE.mask!("123456", {} as any)).toBe("123456");
    });

    it("should mask IE when uf is provided", () => {
        const raw = "062307904008";
        const masked = IE.mask!(raw, { uf: "MG" });
        expect(masked).toBe("06.230.790/4008");
    });
});

