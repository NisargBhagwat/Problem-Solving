// https://leetcode.com/problems/course-schedule/ 
export { }

function findCycleDfs(depedency: number[][], visited: boolean[], course: number, v1: boolean[]) {
    visited[course] = true;
    v1[course] = true;
    for (let doCourse of depedency[course]) {
        if (!visited[doCourse]) {
            if (findCycleDfs(depedency, visited, doCourse, v1)) {
                return true;
            }
        }
        else if (v1[doCourse]) {
            return true;
        }
    }
    v1[course] = false;
    return false;
}

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const depedency: number[][] = Array.from(Array(numCourses), () => Array().fill([]));
    let v: boolean[] = Array(numCourses).fill(false);
    let v1: boolean[] = Array(numCourses).fill(false);

    for (const prerequisite of prerequisites) {
        if (prerequisite[1] == prerequisite[0]) return false;
        depedency[prerequisite[1]].push(prerequisite[0]);
    }

    for (let i = 0; i < numCourses; i++) {
        if (!v[i]) {
            if (findCycleDfs(depedency, v, i, v1)) return false;
        }
    }

    return true;

};

console.log(canFinish(5, [[1, 4], [2, 4], [3, 1], [3, 2]]));
