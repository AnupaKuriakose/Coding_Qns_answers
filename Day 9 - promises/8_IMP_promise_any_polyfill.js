const p1 = new Promise((_, reject) => reject("Error1"));
const p2 = new Promise((resolve) => setTimeout(() => resolve("Success after 1s"), 1000));
const p3 = new Promise((_, reject) => reject("Error3"));

Promise.any([p1, p2, p3])
  .then(res => console.log(res))
  .catch(err => console.log(err));
  //Success after 1s

//   When all reject
// const p1 = Promise.reject("Error1");
// const p2 = Promise.reject("Error2");

// Promise.any([p1, p2])
//   .then(res => console.log(res))
//   .catch(err => console.log(err));


// Output:

// AggregateError: All promises were rejected
//   errors: ["Error1", "Error2"]

Promise.myAny = function (promiseArr) {
  return new Promise((resolve, reject) => {
    if (promiseArr.length === 0) {
      // Edge case: empty array → reject immediately
      return reject(new AggregateError([], "All promises were rejected"));
      //AggregateError is used to mimic the real Promise.any behavior.
    }

    let rejectionReasons = [];
    let count = 0;//Counts how many promises have rejected so far.

    promiseArr.forEach((promise, index) => {
      // Wrap any value into a promise
      Promise.resolve(promise)
        .then((value) => {
          // **As soon as any promise fulfills, resolve outer promise**
          resolve(value);
        })
        .catch((err) => {
          // Store the rejection reason
          rejectionReasons[index] = err;
          count++;

          // If all promises have rejected, reject outer promise
          if (count === promiseArr.length) {
            reject(new AggregateError(rejectionReasons, "All promises were rejected"));
          }
        });
    });
  });
};