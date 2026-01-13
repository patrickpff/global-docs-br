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

    it("should return original value when format does not match CRO pattern", () => {
        expect(maskCRO("ABC123")).toBe("ABC123");
    });

    it("should return original value when UF is invalid", () => {
        expect(maskCRO("ZZ1234567")).toBe("ZZ1234567");
    });

    it("should mask CRO without DV when DV is not provided yet", () => {
        const rawCRO = "MG123456";
        const maskedCRO = maskCRO(rawCRO);
        expect(maskedCRO).toBe("CRO-MG 123456");
    });
});