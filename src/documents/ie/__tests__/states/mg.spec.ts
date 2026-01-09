import { describe, it, expect } from "vitest";
import { MG_IE } from "../../states/mg.js"
import { makeValidMGIE } from "../helpers/mg.js";

describe("MG IE", () => {
    describe ("validate", () => {
        it("should expose a validate function", () => {
            expect(typeof MG_IE.validate).toBe("function");
        });

        it ("accepts valid IE", () => {
            const ie = makeValidMGIE();
            expect(MG_IE.validate(ie)).toBe(true);
        })

        it ("rejects invalid IE", () => {
            expect(MG_IE.validate("1234567890123")).toBe(false);
        })
    })

    describe("mask", () => {
        it("should expose a mask function", () => {
            expect(typeof MG_IE.mask).toBe("function");
        });

        it("should mask an unformatted IE correctly", () => {
            const rawIE = "123456789012";
            const maskedIE = MG_IE.mask(rawIE);
            expect(maskedIE).toBe("12.345.678/9012");
        });

        it("should mask partially while typing", () => {
            expect(MG_IE.mask("1234")).toBe("12.34");
            expect(MG_IE.mask("123456")).toBe("12.345.6");
            expect(MG_IE.mask("123456789")).toBe("12.345.678/9");
        });
    })

})