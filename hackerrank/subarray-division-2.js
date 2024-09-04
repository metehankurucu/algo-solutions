/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
  let ways = 0;

  for (let i = 0; i < s.length; i++) {
    const part = s.slice(i, i + m);
    const sum = part.reduce((acc, num) => acc + num, 0);
    if (sum === d) ways++;
  }

  return ways;
}
