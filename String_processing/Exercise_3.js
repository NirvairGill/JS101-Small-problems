const letterCaseCount = str => {
  let obj = {};
  obj['lowercase'] = str.split('').filter(char => !!char.match(/[a-z]/g)).length;
  obj['uppercase'] = str.split('').filter(char => !!char.match(/[A-Z]/g)).length;
  obj['neither'] = str.split('').filter(char => !!char.match(/[^a-z]/gi)).length;
  return obj;
}



console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }