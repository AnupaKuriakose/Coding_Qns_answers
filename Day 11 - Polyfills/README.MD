Array =- map, filter, reduce
Array -> includes, foreach

call, apply, bind

promise- promise, .all,....

********************************
Polyfills that Return a New Array 
-map, filter, flat, concat

map(): Creates a new array with the results of a function applied to every element.
filter(): Creates a new array with all elements that pass a specific test.
flat(): Creates a new array with sub-array elements concatenated into it up to a specified depth.
concat(): Merges arrays and returns a new combined array. 
****************************************************************

Polyfills that Do Not Return a New Array 
forEach(), reduce, fill, push, unshift, some , every
forEach(): Executes a provided function for each element but does not return a value (it returns undefined). It's used for side effects.
reduce(): Applies a function against an accumulator and each element to reduce it to a single value, which it returns.
fill(): Modifies the original array with a static value within a specified range and returns the modified original array.
push(), unshift(): Add elements to the array and return the new length of the array, mutating the original in the process.
some(), every(): Test elements in the array and return a boolean (true or false). 
*************************************************************
https://karandesai.hashnode.dev/polyfills-of-array-methods-in-javascript