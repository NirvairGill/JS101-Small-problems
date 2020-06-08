/* 
Input : number
Output : string 

declare empty string
for loop upto the given argument, increment 1
inside loop every iteration if index is even add 1
if index is odd add 0
return str
*/

function stringy(num) {
  let output = '';
  for (let index = 0; index < num; index += 1) {
    index % 2 === 0 ? output += '1' : output += 0;
  }
  return output;
}





console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"