1. The "Buzzword" Test
Look for these specific phrases in a problem description to instantly know which type it is: 

Fixed Window:
 "Find the [max/min/avg] of all subarrays of size K" or "in every window of length 3".

Variable Window: 
"Find the longest/shortest substring that..." or "Find the minimum subarray with a sum 
 X".

 2. The "Subarray" vs. "Subsequence" Rule
Contiguous = Window: Sliding window only works if the problem asks for contiguous elements (items right next to each other).
If the problem allows you to skip elements (non-contiguous), it is likely a Dynamic Programming or Greedy problem instead. 


3. Mental Mnemonics for the Formula
You can remember the variable window logic with the "Expand-Shrink-Record" cycle: 

Expand: Move the right pointer to "eat" a new element.
Shrink: While the condition is broken (e.g., sum too high, too many repeats), move the left pointer to "spit out" elements.
Record: Once the window is valid, update your max or min result. 

4. Sliding Window vs. Two Pointers 
Beginners often confuse these. Use this simple distinction: 
Sliding Window: You care about every element inside the window (e.g., "What is the total sum of these 3 numbers?").
Two Pointers: You usually only care about the two values the pointers are touching (e.g., "Do these two numbers add up to 10?").

****Mental Shortcuts****
Contiguous is King: If the problem asks for a "subarray" or "substring," it’s a window problem.
Two-Pointer state: Always use a Map or Frequency Array if the problem involves "distinct characters" or "anagrams".

LEETCODE problems=
=====================
Fixed-Size Window Problems
===========================
The window size is given and remains constant. You maintain it by adding one new element and removing one old element as you slide. 

1.Maximum Average Subarray I (LC 643 - Easy)
2.Maximum Number of Vowels in a Substring of Given Length (LC 1456 - Medium)
3.Sliding Window Maximum (LC 239 - Hard)
4.Permutation in String (LC 567 - Medium)
5.Find All Anagrams in a String (LC 438 - Medium)
6.Maximum Sum of Distinct Subarrays With Length K (LC 2461 - Medium) 
7.Given array and integer k, find max sum of any contiguous subarray of size k.

COmmon pattern:
============
Instead of recalculating whole sum:
Calculate first window sum
Then:
Subtract element going out
Add element coming in
That’s it.

Mental Template
================
1. Build first window
2. Loop from k → n
3. Subtract left
4. Add right
5. Update result

====================================================
REMEMBER this:::

let sum = 0; k= window size 
//build first window
for (let right = 0; right < k; right++) {
  //get first window sum
}
//loop from k to end of array - slide the window
// add new element from right
 //remove element leaving window from left
 //update result

  for (let right = k; right < nums.length; right++) {
    windowSum += nums[right];
    windowSum -= nums[right - k];

    maxSum = Math.max(maxSum, windowSum);
  }

When window moves:

ADD  → nums[right]
REMOVE → nums[right - k]

That’s the one rule that solves most fixed window problems.
=======================================================
Another rule:*****
1))))When you see Words like::
sum
average
count
maximum sum

➡️ Use number variable

2)))Words like
distinct
unique
frequency
repeating

➡️ Use Map / Set

3))) If the problem asks for a result from each window (like “first negative in every window of size k”)
➡️ Use sliding window
Maintain the window of size k using start and end pointers.

Maintain a data structure inside the window if needed (queue, map, sum, etc.) to efficiently get result per window.

Slide the window by incrementing start and end after processing each window.
Tip:
Fixed-size window → slide when window reaches size k
Dynamic window → expand/shrink based on condition
========================================================

Variable-Size Window Problems
========================================
The window expands or shrinks dynamically based on a specific condition, such as reaching a target sum or a number of distinct characters. 

1.Longest Substring Without Repeating Characters (LC 3 - Medium)
2.Minimum Size Subarray Sum (LC 209 - Medium)
3.Longest Repeating Character Replacement (LC 424 - Medium)
4.Fruit Into Baskets (LC 904 - Medium)
5.Max Consecutive Ones III (LC 1004 - Medium)
6.Minimum Window Substring (LC 76 - Hard)
7.Subarrays with K Different Integers (LC 992 - Hard)

Fixed window = size always k
Variable window = size changes dynamically

If question says:
Longest substring
Without repeating
At most K distinct
Smallest window

then it is :
👉 Variable sliding window
👉 Two pointers
👉 Expand right
👉 Shrink left when invalid

We maintain:
left pointer
right pointer
Set (or Map) to track characters

Process:
Expand right
If duplicate found → move left until valid again
Track max length
=====================================================
REMEMBER this:::

let left = 0;

for (let right = 0; right < arr.length; right++) {
  
  // Expand window

  while (window is invalid) {
    // Shrink window
    left++;
  }

  // Update result
}
=======================================================

Longest substring with no repeating characters → Variable
Maximum sum of 3 consecutive elements → Fixed
Count substrings of length 5 → Fixed
Smallest subarray with sum ≥ target → Variable
Maximum distinct elements in subarray of size k → Fixed
Find average of every 5 consecutive elements → Fixed
Longest substring without repeating characters → Variable
Count substrings of length 3 having 2 vowels → Fixed
Maximum sum of any 2 consecutive numbers → Fixed


