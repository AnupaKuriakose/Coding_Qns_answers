//intersect two arrays without built in methods
let arrr = [1,2,3,6];
let arr1 = [5,6,3,7,8,9];
//find intersection of these two arr - common ele
//do not use any built in methods
let map = {};
let output = [];

arrr.forEach(x=> map[x] = true);
for(let item of arr1)
{
    if(map[item])
    {
        output[output.length] = item;
        map[item] = false;
    }
    
}
console.log(output)
//two pinter way if they dont allow map
let arrr1 = [1, 2, 3, 6];
let arr2 = [3, 5, 6, 7, 8, 9];

let i = 0; // Pointer for arrr
let j = 0; // Pointer for arr1
let output1 = [];

while (i < arrr1.length && j < arr2.length) {
    if (arrr1[i] === arr2[j]) {
        // Prevent duplicates in output if necessary
        if (output[output.length - 1] !== arrr1[i]) {
            output[output.length] = arrr1[i];
        }
        i++;
        j++;
    } else if (arrr1[i] < arr2[j]) {
        i++; // Move the pointer of the smaller element
    } else {
        j++;
    }
}

console.log(output); // [3, 6]
