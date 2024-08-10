/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
  // Write your code here
  const letters = Array(26).fill(-1);

  s.split("").forEach((char, i) => {
    const num = char.toUpperCase().charCodeAt(0) - 65;
    if (num < 26 && num >= 0) letters[num] = i;
  });

  return letters.every((i) => i !== -1) ? "pangram" : "not pangram";
}
