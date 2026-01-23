//Problem: First non-repeating character in a string.
//eg: abcdedbba ans : c

function nonRepeating(str)
{
const map = {};
for(const i of str) map[i] = (map[i] || 0) + 1;
for(const v of str) {
    if(map[v] === 1)  return v ;
}
return 'No elemrnt found';
}
console.log(nonRepeating('abcdedbba'));
console.log(nonRepeating('aabbcc'));

//display all non repeating
