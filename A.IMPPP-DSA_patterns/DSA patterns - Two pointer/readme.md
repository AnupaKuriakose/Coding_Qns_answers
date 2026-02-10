🟢 1. Two Pointers

Used when:
Sorted array
Opposite ends
In-place modifications

Examples:
Remove duplicates
Move zeroes
2 Sum (sorted)
Mental model:
👉 “Can I shrink the problem from both ends?”

🟢 2. Sliding Window (MOST IMPORTANT)

Used when:
Subarray
Contiguous elements
Max / min / count

Examples:
Max sum subarray
Longest substring
Subarray sum ≤ K

Mental model:
👉 “Can I expand and shrink a window?”
====================================================================
5️⃣ Sliding Window Template (memorize this)
====================================================================
Most array problems reduce to this 👇

let left = 0;
let sum = 0;

for (let right = 0; right < nums.length; right++) {
  sum += nums[right];

  while (sum > k) {
    sum -= nums[left];
    left++;
  }

  // update answer here
}


👉 If you master why this works, 30% of array problems disappear.
===================================
🟢 3. Prefix Sum
Used when:
Range sum queries
“Sum between i and j”
Subarray sum = K

Examples:
Subarray Sum Equals K
Range Sum Query

Mental model:
👉 “Can I pre-compute past work?”

🟢 4. Hashing + Array
Used when:
Frequency
Seen before
Index mapping

Examples:

Two Sum (unsorted)
Contains Duplicate
Majority element
Mental model:
👉 “Do I need to remember something I saw earlier?”

🟢 5. Sorting + Greedy

Used when:
Min / max swaps
Intervals
Rearrangement

Examples:
Merge intervals
Minimum moves

3️⃣ Pattern-first approach (this is the secret)

Before touching code, ask these 5 questions:
Is it subarray / contiguous? → Sliding window / Prefix sum
Is it sorted? → Two pointers
Need frequency / lookup? → HashMap
Need range sum? → Prefix sum
Need min/max optimally? → Greedy

👉 If you can answer this, coding is mechanical.

===============================
7️⃣ Recommended LeetCode list (don’t overdo)

Start with these ONLY:

Sliding Window:
Maximum Subarray
Longest Substring Without Repeating Characters
Minimum Size Subarray Sum

Two Pointers:
Remove Duplicates from Sorted Array
Move Zeroes

Prefix Sum:
Subarray Sum Equals K
===========================