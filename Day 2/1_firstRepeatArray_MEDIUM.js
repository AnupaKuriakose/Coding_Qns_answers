//Problem: Find the first repeating element in an array

function firstRepeat(arr)
{
    const map = new Map();
    for(const i of arr)
    {
        if(!map.has(i))
        {
            map.set(i, true)
        }
        else {
            return i;
        }
    }

}
console.log(firstRepeat([1,2,3,4,3,2,2,4,5]));//3
//if I want to return by index i mean 2
//🧠 Problem Reminder (IMPORTANT)

//Find the repeating element whose FIRST occurrence index is the smallest
function firstRepeatingByIndex(arr) {
  const indexMap = {};
  let minIndex = Infinity;
  let result = null;

  for (let i = 0; i < arr.length; i++) {
    if (indexMap.hasOwnProperty(arr[i])) {
      minIndex = Math.min(minIndex, indexMap[arr[i]]);
      result = arr[minIndex];
    } else {
      indexMap[arr[i]] = i;
    }
  }

  return result;
}
console.log(firstRepeatingByIndex([1,2,3,4,3,2,2,4,5]));//2