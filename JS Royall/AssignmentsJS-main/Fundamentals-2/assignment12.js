'use strict';
//Functions
/*
1. Write a function called describeCountry which takes three parameters: country, population and capitalCity. 
Based on this input, the function returns a string with this format: 'Finland has 6 million people and 
its capital city is Helsinki'.

2. Call this function 3 times, with input data for 3 different countries. Store the returned values 
in 3 different variables, and log them to the console.
 */

function describeCountry(country, population, capitalCity){
    return `${country} has ${population} million people
    and its capital city is ${capitalCity}`;
}

const finland = describeCountry('Finland', 6, 'Helsinki');
const unitedStates = describeCountry('United Sates', 33, 'Washington D.C');
const china = describeCountry('China', 300, 'Hong Kong');

console.log(finland);
console.log(unitedStates);
console.log(china);