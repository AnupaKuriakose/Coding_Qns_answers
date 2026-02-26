//positive criteria - even numbers
let arr = [1,2,3,4,5];//2,4,1,3,5
let left = 0;

for(let right = 0; right<arr.length; right++)
{
    if(arr[right] % 2 === 0) //even
    {
        [arr[left],arr[right]] = [arr[right], arr[left]];
        left++;
    }
}

console.log(arr);
//READ STUDY notes at end
