/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let jumps = 0;

  for (let i = 0; i < nums.length - 1; ) {
    const current = nums[i];
    if (current + i + 1 >= nums.length) {
      jumps += 1;
      break;
    }

    let max = 0;
    let steps = 0;

    for (let j = 1; j < current + 1; j++) {
      if (nums[i + j] + j >= max) {
        steps = j;
        max = nums[i + j] + j;
      }
    }

    if (steps === 0) break;

    i += steps;
    jumps += 1;
  }

  return jumps;
};
