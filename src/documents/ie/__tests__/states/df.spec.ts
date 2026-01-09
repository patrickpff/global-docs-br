import { describe, it, expect } from "vitest";
import { DF_IE } from "../../states/df.js"
import { makeValidDFIE } from "../helpers/df.js";

describe("DF IE", () => {
    describe ("validate", () => {
        it("should expose a validate function", () => {
            expect(typeof DF_IE.validate).toBe("function");
        });

        it ("accepts valid IE", () => {
            const ie = makeValidDFIE();
            expect(DF_IE.validate(ie)).toBe(true);
        })

        it ("rejects invalid IE", () => {
            expect(DF_IE.validate("1234567890123")).toBe(false);
        })
    })

    describe("mask", () => {
        it("should expose a mask function", () => {
            expect(typeof DF_IE.mask).toBe("function");
        });

        it("should mask an unformatted IE correctly", () => {
            const rawIE = "1234567890123";
            const maskedIE = DF_IE.mask(rawIE);
            expect(maskedIE).toBe("123.45678.901-23");
        });

        it("should mask partially while typing", () => {
            expect(DF_IE.mask("1234")).toBe("123.4");
            expect(DF_IE.mask("123456")).toBe("123.456");
            expect(DF_IE.mask("12345678")).toBe("123.45678");
            expect(DF_IE.mask("1234567890")).toBe("123.45678.90");
            expect(DF_IE.mask("1234567890")).toBe("123.45678.90");
        });
    })

})