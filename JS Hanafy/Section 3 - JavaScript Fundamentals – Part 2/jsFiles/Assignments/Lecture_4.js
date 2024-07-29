//---- LECTURE: Functions Calling Other Functions ----//

"use strict";
console.log("//---- LECTURE: Functions Calling Other Functions ----//");

/*
1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice
*/

const percentageOfWorld = (population) => (population / 7900000000) * 100;
const popCalc = function (population) {
  if (population >= 1000000000 && population <= 8000000000)
    return population / 1000000000 + " billion";
  else if (population >= 1000000 && population <= 999999999)
    return population / 1000000 + " million";
  else if (population >= 1000 && population <= 999999)
    return population / 1000 + " thousand";
  else return false;
};
const describePopulation = (country, population) =>
  `${country} has ${popCalc(
    population
  )} people,which is about ${percentageOfWorld(population)}% of the world.`;

const ChinaPop = 1441000000;
const NigeriaPop = 229408040;
const PalestinePop = 5500602;

console.log(describePopulation("China", ChinaPop));
console.log(describePopulation("Nigeria", NigeriaPop));
console.log(describePopulation("Palestine", PalestinePop));
