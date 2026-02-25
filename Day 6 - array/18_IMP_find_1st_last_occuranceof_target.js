//Find last and
// first occurrence of target in sorted array that contain duplicates in js
//eg: input: [1,2,2,3,3,3,5], target=3 output ->[3,5]

function findTarget(arr, target) {
  let first = -1;
   let last = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      first = i;
      break;
    }
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === target) {
      last = i;
      break;
    }
  }
  return [first, last];
}

console.log(findTarget([1, 2, 2, 3, 3, 3, 5], 3));

//OR
function findTarget(arr, target) {
  let first = -1;
   let last = -1;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === target) {
    if(first === -1) first = i;
    last = i;
    }
  }
  
  return [first, last];
}

console.log(findTarget([1, 2, 2, 3, 3, 3, 5], 3));