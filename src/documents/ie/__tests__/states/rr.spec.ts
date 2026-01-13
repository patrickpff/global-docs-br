import { describe, it, expect } from "vitest";
import { RR_IE } from "../../states/rr.js";
import { makeValidRRIE } from "../helpers/rr.js";

describe("RR IE", () => {
    describe ("validate", () => {
        it("should expose a validate function", () => {
            expect(typeof RR_IE.validate).toBe("function");
        });

        it ("accepts valid IE", () => {
            const ie = makeValidRRIE();
            expect(RR_IE.validate(ie)).toBe(true);
        })

        it ("rejects invalid IE", () => {
            expect(RR_IE.validate("1234567890123")).toBe(false);
        })
    })

    describe("mask", () => {
        it("should expose a mask function", () => {
            expect(typeof RR_IE.mask).toBe("function");
        });

        it("should mask an unformatted IE correctly", () => {
            const rawIE = "123456789";
            const maskedIE = RR_IE.mask(rawIE);
            expect(maskedIE).toBe("12.345.678-9");
        });

        it("should mask partially while typing", () => {
            expect(RR_IE.mask("1234")).toBe("12.34");
            expect(RR_IE.mask("123456")).toBe("12.345.6");
            expect(RR_IE.mask("12345678")).toBe("12.345.678");
        });
    })

})