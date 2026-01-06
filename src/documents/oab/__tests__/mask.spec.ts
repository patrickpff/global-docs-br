import { describe, it, expect } from "vitest";
import { maskOAB } from "../mask.js";

describe("maskOAB", () => {
    it("should mask an unformatted OAB correctly", () => {
        const rawOAB = "SP123456";
        const maskedOAB = maskOAB(rawOAB);
        expect(maskedOAB).toBe("SP123456");
    });

    it("should remove formatting characters from OAB", () => {
        const rawOAB = "SP-123456";
        const maskedOAB = maskOAB(rawOAB);
        expect(maskedOAB).toBe("SP123456");
    });

    it("should convert lowercase letters to uppercase", () => {
        const rawOAB = "sp123456";
        const maskedOAB = maskOAB(rawOAB);
        expect(maskedOAB).toBe("SP123456");
    });

    it("should return an empty string for an empty input", () => {
        const rawOAB = "";
        const maskedOAB = maskOAB(rawOAB);
        expect(maskedOAB).toBe("");
    });
});