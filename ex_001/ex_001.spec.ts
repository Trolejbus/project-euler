import { sumOfNumbers } from "./ex_001";

describe("ex_001", () => {
    // 2, 3, 4, 6, 8, 9
    it("1 case - 2, 3 in 10", () => {
        const result = sumOfNumbers(2, 3, 10);

        expect(result).toBe(32);
    });

    it("exercise case - 3, 5 in 1000", () => {
        const result = sumOfNumbers(3, 5, 1000);

        expect(result).toBe(233168);
    });
});
