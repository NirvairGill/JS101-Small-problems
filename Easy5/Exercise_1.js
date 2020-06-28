/* Input: floatong number
Output: string

algo:
- Extract the digits before decimal and append • to those
- Multiply the number after decimal with 60 and extract integer and apeend '
- Multipy the number after decimal from second step with 60 and append the " to product integer
- console.log the value
*/

function dms(num) {
  num = checkNumber(num);
  let degree = Math.floor(num) + '°';
  num = (num % 1) * 60
  let minutes = appendZero(Math.floor(num)) + "'";
  num = (num % 1) * 60;
  let seconds = appendZero(Math.floor(num)) + '"';

  return `${degree}${minutes}${seconds}`;

} 

function appendZero(num) {
  if (num < 10) {
    num = '0' + num;
  }
  return num;
}

function checkNumber(num) {
  if(num < 0) {
   while(num < 0) {
     num += 360;
   }
  } else if(num > 360) {
    num -= 360;
  }
   return num;
}


console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"