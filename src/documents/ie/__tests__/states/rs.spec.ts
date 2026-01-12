import { describe, it, expect } from "vitest";
import { RS_IE } from "../../states/rs.js";
import { makeValidRSIE } from "../helpers/rs.js";

describe("RS IE", () => {
    describe ("validate", () => {
        it("should expose a validate function", () => {
            expect(typeof RS_IE.validate).toBe("function");
        });

        it ("accepts valid IE", () => {
            const ie = makeValidRSIE();
            expect(RS_IE.validate(ie)).toBe(true);
        })

        it ("rejects invalid IE", () => {
            expect(RS_IE.validate("1234567890123")).toBe(false);
        })
    })

    describe("mask", () => {
        it("should expose a mask function", () => {
            expect(typeof RS_IE.mask).toBe("function");
        });

        it("should mask an unformatted IE correctly", () => {
            const rawIE = "1234567890";
            const maskedIE = RS_IE.mask(rawIE);
            expect(maskedIE).toBe("123/4567890");
        });

        it("should mask partially while typing", () => {
            expect(RS_IE.mask("1234")).toBe("123/4");
            expect(RS_IE.mask("123456")).toBe("123/456");
            expect(RS_IE.mask("1234567")).toBe("123/4567");
        });
    })

})