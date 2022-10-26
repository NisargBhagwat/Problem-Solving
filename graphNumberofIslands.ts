// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.



// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3


// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

function traverseGrid(grid: string[][], row: number, column: number) {
    grid[row][column] = "0";

    if (grid[row + 1] && grid[row + 1][column] == "1") {
        traverseGrid(grid, row + 1, column);
    }
    if (grid[row][column - 1] == "1") {
        traverseGrid(grid, row, column - 1);
    }
    if (grid[row][column + 1] == "1") {
        traverseGrid(grid, row, column + 1);
    }
    if (grid[row - 1] && grid[row - 1][column] == "1") {
        traverseGrid(grid, row - 1, column);
    }
}

function numIslands(grid: string[][]): number {
    let lands = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] !== "0") {
                lands++;
                traverseGrid(grid, i, j);
            }
        }
    }
    return lands;
};

console.log(numIslands([
    ["1", "1", "1", "1", "1", "0", "1", "1", "1", "1"],
    ["1", "0", "1", "0", "1", "1", "1", "1", "1", "1"],
    ["0", "1", "1", "1", "0", "1", "1", "1", "1", "1"],
    ["1", "1", "0", "1", "1", "0", "0", "0", "0", "1"],
    ["1", "0", "1", "0", "1", "0", "0", "1", "0", "1"],
    ["1", "0", "0", "1", "1", "1", "0", "1", "0", "0"],
    ["0", "0", "1", "0", "0", "1", "1", "1", "1", "0"],
    ["1", "0", "1", "1", "1", "0", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1", "1", "1", "1", "0", "1"],
    ["1", "0", "1", "1", "1", "1", "1", "1", "1", "0"]
]))


// complexity Analysis

// TC= O(n2);
// SC = O(n2);