// https://leetcode.com/problems/climbing-stairs/
export { }

function climbStairs(n: number): number {
    if (n == 1) {
        return 1;
    }
    let first = 1;
    let second = 2;
    for (let i = 3; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }
    return second;
};

console.log(climbStairs(3));