// Problem
// Find two lines that form the max area.

// height = [1,8,6,2,5,4,8,3,7]
// Output → 49

// Logic

// Area = min(height[left], height[right]) × width

// Move the smaller height

// Code
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}