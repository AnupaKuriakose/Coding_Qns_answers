//Return sorted squares.

//[-4,-1,0,3,10] → [0,1,9,16,100]

var sortedSquares = function(nums) {
    const n = nums.length;
    let result = new Array(n);
    let left = 0;
    let right = n - 1;
    
    // Fill result array from end to beginning
    for (let i = n - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[i] = nums[left] ** 2;
            left++;
        } else {
            result[i] = nums[right] ** 2;
            right--;
        }
    }
    return result;
};
console.log(sortedSquares([-4,-1,0,3,10])); // [0,1,9,16,100]