/*
   Given an array of objects, group them by a specified property.
   Example: Group students by city, so 
   [{name: 'A', age: 20, city: 'BLR'}, {name: 'B', age: 20, city: 'DEL'}, {name: 'C', age: 21, city: 'BLR'}] 
   
   becomes 
   { "BLR": [{name: 'A', age: 20}, {name: 'C', age: 21}], "DEL": [{name: 'B', age: 20}] }.

*/

function groupByProperty(arr, property) {
  let output = {};
  for (let item of arr) {
     if(!output[item[property]])
    {
        output[item[property]] = [];
    }
    const { [property]:_, ...rest } = item; //remove city from obj. Objj destructuring
    output[item[property]].push(rest);
  }

  return output;
}
console.log(
  groupByProperty(
    [
      { name: "A", age: 20, city: "BLR" },
      { name: "B", age: 20, city: "DEL" },
      { name: "C", age: 21, city: "BLR" },
    ],
    "city",
  ),
);
o//OR
function groupBy(arr, key) {
  return arr.reduce((result, item) => {
    const groupKey = item[key];

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    // remove the grouping key from the object
    const { [key]: _, ...rest } = item;
    result[groupKey].push(rest);

    return result;
  }, {});
}