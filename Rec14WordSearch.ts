// https://leetcode.com/problems/word-search/
export { }

function letsCheck(board: string[][], word: string, row: number, col: number, index: number, visited: boolean[][]): boolean {
    if (index >= word.length) {
        return true;
    }
    
    const rows = [0, -1, 0, 1];
    const cols = [-1, 0, 1, 0];

    for (let i = 0; i < 4; i++) {
        let nrow = row + rows[i];
        let ncol = col + cols[i];

        if (
            board[nrow] &&
            board[nrow][ncol] &&
            !visited[nrow][ncol] &&
            board[nrow][ncol] == word[index]) {

            visited[nrow][ncol] = true;
            if (letsCheck(board, word, nrow, ncol, index + 1, visited)) {
                return true
            }
            visited[nrow][ncol] = false;
        }
    }

    return false;
}

function exist(board: string[][], word: string): boolean {
    const rowLength = board.length;
    const colLength = board[0].length;
    const visited: boolean[][] = Array.from(Array(rowLength), () => Array(colLength).fill(false));;

    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < colLength; j++) {
            if (board[i][j] == word[0]) {
                visited[i][j] = true;
                if (letsCheck(board, word, i, j, 1, visited)) {
                    return true
                }
                visited[i][j] = false;
            }
        }
    }

    return false;
};

console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCB"));

