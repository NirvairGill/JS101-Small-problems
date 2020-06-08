/* Input: the first two numbers: 1,1
each subsequent number is the sum of previous numbers
six iteration to find the 2-digit fibbonaci number
first index = 2

output: number

Algo
declare three variable and assign first two numbers and index
and a variable to store sum of two numbers.
create a loop and iterate until number length < argument
assign first number to second
second to the sum 
increment index by 1
return index
*/

function findFibonacciIndexByLength(num) {
  let firstNum = 1;
  let secondNum = 1;
  let index = 2;
  let thirdNum;

  while (String(thirdNum).length < num && (thirdNum < Number.MAX_SAFE_INTEGER)) {
    index += 1
    thirdNum = firstNum + secondNum
    firstNum = secondNum;
    secondNum = thirdNum;
    
  }
  return index;
}



console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(100));      // 74
