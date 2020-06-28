/* Input: array 
Output: string

algo:
- find the length of the argument
- multiply all the items and store the result in to a varaiable
 -- Use reduce method
- divide by length and convert it into three decimal places
- convert the result into string
- return the result
*/

function multiplicativeAverage(arr) {
  let length = arr.length;
  let multiplied = arr.reduce(((acc, val) => acc * val), 1);
  return String((multiplied/ length).toFixed(3));
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"