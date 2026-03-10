const loggerFunc = () => {
  console.count("Throttled Function");
};

const throttle = (fn, limit) => {
  let flag = true;
  return function (...args) {
    if (flag) {
      fn.apply(this, args);
      flag = false;
    
    setTimeout(() => {
      flag = true;
    }, limit);
  }
  };
};
/**explanation:
 * The function uses a closure to maintain a flag variable. 
 * This flag tracks whether the function is "locked" or "available" to run.
 * When the returned function is called, it checks if (flag).
If true, it executes the original function (fn) immediately using .apply(this, args) 
to ensure the correct context and arguments are passed.
It then immediately sets flag to false, "locking" the function
A setTimeout is scheduled for the duration of the limit. 
Once that timer expires, it sets flag back to true, 
"unlocking" the function for the next execution.
The very first call executes immediately, and subsequent calls are ignored until the limit passes.
 * */



//with above we get issue "Leading & Trailing" Throttle - If you type "33333" quickly,
//  the throttle captures the first "3", starts the timer, 
// and ignores the remaining "3333" because they happened while the "gate" was closed.
//The Solution: "Leading & Trailing" Throttle
//To make sure the final result (the full "33333") actually shows up, you need a throttle 
// that saves the "last known value" and executes it once the delay is over.
//To implement a Trailing Edge throttle, the goal is to ensure that even if the user 
// stops their activity (like scrolling or typing) during the "lock" period, 
// the very last event still fires once the timer expires.


//"This is a Leading and Trailing Edge throttle implementation. 
// It ensures the first call happens immediately, 
// but it also guarantees that the very last call made during the wait period 
// isn't lost—it's just delayed."

function throttle(fn, limit){
  let timeoutId = null;//Acts as our "lock." If it’s not null, we are in the cooldown period.
  let lastArgs = null;//Acts as our "memory." It stores the most recent arguments passed while the throttle was locked, so we can execute them once the timer ends.

  return function (...args) {
    // If no timer is active, execute immediately (Leading Edge)
    if (!timeoutId) {
      fn.apply(this, args);
      
      // Start the lock-out period
      timeoutId = setTimeout(() => {
        // Once the timer expires, check if a "trailing" event occurred
        //we check lastArgs. If it has data, it means the user tried to trigger 
        // the function during the lockout. We execute fn with those final arguments 
        // and clear lastArgs. Finally, we set timeoutId to null, 
        // opening the gate for the next cycle
        if (lastArgs) {
          fn.apply(this, lastArgs);
          lastArgs = null; // Clear arguments after execution
          }
        timeoutId = null;
      }, limit);
    } else {
      // If locked, just save the latest arguments for the trailing edge
      //if timer still running,  we just update lastArgs with the latest data. 
      lastArgs = args;
    }
  };
};

const betterLoggerFunction = throttle(loggerFunc, 1000);

window.addEventListener("resize", betterLoggerFunction);

// This is the normal Function without Throttling
//Check the console for the difference between the calls of Normal Function and the Throttled Function
const normalFunc = () => {
  console.count("Normal Function");
};

window.addEventListener("resize", normalFunc);
