/**
 * 
 * Promise.resolve(value)

Purpose:

Converts any value (promise or non-promise) into a resolved promise.

If the value is already a promise, it returns that promise as is.
// 1. Normal value → becomes a fulfilled promise
const p1 = Promise.resolve(42);
p1.then(console.log); // Output: 42

// 2. Already a promise → returns the same promise
const existingPromise = new Promise((resolve) => resolve("Hello"));
const p2 = Promise.resolve(existingPromise);
p2.then(console.log); // Output: Hello

// 3. Thenable object → resolves according to the thenable
const thenable = { then: (resolve) => resolve("I am thenable") };
Promise.resolve(thenable).then(console.log); // Output: I am thenable
 */
Promise.myResolve = function (value) {
  // If value is already a promise, return it
  if (value instanceof Promise) {
    return value;
  }

  // Otherwise, wrap the value in a new fulfilled promise
  return new Promise((resolve) => resolve(value));
};
Promise.myResolve(42).then(console.log); // 42
Promise.myResolve(Promise.resolve("Hello")).then(console.log); // Hello