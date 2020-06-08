// further Exploration
let rlSync = require('readline-sync');
const lowerLimit = Number(rlSync.question('What is the starting number\n'));
const upperLimit = Number(rlSync.question('What is the starting number\n'));

for (let i = lowerLimit; i <= upperLimit; i += 1) {
 if (i % 2 === 0) {
   console.log(i);
 }
}
