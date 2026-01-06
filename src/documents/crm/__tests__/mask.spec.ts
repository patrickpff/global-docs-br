import { describe, it, expect } from "vitest";
import { maskCRM } from "../mask.js";

describe("maskCRM", () => {
    it("should mask an unformatted CRM correctly", () => {
        const rawCRM = "SP1234567";
        const maskedCRM = maskCRM(rawCRM);
        expect(maskedCRM).toBe("CRM-SP 1234567");
    });

    it("should remove formatting characters from CRM", () => {
        const rawCRM = "SP.123.4567";
        const maskedCRM = maskCRM(rawCRM);
        expect(maskedCRM).toBe("CRM-SP 1234567");
    });

    it("should convert lowercase letters to uppercase", () => {
        const rawCRM = "sp1234567";
        const maskedCRM = maskCRM(rawCRM);
        expect(maskedCRM).toBe("CRM-SP 1234567");
    });

    it("should return an empty string for an empty input", () => {
        const rawCRM = "";
        const maskedCRM = maskCRM(rawCRM);
        expect(maskedCRM).toBe("");
    });
});