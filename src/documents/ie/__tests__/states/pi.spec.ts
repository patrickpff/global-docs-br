import { describe, it, expect } from "vitest";
import { PI_IE } from "../../states/pi.js";
import { makeValidPIIE } from "../helpers/pi.js";

describe("PI IE", () => {
    describe ("validate", () => {
        it("should expose a validate function", () => {
            expect(typeof PI_IE.validate).toBe("function");
        });

        it ("accepts valid IE", () => {
            const ie = makeValidPIIE();
            expect(PI_IE.validate(ie)).toBe(true);
        })

        it ("rejects invalid IE", () => {
            expect(PI_IE.validate("1234567890123")).toBe(false);
        })
    })

    describe("mask", () => {
        it("should expose a mask function", () => {
            expect(typeof PI_IE.mask).toBe("function");
        });

        it("should mask an unformatted IE correctly", () => {
            const rawIE = "123456789";
            const maskedIE = PI_IE.mask(rawIE);
            expect(maskedIE).toBe("12345678-9");
        });

        it("should mask partially while typing", () => {
            expect(PI_IE.mask("1234")).toBe("1234");
            expect(PI_IE.mask("123456")).toBe("123456");
            expect(PI_IE.mask("1234567")).toBe("1234567");
        });
    })

})