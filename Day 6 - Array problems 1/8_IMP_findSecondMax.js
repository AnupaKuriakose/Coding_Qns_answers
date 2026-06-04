//Find max and second max from array
// initialize two variables, largest and secondLargest, to -Infinity. Loop through the array, 
//and if an element is larger than largest, update secondLargest to largest and largest to the element.
const arr = [5, 3, 9, 1, 9];
let max = -Infinity;
let secondMax = -Infinity;
for (let item of arr) {
  if (item > max) {
    secondMax = max;
    max = item;
  } else if (item > secondMax && item < max) secondMax = item;
}
console.log("max,maz", max);
console.log("secong", secondMax);

//METHOD 2
let a = [10, 20, 4, 45, 99, 99, 45];
let uni = [...new Set(a)];
uni.sort((a, b) => b - a);
let res = uni[1];
console.log('second max', res);
//method 3
let a1 = [10, 20, 4, 99, 99, 45];
let result = a1.reduce(
    (acc, num) => {
        if (num > acc[0]) {
            acc[1] = acc[0];
            acc[0] = num;
        } else if (num > acc[1] && num < acc[0]) {
            acc[1] = num;
        }
        return acc;
    },
    [-Infinity, -Infinity]
);
console.log(result[1]);

//method 4 - built in
