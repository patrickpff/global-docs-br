import { describe, it, expect } from "vitest";
import { RO_IE } from "../../states/ro.js";
import { makeValidROIE } from "../helpers/ro.js";

describe("RO IE", () => {
    describe ("validate", () => {
        it("should expose a validate function", () => {
            expect(typeof RO_IE.validate).toBe("function");
        });

        it ("accepts valid IE", () => {
            const ie = makeValidROIE();
            expect(RO_IE.validate(ie)).toBe(true);
        })

        it ("rejects invalid IE", () => {
            expect(RO_IE.validate("1234567890123")).toBe(false);
        })
    })

    describe("mask", () => {
        it("should expose a mask function", () => {
            expect(typeof RO_IE.mask).toBe("function");
        });

        it("should mask an unformatted IE correctly", () => {
            const rawIE = "12345678901234";
            const maskedIE = RO_IE.mask(rawIE);
            expect(maskedIE).toBe("12.34567890/123-4");
        });

        it("should mask partially while typing", () => {
            expect(RO_IE.mask("1234")).toBe("12.34");
            expect(RO_IE.mask("123456")).toBe("12.3456");
            expect(RO_IE.mask("12345678901")).toBe("12.34567890/1");
        });
    })

})