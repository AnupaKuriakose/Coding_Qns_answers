// 1. Merge Two Objects: 
/* 
     Write a function that takes two objects and returns a new object with combined key-value pairs. 
     If the same key exists in both objects, the value from the second object should overwrite the first. 
*/
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 2, c: 4, d: 5 };

function mergeObjects(obj1, obj2)
{
    return {...obj1, ...obj2}
}

console.log(mergeObjects(obj1, obj2));

//methiod 2
function mergeObjects1(obj1, obj2)
{
 return Object.assign({}, obj1, obj2)
}
console.log(mergeObjects1(obj1, obj2));