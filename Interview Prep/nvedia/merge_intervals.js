//Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6]. and return an array of the non-overlapping intervals that cover all the intervals in the input.
// Final algorithm (interview-ready)
// Sort intervals by start
// Initialize result with first interval
// Loop through intervals:
// If overlap → merge (update end)
// Else → push new interval
// 🧠 9. How YOU should explain in interview

// Say something like:

// “First I sort intervals by start time so overlapping intervals come together.
// Then I iterate and compare with the last merged interval.
// If they overlap, I merge by updating the end.
// Otherwise, I add a new interval.”
// 🔥 Pattern Recognition (SUPER IMPORTANT)

// Whenever you see:

// intervals
// schedules
// time ranges
// overlapping ranges

// 👉 Think immediately:

// “Sort + compare with previous + merge or count”

// Time: Sort dominates — O(n log n). 
// The loop after is just O(n) which is smaller so we ignore it. Biggest term wins.
// Space: You create a result array that stores up to n intervals → O(n)

// //followups
// Merge Intervals follow-ups:
// "What is the time complexity?" — O(n log n) because of sorting
// "What if the intervals are already sorted?" — skip the sort, O(n)
// "How would you find if any two intervals overlap?" — same logic, stop as soon as you find one
// "Insert a new interval into a sorted list" — LeetCode #57, same pattern
// "I sort by start time first, then iterate once. For each interval I check 
// if it overlaps with the last one in my result — if not I push it, if yes
//  I extend the end using Math.max. O(n log n) time due to sorting, O(n) space for the result."
// //
function mergeIntervals(intervals)
{
    let result = [];
  //sort the intervals by first element
  intervals.sort((a,b) => a[0] - b[0]); // sorting = O(n log n)
 
  for(let interval of intervals) // one loop = O(n)
  {
    //check if result arry is empty || current interval first elemnet > result array last element - not merging interval
    //else current.start < previous.end - its a merging interval

    if(result.length == 0 || interval[0] > result[result.length - 1][1])
    {
        result.push(interval);
    }
    else
    {
        if(interval[0] <= result[result.length -1][1])
        {
            result[result.length - 1][1] = Math.max(
                result[result.length -1][1],
                interval[1]
            )
        }
    }
  }
  return result;
}
console.log(mergeIntervals([[8,10],[1,3],[2,6],[15,18]]))

//"How would you find if any two intervals overlap

// Same logic but stop early:
function hasOverlap(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= intervals[i-1][1]) {
      return true; // found overlap, stop immediately
    }
  }
  return false;
}
// "Sort first, then check if next interval's start is less than or equal to previous interval's end.
//  If yes, overlap found — return true immediately. O(n log n) time."