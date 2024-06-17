/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const actualNums1 = nums1.slice(0, m);

  let i1 = 0;
  let i2 = 0;

  for (let i = 0; i < m + n; i++) {
    const num1 = actualNums1[i1];
    const num2 = nums2[i2];

    if (num2 < num1 || i1 === m) {
      nums1[i] = num2;
      i2++;
    } else {
      nums1[i] = num1;
      i1++;
    }
  }
};
