let personal = {
    name: 'Anupa',
    printAge: function(age){
        console.log(`${this.name} is ${age} old`);
    }
}
personal.printAge(30);//now this print Anupa is 30 old

//now i wantto call
const fn = personal.printAge;
fn.call(personal, 25);
//suppose have another methiod - you want o reuse it for diff obj like
function printCity(lang)
{
  console.log(`${this.city} is the city where language is ${lang}`);
}
person2 = {
  city: 'Delhi'
}
//noe call using call
printCity.call(person2, 'hindi');

//niw mycall will be accessable to all instances of function
Function.prototype.mycall = function(obj = {}, ...args){ //obj - object passed, args - arguments
if(typeof this!== "function")
{
  throw new Error("not callable")
}
obj.fn= this;//adding a key fn to obj why- so that it can easily access
obj.fn(...args);
}
printCity.mycall(person2, 'hindi');
