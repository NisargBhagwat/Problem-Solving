export { }
// https://leetcode.com/problems/01-matrix/

function traverseMatWithDfs(queue: Array<Array<number>>, visited: boolean[][], distance: number[][], mat: number[][]) {
    const adj: Array<[number, number]> = [[0, -1], [1, 0], [-1, 0], [0, 1]];
    while (queue.length) {
        const [row, column, dis] = queue.shift()!;

        if (!visited[row][column]) {
            visited[row][column] = true;
            distance[row][column] = dis;

            for (let side of adj) {
                if (mat[row + side[0]] && mat[row + side[0]][column + side[1]]) {
                    queue.push([row + side[0], column + side[1], dis + 1]);
                }
            }
        }


    }
}


function updateMatrix(mat: number[][]): number[][] {
    const visited: boolean[][] = Array.from(Array(mat.length), () => Array(mat[0].length).fill(false));
    let distance: number[][] = Array.from(Array(mat.length), () => Array().fill([]));
    let queue: Array<Array<number>> = [];
    const row: number = mat.length;
    const column: number = mat[0].length;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (mat[i][j] == 0) {
                queue.push([i, j, 0]);
            }
        }
    }

    traverseMatWithDfs(queue, visited, distance, mat);

    return distance;
};

updateMatrix([[0,0,0],[0,1,0],[1,1,1]]);