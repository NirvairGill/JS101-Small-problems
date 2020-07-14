/* 
- Set a count varable to 0
- Iterate through the string and see if the character is alphabet
- if it is alphabet, add 1 to count. convert into needed case */


const staggeredCase1 = str => {
  return str.split('').map((char, index) =>  index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('');
}
const staggeredCase = (str, includeNonAlphabets = false) => {
  let count = 0;
  if (includeNonAlphabets) return staggeredCase1(str);

  return str.split('').map((char) => {
  if (/[a-z]/i.test(char)) {
      count += 1;
      return (count % 2 !== 0) ? char.toUpperCase() : char.toLowerCase();
    } else {
      isAlphabet = false;
      return char;
    }
  }).join('');
}



console.log(staggeredCase("I Love Launch School!", false) === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);