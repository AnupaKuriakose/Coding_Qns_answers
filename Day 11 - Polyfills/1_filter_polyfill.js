const arr = [1,2,3,4];
const res = arr.filter(x=> x > 2);
//console.log(res)

Array.prototype.myFilter = function(callback) {
    let res =[];
 for(let i=0;i<this.length; i++)
  {
    if(callback(this[i]))
    {
        res.push(this[i]);
    }
  }
return res;
}
const arr1 = [1,2,3,4];
const res1 = arr1.myFilter(x=> x > 2);
console.log(res1)