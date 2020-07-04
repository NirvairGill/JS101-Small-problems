/* 
- split the string into an array  by each character
- Iterate over the array and for each element, concat the string with previous element 
- starting from the first element.
- return the result
 */

const substringsAtStart = str => {
  let result = '';
  return str.split('').map(ele => result += ele);
}


console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]