// Given an array of strings strs, group the anagrams together. 
// You can return the answer in any order.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

function groupAnagrams(arr)
{
    let map = {};
    const sorted = arr.map(item => item.split("").sort().join(""));
    for(let item =0 ; item < sorted.length; item++ )
    {
        const key = sorted[item];
        if(map[key] === undefined) //if(!map[key])
        {
            map[key] = [];
        }
        map[key].push(arr[item])
    }
return Object.values(map);
}
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
//use Map
function groupAnagrams1(arr)
{
   let result = new Map();
   const sorted = arr.map(x=> x.split("").sort().join(""));
   for(let i =0; i< sorted.length; i++)
   {
    const key = sorted[i];
    if(!result.has(key))
    {
        result.set(key,[]);
    }
    result.get(key).push(arr[i]);
   }
   return Array.from(result.values())
}
console.log(groupAnagrams1(["eat","tea","tan","ate","nat","bat"]))

//IMplement group anagrams in angular
//import { from } from 'rxjs';
// import { groupBy, mergeMap, toArray, map } from 'rxjs/operators';

// function groupAnagrams(words: string[]) {
//   return from(words).pipe(
//     groupBy(word =>
//       word.split('').sort().join('') // anagram key
//     ),
//     mergeMap(group$ =>
//       group$.pipe(toArray())
//     ),
//     toArray()
//   );
// }

// groupAnagrams(words).subscribe(result => {
//   console.log(result);
// });