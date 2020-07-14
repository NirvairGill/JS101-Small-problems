/* 
Algo:
- first create an empty array
- loop through the argument and send all numbers from 1 to arg to the array
- use reduce() to sum the array and square the results
- Map through the array and square every element and reduce it and deduct it from the first
 */

const sumSquareDifference = num => {
  let arr = [];
  while(num > 0) {
    arr.push(num);
    num -= 1
  }
  let sumSquare = arr.reduce(((acc, val) => acc + val), 0)**2;
  let sumOfSquares = arr.map(ele => ele**2).reduce(((acc, val) => acc + val), 0)

  return sumSquare - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150