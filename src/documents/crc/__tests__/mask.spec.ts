import { describe, it, expect } from "vitest";
import { maskCRC } from "../mask.js";

describe("maskCRC", () => {
    it("should mask an unformatted CRC correctly", () => {
        const rawCRC = "SP123456O9";
        const maskedCRC = maskCRC(rawCRC);
        expect(maskedCRC).toBe("CRC-SP 123456/O-9");
    });

    it("should remove formatting characters from CRC", () => {
        const rawCRC = "CRC/SP 123456 O-9";
        const maskedCRC = maskCRC(rawCRC);
        expect(maskedCRC).toBe("CRC-SP 123456/O-9");
    });

    it("should convert lowercase letters to uppercase", () => {
        const rawCRC = "sp123456o9";
        const maskedCRC = maskCRC(rawCRC);
        expect(maskedCRC).toBe("CRC-SP 123456/O-9");
    });

    it("should return an empty string for an empty input", () => {
        const rawCRC = "";
        const maskedCRC = maskCRC(rawCRC);
        expect(maskedCRC).toBe("");
    });
});