/*
Algo:
Compare the string to its reverse
--convert into lower case
-- create an empty array
-- loop through the string. If alphanumeric char, push into empty arr
-- join arr  into string and compare with reverse of it.
 */

function isRealPalindrome(str) {
  str = str.toLowerCase();
  
  let arr = [];
  
  for(let index = 0; index < str.length; index += 1) {
    if(isAlphabet(str[index]) || isNumeric(str[index])) {
    arr.push(str[index]);
  }
}
  return arr.join('') === arr.reverse().join('');
}

function isAlphabet(char) {
  return char >= 'a' && char <= 'z';
}

function isNumeric(num) {
  return num >= '0' && num <= '9'
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));  