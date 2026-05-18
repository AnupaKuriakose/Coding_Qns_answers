// Problem
// Sort array of 0,1,2 in-place.

// nums = [2,0,2,1,1,0]
// Output → [0,0,1,1,2,2]

//2 solutions- qn can be array of strings or numbers right and any dynamic also

//Solution 1:if list is dynamic
// Function Definition
f/**
* Quick Sort implementation for numbers with duplicates
 * @param {number[]} arr 
 * @returns {number[]}
 */
function quickSort(arr) {
  // Base case: arrays with 0 or 1 element are already sorted
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const middle = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (current < pivot) {
      left.push(current);
    } else if (current > pivot) {
      right.push(current);
    } else {
      // Handles duplicates by grouping them in the middle
      middle.push(current);
    }
  }

  // Spread operator is used here for concatenation, 
  // but you could use a loop to merge if that's also restricted.
  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Example usage:
const unsorted = [5, 2, 9, 1, 5, 6, 2];
const sorted = quickSort(unsorted);
console.log(sorted); // [1, 2, 2, 5, 5, 6, 9]


// if not allowed to use fill then manual fill logic anagin array
// Manual "Fill" logic
        // for (let j = 0; j < num; j++) {
        //     arr[writeIdx] = key;
        //     writeIdx++;
        // }

//Solotion 2: if it is dutch flag exact problem/exact 3 numbers 
//IF interbiewer specifi about one loop
// can solve this using the Dutch National Flag (three-pointer)
//  approach which is 
 //space and a single pass. However, for better 
 // readability and to handle dynamic categories, 
 // a Counting Map approach is often more maintainable.
 // "

function sortColors(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }

  return nums;
}



//simple way
let arr = ["blue", "red", "white", "red", "blue", "white"];

function sortColors(arr) {
    let counts = { red: 0, white: 0, blue: 0 };

    // Pass 1: Count occurrences of each color
    for (let color of arr) {
        counts[color]++;
    }

    // Pass 2: Overwrite the original array in the correct order
    let i = 0;
    for (let j = 0; j < counts.red; j++) arr[i++] = "red";
    for (let j = 0; j < counts.white; j++) arr[i++] = "white";
    for (let j = 0; j < counts.blue; j++) arr[i++] = "blue";
    //instead of above loops 
    //    arr.fill("red", 0, counts.red);
    // arr.fill("white", counts.red, counts.red + counts.white);
    // arr.fill("blue", counts.red + counts.white, arr.length);

    return arr;
}

console.log(sortColors(arr)); // ["red", "red", "white", "white", "blue", "blue"