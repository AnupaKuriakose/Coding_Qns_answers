// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// The Logic
// Initialize a minPrice variable to a very high number (or the first price) and a maxProfit variable to 0.
// Iterate through the prices:
// If the current price is lower than minPrice, update minPrice.
// Otherwise, calculate the difference between the current price and minPrice. If that difference is greater than your current maxProfit, update maxProfit. 
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        // 1. Update the lowest price found so far
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } 
        // 2. Or check if selling today yields a better profit
        else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
};