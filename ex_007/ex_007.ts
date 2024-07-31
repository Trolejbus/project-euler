export function getNPrime(n: number): number {
    let currentNumber = 3;
    let primesFound: number[] = [2];
    while (primesFound.length < n) {
        if (!primesFound.some((p) => currentNumber % p === 0)) {
            primesFound.push(currentNumber);
        }

        currentNumber += 2;
    }

    return primesFound[primesFound.length - 1];
}
