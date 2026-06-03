//Remove Outermost Parentheses

// //Example 1:
// Input:
//  s = "((()))"
// Output:
//  "(())"
// Explanation:
//  The input string is a single primitive: "((()))".  
// Removing the outermost layer yields: "(())".

// Example 2:
// Input:
//  s = "()(()())(())"
// Output:
//  "(()())()"
// Explanation:
//  Primitive decomposition: "()" + "(()())" + "(())"  
// After removing outermost parentheses: "" + "()()" + "()"
// Final result: "(()())()".

function removeOuter(s) {
    let level = 0;
    let output = "";
    for (let char of s) {
        // If we encounter '(', increase the level
        if (char === '(') {
            if (level > 0) { output += char; }
            // Increase the nesting level for '('
            level++;

        }
        // If we encounter ')', decrease the level
        else if (char === ')') {
            // Decrease the nesting level for ')'
            level--;
            // If we're inside a primitive, add ')' to result
            if (level > 0) { output += char; }
        }

    }
     // Return the final result after removing the outer parentheses
        return result;
}

// // Algorithm / Intuition
// // Initialize an empty result string to store the processed output
// // Initialize a counter (level) to track the depth of parentheses
// // Traverse through the string character by character:
// // If the current character is '(', increment the level counter. If the level is greater than 1 (indicating we're inside a valid primitive), add '(' to the result string
// // If the current character is ')', decrement the level counter. If the level is greater than 0 (indicating we're still inside a valid primitive), add ')' to the result string
// // After the entire string has been traversed, return the result string