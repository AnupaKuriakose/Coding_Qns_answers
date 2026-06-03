// Create custom method for String

// const result = 'hello'.myCustomContat('world')
// console.log(result) // hello my world

// const result2 = 'I lost'.myCustomContat('phone')
// console.log(result2) // I lost my phone

String.prototype.myCustomConcat = function(...args) //...args always array
{
    return this.toString() + ' ' + args.join(' ');
}

const result2 = 'I lost'.myCustomConcat('phone')
console.log(result2) // I lost my phone