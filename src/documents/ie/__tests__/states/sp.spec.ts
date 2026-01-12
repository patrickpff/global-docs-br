import { describe, it, expect } from "vitest";
import { SP_IE } from "../../states/sp.js";
import { makeValidSPIE } from "../helpers/sp.js";

describe("SP IE", () => {
    describe ("validate", () => {
        it("should expose a validate function", () => {
            expect(typeof SP_IE.validate).toBe("function");
        });

        it ("accepts valid IE", () => {
            const ie = makeValidSPIE();
            console.log(ie)
            expect(SP_IE.validate(ie)).toBe(true);
        })

        it ("rejects invalid IE", () => {
            expect(SP_IE.validate("1234567890123")).toBe(false);
        })
    })

    describe("mask", () => {
        it("should expose a mask function", () => {
            expect(typeof SP_IE.mask).toBe("function");
        });

        it("should mask an unformatted IE correctly", () => {
            const rawIE = "123456789012";
            const maskedIE = SP_IE.mask(rawIE);
            expect(maskedIE).toBe("123.456.789.012");
        });

        it("should mask partially while typing", () => {
            expect(SP_IE.mask("1234")).toBe("123.4");
            expect(SP_IE.mask("123456")).toBe("123.456");
            expect(SP_IE.mask("1234567")).toBe("123.456.7");
        });
    })

})