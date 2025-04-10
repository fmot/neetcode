// Time complexity: O(n^2)
// Space complexity: O(1)
// This is a brute force solution that checks all possible pairs of buy and sell prices.

class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
      let buy = prices[i];
      for (let j = i + 1; j < prices.length; j++) {
        let sell = prices[j];
        max = Math.max(max, sell - buy);
      }
    }
    return max;
  }
}
