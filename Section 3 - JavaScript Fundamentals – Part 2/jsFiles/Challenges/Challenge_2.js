//---- Second Challenge In Section 3 ----//

"use strict";
console.log("//---- Start Of Challenge_2 ----//");

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data below
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip 

Test data: 125, 555 and 44
*/

//1.

// console.log("//-- Start Of Simple Code --//");
//
// function calcTip(bill) {
// return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const testValue = 100;
// console.log(calcTip(testValue), `TestValue => ${testValue}`);
//
2;
//
// const bills = [125, 555, 44];
//
3;
//
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
//
4;
//
// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
//
// console.log(total);
// console.log("//-- End Of Simple Code --//");

//==================================================================================================================//
//Optimizing The Perviouse Code (The Problem Is That It Unstructured Commands -What Does This Mean- Watch && Catch)//
//================================================================================================================//
// debugger;
console.log("//-- Start Of Optimizied Code --//");

function calcBill(bills, tips, totals) {
  if (!Array.isArray(bills)) {
    return `Enter An Array Of bills!!`; // Don't Trust User
  } else {
    const calcTip = function (index) {
      let tip, bill;
      bill = bills[index];
      tip = bill * (bill >= 50 && bill <= 300 ? 0.15 : 0.2);

      totals.push(bill + tip);
      tips.push(tip);
      index++;
      return indexing(index);
    };

    function indexing(index) {
      if (bills.length === index) {
        return bills;
      } else {
        return calcTip(index);
      }
    }
    indexing(0);
    return [bills, tips];
  }
}

//---- You Can Use This If You Like Inetractivity ----//
// const bills = [
//   Number(prompt(`Enter Fist Bill`)),
//   Number(prompt(`Enter Second Bill`)),
// ];

const bills = [100, 125, 555, 44, 99.5, 587, 763, 1500];
const totals = [];
const tips = [];
console.log(calcBill(bills, tips, totals));
console.log(bills, "Bills");
console.log(tips, "Tips");
console.log(totals, "Totals");

console.log("//-- End Of Optimizied Code --//");
