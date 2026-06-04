//Given a pattern like "abcd" and a string like "axxxbbxxxccxd",
//  check if the characters of the pattern appear in the string in the same order (not necessarily contiguous).

//This logic uses a Two-Pointer Strategy to check if one string is a subsequence of another.
//  It scans both strings simultaneously from left to right to find a valid match.

function isPatternInstring(pattern, text) {
    if (pattern.length === 0) return true;
    let pointerPattern = 0;
    const patternLength = pattern.length;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === pattern[pointerPattern]) {
            pointerPattern++;
            //stop eraly if the entire pattern is matched
            if (pointerPattern === patternLength)
            {
                return true;
            }
        }
    }
 return pointerPattern === patternLength;
}

console.log(isPatternInstring("abcd", "axxxbbxxxccxd"));