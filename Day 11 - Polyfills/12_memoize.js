function memoize(fn)
{
     // Use a Map for a flexible cache that can handle various key types
  const cache = new Map();
  return function(...args)
  {
    const key = JSON.stringify(...args);
   if (cache.has(key)) {
      return cache.get(key); // Return the cached result
    }
    const result = fn.apply(this,args);
    cache.set(key, result);
     return result;
  }
 
}
function fibonocci(n)
{
    if(n<1) return n;
    return fibonocci(n-1) * fibonocci(n-2);
} 

const memozedFibonacci = memoize(fibonocci);
console.log(memozedFibonacci(5));