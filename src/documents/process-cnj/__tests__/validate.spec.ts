import { describe, it, expect } from "vitest";
import { validateProcessCNJ } from "../validate.js";

describe("validateProcessCNJ", () => {
    it("should validate a correct Process CNJ number", () => {
        const processCNJ = "0001234-56.2020.8.26.0100";
        expect(validateProcessCNJ(processCNJ)).toBe(true);
    });

    it("should invalidate an incorrect Process CNJ number", () => {
        const processCNJ = "0001234-56.2020.8.26.9999";
        expect(validateProcessCNJ(processCNJ)).toBe(false);
    });

    it("should invalidate a Process CNJ number with wrong format", () => {
        const processCNJ = "1234567/2020/8260100";
        expect(validateProcessCNJ(processCNJ)).toBe(false);
    });

    it("should validate a Process CNJ number without formatting characters", () => {
        const processCNJ = "00012345620208260100";
        expect(validateProcessCNJ(processCNJ)).toBe(true);
    });

    it("should invalidate a Process CNJ number with insufficient digits", () => {
        const processCNJ = "0001234-56.2020.8.26";
        expect(validateProcessCNJ(processCNJ)).toBe(false);
    });

    it("should invalidate a Process CNJ with non-numeric characters in critical positions", () => {
        const processCNJ = "0001234-XY.2020.8.26.0100";
        expect(validateProcessCNJ(processCNJ)).toBe(false);
    });

    it("should invalidate an empty Process CNJ number", () => {
        const processCNJ = "";
        expect(validateProcessCNJ(processCNJ)).toBe(false);
    });
});