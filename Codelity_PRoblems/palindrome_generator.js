//Palindrome Generator
//The goal is to generate a palindrome of length N using exactly K distinct lowercase letters. 
// Since palindromes are symmetrical,
// we only need to construct the first half (and middle character, if N is odd) and then mirror it.

function getPalindrome(N,K)
{
    //1.first craete a new array of same length
    let result = new Array(N);

    //now iterate through array and fill with K distinct characters
    for (let i = 0; i < N; i++) {
       result[i] = String.fromCharCode( 97 + (i % K));//i%K here get distict char
       //eg: n=5, k=3, i=0 , 0%3 = 0, 1%3=1, 2%3 = 2, 3%3=0, 4%3=1, 5%3=2
       //so i=0:char= 97+0, i=1:char=97+1, i=2: char=97+2.... so arrya will be [a,b,c,a,b] 
    }

    //Now we have array now we need to make palindrome. SO loop only half of the length 
    // //and other half will be reverse of it right and if it is odd number then since we have distinct 
    //elements already in array it will take that, see

    for(let i=0; i<Math.floor(N/2);i++)
    {
        result[N-1-i] = result[i]; //means from last element of array fill the value from first to make it palindrome
    }
    return result.join("")
}