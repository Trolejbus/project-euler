import { getSumOfPrimeBelow } from "./ex_010";

describe("ex_010", () => {
    it("simple case", () => {
        const result = getSumOfPrimeBelow(7);

        expect(result).toBe(10);
    });

    it("exercise case", () => {
        const result = getSumOfPrimeBelow(2000000);

        expect(result).toBe(142913828922);
    });
});
