
// //


// let miracleAge = 21;
// console.log(miracleAge);

// console.log(typeof miracleAge);
// console.log(typeof true);

// //maths operators
// const now = 2024
// const ageMiracle = now - 2002;
// const AgeQueen = now - 2004;
// console.log(ageMiracle, AgeQueen);

// console.log(ageMiracle * 2, AgeQueen / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'miracle';
// const lastName = 'pininee';
// console.log(firstName + ' ' + lastName);


// //Assignments operators which make the re
// let x = 10 + 5; // 15
// x += 10; //x = x +10 = 25
// x *= 4; //x = x * 4 = 100
// x++; //x = x + 1 increase the value by one
// x--; //x = x - 1 decrease the value by one
// console.log(x);

//Comparison operators
// console.log(ageMiracle > AgeQueen);
// console.log(AgeQueen >= 18);

// const isFUllAge = AgeQueen >= 18;
// console.log(now - 2002 > now - 2004);

// let x , y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageMiracle + AgeQueen) / 2;
// console.log(ageMiracle, AgeQueen, averageAge);



// const year = 2024;
// const firstName = 'miracle';
// const job = 'teacher';
// const birthYear = '2002'
// const currentYear = '2024';

// const mimi = "I'm " + firstName + ', a ' + (birthYear - currentYear) + ' years old ' + job + '!.';
// console.log(mimi);

// const miracle = `I'm ${firstName}, a ${birthYear-currentYear} year old ${job}!.`;
// console.log(miracle);

// //STRING TEMPLATE LITERALS

// const miracleNew = `i'm ${firstName}, a ${year - birthYear} year old ${job}!`;
//  console.log(miracleNew);


// const firstName = 'miracle';
// const job = 'teacher';
// const birthYear = '2002'
// const currentYear = '2024';

// const mimi = "I'm " + firstName + ', a ' + (birthYear - currentYear) + ' years old ' + job + '!.';
// console.log(mimi);

// const miracle = `I'm ${firstName}, a ${birthYear-currentYear} year old ${job}!.`;
// console.log(miracle);


// console.log(`my name is string holder....just a regular string nothing much...`);

// console.log(`strings with \n\
// multiple\n\
// line`);

// console.log(`STRINGS
// multiple
// LINE`);





//A PROGRAM WITH CHECKS WEATHER A PERSON IS ALLOWED TO START TAKING A DRIVER'S LICENSE OR NOT AND
//IF SHE IS IT WILL PRINT THAT TO THE CONSOLE
//IF NOT IT WILL PRINT HOW MANY YEARS ARE LEFT
//UNTIL THE PERSON CAN START TAKINGTHE DRIVING LICENSE

/*this is called an if else control structure
if () {
    
} else {
    
}
*/

// const age = 13;

// if (age >= 18) {
//     console.log(`Sarah can start driving license 🚗🚗`);
// } else {

//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }


// // this code contain the century which a person is born if is 2015 then it will be the 21 century
// const birthyear = 1995;
// let century; //define it outside the code block and reassign it in the code block

// if (birthyear <= 2000) {
//     century = 20; // if it is here it will not work inside the code block

//     const yearLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearLeft} years :)`);
// }


// const birthyear = 1995;
// let century;

// if (birthyear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

//TYPE CONVERSION AND TYPE COERCION

// //TYPE CONVERSION
// const birthyear = '1995';
// console.log(birthyear + 22);
// console.log(Number(birthyear) + 22);
// console.log(Number(birthyear)); // this operation turn the string to a number Needs to start with a capital letter N
// console.log(String(23), 'years old'); // Must be capital S not s

// //TYPE COERCION
// console.log(" i'm a " + 23 + " years old developer");
// console.log('23' - '10' - 3);
// console.log('23' * '10');
// console.log('23' / '10');

