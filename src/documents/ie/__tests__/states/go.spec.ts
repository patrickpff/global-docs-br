import { describe, it, expect } from "vitest";
import { GO_IE } from "../../states/go.js"
import { makeValidGOIE, makeValidGOIESpecialRange, makeValidGOIEWithMod1 } from "../helpers/go.js";

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

        it("accepts valid IE when mod1 === 0", () => {
            const ie = makeValidGOIEWithMod1(false);
            expect(GO_IE.validate(ie)).toBe(true);
        });

        it("accepts valid IE when mod1 === 1 outside special range", () => {
            const ie = makeValidGOIEWithMod1(false);
            expect(GO_IE.validate(ie)).toBe(true);
        });

        it("accepts valid IE when mod1 === 1 inside special range", () => {
            const ie = makeValidGOIESpecialRange();
            expect(GO_IE.validate(ie)).toBe(true);
        });

        it("rejects IE with invalid prefix", () => {
            // starts with 12 (invalid for GO)
            expect(GO_IE.validate("123456780")).toBe(false);
        });

        it("rejects IE with invalid length", () => {
            expect(GO_IE.validate("123")).toBe(false);
        });

        it("accepts valid IE when mod > 1 (default rule)", () => {
            // brute force until mod > 1 is hit
            let ie = "";
            do {
                ie = makeValidGOIE();
                const digits = ie.replace(/\D/g, "");
                const base = digits.slice(0, 8);

                const weights = [9,8,7,6,5,4,3,2];
                let sum = 0;
                for (let i = 0; i < 8; i++) {
                    sum += Number(base[i]) * weights[i];
                }

                if (sum % 11 > 1) break;
            } while (true);

            expect(GO_IE.validate(ie)).toBe(true);
        });

        it("rejects IE with wrong DV when mod === 1 outside special range", () => {
            const ie = makeValidGOIEWithMod1(false);

            // force DV wrong
            const wrongIE =
                ie.slice(0, -1) + (ie.endsWith("0") ? "1" : "0");

            expect(GO_IE.validate(wrongIE)).toBe(false);
        });
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

        it("returns empty string when value is empty", () => {
            expect(GO_IE.mask("")).toBe("");
        });

        it("returns raw value when less than 2 digits", () => {
            expect(GO_IE.mask("1")).toBe("1");
        });
    })

})