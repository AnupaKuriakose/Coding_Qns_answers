// Given a binary array nums (only 0 and 1), return the maximum number of consecutive 1s.

// Example
// Input:  [1,1,0,1,1,1]
// Output: 3

function findMaxconsecutiveOnes(arr)
{
   let current = 0;
   let longest = 0;

   for(let i=0; i<arr.length;i++)
   {
    if(nums[i] === 1)
    {
        current++;
        longest = Math.max(sum, current);

    }
    else{
        current = 0;
    }
   }
   return max;
}