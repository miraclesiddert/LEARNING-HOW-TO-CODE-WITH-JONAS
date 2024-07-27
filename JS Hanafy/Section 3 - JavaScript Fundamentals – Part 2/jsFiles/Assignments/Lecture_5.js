//---- LECTURE: Introduction to Arrays ----//

"use strict";
console.log(`//---- LECTURE: Introduction to Arrays ----//`);

/*
1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values
*/

// 1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called 'populations'
const populations = [1441000000, 229408040, 5500602, 124000000];
// 2. Log to the console whether the array has 4 elements or not (true or false)
console.log(populations.length === 4 ? true : false);
// 3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values
const percentages = [
  percentageOfWorld(populations[0]),
  percentageOfWorld(populations[1]),
  percentageOfWorld(populations[2]),
  percentageOfWorld(populations[3]),
];
function percentageOfWorld(population) {
  return (population / 7900000000) * 100;
}
console.log(
  percentages,
  `This From Perviouse Version - Version That Destroy The Dry Principle -`
);
/*===============================================================================================================================//
**The Second Version Apply The Dry Principle Because It Make Loop To Output The Needed Array Percentages How? Cuz' What If I Asked You To Percentages For 30 Country Or More Would You Like To Repate Your Self Thirty Times !!**
//===============================================================================================================================*/
// Loop An Array With No Need Of Foreach Or For Built-in Functions
// debugger;
function percentageOfWorld2(EOA, populations, percentages) {
  percentages[EOA] = (populations[EOA] / 7900000000) * 100;
  EOA++;
  noForeach(populations, EOA, percentages);
}
// E => END, O => OF, A => Array (This var I'll plus it by one until it reach the end of the array -populations- ).
function noForeach(populations, EOA, percentages) {
  if (populations.length === EOA) {
    console.log(
      percentages,
      `This From Modern Version - Version That Apply The Dry Principle -`
    );
  } else {
    percentageOfWorld2(EOA, populations, percentages);
  }
}

noForeach(populations, 0, []);
