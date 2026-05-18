//multiply two numbers without using multiply sign in JS
function multiply(a, b)
{
    let result = a;
    for(let i =0; i<b -1 ; i++)
    {
        result += a;
    }
    return result;
}


console.log(multiply(4,5));