// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.



// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]


// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

function subSequece(index, tempArr, candidates, ans) {

    ans.push([...tempArr]);

    if (index >= candidates.length) {
        return;
    }

    for (let i = index; i < candidates.length; i++) {
        if (i > index && candidates[i] == candidates[i - 1]) continue;

        tempArr.push(candidates[i]);
        subSequece(i + 1, tempArr, candidates, ans);
        tempArr.pop();
    }
}

var combinationSum2 = function (nums) {
    let ans = [];

    nums.sort((a, b) => a - b);

    subSequece(0, [], nums, ans);

    return ans;
};

console.log(combinationSum2([4, 4, 4, 1, 4]));

