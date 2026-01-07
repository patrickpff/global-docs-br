import { describe, it, expect } from "vitest";
import { validateVoterRegistration } from "../validate.js";

describe("validateVoterRegistration", () => {
    it("should validate a correct Voter Registration number", () => {
        const cro = "046854740264";
        expect(validateVoterRegistration(cro)).toBe(true);
    });

    it("should invalidate an incorrect Voter Registration number", () => {
        const cro = "123456789123";
        expect(validateVoterRegistration(cro)).toBe(false);
    });

    it("should invalidate a Voter Registration number with wrong state code", () => {
        const cro = "046854742964";
        expect(validateVoterRegistration(cro)).toBe(false);
    });

    it("should invalidate a Voter Registration number with few digits", () => {
        const cro = "04685474";
        expect(validateVoterRegistration(cro)).toBe(false);
    });
    
    it("should validate a Voter Registration number with formatting characters", () => {
        const cro1 = "0468 5474 0264";
        expect(validateVoterRegistration(cro1)).toBe(true);
        const cro2 = "0468-5474-0264";
        expect(validateVoterRegistration(cro2)).toBe(true);
    });
});