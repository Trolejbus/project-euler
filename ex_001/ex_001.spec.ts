import { sumOfMultiplies, sumOfMultipliesForBoth } from "./ex_001";

describe("ex_001", () => {
    it("sumOfMultiplies - for 3 in 10 should return 18", () => {
        const result = sumOfMultiplies(3, 10);

        expect(result).toBe(18);
    });

    it("1 case - 2, 3 in 10", () => {
        const result = sumOfMultipliesForBoth(2, 3, 10);

        expect(result).toBe(32);
    });

    it("exercise case - 3, 5 in 1000", () => {
        const result = sumOfMultipliesForBoth(3, 5, 1000);

        expect(result).toBe(233168);
    });
});
