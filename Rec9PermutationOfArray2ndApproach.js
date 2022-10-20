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

function swap(i, j, arr) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  
    return arr;
  }
  
  function permutation(index, arr, ans) {
    if (index >= arr.length) {
      ans.push([...arr]);
      return;
    }
  
    for (let i = index; i < arr.length; i++) {
      swap(index, i, arr);
      permutation(index + 1, arr, ans);
      swap(index, i, arr);
    }
    return;
  }
  
  const permute = (nums) => {
    let ans = [];
    permutation(0, nums, ans);
  
    return ans;
  };
  
  console.log(permute([1, 2, 3]));