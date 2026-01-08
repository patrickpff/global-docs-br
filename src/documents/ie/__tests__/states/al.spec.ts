import { describe, it, expect } from "vitest";
import { AL_IE } from "../../states/al.js";
import { makeValidALIE } from "../helpers/al.js";

describe("AL IE", () => {
    describe ("validate", () => {
        it("should expose a validate function", () => {
            expect(typeof AL_IE.validate).toBe("function");
        });

        it ("accepts valid IE", () => {
            const ie = makeValidALIE();
            expect(AL_IE.validate(ie)).toBe(true);
        });

        it ("rejects invalid IE", () => {
            expect(AL_IE.validate("01.234.567/001-12")).toBe(false);
        });
    })

    describe("mask", () => {
        it("should expose a mask function", () => {
            expect(typeof AL_IE.mask).toBe("function");
        });

        it("should mask an unformatted IE correctly", () => {
            const rawIE = "012345678";
            const maskedIE = AL_IE.mask(rawIE);
            expect(maskedIE).toBe("01.234.567-8");
        });

        it("should mask partially while typing", () => {
            expect(AL_IE.mask("1234")).toBe("12.34");
            expect(AL_IE.mask("123456")).toBe("12.345.6");
            expect(AL_IE.mask("01234567")).toBe("01.234.567");
        });
    })

})