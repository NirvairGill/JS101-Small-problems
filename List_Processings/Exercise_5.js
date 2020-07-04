const substringsAtStart = str => {
  let result = '';
  return str.split('').map(ele => result += ele);
}

const substrings = str => {
  return str.split('').map((_,ind) => substringsAtStart(str.slice(ind))).flat();
}



console.log(substrings('abcde'));

 // returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]