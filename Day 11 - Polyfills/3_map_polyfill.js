// const arr = [1,2,3,4];
// const res = arr.map((x)=> x*2);
//console.log(res);

/********* NOTE - DONOT USE ARROW FUNC BECOAUSE IT WONT BIND this keyword**/
Array.prototype.myMap = function(callback, thisArg) {
  // 1. Validation (optional but recommended for interviews)
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  // 2. Create the result array
  const result = [];
  
  for (let i = 0; i < this.length; i++) {
    // 3. Skip "holes" in sparse arrays (e.g. [1, , 3])
    if (this.hasOwnProperty(i)) {
      // 4. Call the callback and store the returned value
      // result[i] ensures the new array stays "sparse" if the original was
      result[i] = callback.call(thisArg, this[i], i, this);
    }
  }

  // 5. Return the transformed array
  return result;
};
const arr = [1,2,3,4];
const res1 = arr.myMap((x)=> x*3);
console.log(res1);
//make it accessbale to other arrays using prototype.
//its running callback fro each element so

//Even if you don't pass it, thisArg just becomes undefined in your loop,
//  and callback.call(undefined, ...) behaves exactly like a normal 
// function call.

//While arrow functions don't care about thisArg, regular functions do. 
// Before arrow functions existed (pre-2015), thisArg was the 
// only clean way to tell a callback function which object it belonged to.