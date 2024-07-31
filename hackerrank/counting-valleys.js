/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
  // Write your code here
  const levels = [];
  let valleys = 0;
  const pathArr = path.split("");

  for (let i = 0; i < pathArr.length; i++) {
    const val = (i > 0 ? levels[i - 1] : 0) + (pathArr[i] === "D" ? -1 : 1);
    if (i > 0 && val === 0 && levels[i - 1] === -1) valleys += 1;
    levels.push(val);
  }

  return valleys;
}
