//Binary Gap problem efficiently, we need to identify the longest sequence of zeros flanked by ones.

//binary gap 
//Given number N , fuind binary rep of this and then  find max sequence of zeros that is surroundede by 1
//if number 529 = 1000010001 -> 2 gaps - 4 and 3 return 4
//0,5 -> 5-0 = 5-1 = 4 > 0

//1111 => 0, 0000 => 0//edge cases

function binaryGap(N) {
    // Convert to binary string
    let binaryN = (N >>> 0).toString(2);
    let maxGap = 0;
    let lastOneIndex = -1;

    for (let i = 0; i < binaryN.length; i++) {
        if (binaryN[i] === '1') {
            // If we've seen a '1' before, calculate the gap
            if (lastOneIndex !== -1) {
                let currentGap = i - lastOneIndex - 1;
                maxGap = Math.max(maxGap, currentGap);
            }
            // Update the last seen '1' to current position
            lastOneIndex = i;
        }
    }

    return maxGap;
}