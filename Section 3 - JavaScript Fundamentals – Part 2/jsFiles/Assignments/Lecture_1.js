//---- LECTURE: Functions ----//
"use strict";
console.log(`//---- LECTURE: Functions ----//`);
/*
LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console
*/

const country = String(prompt("Enter You Country Name.."));
const population = Number(prompt("Enter Your Country Population.."));
const capitalCity = String(prompt("Enter Your Capital City.."));

function describeCountry(country, population, capitalCity) {
  const population_r = popCalc(population); //_r for readable
  function popCalc(population) {
    if (population >= 1000000000 && population <= 8000000000)
      return population / 1000000000 + " billion";
    else if (population >= 1000000 && population <= 999999999)
      return population / 1000000 + " million";
    else if (population >= 1000 && population <= 999999)
      return population / 1000 + " thousand";
    else return false;
  }
  if (population_r)
    //#For '1.' Number One I/O -Input -output#
    // return `${country} has ${population_r} people and capital city is ${capitalCity}`;
    console.log(country, population_r, capitalCity);
  else
    console.log(
      `Not Vaild Number Cuz' It ${
        population > 9999999999 ? "Greater Than Normall" : "Lower Than Normall"
      }`
    );
}

describeCountry(country, population, capitalCity);
// describeCountry("Nigeria", "229408040", "Abuja");
// describeCountry("Palestine", "5500602", "القدس");
