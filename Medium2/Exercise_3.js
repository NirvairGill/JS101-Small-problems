/* 
- If the sum of all three arguments is 180 and no argument is === 0, if yes, return invalid.
- if all three arg are less than 90 degree return acute
- if one arg is 90 the right 
- if one arg > 120 return obtuse  
*/


const isValid = (...args) => {
  return [...args].includes(0) || [...args].reduce((acc, val) => acc + val) !== 180
}

const triangle = (...args) => {
  if(isValid(...args)) return 'invalid';

  if([...args].includes(90)) return 'right';

  if(Math.max(...args) > 90) return 'obtuse';

  return 'acute';
}


console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"