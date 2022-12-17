// https://leetcode.com/problems/next-greater-element-i/
export { }

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    let nums: number[] = [];
    let nums2Length = nums2.length;

    nums1.forEach((num: number, index: number) => {
        const num2Index = nums2.findIndex((val) => val == num);

        for (let i = num2Index + 1; i < nums2Length; i++) {
            if (nums2[i] > num) {
                nums[index] = nums2[i];
                break;
            }
        }

        if (!nums[index]) {
            nums[index] = -1;
        }
    });

    return nums;
};

console.log(nextGreaterElement([2,4], [1,2,3,4]))