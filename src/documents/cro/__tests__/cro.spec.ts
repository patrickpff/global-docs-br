import { describe, it, expect } from "vitest";
import { CRO } from '../cro.js';

describe("CRO DocumentValidator", () => {
    it("should have correct type", () => {
        expect(CRO.type).toBe("CRO");
    });

    it("should have a description", () => {
        expect(CRO.description).toBeTruthy();
    });

    it("should expose a validate function", () => {
        expect(typeof CRO.validate).toBe("function");
    });

    it("should expose a mask function", () => {
        expect(typeof CRO.mask).toBe("function");
    });
});
