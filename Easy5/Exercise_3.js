/* Input: array
Output nested array

Algo:
- Round the length of half length to the bigger positive number
- divide array in two from 0 to half length and from half to full length
- return the result*/

function halvsies(arr) {
  let halfLength = Math.round(arr.length/2)
  return [(arr.slice(0, halfLength)), arr.slice(halfLength)]
}


console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]