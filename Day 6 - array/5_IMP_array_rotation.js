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
//******Explaination of code below how to tell while writing */
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

//if we can use push,pop, reverse

function rotateRight1(arr, numberOfRotation){
   if(arr == null || arr == undefined || arr.length == 0) return arr;
   for (let i = 0; i < numberOfRotation; i++) {
    //input-1,2,3,4,5 rota-3
    //5,1,2,3,4 - 1st rotation
    //4,5,1,2,3 -> 2nd
    //3,4,5,1,2 -> 3rd
    let popped = arr.pop(); //5 - 1 2 3 4
    arr.reverse(); //4 3 2 1
    arr.push(popped);//4 3 2 1 5
    arr.reverse();//5 1 2 3 4
   }
   return arr;
}

// ==================================================================================
// ================================================================================
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

//****Explanation */

//"I'll start by calculating d = d % n. 
// This is important because if we have an array of length 5 and we rotate it 5 times, 
// it ends up exactly where it started. 
// If we rotate it 6 times, it's the same as rotating it just 1 time."
//"I'm going to normalize \(d\) using the modulo operator. 
// This handles cases where \(d\) is greater than the array length,
// preventing unnecessary work and ensuring our index bounds stay valid."
//"Next, I'll write a reverse helper function. I'll use a two-pointer approach to swap elements
//  in place. This is great for memory efficiency because it gives us \(O(1)\) space complexity."
//Now, for a left rotation, I use a three-step reversal process:Reverse the first \(d\) elements.
// Reverse the remaining elements from \(d\) to the end.Reverse the entire array to bring everything together." 
