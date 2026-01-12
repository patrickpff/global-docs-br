import { describe, it, expect } from "vitest";
import { SC_IE } from "../../states/sc.js";
import { makeValidSCIE } from "../helpers/sc.js";

describe("SC IE", () => {
    describe ("validate", () => {
        it("should expose a validate function", () => {
            expect(typeof SC_IE.validate).toBe("function");
        });

        it ("accepts valid IE", () => {
            const ie = makeValidSCIE();
            expect(SC_IE.validate(ie)).toBe(true);
        })

        it ("rejects invalid IE", () => {
            expect(SC_IE.validate("1234567890123")).toBe(false);
        })
    })

    describe("mask", () => {
        it("should expose a mask function", () => {
            expect(typeof SC_IE.mask).toBe("function");
        });

        it("should mask an unformatted IE correctly", () => {
            const rawIE = "123456789";
            const maskedIE = SC_IE.mask(rawIE);
            expect(maskedIE).toBe("123.456.789");
        });

        it("should mask partially while typing", () => {
            expect(SC_IE.mask("1234")).toBe("123.4");
            expect(SC_IE.mask("123456")).toBe("123.456");
            expect(SC_IE.mask("1234567")).toBe("123.456.7");
        });
    })

})