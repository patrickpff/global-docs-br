import { describe, it, expect } from "vitest";
import { AP_IE } from "../../states/ap.js";
import { makeValidAPIE } from "../helpers/ap.js";

describe("AP IE", () => {
    describe ("validate", () => {
        it("should expose a validate function", () => {
            expect(typeof AP_IE.validate).toBe("function");
        });

        it ("accepts valid IE", () => {
            const ie = makeValidAPIE()
            expect(AP_IE.validate(ie)).toBe(true);
        })

        it ("rejects invalid IE", () => {
            expect(AP_IE.validate("01.234.567/001-12")).toBe(false);
        })
    })

    describe("mask", () => {
        it("should expose a mask function", () => {
            expect(typeof AP_IE.mask).toBe("function");
        });

        it("should mask an unformatted IE correctly", () => {
            const rawIE = "012345678";
            const maskedIE = AP_IE.mask(rawIE);
            expect(maskedIE).toBe("01.234.567-8");
        });

        it("should mask partially while typing", () => {
            expect(AP_IE.mask("1234")).toBe("12.34");
            expect(AP_IE.mask("123456")).toBe("12.345.6");
            expect(AP_IE.mask("01234567")).toBe("01.234.567");
        });
    })

})