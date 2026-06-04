// // You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// // Increment the large integer by one and return the resulting array of digits.

 

// // Example 1:

// // Input: digits = [1,2,3]
// // Output: [1,2,4]
// // Explanation: The array represents the integer 123.
// // Incrementing by one gives 123 + 1 = 124.
// // Thus, the result should be [1,2,4].
// // Example 3:

// // Input: digits = [9]
// // Output: [1,0]
// // Explanation: The array represents the integer 9.
// // Incrementing by one gives 9 + 1 = 10.
// // Thus, the result should be [1,0].

// The Core Logic:
// Instead of converting the array to an integer—which can fail due to integer 
//  constraints with very large numbers—
// you can manipulate the digits directly inside the array.
// There are three scenarios to handle when moving backwards through the array:
// The digit is less than 9: Simply add 1 to this digit and immediately return the array.
// The digit is 9: Change the digit to 0 and continue to the next position to the left 
// (carrying over the 1).
// All digits are 9: If the loop finishes, it means every single digit was a 9 (e.g., [9, 9, 9]). 
// They have all turned into 0s ([0, 0, 0]). You must append or prepend a 1
//  at the very front of the array to result in [1, 0, 0, 0]


function plusOne(arr) {
    // 1. Change to i >= 0 so the first element is included
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < 9) {
            arr[i] += 1;
            return arr; // Return immediately ONLY if we didn't carry over
        }
        
        // If it is 9, it becomes 0 and the loop continues to the left
        arr[i] = 0;
    }
    
    // 2. If the loop ends, all numbers were 9s (e.g., [0, 0, 0])
    // We add 1 to the front to make it [1, 0, 0, 0]
    arr.unshift(1);
    return arr;
}