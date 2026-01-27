function rotate1(arr, numberOfRotation){
    let k = numberOfRotation;
    k= k% arr.length; //3%5 = 3
    const reverse =  (arr, start, end) => {
        while(start<end)
        {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
        return arr;
    }
    //first reverse the entire array
    //reverse the firdt to k-1 elements -0 to 2->3 basically
    //reverse k to arr.length -1 elements
    console.log(reverse(arr, 0, arr.length-1));
    console.log(reverse(arr, 0, k-1))
    console.log(reverse(arr, k, arr.length-1))
 
}
rotate1([1,2,3,4,5], 3);