import { describe, it, expect } from "vitest";
import { PR_IE } from "../../states/pr.js";
import { makeValidPRIE } from "../helpers/pr.js";

describe("PR IE", () => {
    describe ("validate", () => {
        it("should expose a validate function", () => {
            expect(typeof PR_IE.validate).toBe("function");
        });

        it ("accepts valid IE", () => {
            const ie = makeValidPRIE();
            expect(PR_IE.validate(ie)).toBe(true);
        })

        it ("rejects invalid IE", () => {
            expect(PR_IE.validate("1234567890123")).toBe(false);
        })
    })

    describe("mask", () => {
        it("should expose a mask function", () => {
            expect(typeof PR_IE.mask).toBe("function");
        });

        it("should mask an unformatted IE correctly", () => {
            const rawIE = "1234567890";
            const maskedIE = PR_IE.mask(rawIE);
            expect(maskedIE).toBe("123.45678-90");
        });

        it("should mask partially while typing", () => {
            expect(PR_IE.mask("1234")).toBe("123.4");
            expect(PR_IE.mask("123456")).toBe("123.456");
            expect(PR_IE.mask("1234567")).toBe("123.4567");
        });
    })

})