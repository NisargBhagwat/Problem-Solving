// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

// A province is a group of directly or indirectly connected cities and no other cities outside of the group.

// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

// Return the total number of provinces.



// Example 1:


// Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
// Output: 2
// Example 2:


// Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
// Output: 3


// Constraints:

// 1 <= n <= 200
// n == isConnected.length
// n == isConnected[i].length
// isConnected[i][j] is 1 or 0.
// isConnected[i][i] == 1
// isConnected[i][j] == isConnected[j][i]


// in my work it is the program to find the number of component

function traverse(visited: boolean[], isConnected: number[][], node: number) {
    visited[node] = true;

    isConnected[node].forEach((edge: number, index: number) => {
        if (index == node) return;
        if (edge && !visited[index]) {
            traverse(visited, isConnected, index);
        }
    })
}

function solution(isConnected: number[][]): number {
    let provinces: number = 0;
    let visited: boolean[] = Array(isConnected.length).fill(false);

    for (let i = 0; i < isConnected.length; i++) {
        if (!visited[i]) {
            provinces++;
            traverse(visited, isConnected, i);
        }
    }

    return provinces;
}

function findCircleNum(isConnected: number[][]): number {
    const provinces: number = solution(isConnected);
    return provinces;
};

console.log(findCircleNum([[1, 0, 0], [0, 1, 0], [0, 0, 1]]));

