/*
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
  // Write your code here
  return s.split("").filter((char, i) => {
    if (i % 3 === 1 && char !== "O") return true;
    if (i % 3 !== 1 && char !== "S") return true;
    return false;
  }).length;
}
