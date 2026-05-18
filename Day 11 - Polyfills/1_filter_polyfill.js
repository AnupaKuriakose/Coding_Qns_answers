const arr = [1, 2, 3, 4];
const res = arr.filter((x) => x > 2);
//console.log(res)

Array.prototype.myFilter = function (callback) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      res.push(this[i]);
    }
  }
  return res;
};
const arr1 = [1, 2, 3, 4];
const res1 = arr1.myFilter((x) => x > 2);
console.log(res1);

Array.prototype.myFilter = function (callback, thisArg) {
  // 1. Validation (optional but recommended for interviews)
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this && callback.call(thisArg, this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};

//"I will define a myFilter method on the Array.prototype so that it's accessible 
// by all arrays, similar to the native .filter() method. 
// It should accept a callback and an optional thisArg to set the execution context
//Say: "First, I'm setting up the function, accepting the callback and optional thisArg."
//Say: "I'm adding basic input validation to ensure the callback is a function. 
// This is standard in JavaScript to throw a TypeError if not."
//Say: "I'm initializing an empty array, res, to hold the filtered results.
//  The filter method is non-destructive, meaning it does not modify the original array."
//Say: "I am using a for loop to iterate through the array.
//  In this context, this refers to the array the method is called upon."
//Say: "Here are three critical points:"
// i in this (Sparse Arrays): "I'm checking i in this to skip empty slots (holes) in sparse arrays,
//  which mimics the behavior of the native filter method.
// "callback.call(thisArg, ...): "I'm using .call() to invoke the callback, passing in 
// the thisArg as the execution context, along with current element this[i], 
// index i, and the original array this.
// \"Truthy Check: "If the callback returns a truthy value, I
// 'm pushing this[i] to our result array."Say: "Finally, I return the result array."
