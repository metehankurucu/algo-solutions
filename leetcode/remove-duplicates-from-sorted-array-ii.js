/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let current = null;
  let occurence = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (current === nums[i]) {
      if (occurence > 1) {
        nums[i] = undefined;
        count++;
      }
      occurence++;
    } else {
      current = nums[i];
      occurence = 1;
    }
  }

  nums.sort((a, b) => a - b);
  return nums.length - count;
};
