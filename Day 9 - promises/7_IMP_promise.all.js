const promise1 = "donme";
const promise2 = 6;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve(300), 200),
);

/********NOTE promise.all is static method so no need of prototype */
/***Static Methods (Promise.all): These are utility functions that belong to the constructor 
 * itself (the "class" level). You call them directly on the name of the constructor 
 * (e.g., Promise.all(...)), not on a specific instance. 
 * They are used when you don't need a specific promise instance to perform the action.
Prototype/Instance Methods (Promise.prototype.then): These are for instances of the object. 
You call these on a promise you've already created (e.g., myPromise.then(...)). 
 */
/**Explanation: "I'm defining myall as a static method directly on the Promise constructor.
 *  It shouldn't be on the prototype because it doesn't operate on a single instance;
 * it's a utility for an array of promises */
Promise.myall = function (promiseArr) {
  // 1. Edge Case: Handle empty arrays immediately
  if (promiseArr.length === 0) {
    return Promise.resolve([]);
  }
  let result = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    promiseArr.forEach((promise, index) => {
      Promise.resolve(promise) //Edge Case: Wrap non-promise values(like if any primitive value) using Promise.resolve
        .then((res) => {
          count++;
          result[index] = res;
          if (count === promiseArr.length) {
            resolve(result);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};
Promise.myall([promise1, promise2, promise3])
  .then(console.log)
  .catch(console.log);
