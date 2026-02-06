//find first repeating number in an array [1,2,3,4,2,4,1]// here 2 is the first repeating number in series
function firstRepeating(arr)
{
  let map = {};
  //loop through the array 
  for(let i=0; i< arr.length; i++)
  {
      //if map dont have that elemnet add it
    if(!map[arr[i]])
    { 
      map[arr[i]] = arr[i];
    }
    else{
        //if it is found then that  is the first repeated number
      return arr[i];
    }
    
  }
}
console.log(firstRepeating([1,2,3,4,2,4,5]));