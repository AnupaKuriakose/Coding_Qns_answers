//find multiple missing numbers in an unsorted array ranging from 1 to N
//eg: [1,8,5,6,3,2] find missing 4 ,7
function findMissingNumbers(arr) {
    const n = Math.max(...arr);
    const numSet = new Set(arr);
    const missing = [];

    for (let i = 1; i <= n; i++) {
        if (!numSet.has(i)) {
            missing.push(i);
        }
    }

    return missing;
}

const input = [1, 8, 5, 6, 3, 2];
console.log(findMissingNumbers(input)); // Output: [4, 7]