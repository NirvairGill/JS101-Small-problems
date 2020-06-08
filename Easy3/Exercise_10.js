
function century(year) {
  let century = Math.floor(year/100) + 1;

    switch(true) {
      case (String(year).endsWith(00)):
       return (century - 1) + appendingStr(year/100);
      case (century <= 1):
       return (century) + appendingStr(century);
      case (century < 10 && century >= 1):
       return (century) +  appendingStr(century);
      case (century < 100 && century >= 10):
        return (century) + appendingStr(century);
      case (century < 1000 && century >= 100):
        return (century) + appendingStr(century);

  }

}

function appendingStr(century) {
  century = String(century)

  if (century.endsWith(1) && !century.endsWith(11)) {
    return 'st';
  } else if (century.endsWith(2) && !century.endsWith(12)) {
    return 'nd';
  } else if (century.endsWith(3) && !century.endsWith(13)) {
    return 'rd';
  } else {
    return 'th';
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
