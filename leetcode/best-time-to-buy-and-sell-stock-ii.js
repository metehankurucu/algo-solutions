/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let buyedAt = null;

  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] > prices[i + 1]) {
      // Sell
      if (buyedAt !== null) {
        profit += prices[i] - buyedAt;
        buyedAt = null;
      }
    } else if (buyedAt === null) {
      // Buy
      buyedAt = prices[i];
    }
  }

  if (buyedAt !== null && buyedAt < prices[prices.length - 1]) {
    profit += prices[prices.length - 1] - buyedAt;
  }

  return profit;
};
