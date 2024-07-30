//Value and Variables
/*
1. Declare variables called 'country', 'continent' and 'population' and 
assign their values according to your own country (population in millions)
2. Log their values to the console
*/

// let country = "Nigeria";
// let continent = "Africa";
// console.log(country);
// console.log(continent);
// console.log(population);

// // Data Types
/*
1. Declare a variable called 'isIsland' and set its value according to your 
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console
*/


// let isLondon = false;
// let language;
// console.log(typeof isLondon);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// // Let Const and var
/*
1. Set the value of 'language' to the language spoken where you live (some 
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never 
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens
*/

// language = 'English';
// const country = 'Nigeria';
// const continent = 'Africa';
// const isLondon = 'false';
// // isLondon = true;

// Basic Operator
/*
1. If your country split in half, and each half would contain half the population,
    then how many people would live in each half ?
        2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million.Does your country have more people than
Finland ?
4. The average population of a country is 33 million people.Does your country 
have less people than the average country ?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million 
people speak portuguese
*/


// let population = 86;

// let population = 86;
// console.log(population /2);
// population++;
// console.log(population);
// console.log(population >= 6);
// console.log(population <= 33);
// let description = country + ' is in ' + continent + ", and it's " + population + " million people speak " + language;
// console.log(description);


 /* Strings and Template Literals
1. Recreate the 'description' variable from the last assignment, this time
using the template literal syntax
*/

// console.log(`${country} is in ${continent}, and it ${population} million people speak ${language}!`);

/*
Taking Decisions: if / else Statements
1. If your country's population is greater that 33 million, log a string like this to the 
console: 'Portugal's population is above average'. Otherwise, log a string like 
'Portugal's population is 22 million below average' (the 22 is the average of 33 
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to 
130. See the different results, and set the population back to origina
*/


// let population = 86;
// console.log(population / 2);
// population++;
// console.log(population);
// console.log(population >= 6);
// console.log(population <= 33);
// let description = country + ' is in ' + continent + ", and it's " + population + " million people speak " + language;
// console.log(description);


// /* Strings and Template Literals
// 1. Recreate the 'description' variable from the last assignment, this time
// using the template literal syntax
// */

// console.log(`${country} is in ${continent}, and it ${population} million people speak ${language}!`);

/*
 =============================================================    Type Conversion and Coercion     ===================================================
1. Predict the result of these 5 operations without executing them:
'9' - '5'; // 4
'19' - '13' + '17'; // 62
'19' - '13' + 17; //
'123' < 57; // true
5 + 6 + '4' + 9 - 4 - 2; //563
2. Execute the operations to check if you were right
*/

// '9' - '5'; // 4
// '19' - '13' + '17'; // 617
// '19' - '13' + 17; // 23
// '123' < 57; // false because the string is converted to a number first the compare them
// 5 + 6 + '4' + 9 - 4 - 2; // 1143

