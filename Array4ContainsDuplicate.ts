// https://leetcode.com/problems/contains-duplicate/ 
export { }

function containsDuplicate(nums: number[]): boolean {
    const numbers: Map<number, number> = new Map();
    const length = nums.length;

    for (let i = 0; i < length; i++) {
        if (numbers.get(nums[i])) {
            return true;
        } else {
            numbers.set(nums[i], 1);
        }
    }

    return false;
};

console.log(containsDuplicate([1,2,3,4]));