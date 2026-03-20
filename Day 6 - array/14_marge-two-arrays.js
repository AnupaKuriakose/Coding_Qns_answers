//Merge Two Arrays

// Question
// Input:
// arr1 = [1, 2, 3]
// arr2 = [3, 4, 5]
// Output: [1, 2, 3, 4, 5]

//method 1

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5]
console.log('method1', arr1.concat(arr2));
console.log('method2', [...new Set(arr1),...new Set(arr2)]);
console.log('method 3', [...new Set([...arr1, ...arr2])]);
arr1.push(...arr2)
console.log('modify originalarra', arr1);

//method 2 - pure JS

function mergeSortedArrays(arr1, arr2) {
  const merged = [];
  let i = 0;
  let j = 0;

  // Compare elements from both arrays
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // Concatenate any remaining elements - why remaining if arry 1 =[1,2], array 2 =[3,4,5,6,7]
  //after while loop it will be [1,2] becuase arry1 has less lebgth
  return [...merged, ...arr1.slice(i), ...arr2.slice(j)];
}

// Example usage:
const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(array1, array2)); // [1, 2, 3, 4, 5, 6, 7, 8]
//
// Implementation without slice
// javascript
function mergeSortedArrays(arr1, arr2) {
  const merged = [];
  let i = 0;
  let j = 0;

  // 1. Compare and push the smaller element
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // 2. If arr1 has items left, push them all
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  // 3. If arr2 has items left, push them all
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

// Example:
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6, 8])); 
// Output: [1, 2, 3, 4, 5, 6, 8]


