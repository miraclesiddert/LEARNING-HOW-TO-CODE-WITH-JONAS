/*

Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.
GOOD LUCK � 

*/

// //test data 1 for mark
// const markHeight = 1.69;
// const markMass = 78;

// //test data 1 for john
// const johnHeight = 1.95;
// const johnMass = 92;

//test data 2 for mark
const markHeight = 1.88;
const markMass = 95;

//test data 2 for john
const johnHeight = 1.76;
const johnMass = 85;

const BHIMark = markMass / markHeight ** 2;
const BNIJohn = johnMass / (johnHeight * johnHeight);
const markhigherBHI = BHIMark > BNIJohn;
const johnHigherBMI = BNIJohn > BHIMark;
console.log(markhigherBHI);
console.log(johnHigherBMI);
console.log(BHIMark, BNIJohn);