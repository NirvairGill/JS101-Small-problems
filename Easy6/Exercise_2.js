/* 
- split each string into array of characters
- map through the array and check every character
- if it is a consonant, double it
-- RegEx 
- otherwise return the original character
- join the array and return it. */

const doubleConsonants = str => {
  return str.split('').map(char => {
   return char.match(/[^aeiou0-9\W]/) ? char + char : char; 
  }).join('');
}


console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""