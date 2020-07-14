/* 
- create an empty object
- Find the length of arg string and set it to 100
- find the count of the lowercase letters, uppercase letters and non-alphabets.
- divide each count by 100 and set the value to particluar key */


const letterPercentages = str => {
  let obj = {};

  obj['lowercase'] = String((((str.split('').filter(char => /[a-z]/.test(char)).length) * 100)/str.length).toFixed(2))
  obj['uppercase'] = String((((str.split('').filter(char => /[A-Z]/.test(char)).length) * 100)/str.length).toFixed(2))
  obj['neither'] = String((((str.split('').filter(char => /[^a-zA-Z]/.test(char)).length) * 100)/str.length).toFixed(2))

  return obj;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }