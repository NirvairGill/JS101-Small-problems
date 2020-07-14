/* 
Input: Year(number)
Output: Number

Algo:
- Set counter = 0
- Set the date 13 for the given year
- Loop through all the months from 0 to 11 for the day
- Get day for each iteration, if friday count + 1
*/

const fridayThe13ths = year => {
  let index = 0;
  let counter = 0;
  while(index < 12) {
  const event = new Date(`${index} 13, ${year}`);
    index += 1
    if(event.getDay() === 5) counter += 1;
  }

  return counter;
}




console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2