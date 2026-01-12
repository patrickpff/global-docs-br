import { describe, it, expect } from "vitest";
import { MA_IE } from "../../states/ma.js";
import { makeValidMAIE } from "../helpers/ma.js";

describe("MA IE", () => {
    describe ("validate", () => {
        it("should expose a validate function", () => {
            expect(typeof MA_IE.validate).toBe("function");
        });

        it ("accepts valid IE", () => {
            const ie = makeValidMAIE();
            expect(MA_IE.validate(ie)).toBe(true);
        })

        it ("rejects invalid IE", () => {
            expect(MA_IE.validate("1234567890123")).toBe(false);
        })
    })

    describe("mask", () => {
        it("should expose a mask function", () => {
            expect(typeof MA_IE.mask).toBe("function");
        });

        it("should mask an unformatted IE correctly", () => {
            const rawIE = "123456789";
            const maskedIE = MA_IE.mask(rawIE);
            expect(maskedIE).toBe("12.345.678-9");
        });

        it("should mask partially while typing", () => {
            expect(MA_IE.mask("1234")).toBe("12.34");
            expect(MA_IE.mask("123456")).toBe("12.345.6");
            expect(MA_IE.mask("12345678")).toBe("12.345.678");
        });
    })

})