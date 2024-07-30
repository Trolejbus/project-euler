import { sumOfFibonacciEven } from "./ex_002";

describe("ex_002", () => {
    it("simple case, 10 should return 10", () => {
        const result = sumOfFibonacciEven(10);

        expect(result).toBe(10);
    });

    it("exercise case - 4000000 should return 4613732", () => {
        const result = sumOfFibonacciEven(4000000);

        expect(result).toBe(4613732);
    });
});
