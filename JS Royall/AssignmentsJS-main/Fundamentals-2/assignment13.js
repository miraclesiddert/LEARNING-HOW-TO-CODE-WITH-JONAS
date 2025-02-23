'use strict';
//Function Declarations vs. Expressions

/*
1.The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which
 receives a population value, and returns the percentage of the world population that the given 
 population represents. For example, China has 1441 million people, so it's about 18.2% of the 
 world population.

2.To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

3.Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, 
and log them to the console.

4.Create a function expression which does the exact same thing, called percentageOfWolrd2, and also 
call it with 3 country populations (can be the same populations).
 */

function percentageOfWorld1(population){
    return Math.trunc((population/7900) * 100);
}

const percFinland = percentageOfWorld1(1441);
const percChina = percentageOfWorld1(3333);
const percFrance = percentageOfWorld1(2334);

console.log(percFinland, percChina, percFrance);

const percentageOfWorld2 = function (population){
    return Math.trunc((population/7900) * 100);
}

const percFinland1 = percentageOfWorld2(1441);
const percChina1 = percentageOfWorld2(3333);
const percFrance1 = percentageOfWorld2(2334);

console.log(percFinland1, percChina1, percFrance1);