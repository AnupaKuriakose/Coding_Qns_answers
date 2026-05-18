//Given an array of integers nums sorted in non-decreasing order, 
// find the starting and ending position of a given target value.

//If target is not found in the array, return [-1, -1].
// nput: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]


function findStartEnd(arr, target)
{

    
    const findElem = (isFirst) => {
    let res = -1;
    let left=0;
    let right=arr.length-1;
    while(left<=right)
    {
        let mid = Math.floor((left+right)/2);
        if(arr[mid] === target)
        {
            res = mid;
            isFirst ? right = mid - 1 : left = mid + 1;
        }
        else if(arr[mid] < target)
        {
            left = mid + 1;
        }
        else{
            right = mid -1;
        }
    }
    return res;
  }
    return [ findElem(true), findElem(false)]
}
console.log(findStartEnd([5,7,7,8,8,10], 8));