// // =============  5 falsy valie : 0, '' , undefined, null, NaN.  ================

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('miracle'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// // JAVASCRIPT DO TYPE COERCION WHEN USING LOGICAL operation OR LOGICAL CONTEXT LIKE IF/ELSE STETAMENT
// const money = 0; //falsy value
// if (money) {
//     console.log(`Don't spend it all`);
// } else {
//     console.log(`You should get a job!`)
// }

// // how to test if something if define or not
// let height; //falsy value but if the heightis is assign a value 0 height = 0; still a falsy value
// if (height) {
//     console.log(`YAY! height is defined`);
// } else {
//     console.log(`height is UNDEFINED.`);
// }

// const age = 18;
// if (age === 18 ) console.log(`you just became an adult :D (strict)`);
// if (age == 18) console.log(`you just became an adult :D(loose)`);
// const favourite = Number(prompt(`what's your favourite number from 1 - 10 ?`));
// alert(favourite);
// console.log(fovourite);
// console.log(typeof favourite);

// if (favourite === 1) {//23 ===23
//     alert(`cool! 1 is an amazing number!`);
// } else if (favourite === 2) {
//     console.log(`1 is a cool number`);
// } else if (favourite === 3) {
//     alert(`cool! 3 is an amazing number!`);
// } else if (favourite === 4) {
//     alert(`cool! 4 is an amazing number!`);
// } else if (favourite === 5) {
//     alert(`cool! 5 is an amazing number!`);
// } else if (favourite === 6) {
//     alert(`cool! 6 is an amazing number!`);
// } else if (favourite === 7) {
//     alert(`cool! 7 is an amazing number!`);
// } else if (favourite === 8) {
//     alert(`cool! 8 is an amazing number!`);
// } else if (favourite === 9) {
//     alert(`cool! 9 is an amazing number!`);
// } else if (favourite === 10) {
//     alert(`cool! 10 is an amazing number!`);
// } else {
//     alert(`All Numbers Are Colll!`)
// }

// //different operators
// if (favourite !== 11) {
//     prompt(`so what is your foviourite number ?`)
// }

// const hasDriversLicense = true;//A
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);// AND Operator
// console.log(hasDriversLicense || hasGoodVision);//OR Operator
// console.log(!hasDriversLicense)// NOT Operator

// if (hasDriversLicense && hasGoodVision) {
//     console.log(`Miracle is abole to drive!`);
// } else {
//     console.log(`Someone else should drive...`);
// }

// const isTired = true; //c
// console.log(hasDriversLicense && hasGoodVision && isTired);//OR Operator


// // THIS CODE WILL ALLOWE MIRACLE TO DRIVE IF HE HAS A DRIVERS LICENSE, A GOOD VISION AND IF HE'S NOT isTired

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log(`Miracle is abole to drive!`);
// } else {
//     console.log(`Someone else should drive...`);
// }

// const day = 'Monday';

// switch (day) {
//     case 'monday' && 'Monday':// day ==='manday'
//         console.log(`Go to work by 7`);
//         console.log(`After work start coding`);
//         break;
//     case 'tuesday' && 'Tuesday':
//         console.log(`Watch theory videos before going to work`);
//         console.log(`go for center meeting by 5pm `);
//         break;
//     case 'wednesday' && 'Wednesday':
//     case 'thursday' && 'Thursday':
//         console.log(`wirte code Examples`)
//         break;
//     case 'friday' && 'Friday':
//         console.log('watch videos');
//         break;
//     case 'saturday' && 'Saturday':
//     case 'sunday' && 'Sunday':
//         console.log('Enjoy the week end :D');
//         break;
//     default:
//         console.log('Not a Valid Day!');
// } //swictch statemen was build for equality and not for comparing things


// const day = 'wednesday';

// if (day === 'monday') {
//     console.log(`Go to work by 7`);
//     console.log(`After work start coding`);
// } else if (day === 'tuesday') {
//     console.log(`Watch theory videos before going to work`);
//     console.log(`go for center meeting by 5pm `);
// } else if (day === 'wednesday' || 'Thursday') {
//     console.log(`wirte code Examples`)
// } else if (day === 'friday') {
//     console.log('watch videos');
// } else if (day === 'saturday') {
//     console.log('Enjoy the week end :D');
// }

// THE CONDITIONAL OPERATOR (IT ALLOWS US TO WHRITE EVERYTHING ALL IN ONE LINE )
// const age = 23;
// age >= 18 ? console.log('i like to drink wine 🍷') : console.log('i like to drink water 💧');
// //has three part the (the condition) (the if) and (the else part )
// const age = 18;
// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';//operators always produces a value 
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = 'wine 🍷'
// } else {
//     drink2 = 'water 💧'
// }

// console.log(drink2);
// console.log(`i want to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

