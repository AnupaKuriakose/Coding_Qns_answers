//Given an integer array nums, return an array answer such that answer[i]
// is equal to the product of all the elements of nums except nums[i].
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

//Answer memory trick - answer[i] = product of left * product of right

function productExceptSelf(arr) {
  let result = new Array(arr.length).fill(1);

  //left products
  let leftProduct = 1;
  for (let i = 0; i < arr.length; i++) {
    result[i] = leftProduct; //res 0 : 1
    leftProduct *= arr[i];
  }
  //end of this loop: result [1,1,2,6]
  //right products
  let rightProduct = 1;
  for (let i= arr.length - 1; i>= 0; i--) {
    result[i] *= rightProduct; //first loop element at 3 -> so 4 right of 4 nothing so 1
    rightProduct *= arr[i];
  }

  return result;
}
console.log(productExceptSelf([1, 2, 3, 4]));

//IF INTERVIEWR ASK ANY OTHER WAY

//The idea is to handle two special cases of the input array: when it contains zero(s) 
// and when it doesn't. If the array has no zeros, product of array at any index (excluding itself) 
//can be calculated by dividing the total product of all elements by the current element. 

function productExceptSelf(arr) {
    let zeros = 0, idx = -1, prod = 1;
	
    // Count zeros and track the index of the zero
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros++;
            idx = i;
        } else {
            prod *= arr[i];
        }
    }

    let res = new Array(arr.length).fill(0);

    // If no zeros, calculate the product for all elements
    if (zeros === 0) {
        for (let i = 0; i < arr.length; i++) 
            res[i] = Math.floor(prod / arr[i]);
    }
    // If one zero, set product only at the zero's index
    else if (zeros === 1)
        res[idx] = prod;

    return res;
}

// Driver Code
let arr = [10, 3, 5, 6, 2];
let res = productExceptSelf(arr);
console.log(res.join(" "));