// https://leetcode.com/problems/rotting-oranges/

function gridTraverse(grid: number[][], rottenOranges: Array<[number, number]>): number {
    // bfs algo used
    let queue: Array<[number, number, number]> = [];
    let minutes: number = 0;

    rottenOranges.forEach((rottenOrange: [number, number]) => {
        queue.push([...rottenOrange, minutes]);
    })

    while (queue.length) {
        let count: number = 0;
        let [row, column, minute] = queue.shift()!;
        minutes = minute;
        if (grid[row + 1] && grid[row + 1][column] == 1) {
            count++;
            grid[row + 1][column] = 2;
            queue.push([row + 1, column, minute + 1]);
        }

        if (grid[row][column - 1] == 1) {
            count++;
            grid[row][column - 1] = 2;
            queue.push([row, column - 1, minute + 1]);
        }

        if (grid[row][column + 1] == 1) {
            count++;
            grid[row][column + 1] = 2;
            queue.push([row, column + 1, minute + 1]);
        }

        if (grid[row - 1] && grid[row - 1][column] == 1) {
            count++;
            grid[row - 1][column] = 2;
            queue.push([row - 1, column, minute + 1]);
        }

    }
    return minutes;
}

function orangesRotting(grid: number[][]): number {
    let minutes: number = 0;
    let rottenOranges: Array<[number, number]> = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 2) {
                rottenOranges.push([i, j]);
            }
        }
    }

    minutes = gridTraverse(grid, rottenOranges);

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                return -1;
            }
        }
    }

    return minutes;
};

console.log(orangesRotting([[2,1,1],[1,1,1],[0,1,2]]));