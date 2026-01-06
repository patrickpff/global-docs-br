import { describe, it, expect } from "vitest";
import { maskCREA } from "../mask.js";

describe("maskCREA", () => {
    it("should mask an unformatted CREA correctly", () => {
        const rawCREA = "SP1234567";
        const maskedCREA = maskCREA(rawCREA);
        expect(maskedCREA).toBe("CREA-SP 1234567");
    });

    it("should remove formatting characters from CREA", () => {
        const rawCREA = "SP.123.4567";
        const maskedCREA = maskCREA(rawCREA);
        expect(maskedCREA).toBe("CREA-SP 1234567");
    });

    it("should convert lowercase letters to uppercase", () => {
        const rawCREA = "sp1234567";
        const maskedCREA = maskCREA(rawCREA);
        expect(maskedCREA).toBe("CREA-SP 1234567");
    });

    it("should return an empty string for an empty input", () => {
        const rawCREA = "";
        const maskedCREA = maskCREA(rawCREA);
        expect(maskedCREA).toBe("");
    });
});