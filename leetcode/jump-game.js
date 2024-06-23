/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const length = nums.length;
  let currentEnd = length - 1;

  for (let i = length - 2; i >= 0; i--) {
    if (i + nums[i] >= currentEnd) currentEnd = i;
  }

  return currentEnd === 0;
};
