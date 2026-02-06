🤔 What is “Two Pointers”?

Instead of using one finger to look at numbers…
👉 we use two fingers.

One finger = LEFT
One finger = RIGHT

They move to solve the problem faster.

🧠 Why do we need this?

Because checking every number with every other number is slow 😴

Two pointers help us:

Look at each number once

Save time

Use no extra memory

📦 Think of this example

You have a line of boxes:

[1, 1, 2, 2, 3]


The boxes are already sorted.

Your task:
👉 “Remove duplicates so each number appears only once.”

🟢 Rule #1 (IMPORTANT)

👉 Two pointers are mostly used when the array is SORTED

🧩 Example 1: Remove Duplicates (Step by step)
🧠 Idea

One pointer remembers the last unique number

The other pointer checks new numbers
🧠 BIG RULES TO REMEMBER (DAY 1)

1️⃣ Array sorted? → Think Two Pointers
2️⃣ One pointer = remember
3️⃣ One pointer = search
4️⃣ No pointer ever moves backward
⏱️ Time & Space (Interview Answer)

🕒 Time: O(n) → each number once
📦 Space: O(1) → no extra array
=================================================================================
🟢 TWO POINTER ARRAY PROBLEM LIST
==================================================================================
1️⃣ Slow-Fast (Same Direction)

Pattern: slow remembers good spots, fast scans every element
Used for: In-place filtering, removing, compressing

Classic Problems:

Remove Element (LeetCode 27)
Remove Duplicates from Sorted Array (LeetCode 26)
Move Zeroes (LeetCode 283)
Move all even/odd numbers to one side
Partition array by value
Sort Colors / Dutch National Flag (variation)

Key hints:

Slow only moves on “good number”

Fast always moves forward

O(n) time, O(1) space

Two pointer problems usually change only one thing:
the condition

Examples:

Problem	Condition
Move zeroes	!= 0
Move negatives	< 0
Move evens	%2 === 0
Remove element	!= val
==========================================
2️⃣ Left-Right (Opposite Ends)

Pattern: Left at start, Right at end, move towards each other
Used for: Pairs, sums, symmetry

Classic Problems:

Two Sum II – Input array is sorted (LeetCode 167)
Container With Most Water (LeetCode 11)
Valid Palindrome (LeetCode 125)
Squaring a sorted array (sorted squares, LeetCode 977)
Trapping Rain Water (variation, can use two pointers)

Key hints:
Decide which pointer to move based on condition
Often array is sorted

3️⃣ Partition / Swap Pointers

Pattern: Swap values to group them
Used for: Grouping / partitioning / rearranging

Classic Problems:
Sort Colors (LeetCode 75)
Move all negatives to left, positives to right
Dutch National Flag problem
Partition Array for QuickSort

Key hints:
Order inside each group may not matter
Often uses two or three pointers

4️⃣ Merge Pointers

Pattern: Two sorted arrays, merge using pointers
Used for: Merging in O(n) time

Classic Problems:

Merge Sorted Array (LeetCode 88)
Merge two sorted lists (array version)
Intersection of Two Arrays II (LeetCode 350)

Key hints:

Compare elements at both pointers

Increment pointer of smaller value

5️⃣ Sliding Window (Variable) → Two pointers form

Pattern: Window expands and shrinks with left/right
Used for: Contiguous subarray problems

Classic Problems:
Minimum Size Subarray Sum (LeetCode 209)
Longest Substring Without Repeating Characters (LeetCode 3)
Max Consecutive Ones III (LeetCode 1004)
Fruit Into Baskets (LeetCode 904)

Key hints:

Left and right define window

Move right to expand, left to shrink

6️⃣ Miscellaneous / Variations

Reverse Array / String
Palindrome checking
Max sum pair with condition
3Sum / 3Sum Closest (extension: use two pointers after sorting)
Container / Area problems

🧠 TWO POINTERS — FINAL SUMMARY
Pattern Type	Example
Slow–Fast	Move zeroes, remove element
Left–Right	Two sum, reverse, palindrome
Partition	Sort colors
Decision-based	Container with most water