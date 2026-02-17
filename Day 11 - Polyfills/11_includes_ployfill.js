

console.log([1,2,3,4].includes(2));

Array.prototype.myincludes = function(value)
{
    for(let i=0; i<this.length;i++)
    {
        if(this[i] === value) return true;
    }
    return false;
}

console.log([1,2,4,5].myincludes(45))