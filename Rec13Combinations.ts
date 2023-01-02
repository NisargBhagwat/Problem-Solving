// https://leetcode.com/problems/combinations/ 
export { }

function getCombinations(n: number, k: number, index: number, result: number[][], posibility: number, arr: number[]) {

    if (result.length == posibility) {
        return;
    } else if (arr.length >= k) {
        result.push([...arr])
        return;
    } else if (index > n) {
        return;
    }

    arr.push(index);
    getCombinations(n, k, index + 1, result, posibility, arr);

    arr.pop();
    getCombinations(n, k, index + 1, result, posibility, arr);

}

function getTotalPossibility(n: number, k: number): number {
    if (k == 0) return 1;
    let totalPossibility: number = 1;
    let fact = 1;

    for (let i = 1; i <= k; i++) {
        totalPossibility *= n;
        fact *= i;
        n--;
    }

    return totalPossibility / fact;
}
function combine(n: number, k: number): number[][] {
    const result: number[][] = [];
    const posibility = getTotalPossibility(n, k);

    getCombinations(n, k, 1, result, posibility, []);

    return result;
};

console.log(combine(4, 2));