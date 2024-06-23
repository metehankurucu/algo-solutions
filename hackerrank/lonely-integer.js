/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
  // Write your code here
  return Object.entries(
    a.reduce((acc, value) => {
      if (acc[value]) acc[value] += 1;
      else acc[value] = 1;
      return acc;
    }, {})
  ).find((item) => item[1] === 1)[0];
}
