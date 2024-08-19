/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let product = 1;
  let zeroCount = 0;

  nums.forEach((num) => {
    if (num !== 0) product *= num;
    else zeroCount += 1;
  });

  return nums.map((num) => {
    if (num === 0 && zeroCount === 1) {
      return product;
    } else if (num === 0 || zeroCount > 0) {
      return 0;
    } else {
      return product / num;
    }
  });
};
