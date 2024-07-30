import { isPalindrome, largestPalindromic } from "./ex_004";

describe("ex_004", () => {
    it("isPalindrome - should return true when it is palindrome", () => {
        const result = isPalindrome(9009);

        expect(result).toBe(true);
    });

    it("isPalindrome - should return false when it is not palindrome", () => {
        const result = isPalindrome(9090);

        expect(result).toBe(false);
    });

    it("isPalindrome - should return true when number has not even digits", () => {
        const result = isPalindrome(90109);

        expect(result).toBe(true);
    });

    it("simple case - for 2 digits is 9009", () => {
        const result = largestPalindromic(2);

        expect(result).toBe(9009);
    });

    it("exercise case - for 3 digits is 906609", () => {
        const result = largestPalindromic(3);

        expect(result).toBe(906609);
    });
});
