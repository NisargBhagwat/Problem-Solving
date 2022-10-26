function bfsOfGraph(v: number, adj: number[][], startNode: number): number[] {
    let bfs: number[] = [];
    let visited: boolean[] = Array(v).fill(false);
    let queue: number[] = [];

    queue.push(startNode);
    visited[startNode] = true;

    while (queue.length) {
        let node: number = queue.shift()!;
        bfs.push(node);

        adj[node].forEach((adjecent: number) => {
            if (!visited[adjecent]) {
                visited[adjecent] = true;
                queue.push(adjecent);
            }
        })
    }

    return bfs;
}


const v = 6
const edges: Array<[number, number]> = [[5, 4], [0, 1], [0, 2], [0, 3], [2, 4]]
const adj: number[][] = Array.from(Array(v), () => Array().fill([]));

edges.forEach((edge: [number, number]) => {
    adj[edge[0]].push(edge[1]);
    adj[edge[1]].push(edge[0]);
});

console.log(bfsOfGraph(v, adj, 0));

