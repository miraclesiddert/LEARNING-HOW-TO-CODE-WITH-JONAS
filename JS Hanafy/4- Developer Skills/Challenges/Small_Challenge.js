"use strict";
console.log(
  `%cThe Temperature Amplitude Function Started`,
  "color: blue; font-size: 20px;"
);
/*
PROBLEM_1:
  We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
*/

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

/*
Breaking the challenge into small sub-problems:
  1. How to ignore errors sensor ?
  2. How to calculate the temperature amplitude ?
    -- How to calculate the min value in an array
    -- How to calculate the max value in an array
  

*/

// 1.
function tempAmplitude(temperatures) {
  let min = 0,
    max = min;
  for (let index = 0; index < temperatures.length; index++) {
    const temperature = temperatures[index];
    if (typeof temperature != "number") {
      if (index === 0) min = max = temperature;
      continue;
    }
    //2.
    min = min > temperature ? temperature : min;
    max = max < temperature ? temperature : max;
  }
  return max - min;
}
console.log(
  `%c${tempAmplitude(temperatures)} %cFunction Core Made`,
  "color: yellow;",
  "color: green; font-size: 15px"
);

// Problem_2: Do The Same Algrothim Of Calculating With Two Arrays At The Same Time

//1. How to merge Two Arrays

const temperatures_2 = [
  "error",
  -5,
  "<script>alert(document.cookie);</script>", // some user trying get XSS vulnerability
  12,
  "error",
  -1,
  -16,
  65,
  "error",
]; // Jonas Algrothim Dosn't Work With this Becase The initiated value is 'error'
function tempAmplitudeNew(t1, t2) {
  for (let i = 0; i < t2.length; ++i) {
    t1.push(t2[i]);
  }
  return tempAmplitude(t1);
}
console.log(
  `%c${tempAmplitudeNew(
    temperatures,
    temperatures_2
  )} %cFunction Took Two Arrays Of Temps`,
  "color: yellow;",
  "color: green; font-size: 15px"
);
