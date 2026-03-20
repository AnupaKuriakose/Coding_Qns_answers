// Find the length of the longest substring with no repeating characters.

// Example 1
// Input: "abcabcbb"
// Output: 3


// Longest substring:

// "abc"
function lengthOfLongestSubstringWithContent(s) {
    let set = new Set();
    let left = 0;
    let maxLen = 0;
    let longestSubstr = "";

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        
        // Calculate current length
        let currentLen = right - left + 1;

        // If the current substring is longer than the maximum found so far,
        // update both maxLen and longestSubstr
        if (currentLen > maxLen) {
            maxLen = currentLen;
            longestSubstr = s.substring(left, right + 1);
        }
    }
    // Return the content of the longest substring
    return {
        length: maxLen,
        substring: longestSubstr
    }; 
}

// Example usage:
const input = "abcabcbb";
const result = lengthOfLongestSubstringWithContent(input);
console.log(result); // Output: { length: 3, substring: 'abc' }
