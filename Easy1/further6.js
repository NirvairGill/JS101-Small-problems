rlSync = require('readline-sync');

const inputNum = rlSync.question('Enter the numbers you would like to sum/muliply, separated by commas: ');
// convert input string into array of numbers
const inputArr = inputNum.split(',').map(num => parseInt(num))
const operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if (operation === 's') {

const sum = inputArr.reduce(((acc, value) => acc + value), 0);
console.log(`The sum of the integers ${inputArr} is ${sum}.`);
} else if (operation === 'p') {
const product = inputArr.reduce(((acc, value) => acc * value), 1);
console.log(`The product of the integers ${inputArr}  is ${product}.`);
} else {
  console.log('Wrong operation! Try again!');
}