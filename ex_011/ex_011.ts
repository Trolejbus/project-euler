export function findBiggestProduct(
    grid: number[][],
    numbersCounts: number,
): number {
    const biggestProductLeftRight = findBiggestProductLeftRight(
        grid,
        numbersCounts,
    );
    const biggestProductUpDown = findBiggestProductUpDown(grid, numbersCounts);
    const diagonalLeftRight = findBiggestProductDiagonalLeftRight(
        grid,
        numbersCounts,
    );
    const diagonalRightLeft = findBiggestProductDiagonalRightLeft(
        grid,
        numbersCounts,
    );
    return Math.max(
        biggestProductLeftRight,
        biggestProductUpDown,
        diagonalLeftRight,
        diagonalRightLeft,
    );
}

function findBiggestProductLeftRight(
    grid: number[][],
    numbersCounts: number,
): number {
    let max = 0;
    for (const row of grid) {
        for (
            let cellIndex = 0;
            cellIndex < row.length - numbersCounts + 1;
            cellIndex++
        ) {
            const cells = row.slice(cellIndex, cellIndex + numbersCounts);
            let product = cells.reduce((p, c) => p * c, 1);
            max = Math.max(max, product);
        }
    }

    return max;
}

function findBiggestProductUpDown(
    grid: number[][],
    numbersCounts: number,
): number {
    let max = 0;
    for (
        let rowIndex = 0;
        rowIndex < grid.length - numbersCounts + 1;
        rowIndex++
    ) {
        for (
            let cellIndex = 0;
            cellIndex < grid[rowIndex].length;
            cellIndex++
        ) {
            let slice: number[] = [];
            for (
                let number = rowIndex;
                number < rowIndex + numbersCounts;
                number++
            ) {
                slice.push(grid[number][cellIndex]);
            }

            let product = slice.reduce((p, c) => p * c, 1);
            max = Math.max(max, product);
        }
    }

    return max;
}

function findBiggestProductDiagonalLeftRight(
    grid: number[][],
    numbersCounts: number,
): number {
    let max = 0;
    for (
        let rowIndex = 0;
        rowIndex < grid.length - numbersCounts + 1;
        rowIndex++
    ) {
        for (
            let cellIndex = 0;
            cellIndex < grid[rowIndex].length - numbersCounts + 1;
            cellIndex++
        ) {
            let slice: number[] = [];
            for (let number = 0; number < numbersCounts; number++) {
                slice.push(grid[rowIndex + number][cellIndex + number]);
            }

            let product = slice.reduce((p, c) => p * c, 1);
            max = Math.max(max, product);
        }
    }

    return max;
}

function findBiggestProductDiagonalRightLeft(
    grid: number[][],
    numbersCounts: number,
): number {
    let max = 0;
    for (
        let rowIndex = 0;
        rowIndex < grid[rowIndex].length - numbersCounts + 1;
        rowIndex++
    ) {
        for (
            let cellIndex = grid.length - 1;
            cellIndex >= numbersCounts - 1;
            cellIndex--
        ) {
            let slice: number[] = [];
            for (let number = 0; number < numbersCounts; number++) {
                slice.push(grid[rowIndex + number][cellIndex - number]);
            }

            let product = slice.reduce((p, c) => p * c, 1);
            max = Math.max(max, product);
        }
    }

    return max;
}
