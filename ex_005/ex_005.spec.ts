import { getDividers } from "./ex_005";

describe("ex_005", () => {
    it("simple case", () => {
        const result = getDividers([2, 3, 4]);

        expect(result).toBe(12);
    });

    it("exercise case - should be 232792560", () => {
        const result = getDividers([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
        ]);

        expect(result).toBe(232792560);
    });
});
