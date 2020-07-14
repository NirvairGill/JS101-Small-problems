/* 
Algo:
- create an object with keys 'word' and value number
- Split the string into strings of words seprated by space
- Iterate through the string- if object includes word, replace it with corresponding value
- join the string and return it
 */

const wordToDigit = str => {
  let obj = { 
    one: 1,
    two: 2,
    three: 3, 
    four: 4, 
    five: 5, 
    six: 6, 
    seven: 7, 
    eight: 8, 
    nine : 9}

  return str.split(/\b/).map(word => Object.keys(obj).includes(word) ? obj[word] : word).join('');
}


console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."