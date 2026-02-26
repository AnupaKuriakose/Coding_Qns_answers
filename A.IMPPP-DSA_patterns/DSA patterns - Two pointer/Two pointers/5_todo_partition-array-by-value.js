//(Everything < 5 is on the left, everything > 5 is on the right)
let arr = [10, 3, 8, 4, 2, 7]
let left = 0;

for(let right = 0; right<arr.length; right++)
{
    if(arr[right] >5) //>5
    {
        [arr[left],arr[right]] = [arr[right], arr[left]];
        left++;
    }
}

console.log(arr);

