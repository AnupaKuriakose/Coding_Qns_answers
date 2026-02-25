//Find an element in array such that the sum of left array is equal to sum of right array elements

//eg [1,4,2,5,0] ans : 2 -> left side sum -5 rightside sum -5

function findPivot(arr)
{
    //find total sum
    //for loop and each ele subtract fromm total sum which is now total
    //then check right sum = left sum, if yes retun i
    //otherwise leftsum += current el
    let total = arr.reduce((acc, item) => acc + item ,0);
    let leftsum = 0;
    for (let i = 0; i < arr.length; i++) {
        total -= arr[i];
       if(leftsum === total)
       {
        return arr[i];
       }
        leftsum +=arr[i];
    }
    return -1;
}
console.log(findPivot([1,4,2,5,0]));