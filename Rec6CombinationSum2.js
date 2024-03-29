// Combination Sum 2 (Recursion Problem)

// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5
// Output:
// [
// [1,2,2],
// [5]
// ]

// Constraints:

// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// 1 <= target <= 30

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

function subSequece(index, tempArr, candidates, sum, ans) {
  if (sum == 0) {
    ans.push([...tempArr]);
    return;
  }

  for (let i = index; i < candidates.length; i++) {
    if (i > index && candidates[i] == candidates[i - 1]) continue;
    if (candidates[i] > sum) break;

    tempArr.push(candidates[i]);
    subSequece(i + 1, tempArr, candidates, sum - candidates[i], ans);
    tempArr.pop();
  }
}

var combinationSum2 = function (candidates, target) {
  let ans = [];

  candidates = candidates.sort((a, b) => a - b);

  subSequece(0, [], candidates, target, ans);

  return ans;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
