'use strict';
//The while Loop
/*
1. Recreate the challenge from the lecture Looping Arrays, Breaking and Continuing, but this time using a while 
loop (call the array percentages3).

2. Reflect on what solution you like better for this task: the for loop or the while loop?
 */

const percentages3 = [];

let i = 0;
while (i < populations.length) {
  const percen = percentageOfWorld1(populations[i]);
  percentages3.push(percen);
  i++;
}

console.log(percentages3);