//Given an array of numbers (positive and negative), find the contiguous subarray with the largest sum.

//Example: [-2, 1, -3, 4, -1, 2, 1, -5, 4] Answer: [4, -1, 2, 1] → Sum = 6
//return sum

function maxSubArray(arr)
{
    let currentState = 0;
    let maxSum = arr[0];
    for(let item of arr)
    {
        currentState += item;
        maxSum = Math.max(maxSum, currentSum);
        if(currentState < 0)
        {
            currentState = 0
        }
    }
    return maxSum;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
//now return subaaray alos
//Given an array of numbers (positive and negative), find the contiguous subarray with the largest sum.

//Example: [-2, 1, -3, 4, -1, 2, 1, -5, 4] Answer: [4, -1, 2, 1] → Sum = 6
//return sum

function maxSubArray(arr)
{
    let currentState = 0;
    let maxSum = arr[0];// -2
    let start = 0;
    let tempStart = 0;
    let end = 0;

    for(let i = 0; i < arr.length; i++)
    {
        currentState += arr[i];
        if(currentState > maxSum)
        {
            maxSum = currentState;
            start = tempStart;
            end=i;
        }
        if(currentState<0)
        {
            currentState = 0;
            tempStart = i+1;
        }
    }
    return {sum: maxSum, subArray: arr.slice(start, end+1)};
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));