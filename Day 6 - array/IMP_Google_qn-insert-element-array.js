
// Implement a function insert(array, value, index) that inserts the given value at the specified index.

// All existing elements starting from that index must be shifted one position to the right.

// Do not use built-in array methods like splice.
 
// Input:

// array = [1, 2, 3, 4]// value = 99// index = 2

// Output:// [1, 2, 99, 3, 4]

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
 