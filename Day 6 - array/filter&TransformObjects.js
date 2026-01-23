// //Input: [
//   { name: 'A', age: 30 },
//   { name: 'B', age: 20 }
// ]
// Output: ['A']
// (Names of people age > 25)
//Method 1 - use one array iteration
const input = [
  { name: 'A', age: 30 },
  { name: 'B', age: 20 }
];

let output = input.reduce((acc, item) => {
  if(item.age > 25) acc.push(item.name);
return acc;
}, []);
console.log(output);

//Method 2 - use fileter and map
const result = arr.filter(i=> i >25)
.map(x=> x.name);
console.log('result', result);