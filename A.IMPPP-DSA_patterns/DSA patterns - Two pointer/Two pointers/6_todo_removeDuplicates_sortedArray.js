//if sorted is specified then
//👉 Two pointers are mostly used when the array is SORTED
// USE map if need to return new array

//[1,2,1,2,3,3,4,5]// do not create a new array
// arr[0] = 1, arr[1]= 1 -> 1->2
// arr[1] = 2, arr[3]=1 => 2

let arr= [1,2,1,2,3,3,4,5];// this is unsorted array
arr.sort(); [1,1,2,2,3,3,4,5]

let pos = 0;
for(let i=1; i<arr.length; i++)
{
    if(arr[pos]!== arr[i]) //arr[0] == arr[2]->yes arr[1] = 2
        {
            pos++;
            arr[pos] = arr[i];
        }
    
}

//if use same array and unsorted array
let arr1 = [1, 2, 1, 2, 3, 3, 4, 5];
let seen = new Set();
let left = 0;
for (let right = 0; right < arr1.length; right++) {
    if(!seen.has(arr1[right])) 
    {
        seen.add(arr1[right]);
        arr1[left] = arr1[right];
        left++;
    }
}
arr1.length = left;
console.log(arr1);




