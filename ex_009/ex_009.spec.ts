import { findPythagoeanTriplet } from "./ex_009";

describe("ex_009", () => {
    it("simple case", () => {
        const result = findPythagoeanTriplet(12);

        expect(result).toBe(60);
    });

    it("exercise case", () => {
        const result = findPythagoeanTriplet(1000);

        expect(result).toBe(31875000);
    });
});
