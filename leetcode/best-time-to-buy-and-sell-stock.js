/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (const price of prices) {
    if (price < minPrice) minPrice = price;
    if (price - minPrice > maxProfit) maxProfit = price - minPrice;
  }

  return maxProfit;
};
