export function sumOfMultiplies(x: number, to: number): number {
    const realTo = to - 1;
    const multipliesCount = Math.floor(realTo / x);
    return ((x * (1 + multipliesCount)) / 2) * multipliesCount;
}

export function sumOfMultipliesForBoth(
    x: number,
    y: number,
    to: number,
): number {
    const lcmForXY = lcm(x, y);
    return (
        sumOfMultiplies(x, to) +
        sumOfMultiplies(y, to) -
        sumOfMultiplies(lcmForXY, to)
    );
}

function gcd(a: number, b: number): number {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a: number, b: number): number {
    return (a * b) / gcd(a, b);
}
