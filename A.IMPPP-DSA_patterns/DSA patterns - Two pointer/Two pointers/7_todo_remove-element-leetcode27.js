//remove an element at index without using splice and its a sorted array
//input [1,2,3,4,5], remove 2 return [1,3,4,5]

let arr = [1,2,3,4,5];
let target = 2;
let left = 0;
for (let i = 0; i < arr.length; i++) {
  if(arr[i]!== target)
  {
    arr[left] = arr[i];
    left++;
  }
}
arr.length = left;
console.log(arr);

//if using splice
//  delete(value) {
//     const index = this.arr.indexOf(value);
//     if (index !== -1) {
//       // Removes exactly ONE occurrence
//       this.arr.splice(index, 1);
//       return true;
//     }
//     return false;
//   }