import { describe, it, expect } from "vitest";
import { PE_IE } from "../../states/pe.js";
import { makeValidPEIE } from "../helpers/pe.js";

describe("PE IE", () => {
    describe ("validate", () => {
        it("should expose a validate function", () => {
            expect(typeof PE_IE.validate).toBe("function");
        });

        it ("accepts valid IE", () => {
            const ie = makeValidPEIE();
            expect(PE_IE.validate(ie)).toBe(true);
        })

        it ("rejects invalid IE", () => {
            expect(PE_IE.validate("1234567890123")).toBe(false);
        })
    })

    describe("mask", () => {
        it("should expose a mask function", () => {
            expect(typeof PE_IE.mask).toBe("function");
        });

        it("should mask an unformatted IE correctly", () => {
            const rawIE = "12345678";
            const maskedIE = PE_IE.mask(rawIE);
            expect(maskedIE).toBe("1234567-8");
        });

        it("should mask partially while typing", () => {
            expect(PE_IE.mask("1234")).toBe("1234");
            expect(PE_IE.mask("123456")).toBe("123456");
            expect(PE_IE.mask("1234567")).toBe("1234567");
        });
    })

})