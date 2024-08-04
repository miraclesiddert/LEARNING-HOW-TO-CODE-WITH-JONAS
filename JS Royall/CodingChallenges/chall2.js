'use strict'
/* Fundamentals 1: CHALLENGE 2
Use the BMI example from Challenge #1, and the code you already wrote, 
and improve it:

1. Print a nice output to the console, telling the user who has the higher 
BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI 
values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI 
(29.1) is higher than Mark's (27)!".
Note: Don't round the BMI values. Leave them as they are. 
*/

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

const BMIMark = massMark/(heightMark * 2);
const BMIJohn = massJohn/(heightJohn * 2);
// console.log(BMIMark, BMIJohn); 
// let markHigherBMI = BMIMark >= BMIJohn;
// console.log(markHigherBMI);

//Test Data 2
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

console.log(BMIMark, BMIJohn);

if(BMIMark > BMIJohn){
    //console.log("Mark's BMI is higher than Johns!");
    //Template literal
    console.log(`Mark's BMI (${BMIMark}) is higher than Johns BMI (${BMIJohn})!`);
}else{
    //console.log("John's BMI is higher than Marks!");
    console.log(`John's BMI (${BMIJohn}) is higher than Marks BMI (${BMIMark})!`);
}
