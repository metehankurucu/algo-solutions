/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const size = ratings.length;
  const candies = new Array(size).fill(1);

  for (let i = 0; i < size; i++) {
    for (let j = i; j > 0; j--) {
      const rating = ratings[j];
      const prevRating = ratings[j - 1];

      if (prevRating === rating) break;
      else if (rating > prevRating) {
        if (candies[j] <= candies[j - 1]) candies[j] = candies[j - 1] + 1;
        break;
      } else {
        while (candies[j - 1] <= candies[j]) {
          candies[j - 1] += 1;
        }
      }
    }
  }

  return candies.reduce((acc, candy) => (acc = acc + candy), 0);
};
