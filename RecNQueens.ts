// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
// Example 2:

// Input: n = 1
// Output: [["Q"]]


// Constraints:

// 1 <= n <= 9

function isSafe(index: number, arr: string[][], column: number, n: number): boolean {

    for (let i = (index - 1); i >= 0; i--) {
        if (arr[i][column] == "Q") return false;
    }

    for (let i = (index - 1), j = (column + 1); i >= 0 && column < n; i--, j++) {
        if (arr[i][j] == "Q") return false;
    }

    for (let i = (index - 1), j = (column - 1); i >= 0 && column < n; i--, j--) {
        if (arr[i][j] == "Q") return false;
    }

    return true;
}

function nQueens(index: number, n: number, arr: string[][], ans: string[][]) {
    if (index === n) {
        ans.push(arr.map((result: string[]) => {
            return result.join('');
        }));
        return;
    }

    for (let i = 0; i < n; i++) {
        if (isSafe(index, arr, i, n)) {
            arr[index][i] = "Q";
            nQueens(index + 1, n, arr, ans);
            arr[index][i] = ".";
        } else {
            arr[index][i] = ".";
        }
    }
    return;
}

function solveNQueens(n: number): string[][] {
    let ans: string[][] = [];
    let arr: string[][] = [];
    let j = n;

    while (j) {
        arr.push(Array(n).fill('.'));
        j--;
    }

    nQueens(0, n, arr, ans);

    return ans;
};

console.log(solveNQueens(7));