//Remove duplicates from array

function removeDuplicates(arr)
{
    return [...new Set(arr)]; //Set stores only unique values, so spreading it removes duplicates.”
}
console.log(removeDuplicates([1,2,2,3,5]))
//without set - native Js - 
//Other 2 solutions
//Solution 1
function removeDuplicates1(arr)
{
    const map = new Map();
    const result = [];
    for(let item of arr)
    {
        if(!map.has(item))
        {
            map.set(item, true);
            result.push(item);
        }
    }
      return result;
}
console.log(removeDuplicates1([1,2,2,3,5]))
function removeDuplicates2(arr)
{
    let result = [];
    for(let i=0; i<arr.length; i++)
    {
        if(!result.includes(arr[i]))
        {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(removeDuplicates2([1,2,2,3,5]))