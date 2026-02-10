// Given a  2D array, , an hourglass is a subset of values with indices falling in the following pattern:

// a b c  
//   d  
// e f g
// There are  hourglasses in a  array. The  is the sum of the values in an hourglass. Calculate the hourglass sum for every hourglass in , then print the  hourglass sum.

// Example


// -9 -9 -9  1 1 1 
//  0 -9  0  4 3 2
// -9 -9 -9  1 2 3
//  0  0  8  6 6 0
//  0  0  0 -2 0 0
//  0  0  1  2 4 0
// The  hourglass sums are:

// -63, -34, -9, 12, 
// -10,   0, 28, 23, 
// -27, -11, -2, 10, 
//   9,  17, 25, 18
// The highest hourglass sum is  from the hourglass beginning at row , column :

// 0 4 3
//   1
// 8 6 6

function hourglassSum(arr) {
    // Initialize with the smallest possible hourglass sum
    let maxSum = -Infinity; //or 
    //  // Calculate the very first hourglass sum (top-left)
    // let firstSum = arr[0][0] + arr[0][1] + arr[0][2] +
    //                arr[1][1] +
    //                arr[2][0] + arr[2][1] + arr[2][2];

    // let maxSum = firstSum; // Start with a real value from the array

    // Iterate through the possible top-left corners of the hourglasses
    for (let i = 0; i <= 3; i++) { //The Row Loop (i <= 3): An hourglass needs 3 rows (the current row i, plus i+1 and i+2). 
        for (let j = 0; j <= 3; j++) { //The Column Loop (j <= 3): Similarly, an hourglass is 3 columns wide (current column j, plus j+1 and j+2).
            // Calculate current hourglass sum
            let currentSum = 
                arr[i][j] + arr[i][j+1] + arr[i][j+2] + // Top row
                arr[i+1][j+1] +                         // Middle element
                arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]; // Bottom row

            // Update maxSum if currentSum is larger
            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
        }
    }
    return maxSum;
}
