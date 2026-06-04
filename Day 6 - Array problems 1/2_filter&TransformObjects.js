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
//ffind maximum value from an object
let obj = { t: 4, h: 3, i: 4, s: 3, j: 1 };

function findMax(obj)
{
 let max =0 ;
 for(let item in obj)
 {
  if(obj[item] > max)
  {
    max = obj[item];
  }
 }
 return max;
}
console.log(findMax(obj))