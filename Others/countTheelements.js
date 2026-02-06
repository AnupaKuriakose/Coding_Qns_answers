//Given a string count occurance of each character and append it with string
//input- "abcd" out-a1b1c1d1
//aabbcrdjdk out- a2b2c1r1d1j1d1k1

function cntConsecutiveElements(array) {
    let counter = 1;
    let result = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
       counter++;
     } else {
       result += array[i] + counter;
       counter = 1;
     }
   }
    return result;
  }
  
  console.log(cntConsecutiveElements("aabbcrdjdk"))

  //OR
  function cntConsecutiveElements(str) {
    let map={};
    let result = '';
    for(let i=0; i<str.length; i++)
    {
        if(!map[str[i]]) {map[str[i]] = 1;}
        else{map[str[i]]++;}
    }
    console.log(map);
    for(var i in map)
    {
        result += i +map[i];
    }
    return result;
  }
  
  console.log(cntConsecutiveElements("aabbcrdjdk"))