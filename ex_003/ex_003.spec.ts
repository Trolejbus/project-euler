import { getLargestPrimeFactor } from "./ex_003";

describe("ex_003", () => {
    it("Simple case - for 12 should return 3", () => {
        const result = getLargestPrimeFactor(12);

        expect(result).toBe(3);
    });

    it("Simple case - for 15 should return 3", () => {
        const result = getLargestPrimeFactor(15);

        expect(result).toBe(5);
    });

    it("Exercise case - for 600851475143 should return 3", () => {
        const result = getLargestPrimeFactor(600851475143);

        expect(result).toBe(6857);
    });
});
