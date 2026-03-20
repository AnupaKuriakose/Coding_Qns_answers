const isPalindrome = (s) => {
    // Optional: Pre-process to remove non-alphanumeric and lowercase
    // This uses extra space. For O(1) space, skip non-alphanumeric inside the loop.
    const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    let left = 0;
    let right = cleanStr.length - 1;

    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false

//Check if string can become palindrome by removing at most one character.
//explanaTION BELW
function validPalindrome(s) {

  function isPalindrome(left, right) {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        isPalindrome(left + 1, right) ||
        isPalindrome(left, right - 1)
      );
    }

    left++;
    right--;
  }

  return true;
}
console.log(validPalindrome("abca")); 
// true

console.log(validPalindrome("racecar"));
// true

console.log(validPalindrome("abcdef"));
// false

// 1. The High-Level Logic
// "The goal is to check if a string is a palindrome, 
// allowing for at most one character deletion. 
// I use two pointers—one at the start and one at the end—moving toward the center." 
//"As long as the characters at left and right match, I just keep shrinking the window."
//The moment I hit a mismatch, I have two options to see if the string can still be a palindrome:
//Skip the left character and check the remaining inner string
//Skip the right character and check the remaining inner string."
//The Helper Function: "I use isPalindrome to validate those two sub-options. If either one returns true, the whole function returns true."