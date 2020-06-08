const asciiValue = str => {
  const strArr = str.split('').map(char => char.charCodeAt());
  return strArr.reduce(((acc, val) => acc + val),0);

}


asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0