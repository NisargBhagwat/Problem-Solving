// https://leetcode.com/problems/number-of-enclaves/
export { }

function dfs(grid: number[][], visited: boolean[][], row: number, column: number) {
    const adj: Array<[number, number]> = [[0, -1], [-1, 0], [0, 1], [1, 0]];
    visited[row][column] = true;

    for (const side of adj) {
        const i = row + side[0];
        const j = column + side[1];

        if (grid[i] && grid[i][j] == 1 && !visited[i][j]) {
            dfs(grid, visited, i, j);
        }
    }

}

function numEnclaves(grid: number[][]): number {
    const visited: boolean[][] = Array.from(Array(grid.length), () => Array(grid[0].length).fill(false));
    const row: number = grid.length;
    const column: number = grid[0].length;
    let landCell: number = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if ((i == 0) || (i == (row - 1))) {
                if ((grid[i][j] == 1) && !visited[i][j]) {
                    dfs(grid, visited, i, j);
                }
            } else {
                if ((grid[i][j] == 1) && !visited[i][j]) {
                    dfs(grid, visited, i, j);
                }
                if ((grid[i][column - 1] == 1) && !visited[i][column - 1]) {
                    dfs(grid, visited, i, column - 1);
                }
                break;
            }
        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (grid[i][j] == 1 && !visited[i][j]) {
                landCell++;
            }
        }
    }
    return landCell;
}

numEnclaves([[0], [1], [1], [0], [0]]);