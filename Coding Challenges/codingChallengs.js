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
// const markHeight = 1.88;
// const markMass = 95;

// //test data 2 for john
// const johnHeight = 1.76;
// const johnMass = 85;

// const BHIMark = markMass / markHeight ** 2;
// const BHIJohn = johnMass / (johnHeight * johnHeight);
// const markhigherBHI = BHIMark > BHIJohn;
// const johnHigherBMI = BHIJohn > BHIMark;
// console.log(markhigherBHI);
// console.log(johnHigherBMI);
// console.log(BHIMark, BHIJohn);


/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK � 
*/

 // step one solution
// if (BHIMark > BHIJohn) {
//     console.log(`Mark's BMI is higher than John's!`);
// } else {
//     console.log(`John's BMI is higher than Mark's!`);
// }

//step 2 solution
// const markBHI = markMass / markHeight;
// const johnBHI = johnMass / johnHeight;
// console.log(markhigherBHI, johnBHI); // just want to see how it look before implementing it in step two
// if (BHIMark > BHIJohn) {
//     console.log(`Mark's BMI (${markBHI}) is higher than John's!`);
// } else {
//     console.log(`John's BMI is higher than Mark's (${markBHI})!`);
// }

