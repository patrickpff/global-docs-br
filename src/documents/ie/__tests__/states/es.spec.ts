import { describe, it, expect } from "vitest";
import { ES_IE } from "../../states/es.js"
import { makeValidESIE } from "../helpers/es.js";

describe("CE IE", () => {
    describe ("validate", () => {
        it("should expose a validate function", () => {
            expect(typeof ES_IE.validate).toBe("function");
        });

        it ("accepts valid IE", () => {
            const ie = makeValidESIE();
            expect(ES_IE.validate(ie)).toBe(true);
        })

        it ("rejects invalid IE", () => {
            expect(ES_IE.validate("1234567890123")).toBe(false);
        })
    })

    describe("mask", () => {
        it("should expose a mask function", () => {
            expect(typeof ES_IE.mask).toBe("function");
        });

        it("should mask an unformatted IE correctly", () => {
            const rawIE = "123456789";
            const maskedIE = ES_IE.mask(rawIE);
            expect(maskedIE).toBe("12.345.678-9");
        });

        it("should mask partially while typing", () => {
            expect(ES_IE.mask("1234")).toBe("12.34");
            expect(ES_IE.mask("123456")).toBe("12.345.6");
            expect(ES_IE.mask("12345678")).toBe("12.345.678");
        });
    })

})