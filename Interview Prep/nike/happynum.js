// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

// To determine if a number is "happy" in JavaScript, you can use a Set to keep track of the numbers you've already encountered. If the process hits 1, the number is happy; if it hits a number already in the set, it’s stuck in a loop and is not happy. 
// Here is a concise implementation:
// javascript
function findnumberHapp(n) {
  let current = String(n);
  let cache = new Set(); // Set is slightly cleaner than Map for just tracking 'seen' numbers

  const calculateSum = (numStr) => {
    let res = 0;
    // Fix: Use .length to iterate through characters
    for (let i = 0; i < numStr.length; i++) {
      let digit = Number(numStr[i]);
      res += digit * digit;
    }
    return res;
  };

  // Fix: Loop until we either hit 1 or find a repeat
  while (current !== "1") {
    if (cache.has(current)) {
      return false; // Found a cycle!
    }
    cache.add(current);
    current = String(calculateSum(current));
  }

  return true;
}

console.log(findnumberHapp(19)); // true
console.log(findnumberHapp(2));  // false