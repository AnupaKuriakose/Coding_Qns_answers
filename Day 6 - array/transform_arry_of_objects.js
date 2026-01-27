//Transform Array of Objects: 

/*
     Given an array of objects, return an object where keys are derived from one of the object properties, 
     and values are arrays of objects.
     Example: Convert [{ id: 1, name: 'A' }, { id: 2, name: 'B' }] into { 1: { name: 'A' }, 2: { name: 'B' } }

*/


const arr = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];
let out = {};

for(let item of arr)
{
    const itemId = item.id;
    out[itemId] = { name: item.name};
}

console.log(out);
//way 2

function transformArrayOfObject1(arr) {
    return arr.reduce((acc, item) => {
        acc[item.id] = { name: item.name }
        return acc;
    }, {})
}