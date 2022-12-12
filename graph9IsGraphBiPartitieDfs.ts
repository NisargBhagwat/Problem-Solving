// https://leetcode.com/problems/is-graph-bipartite/
export { }

function bfs(node: number, color: number, graph: number[][], colored: number[]): boolean {
    colored[node] = color;

    for (const it of graph[node]) {
        if (colored[it] == -1) {
            const diffColor = (color == 0) ? 1 : 0;
            if (bfs(it, diffColor, graph, colored) == false) {
                return false;
            }
        } else if (colored[it] == color) {
            return false;
        }
    }
    return true;
}

function isBipartite(graph: number[][]): boolean {
    let colored: number[] = new Array(graph.length).fill(-1);
    const row: number = graph.length;

    for (let i = 0; i < row; i++) {
        if (colored[i] == -1) {
            colored[i] = 0;
            if (bfs(i, 0, graph, colored) == false) {
                return false
            }
        }
    }

    return true;
};
console.log(isBipartite([[1, 3], [0, 2], [1, 3], [0, 2]]));
