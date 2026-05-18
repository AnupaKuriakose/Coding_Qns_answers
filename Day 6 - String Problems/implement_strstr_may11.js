//Implementing the strstr function in JavaScript usually means finding the first occurrence of a substring (needle) within a string (haystack). 
//If found, it returns the index; otherwise, it returns -1.

const strstr =(longstr, searchstr) => {
    let m = longstr.length;
    let n = searchstr.length;
    let flag = 0;
    for (let i = 0; i < m; i++) {
      flag = 0;
      for (let j = 0; j < n; j++) {
        if(searchstr[j] !== longstr[i+j])
        {
            flag = 1;
            break;
        }
        
      }
         if(flag === 0)
         return i;
    }
   
}

console.log(strstr('elephentdrive', 'ent')) //ans: 5