"use strict";

console.log(
  `%cThe Section Challenge Started, Function printForecast() Started`,
  "color: blue; font-size: 20px;"
);

/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§Data 1: [17, 21, 23]
§Data 2: [12, 5, -5, 0, 4]
*/
/* Problem :
  1. How To Extract elements from the temps array with its place ?
  2. How to import the perviouse extracted values into a returned string.

*/

//1. We can solve this by loop and the place will be the index iterator + 1
function printForecast(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result +=
      arr.length !== i + 1
        ? `... ${arr[i]}ºC in ${i + 1} days `
        : `... ${arr[i]}ºC in ${i + 1} days ...`;
  }
  return result;
}
const data_1 = [17, 21, 23];
const data_2 = [12, 5, -5, 0, 4];

console.log(
  `%c${printForecast(data_1)} \n\ %c This Data_1`,
  "color: yellow;",
  "color: green; font-size: 15px"
);
console.log(
  `%c${printForecast(data_2)} \n\ %c This Data_2`,
  "color: yellow;",
  "color: green; font-size: 15px"
);
