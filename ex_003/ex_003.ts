export function getLargestPrimeFactor(x: number): number {
    let rest = x;
    let current = 0;

    while (rest >= current) {
        current++;
        if (x % current === 0) {
            rest /= current;
        }
    }

    return current;
}
