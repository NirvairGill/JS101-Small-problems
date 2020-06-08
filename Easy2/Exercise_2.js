const rlSync = require('readline-sync');

const inputName = rlSync.question('What is your name? ');

console.log(inputName.endsWith('!') ? `HELLO ${inputName.slice(0, - 1).toUpperCase()}. WHY ARE WE SCREAMING?` : `Hello ${inputName}.`);
