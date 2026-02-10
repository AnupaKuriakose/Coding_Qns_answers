🟢 DAY 2 – Sliding Window (Fixed Size)
Pattern goal: Window never shrinks conditionally
Learn (10 min)

Fixed window = size k
One in → one out

Problems (pick 2)
Maximum Average Subarray I
Maximum Sum Subarray of Size K
Find All Averages of Subarrays (LC variant)

Key question:
What changes when the window slides?

🧠 Mental model:
“Window moves, size stays same”

🟢 DAY 3 – Sliding Window (Variable Size) 🔥 MOST IMPORTANT

Pattern goal: Expand + shrink

Learn (15 min)

Expand with right
Shrink with left when condition breaks

Problems (pick 2)
Longest Substring Without Repeating Characters
Minimum Size Subarray Sum
Max Consecutive Ones III

You MUST be able to explain:
Why inner while loop doesn’t make it O(n²)

🧠 Mental model:

“Each pointer moves forward only”

This same pattern appears in:
Longest increasing sequence
Max subarray sum (Kadane’s Algorithm)
Longest valid parentheses
Temperature streak problems

✅ How to Recognize Sliding Window in 5 Seconds

When reading a problem, ask:

✅ Signal 1: “Substring” or “Subarray”

If problem mentions:
substring
subarray
contiguous segment
continuous portion

👉 Sliding Window.

Example:
Longest substring without repeating characters

✅ Signal 2: Longest / Shortest

If question asks:
longest
shortest
maximum length
minimum length

👉 Sliding Window.

Example:
Smallest subarray with sum ≥ target
✅ Signal 3: Range Condition

If condition applies to a range:

sum ≤ k

at most k distinct

sum ≥ target

k replacements allowed

👉 Sliding Window.
✅ Signal 4: Continuous elements only

If elements must be next to each other, not random.

Example:

[1,2,3] valid
[1,3,5] invalid
==================
🎯 Sliding Window Formula (Memorize)

Most problems follow:

for (right pointer moves) {

  include new element

  while (window invalid) {
      move left pointer
  }

  update answer
}
============