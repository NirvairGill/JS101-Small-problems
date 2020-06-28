/* Input: Array of digits
Output: A number

Algo:
- Initialize a variable and assign it to length of array
- Sum all elements and store the reult in a variable
- divide result with length and round it off
*/

const average = arr => {
  let length = arr.length;
  let sum = arr.reduce(((acc, val) => acc + val), 0);

  let average = sum / length;

  return Math.floor(average);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40