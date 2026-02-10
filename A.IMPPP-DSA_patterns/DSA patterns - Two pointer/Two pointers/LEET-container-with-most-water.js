// Problem
// Find two lines that form the max area.

// height = [1,8,6,2,5,4,8,3,7]
// Output → 49

// Logic

// We have an array of heights:
// height = [1,8,6,2,5,4,8,3,7]
// Each number is a vertical line at that index.
// The width between lines = right - left
// The height of water = min(left height, right height) → because water spills over the shorter line
// We want max area: Area = min(height[left], height[right]) × width

// Move the smaller height

// Code
function maxArea(height) {
  //Start with left = 0, right = n-1 → widest container
 // Every other pair is narrower → only way to increase area is with a taller line
 //So move the smaller line, hoping to find a taller one
//  Step 2: Logic of moving pointers
// If height[left] < height[right] → left is smaller → move left++
// Else → move right--
// Why?
// Area depends on min(left, right) → moving the taller line cannot increase min
// Only moving smaller line might find taller → potentially bigger area
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