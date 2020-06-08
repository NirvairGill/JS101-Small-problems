const rlSync = require('readline-sync');

const num1= parseInt(rlSync.question('Enter the first number: \n'));
const num2 = parseInt(rlSync.question('Enter the second number: \n'))
console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${(num1 / num2).toFixed(2)}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);
console.log(`${num1} ** ${num2} = ${Math.pow(num1, num2)}`);


