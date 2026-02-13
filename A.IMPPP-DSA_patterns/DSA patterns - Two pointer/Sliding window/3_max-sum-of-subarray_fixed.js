// Problem: Maximum Sum Subarray of Size K
// nums = [2,1,5,1,3,2]
// k = 3
// Output = 9


// Because:

// [5,1,3] = 9 (max)
function maxSum(nums, k) {
  let windowSum = 0;

  // first window
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  let maxSum = windowSum;

  // slide window
  for (let right = k; right < nums.length; right++) {
    windowSum += nums[right];
    windowSum -= nums[right - k];

    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}