import { describe, it, expect } from "vitest";
import { validateCRM } from "../validate.js";

describe("validateCRM", () => {
    it("should validate a correct CRM number", () => {
        const crm = "SP1234567";
        expect(validateCRM(crm)).toBe(true);
    });

    it("should invalidate an incorrect CRM number", () => {
        const crm = "SP12X45X7";
        expect(validateCRM(crm)).toBe(false);
    });

    it("should invalidate a CRM number with wrong state code", () => {
        const crm = "XX1234567";
        expect(validateCRM(crm)).toBe(false);
    });

    it("should accept a CRM number with few digits", () => {
        const crm = "SP1234";
        expect(validateCRM(crm)).toBe(true);
    });

    it("should invalidate a CRM number without numeric part", () => {
        const crm = "SP";
        expect(validateCRM(crm)).toBe(false);
    });

    it("should validate a CRM number with formatting characters", () => {
        const crm = "SP-1234567";
        expect(validateCRM(crm)).toBe(true);
    });
});