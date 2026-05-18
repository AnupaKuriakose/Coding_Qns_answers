//inser a character at a given position in a str
//

const insertChar = (str, pos, char) => {

    let res = "";
    for (let i = 0; i < str.length; i++) {
       if(i=== pos)
       {
        res+= char;
       }
       else
       {
        res += str[i];
       }
    }
  // if pos is beyound length append at end
  if(pos > str.length)
  {
    res +=char;
  }
  return res;
}
console.log(insertChar('text', 1, 'y'))