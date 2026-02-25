
//A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.

// Count the minimal number of jumps that the small frog must perform to reach its target.

// given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

// For example, given:

//   X = 10
//   Y = 85
//   D = 30
// the function should return 3, because the frog will be positioned as follows:

// after the first jump, at position 10 + 30 = 40
// after the second jump, at position 10 + 30 + 30 = 70
// after the third jump, at position 10 + 30 + 30 + 30 = 100




function solution(X, Y, D)
{
  //x- start
  //y- target
  //d- disptance

   const distance = Y - X;
    
    // If we are already at or past the target
    if (distance <= 0) return 0;

    // Use bitwise OR ( | 0) or Math.floor to get the integer part
    let jumps = (distance / D) | 0; 
    
    // If there is any remainder, we need one more jump
    if (distance % D > 0) {
        jumps++;
    }

    return jumps;
}
console.log(solution(10,85,30));