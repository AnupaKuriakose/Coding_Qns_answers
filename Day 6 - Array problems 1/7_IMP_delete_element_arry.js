//Delete an element at a given index
function remove(arr, index)
{
    for(let i = index; i< arr.length - 1; i++)
    {
        arr[i] = arr[i+1]
    }
    arr.length = arr.length -1 ;
}


let arr = [10, 20, 30, 40];
remove(arr, 2);
console.log(arr); // [10, 20, 40]