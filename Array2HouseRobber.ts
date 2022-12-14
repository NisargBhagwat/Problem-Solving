// https://leetcode.com/problems/house-robber/
export { }

function rob(nums: number[]): number {
    let sumOfOdd: number = 0;
    let sumOfEven: number = 0;
    let length = nums.length;

    for (let i = 0; i < length; i++) {
        if (i % 2) {
            sumOfOdd += nums[i];
        } else {
            sumOfEven += nums[i];
        }
    }

    return sumOfEven > sumOfOdd ? sumOfEven : sumOfOdd;
};

console.log(rob([2,1,1,2]))