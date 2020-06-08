/* Input : number
Output : string

create an empty string
loop through to argument
log number - index spaces and stars equal to index
*/



function triangle(range) {
  for (let index = 1; index <= range; index += 1) {
    console.log(' '.repeat(range - index) + '*'.repeat(index));
  }
}



triangle(5);

triangle(9);
