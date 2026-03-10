
/*
Currying eg


function sum(a,b,c)
{
return a+b+c;
}
sum(a,b,c)

//instead you can have
function sum(a)
{
return function (b)
 { 
return function(b)
{
return a+b+c;
}
}
}

Now call
sum(1)(2)(3)

Now implement this currying generic solution
**/
function sum(a,b,c)
{
return a+b+c;
}
function curry(fn)
{
    return function curried(...args)
    {
        //if enough args -> call original function
        if(args.length >= fn.length) //its fn.length give args that are passed
        {
            return fn.apply(this,args);
        }
        //otherwise return a function taht collect more args
        return function(...nextArgs)
        {
            return curried.apply(this, [...args, ...nextArgs]);
        }
    }
}

const curriedFn = curry(sum);
console.log(curriedFn(1,2,3))
console.log(curriedFn(1)(2)(3))