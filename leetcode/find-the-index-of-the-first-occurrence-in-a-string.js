/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!haystack.includes(needle)) return -1;

  for (let i = 0; i < haystack.length; i++) {
    const letter = haystack.charAt(i);

    if (letter === needle.charAt(0)) {
      const isOccurring = needle
        .split("")
        .every((char, index) => char === haystack.charAt(i + index));

      if (isOccurring) return i;
    }
  }

  return -1;
};
