import { describe, expect, it } from "vitest";
import { UF_LIST, isValidUF } from "../ufs.js";

describe("UF validation", () => {
    it ("should accept valid UFs", () => {
        expect(isValidUF("SP")).toBe(true);
        expect(isValidUF("RJ")).toBe(true);
        expect(isValidUF("MG")).toBe(true);
    });

    it ("should reject invalid UFs", () => {
        expect(isValidUF("XX")).toBe(false);
        expect(isValidUF("")).toBe(false);
        expect(isValidUF("SaoPaulo")).toBe(false);
    });
});