function dfsOfGraph(v: number, adj: number[][], node: number, visited: boolean[], dfs: number[]) {
    dfs.push(node);
    visited[node] = true;

    adj[node].forEach((it: number) => {
        if(!visited[it]){
            dfsOfGraph(v, adj, it, visited, dfs);
        }
    })
}

const v = 6
const edges: Array<[number, number]> = [[5, 4], [0, 1], [0, 2], [0, 3], [2, 4]]
const adj: number[][] = Array.from(Array(v), () => Array().fill([]));

edges.forEach((edge: [number, number]) => {
    adj[edge[0]].push(edge[1]);
    adj[edge[1]].push(edge[0]);
});

let visited: boolean[] = Array(v).fill(false);
let dfs: number[] = [];

dfsOfGraph(v, adj, 0, visited, dfs);

console.log(dfs);