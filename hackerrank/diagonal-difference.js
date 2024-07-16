function diagonalDifference(arr) {
  // Write your code here

  let firstSum = 0,
    secondSum = 0;

  arr.forEach((val, i) => {
    firstSum += arr[i][i];
    secondSum += arr[i][arr.length - 1 - i];
  });

  return Math.abs(firstSum - secondSum);
}
