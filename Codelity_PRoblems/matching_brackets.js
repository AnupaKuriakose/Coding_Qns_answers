

//"I use a stack and a hashmap — the map pairs each closing bracket 
// with its expected opening bracket. I iterate through — opening brackets get pushed to
//  the stack, closing brackets pop the stack and check for a match. 
// If the stack is empty at the end, all brackets were properly closed. O(n) time, O(n) space."
function areBracketsBalanced(s) {
    let stack = [];
    let map = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    for (let char of s) {
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else if (map[char]) {
            // Check if the closing brace matches the last opened one
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        }
    }

    // Return true only if all opened braces were closed
    return stack.length === 0;
}



// Example usage:
console.log(areBracketsBalanced("{{})(")); // Output: false
console.log(areBracketsBalanced("{[()]}")); // Output: true

//longest valid paranthesis - length of 
var longestValidParentheses = function(s) {
    let stack = [-1]; // Base index to handle the first valid pair
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i); // Push the index, not the character
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i); // New base for future valid substrings
            } else {
                // Length = Current Index - Index of last unmatched opening bracket
                maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
            }
        }
    }
    return maxLength;
};