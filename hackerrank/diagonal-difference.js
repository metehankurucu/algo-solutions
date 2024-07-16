function diagonalDifference(arr) {
  // Write your code here

  let firstSum = 0;
  let secondSum = 0;

  const indexes = Array(arr.length)
    .fill(0)
    .map((val, i) => i);

  indexes.forEach((i) => {
    firstSum += arr[i][i];
    secondSum += arr[i][arr.length - 1 - i];
  });

  return Math.abs(firstSum - secondSum);
}
