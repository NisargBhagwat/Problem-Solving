export { }

function dfs(node: number, parent: number, graph: number[][], visited: boolean[]): boolean {
    visited[node] = true;

    for (let adj of graph[node]) {
        if (!visited[adj]) {
            if (dfs(adj, node, graph, visited)) {
                return true;
            }
        }
        else if (parent != adj) {
            return true;
        }
    }

    return false;
}

function detectCylce(graph: number[][]) {
    let visited: boolean[] = new Array(graph.length).fill(false);

    for (let i = 0; i < visited.length; i++) {
        if (!visited[i]) {
            if (dfs(i, -1, graph, visited)) return true;
        }
    }

    return false;
}

const graph: number[][] = [[1], [0, 2, 4], [1, 3], [2, 4], [1, 3]]
// const graph: number[][] = [[], [2], [1, 3], [2]];
console.log(detectCylce(graph));