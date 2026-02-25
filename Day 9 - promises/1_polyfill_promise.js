//dev.to/devsmitra/javascript-promise-methods-with-polyfill-example-a-cheat-sheet-for-developer-2h0e

//Promise polyfill implementation

//executor - function which is (resolve, reject => {{}})
function PromisePolyFill(executor) {
  let onResolve,
    onReject,
    isFullFilled = false,
    isRejected = false,
    isCalled = false,
    value;

  function resolve(val) {
    isFullFilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }
  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onReject === "function") {
      onReject(val);
      isCalled = true;
    }
  }
  this.then = function (callback) {
    onResolve = callback;
    if (isFullFilled && !isCalled) //handle syncronous operation
    {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };
  this.catch = function (callback) {
    onReject = callback;
    if (isFullFilled && !isCalled) //handle syncronous operation
    {
      isCalled = true;
      onReject(value);
    }
    return this;
  };
  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

const examplePromise = () =>
  new PromisePolyFill((resolve, reject) => {
    setTimeout(() => {
      //if settimeout not there it become synchronous call
      resolve(2);
    }, 1000);
  });
examplePromise()
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
