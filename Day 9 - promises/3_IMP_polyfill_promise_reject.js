/**
 * 
 * Promise.reject(reason)

Purpose:

Returns a promise that is immediately rejected with the given reason (error or value).

Syntax:

Promise.reject(reason)


Examples:

const p = Promise.reject("Something went wrong");

p.catch(err => console.log(err)); // Output: Something went wrong

// Can also be an Error object
const p2 = Promise.reject(new Error("Network failed"));
p2.catch(err => console.log(err.message)); // Output: Network failed


Important note in Node.js / modern JS:

If you create a rejected promise and don’t handle it, Node.js may print a warning:

Promise.reject("Oops"); 
// ⚠ UnhandledPromiseRejectionWarning


So always handle it with .catch or try { await } catch {}
 */

Promise.myReject = function (reason) {
  return new Promise((_, reject) => reject(reason));
};


//cal;l it 
Promise.myReject("Something went wrong")
  .catch(console.log); // Something went wrong

Promise.myReject(new Error("Network failed"))
  .catch(err => console.log(err.message)); // Network failed