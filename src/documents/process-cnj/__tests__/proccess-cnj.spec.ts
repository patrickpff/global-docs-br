import { describe, it, expect } from "vitest";
import { ProcessCNJ } from "../process-cnj.js";

describe("ProcessCNJ Document", () => {
    it("should have the correct type", () => {
        expect(ProcessCNJ.type).toBe("ProcessCNJ");
    });

    it("should have a description", () => {
        expect(ProcessCNJ.description).toBeTruthy();
    });

    it("should expose a validate function", () => {
        expect(typeof ProcessCNJ.validate).toBe("function");
    });

    it("should expose a mask function", () => {
        expect(typeof ProcessCNJ.mask).toBe("function");
    });

    it("should validate a masked ProcessCNJ correctly", () => {
        const raw = '0000001-65.2017.8.26.0100';
        const masked = ProcessCNJ.mask!(raw);
        expect(ProcessCNJ.validate!(masked)).toBe(true);
    });

    it("should invalidate an incorrect ProcessCNJ through the validate function", () => {
        const invalidProcessCNJ = '0001234-56.2020.8.26.9999';
        expect(ProcessCNJ.validate!(invalidProcessCNJ)).toBe(false);
    });
});