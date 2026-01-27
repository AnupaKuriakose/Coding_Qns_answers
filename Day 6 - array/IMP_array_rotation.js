// input : [1,2,3,4,5], number of rotation: 3
//  step 1: [5,1,2,3,4]
// step 2: [4,5,1,2,3]
// step 3: [3,4,5,1,2]

//3 SOLUTIONS BELOW

//solution 1
function arrayRotation(arr, numberOfRotation){
let arr = [1,2,3,4,5];
for(let i=0; i< numberOfRotation; i++)
{
    arr.unshift(arr.pop());
}
return arr;

}
console.log(arrayRotation([1,2,3,4,5], 3));

//solution 2 -if not able to use slice, unshift or pop
function rotate1(arr, numberOfRotation){
    let arr = [1,2,3,4,5];
    let k = numberOfRotation;
    k= k% arr.length; //3%5 = 3
    const reverse =  (arr, start, end) => {
        while(start<end)
        {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
    //first reverse the entire array
    //reverse the firdt to k elements
    //reverse k to arr.length -1 elements
    console.log(reverse(arr, 0, arr.length-1));
 
}


//solutiomn3
function rotateRight(arr, k) {
  k = k % arr.length;
  console.log(arr.slice(-k));
  return arr.slice(-k).concat(arr.slice(0, arr.length - k));
}

rotateRight([1, 2, 3, 4, 5], 2);
//how to caslaclulate mod here
//2%5
//step 1:2/5 is 0.40
//next take whole part from stp 1 which si 0
//step 2:multipley that by the divior(5) = 0*5 =0
//finally takethe answe in second step and subtract from divident
//2-0 = 2. so 2 is mod f 2 mod 5

// [4, 5, 1, 2, 3]
