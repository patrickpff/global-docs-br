import { describe, expect, it } from "vitest";
import { 
    onlyDigits, 
    normalizeUppercase, 
    removeSeparators 
} from "../../shared/normalize.js";

describe("normalize", () => {
    describe("onlyDigits", () => {
        it("should remove all non-digit characters", () => {
            expect(onlyDigits("ABC123!@#456")).toBe("123456");
            expect(onlyDigits("Phone: (123) 456-7890")).toBe("1234567890");
            expect(onlyDigits("No digits here!")).toBe("");
        });
    });

    describe("normalizeUppercase", () => {
        it("should trim whitespace and convert to uppercase", () => {
            expect(normalizeUppercase("  hello world  ")).toBe("HELLO WORLD");
            expect(normalizeUppercase("TestString")).toBe("TESTSTRING");
            expect(normalizeUppercase("  Mixed CASE  ")).toBe("MIXED CASE");
        });
    });

    describe("removeSeparators", () => {
        it("should remove spaces, dashes, dots, and slashes", () => {
            expect(removeSeparators("123-456.789/00")).toBe("12345678900");
            expect(removeSeparators(" 12 34 56 ")).toBe("123456");
            expect(removeSeparators("No-Separators.Here/")).toBe("NoSeparatorsHere");
        });
    });
});