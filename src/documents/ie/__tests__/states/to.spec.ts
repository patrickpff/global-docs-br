import { describe, it, expect } from "vitest";
import { TO_IE } from "../../states/to.js";
import { makeValidTOIE } from "../helpers/to.js";

describe("TO IE", () => {
    describe ("validate", () => {
        it("should expose a validate function", () => {
            expect(typeof TO_IE.validate).toBe("function");
        });

        it ("accepts valid IE", () => {
            const ie = makeValidTOIE();
            console.log(ie)
            expect(TO_IE.validate(ie)).toBe(true);
        })

        it ("rejects invalid IE", () => {
            expect(TO_IE.validate("1234567890123")).toBe(false);
        })
    })

    describe("mask", () => {
        it("should expose a mask function", () => {
            expect(typeof TO_IE.mask).toBe("function");
        });

        it("should mask an unformatted IE correctly", () => {
            const rawIE = "123456789";
            const maskedIE = TO_IE.mask(rawIE);
            expect(maskedIE).toBe("12.345.678-9");
        });

        it("should mask partially while typing", () => {
            expect(TO_IE.mask("1234")).toBe("12.34");
            expect(TO_IE.mask("123456")).toBe("12.345.6");
            expect(TO_IE.mask("1234567")).toBe("12.345.67");
        });
    })

})