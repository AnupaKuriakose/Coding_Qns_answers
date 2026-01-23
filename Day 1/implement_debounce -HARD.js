// debouncing in js
function debounce(func,delay) // 👉 func → the function you want to delay(here search)👉 delay → how long to wait (in ms) 
{
    let timeout; //closure variable(This variable:Lives inside debounce,Is remembered even after debounce finishes,Is shared across all calls to dSearch)
    return function(...args)//returning new function - This returned function is what gets assigned to dSearch
       {                     //...args (THIS is how "Hello" passes)
        clearTimeout(timeout); //👉 If a timer already exists:Cancel itThis prevents earlier calls from executing.This is why debounce works
        timeout = setTimeout(()=>{//Creating a new timer.This schedules a function to run after delay ms.But it does NOT run now.
            func.apply(this, args);//Calling the original function
        }, delay);
    }
}
function search(query) {
  console.log("searching for:", query);
}
const dSearch = debounce(search, 100);// Means:dSearch === function (...args) { ... }

//simulate typing with multiple calls to the debounced function
dSearch("Hello");// step 1: call here args = ["Hello"], Timer set for 100ms, waiting....
dSearch("Hello, "); // call 2 (before 100ms finishes) 
// clearTimeout(timeout) ❌ cancels previous timer,New timer created,args = ["Hello, "],Waiting again...
dSearch("Hello, World!"); //only this call should trigger after 100ms

//Previous timer cancelled again , New timer created , args = ["Hello, World!"] , Waiting...
//After 100ms of NO calls search("Hello, World!");
//✅ Only last call executes
//🧠 Why Earlier "Hello" is LOST
//Because:
//Each new call cancels the previous timer
//Only the latest args survive
// 🗣️ Interview Explanation (Say This)

// “The returned function captures arguments using rest parameters.
// Each call resets the timer, so only the last invocation executes after the delay.”
