import { describe, it, expect } from "vitest";
import { maskProcessCNJ } from "../mask.js";

describe("maskProcessCNJ", () => {
    it("should mask an unformatted CNJ process number correctly", () => {
        const raw = "00012345620238260100";
        const masked = "0001234-56.2023.8.26.0100";
        
        expect(maskProcessCNJ(raw)).toBe(masked);
    });

    it("should handle partial CNJ numbers gracefully", () => {
        const raw = "0001234562023";
        const masked = "0001234-56.2023";

        expect(maskProcessCNJ(raw)).toBe(masked);
    });

    it("should return an empty string for an empty input", () => {
        expect(maskProcessCNJ("")).toBe("");
    });

    it("should remove existing formatting characters", () => {
        const raw = "0001234--56.2023.8.26.0100";
        const masked = "0001234-56.2023.8.26.0100";

        expect(maskProcessCNJ(raw)).toBe(masked);
    });
});