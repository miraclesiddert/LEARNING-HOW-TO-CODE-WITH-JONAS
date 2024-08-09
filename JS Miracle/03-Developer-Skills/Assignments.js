/*LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters: 
'country', 'population' and 'capitalCity'. Based on this input, the 
function returns a string with this format: 'Finland has 6 million people and its 
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the 
returned values in 3 different variables, and log them to the consol 
*/

// function describeCountry(country, population, capitalCity) {
//     const nigeria = `${country} has ${population} million people and its capitalCity is ${capitalCity}!`;
//     return nigeria
// };

// const countryNigeria = describeCountry('nigeria', 33, 'portharcourt');
// const countryLagos = describeCountry('nigeria', 21, 'lagos');
// const countryAbuja = describeCountry('nigeria', 33, 'abuja');
// console.log(countryAbuja);
// console.log(countryLagos);
// console.log(countryNigeria);


/*
LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population 
represents. For example, China has 1441 million people, so it's about 18.2% of 
the world population
2. To calculate the percentage, divide the given 'population' value by 7900 
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, 
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called 
'percentageOfWorld2', and also call it with 3 country populations (can be 
the same populations)
*/

/*
// FUNCTION DECLARATION
function percentageOfWorld1(population) {
    const WorldPercentage = (population / 7900) * 100;
    const china = `China has ${population} million people, so is about ${WorldPercentage}% of the world population`;
    return china
}

console.log(percentageOfWorld1(1441));
*/

/*
//FUNCTION EXPRESSION
const percentageOfWorld2 = function (population) {
    const WorldPercentage = (population / 7900) * 100;
    const china = `China has ${population} million people, so is about ${WorldPercentage}% of the world population`;
    return china
}

console.log(percentageOfWorld2(1441));
*/

/*
LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called 
'percentageOfWorld3'
*/

/*
const percentageOfWorld3 = (population) => {
    const WorldPercentage = (population / 7900) * 100;
    const china = `China has ${population} million people, so is about ${WorldPercentage}% of the world population`;
    return china
}
console.log(percentageOfWorld3(1441));
*/


/*
LECTURE: Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you 
like the most. This function takes in two arguments: 'country' and 
'population', and returns a string like this: 'China has 1441 million people, 
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the 
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice
*/
/*
const countries = (country) => {
    return country
}

const percentageOfWorld3 = (country, population) => {
    country = countries(country);
    const WorldPercentage = (population / 7900) * 100;
    const china = `${country} has ${population} million people, so is about ${WorldPercentage}% of the world population`;
    return china
}
console.log(percentageOfWorld3('china', 1441));
*/
