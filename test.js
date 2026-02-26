// function frogjump(startposition, target, distance)
// {
//   let currentposition = startposition;
//   let count = 0;
//   while(currentposition<target)
//   {
//     currentposition+=distance;//30+
//     count ++;//2
//   }
//   return count;
// }
// console.log(frogjump(10,85,30));

// function solution(X, Y, D)
// {
//   //x- start
//   //y- target
//   //d- disptance

//    const distance = Y - X;
    
//     // If we are already at or past the target
//     if (distance <= 0) return 0;

//     // Use bitwise OR ( | 0) or Math.floor to get the integer part
//     let jumps = (distance / D) | 0; 
    
//     // If there is any remainder, we need one more jump
//     if (distance % D > 0) {
//         jumps++;
//     }

//     return jumps;
// }
// console.log(solution(10,85,30));


//insert at index 3
let arr = [1,2,3,4,5]; // 1,2,3,99,4,5
let index = 3; let element = 99;
//let left = 0;
for (let i = arr.length; i >index; i--) {
  arr[i] = arr[i-1];
}
arr[index] = element;

console.log(arr);