import { testFn } from "./ex_001";

describe('ex_001', () => {
    it('should work', () => {
        const result = testFn();

        expect(result).toBe('done');
    });
});
