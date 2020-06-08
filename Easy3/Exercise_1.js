//Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

// Input : String
// Output : new string

// create and empty array
// convert the string into array of characters
// Iterate through the array and compare each element to next one
// if it same, do nothing else push to the empty array
// join the array and output the results


// function crunch(str) {
//   let newStr = '';

// for(let index = 0; index < str.length - 1; index += 1) {
//   if (str[index + 1] !== str[index]) {
//     newStr += str[index];
//   }
// }
// return newStr;
// }

// with reduce 
function crunch(str) {
  return str.split('').reduce((acc,val) => {
    return acc.endsWith(val) ? acc : acc + val
  }, '');
}






console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""