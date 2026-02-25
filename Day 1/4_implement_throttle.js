const loggerFunc = () => {
  console.count("Throttled Function");
};

const throttle = (fn, limit) => {
  let flag = true;
  return function (...args) {
    if (flag) {
      fn.apply(this, args);
      flag = false;
    }
    setTimeout(() => {
      flag = true;
    }, limit);
  };
};


//with above we get issue "Leading & Trailing" Throttle - If you type "33333" quickly, the throttle captures the first "3", starts the timer, and ignores the remaining "3333" because they happened while the "gate" was closed.
//The Solution: "Leading & Trailing" Throttle
//To make sure the final result (the full "33333") actually shows up, you need a throttle 
// that saves the "last known value" and executes it once the delay is over.
function throttle(callback, delay) {
  let flag = true;
  let lastArgs = null;

  const timeoutFunc = () => {
    if (lastArgs === null) {
      flag = true; // No pending calls, open the gate
    } else {
      callback.apply(this, lastArgs); // Run the last captured input
      lastArgs = null; // Clear it
      setTimeout(timeoutFunc, delay); // Restart the timer & keep flag false
    }
  };

  return function(...args) {
    if (!flag) {
      lastArgs = args; // Keep updating the "latest" value
      return;
    }

    callback.apply(this, args); // Leading edge call
    flag = false; 
    setTimeout(timeoutFunc, delay);
  };
}

const betterLoggerFunction = throttle(loggerFunc, 1000);

window.addEventListener("resize", betterLoggerFunction);

// This is the normal Function without Throttling
//Check the console for the difference between the calls of Normal Function and the Throttled Function
const normalFunc = () => {
  console.count("Normal Function");
};

window.addEventListener("resize", normalFunc);
