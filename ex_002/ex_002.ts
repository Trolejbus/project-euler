export function sumOfFibonacciEven(toNumber: number): number {
    let previousNumber = 1;
    let currentNumber = 1;
    let result = 0;

    while (currentNumber < toNumber) {
        const temp = currentNumber;
        currentNumber = currentNumber + previousNumber;
        previousNumber = temp;

        if (currentNumber < toNumber && currentNumber % 2 === 0) {
            result += currentNumber;
        }
    }

    return result;
}
