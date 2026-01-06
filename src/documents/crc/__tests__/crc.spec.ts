import { describe, it, expect } from "vitest";
import { CRC } from "../crc.js";

describe("CRC DocumentValidator", () => {
    it("should have correct type", () => {
        expect(CRC.type).toBe("CRC");
    });

    it("should have a description", () => {
        expect(CRC.description).toBeTruthy();
    });

    it("should expose a validate function", () => {
        expect(typeof CRC.validate).toBe("function");
    });

    it("should expose a mask function", () => {
        expect(typeof CRC.mask).toBe("function");
    });
});