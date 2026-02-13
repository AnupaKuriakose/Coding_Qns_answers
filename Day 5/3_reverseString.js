//Given a string, reverse it in place.
//Example:
 //Input: "hello"
// Output: "olleh"

//❌ The Naive Approach:
// Create  array and reverse it.This works, but it uses extra space.Can we do it without extra memory?


function reverse(str)
{
    let arr = str.split(""); // Convert string to a mutable array
   let left = 0;//two pinters - lefdt and right
   let right = arr.length - 1;

   while(left < right)//loop as long as left<right
   {
    [arr[left], arr[right]]= [arr[right], arr[left]];//swap elements oif array
    left++;
    right--;
   }
return arr.join("");
}
console.log(reverse("hello"));