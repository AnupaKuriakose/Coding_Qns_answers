function mergeInPlace(arr1, arr2) {
  let n = arr2.length;
  let m = 0;

  // 1. Calculate 'm' manually if not given
  for (let i = arr1.length - 1; i >= 0; i--) {
    if (arr1[i] !== 0) {
      m = i; //store index direclty
      break;
    }
  }

  // 2. Set pointers
  let i = m; // Last real number in arr1
  let j = n - 1; // Last number in arr2
  let k = arr1.length - 1; // Very end of arr1

  // 3. Merge backwards
  while (j >= 0) {
    if (i >= 0 && arr1[i] > arr2[j]) {
      arr1[k] = arr1[i];
      k--;
      i--;
    } else {
      arr1[k] = arr2[j];
      k--;
      j--;
    }
  }
  return arr1;
}
console.log(mergeInPlace([1, 5, 8, 0, 0, 0], [2, 6, 9]));
//nums1 = [1, 5, 8, 0, 0, 0] and nums2 = [2, 6, 9].
//[ 1, 2, 5, 6, 8, 9 ]