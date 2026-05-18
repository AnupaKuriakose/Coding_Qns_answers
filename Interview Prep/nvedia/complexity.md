The simple way to think about complexity:



Time complexity = how many times does your code loop through data as input grows
Space complexity = how much extra memory does your code use as input grows
That's it. Two questions. Answer them and you have your complexity.

The notation — Big O:
Just means "in the worst case, how does this scale?"

Notation                          Meaning                                  Example
O(1)                            Constant — same speed always          Access array by index
O(n)                 Linear — loops once through data                 Single for loop
O(n²)              Quadratic — nested loops                     Loop inside a loop
O(n log n)            Log linear — sort then loop           Any sort algorithm
O(log n)             Logarithmic — halves each time            Binary search

How to calculate — just count your loops:
==========================================
One loop through n items = O(n)

for (let i = 0; i < array.length; i++) {
  // one operation
}
You touch each element once → O(n)
======================================
Loop inside a loop = O(n²)
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    // one operation
  }
}
For each of n elements you loop n times → n × n = O(n²)

========================================
The golden rules to remember:
---------------------------
For time:

Count loops — one loop = O(n), nested = O(n²)
Sort present = O(n log n) minimum
Biggest term wins — O(n² + n) = just O(n²)
Drop constants — O(2n) = just O(n)

For space:

No extra data structures = O(1)
Store n items in array/map/set = O(n)
Store m+n items = O(m+n)
Recursive calls = O(depth of recursion)

=============
Your cheat sheet for Tuesday — just remember:

Count loops → one loop = O(n), nested = O(n²)
Sort present = O(n log n)
Extra data structure = O(n) space
No extra data structure = O(1) space
Biggest term wins, drop constants
"We trade space for speed" = the magic phrase