export { }

function findCycleDfs(graph: number[][], node: number, visited: boolean[], pathVisited: boolean[]) {
    visited[node] = true;
    pathVisited[node] = true;

    for (let it of graph[node]) {
        if (!visited[it]) {
            if (findCycleDfs(graph, it, visited, pathVisited)) {
                return true;
            }
        }
        else if (pathVisited[it]) {
            return true;
        }
    }
    pathVisited[node] = false;
    return false;
}

function detectCycle(nodes: number, edges: number[][]): boolean {
    const graph: number[][] = Array.from(Array(nodes), () => Array().fill([]));
    let visited: boolean[] = Array(nodes).fill(false);
    let pathVisited: boolean[] = Array(nodes).fill(false);

    for (const edge of edges) {
        graph[edge[0]].push(edge[1]);
    }

    for (let i = 0; i < nodes; i++) {
        if (!visited[i]) {
            if (findCycleDfs(graph, i, visited, pathVisited)) return true;
        }
    }

    return false;

};

console.log(detectCycle(2, [[1, 0], [0, 1]]));