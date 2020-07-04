/* Algo
- find all the possible substrings 
- if substring length is greater than >1, then split the string into array of characters
- compare the array to its reverse after joining array into string  */


const substringsAtStart = str => {
  let result = '';
  return str.split('').map(ele => result += ele);
}

const substrings = str => {
  return str.split('').map((_,ind) => substringsAtStart(str.slice(ind))).flat();
}

const palindromes = str => {
  return substrings(str).filter(ele => ele.length > 1).filter(ele => ele === ele.split('').reverse().join(''));
}


console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]
console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]