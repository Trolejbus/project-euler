export function getDividers(numbers: number[]): number {
    let clonedNumbers = [...numbers].filter((n) => n > 1);
    let currentDivider = 2;
    let result = 1;
    while (clonedNumbers.some((n) => n > 1)) {
        while (clonedNumbers.some((n) => n % currentDivider === 0)) {
            result *= currentDivider;
            clonedNumbers = clonedNumbers.map((n) =>
                n % currentDivider === 0 ? n / currentDivider : n,
            );
            console.log(clonedNumbers);
        }

        currentDivider += 1;
    }

    /*const maxValue = Math.max(...numbers);
    let result = 1;
    const currentDividers: number[] = [];
    for (let currentNumber = 2; currentNumber <= maxValue; currentNumber++) {
        const higherPower = getHighestPower()
        if (
            numbers.some((n) => n % currentNumber === 0) &&
            !currentDividers.some((c) => currentNumber % c === 0)
        ) {
            currentDividers.push(currentNumber);
            result *= currentNumber;
        }
    }*/

    return result;
}

function getHighestPower(value: number, divider: number): number {
    let currentValue = value;
    let power = 0;
    while (currentValue % divider === 0) {
        currentValue /= divider;
        power++;
    }

    return power;
}
