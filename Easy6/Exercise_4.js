const centerOf = str => {
  let halfLength = str.length / 2;
  return str.length % 2 === 0 ? str.slice(halfLength - 1, halfLength + 1) : str[Math.floor(halfLength)];
}


console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"