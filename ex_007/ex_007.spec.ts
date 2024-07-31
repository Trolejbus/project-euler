import { getNPrime } from "./ex_007";

describe("ex_007", () => {
    it("Simple case - 6th prime is 13", () => {
        const result = getNPrime(6);

        expect(result).toBe(13);
    });

    it("Simple case - 7th prime is 13", () => {
        const result = getNPrime(7);

        expect(result).toBe(17);
    });

    it("Exercise case - 6th prime is 13", () => {
        const result = getNPrime(10001);

        expect(result).toBe(104743);
    });
});
