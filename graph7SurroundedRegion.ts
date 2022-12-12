// https://leetcode.com/problems/surrounded-regions/
export { }
function dfs(board: string[][], visited: boolean[][], row: number, column: number) {
    const adj: Array<[number, number]> = [[0, -1], [-1, 0], [0, 1], [1, 0]];
    visited[row][column] = true;
    for (const side of adj) {
        const i = row + side[0];
        const j = column + side[1];

        if (board[i] && board[i][j] == "O" && !visited[i][j]) {
            dfs(board, visited, i, j);
        }
    }

}


function solve(board: string[][]): void {
    const visited: boolean[][] = Array.from(Array(board.length), () => Array(board[0].length).fill(false));
    const row: number = board.length;
    const column: number = board[0].length;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (i == 0 || i == (row - 1) || j == 0 || j == (column - 1)) {
                if ((board[i][j] == 'O') && !visited[i][j]) {
                    dfs(board, visited, i, j);
                }
            }
        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (board[i][j] == 'O' && !visited[i][j]) {
                board[i][j] = "X";
            }
        }
    }
};


const arr = 
[
    ["X","O","O","X","X","X","O","X","O","O"],
    ["X","O","X","X","X","X","X","X","X","X"],
    ["X","X","X","X","O","X","X","X","X","X"],
    ["X","O","X","X","X","O","X","X","X","O"],
    ["O","X","X","X","O","X","O","X","O","X"],
    ["X","X","O","X","X","O","O","X","X","X"],
    ["O","X","X","O","O","X","O","X","X","O"],
    ["O","X","X","X","X","X","O","X","X","X"],
    ["X","O","O","X","X","O","X","X","O","O"],
    ["X","X","X","O","O","X","O","X","X","O"]
]
solve(arr);