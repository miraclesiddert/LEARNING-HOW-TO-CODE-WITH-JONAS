//---- LECTURE: LECTURE: Arrow Functions ----//

"use strict";
console.log(`//---- Start LECTURE: LECTURE: Arrow Functions ----//`);

/*
1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'
*/

const percentageOfWorld3 = (population) => (population / 7900000000) * 100;
const ChinaPop = 1441000000;
const NigeriaPop = 229408040;
const PalestinePop = 5500602;

console.log(
  percentageOfWorld3(ChinaPop),
  percentageOfWorld3(NigeriaPop),
  percentageOfWorld3(PalestinePop)
);

console.log(`//---- End LECTURE: LECTURE: Arrow Functions ----//`);
