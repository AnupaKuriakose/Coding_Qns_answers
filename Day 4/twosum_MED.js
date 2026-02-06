//two sum
//given a list of numbers and a target value, find two numbers in the list that add up to the target, 
// usually returning their indices
//nput:  [2, 7, 11, 15]) and a target integer (e.g., 9). 
//Goal: Find two numbers in the array that sum to the target. 
//Output: The indices (positions) of those two numbers (e.g., [0, 1] because nums[0] + nums[1] = 2 + 7 = 9). 

function twoSum(arr, target)
{
    let map = {};
    for(let i=0; i<arr.length;i++)
    {
       const diff = target - arr[i];//9-2 = 7
        if(map[diff] !== undefined ) //or if(diff in map)
        {
            return [map[diff], i];
        }
        //console.log('map', map);
        map[arr[i]] = i; //{2: 0,}
    }
   
}
console.log(twoSum([2, 7, 11, 15], 9))


function twoSumSorted(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}