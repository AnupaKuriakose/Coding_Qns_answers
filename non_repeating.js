//find non repeating character from the string 

function result(str) {
    let map = {};
    for(let i=0; i<str.length;i++)
    {
      if(map[str[i]]) map[str[i]]++;
      else map[str[i]] = 1;
    }
  for(var v in map)
  {
    
    if(map[v] == 1)
    { 
      return v;
    }
  }
  
  }
  console.log(result("ababcd"));
  console.log(result("aba"));
  console.log(result("aba"));