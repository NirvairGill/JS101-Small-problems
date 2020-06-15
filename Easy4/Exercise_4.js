/* Input: String
Output: Boolean

Algo:

- Compare the string to its reverse
 - split the string into an array by each character 
 - reverse the array and join back into string.

*/

function isPalindrome(str) {

  return str === str.split('').reverse().join('')
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true