//given array sort without using sort()

function sortArr(arr)
{
    for (let i = 0; i < arr.length; i++) {
       for (let j = i+1; j < array.length; j++) {
        if(arr[i]<arr[j])
        {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j]=temp;
        }
        
       }
        
    }
    return arr;
}
console.log(sortArr([3,2,1,5,4,0]))