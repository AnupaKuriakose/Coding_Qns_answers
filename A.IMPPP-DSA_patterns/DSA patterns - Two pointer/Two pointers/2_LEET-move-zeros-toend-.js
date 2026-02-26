//Zeros to the End (In-Place)
//Zeros to the beginning (In-Place)
//Zeros to the End 
//Start by explianiung problem and tell like
// let arr = [1, 0, 2, 0, 3, 4];
// let result = [];

// // 1. First pass: Find non-zeros and put them at the start
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//         result.push(arr[i]);
//     }
// }

// // 2. Second pass: Find zeros and append them
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//         result.push(0);
//     }
// }

// console.log(result); // [1, 2, 3, 4, 0, 0]
// Zeros to Beginning	arr[i] === 0	arr[i] !== 0	[0, 0, 1, 2, 3, 4]
// Zeros to End	arr[i] !== 0	arr[i] === 0	[1, 2, 3, 4, 0, 0]
function moveZeroesEnd(arr) {
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] !== 0) {
      arr[left] = arr[right];
      left++;
    }
  }

  // fill remaining with zero
  while (left < arr.length) {//OR for (let i = pos; i < arr.length; i++) {
    arr[left] = 0;
    left++;
  }

  return arr;
}

function moveZeroesBeginng(arr) {
  let pos = arr.length - 1;

  for (let right = arr.length - 1; right >=0 ; right--) {
    if (arr[right] !== 0) {
      arr[pos] = arr[right];
      pos--;
    }
  }

  // fill remaining with zero
  while (pos >= 0) { //OR for (let i = pos; i >= 0; i--) {
    arr[pos] = 0;
    pos--;
  }

  return arr;
}

console.log(moveZeroesEnd([1,0,3,4,0,0,45,67,7]))
console.log(moveZeroesBeginng([1,0,3,4,0,0,45,67,7]))

//EASY way swap
function pushZerosToEnd(arr) {
    
    // Pointer to track the position
    // for next non-zero element
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
        
        // If the current element is non-zero
        if (arr[i] !== 0) {
            
            // Swap the current element
            // with the 0 at index 'count'
            [arr[i], arr[count]] = [arr[count], arr[i]];
            
            // Move 'count' pointer to the next position
            count++;
        }
    }
}

// Driver  code 
const arr = [1, 2, 0, 4, 3, 0, 5, 0];
pushZerosToEnd(arr);
console.log(arr.join(" "));
