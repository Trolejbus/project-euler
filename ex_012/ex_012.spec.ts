import {
    findDivisors,
    findSequenceOfTriangleNumbersWithMoreThanDivisors,
} from "./ex_012";

describe("ex_012", () => {
    it("findDivisors - simple case", () => {
        const divisors = findDivisors(28);

        expect(divisors).toHaveLength(6);
        expect(divisors).toContain(1);
        expect(divisors).toContain(2);
        expect(divisors).toContain(4);
        expect(divisors).toContain(7);
        expect(divisors).toContain(14);
        expect(divisors).toContain(28);
    });

    it("simple case", () => {
        const number = findSequenceOfTriangleNumbersWithMoreThanDivisors(5);

        expect(number).toBe(28);
    });

    it("challenge case", () => {
        const number = findSequenceOfTriangleNumbersWithMoreThanDivisors(500);

        expect(number).toBe(76576500);
    });
});
