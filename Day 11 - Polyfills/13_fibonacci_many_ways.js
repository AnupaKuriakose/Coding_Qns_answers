//Basic 
//This recalculates values many times.
function fibonacci(n) {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6)); // 8

//MEMOIZATION
//Recursive Fibonacci with Memoization (Interview Answer)
function fibonacci(n, memo = {}) {

  if (n in memo) {
    return memo[n];
  }

  if (n <= 1) {
    return n;
  }

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);

  return memo[n];
}
console.log(fibonacci(10));
//Method 3
// Fibonacci with Closure Memoization (Very common interview trick)
// Instead of passing memo every time, we hide it inside a closure.
//I used a closure so the memo object persists across function calls without exposing it globally

Code
function createFibonacci() {
  const memo = {};

  function fib(n) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;

    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
  }

  return fib;
}

const fibonacci = createFibonacci();

console.log(fibonacci(10)); // 55
console.log(fibonacci(11)); // 89 (uses cached values)

//Method 4
// 2️⃣ Fibonacci using Dynamic Programming (Tabulation)

// Instead of recursion, we build the answer bottom-up.


function fibonacci(n) {
  if (n <= 1) return n;

  const dp = [0, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

console.log(fibonacci(10)); // 55
// Complexity

// Time

// O(n)

// Space

// O(n)
// Interview explanation
// "This avoids recursion stack and computes Fibonacci iteratively using tabulation."

// 3️⃣ Fibonacci with Constant Space Optimization

// We don't need the entire array.
// We only need previous two numbers.

function fibonacci(n) {
  if (n <= 1) return n;

  let prev1 = 0;
  let prev2 = 1;

  for (let i = 2; i <= n; i++) {
    let current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }

  return prev2;
}

console.log(fibonacci(10)); // 55
// //Time

// O(n)

// Space

// O(1)
// Senior Interview Twist They Ask

// They may ask:

// Print Fibonacci until it reaches 1000

// or

// Return Fibonacci sequence up to n

//Example:

function fibonacciSequence(n) {
  const result = [0, 1];

  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
}

console.log(fibonacciSequence(7));
// [0,1,1,2,3,5,8]