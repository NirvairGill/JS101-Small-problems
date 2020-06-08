const rlSync = require('readline-sync');
const inputNum = Number(rlSync.question('Please enter an integer greater than 0: '));
const sumProduct = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

let sum = 0;
for(let i = 1; i <= inputNum; i += 1) {
    sum += i;
}
let product = 1;
for (let j = 1; j <= inputNum; j += 1) {
  product *= j;
}

console.log(sumProduct === 's' ? `The sum of integers between 1 and ${inputNum} is ${sum}.` : `The product of integers between 1 and ${inputNum} is ${product}.`);
