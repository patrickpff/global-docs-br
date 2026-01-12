import { describe, it, expect } from "vitest";
import { RN_IE } from "../../states/rn.js";
import { makeValidRNIE } from "../helpers/rn.js";

describe("RN IE", () => {
    describe ("validate", () => {
        it("should expose a validate function", () => {
            expect(typeof RN_IE.validate).toBe("function");
        });

        it ("accepts valid IE", () => {
            const ie = makeValidRNIE();
            expect(RN_IE.validate(ie)).toBe(true);
        })

        it ("rejects invalid IE", () => {
            expect(RN_IE.validate("1234567890123")).toBe(false);
        })
    })

    describe("mask", () => {
        it("should expose a mask function", () => {
            expect(typeof RN_IE.mask).toBe("function");
        });

        it("should mask an unformatted IE correctly", () => {
            const rawIE = "123456789";
            const maskedIE = RN_IE.mask(rawIE);
            expect(maskedIE).toBe("12.345.678-9");
        });

        it("should mask partially while typing", () => {
            expect(RN_IE.mask("1234")).toBe("12.34");
            expect(RN_IE.mask("123456")).toBe("12.345.6");
            expect(RN_IE.mask("1234567")).toBe("12.345.67");
        });
    })

})