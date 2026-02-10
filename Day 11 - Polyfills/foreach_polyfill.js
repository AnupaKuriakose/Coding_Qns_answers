const arr =[1,2,3,4,5];
arr.forEach(element => {
    console.log(element);
});//1,2,3,4

//inorder to make our method -myforeach available to all arays
//  we need to pass this to array constructor prototype
//prototype - property available top all objets in js

Array.prototype.myForEach = function(callback)
{
    for(let i=0; i<this.length; i++)
    {
        callback(this[i], i, arr); // this can just return current ele -> this[i] or can have 3 args ;ike original foreach
    }
}
arr.myForEach(element => {
    console.log(element);
})

