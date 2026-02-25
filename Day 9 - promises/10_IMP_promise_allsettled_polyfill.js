const promise1 = new Promise((resolve, reject) => resolve("Done"));
const promise2 = 65;
const promise3 = new Promise((_, reject) => reject("Error")); // ✅ safe//
//dont use promise.reject directlyy node flag it as unhandled

// Promise.allSettled([promise1, promise2, promise3]).then((res) =>
//   console.log(res),
// );
// Ouput:
//[
//   { status: 'fulfilled', value: 'Done' },
//   { status: 'fulfilled', value: 65 },
//   { status: 'rejected', reason: 'Error' }
// ]

Promise.myallSettled = function (promiseArr) {
  // 1. Edge Case: Handle empty arrays immediately
  if (promiseArr.length === 0) {
    return Promise.resolve([]);
  }
  let result = [];
  let count = 0;

  return new Promise((resolve) => {
 
    promiseArr.forEach((promise, index) => {
      Promise.resolve(promise) //If interviewer asks “Why use Promise.resolve inside?”, answer:

        //Because Promise.allSettled must accept both promises and normal values.
        //Promise.resolve(value) converts any value into a promise, ensuring consistent handling.
        .then((res) => {
          result[index] = { status: "fulfilled", value: res };
        })
        .catch((error) => {
          result[index] = { status: "rejected", reason: error };
        })
        .finally(() => {//.finally runs regardless of whether the promise was fulfilled or rejected.This is critical for allSettled because you want to count every promise as "done", no matter the outcome.
          count++;
          if (count === promiseArr.length) {
            resolve(result);
          }
        });
    });
  });
};

Promise.myallSettled([promise1, promise2, promise3]).then((res) =>
  console.log(res),
);
