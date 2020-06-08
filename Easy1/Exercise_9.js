/* Algorithm
if year is less than or equal to 1752, then year % 4 === 0 is true;
else If it is divisble by 4 or 400 but !100
*/

const isLeapYear = year => {
   return year <= 1752 && year % 4 === 0  || year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}


isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true