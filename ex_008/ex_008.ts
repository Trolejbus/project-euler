export function findBiggestProduct(
    bigNumber: string,
    numberOfDigits: number,
): number {
    const arrayOfDigits = [...bigNumber].map((n) => +n);
    let currentSlice = arrayOfDigits.slice(0, numberOfDigits);
    const arrayOfDigitsWithoutInitials = arrayOfDigits.slice(
        numberOfDigits,
        arrayOfDigits.length,
    );
    let maxProduct = currentSlice.reduce((p, c) => c * p, 1);
    for (const newValue of arrayOfDigitsWithoutInitials) {
        currentSlice.shift();
        currentSlice.push(newValue);
        const currentProduct = currentSlice.reduce((p, c) => p * c, 1);

        if (currentProduct > maxProduct) {
            maxProduct = currentProduct;
        }
    }

    return maxProduct;
}
