import { describe, it, expect } from "vitest";
import { RJ_IE } from "../../states/rj.js";
import { makeValidRJIE } from "../helpers/rj.js";

describe("RJ IE", () => {
    describe ("validate", () => {
        it("should expose a validate function", () => {
            expect(typeof RJ_IE.validate).toBe("function");
        });

        it ("accepts valid IE", () => {
            const ie = makeValidRJIE();
            expect(RJ_IE.validate(ie)).toBe(true);
        })

        it ("rejects invalid IE", () => {
            expect(RJ_IE.validate("1234567890123")).toBe(false);
        })
    })

    describe("mask", () => {
        it("should expose a mask function", () => {
            expect(typeof RJ_IE.mask).toBe("function");
        });

        it("should mask an unformatted IE correctly", () => {
            const rawIE = "12345678";
            const maskedIE = RJ_IE.mask(rawIE);
            expect(maskedIE).toBe("12.345.67-8");
        });

        it("should mask partially while typing", () => {
            expect(RJ_IE.mask("1234")).toBe("12.34");
            expect(RJ_IE.mask("123456")).toBe("12.345.6");
            expect(RJ_IE.mask("1234567")).toBe("12.345.67");
        });
    })

})