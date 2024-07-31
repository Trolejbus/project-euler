export function getSumOfPrimeBelow(below: number): number {
    let currentNumber = 3;
    let primesFound: number[] = [2];
    while (currentNumber < below) {
        if (!primesFound.some((p) => currentNumber % p === 0)) {
            primesFound.push(currentNumber);
        }

        currentNumber += 2;
    }

    return primesFound.reduce((p, c) => p + c, 0);
}
