export function findPythagoeanTriplet(sum: number): number {
    const halfOfSum = sum / 2;
    let a = 0;
    let b = 0;
    let c = 0;
    let found = false;
    while (!found && a < halfOfSum) {
        a++;
        b = Math.floor((Math.pow(sum, 2) - 2 * sum * a) / (2 * sum - 2 * a));
        c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

        if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)) {
            found = true;
        }
    }

    return a * b * c;
}
