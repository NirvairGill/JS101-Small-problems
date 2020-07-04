/* 
- slice the array into three parts starting from index 0 to array length
- add each array's elements
- then add all arrays sum */

const sumOfArray = arr => {
  return arr.reduce(((acc, val) => acc + val),0)
}

const sumOfSums = arr => {
  return arr.reduce((acc, _, ind) =>  acc += sumOfArray(arr.slice(0, ind + 1)), 0);
}

console.log(sumOfSums([4, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35