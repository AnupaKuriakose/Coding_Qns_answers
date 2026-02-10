function moveZeroes(arr) {
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] !== 0) {
      arr[left] = arr[right];
      left++;
    }
  }

  // fill remaining with zero
  while (left < arr.length) {
    arr[left] = 0;
    left++;
  }

  return arr;
}
