let personal = {
    name: 'Anu'
}
function printAge(age)
{
    console.log(`${this.name} is ${age} old`);
}

let newfn = printAge.bind(personal);
newfn(90);

//It return a function
Function.prototype.mybind = function(obj = {}, ...args1){

  if(typeof this!=="function")
  {
    throw new Error('not callable')
  }
  obj.fn = this;
  return new function(...args2){
    obj.fn(...args1, ...args2);
  }
}
let newfn1 = printAge.mybind(personal);
newfn1(100);

// The names args1 and args2 are just labels, but they represent two different times arguments are provided.

// Think of bind in 2 stages:

// ✅ Stage 1 — Arguments passed during bind
// let newfn = printAge.mybind(personal, 30);


// Here:

// personal → object to bind as this

// 30 → argument passed at bind time

// These go into:

// ...args1


// So:

// args1 = [30]


// 👉 These are called preset arguments
// 👉 Real bind also supports this.

// ✅ Stage 2 — Arguments passed during execution
// newfn(100);


// These are arguments given when the returned function runs.

// They go into:

// ...args2


// So:

// args2 = [100]

// ✅ Why we need both?

// Because real bind allows partial application.

// Example:

// function add(a,b,c){
//   console.log(a,b,c);
// }

// let fn = add.bind(null, 1, 2);
// fn(3);


// Output:

// 1 2 3


// Here:

// 1,2 → bind-time arguments (args1)

// 3 → call-time argument (args2)

// ✅ How your polyfill combines them
// obj.fn(...args1, ...args2);


// It merges both lists:

// [...args1, ...args2]


// So:

// [30, 100]

// ✅ Simple analogy

// Think of ordering food:

// args1 = items you pre-order online

// args2 = items you add when picking up

// Final order = both together 🍔🍟🥤
