// So you have a set of numbers:
const numbers = [ 176, 181, 182, 199, 200, 201, 202, 203, 208, 
    210, 213, 214, 218, 223, 225, 226, 230, 231, 233, 235, 239, 243, 245, 246, 248, 269, 272, ];

// And you want to find the longest set of consecutive numbers within that set.
// One way to do that would be to split the array into chunks of consecutive numbers, 
// //and then find the longest of those chunks.

// So you'll need an array to store those chunks:
let chunks = [];

// And somewhere to store the last number we looked at:
let prev = 0;

// Then we can loop through our set and add each number to a chunk if it's consecutive (e.g. if it's exactly 1 greater than the previous number).
numbers.forEach((current) => {
  // To decide whether or not to create a new chunk, we compare the current number with the previous number. If the difference isn't exactly 1, then they're not consecutive, so we need to start a new chunk.
  if ( current - prev != 1 ) chunks.push([]);
  
  // Now we can add our number to the current chunk!
  chunks[chunks.length - 1].push(current);
  
  // And now we're moving to the next number, so the current number will become the previous number:
  prev = current;
});
console.log(chunks);
// Now we can sort the list of chunks by their length:
chunks.sort((a, b) => b.length - a.length);

// And finally, we can find our longest consecutive set of numbers by looking at the first chunk!
console.clear();
console.log('Longest consecutive set:', chunks[0]);
console.log('Size of longest consecutive set:', chunks[0].length);
//output - ongest consecutive set: [ 199, 200, 201, 202, 203 ]
//Size of longest consecutive set: 5
