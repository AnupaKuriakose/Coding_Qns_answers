// find the max sum of contiguous values in an array.
// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Input: [-2,-11,-13,-2,-14,-9,-5,-15,-3],
// Output: -2
// Explanation: [-2] has the largest sum = -2.
// Input: [-2,0,-1]
// Output: 0
// Explanation: [0] has the largest sum = 0.

function continuosSum(arr)
{
    let maxSum = -Infinity;
    let currSum = -Infinity;
    for(let i=0; i<arr.length;i++)
    {
        currSum = Math.max(0, currSum);
        currSum += arr[i];
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
}
continuosSum([-2,1,-3,4,-1,2,1,-5,4]);

//OR
function continuosSum(anArray)
{
   let  currentSum = 0;
  let  currentMax = 0;
 

  for (let j=0; j < anArray.length; j++)
  {
    currentSum += anArray[ j ];

   if (currentMax < currentSum) 
     currentMax = currentSum;
    
   if (currentSum < 0)
     currentSum = 0;
  }

  return currentMax;
}
console.log(continuosSum([-2,1,-3,4,-1,2,1,-5,4]));