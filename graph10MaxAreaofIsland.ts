// https://leetcode.com/problems/max-area-of-island/ 
export { }

function dfs(row: number, col: number, grid: number[][], count: number): number {
    grid[row][col] = 0;
    count++;

    const rows = [0, -1, 0, 1];
    const cols = [-1, 0, 1, 0];
    for (let i = 0; i < 4; i++) {
        let nrow = row + rows[i];
        let ncol = col + cols[i];

        if (grid[nrow] && grid[nrow][ncol] === 1) {
            count += dfs(nrow, ncol, grid, 0);
        }
    }

    return count;
}

function maxAreaOfIsland(grid: number[][]): number {
    const row = grid.length;
    const column = grid[0].length;
    let max = 0;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (grid[i][j] == 1) {
                const num = dfs(i, j, grid, 0);
                if(num > max){
                    max = num;
                }
            }
        }
    }

    return max;
};

console.log(maxAreaOfIsland([[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]))