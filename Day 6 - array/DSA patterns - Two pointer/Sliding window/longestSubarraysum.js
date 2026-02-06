// Longest Subarray Sum ≤ K
// nums = [2,1,5,1,3,2]
// k = 7


// 👉 Find longest length where sum ≤ k
/**
 * Finds the longest subarray length where sum <= k
 * @param {number[]} nums - The input array [2, 1, 5, 1, 3, 2]
 * @param {number} k - The target sum 7
 * @returns {number} - The maximum length found
 */
function longestSubarraySum(nums, k) {
    let left = 0;
    let currentSum = 0;
    let maxLength = 0;

    for (let right = 0; right < nums.length; right++) {
        // Expand the window by adding the current element
        currentSum += nums[right];

        // Shrink the window from the left if the sum exceeds k
        while (currentSum > k) {
            currentSum -= nums[left];
            left++;
        }

        // Update the maximum length found so far
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

const nums = [2, 1, 5, 1, 3, 2];
const k = 7;
console.log(`Longest length: ${longestSubarraySum(nums, k)}`); // Output: 3