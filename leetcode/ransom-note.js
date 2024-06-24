/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map();

  magazine.split("").forEach((letter) => {
    if (map.has(letter)) map.set(letter, map.get(letter) + 1);
    else map.set(letter, 1);
  });

  return ransomNote.split("").every((letter) => {
    if (map.get(letter) > 0) {
      map.set(letter, map.get(letter) - 1);
      return true;
    }
    return false;
  });
};
