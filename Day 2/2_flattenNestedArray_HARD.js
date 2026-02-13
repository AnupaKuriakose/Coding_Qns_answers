//Problem: Flatten a nested array - [1, [2, [3, 4], 5], 6] out: [1, 2, 3, 4, 5, 6]
function flatten(arr)
{
    let result = [];
    for(let i of arr)
    {
        if(Array.isArray(i))
            result = result.concat(flatten(i));//This uses recursion to handle arbitrary depth.
        else
            result.push(i)
    }
return result;
}
console.log(flatten([1, [2, [3, 4], 5], 6] ))//[1, 2, 3, 4, 5, 6]
//Another way - Using Array.prototype.flat() (Modern JS) const flat = arr.flat(Infinity);
// 3️⃣ Iterative Using Stack (NO recursion)
function flattenArray(arr) {
  const stack = [...arr];
  const result = [];

  while (stack.length) {
    const item = stack.pop();

    if (Array.isArray(item)) {
      stack.push(...item);
    } else {
      result.push(item);
    }
  }

  return result.reverse();
}