const readline = require('readline-sync');

let currentAge = readline.question('What is your age? ');
let retirementAge = readline.question('At what age would you like to retire?');

let yearsToRetire = Number(retirementAge) - Number(currentAge);

let today = new Date();
let year = today.getFullYear();
console.log(`It's ${year}. You will retire in ${year + yearsToRetire}.`);
console.log(`You have only ${yearsToRetire} years of work to go!`);