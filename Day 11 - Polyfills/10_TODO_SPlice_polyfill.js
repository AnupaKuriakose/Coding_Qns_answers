// Implementing splice() (Mutating)
// Behavior:
// Modify the original array
// ✅ Remove deleteCount elements
// ✅ Insert new elements (optional)
// ✅ Return removed elements
// ✅ Handle negative index
// ✅ Handle out-of-bounds index

//synntax
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)

function mySplice(startIndex, deleteCount, ...items) {
  const removed = [];
  //normalize start index
  if (!startIndex) return this;

  if (start < 0) start = Math.max(len + start, 0);
  if (start > len) start = len;

  // Normalize deleteCount
  deleteCount = Math.min(deleteCount ?? len - start, len - start);

  // Collect removed items
  for (let i = 0; i < deleteCount; i++) {
    removed.push(arr[start + i]);
  }
  // Step 2: Store remaining tail
  const tail = [];
  for (let i = start + deleteCount; i < len; i++) {
    tail.push(arr[i]);
  }

  // Step 3: Resize array to insertion point
  arr.length = start;

  // Step 4: Insert new items
  for (let item of itemsToAdd) {
    arr.push(item);
  }

  // Step 5: Append tail back
  for (let item of tail) {
    arr.push(item);
  }

  return removed;
}

const arr1 = [1, 2, 3, 4];
console.log(arr1.splice(-2));
