//Given an array of size n, find the majority element
//A majority element appears more than n/2 times


function findMaj(arr) {
  let map = {};
  let limit = arr.length / 2;

  for (let el of arr) {
    map[el] = (map[el] || 0) + 1;

    if (map[el] > limit) {
      return el;
    }
  }
}
console.log(findMaj([3, 3, 4, 3, 2, 3, 3]
));