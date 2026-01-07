import { describe, it, expect } from "vitest";
import { maskVoterRegistration } from "../mask.js";

describe("maskVoterRegistration", () => {
    it("should mask an unformatted CRO correctly", () => {
        const rawCRO = "111122223333";
        const maskedCRO = maskVoterRegistration(rawCRO);
        expect(maskedCRO).toBe("1111 2222 3333");
    });

    it("should remove formatting characters from CRO", () => {
        const rawCRO = "1111.2222-3333";
        const maskedCRO = maskVoterRegistration(rawCRO);
        expect(maskedCRO).toBe("1111 2222 3333");
    });

    it("should remove any letters wrongly inserted", () => {
        const rawCRO = "mg1111a2222w3333";
        const maskedCRO = maskVoterRegistration(rawCRO);
        expect(maskedCRO).toBe("1111 2222 3333");
    });

    it("should return an empty string for an empty input", () => {
        const rawCRO = "";
        const maskedCRO = maskVoterRegistration(rawCRO);
        expect(maskedCRO).toBe("");
    });
});