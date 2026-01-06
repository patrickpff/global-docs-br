import { describe, it, expect } from "vitest";
import { CAU } from "../cau.js";

describe("CAU DocumentValidator", () => {
    it("should have correct type", () => {
        expect(CAU.type).toBe("CAU");
    });

    it("should have a description", () => {
        expect(CAU.description).toBeTruthy();
    });

    it("should expose a validate function", () => {
        expect(typeof CAU.validate).toBe("function");
    });

    it("should expose a mask function", () => {
        expect(typeof CAU.mask).toBe("function");
    });
});