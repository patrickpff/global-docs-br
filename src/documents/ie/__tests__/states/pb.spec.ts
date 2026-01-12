import { describe, it, expect } from "vitest";
import { PB_IE } from "../../states/pb.js";
import { makeValidPBIE } from "../helpers/pb.js";

describe("PB IE", () => {
    describe ("validate", () => {
        it("should expose a validate function", () => {
            expect(typeof PB_IE.validate).toBe("function");
        });

        it ("accepts valid IE", () => {
            const ie = makeValidPBIE();
            expect(PB_IE.validate(ie)).toBe(true);
        })

        it ("rejects invalid IE", () => {
            expect(PB_IE.validate("1234567890123")).toBe(false);
        })
    })

    describe("mask", () => {
        it("should expose a mask function", () => {
            expect(typeof PB_IE.mask).toBe("function");
        });

        it("should mask an unformatted IE correctly", () => {
            const rawIE = "123456789";
            const maskedIE = PB_IE.mask(rawIE);
            expect(maskedIE).toBe("12.345.678-9");
        });

        it("should mask partially while typing", () => {
            expect(PB_IE.mask("1234")).toBe("12.34");
            expect(PB_IE.mask("123456")).toBe("12.345.6");
            expect(PB_IE.mask("1234567")).toBe("12.345.67");
        });
    })

})