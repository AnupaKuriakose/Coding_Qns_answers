
//Behavior:

// Returns a new array
// Does NOT modify original
// Supports start, end, and negative indexes
//syntax
//slice()
// slice(start)
// slice(start, end)
//slice() -> copies entire
//slice(2) -> from index 2 to end
//slice(-2) -> get last two elements - last element index- -1
//slice(1,-1)-> start from 1 and exclude -1 which is last 

function mySlice(start = 0, end = arr.length) {
  const result = [];
  const len = this.length;

  // Handle negative indexes
  start = start < 0 ? len + start : start;
  end = end < 0 ? len + end : end;

  for (let i = start; i < end && i < len; i++) {
    result.push(this[i]);
  }

  return result;
}

const arr1 = [1,2,3,4];
console.log(arr1.slice(-2));
console.log(arr1.slice(1,3));