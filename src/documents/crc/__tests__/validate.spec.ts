import { describe, it, expect } from "vitest";
import { validateCRC } from "../validate.js";

describe("validateCRC", () => {
    it("should validate a correct CRC number", () => {
        const crc = "SP123456O9";
        expect(validateCRC(crc)).toBe(true);
    });

    it("should invalidate an incorrect CRC number", () => {
        const crc = "SP12X56O9";
        expect(validateCRC(crc)).toBe(false);
    });

    it("should invalidate a CRC number with wrong state code", () => {
        const crc = "XX123456O9";
        expect(validateCRC(crc)).toBe(false);
    });

    it("should accept a CRC number with few digits", () => {
        const crc = "SP1234O9";
        expect(validateCRC(crc)).toBe(true);
    });

    it("should invalidate a CRC number without numeric part", () => {
        const crc = "SP-O9";
        expect(validateCRC(crc)).toBe(false);
    });

    it("should validate a CRC number with formatting characters", () => {
        const crc = "CRC/SP 123456 O-9";
        expect(validateCRC(crc)).toBe(true);
    });
});