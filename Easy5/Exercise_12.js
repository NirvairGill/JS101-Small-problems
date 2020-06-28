/* Input: String
Output: Number

Algo:
- Seprate first two character from the string and last two and convert to numbers.
-After midnight:
-- first two numbers multiply by 60 plus minutes and \(cat\|dog\
-Before midnight:
-- Multiply first two numbers by 60 minus minutes
--if number % 1440 === 0 return 0
*/

const MINUTES_PER_DAY = 1440;
const MINUTES_PER_HOUR = 60;


const afterMidnight = str => {
  let hours = Number(str.slice(0, 2));
  let minutes = Number(str.slice(3, 5));

  let result = ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
  return result;
}

const beforeMidnight = str => {
  let hours = Number(str.slice(0, 2));
  let minutes = Number(str.slice(3, 5));

  let result = ((hours * MINUTES_PER_HOUR) - minutes) % MINUTES_PER_DAY;

  return result;
}


console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);