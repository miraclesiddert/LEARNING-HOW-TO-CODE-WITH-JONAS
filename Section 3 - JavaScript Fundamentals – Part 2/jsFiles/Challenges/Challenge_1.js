//---- First Challenge In Section 3 ----//

"use strict";
console.log("//---- Start Of Challenge_1 ----//");

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

const calcAverage = (match_1, match_2, match_3) =>
  Number((match_1 + match_2 + match_3) / 3);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins > 2 * avgKoalas)
    console.log(`Dolphins win (${avgDolphins + "vs." + avgKoalas})`);
  else if (avgKoalas > 2 * avgDolphins)
    console.log(`Koalas win (${avgKoalas + "vs." + avgDolphins})`);
  else console.log("No One Win... 😅");
};

//===== §Data 1§ =====//
/*
const dolphins_1 = 44;
const dolphins_2 = 23;
const dolphins_3 = 71;
const dolphinsAvg = calcAverage(dolphins_1, dolphins_2, dolphins_3);

const koalas_1 = 65;
const koalas_2 = 54;
const koalas_3 = 49;
const koalasAvg = calcAverage(koalas_1, koalas_2, koalas_3);
*/
//===== §Data 2§ =====//

const dolphins_1 = 85;
const dolphins_2 = 54;
const dolphins_3 = 41;
const dolphinsAvg = calcAverage(dolphins_1, dolphins_2, dolphins_3);

const koalas_1 = 23;
const koalas_2 = 34;
const koalas_3 = 27;
const koalasAvg = calcAverage(koalas_1, koalas_2, koalas_3);
checkWinner(dolphinsAvg, koalasAvg);
