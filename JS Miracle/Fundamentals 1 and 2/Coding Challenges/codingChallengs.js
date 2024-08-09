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


/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 
*/


// // Test dolphins
// const dolphinsFirstScore = 96;
// const dolphinsSecondScore = 108;
// const dolphinsThirdScore = 89;

// //Test koalas
// const koalasFristScore = 88;
// const koalasSecondScore = 91;
// const koalasThirdScore = 110;

// // Calculating the average score for each team,
// const dolphineAverage = (dolphinsFirstScore + dolphinsSecondScore + dolphinsThirdScore) / 3;
// console.log(`Dolphins Average score is ${dolphineAverage}`);
// const koalasAverage = (koalasFristScore + koalasSecondScore + koalasThirdScore) / 3;
// console.log(`koalas Average score is ${koalasAverage}`);

// //Comparing the team's average scores to determine the winner of the competition
// if (dolphineAverage > koalasAverage) {
//     console.log(`The winner of the competition is Dolphins`);
// } else if (koalasAverage > dolphineAverage) {
//     console.log(`The winner of the competition is Dolphins`);
// } else {
//     console.log(`The Game was a draw no one won!`);
// }


// // Bonus 1

// // Test dolphins
// const dolphinsFirstScore = 97;
// const dolphinsSecondScore = 112;
// const dolphinsThirdScore = 101;

// //Test koalas
// const koalasFristScore = 109;
// const koalasSecondScore = 95;
// const koalasThirdScore = 106;

// // Calculating the average score for each team,
// const dolphineAverage = (dolphinsFirstScore + dolphinsSecondScore + dolphinsThirdScore) / 3;
// console.log(`Dolphins Average score is ${dolphineAverage}`);
// const koalasAverage = (koalasFristScore + koalasSecondScore + koalasThirdScore) / 3;
// console.log(`koalas Average score is ${koalasAverage}`);

// //Comparing the team's average scores to determine the winner of the competition
// if (dolphineAverage > koalasAverage && dolphineAverage === 100) {
//     console.log(`The winner of the competition is Dolphins`);
// } else if (koalasAverage > dolphineAverage && dolphineAverage ===100) {
//     console.log(`The winner of the competition is Dolphins`);
// } else {
//     console.log(`The Game was a draw no one won!`);
// }


/*
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 
*/

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(tip);
console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
 

