/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const iteration = k % nums.length;

  if (iteration === 0 || nums.length <= 1) return;

  nums.unshift(...nums.slice(-iteration));
  nums.splice(nums.length - iteration, iteration);
};
