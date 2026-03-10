// Create function add

// const result = add(1)(2)

// console.log(result) // 3

// const result2 = add(1)(2)(3)…(n)

// console.log(result2) // n


function add(a){
 return function(b)
 {
    if(b)
    {
        return add(a+b)
    }
    return a;
 }
}
const result = add(1)(2)(3)();
console.log(result);