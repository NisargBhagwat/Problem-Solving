// https://leetcode.com/problems/3sum/ 
export { }

function threeSum(nums: number[]): number[][] {
    nums.sort((a: number, b: number) => a - b);
    let result: number[][] = [];
    const length = nums.length;

    for (let i = 0; i <= length - 3; i++) {
        while (nums[i] == nums[i - 1]) i++;
        let l = i + 1, r = length - 1, localSum = 0;
        while (l < r) {
            localSum = nums[i] + nums[l] + nums[r];
            if (localSum == 0) result.push([nums[i], nums[l], nums[r]]);
            if (localSum <= 0) {
                l++;
                while (nums[l] == nums[l - 1]) l++;
            } else {
                r--;
                while (nums[r] == nums[r + 1]) r--;
            }
        }
    }

    return result;
};

console.log(threeSum([-2,0,1,1,2]));