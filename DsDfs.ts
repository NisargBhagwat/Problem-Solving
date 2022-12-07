function dfsOfGraph(v: number, adj: number[][], node: number, visited: boolean[], dfs: number[]) {
    dfs.push(node);
    visited[node] = true;

    adj[node].forEach((it: number) => {
        if(!visited[it]){
            dfsOfGraph(v, adj, it, visited, dfs);
        }
    })
}

const n = 6
const edge: Array<[number, number]> = [[5, 4], [0, 1], [0, 2], [0, 3], [2, 4]]
const adjacent: number[][] = Array.from(Array(n), () => Array().fill([]));

edge.forEach((edge: [number, number]) => {
    adjacent[edge[0]].push(edge[1]);
    adjacent[edge[1]].push(edge[0]);
});

let visited: boolean[] = Array(n).fill(false);
let dfs: number[] = [];

dfsOfGraph(n, adjacent, 0, visited, dfs);

console.log(dfs);