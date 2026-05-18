//Given a sorted array of distinct integers and a target value, 
// return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.
// Search Insert Position

//basic binary serach to find element
//LeetCode 35: Return the index where the target should be (the left pointer).
//LeetCode 704: Return -1 if the target is not found. 


function findElement(arr, target)
{
    let left = 0;
    let right = arr.length - 1;

    while(left<=right)
    {
       let mid = Math.floor((left+right)/2);
       if(arr[mid] === target)
       {
        return mid;
       }
       else if(arr[mid] < target)
       {
        left = mid+1;
       }
       else{
        right = mid - 1;
       }
    }
    return left; // return -1 if noo need to return correct place index
}