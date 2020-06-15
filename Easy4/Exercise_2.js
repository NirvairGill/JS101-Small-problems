/* Input: numbers 
output: String

Algorithm:
create an empty array
Prompt user for 5 numbers
push each number into empty array
log if array includes the value */

const readline = require('readline-sync');

let arr = [];
let firstNum = readline.question(`Enter the 1st number:`);
arr.push(firstNum);

let secondNum = readline.question(`Enter the 2nd number:`);
arr.push(secondNum);

let thirdNum = readline.question(`Enter the 3rd number:`);
arr.push(thirdNum);

let fourthNum = readline.question(`Enter the 4th number:`);
arr.push(fourthNum);

let fifthNum = readline.question(`Enter the 5th number:`);
arr.push(fifthNum);

let lastNum = readline.question(`Enter the last number:`);

if (arr.includes(lastNum)) {
  console.log(`The number ${lastNum} appears in ${arr}`)
} else {
  console.log(`The number ${lastNum} does not appear in ${arr}`)
}
