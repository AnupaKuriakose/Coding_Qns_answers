//Write a JavaScript program to filter out the specified values from a specified array.
// Return the original array without the filtered values.

const pull = (arr1, ...args) => {
  return arr1.filter((e) => !args.includes(e));
};

let arra1 = ["a", "b", "c", "a", "b", "c"];
console.log(pull(arra1, "a", "c")); //[b,b]
let arra2 = ["a", "b", "c", "a", "b", "c"];
console.log(pull(arra2, "b")); //[a,c,a,c]
