const arr =[1,2,3,4,5];
arr.forEach(element => {
    console.log(element);
});//1,2,3,4

//inorder to make our method -myforeach available to all arays
//  we need to pass this to array constructor prototype
//prototype - property available top all objets in js

Array.prototype.myForEach = function(callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      // Use .call to set the context to thisArg
      callback.call(thisArg, this[i], i, this);
    }
  }
}
arr.myForEach(element => {
    console.log(element);
}) //now you used arrow here it wont support thisARGS if ever need to use thisargs it shoukd be
//normal fun

// const contextObj = { name: "I am the context!" };
// const arr = ["test"];

// // 1. REGULAR FUNCTION (Works with thisArg)
// arr.myForEach(function(el) {
//   console.log("Regular Function:", this.name); 
// }, contextObj);
// // Output: "Regular Function: I am the context!"

// // 2. ARROW FUNCTION (Ignores thisArg)
// arr.myForEach((el) => {
//   console.log("Arrow Function:", this.name); 
// }, contextObj);
// // Output: "Arrow Function: undefined" (or global window name)
// Even though you are passing contextObj into your myForEach method, the arrow function simply refuses to use it.
//When you use an arrow function, it treats the this keyword 
// like any other variable: it looks at the code outside the function to see what this is. It completely ignores the fact that callback.call(thisArg)
 //is trying to force a new context on it.

 //Two ways to solve
 //"Traditional" Way (Use a Regular Function)
// Use a regular function expression so that .call() can do its job.
// javascript
// arr.myForEach(function(el) {
//   console.log(this.name); // Works!
// }, contextObj)
 //

//  The "Modern" Way (Use the Object Directly)
// If you prefer arrow functions, don't bother with thisArg. Just reference the object directly within the arrow function's scope.
// javascript
// const contextObj = { name: "I am the context!" };

// arr.myForEach((el) => {
//   console.log(contextObj.name); // Works because contextObj is in scope
// });
