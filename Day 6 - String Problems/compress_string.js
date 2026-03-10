//String Compression
// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.
//Example 1:
// Input: chars = ["a","a","b","b","c","c","c"]
// Output: 6
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

function stringCompression(str)
{
    let read = 0;
    let write = 0;
    let total  = str.length;

    while(read < total)
    {
        let count = 0;
        let char = str[read];
        while(str[read] === char)
        {
            read++;
            count++;
        }
        //read 1, count 2
        str[write] = char;
        write++;

        if(count > 1)
        {
            for(let digit of count.toString())
            {
                str[write] = digit;
                write++;
            }
        }
       
    }
     return str.slice(0, write);
}
console.log(stringCompression(["a","a","b","b","c","c","c"]))