/* Input: number
   Output: number String.
   Algorithm: break the number into individual numbers. Creat an array of those . use array.join() to retorn a string.
*/

const integerToString = num => {
 if (num === 0) return 0;
let arr = [];
while (num > 0) {
  arr.push(num % 10);
  num = Math.floor(num / 10);
}
return arr.reverse().join('');


}






console.log(integerToString(4321) === '4321') ;      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890));      // "1234567890"