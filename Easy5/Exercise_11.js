/* Input: number
Output: string in 00:00 format

Algo:
-If number is greater than 1440, keep subtracting 1440 until it becomes equal to or less than 1440.
- If number is less than 0, keep adding 1440 until it becomes greater than 0;
- Divide the given number by 60 and truncate the digits before decimal point
- If digit is less than 10, prepend '0' to it.
- Apply modular operation to the number and pass through same function as digit
*/

const MINUTES_PER_DAY = 1440;
const MINUTES_PER_HOUR = 60;

const addZero = num => {
  return num < 10 ? '0' + num : num;
}

const checkNum = num => {
  if (num > MINUTES_PER_DAY) {
    while(num >= MINUTES_PER_DAY) {
      num -= MINUTES_PER_DAY;
    }
  } else if(num < 0) {
    while(num < 0) {
      num += MINUTES_PER_DAY;
    }
  } 

  return num;
}


const timeOfDay = num => {
  num = checkNum(num);
  let minutes = Math.trunc(num / MINUTES_PER_HOUR);
  let seconds = num % MINUTES_PER_HOUR;
  return `${addZero(minutes)}:${addZero(seconds)}`
}


console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");