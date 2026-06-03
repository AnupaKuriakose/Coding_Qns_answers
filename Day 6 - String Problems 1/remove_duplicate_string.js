function removeDuplicates(str) {
  // [...new Set(str)] creates an array of unique characters
  return [...new Set(str)].join('');
}

console.log(removeDuplicates("programming")); // Output: "progamin"

//Method 2: The Loop Way (Preserving Order)
function removeDuplicates(str) {
  let seen = {};
  let result = "";

  for (let char of str) {
    if (!seen[char]) {
      result += char;   // Add to result string
      seen[char] = true; // Mark as seen
    }
  }

  return result;
}

console.log(removeDuplicates("google")); // Output: "gole"



//using regex find consecutive duplicates
function removeConsecutive(str) {
  // Matches any character (.) followed by itself \1 one or more times +
  return str.replace(/(.)\1+/g, '$1');
}

console.log(removeConsecutive("aaabbc")); // Output: "abc"
// Goal 	Method	Result
// Remove only characters touching each other	str.replace(/(.)\1+/g, '$1')	"ababbcbd"
// Remove every duplicate in the whole string	[...new Set(str)].join('')	"abcd"