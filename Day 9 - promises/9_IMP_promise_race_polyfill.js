const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// Expected output: "two"It's useful when you want the first async task to complete, but do not care about its eventual state (i.e., it can either succeed or fail).

Promise.myRace = function (promiseArr) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promiseArr.length; i++) {
      Promise.resolve(promiseArr[i])
        .then(resolve)  // Whoever fulfills first → resolve outer promise
        .catch(reject); // Whoever rejects first → reject outer promise
    }
  });
};

Promise.myRace([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});