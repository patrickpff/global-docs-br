import { describe, it, expect } from "vitest";
import { maskIE } from "../mask.js";

describe("maskIE", () => {
    //01.004.823/001-12
    it("should mask an unformatted IE correctly", () => {
        const rawIE = "1345678900013";
        const maskedIE = maskIE(rawIE, "MG");
        expect(maskedIE).toBe("13.456.789/0001");
    });
    
    it("should mask an unformatted AC IE correctly", () => {
        const rawIE = "0100482300112";
        const maskedIE = maskIE(rawIE, "AC");
        expect(maskedIE).toBe("01.004.823/001-12");
    });

    it("should return the same IE if already formatted", () => {
        const rawIE = "13.456.789/0001";
        const maskedIE = maskIE(rawIE, "MG");
        expect(maskedIE).toBe("13.456.789/0001");
    });

    it("should handle IEs with missing digits gracefully", () => {
        const rawIE = "134567890";
        const maskedIE = maskIE(rawIE, "MG");
        expect(maskedIE).toBe("13.456.789/0");
    });

    it("should return an empty string for an empty input", () => {
        const rawIE = "";
        const maskedIE = maskIE(rawIE, "MG");
        expect(maskedIE).toBe("");
    });
});