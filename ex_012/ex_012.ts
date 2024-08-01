export function findSequenceOfTriangleNumbersWithMoreThanDivisors(
    divisorsCount: number,
): number {
    let value = 2;
    let currentTriangleSequence = 1;
    while (findDivisors(currentTriangleSequence).length <= divisorsCount) {
        currentTriangleSequence += value;
        value++;
    }

    return currentTriangleSequence;
}

export function findDivisors(value: number): number[] {
    const maxTo = Math.sqrt(value);
    const result: number[] = [];
    let previousDivisor = 0;
    let currentNumber = 0;
    let last = false;
    while (!last && currentNumber < maxTo) {
        currentNumber++;

        if (value % currentNumber === 0) {
            if (previousDivisor * currentNumber === value) {
                last = true;
            } else {
                previousDivisor = currentNumber;
                result.push(currentNumber);
                result.push(value / currentNumber);
            }
        }
    }

    return result;
}
