// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.
// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 // Example 1:
// Inpt: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down 
// to the nearest integer, 2 is returned.

var mySqrt = function(x) {
    let left = 0;
    let right = x;
    let ans = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (mid * mid === x) {
            return mid; // Found the exact root
        } else if (mid * mid < x) {
            ans = mid;    // This is a candidate, but maybe there's a bigger one
            left = mid + 1;
        } else {
            right = mid - 1; // Too high, go lower
        }
    }

    return ans;
};

console.log(mySqrt(8))