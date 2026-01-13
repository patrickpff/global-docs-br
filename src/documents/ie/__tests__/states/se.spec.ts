import { describe, it, expect } from "vitest";
import { SE_IE } from "../../states/se.js";
import { makeValidSEIE } from "../helpers/se.js";

describe("SE IE", () => {
    describe ("validate", () => {
        it("should expose a validate function", () => {
            expect(typeof SE_IE.validate).toBe("function");
        });

        it ("accepts valid IE", () => {
            const ie = makeValidSEIE();
            console.log(ie)
            expect(SE_IE.validate(ie)).toBe(true);
        })

        it ("rejects invalid IE", () => {
            expect(SE_IE.validate("1234567890123")).toBe(false);
        })

        it("rejects empty IE", () => {
            expect(SE_IE.validate("")).toBe(false);
        });

        it("handles calculated DV equal to 10 or 11 correctly", () => {
            // This value is crafted so that (11 - (sum % 11)) = 10 or 11
            // forcing the fallback to 0
            const ie = "271234560"; // example that triggers DV fallback
            expect(SE_IE.validate(ie)).toBe(true);
        });


    })

    describe("mask", () => {
        it("should expose a mask function", () => {
            expect(typeof SE_IE.mask).toBe("function");
        });

        it("should mask an unformatted IE correctly", () => {
            const rawIE = "123456789012";
            const maskedIE = SE_IE.mask(rawIE);
            expect(maskedIE).toBe("123.456.78-9");
        });

        it("should mask partially while typing", () => {
            expect(SE_IE.mask("1234")).toBe("123.4");
            expect(SE_IE.mask("123456")).toBe("123.456");
            expect(SE_IE.mask("12345678")).toBe("123.456.78");
        });

        it("should return empty string when masking empty value", () => {
            expect(SE_IE.mask("")).toBe("");
        });

    })

})