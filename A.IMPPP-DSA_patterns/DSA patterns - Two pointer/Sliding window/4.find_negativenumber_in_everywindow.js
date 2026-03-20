function firstNegativeInWindow(arr, k) {
  const n = arr.length;
  const result = [];
  const queue = []; // Stores indices of negative numbers

  // 1. Process the FIRST window of size k
  for (let i = 0; i < k; i++) {
    if (arr[i] < 0) queue.push(i);
  }

  // Record result for the first window
  result.push(queue.length > 0 ? arr[queue[0]] : 0);

  // 2. Slide the window from index k to n-1
  for (let i = k; i < n; i++) {
    // REMOVE: Check if the element leaving the window (at index i - k) 
    // was our first negative
    if (queue.length > 0 && queue[0] === i - k) {
      queue.shift();
    }

    // ADD: Check the new element entering the window
    if (arr[i] < 0) {
      queue.push(i);
    }

    console.log(queue)
    // RECORD: The first negative in the current window is always at the front of the queue
    result.push(queue.length > 0 ? arr[queue[0]] : 0);
  }

  return result;
}

// Test
const arr = [12, -1, -7, 8, -15, 30, 16, 28];
const k = 3;
console.log(firstNegativeInWindow(arr, k)); // [-1, -1, -7, -15, -15, 0]

// If csn't use shift()
function firstNegativeOptimized(arr, k) {
  const n = arr.length;
  const result = [];
  const queue = [];
  let head = 0; // Pointer to the "front" of the queue

  // 1. INITIALIZATION: Process the first window
  for (let i = 0; i < k; i++) {
    if (arr[i] < 0) queue.push(i);
  }

  // Record result for the first window
  result.push(head < queue.length ? arr[queue[head]] : 0);

  // 2. SLIDING: Move window from k to n-1
  for (let i = k; i < n; i++) {
    // REMOVE: Increment head if the index at the front is now outside the window
    if (head < queue.length && queue[head] === i - k) {
      head++;
    }

    // ADD: Push new negative index
    if (arr[i] < 0) {
      queue.push(i);
    }

    // RECORD: Use head to access the "first" negative index efficiently
    result.push(head < queue.length ? arr[queue[head]] : 0);
  }

  return result;
}

// Example
const arr1 = [12, -1, -7, 8, -15, 30, 16, 28];
const k1= 3;
console.log(firstNegativeOptimized(arr1, k1)); // [-1, -1, -7, -15, -15, 0]