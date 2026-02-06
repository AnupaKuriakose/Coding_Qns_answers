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
