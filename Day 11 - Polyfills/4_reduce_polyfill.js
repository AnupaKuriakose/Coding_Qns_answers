const arr = [1,2,3,4];
const result = arr.reduce((acc, item)=>{
acc += item;
return acc;
},0);
//console.log(result);

Array.prototype.myReduce = function(callback, initalValue)
{
let acc = initalValue; //initialvalue present if only given
for (let i = 0; i < this.length; i++) {
   acc = acc ? callback(acc, this[i]): this[i];
}
return acc;
}
const result1 = arr.myReduce((acc, item)=>{
acc += item;
return acc;
},0);
console.log(result1);
// Why no thisArg?
// Unlike map or forEach, the native reduce method does not accept a thisArg. Its primary job is to pass the accumulator forward, which acts as the "state" for the function. If you need a specific context, you must use a closure or .bind(). 
