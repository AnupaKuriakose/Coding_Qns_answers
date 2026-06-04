
// Implement a function insert(array, value, index) that inserts the given value at the specified index.

// All existing elements starting from that index must be shifted one position to the right.

// Do not use built-in array methods like splice.
 
// Input:

// array = [1, 2, 3, 4]// value = 99// index = 2

// Output:// [1, 2, 99, 3, 4]
//***slight extention 
// 1.Handle Edge Cases -What if index is out of bounds?
//2.Insert WITHOUT Mutating Original Array (Immutable)
//3.Insert Into a Fixed-Size Array
// If array size is fixed, inserting a new value means:
// 👉 We shift right
// 👉 The last element is dropped
//4.Insert While Maintaining Sorted Order
//5.Insert Multiple Values Instead of One-Insert [9, 8] at index 2

function insert(array, value, index)
{
//loop throeugh from end until i is greater than index
for(let i = arr.length; i> index; i--)
{
arr[i] = arr[i-1];
}
arr[index] = value;
}
console.log(insert([1, 2, 3, 4], 99, 2))
 
//edge cased
//1.Index out of bounds means the given index is outside the valid range
//  of the array — either negative or greater than the array’s length.
//  In such cases, we handle it gracefully by inserting at the beginning 
// or end to avoid runtime errors.

// //1.function insert(array, value, index) {
//   if (index < 0) index = 0;
//   if (index > array.length) index = array.length;

//   for (let i = array.length; i > index; i--) {
//     array[i] = array[i - 1];
//   }

//   array[index] = value;
//   return array;
// }

//2.function insertImmutable(arr, value, index) {
//   return [
//     ...arr.slice(0, index),
//     value,
//     ...arr.slice(index)
//   ];
// }

//3
// 1️⃣ Insert Into a Fixed-Size Array
// ❓ What happens to the last element?

// If array size is fixed, inserting a new value means:
// 👉 We shift right
// 👉 The last element is dropped

// Example
// array = [1, 2, 3, 4]   // size = 4
// insert 99 at index 1

// Result → [1, 99, 2, 3]   // 4 is dropped

// ✅ Implementation (Fixed Size)
// function insertFixed(arr, value, index) {
//   for (let i = arr.length - 1; i > index; i--) {
//     arr[i] = arr[i - 1]; // shift right
//   }
//   arr[index] = value;
//   return arr;
// }

//4
// //function insertSorted(arr, value) {
//   let index = 0;

//   while (index < arr.length && arr[index] < value) {
//     index++;
//   }

//   for (let i = arr.length; i > index; i--) {
//     arr[i] = arr[i - 1];
//   }

//   arr[index] = value;
//   return arr;
// }

//5
// function insertMultiple(arr, values, index) {
//   const shiftCount = values.length;

//   // Shift elements right
//   for (let i = arr.length - 1; i >= index; i--) {
//     arr[i + shiftCount] = arr[i];
//   }

//   // Insert new values
//   for (let i = 0; i < values.length; i++) {
//     arr[index + i] = values[i];
//   }

//   return arr;
// }