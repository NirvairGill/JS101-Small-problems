const reoccurance = num => {
  let arr = String(num).split('')
  return arr.filter((char,index) => arr.indexOf(char) !== index).length === 0
}

const findClosestMultiple = num => {
  while(num % 7 !== 0 || num % 2 === 0) {
    num += 1;
  }
  return num;
}


const featured = num => {
  
for(let count = findClosestMultiple(num); count < 9876543202; count += 14) {
  if (reoccurance(count) && (count % 7 === 0)) {
    return count;
  }
}
return 'There is no possible number that fulfills those requirements.'
}





console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."