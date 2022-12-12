// https://leetcode.com/problems/is-graph-bipartite/
export { }

function bfs(start: number, graph: number[][], colored: number[]): boolean {
    let queue: number[] = [];
    colored[start] = 0;
    queue.push(start);

    while (queue.length) {
        const node = queue.shift()!;
        const nodeColor = colored[node];
        for (const it of graph[node]) {
            if (colored[it] == -1) {
                colored[it] = (nodeColor == 0) ? 1 : 0;
                queue.push(it);
            } else if (colored[it] == nodeColor) {
                return false;
            }
        }
    }
    return true;
}

function isBipartite(graph: number[][]): boolean {
    let colored: number[] = new Array(graph.length).fill(-1);
    const row: number = graph.length;

    for (let i = 0; i < row; i++) {
        if (colored[i] == -1) {
            if (bfs(i, graph, colored) == false) {
                return false
            }
        }
    }

    return true;
};
console.log(isBipartite([[1,3],[0,2],[1,3],[0,2]]));
