//Method 1: Using Sort (Easiest and most common)
const isAnagramSort = (str1, str2) => {
  // Helper function to normalize and sort a string
  const normalizeAndSort = (str) => {
    return str
      .toLowerCase() // Convert to lowercase for case-insensitivity
      .replace(/[^a-z0-9]/g, '') // Remove non-alphanumeric characters
      .split('') // Split into a character array
      .sort() // Sort the array alphabetically
      .join(''); // Join back into a string
  };

  const sortedStr1 = normalizeAndSort(str1);
  const sortedStr2 = normalizeAndSort(str2);

  return sortedStr1 === sortedStr2; // Compare the normalized strings
};

// Examples:
console.log(isAnagramSort('listen', 'silent')); // true
console.log(isAnagramSort('hello', 'world')); // false
console.log(isAnagramSort('A gentleman', 'elegant man')); // true

//Method 2: Using a Character Frequency Map (More efficient for very long strings)

function isAnagramFrequency(str1, str2) {
  // If lengths don't match (after optional normalization), they aren't anagrams
  if (str1.length !== str2.length) return false;

  const count = {};

  // Increment for first string
  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }

  // Decrement for second string
  for (let char of str2) {
    if (!count[char]) return false; // Character missing or extra
    count[char]--;
  }

  return true;
}

// Examples:
console.log(isAnagramFrequency('listen', 'silent')); // true
console.log(isAnagramFrequency('hello', 'world')); // false
console.log(isAnagramFrequency('rail safety', 'fairy tales')); // true
