//Elements Appearing More Than n/k Times
//Given an array arr[] of size n and an integer k, determine the number of elements that appear more than n/k times in the array.

// Input: arr[ ] = [3, 4, 2, 2, 1, 2, 3, 3], k = 4
// Output: 2
// Explanation: Here n/k is 8/4 = 2, therefore 2 appears 3 times in the array that is greater than 2 and 3 appears 3 times in the array that is greater than 2


function countOccurance(arr, k)
{
     const n = Math.floor(arr.length/k);
     let map = {};
     for(let item of arr)
     {
        map[item] = (map[item] || 0)+1;
     }
   let count = 0;
   for(let key in map)
   {
    if(map[key] > n)
    {
        count++;
    }
   }
   return count;
}