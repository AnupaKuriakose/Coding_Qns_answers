//Retrun all combinations
const powerset = (arr) =>
  arr.reduce((a, x) => [...a, ...a.map((y) => [...y, x])], [[]]);

console.log(powerset([1, 2])); //[ [], [ 1 ], [ 2 ], [ 1, 2 ] ]

//*********************************************************888 */

// Retrun the rray items from mentioned indices
const pull_at_Index = (arr, indices) => {
  return indices.map((i) => arr[i]);
};

let arra1 = ["a", "b", "c", "d", "e", "f"]; //[b, d]
console.log(pull_at_Index(arra1, [1, 3]));
let arra2 = [1, 2, 3, 4, 5, 6, 7]; //[5]
console.log(pull_at_Index(arra2, [4]));

/********************* */
//convert the length to bytes
//Write a JavaScript program to convert the length of a given string in bytes.
const byte_Size = str => new Blob([str]).size;
console.log(byte_Size('123456'));  
console.log(byte_Size('Hello World'));  
console.log(byte_Size('Ã¢')); 
/************************************8888 */
//Replace the names of multiple object keys with the values provided
const renameKey = (keyobj, obj) =>{
  let result ={};
  for(let item in obj){
      result[keyobj[item]||item] = obj[item];
  }
  return result;
  
}


let obj = { name: 'Bobo', job: 'Programmer', shoeSize: 100 };
console.log(renameKey({ name: 'firstName', job: 'Actor' }, obj)); //{firstName: "Bobo", Actor: "Programmer", shoeSize: 100}