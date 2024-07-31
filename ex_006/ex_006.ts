export function differenceBetweenSumOfSquaresAndSquareOfSum(
    to: number,
): number {
    let result = 0;
    for (let x = 1; x < to; x++) {
        for (let y = x + 1; y <= to; y++) {
            result += x * y;
        }
    }
    return 2 * result;
}
