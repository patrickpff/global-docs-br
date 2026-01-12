import { describe, it, expect } from "vitest";
import { GO_IE } from "../../states/go.js"
import { makeValidGOIE } from "../helpers/go.js";

describe("GO IE", () => {
    describe ("validate", () => {
        it("should expose a validate function", () => {
            expect(typeof GO_IE.validate).toBe("function");
        });

        it ("accepts valid IE", () => {
            const ie = makeValidGOIE();
            expect(GO_IE.validate(ie)).toBe(true);
        })

        it ("rejects invalid IE", () => {
            expect(GO_IE.validate("1234567890123")).toBe(false);
        })
    })

    describe("mask", () => {
        it("should expose a mask function", () => {
            expect(typeof GO_IE.mask).toBe("function");
        });

        it("should mask an unformatted IE correctly", () => {
            const rawIE = "123456789";
            const maskedIE = GO_IE.mask(rawIE);
            expect(maskedIE).toBe("12.345.678-9");
        });

        it("should mask partially while typing", () => {
            expect(GO_IE.mask("1234")).toBe("12.34");
            expect(GO_IE.mask("123456")).toBe("12.345.6");
            expect(GO_IE.mask("12345678")).toBe("12.345.678");
        });
    })

})