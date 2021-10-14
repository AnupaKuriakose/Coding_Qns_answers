
//LeetCode: Median of Two Sorted Arrays — JavaScript

//Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
//Input: nums1 = [1,3], nums2 = [2]
//Output: 2.00000
//Input: nums1 = [1,2], nums2 = [3,4]
//Output: 2.50000
//Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

function findMedian(arr1, arr2)
{
  let newMergedArr = [...arr1, ...arr2];//or do arr1.concat(arr2)
  newMergedArr.sort((a,b)=> a-b);
  
  let len = newMergedArr.length;
  //first check the length is odd/even
    if(len%2 != 0)
    { 
    //odd 
    //to find odd number of numbers in the sample you can simply add 1 to the
    //total number of numbers in the sample and divide by 2 to get the median

    let index = (len +1)/2;
    return newMergedArr[index - 1];
     } 
  else 
  {
    //even //so divide by 2 and add 1
    //indexof first median
    let firstIndex = len/2;
    //indexof second median
    let secondIndex = firstIndex + 1;
    let med1 = newMergedArr[firstIndex - 1];
    let med2 = newMergedArr[secondIndex - 1];
    //calculate the average
    let average  = (med1 + med2)/2;
    return average;

  }

}
console.log(findMedian([1,3],[2,4]))