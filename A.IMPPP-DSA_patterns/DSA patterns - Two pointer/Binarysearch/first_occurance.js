// Find first occurrence of target
function findFirst(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            result = mid;
            right = mid - 1; // Continue searching left to get first occurance
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}
//find last 
function findLast(nums, target) {
    let left = 0, right = nums.length - 1;
    let result = -1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            result = mid;
            left = mid + 1; // ✅ Continue searching RIGHT for last occurrence
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}