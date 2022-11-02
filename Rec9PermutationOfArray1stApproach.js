// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.



// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]


// Constraints:

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

function permutes( nums, arr, ans, track) {
    const numsLength = nums.length;

    if (arr.length == numsLength) {
        ans.push([...arr]);
        console.log(arr);
        return;
    }

    for (let i = 0; i < numsLength; i++) {

        if (!track[i]) {

            arr.push(nums[i]);
            track[i] = true;

            permutes( nums, arr, ans, track);

            arr.pop();
            track[i] = false;
        }
    }

    return;
}

var permute = function (nums) {

    let track = new Array(nums.length).fill(false);
    let arr = [];
    let ans = [];

    permutes(nums, arr, ans, track);
};

permute([1, 2, 3]);