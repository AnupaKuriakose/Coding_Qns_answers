
function isPalindrome(str) //using for loop
{
    let rev ="";
    for(let i=str.length - 1; i>=0; i--)
    {
        rev += str[i].toLowerCase();
    }
   
 return rev === str ? "Palindrome" : "Not pali"
}
function isPalindromeRecursive(str) //using recursiom
{
    let cstr = str.toLowerCase();
    if(cstr.length <=1) return "Palindrome";
     if (cstr[0] !== cstr[cstr.length - 1]) return "Not pali";
     return isPalindromeRecursive(cstr.slice(1,-1));
 
}
console.log(isPalindromeRecursive("ama"));
console.log(isPalindrome("ama"));