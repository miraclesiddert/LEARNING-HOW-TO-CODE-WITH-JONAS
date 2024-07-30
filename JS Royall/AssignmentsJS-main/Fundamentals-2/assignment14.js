'use strict';
//Arrow Functions
/*
1. Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.
 */

const percentageOfWorld3 = (population) => Math.trunc((population/7900) * 100);
const percFinland2 = percentageOfWorld3(1441);
const percChina2 = percentageOfWorld3(3333);
const percFrance2 = percentageOfWorld3(2334);

console.log(percFinland2, percChina2, percFrance2);