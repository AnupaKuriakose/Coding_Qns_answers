//Find the largest integer K>0 such that both K and - k exist in an array.

/*
// Example usage:
// console.log(solution([3, 2, -2, 5, -3])); // Output: 3
// console.log(solution([1, 1, 2, -1, 2, -1])); // Output: 1
// console.log(solution([1, 2, 3, -4])); // Output: 0 */

let array = [1,2,3,-4]
let set = new Set(array);
let max = 0;

for(let i=0; i<array.length; i++)
{
  let num = array[i];
  if(set.has(-num))
  {
    max= Math.max(max, num);
  }

}
console.log(max)