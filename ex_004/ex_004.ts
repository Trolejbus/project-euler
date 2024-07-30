export function largestPalindromic(numberOfDigits: number): number {
    const minNumber = Math.pow(10, numberOfDigits - 1);
    const maxNumber = Math.pow(10, numberOfDigits) - 1;
    let currentMax = 0;

    for (let x = minNumber; x <= maxNumber; x++) {
        for (let y = minNumber; y < x; y++) {
            let value = x * y;
            if (isPalindrome(value) && value > currentMax) {
                currentMax = value;
            }
        }
    }

    return currentMax;
}

export function isPalindrome(number: number): boolean {
    const numberAsText = number.toString();
    const halfOfText = numberAsText.slice(
        0,
        Math.floor(numberAsText.length / 2),
    );
    return [...halfOfText].every(
        (c, i) => c === numberAsText[numberAsText.length - i - 1],
    );
}
