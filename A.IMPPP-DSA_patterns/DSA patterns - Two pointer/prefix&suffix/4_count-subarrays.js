// Problem: Count subarrays with sum = k.
// Pattern: Prefix sum + hashmap.
// Why: HashMap optimization from O(n²) → O(n) shows senior-level thinking.
//The Question
//Given an array of integers (e.g., [1, 1, 1]) and an integer k (e.g., 2), 
// find the total number of continuous subarrays whose sum equals k. 
// In this example, the answer is 2 (the first two 1s, and the last two 1s). 

// ..logic
// Instead of checking every possible start and end point, we track the running total (prefix sum) as we walk through the array. 
// If our current sum is S, we are looking for some previous sum P such that:
// S-P =k
// This means: P = S-k
//We use a HashMapto store how many times we've seen each prefix sum. 
// If S - k exists in our map, it means there are that many subarrays ending at our current position that sum to k


function subarraySum(nums, k) {
    let count = 0;
    let sum = 0;
    const map = new Map();

    // Base case: a prefix sum of 0 has been seen once sum,frequency
    map.set(0, 1);

    for (let num of nums) {
        sum += num; // Update running prefix sum

        // If (currentSum - k) exists, we've found subarrays summing to k
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }

        // Store current sum in map
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
}

//what if we need to find length.the longest subarray with sum k instead of the count
//The Logic Change
// Count Version: Map stores { sum: frequency }.
// Longest Version: Map stores { sum: first_index_seen }

 function longestSubarraySumK(nums, k) {
    let sum = 0;
    let maxLen = 0;
    const map = new Map();

    // Base case: sum 0 happened at index -1 (before the array starts)
    map.set(0, -1);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        // If (sum - k) exists, we found a subarray!
        if (map.has(sum - k)) {
            // Distance = current index - first time we saw the needed prefix
            let currentLen = i - map.get(sum - k);
            maxLen = Math.max(maxLen, currentLen);
        }

        // ONLY add the sum to the map if it's NOT already there.
        // This keeps the index as far left as possible.
        if (!map.has(sum)) {
            map.set(sum, i);
        }
    }

    return maxLen;
}
//nums = [1, 2, -3, 3] and k = 3.
//Max Length = 4.

//At index 1, sum = 3. sum - k = 0. Map says 0 was at index -1.
// Length = 1 - (-1) = 2. (Subarray: [1, 2])
// At index 3, sum = 3 again! But we don't update the map; we keep sum 3 at index 1.
// sum - k = 0. Length = 3 - (-1) = 4. (Subarray: [1, 2, -3, 3])
