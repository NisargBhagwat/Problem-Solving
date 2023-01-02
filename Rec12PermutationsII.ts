// https://leetcode.com/problems/permutations-ii/
export { }
function swap(i: number, j: number, nums: number[]) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

function permute(nums: number[], index: number, permutations: number[][]) {
    const length = nums.length;
    if (index >= length) {
        permutations.push([...nums]);
        return
    }

    let findDuplicate: number[] = [];

    for (let i = index; i < length; i++) {
        if (i > index && findDuplicate.includes(nums[i])) continue;
        findDuplicate.push(nums[i]);

        swap(i, index, nums);
        permute(nums, index + 1, permutations);
        swap(i, index, nums);
    }
}

function permuteUnique(nums: number[]): number[][] {
    let permutations: number[][] = [];

    permute(nums, 0, permutations);

    return permutations;
};

console.log(permuteUnique([3, 3, 0, 3]));