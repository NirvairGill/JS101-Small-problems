/* Input: Number
Output: Array of numbers

Algo: 
- create a new empty array
- Convert the number into string
- loop through the string and at every iteration push one character into empty array.
- return the array

*/

// const digitList = num => {
//   let arr = [];
//   let str = String(num);

//   for(let index = 0; index < str.length; index += 1) {
//     arr.push(Number(str[index]));
//   }

//   return arr;
// } 

//further explanation

const digitList = num => {
  let str = String(num).split('');

  return str.map(ele => parseInt(ele));
} 

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]