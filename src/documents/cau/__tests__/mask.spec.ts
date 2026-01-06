import { describe, it, expect } from "vitest";
import { maskCAU } from "../mask";

describe("maskCAU", () => {
    it("should mask an unformatted CAU correctly", () => {
        const rawCAU = "ASP1234567";
        const maskedCAU = maskCAU(rawCAU);
        expect(maskedCAU).toBe("CAU-SP A1234567");
    });

    it("should remove formatting characters from CAU", () => {
        const rawCAU = "A-SP.123.4567";
        const maskedCAU = maskCAU(rawCAU);
        expect(maskedCAU).toBe("CAU-SP A1234567");
    });

    it("should convert lowercase letters to uppercase", () => {
        const rawCAU = "asp1234567";
        const maskedCAU = maskCAU(rawCAU);
        expect(maskedCAU).toBe("CAU-SP A1234567");
    });

    it("should return an empty string for an empty input", () => {
        const rawCAU = "";
        const maskedCAU = maskCAU(rawCAU);
        expect(maskedCAU).toBe("");
    });
});