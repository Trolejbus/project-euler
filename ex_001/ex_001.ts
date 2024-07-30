export function sumOfNumbers(x: number, y: number, to: number): number {
    let result = 0;
    for (let currentDigit = 1; currentDigit < to; currentDigit++) {
        if (currentDigit % x === 0 || currentDigit % y === 0) {
            result += currentDigit;
        }
    }

    return result;
}
