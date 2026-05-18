
//A polyfill for Array.prototype.flat() can be implemented 
// using recursion to handle nested arrays up to a specified depth.
if (!Array.prototype.flat) {
  Array.prototype.myFlat = function(depth = 1) {
    const flattened = [];

    function flatten(arr, currentDepth) {
      for (const element of arr) {
        if (Array.isArray(element) && currentDepth > 0) {
          // Recursively call flatten for nested arrays, decrementing depth
          flatten(element, currentDepth - 1);
        } else {
          // Push non-array elements or elements at depth 0 to the result
          flattened.push(element);
        }
      }
    }

    // Handle Infinity depth by setting it to a large enough number
    const effectiveDepth = (depth === Infinity) ? Number.MAX_SAFE_INTEGER : depth;
    
    flatten(this, effectiveDepth);
    return flattened;
  };
}
//or
Array.prototype.myFlat = function(depth = 1) {
  const flattened = [];

  // Use forEach to automatically skip empty "holes" in the array
  this.forEach(element => {
    if (Array.isArray(element) && depth > 0) {
      // Recursively flatten and push results
      flattened.push(...element.myFlat(depth - 1));
    } else {
      flattened.push(element);
    }
  });

  return flattened;
};