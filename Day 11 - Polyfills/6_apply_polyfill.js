let personal = {
    name: 'Anu'
}
function printAge(age)
{
    console.log(`${this.name} is ${age} old`);
}

printAge.apply(personal, [30]);

Function.prototype.myapply = function(obj = {}, args){

  if(typeof this!=="function")
  {
    throw new Error('not callable')
  }
  if(!Array.isArray(args))
  {
    throw new Error('not array')
  }
  
    // 3. Assign the function (this) as a temporary method on the context object
    // Use a unique symbol or string to avoid overwriting existing properties
  obj.fn = this; //Or  const uniqueKey = Symbol('myApplyFn');context[uniqueKey] = this;
  obj.fn(...args);
}
printAge.myapply(personal, [67]);