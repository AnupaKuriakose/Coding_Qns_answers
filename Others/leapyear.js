//JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));//true
console.log(leapyear(2000));//true
console.log(leapyear(1700));//false
console.log(leapyear(1800));//false
console.log(leapyear(100));
//false