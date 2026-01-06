import { describe, it, expect } from "vitest";
import { CREA } from "../crea.js";

describe("CREA DocumentValidator", () => {
    it("should have correct type", () => {
        expect(CREA.type).toBe("CREA");
    });

    it("should have a description", () => {
        expect(CREA.description).toBeTruthy();
    });

    it("should expose a validate function", () => {
        expect(typeof CREA.validate).toBe("function");
    });

    it("should expose a mask function", () => {
        expect(typeof CREA.mask).toBe("function");
    });
});