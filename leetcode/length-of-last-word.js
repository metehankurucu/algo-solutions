/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let word = "";
  let index = s.length - 1;

  while (index >= 0) {
    const char = s.slice(index, index + 1);

    if (char === " " && word !== "") break;

    if (char !== " ") word += char;

    index--;
  }

  return word.length;
};
