import { describe, it, expect } from "vitest";
import { CRM } from "../crm.js";

describe("CRM DocumentValidator", () => {
    it("should have correct type", () => {
        expect(CRM.type).toBe("CRM");
    });

    it("should have a description", () => {
        expect(CRM.description).toBeTruthy();
    });

    it("should expose a validate function", () => {
        expect(typeof CRM.validate).toBe("function");
    });

    it("should expose a mask function", () => {
        expect(typeof CRM.mask).toBe("function");
    });
});
