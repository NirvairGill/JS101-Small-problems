/* 
Algo:
- create a new array
- split the string into an array of word
- Iterate through the array
- for every word create a variable and store last + rest of the string + first word 
- push the word into new array
- join he array.
*/


function swap(str) {
  let words = str.split(' ');

  return words.map(word => {
    if(word.length === 1) return word;
    
    return word[word.length - 1] + word.slice(1, - 1) + word[0];
  }).join(' ');

}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"