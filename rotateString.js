//Write a JavaScript program to rotate the string 'w3resource' in right direction by
//periodically removing one letter from the end of the string and attaching it to the front.

function rotateString(str) {
  const t1 = setTimeOut(() => {
    str = str[str.length - 1] + str.substring(0, str.length - 1);
    console.log(str);
  }, 100);
}
rotateString("w3resource");
