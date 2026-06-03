//Problem Statement: Given two strings, check if two strings are anagrams of each other or not.
//solution 1 : with O(N log n)
function isAnagram(s1, s2) {
    if (s1.length !== s2.length) return false;
    const sorted1 = s1.split('').sort().join('');
    const sorted2 = s2.split('').sort().join('');

    if (sortedStr1 === sortedStr2) {
        return true;  // Strings are anagrams if sorted versions are equal
    }

    return false;  // Strings are not anagrams if sorted versions diff
}
console.log(isAnagram('CAT', 'ACT'));

//solution 2:(optimal;)
function isAnagram(s1, s2) {
    if (s1.length !== s2.length) return false;
    const charCounts = {};
    // Count character frequencies in the first string
    for (const char of s1) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }

    // Decrement frequencies using the second string

    for (const char of s2) {
        if (!charCounts[char]) { return false; }
        charCounts[char]--;
    }
    return true;
}
console.log(isAnagram('CAT', 'ACT'));

// First, check if the lengths of both strings are equal. If not, return false immediately as they cannot be anagrams.
// Initialize a frequency array of size 26 (for all uppercase English letters) and set all elements to 0.
// Traverse the first string and increment the frequency of each character.
// Traverse the second string and decrement the frequency of each character.
// Finally, check if all elements in the frequency array are zero. If any element is not zero, return false as the characters do not match in frequency.
// If all frequencies are zero, the strings are anagrams and the function returns true.