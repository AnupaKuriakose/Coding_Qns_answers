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
*
}
console.log(arrayRotation([1,2,3,4,5], 3));

//solution 2 -if not able to use slice, unshift or pop
function rotateRight(arr, numberOfRotation){
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
    //reverse the firdt to k elements (ie, k-1)
    //reverse k to arr.length -1 elements
   reverse(arr, 0, arr.length-1);
    reverse(arr, 0, k-1);
    reverse(arr, k, arr.length -1)

 
}


//solutiomn3
function rotateRight(arr, k) {
  k = k % arr.length;
  console.log(arr.slice(-k));
  return arr.slice(-k).concat(arr.slice(0, arr.length - k));
}

rotateRight([1, 2, 3, 4, 5], 2);//means rotate right 2 positios from last  here 4,5 move to front

function rotateLeft(arr, numberOfRotation){
    
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
    //reverse the firdt to k elements (ie, k-1)
    //reverse k to arr.length -1 elements
    //reverse the firdt to k elements (ie, k-1)
    reverse(arr, 0, k-1);
    reverse(arr, k, arr.length -1)
   reverse(arr, 0, arr.length-1);
   
   return arr;
    

 
}

function leftRotateByK(arr, k) {
  // Handle cases where k is greater than array length
  k = k % arr.length;
  for (let i = 0; i < k; i++) {
    let firstElement = arr.shift();
    arr.push(firstElement);
  }
  return arr;
}

let arrK = [1, 2, 3, 4, 5];
leftRotateByK(arrK, 2);
console.log(arrK); // Output: [3, 4, 5, 1, 2]
//how to caslaclulate mod here
//2%5
//step 1:2/5 is 0.40
//next take whole part from stp 1 which si 0
//step 2:multipley that by the divior(5) = 0*5 =0
//finally takethe answe in second step and subtract from divident
//2-0 = 2. so 2 is mod f 2 mod 5

// [4, 5, 1, 2, 3]
