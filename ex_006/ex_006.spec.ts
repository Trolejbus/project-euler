import { differenceBetweenSumOfSquaresAndSquareOfSum } from "./ex_006";

describe("ex_006", () => {
    it("Simple case", () => {
        const result = differenceBetweenSumOfSquaresAndSquareOfSum(4);

        expect(result).toBe(70);
    });

    it("Exercise case - should be 25164150", () => {
        const result = differenceBetweenSumOfSquaresAndSquareOfSum(100);

        expect(result).toBe(25164150);
    });
});
