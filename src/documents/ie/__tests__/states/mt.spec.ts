import { describe, it, expect } from "vitest";
import { MT_IE } from "../../states/mt.js";
import { makeValidMTIE } from "../helpers/mt.js";

describe("MT IE", () => {
    describe ("validate", () => {
        it("should expose a validate function", () => {
            expect(typeof MT_IE.validate).toBe("function");
        });

        it ("accepts valid IE", () => {
            const ie = makeValidMTIE();
            expect(MT_IE.validate(ie)).toBe(true);
        })

        it ("rejects invalid IE", () => {
            expect(MT_IE.validate("1234567890123")).toBe(false);
        })
    })

    describe("mask", () => {
        it("should expose a mask function", () => {
            expect(typeof MT_IE.mask).toBe("function");
        });

        it("should mask an unformatted IE correctly", () => {
            const rawIE = "1234567890";
            const maskedIE = MT_IE.mask(rawIE);
            expect(maskedIE).toBe("123456789-0");
        });

        it("should mask partially while typing", () => {
            expect(MT_IE.mask("1234")).toBe("1234");
            expect(MT_IE.mask("123456")).toBe("123456");
            expect(MT_IE.mask("123456789")).toBe("123456789");
        });
    })

})