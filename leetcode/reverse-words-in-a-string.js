/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .split(" ")
    .filter((item) => item.trim())
    .reverse()
    .join(" ");
};
