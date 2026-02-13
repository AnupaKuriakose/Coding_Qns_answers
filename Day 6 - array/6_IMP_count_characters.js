//find number of characters
const str2 = " this is javascript code and you have to find max character";
function findNumber(str)
{
    let map = {};
    for(let item of str)
    {
       map[item] = (map[item] || 0) + 1;
    }
    return map;
}
console.log(findNumber(str2))
// 3.   find maximum value from an object
let obj = { t: 4, h: 3, i: 4, s: 3, j: 1 };

function findMaxValue(obj) {
    let max = 0;
    for (let data in obj) {
        // console.log(obj[data])
        if (obj[data] > max) {
            max = obj[data];
        }
    }
    for (let data in obj) {
        if (obj[data] === max) {
            return data
        }
    }
}

// console.log(findMaxValue(obj))