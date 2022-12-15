// https://leetcode.com/problems/reverse-integer/description/
export {}

function reverse(x: number): number {
    let isNegative: boolean = false;
    if (x < 0) {
        isNegative = true;
    }
    x = Math.abs(x);
    let reverse: number = 0;
    while (x) {
        reverse = reverse * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    return isNegative ? -reverse: reverse;  
};

console.log(reverse(1534236469));