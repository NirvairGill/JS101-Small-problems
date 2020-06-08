let rlSync = require('readline-sync');

const billAmt = Number(rlSync.question('What is the bill?\n'));
const tipPercentage = Number(rlSync.question('What is the tip percentage?\n'));

const tipAmt = (billAmt * tipPercentage) / 100;
const totalAmt = billAmt + tipAmt;

console.log(`Your tip is ${tipAmt}.`);
console.log(`Your total is ${totalAmt}`);