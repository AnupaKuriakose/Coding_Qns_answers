//Remove minimum number of brackets from string
//eg: input - a(bc)de(f -> out : a(bc)def
//ab)c -> abc, abc(u(f) -> abcu(f)

function formattedString(str) {
  let strArr = str.split("");
  let stack = [];
  for (let i = 0; i < strArr.length; i++) {
    let val = strArr[i];
    if (val === "(") {
      stack.push(i);
    } else if (val === ")") {
      if (stack.length > 0) {
        stack.pop();
      } else {
        strArr[i] = ""; //handle cases where ) appears first
      }
    }
  }

  while (stack.length > 0) {
    let index = stack.pop();
    strArr[index] = "";
  }

  return strArr.join("");
}
console.log(formattedString("a(bc)de(f"));