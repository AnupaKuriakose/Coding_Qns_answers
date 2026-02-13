//find number of characters
const str2 = " this is javascript code and you have to find max character";
function findNumber(str)
{
    let map = {};
    for(let item of str)
    {
    if(item !== ' ')
       {map[item] = (map[item] || 0) + 1;}
    }
    return map;
}
console.log(findNumber(str2))