/* 
input : array
output : array

Algo:
- create a variable and assign to the value 0;
- Map over the array using map and add current element to the total.
- map will */

function runningTotal(arr) {
  let total = 0;
  return arr.map(ele => (total += ele) )
}


console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []