const isBalanced = str => {
  let noOfParanthsis = 0;
  for(let index = 0; index < str.length; index += 1) {
    if (str[index] === '(') {
      noOfParanthsis += 1;
    } else if (str[index] === ')') {
    noOfParanthsis -= 1;
  } if (noOfParanthsis < 0) return false
}
  return noOfParanthsis === 0
}








console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);