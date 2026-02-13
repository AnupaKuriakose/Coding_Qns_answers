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
console.log('modify originalarra', arr1)
