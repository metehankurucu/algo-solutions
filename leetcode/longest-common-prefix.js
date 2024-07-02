/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const origin = strs[0];
  let prefix = "";
  for (let i = 0; i < origin.length; i++) {
    const char = origin.charAt(i);
    const same = strs.slice(1).every((str) => str.charAt(i) === char);

    if (same) prefix += char;
    else break;
  }

  return prefix;
};
