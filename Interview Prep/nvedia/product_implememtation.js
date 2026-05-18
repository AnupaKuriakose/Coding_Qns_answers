
// Implement a product method which will return the product of two numbers
//  when invoked using any of the following two ways

// a) product(4, 5)

// b) product(4)(5)
function product(a, b) {
  if (b || b === 0) {
    return a * b;
  } else {
    return function (b) {
      return a * b;
    };
  }
}

console.log(product(3, 4));
console.log(product(3)(4));
