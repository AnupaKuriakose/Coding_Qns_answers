//Imagine nums1 = [1, 5, 8, 0, 0, 0] and nums2 = [2, 6, 9].\
//arr1 already has extra space (zeros at the end) to fit arr2,
// the standard way is to merge from the back
// The Pointers
// i: Points to the last "real" number in nums1.
// j: Points to the last number in nums2.
// k: Points to the very last slot of nums1 (the "insertion point").
// The Logic (Step-by-Step)
// Compare: We look at nums1[i] and nums2[j]. Which one is bigger?
// Place: We take the bigger number and put it at the very end (nums1[k]).
// Move: We move the pointer for that number and the insertion pointer (k) one step back.
// Finish: We repeat until one array is empty. If nums2 still has numbers left, we just copy them over.
// Example Walkthrough
// Imagine nums1 = [1, 5, 8, 0, 0, 0] and nums2 = [2, 6, 9].
// Compare 8 vs 9: 9 is bigger. Put 9 at the end. [1, 5, 8, 0, 0, 9]
// Compare 8 vs 6: 8 is bigger. Put 8 in the next slot. [1, 5, 8, 0, 8, 9]
// Compare 5 vs 6: 6 is bigger. Put 6 in. [1, 5, 8, 6, 8, 9]
// ...and so on until it's [1, 2, 5, 6, 8, 9].
//This is the exact solution you would use for the LeetCode 88: Merge Sorted Array problem.

function mergeInPlace(arr1, arr2) {
  let n = arr2.length;
  let m = 0;

  // 1. Calculate 'm' manually if not given
  for (let i = arr1.length - 1; i >= 0; i--) {
    if (arr1[i] !== 0) {
      m = i; //store index direclty
      break;
    }
  }

  // 2. Set pointers
  let i = m; // Last real number in arr1
  let j = n - 1; // Last number in arr2
  let k = arr1.length - 1; // Very end of arr1

  // 3. Merge backwards
  while (j >= 0) {
    if (i >= 0 && arr1[i] > arr2[j]) {
      arr1[k] = arr1[i];
      k--;
      i--;
    } else {
      arr1[k] = arr2[j];
      k--;
      j--;
    }
  }
  return arr1;
}