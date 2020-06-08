/* Algorithm
return true if num is divisible by 4
return false if num is divisible by 4 and divisible by 100
returns true if num is divisible by 100 and 400 
*/


// 1st solution
const isLeapYear = (year) =>{
  return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)
}

// 2nd Approach:

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0; 
    
  };
}
 
// Further Exploration:

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }return false
    } 
    return true;
  }
  return false;
}


isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2400);      // true
isLeapYear(2100);      // false
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(400);       // true
isLeapYear(100);       // false








