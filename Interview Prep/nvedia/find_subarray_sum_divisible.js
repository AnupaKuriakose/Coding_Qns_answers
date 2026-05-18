// //Find any subarray of 2 or more elements where the sum is divisible by k.

// Simple example:
// javascriptarr = [1, 2, 3], k = 3

// Subarrays of 2+ elements:
// [1,2] → sum = 3 → 3 % 3 = 0 ✓ YES!
// [2,3] → sum = 5 → 5 % 3 = 2 ✗
// [1,2,3] → sum = 6 → 6 % 3 = 0 ✓
//Our Numbers: [2, 4, 3, 1, 7]
//Our Goal: Find a chunk of at least 2 numbers that
// adds up to something divisible by 5 (like 5, 10, 15...).
function findAllSubarraysDivisibleByK(nums, k) {
  let prefixSum = 0;
  // Start with remainder 0 at index -1
//   Why the Remainder 0?
// If your prefixSum hits a remainder of 0 (like the number 10 when k=5
// ), you need to know that the sum from the very beginning is a winner.
// The code looks in the book: "When did I last see a remainder of 0?"
// The book says: "At index -1!"
// The code says: "Great, so everything from index 0 to now is a match."
// If you don't put 0: [-1] in the book first, the code will ignore the first winner it finds because it thinks it has no "starting point" to compare it to.
  const seen = new Map();
  seen.set(0, [-1]);
  const results = [];

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    let remainder = prefixSum % k;
    if (remainder < 0) remainder += k;

    if (seen.has(remainder)) {
      // Get the list of all old indices where we saw this remainder
      const prevIndices = seen.get(remainder);

      for (let prevIndex of prevIndices) {//why this for loop because we save it as array in map
        // Check if the chunk is at least 2 boxes long
        if (i - prevIndex >= 2) { 
          results.push(nums.slice(prevIndex + 1, i + 1));
        }
      }
      // Add the current index to the list for this remainder
      prevIndices.push(i);
    } else {
      // First time seeing this remainder, start a new list
      seen.set(remainder, [i]);
    }
  }
  return results;
}

const nums = [2, 4, 3, 1, 7];
const k = 5;
console.log(findAllSubarraysDivisibleByK(nums, k));
