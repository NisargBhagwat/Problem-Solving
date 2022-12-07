function bfs(src: number, graph: number[][], visited: boolean[]): boolean {
    visited[src] = true;
    let queue: Array<[number, number]> = [];
    queue.push([src, -1]);

    while (queue.length) {
        const [node, parent] = queue.shift()!;
        for (let adj of graph[node]) {
            if (!visited[adj]) {
                visited[adj] = true;
                queue.push([adj, node]);
            } else if (parent != adj) {
                return true;
            }
        };
    }

    return false;
}

function detectCylce(graph: number[][]) {
    let visited: boolean[] = new Array(graph.length).fill(false);

    for (let i = 0; i < visited.length; i++) {
        if (!visited[i]) {
            if (bfs(i, graph, visited)) return true;
        } 
    }

    return false;
}

// const graph: number[][] = [[1], [0, 2, 4], [1, 3], [2, 4], [1, 3]]
const graph: number[][] = [[], [2], [1, 3], [2]]
console.log(detectCylce(graph));