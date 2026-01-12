import { describe, it, expect } from "vitest";
import { PA_IE } from "../../states/pa.js";
import { makeValidPAIE } from "../helpers/pa.js";

describe("PA IE", () => {
    describe ("validate", () => {
        it("should expose a validate function", () => {
            expect(typeof PA_IE.validate).toBe("function");
        });

        it ("accepts valid IE", () => {
            const ie = makeValidPAIE();
            expect(PA_IE.validate(ie)).toBe(true);
        })

        it ("rejects invalid IE", () => {
            expect(PA_IE.validate("1234567890123")).toBe(false);
        })
    })

    describe("mask", () => {
        it("should expose a mask function", () => {
            expect(typeof PA_IE.mask).toBe("function");
        });

        it("should mask an unformatted IE correctly", () => {
            const rawIE = "123456789";
            const maskedIE = PA_IE.mask(rawIE);
            expect(maskedIE).toBe("12.34567-8");
        });

        it("should mask partially while typing", () => {
            expect(PA_IE.mask("1234")).toBe("12.34");
            expect(PA_IE.mask("123456")).toBe("12.3456");
            expect(PA_IE.mask("1234567")).toBe("12.34567");
        });
    })

})