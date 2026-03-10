//Given a compressed string, return its original form.

// For example.

// uncompress('3(ab)') // 'ababab'
// uncompress('3(ab2(c))') // 'abccabccabcc'
function uncompress1(str) {
  // your code here
  let numstack = [];
  let charStack = [];
  let currentString = '';
  let currentNum = 0;

  for(let i=0; i<str.length; i++)
  {
    //test it is a number
    if(/[0-9]/.test(str[i]))
    {
     currentNum = (currentNum * 10) +parseInt(str[i]);//3, 2
    }
    else if(/[a-z]/i.test(str[i]))
    {
      //append char to current string
      currentString += str[i]; //curre ->abc
    }
    else if(str[i] === '('){
      numstack.push(currentNum);//numstack - 3, 2
      charStack.push(currentString);//charstack ->"", ab, 
      //reset
      currentNum = 0;
      currentString = "";
    }
    else if(str[i] === ')'){
      const repeatTimes = numstack.pop();//2
      const prevString = charStack.pop();//ab
      currentString = prevString + currentString.repeat(repeatTimes); //ababc
    }
  }
  return currentString;
}
console.log(uncompress1('3(ab2(c))')); // Output: 'abccabccabcc'