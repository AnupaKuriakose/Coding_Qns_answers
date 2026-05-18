//[1,3,4,2,2]

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and using only constant extra space.
// so this will abe a specicic range
//we can use simple set but it will be extra memory/
// with simple set
var findDuplicate = function (nums) {
  let set = new Set();
  for (let num of nums) {
    if (set.has(num)) return num;
    set.add(num);
  }
};

//But without using set/map
// its Floyd’s cycle = only works for “1 to n” arrays, one duplicate
// Arbitrary numbers → must use Set/Map or sorting
// 

//LeetCode 287: Only one number is duplicated (but it could appear many times). Goal: 
// space without modifying the array.
//[1, 3, 4, 2, 2]
// Length = 5 → indices 0 to 4
// Values = numbers 1 to 4 (but one number repeats)
//Step 1: Think of each number as a “pointer” - like linked list
//Index = your position
//Value at that index = where to jump next eg: if u ar at
// index 0 -> value is 1 -> jusmb to index 1
// index 1 -> value 3 -> jumb to index 3
// index 3 -> value 2 -> jumb to index 2
// index 2 -> value 4 -> jumb to indes 4
// index 4 -> value 2 -> jumb to index 2
//now you see the cycle repeat again from index 2 value 4 jump to 4 then value 2 jumb to 2.....
// Notice what happened?
// We already visited index 2 before
// Now we’re back at index 2 → loop! This loop exists because the number 2 is repeated.

// If full explanation feels hard, just say:

// “I treat the array like a linked list where each value points to the next index.
// Because there’s a duplicate, it creates a cycle. I use slow and fast pointers to detect the cycle and find its starting point, which is the duplicate.”

function findDuplicate(arr) {
  // Step 1: Initialize slow and fast pointers
  //slow goes one step fast goes 2 steps
  // The fast pointer moves twice as fast as the slow pointer.
  let slow = arr[0];
  let fast = arr[0];
  // Step 2: Find the intersection point where slow and fast meet
  do {
    slow = arr[slow]; // Moves 1 step
    fast = arr[arr[fast]]; // Moves 2 steps
  } while (slow !== fast);

  // Step 3: Find the entrance to the cycle (the duplicate number)
  // Reset slow pointer to the start of the array
  slow = nums[0];

  while (slow !== fast) {
    slow = nums[slow]; // Both move 1 step at a time
    fast = nums[fast];
  }

  return slow; // or return fast; they meet at the duplicate
}
