import { describe, it, expect } from "vitest";
import { maskPassport } from "../mask.js";

describe("maskPassport", () => {
    it("should mask an unformatted OAB correctly", () => {
        const rawOAB = "PA123456";
        const maskedOAB = maskPassport(rawOAB);
        expect(maskedOAB).toBe("PA123456");
    });

    it("should remove formatting characters from OAB", () => {
        const rawOAB = "PA-123456";
        const maskedOAB = maskPassport(rawOAB);
        expect(maskedOAB).toBe("PA123456");
    });

    it("should convert lowercase letters to uppercase", () => {
        const rawOAB = "pa123456";
        const maskedOAB = maskPassport(rawOAB);
        expect(maskedOAB).toBe("PA123456");
    });

    it("should return an empty string for an empty input", () => {
        const rawOAB = "";
        const maskedOAB = maskPassport(rawOAB);
        expect(maskedOAB).toBe("");
    });
});