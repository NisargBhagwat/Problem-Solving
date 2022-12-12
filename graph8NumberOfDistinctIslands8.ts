// https://leetcode.com/problems/number-of-distinct-islands/
export { }

function dfs(row: number, column: number, grid: number[][], visited: boolean[][], distinct: number[], row0: number, col0: number) {
    visited[row][column] = true;
    distinct.push(row - row0, column - col0);
    const rows = [0, -1, 0, 1];
    const cols = [-1, 0, 1, 0];
    for (let i = 0; i < 4; i++) {
        let nrow = row + rows[i];
        let ncol = column + cols[i];

        if (grid[nrow] && grid[nrow][ncol] === 1 && !visited[nrow][ncol]) {
            dfs(nrow, ncol, grid, visited, distinct, row0, col0);
        }
    }
}

function numDistinctIslands(grid: number[][]): number {
    const visited: boolean[][] = Array.from(Array(grid.length), () => Array(grid[0].length).fill(false));
    let distinct: Set<string> = new Set();
    const row = grid.length;
    const column = grid[0].length;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (grid[i][j] == 1 && !visited[i][j]) {
                let vector: number[] = [];
                dfs(i, j, grid, visited, vector, i, j);
                distinct.add(vector.toString());
            }
        }
    }

    return distinct.size;
};

numDistinctIslands([[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]);