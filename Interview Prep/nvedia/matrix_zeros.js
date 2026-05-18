// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.
// Example 1:
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
//outer loop loop all elements of main array(i) then inner loop on each (j)
//if I find 0 at posttions like ij , if find 0, a[i+1][j] = 0, a[j+1][i] to 0
//there is a problem with this approach- If you set cells to 0 immediately as you find them, those NEW zeros will be detected in the next iterations and incorrectly trigger more zeroing.
//  You'll end up zeroing out the entire matrix.

// The fix — two pass approach:
// Don't modify the matrix while scanning. Instead:
// Pass 1 — just find and record where the zeros are
// Pass 2 — then do the zeroing
// Pass 1:
// - Loop through entire matrix
// - When you find a 0, record that row and column index
// - Store in a rows Set and cols Set

// Pass 2:
// - Loop through entire matrix again
// - If current row is in rows Set OR current col is in cols Set
// - Set that cell to 0
// Time: You have two passes through m×n cells → O(m×n)
// Two passes is still O(m×n) not O(2×m×n) — we drop constants in Big O
// Space: You created two Sets — one stores up to m rows, one stores up to n cols → O(m+n)
// Zero Matrix follow-ups:
// "What is time and space complexity?" — O(m×n) time, O(m+n) space for the Sets
// "Can you do it with O(1) space?" — yes, use first row and first column as markers instead of Sets. Much harder — don't worry about this unless they push
// "Why did you use Set instead of Array?" — avoids duplicates automatically
// "What if there are no zeros?" — Sets stay empty, second loop changes nothing, matrix unchanged. Handle gracefully.

function setZeros(matrix) {
  // We use Set not array because Set automatically ignores duplicates.
  //  If two cells in row 3 are zero, we only need to record row 3 once.
  //matrix = [[1,1,1],[1,0,1],[1,1,1]]
  const zeroRows = new Set();
  const zeroCols = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        zeroRows.add(i);
        zeroCols.add(j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (zeroRows.has(i) || zeroCols.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}
console.log(
  setZeros([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]),
);
