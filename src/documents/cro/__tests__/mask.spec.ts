import { describe, it, expect } from "vitest";
import { maskCRO } from "../mask.js";

describe("maskCRO", () => {
    it("should mask an unformatted CRO correctly", () => {
        const rawCRO = "MG1234567";
        const maskedCRO = maskCRO(rawCRO);
        expect(maskedCRO).toBe("CRO-MG 123456/7");
    });

    it("should remove formatting characters from CRO", () => {
        const rawCRO = "MG.123.4567";
        const maskedCRO = maskCRO(rawCRO);
        expect(maskedCRO).toBe("CRO-MG 123456/7");
    });

    it("should convert lowercase letters to uppercase", () => {
        const rawCRO = "mg1234567";
        const maskedCRO = maskCRO(rawCRO);
        expect(maskedCRO).toBe("CRO-MG 123456/7");
    });

    it("should return an empty string for an empty input", () => {
        const rawCRO = "";
        const maskedCRO = maskCRO(rawCRO);
        expect(maskedCRO).toBe("");
    });
});