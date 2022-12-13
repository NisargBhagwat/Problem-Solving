// https://leetcode.com/problems/minimum-falling-path-sum/description/
export { }

function minFallingPathSum(matrix: number[][]): number {
    const size = matrix.length;

    for (let i = size - 2; i >= 0; i--) {
        for (let j = 0; j < size; j++) {
            let numbers: number[] = [];
            if (j > 0) numbers.push(matrix[i + 1][j - 1]);
            numbers.push(matrix[i + 1][j]);
            if (j < size - 1) numbers.push(matrix[i + 1][j + 1]);
            matrix[i][j] += Math.min(...numbers);
        }
    }

    return Math.min(...matrix[0]);
};

console.log(minFallingPathSum([[-19,57],[-40,-5]]))