//Sort cn take compare function or without compare also
Array.prototype.newSort = function (compareFn) {
  // 1. Define default string-based comparison logic
  const defaultCompare = (a, b) => {
    const sA = String(a);
    const sB = String(b);
    return sA > sB ? 1 : (sA < sB ? -1 : 0);
  };

  // 2. Use the user's function OR the default
  const fn = typeof compareFn === 'function' ? compareFn : defaultCompare;

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      // 3. Use the function: if result > 0, swap
      if (fn(this[i], this[j]) > 0) {
        let temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
    }
  }
  return this;
};