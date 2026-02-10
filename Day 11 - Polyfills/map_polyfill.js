// const arr = [1,2,3,4];
// const res = arr.map((x)=> x*2);
//console.log(res);

/********* NOTE - DONOT USE ARROW FUNC BECOAUSE IT WONT BIND this keyword**/
Array.prototype.myMap = function(callback) {
    const res = [];
 for (let index = 0; index < this.length; index++) {
    res.push(callback(this[index], index, this));
 }
 return res;
}
const arr = [1,2,3,4];
const res1 = arr.myMap((x)=> x*3);
console.log(res1);
//make it accessbale to other arrays using prototype.
//its running callback fro each element so