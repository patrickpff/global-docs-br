import { describe, it, expect } from "vitest";
import { BA_IE } from "../../states/ba.js";
import { makeValidBAIE } from "../helpers/ba.js";

describe("BA IE", () => {
    describe ("validate", () => {
        it("should expose a validate function", () => {
            expect(typeof BA_IE.validate).toBe("function");
        });

        it ("accepts valid IE", () => {
            const ie = makeValidBAIE()
            expect(BA_IE.validate(ie)).toBe(true);
        })

        it ("rejects invalid IE", () => {
            expect(BA_IE.validate("01.234.567/001-12")).toBe(false);
        })
    })

    describe("mask", () => {
        it("should expose a mask function", () => {
            expect(typeof BA_IE.mask).toBe("function");
        });

        it("should mask an unformatted IE correctly", () => {
            const rawIE = "12345678";
            const maskedIE = BA_IE.mask(rawIE);
            expect(maskedIE).toBe("123456-78");
        });

        it("should mask partially while typing", () => {
            expect(BA_IE.mask("1234")).toBe("1234");
            expect(BA_IE.mask("123456")).toBe("123456");
            expect(BA_IE.mask("1234567")).toBe("123456-7");
        });
    })

})