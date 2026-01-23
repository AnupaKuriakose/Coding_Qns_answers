//Find minimum in an array
function findMin(arr)
{
    let min = arr[0];
    arr.forEach((el)=> {
        if(el < min) min = el;
    });
    return min;
}


console.log(finMin([23,41,12,3,56]));