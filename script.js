
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

const age = 13;

if (age >= 18) {
    console.log(`Sarah can start driving license 🚗🚗`);
} else {
    const yearLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearLeft} years :)`);
}


const birthyear = 1995;
let century;

if (birthyear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


