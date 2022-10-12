var removeDuplicates = function (nums) {
  let no = nums[0];
  let arr = [no];

  if (nums.length === 1) return arr.length;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != no) {
      no = nums[i];
      arr.push(nums[i]);
    }
  }
  return arr;
};

const nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));
