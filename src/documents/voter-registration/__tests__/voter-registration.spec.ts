import { describe, it, expect } from "vitest";
import { VoterRegistration } from '../voter-registration.js';

describe("VoterRegistration DocumentValidator", () => {
    it("should have correct type", () => {
        expect(VoterRegistration.type).toBe("VoterRegistration");
    });

    it("should have a description", () => {
        expect(VoterRegistration.description).toBeTruthy();
    });

    it("should expose a validate function", () => {
        expect(typeof VoterRegistration.validate).toBe("function");
    });

    it("should expose a mask function", () => {
        expect(typeof VoterRegistration.mask).toBe("function");
    });
});
