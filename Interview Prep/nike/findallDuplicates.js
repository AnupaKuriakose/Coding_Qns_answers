// // 442. Find All Duplicates in an Array
//LeetCode 442: Multiple numbers can be duplicated (each exactly twice). Goal: 
 //space by modifying the array (negative marking).
//Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer 
// appears at most twice, return an array of all the integers that appears twice.

// // You must write an algorithm that runs in O(n) time and uses only constant auxiliary space, excluding the space needed to store the output
// the Negative Marking approach is the industry standard for 
// Logic: Use the array itself as a hash table by flipping the value at the index 
// corresponding to the number to negative. 
// If you encounter a value that is already negative, you've found a duplicate. 

var findDuplicates = function(nums) {
    //Let's use nums = [2, 3, 2, 1]
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        // Map value to index 
        let index = Math.abs(nums[i]) - 1; //step1-index:0->2-1=1 after loop:[2,-3,2,1] : 
                                            // step2 -index:1->nums[i] = -3, 3-1 = 2 after loop:[2,-3,-2,1]
                                            //step3-index:2->nums[2] = -2, 2-1 = 1 after loop:[2,-3,-2,1]
                                           //step3-index:3->nums[3] = 1, 1-1 = 0 after loop:[-2,-3,-2,1]
        
         if (nums[index] < 0) { //nums[1] =2//nums[2]=2//nums[1] = -3//nums[0] =2
            // If already negative, it's a duplicate
            result.push(Math.abs(nums[i])); //[],[],[2]
        } else {
            // Mark as visited by flipping to negative
            nums[index] *= -1; //nums[1] = nums[1]*-1 = -2 : nums[2] = nums[2]*-1 = -2 : nums[0]=nums[0]*-1 = -2
        }
    }
    return result;
};