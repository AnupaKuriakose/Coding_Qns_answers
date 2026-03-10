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