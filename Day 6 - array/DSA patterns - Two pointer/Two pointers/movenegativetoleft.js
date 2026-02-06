// Move Negative Numbers to Left

// Move all negative numbers to the beginning of the array.
// Order does not matter.

// Example
// Input:  [3, -1, 4, -2, 5, -6]
// Output: [-1, -2, -6, 3, 5, 4]   (one possible answer)

function moveNegatives(nums) {
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] < 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }

  return nums;
}

// 🧠 Why we use swap here

// Unlike move-zeroes:

// we don't need to keep order

// so swap is faster & simpler

// Example:

// [3,-1,4,-2,5,-6]