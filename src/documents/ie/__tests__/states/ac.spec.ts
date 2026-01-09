import { describe, it, expect } from "vitest";
import { AC_IE } from "../../states/ac.js";
import { makeValidACIE } from "../helpers/ac.js";

describe("AC IE", () => {
    describe ("validate", () => {
        it("should expose a validate function", () => {
            expect(typeof AC_IE.validate).toBe("function");
        });

        it ("accepts valid IE", () => {
            const ie = makeValidACIE();
            expect(AC_IE.validate(ie)).toBe(true);
        })

        it ("rejects invalid IE", () => {
            expect(AC_IE.validate("01.234.567/001-12")).toBe(false);
        })
    })

    describe("mask", () => {
        it("should expose a mask function", () => {
            expect(typeof AC_IE.mask).toBe("function");
        });

        it("should mask an unformatted IE correctly", () => {
            const rawIE = "0123456789012";
            const maskedIE = AC_IE.mask(rawIE);
            expect(maskedIE).toBe("01.234.567/890-12");
        });

        it("should mask partially while typing", () => {
            expect(AC_IE.mask("1234")).toBe("12.34");
            expect(AC_IE.mask("123456")).toBe("12.345.6");
            expect(AC_IE.mask("123456789012")).toBe("12.345.678/901-2");
        });
    })

})