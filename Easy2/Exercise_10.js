const stringToInteger = string => {
  const DIGITS = {
     
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  }
let stringArr = string.split('').map(str => DIGITS[str])
return stringArr.reverse().reduce((sum, val, idx) => sum + (val * 10 ** idx))
}
// Input: String prepending with - or +
// Output: Number prepending '-' if '-'in the number string. Otherwise number if + or no sign prepending.
// Algorithm: check the first element of array if - or + array.shift, Save the return and add to the result.
const stringToSignedInteger = str => {

  if (str.includes('-')) { 
    
    return -stringToInteger(str.slice(1));  
} else if (str.includes('+')) {
  return stringToInteger(str.slice(1))
} else 
   return stringToInteger(str);

}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true