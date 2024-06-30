/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);

  let count = 1;
  let current = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (current !== nums[i]) {
      current = nums[i];
      count = 1;
    } else {
      count += 1;
    }

    if (count > nums.length / 2) return nums[i];
  }

  return current;
};
