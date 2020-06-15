/* 
Convert number to string
compare with its reverse using array */

function isPalindromicNumber(num) {
  let str = num.toString(8)
  console.log(str)
  return str === str.split('').reverse().join('');
}


console.log(isPalindromicNumber(034543));        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true