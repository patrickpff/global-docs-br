import { describe, it, expect } from "vitest";
import { CE_IE } from "../../states/ce.js"
import { makeValidCEIE } from "../helpers/ce.js";

describe("CE IE", () => {
    describe ("validate", () => {
        it("should expose a validate function", () => {
            expect(typeof CE_IE.validate).toBe("function");
        });

        it ("accepts valid IE", () => {
            const ie = makeValidCEIE();
            expect(CE_IE.validate(ie)).toBe(true);
        })

        it ("rejects invalid IE", () => {
            expect(CE_IE.validate("1234567890123")).toBe(false);
        })
    })

    describe("mask", () => {
        it("should expose a mask function", () => {
            expect(typeof CE_IE.mask).toBe("function");
        });

        it("should mask an unformatted IE correctly", () => {
            const rawIE = "123456789";
            const maskedIE = CE_IE.mask(rawIE);
            expect(maskedIE).toBe("12.345.678-9");
        });

        it("should mask partially while typing", () => {
            expect(CE_IE.mask("1234")).toBe("12.34");
            expect(CE_IE.mask("123456")).toBe("12.345.6");
            expect(CE_IE.mask("12345678")).toBe("12.345.678");
        });
    })

})