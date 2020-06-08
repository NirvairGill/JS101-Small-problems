const stringToInteger = str => 1 * str;
// Further Exploration
const hexadecimalToInteger = string => {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
  }


  let arr = string.toUpperCase().split('').map(str => DIGITS[str]);
  let value = 0;
  arr.forEach(num => value = (value * 16) + num)
return value;
        
}


    
console.log(hexadecimalToInteger('4D9f'))// === 19871); 

